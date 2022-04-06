
enum Status {
    Active = "Active",
    Canceled = "Canceled",
    InProgress = "In Progress"
}

export interface Product {
    id: number,
    title: string;
    description: string;
    price: number;
    rating: number
    createdDate: Date;
    amount: number;
    status: Status;
}
