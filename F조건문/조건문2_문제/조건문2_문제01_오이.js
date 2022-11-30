     /*
	[문제]	  	
	 	 마트에서 오이를 3개씩 묶어서 1500원에 판매한다.
	 	 오이가 14개 필요하다. 
	 	 필요한 금액을 출력하시오.
	 	 단, 오이는 묶음으로만 판매한다.
*/

let set = 3
let setp = 1500

let need = 14
let needset = parseInt(need/set)  //필요한오이개수/1세트 = 몇 묶음 필요한지 나옴 -> 정수화해야 함!
let cash = 0

if (need % set > 0){  // 0보다 작거나같으면 나머지가 남는거니깐 사도 된다
	needset += 1
	cash = needset *setp
	console.log(cash)
} 