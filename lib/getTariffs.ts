export interface Tariff {
  id: number;
  tarif: string;
  price: number;
  oldPrice?: number;
  features: string[];
}

export const fetchTariffs = async (locale: string): Promise<Tariff[]> => {
  try {
    const res = await fetch(
      "https://gist.githubusercontent.com/tms-zngs/8717ed83ff5dc58b0571bc8c91d8c553/raw/a09e2fa095af2c801f85fece568d2a823e5fee0a/gistfile1.txt"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data[locale] || [];
  } catch (error) {
    console.error("Error fetching tariffs:", error);
    return [];
  }
};
