export interface Pakej {
    nama: string;
    harga: Harga;
    pros: string[];
    cons?: string[];
    link: string;
}

export interface Harga {
    "7 Hari": string;
    "14 Hari": string;
    "30 Hari": string;
}