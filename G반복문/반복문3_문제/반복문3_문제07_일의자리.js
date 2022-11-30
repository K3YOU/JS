
    	/*
	  	[문제] 
	  	 	120의 약수중에서 순서대로 약수를 출력했을때, 
               일의자리가4인두번째 약수를 출력하시오.
	 */
	let i = 120

	let c = 0

	while (i>= 1 ){
		let one = parseInt(i%10)

		if (120% i == 0 && one == 4){
			c += 1
			if (c ==2){
			console.log(i)
			break}
		}
		i -= 1
	}