
    /*
	    [문제]
	    
	     선호네 반 학생 25명이 체험학습을 하러 가기위해
	     버스를 탔는데 , 총요금이 19400원이였다.
	
	     교통카드를 사용하면 720원이고 , 
	     현금으로 지불하면 1000원일때, 
	
	     교통카드를 사용한 학생수와 현금을 사용한 학생수는 
	     각각 얼마인가?
 */
let student = 25
let total = 19400
let card = 720
let cash = 1000

let x = 0 // card
let y = 25 // cash

let run = 1
while (run == 1){
	if (x+y == 25 && card*x +cash*y == total){
		console.log(x,y)
		run = 0
	}
	x += 1
	y -= 1
}

