import { Customer } from "../model/customer";
import { BookType } from "../model/book";

export class BookRentalStore {
  static calculateCharges(customer: Customer): number {
    let totalCharges = 0;

    for (const book of customer.rentedBooks) {
      let chargePerDay: number;

      switch (book.type) {
        case BookType.Regular:
          chargePerDay = 1.5;
          break;
        case BookType.Fiction:
          chargePerDay = 3;
          break;
        case BookType.Novel:
          chargePerDay = 1.5;
          break;
        default:
          throw new Error(`Invalid book type: ${book.type}`);
      }

      const bookCharges = book.rentedDays * chargePerDay;
      totalCharges += bookCharges;
    }

    return totalCharges;
  }
}