import numberArr_validator from "../../utils/validator/numberArr_validator";

class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: ListNode | null = null;

  // 리스트의 끝에 새로운 노드를 추가
  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 리스트를 배열로 변환
  toArray(): number[] {
    const array: number[] = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

function sortedInsert(head: ListNode | null, newNode: ListNode): ListNode {
  if (!head || head.value >= newNode.value) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  while (current.next && current.next.value < newNode.value) {
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;

  return head;
}

export default function binaryInsertionSort(arr: number[]): number[] {
  numberArr_validator(arr);

  let linkedList = new LinkedList();

  // 배열의 모든 요소를 링크드 리스트에 추가
  for (let value of arr) {
    linkedList.append(value);
  }

  let sortedList = new LinkedList();
  let current = linkedList.head;

  // 링크드 리스트를 정렬된 링크드 리스트로 변환
  while (current) {
    let next = current.next;
    sortedList.head = sortedInsert(
      sortedList.head,
      new ListNode(current.value)
    );
    current = next;
  }

  // 정렬된 링크드 리스트를 배열로 변환하여 반환
  return sortedList.toArray();
}
