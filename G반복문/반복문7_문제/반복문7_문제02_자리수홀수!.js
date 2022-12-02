
    	/* 
	 	[자리별홀수개수]
		  1 ~ 10000 사이의 숫자를 입력받고 
		  자리별 홀수의 개수를 출력하시오.
		  
		  예) 
		     561  ==> 2개
		  	 1    ==> 1개
		  	 668  ==> 0개
		  	 9999 ==> 4개
	 
	 */
let r =parseInt(Math.random()*10001)
console.log(r)

let c = 0

while(true){
	let set1 = parseInt(r/10000) //10000
	let set2 = parseInt(r%10000%1000) //1000
	let set3 = parseInt(r/10000/1000%100) //100
	let set4 = parseInt(r/10000/1000/10010) //10 
	let set5 = parseInt(r%10) //1



	if(set1 % 2 == 1){
		c +=1
	}
	if(set2 % 2 == 1){
		c +=1
	}
	if(set3 % 2 == 1){
		c +=1
	}
	if(set4 % 2 == 1){
		c +=1
	}
	if(set5 % 2 == 1){
		c +=1
	}
	console.log(c)
	break  // false이면 무한반복 거짓이 될 때까지 반복하는 거니깐// 멈춘다는 의미로 break
}

