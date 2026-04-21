import type { Graph } from "../Graph";

export function dfsRecursive(graph: Graph, start: string): string[] {
  if (!(start in graph.adjacencyList)) return [];

  const result: string[] = [];
  const visited: Record<string, boolean> = {};
  const adjacencyList = graph.adjacencyList;

  (function dfs(vertex: string) {
    if (!vertex) return;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) dfs(neighbor);
    });
  })(start);

  return result;
}

export default dfsRecursive;
