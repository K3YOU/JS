
		/*
		   1~1000 사이의 숫자를 랜덤받고 다음과 같이 출력하시오.
		   입력받은값이 
		  	1~10 사이 값이면  ==> 1
		   11~20 사이 값이면 ==> 11 
		   21~30 사이 값이면 ==> 21 
		   ......
		   예) 
		   	5 ==> 1
		   	24 ==> 21
		   	154 ==> 151 
		   	10 ==> 1
        
		 */
let r =parseInt(Math.random()*1000)+1
console.log(r)

//let unit = parseInt(r/ 10)*10 +1
//console.log(unit)


let unit1 = parseInt(r/ 10) // 10 -> 1 , 11 ->1

if( r % 10 == 0){ // r: 10
	unit1 -= 10   // unit1 = 0
} 
console.log(unit1+"1") // "1", 1"1"
