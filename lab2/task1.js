class Matrix {
    constructor(rawMatrix) {
        if (!rawMatrix) {
            this.rawMatrix = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ];
            return;
        }
        if (rawMatrix.length !== 3 || rawMatrix[0].length !== 3) {
            throw new Error('Support only 3x3 matrixes');
        }
        this.rawMatrix = rawMatrix;
    }

    multiply(op2) {
        const result = new Matrix();
        for(let i = 0; i < op2.rawMatrix.length; ++i) {
            for(let j = 0; j < op2.rawMatrix.length; ++j) {
                for(let k = 0; k < op2.rawMatrix.length; ++k) {
                    result.rawMatrix[i][j] += this.rawMatrix[i][k] * op2.rawMatrix[k][j];
                }
            }
        }
        return result;
    }

    tr() {
        const result = new Matrix();
        for(let i = 0; i < this.rawMatrix.length; ++i) {
            for(let j = 0; j < this.rawMatrix.length; ++j) {
                result.rawMatrix[i][j] = this.rawMatrix[j][i];
            }
        }
        return result;
    }

    det() {
        const m = this.rawMatrix;
        return m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
            m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
            m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
        return 0;
    }

    isIdentity() {
        for (let i = 0; i < this.rawMatrix.length; ++i) {
            for (let j = 0; j < this.rawMatrix.length; ++j) {
                if (i === j && this.rawMatrix[i][j] !== 1) {
                    return false;
                }
                if (i !== j && this.rawMatrix[i][j] !== 0) {
                    return false;
                }
            }
        }
        return true;
    }

    isOrtogonal() {
        return this.multiply(this.tr()).isIdentity();
    }
}

function assert(arg) {
   if (!arg) throw new Error(`Assert on ${arg} should be true`);
}

function test() {
    const op1 = new Matrix([
        [1, 2, 3],
        [3, 4, 5],
        [6, 7, 8],
    ]);
    const op2 = new Matrix([
        [1, 2, 3],
        [3, 5, 5],
        [6, 7, 8],
    ]);
    const example = new Matrix([
        [1, 2, 3],
        [3, 4, 5],
        [6, 7, 1],
    ]);
    const identity = new Matrix([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]);
    const ortogonal = new Matrix([
        [0, -1, 0],
        [1, 0, 0],
        [0, 0, -1],
    ]);
    assert(
        JSON.stringify(op1.multiply(op2).rawMatrix) ===
        JSON.stringify([
            [ 25, 33, 37 ],
            [ 45, 61, 69 ],
            [ 75, 103, 117 ]
        ])
    );

    assert(
        JSON.stringify(op1.tr().rawMatrix) ===
        JSON.stringify([
            [ 1, 3, 6 ],
            [ 2, 4, 7 ],
            [ 3, 5, 8 ]
        ])
    );

    assert(example.det() === 14);

    assert(example.isIdentity() === false);
    assert(op1.isIdentity() === false);
    assert(op2.isIdentity() === false);
    assert(identity.isIdentity());

    assert(ortogonal.isOrtogonal());
    assert(example.isOrtogonal() === false);


    console.log('All test has been passed.');
}

test();