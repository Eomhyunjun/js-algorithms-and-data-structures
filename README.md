# js-algorithms-and-data-structures

### Sorting Algorithm

| name                               |                         |                                    |
| ---------------------------------- | ----------------------- | ---------------------------------- |
| [bubble](./src/sort/bubble/)       | **bubbleSort**          | normal ver                         |
|                                    | **bubbleSort_desc**     | Iterates from the end              |
|                                    | **bubbleSort_opt**      | Optimized to skip sorted sections  |
| [selection](./src/sort/selection/) | **selectionSort**       | normal ver                         |
| [insertion](./src/sort/insertion/) | **insertionSort**       | normal ver                         |
|                                    | **binaryInsertionSort** | + (binarySearch & Linked list) ver |
| [merge](./src/sort/merge/)         | **mergeSort**           | normal ver                         |
| [quick](./src/sort/quick/)         | **quickSort**           | normal ver                         |
| [radix](./src/sort/radix/)         | **radixSort**           | normal ver                         |

### Search

| name                                 |                  |                                            |
| ------------------------------------ | ---------------- | ------------------------------------------ |
| [binary](./src/search/binarySearch/) | **binarySearch** | Finds the index of the target in the array |
| [string](./src/search/stringSearch/) | **stringSearch** | Searches for a substring within a string   |

### Utils

| name                              |                      |                                                                    |
| --------------------------------- | -------------------- | ------------------------------------------------------------------ |
| [swap](./src/utils/swap/)         | **swap**             | Swaps two elements using a temp variable                           |
|                                   | **swap_destruct**    | Swaps two elements using Destructuring assignment (ES2015)         |
|                                   | **swap_xor**         | Swaps two elements using XOR operation without using extra space   |
| [getDigit](./src/utils/getDigit/) | **getDigit**         | Extracts a digit using mathematical operations                     |
|                                   | **getDigitByString** | Extracts a digit by converting the number to a string and indexing |
|                                   | **getDigitByat**     | Extracts a digit using string conversion and the at() method       |

<br>

## How to Run the Tests

1. **Install dependencies:**

```bash
npm install
```

2. **Run the tests:**

```bash
npm test
```
