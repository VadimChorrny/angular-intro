enum Status {
    Active = "Active",
    Canceled = "Canceled",
    InProgress = "In Progress"
}

export interface Product {
    title: string;
    description: string;
    price: number;
    rating: number
    createdDate: Date;
    amount: number;
    status: Status;
}
