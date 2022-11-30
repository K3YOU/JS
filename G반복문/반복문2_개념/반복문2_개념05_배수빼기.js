
    /*
	[문제] 다음조건이 전부 맞는 수를 출력하시오.
		
		[조건1] 13 이상 100미만의 숫자중에서 13의 배수를 전부 검사한다.
		[조건2] 그중 6번째 배수에서 4번째 배수를 뺀수를 구한다.
		
	[정답]
		
*/
let i = 13
let c = 0
let c4 = 0
let c6 = 0

while (i < 100){
	if(i % 13 == 0){
		c += 1
		if (c == 4){
			c4 = i
			console.log(c4)}
		if (c == 6){
			c6 = i
			console.log(c6)}}
	i += 1
}
console.log(c6-c4)