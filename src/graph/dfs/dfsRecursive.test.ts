import { describe, expect, test, beforeEach } from "@jest/globals";
import { Graph } from "../Graph";
import { dfsRecursive } from "./dfsRecursive";

const dfsAlgorithms = {
  dfsRecursive,
};

function buildLectureGraph(): Graph {
  // 강의 표준 예시 그래프
  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F
  const g = new Graph();
  ["A", "B", "C", "D", "E", "F"].forEach((v) => g.addVertex(v));
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  return g;
}

describe("DFS Algorithms", () => {
  Object.keys(dfsAlgorithms).forEach((algorithmName) => {
    const dfs = dfsAlgorithms[algorithmName as keyof typeof dfsAlgorithms];

    describe(algorithmName, () => {
      let g: Graph;
      beforeEach(() => {
        g = buildLectureGraph();
      });

      test("강의 예시: A에서 시작 → A,B,D,E,C,F", () => {
        expect(dfs(g, "A")).toEqual(["A", "B", "D", "E", "C", "F"]);
      });

      test("모든 정점을 정확히 한 번씩 방문", () => {
        const result = dfs(g, "A");
        expect(result.sort()).toEqual(["A", "B", "C", "D", "E", "F"]);
        expect(new Set(result).size).toBe(result.length);
      });

      test("단일 정점 그래프", () => {
        const single = new Graph();
        single.addVertex("X");
        expect(dfs(single, "X")).toEqual(["X"]);
      });

      test("연결되지 않은 정점은 결과에 포함되지 않음", () => {
        g.addVertex("Z"); // 고립 정점
        const result = dfs(g, "A");
        expect(result).not.toContain("Z");
        expect(result).toHaveLength(6);
      });

      test("존재하지 않는 시작점은 빈 배열 반환", () => {
        expect(dfs(g, "ZZ")).toEqual([]);
      });

      test("선형 그래프 (A-B-C-D)", () => {
        const linear = new Graph();
        ["A", "B", "C", "D"].forEach((v) => linear.addVertex(v));
        linear.addEdge("A", "B");
        linear.addEdge("B", "C");
        linear.addEdge("C", "D");
        expect(dfs(linear, "A")).toEqual(["A", "B", "C", "D"]);
      });

      test("사이클이 있어도 무한 루프 없이 종료", () => {
        const cycle = new Graph();
        ["A", "B", "C"].forEach((v) => cycle.addVertex(v));
        cycle.addEdge("A", "B");
        cycle.addEdge("B", "C");
        cycle.addEdge("C", "A");
        expect(dfs(cycle, "A").sort()).toEqual(["A", "B", "C"]);
      });
    });
  });
});

describe("DFS Algorithms Performance", () => {
  const vertexCount = 500;
  const testRuns = 50;
  const algorithms = Object.keys(dfsAlgorithms);
  const times: { algorithm: string; averageTime: number }[] = [];

  function generateRandomGraph(n: number, edgeProb = 0.02): Graph {
    const g = new Graph();
    for (let i = 0; i < n; i++) g.addVertex(`v${i}`);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (Math.random() < edgeProb) g.addEdge(`v${i}`, `v${j}`);
      }
    }
    return g;
  }

  test("Rank DFS algorithm performance", () => {
    algorithms.forEach((name) => {
      const dfs = dfsAlgorithms[name as keyof typeof dfsAlgorithms];
      let totalTime = BigInt(0);
      for (let i = 0; i < testRuns; i++) {
        const g = generateRandomGraph(vertexCount);
        const start = process.hrtime.bigint();
        dfs(g, "v0");
        const end = process.hrtime.bigint();
        totalTime += end - start;
      }
      times.push({
        algorithm: name,
        averageTime: Number(totalTime) / testRuns,
      });
    });

    times.sort((a, b) => a.averageTime - b.averageTime);
    console.log("DFS algorithm performance ranking:");
    times.forEach((entry, i) => {
      console.log(
        `${i + 1}. ${entry.algorithm}: ${entry.averageTime.toFixed(0)} ns`,
      );
    });
  });
});
