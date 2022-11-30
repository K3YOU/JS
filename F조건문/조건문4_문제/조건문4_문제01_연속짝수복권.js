
/*
	[연속짝수복권]
		100~900 사이의 랜덤숫자를 출력한다. 
		세자리의 숫자를 전부 한자리씩 분리한다.		
	[규칙]
		[1] 세자리모두 짝수이면 "1등" 출력.
		[2] 두자리가 짝수이고, 짝수인숫자가 연속이면  "2등" 출력. 
		[3] 그외는 "꽝" 출력. 
		[4] 단, 0은 짝수이다.
	[예]
		462 ==> 4,6,2 세자리 모두 짝수이므로 ==> 1등
		245 ==> 2,4,5 두자리가 짝수이고 2,4연속이므로 ==> 2등
		456 ==> 4,5,6 두자리가 짝수이지만 연속이 아니므로 ==> 꽝
		782 ==> 7,8,2 두자리가 짝수이고 8,2연속이므로 ==> 2등 	
*/
	

let r =parseInt(Math.random()*801) +100
console.log(r)

let one =parseInt(r% 10)
let ten =parseInt(r%100/10)
let hun =parseInt(r/100)

let count = 0

//first
if (one % 2 == 0 && ten % 2 == 0 && hun % 2 ==0  ){
	count = 3
}
//second
else if (one % 2 == 1 && ten % 2 == 0 && hun % 2 ==0  ){
	count = 2 }
else if (one % 2 == 0 && ten % 2 == 0 && hun % 2 ==1  ){
	count = 2
}
//losing ticket
else {
	console.log("lot")
}


if (count == 3){
	console.log("first")
}
if (count == 2){
	console.log("second")
}


