
    /*
	[문제] 
		철수는 상점에서 24600원 짜리 옷을구매했습니다.
		500원짜리 동전으로만 옷값을 낸다면 동전이 몇개 필요한지 구하시오.
*/

let cloth = 24600
let pay = 500
let count = parseInt(cloth/pay)


if(cloth % pay > 0){
	count+= 1
	
	console.log(count)
}