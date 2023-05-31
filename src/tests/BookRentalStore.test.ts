import { BookRentalStore } from "../service/BookRentalStore";
import { Book, BookType } from "../model/book";
import { Customer } from "../model/customer";

describe('BookRentalStore', () => {
    it('should calculate charges correctly for Story 3', () => {
      // Create a customer with rented books of different types and rented days
      const customer = new Customer('1', 'Sarvesh Sri', [
        new Book('1', 'Book 1', 1, BookType.Regular),
        new Book('2', 'Book 2', 2, BookType.Regular),
        new Book('3', 'Book 3', 3, BookType.Regular), 
        new Book('4', 'Book 4', 1, BookType.Novel),
        new Book('5', 'Book 5', 2, BookType.Novel),
      ]);
  
      const charges = BookRentalStore.calculateCharges(customer);
      expect(charges).toEqual(16.5); // (2 + 2 + 3.5 + 4.5 + 4.5) = 16.5
    });
  });