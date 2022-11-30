/*
	 * [문제]
	 * 
	 * 	[학점]
	 * 	시험점수(0~100) 을 랜덤으로 저장한다.  
	 * 	시험점수에 해당하는 학점을 출력하시오.
	 * 	아래는 점수표이다.
	 * 		100~91 이면 A학점,
	 * 		90~81  이면 B학점,
	 * 		80이하는 "재시험"
	 * 		
	 * 		단, 만점이거나, A학점과 B학점의 일의 자리가 8점이상이면 + 추가하시오.
	 * 		
	 * 
	 * 	예) 
	 * 		100 => A+
	 *     	88 ==> B+
	 *     	82 ==> B
	 *     	23 ==> 재시험
	 */
let a = parseInt(Math.random()*101)
console.log(a)
if (100>=a>=98){
	console.log("a+")
}


if (98>a>=91){
	console.log("a")
}
if (90>=a>=88){
	console.log("b+")
}
if (87>=a>=81){
	console.log("b")
}

if (80>=a){
	console.log("re-test")
}
