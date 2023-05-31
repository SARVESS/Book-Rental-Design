import { Customer } from "../model/customer";

export class BookRentalStore {
    static calculateCharges(customer: Customer): number {
      const numberOfBooks = customer.rentedBooks.length;
      const totalDaysRented = customer.rentedBooks.reduce((total, book) => total + book.rentedDays, 0);
      const totalCharges = totalDaysRented * 1; // Assuming the per day charge is Rs 1
      return totalCharges;
    }
}