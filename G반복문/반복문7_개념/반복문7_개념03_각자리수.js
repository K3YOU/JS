
   	/*
	 * [문제]
		 [1] 10000~99999 사이의 랜덤숫자를 저장하고 각자리별숫자가 5이상인 개수를 출력
		 
		 예) 19200 ==> 9 하나만 5이상 ==> 1
		 예) 98436 ==> 9,8,6, 세개가 5이상 ==> 3
	 */ 

		 r = parseInt(Math.random()*90000)+10000
		 console.log(r)
		 let f = parseInt(r/10000)
		 let s = parseInt(r%10000/1000) 
		 let t = parseInt(r%10000%1000/100)
		 let fo =parseInt(r%10000%1000%100/10)
		 let fi =parseInt(r%10)

		 let count = 0

		 for (run = true; run == true;){
			if (f >= 5){
				count += 1
			}
			if (s>= 5){
				count += 1
			}
			if (t >= 5){
				count += 1
			}
			if (fo >= 5){
				count += 1
			}
			if (fi >= 5){
				count += 1
			}
			run = false

		 }
		 console.log(count)

		