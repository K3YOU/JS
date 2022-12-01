
    /*
	 * [문제]
		  아래와같은 휴대요금제가 있다 
		  B를 선택할경우 A보다 더 경제적이될려면,
		  통화시간을 얼마까지 사용해야될까요? 
		  정답을 초로 구하시오.
		  A요금제 기본요금 17500원 초당 5원 
		  B요금제 기본요금 31000원 초당 2원
	  
	 */

		
		let a_per_sec = 5
		let b_per_sec = 2

		let a = 17500
		let b = 31000

		let time = 0

		while (true){
			if (a +a_per_sec*time > b + b_per_sec*time){
				console.log(time+'sec')
				flase
			}
			time += 1
		}

		/*
		17500 + 5x > 31000 + 2x
		3x > 13500
		x > 4500 



		*/