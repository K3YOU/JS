
/*
	[문제]
		5~15 사이를 전부출력한다.
		반복문 종료후 5의배수의 합을 저장후 출력한다.
 */

let i = 5
let sum = 0

while (i <= 15){
	if (i % 5 == 0){
		console.log(i)
		sum += i
	}
	else {
		console.log(i)

	}
	i += 1
}
console.log("sum",sum) 