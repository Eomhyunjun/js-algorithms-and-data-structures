export default function swap(arr: number[], idx1: number, idx2: number): void {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
