export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const visited = new Array(arr.length).fill(false);
    const parent = new Map<number, number>();
    const dists = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(visited, dists)) {
        const curr = getLowestUnvisited(visited, dists);
        visited[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i];
            if (visited[edge.to]) continue;

            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                parent.set(edge.to, curr);
                dists[edge.to] = dist;
            }
        }
    }

    const path = [sink];
    let curr = sink;
    while (parent.get(curr)) {
        const next = parent.get(curr) as number;
        path.push(next);
        curr = next;
    }

    path.push(source)
    return path.reverse();
}

function hasUnvisited(visited: boolean[], dists: number[]): boolean {
    return visited.some((v, i) => !v && dists[i] < Infinity);
}

function getLowestUnvisited(visited: boolean[], dists: number[]): number {
    let idx = -1;
    let lowesetDist = Infinity;

    for (let i = 0; i < visited.length; ++i) {
        if (visited[i]) continue;

        if (lowesetDist > dists[i]) {
            lowesetDist = dists[i];
            idx = i;
        }
    }

    return idx;
}
