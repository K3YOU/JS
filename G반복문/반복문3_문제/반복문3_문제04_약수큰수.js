
    	/*
	 * [문제] 
	 * 	 	100의 약수중에서 큰수부터 4개만 출력
	 */

		let i = 100
		let c = 0
		while (i>= 1){
			if(100 % i == 0){
				c += 1
				console.log(i)
				if (c == 4){
					break
				}
			}
			i -= 1
		}