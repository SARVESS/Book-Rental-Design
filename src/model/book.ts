export enum BookType {
    Regular = 'regular',
    Fiction = 'fiction',
    Novel = 'novel',
}

interface IBook {
    id: string;
    title: string;
    rentedDays: number;
    type: BookType;
}
  
export class Book implements IBook {
    constructor(public id: string, public title: string, public rentedDays: number, public type: BookType) {}
}