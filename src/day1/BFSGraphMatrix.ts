export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const visited = new Map<number, boolean>();
    const parent = new Map<number, number | undefined>();

    visited.set(source, true);
    const q = [source];

    while (q.length) {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            if (adjs[i] === 0 || visited.get(i)) {
                continue;
            }

            visited.set(i, true);
            parent.set(i, curr);
            q.unshift(i);
        }
    }

    if (!parent.get(needle)) return null;

    let curr = needle;
    const path = [];
    while (parent.get(curr) !== undefined) {
        path.push(curr);
        curr = parent.get(curr) as number;
    }

    return [source].concat(path.reverse());
}
