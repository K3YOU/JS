
    	/*
	 * [문제] 
	 * 	랜덤으로 1~10 를 10번출력하고 , 
	 *  가장큰수를 출력하시오. 
	 *  단 , 가장큰수가 여러번 나온경우 중복출력된 횟수도 출력하시오.
	 */

		let max = 0
		let count = 0
		let i = 1

		while(i<=10){
			let r = parseInt(Math.random()*10)+1
			console.log("r : ",r)
			if (r>max){
				max = r
				
			}
		
		
			i += 1	
		}
		// 10번 다 반복하고 중복된 걸 고르기
	

		

		console.log("max : ",max)