export type Personal = {
    name: String;
    position: String;
    phone: string;
    businessId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Business = {
    name: string;
    address: string;
    phone: string;
    // satin_alma_gecmisi: Personal[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};
