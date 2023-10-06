function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    visited: Map<number, boolean>,
    path: number[],
): boolean {
    if (visited.get(curr)) {
        return false;
    }

    visited.set(curr, true);

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const neighbors = graph[curr];
    for (let i = 0; i < neighbors.length; ++i) {
        const edge = neighbors[i];

        if (walk(graph, edge.to, needle, visited, path)) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const visited = new Map<number, boolean>();
    const path: number[] = [];

    walk(graph, source, needle, visited, path);

    if (path.length) {
      return path
    }

    return null;
}

