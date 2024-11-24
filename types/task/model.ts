export type Personal = {
    _id: string;
    name: string;
    position: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export type Task = {
    _id: string;
    title: string;
    description: string;
    priority: string;
    dueDate: string;
    status: string;
    assignedEmployees: Personal[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};
