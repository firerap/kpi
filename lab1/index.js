function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; ++i) {
        matrix[i] = [];
        for (let j = 0; j < n; ++j) {
            matrix[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return matrix;
}

function rotate90(matrix) {
    const newMatrix = [];
    const n = matrix.length; // suppose matrix is square.
    for (let i = 0; i < n; ++i) {
        newMatrix[i] = [];
        for (let j = 0; j < matrix.length; ++j) {
            newMatrix[i][j] = matrix[n - j - 1][i];
        }
    }
    return newMatrix;
}

const matrix = createMatrix(9);
console.log('Original:');
console.log(matrix);
console.log('Rotated:');
console.log(rotate90(matrix));