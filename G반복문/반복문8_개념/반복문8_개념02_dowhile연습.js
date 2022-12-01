	
/*
    [문제1] 1~4까지 출력
    [정답1] 1,2,3,4

    [문제2] 4~1 까지 거꾸로 출력
    [정답2] 4,3,2,1


     do while 을 사용해서 풀어보자.
*/

console.log("ex.1")

var a = 1;
do {
    console.log(a);
    a +=1;
} while (a<=4);

console.log("ex.2")
//var a = 1;
var a = 4
do {
    console.log(a);
    a -=1;
} while (a>=1);
