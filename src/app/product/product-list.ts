import { Product } from "../product";

enum Status {
    Active = "Active",
    Canceled = "Canceled",
    InProgress = "In Progress"
}

export const productList: Product[] = [
    {
        id: 0,
        title: 'Milk',
        description: 'Eco milk, 0.5 liter',
        status: Status.Active,
        price: 25,
        rating: 5,
        createdDate: new Date('03/03/2022'),
        amount: 10,
    },
    {
        id: 1,
        title: 'Butter',
        description: '10% fat content, for cooking',
        status: Status.Canceled,
        price: 56,
        rating: 2.3,
        createdDate: new Date('03/04/2022'),
        amount: 22,
    },
    {
        id: 2,
        title: 'Water',
        description: 'Mineral water from Carpatian Mountain',
        status: Status.InProgress,
        price: 11,
        rating: 4.5,
        createdDate: new Date('2022-03-03'),
        amount: 110,
    },
    {
        id: 3,
        title: 'Snaks',
        description: 'Snaks with meat and chease',
        status: Status.Active,
        price: 30,
        rating: 4.6,
        createdDate: new Date('2022-03-03'),
        amount: 24,
    },
    {
        id: 4,
        title: 'Bread',
        description: 'Fresh and fragrant bread',
        status: Status.InProgress,
        price: 9,
        rating: 5,
        createdDate: new Date('2022-03-03'),
        amount: 7,
    },
]