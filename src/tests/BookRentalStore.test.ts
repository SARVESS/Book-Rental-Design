import { BookRentalStore } from "../service/BookRentalStore";
import { Book } from "../model/book";
import { Customer } from "../model/customer";

describe('BookRentalStore', () => {
  it('should calculate charges correctly for Story 1', () => {
    // Create a customer with rented books
    const customer = new Customer('1', 'John Doe', [
      new Book('1', 'Book 1', 3),
      new Book('2', 'Book 2', 2),
      new Book('3', 'Book 3', 4),
    ]);

    const charges = BookRentalStore.calculateCharges(customer);
    expect(charges).toEqual(9); // (3 + 2 + 4) * 1 = 9
  });
});