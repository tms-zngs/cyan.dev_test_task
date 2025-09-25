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
      "https://gist.githubusercontent.com/tms-zngs/8717ed83ff5dc58b0571bc8c91d8c553/raw/e8dadc7a036a70652fc3db01435f8c5b3298cb97/gistfile1.txt"
    );
    const data = await res.json();
    return data[locale] || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
