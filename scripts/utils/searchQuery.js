import { products } from "../products.js";

export function searchItem(searchWord) {
    // Convert the search word to lowercase for case-insensitive comparison
    const lowerCaseSearchWord = searchWord.toLowerCase();

    // Filter products that have matching keywords (case-insensitive)
    const queryItem = products.filter((product) => {
        return product.keywords.some((keyword) =>
            keyword.toLowerCase().includes(lowerCaseSearchWord)
        );
    });

    return queryItem; // Return the filtered products
}

