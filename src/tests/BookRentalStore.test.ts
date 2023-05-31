import { BookRentalStore } from "../service/BookRentalStore";
import { Book, BookType } from "../model/book";
import { Customer } from "../model/customer";

describe('BookRentalStore', () => {
  it('should calculate charges correctly for Story 1', () => {
    // Create a customer with rented books
    const customer = new Customer('1', 'Sarvesh Sri', [
      new Book('1', 'Book 1', 3, BookType.Regular),
      new Book('2', 'Book 2', 2, BookType.Fiction),
      new Book('3', 'Book 3', 4, BookType.Novel),
    ]);

    const charges = BookRentalStore.calculateCharges(customer);
    expect(charges).toEqual(16.5); // (3 * 1.5 + 2 * 3 + 4 * 1.5) = 16.5
  });
});