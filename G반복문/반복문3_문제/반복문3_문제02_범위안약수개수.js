
    	/*
	 * [문제] 
	 * 	48의 약수중 홀수의 개수를 출력하시오.
	 */
		let i = 48
		let c = 0
		while (i>=1){
			if (48 % i == 0 && i % 2 == 1){
				c += 1
			}
			i -= 1
		}
		console.log(c)

