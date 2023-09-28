export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const node = q.shift() as BinaryNode<number>;

        if (node.value === needle) {
            return true;
        }

        if (node.left) q.unshift(node.left);
        if (node.right) q.unshift(node.right);
    }

    return false;
}
