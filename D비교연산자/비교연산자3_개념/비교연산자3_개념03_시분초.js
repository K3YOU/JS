/*
	[설명] 
		321321초를  "시간" , "분" , "초" 로 표현하고,		
		분이 홀수이면 true 아니면 false를 출력.
	[문제]
		위식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/

let time = 321321
let hour = parseInt(time/3600)
let min = parseInt(time %3600/60)
let sec = time % 60

console.log(hour,min,sec)
console.log(min% 2 != 0 )