/*
	[문제]
		철수는 볼펜을 (10~30) 개를 구입해야한다. 
		
		볼펜하나의 가격은 1200원이다. 	
		볼펜은 20개이상구매시 볼펜하나당 100원을 할인해주고있다. 
			
		또한, 회원등급에 따라 할인을 추가제공한다.
		
		회원등급이 1 이면 15% 할인제공,
		회원등급이 2 이면 10% 할인제공,
		기본회원등급은 3이고 할인을 제공하지않는다.
		
		볼펜수를 랜덤으로저장한다.
		회원등급을 랜덤으로저장한다. 
		
		철수가 지불해야하는 금액을 출력하시오.
		
*/

let chul = parseInt(Math.random()*21)+10
console.log("볼펜수" +chul)

let pen = 1200
let dis = 100  //20개 이상
let level = parseInt(Math.random()*3)+1 
console.log("회원등급" + level)

let price = 0 // 지불 금액

if (chul >= 20){
	price = (pen-dis)*chul
	if (level == 1){
		price =price -(price * 15/100)
		console.log(price)
	}
	if(level == 2){
		price =price -(price * 10/100)
		console.log(price)

	}
	if (level ==3){ // 여기는 안 적어도 된다
		price = (pen-dis)*chul
		console.log(price)
	}
}
else {
	price = (pen)*chul
	if (level == 1){
		price =price -(price * 15/100)
		console.log(price)
	}
	if(level == 2){
		price =price -(price * 10/100)
		console.log(price)

	}
	if (level ==3){ // 여기는 안 적어도 된다
		price = (pen)*chul
		console.log(price)
	}
}