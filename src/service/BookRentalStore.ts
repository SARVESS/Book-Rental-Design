import { Customer } from "../model/customer";
import { BookType } from "../model/book";

export class BookRentalStore {
  static calculateCharges(customer: Customer): number {
    let totalCharges = 0;

    for (const book of customer.rentedBooks) {
      let firstTwoDayChargeForRegular: number = 1;
      let chargeAfterTwoDaysRegular: number = 1.5; 

      let chargePerDayFiction: number = 3;
      let chargePerDayNovel: number = 1.5;

      let bookCharges: number = 0;
      if(book.type === BookType.Regular) {
        if(book.rentedDays < 2) {
          bookCharges = 2;
        } else {
          bookCharges = (firstTwoDayChargeForRegular * 2) + (chargeAfterTwoDaysRegular * (book.rentedDays - 2));
        }
      } else if (book.type === BookType.Novel) {
         if(book.rentedDays < 3) {
            bookCharges = 4.5;
         } else {
            bookCharges = chargePerDayNovel * book.rentedDays;
         }
      } else {
        bookCharges = book.rentedDays * chargePerDayFiction;
      }

      totalCharges += bookCharges;
    }

    return totalCharges;
  }
}