

type IletisimBilgileri = {
    adres: {
        sokak: string;
        sehir: string;
        posta_kodu: string;
        ulke: string;
    };
    sosyal_medya: {
        twitter?: string;
        linkedin?: string;
    };
    telefon: string;
    email: string;
};

type SirketBilgileri = {
    sirket_adresi: {
        sokak: string;
        sehir: string;
        posta_kodu: string;
        ulke: string;
    };
    sirket_adi: string;
    gorev: string;
};

type Segmentasyon = {
    musteri_segmenti: string;
    ilgi_alanlari: string[];
    sadakat_durumu: string;
};

type Iliskiler = {
    asama: string;
    notlar: string;
};

type PazarlamaIzinleri = {
    email_izni: boolean;
    sms_izni: boolean;
    tercih_edilen_kanal: string;
};

type SatinAlmaGecmisi = {
    siparis_id: string;
    urun: string;
    miktar: number;
    toplam_fiyat: number;
    tarih: string;
    _id: string;
};

export type Customer = {
    _id: string;
    ad: string;
    soyad: string;
    cinsiyet: string;
    dogum_tarihi: string;
    iletisim_bilgileri: IletisimBilgileri;
    sirket_bilgileri: SirketBilgileri;
    segmentasyon: Segmentasyon;
    iliskiler: Iliskiler;
    pazarlama_izinleri: PazarlamaIzinleri;
    satin_alma_gecmisi: SatinAlmaGecmisi[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};
