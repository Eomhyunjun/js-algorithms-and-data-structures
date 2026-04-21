import { describe, expect, test, beforeEach } from "@jest/globals";
import { Graph } from "./Graph";

describe("Graph", () => {
  let g: Graph;

  beforeEach(() => {
    g = new Graph();
  });

  describe("addVertex", () => {
    test("creates empty adjacency list for new vertex", () => {
      g.addVertex("A");
      expect(g.adjacencyList).toEqual({ A: [] });
    });

    test("does not overwrite existing vertex", () => {
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A", "B");
      g.addVertex("A"); // 재호출
      expect(g.adjacencyList.A).toEqual(["B"]);
    });
  });

  describe("addEdge", () => {
    test("adds undirected edge between two vertices", () => {
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A", "B");
      expect(g.adjacencyList.A).toEqual(["B"]);
      expect(g.adjacencyList.B).toEqual(["A"]);
    });
  });

  describe("removeEdge", () => {
    test("removes edge from both vertices", () => {
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A", "B");
      g.removeEdge("A", "B");
      expect(g.adjacencyList.A).toEqual([]);
      expect(g.adjacencyList.B).toEqual([]);
    });
  });

  describe("removeVertex", () => {
    test("removes vertex and all its edges", () => {
      ["A", "B", "C", "D"].forEach((v) => g.addVertex(v));
      g.addEdge("A", "B");
      g.addEdge("A", "C");
      g.addEdge("B", "D");

      g.removeVertex("A");

      expect(g.adjacencyList).not.toHaveProperty("A");
      expect(g.adjacencyList.B).toEqual(["D"]);
      expect(g.adjacencyList.C).toEqual([]);
    });
  });
});
