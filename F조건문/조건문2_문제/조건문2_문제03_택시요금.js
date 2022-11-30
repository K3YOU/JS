    /*
	[문제]
		택시기본요금은 10000원입니다.		
		기본요금으로는  10km 까지 이동 가능합니다. 		
		10km이상 이동시 추가요금이 발생합니다. 		
		추가요금은 3km이동할때마다 2300원씩 요금이 추가됩니다.			
		이동거리를 입력받고 요금출력하시오.	
*/

let basic = 10000
let basicd = 10
let extra = 2300
let extrad = 3

let d= parseInt(Math.random()*100)  // 랜덤으로 뽑기
console.log(d)

let diff = 0 // 10초과일 때만  
let extra_set = 0 

let total_dis = 0 // 총 요금

if (d > 10){
	diff = d - basicd
	extra_set = parseInt(diff/extrad)
	if(diff % extrad > 0){
		extra_set += 1
		total_dis = basic + extra_set*extra
		console.log(total_dis)
	}

} 
else {
	total_dis = basic 
	console.log(total_dis)
}

