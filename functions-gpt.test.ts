// jestで動くテストを書いて by Chat-GPT 4o

import { fizzbuzz } from "./functions";

describe("fizzbuzz", () => {
  test('should return "FizzBuzz" for multiples of 15', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  test('should return "Fizz" for multiples of 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  test('should return "Buzz" for multiples of 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  test('should return "Exception" for non-multiples of 3 and 5', () => {
    expect(fizzbuzz(1)).toBe("Exception");
    expect(fizzbuzz(2)).toBe("Exception");
    expect(fizzbuzz(4)).toBe("Exception");
  });
});

// Chat GPT  による解答例(4oじゃない、無料のやつ)

import { findElement } from "./functions"; // 正しいパスを指定してください

describe("findElement", () => {
  test("should return true when the element exists in the array", () => {
    const array = ["apple", "banana", "orange"];
    expect(findElement(array, "banana")).toBe(true);
    expect(findElement(array, "apple")).toBe(true);
  });

  test("should return false when the element does not exist in the array", () => {
    const array = ["apple", "banana", "orange"];
    expect(findElement(array, "grape")).toBe(false);
    expect(findElement(array, "kiwi")).toBe(false);
  });

  test("should return false for an empty array", () => {
    const array: string[] = [];
    expect(findElement(array, "anything")).toBe(false);
  });

  test("should return true for the same element reference", () => {
    const element = "apple";
    const array = [element, "banana"];
    expect(findElement(array, element)).toBe(true);
  });
});

import { filterAndSortItems } from "./functions"; // 正しいパスを指定してください

describe("filterAndSortItems", () => {
  const items = [
    { name: "Item A", price: 100, rating: 4.5, category: "Electronics" },
    { name: "Item B", price: 200, rating: 4.0, category: "Books" },
    { name: "Item C", price: 150, rating: 3.5, category: "Electronics" },
    { name: "Item D", price: 50, rating: 5.0, category: "Books" },
    { name: "Item E", price: 75, rating: 4.8, category: "Toys" },
  ];

  test("should filter items by price range", () => {
    const options = { minPrice: 100, maxPrice: 150 };
    const result = filterAndSortItems(items, options);
    expect(result).toEqual([
      { name: "Item A", price: 100, rating: 4.5, category: "Electronics" },
      { name: "Item C", price: 150, rating: 3.5, category: "Electronics" },
    ]);
  });

  test("should filter items by minimum rating", () => {
    const options = { minRating: 4.0 };
    const result = filterAndSortItems(items, options);
    expect(result).toEqual([
      { name: "Item D", price: 50, rating: 5.0, category: "Books" },
      { name: "Item E", price: 75, rating: 4.8, category: "Toys" },
      { name: "Item A", price: 100, rating: 4.5, category: "Electronics" },
      { name: "Item B", price: 200, rating: 4.0, category: "Books" },
    ]);
  });

  test("should filter items by category", () => {
    const options = { categories: ["Books"] };
    const result = filterAndSortItems(items, options);
    expect(result).toEqual([
      { name: "Item D", price: 50, rating: 5.0, category: "Books" },
      { name: "Item B", price: 200, rating: 4.0, category: "Books" },
    ]);
  });

  test("should filter and sort items by price and rating", () => {
    const options = { minPrice: 50, minRating: 4.0 };
    const result = filterAndSortItems(items, options);
    expect(result).toEqual([
      { name: "Item D", price: 50, rating: 5.0, category: "Books" },
      { name: "Item E", price: 75, rating: 4.8, category: "Toys" },
      { name: "Item A", price: 100, rating: 4.5, category: "Electronics" },
      { name: "Item B", price: 200, rating: 4.0, category: "Books" },
    ]);
  });

  test("should return all items if no filters are applied", () => {
    // これはダメな回答(Item Cが一番下に来るはず)
    const options = {};
    const result = filterAndSortItems(items, options);
    expect(result).toEqual([
      { name: "Item D", price: 50, rating: 5.0, category: "Books" },
      { name: "Item E", price: 75, rating: 4.8, category: "Toys" },
      { name: "Item A", price: 100, rating: 4.5, category: "Electronics" },
      { name: "Item C", price: 150, rating: 3.5, category: "Electronics" },
      { name: "Item B", price: 200, rating: 4.0, category: "Books" },
    ]);
  });
});
