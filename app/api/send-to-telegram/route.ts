import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(request: NextRequest) {
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;
  if (!botToken || !chatId) {
    console.error(
      "BOT_TOKEN or CHAT_ID is missing from environment variables."
    );
    return NextResponse.json(
      { error: "Отсутствуют переменные окружения BOT_TOKEN или CHAT_ID." },
      { status: 500 }
    );
  }

  try {
    const { name, tg, email } = await request.json();

    if (!name || !tg || !email) {
      return NextResponse.json(
        { error: "Не все поля формы заполнены." },
        { status: 400 }
      );
    }
    const messageText = `
      Нова заявка на покупку!
      ---------------------------------
      Name: ${name}
      Telegram: ${tg}
      Email: ${email}
      `;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: messageText,
    });

    if (response.status === 200) {
      return NextResponse.json(
        { message: "Сообщение успешно отправлено!" },
        { status: 200 }
      );
    } else {
      console.error("Ошибка при отправке в Telegram:", response.data);
      return NextResponse.json(
        { error: "Ошибка Telegram API", details: response.data },
        { status: 500 }
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error(
        "Ошибка при отправке в Telegram. Статус:",
        axiosError.response?.status,
        "Данные:",
        axiosError.response?.data
      );
      return NextResponse.json(
        {
          error: "Ошибка при отправке сообщения в Telegram.",
          details: axiosError.response?.data || axiosError.message,
        },
        { status: axiosError.response?.status || 500 }
      );
    }
    console.error("Сетевая ошибка при отправке в Telegram:", error);
    return NextResponse.json(
      { error: "Сетевая ошибка при отправке сообщения." },
      { status: 500 }
    );
  }
}
