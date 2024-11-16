
type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    __v: number;
}

// create type opportunity in Opportunity

export type Opportunity = {
    _id: string;
    name: string;
    stage: string;
    value: number;
    assignedTo: User;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

