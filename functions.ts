export function fizzbuzz(n: number): string {
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return "Exception";
  }
}

export function findElement(array: string[], element: string): boolean {
  return array.find((arr) => arr === element) !== undefined;
}

type Item = {
  name: string;
  price: number;
  rating: number;
  category: string;
};

type FilterOptions = {
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  categories?: string[];
};

export function filterAndSortItems(
  items: Item[],
  options: FilterOptions
): Item[] {
  const filteredItems = items.filter((item) => {
    const isWithinPriceRange =
      (options.minPrice === undefined || item.price >= options.minPrice) &&
      (options.maxPrice === undefined || item.price <= options.maxPrice);

    const isAboveMinRating =
      options.minRating === undefined || item.rating >= options.minRating;

    const isInCategory =
      options.categories === undefined ||
      options.categories.includes(item.category);
    return isWithinPriceRange && isAboveMinRating && isInCategory;
  });

  // まず評価が高いアイテム。
  // 評価が同じ場合は、価格が低いアイテムが前に来ます。
  const sortedItems = filteredItems.sort((a, b) => {
    const priceDifference = a.price - b.price;
    const ratingDifference = b.rating - a.rating;

    if (ratingDifference !== 0) return ratingDifference;
    return priceDifference;
  });

  return sortedItems;
}
