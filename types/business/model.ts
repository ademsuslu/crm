export type Personal = {
    _id: string;
    name: string;
    position: string;
    phone: string;
    businessId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Business = {
    _id: string;
    name: string;
    address: string;
    phone: string;
    employees: Personal[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};
