    /*
	[문제]
		a 변수에 랜덤숫자(1~10) 입력받고 "짝수" "홀수" 를 출력하시오.
		
*/


var a = parseInt(Math.random()*10+1)
console.log(a)
if(a% 2 == 1){
	console.log("odd"); // 여기 뒤에 ;를 붙여줘야 한다
} 
else{
	console.log("even");
}


























