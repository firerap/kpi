const print = console.log;

function monteCarlo() {
    return 'Computing PI using Monte Carlo Method';
}

monteCarlo.compute = () => {
    const N = 10e6;
    let Nin = 0;
    for (let i = 0; i < N; ++i) {
        const x = Math.random();
        const y = Math.random();
        if (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) < 1) Nin++;
    }

    return 4 * Nin / N;
}

function series() {
    return 'Computing PI using series method (first formula, Leibnitz)';
}

series.compute = () => {
    const N = 10e6;
    let sum = 0;
    for (let i = 1; i < N; ++i) {
        sum += Math.pow(-1, i + 1) * 1 / (2 * i - 1)
    }
    return 4 * sum;
}

function product() {
    return 'Computing PI using product method (first formula)';
}

product.compute = () => {
    const N = 10e6;
    let currentPi = 3 * Math.sqrt(3) / 2;
    for (let k = 1; k < N; ++k) {
        currentPi *= k * k / (k * k - 1/9)
    }
    return currentPi;
}

function getPi(method) {
    switch (method) {
        case 1:
            return monteCarlo;
        case 2:
            return series;
        case 3:
            return product;
        default:
            throw new Error('Method is not found');
    }
}

method1 = getPi(1);
method2 = getPi(2);
method3 = getPi(3);

print(method1());
print(method2());
print(method3());

print(method1.compute());
print(method2.compute());
print(method3.compute());
