class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const cell = board[i][j];
                if (cell === ".") continue;
                const row = `row ${i} cell ${cell}`;
                const col = `col ${j} cell ${cell}`;

                const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                const box = `box ${boxNumber} cell ${cell}`;

                if (seen.has(row) || seen.has(col) || seen.has(box)) {
                    return false;
                }
                seen.add(row).add(col).add(box)
            }
        }
        return true;
    }
}
