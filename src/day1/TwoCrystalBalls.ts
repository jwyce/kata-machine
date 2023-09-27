export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let threshold = 0;

    // first ball
    while (!breaks[threshold] && threshold !== breaks.length) {
        threshold = Math.min(threshold + jmpAmount, breaks.length);
    }

    // second ball
    for (let i = threshold - jmpAmount; i < threshold; ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
