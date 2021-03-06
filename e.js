/*

ve hinh 1
*
**
***
****
*****

ve hinh 2
    *
   **
  ***
 ****
*****

ve hinh 3
*****
 ****
  ***
   **
    *
ve hinh 4
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
ve hinh 5

*******
 *****
  ***
   *
*/

function veHinh1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = i >= j;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh2(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = i + j >= n + 1;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh3(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = j >= i;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const trungTam = (n + 1) / 2;
            const soBuocDoc = Math.abs(i - trungTam);
            const soBuocNgang = Math.abs(j - trungTam);
            const dk = soBuocDoc + soBuocNgang === trungTam - 1;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        const soCot = n;
        for (let j = 1; j <= soCot; j++) {
            const trungTam = (n + 1) / 2;
            const soBuocDoc = Math.abs(i - trungTam);
            const soBuocNgang = Math.abs(j - trungTam);
            const dk = soBuocDoc + soBuocNgang === trungTam - 1;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

function veHinh5(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        const soCot = n * 2 - 1;
        for (let j = 1; j <= soCot; j++) {
            const soBuocNgang = Math.abs(j - n);
            const soBuocDoc = i - 1;
            const dk = soBuocDoc + soBuocNgang <= n - 1;
            str += (dk ? '*' : ' ');
        }
        console.log(str);
    }
}

veHinh(5);
