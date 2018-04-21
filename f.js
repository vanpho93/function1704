function veHinh(n, fn, fnSoCot) {
    const soCot = fnSoCot ? fnSoCot(n) : n;
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= soCot; j++) {
            const dk = fn(i, j, n);
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}
// veHinh(5, (i, j, n) => i >= j);
// veHinh(5, (i, j, n) => i + j >= n + 1);
// veHinh(5, (i, j, n) => j >= i, n => n);
// veHinh(9, (i, j, n) => {
//     const trungTam = (n + 1) / 2;
//     const soBuocDoc = Math.abs(i - trungTam);
//     const soBuocNgang = Math.abs(j - trungTam);
//     const dk = soBuocDoc + soBuocNgang <= trungTam - 1;
//     return dk;
// }, n => n);
veHinh(5, (i, j, n) => {
    const soBuocNgang = Math.abs(j - n);
    const soBuocDoc = i - 1;
    return soBuocDoc + soBuocNgang <= n - 1;
}, n => n * 2 - 1);
