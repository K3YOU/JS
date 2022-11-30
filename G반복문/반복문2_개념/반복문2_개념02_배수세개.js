
	/*
	  [문제] 
	  	7의 배수중 작은수부터 3개만 출력 하시오.
	    답 : 7,14,21
	 */

   
let i = 1

let run = 1 // run = 1 = start

let count = 0

while (run == 1){
	if(i % 7 == 0){
		console.log(i)
		count += 1
		if (count == 3){
			run = 0 // end
		}
	}
	i += 1
}