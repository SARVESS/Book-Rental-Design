import { Book } from "./book";

interface ICustomer {
    id: string;
    name: string;
    rentedBooks: Book[];
  }
  
export class Customer implements ICustomer {
    constructor(public id: string, public name: string, public rentedBooks: Book[]) {}
}