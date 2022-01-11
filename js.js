function checkSTN(n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0){
            check= false;
            break;
        }
    }
    return check;
}
function loops() {
    let x =1;
    let i = 0;
    while (x>0){
        x++;
        if (checkSTN(x)){
            document.writeln(x);
            i++;
        }
        if (i==20){
            break;
        }
    }

}
loops();
// let check = true;
// let N=1;
// let cnt = 1;
// let number = 5;
// while(number>0){
//     N++;
//     for(let i = 2;i<=Math.sqrt(N);i++){
//         if(N%i==0){
//             check=false;
//             break;
//         }
//     }
//     if(check){
//         document.writeln(N);
//         cnt++;
//         check = true;
//     }
//     if(cnt==number) break;
//
// }