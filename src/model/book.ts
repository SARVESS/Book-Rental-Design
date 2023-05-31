interface IBook {
    id: string;
    title: string;
    rentedDays: number;
}
  
export class Book implements IBook {
    constructor(public id: string, public title: string, public rentedDays: number) {}
}