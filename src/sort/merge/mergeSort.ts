import numberArr_validator from "../../utils/validator/numberArr_validator";

export function mergeSort(arr: number[]): number[] {
  numberArr_validator(arr);

  const copyArr = arr.slice(); // Create a copy to avoid mutating the original array
  const res = mergeSortCore(copyArr);

  return res;
}

function mergeSortCore(arr: number[]) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSortCore(arr.slice(0, mid));
  const right = mergeSortCore(arr.slice(mid));

  return merge(left, right);
}

/**
 * Merge two sorted arrays into one sorted array
 */
function merge(arr: number[], arr2: number[]) {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr.length) {
    res.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

/**
 * 남은 요소를 삽입하는 두번째, 세번째 반복문은 js 메서드를 사용하면
 * return res.concat(arr.slice(i)).concat(arr2.slice(j));
 * 로 대체 가능함
 *
 * 하지만 concat과 slice는 새로운 배열을 생성하기 때문에 성능이 떨어질 수 있음.
 * 따라서 반복문을 사용하여 새로운 배열을 생성하지 않고 요소를 삽입하였음.
 * (뿐만 아니라 반복의 횟수도 줄어듦)
 */

// merge함수 간단 테스트 코드
// console.log(merge([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(merge([1, 3, 5], [2, 4])); // [1, 2, 3, 4, 5]
// console.log(merge([1, 3], [2, 4, 6])); // [1, 2, 3, 4, 6]
