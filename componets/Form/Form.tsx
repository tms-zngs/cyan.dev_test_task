"use client";

export default function Form() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Форма отправлена!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-[500px] w-[19.81rem] relative"
    >
      {/* Верхняя часть с полями */}
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Ім'я"
          className="pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
        />
        <input
          type="text"
          placeholder="Нік Telegram"
          className="pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
        />
        <input
          type="email"
          placeholder="Email"
          className="pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
        />
      </div>

      {/* Кнопка снизу */}
      <button
        type="submit"
        className="mt-auto mb-[40px] rounded-[0.62rem] w-full h-[3.12rem] bg-white"
      >
        Відправити
      </button>
    </form>
  );
}
