export type AdjacencyList = Record<string, string[]>;

export class Graph {
  adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1: string, v2: string): void {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1: string, v2: string): void {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex: string): void {
    while (this.adjacencyList[vertex].length) {
      const adjacent = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, adjacent);
    }
    delete this.adjacencyList[vertex];
  }
}

export default Graph;
