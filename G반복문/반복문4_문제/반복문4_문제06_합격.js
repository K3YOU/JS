
    	 /*
       [문제]
	        철수는 두번의 시험에서 각각 80점과 72점을 받았다.
	        세 번째 시험에서 최소 몇 점이상을 받아야 
	        
	        세번의 시험성정의 평균이 82점이상이 될수 있을까?
	  */


		let first = 80
		let second = 72

		let avg = 82

		let third = 0

		let run = true // no out of code

		while (run == true){
			if ((first+second+third)/3==avg){
				console.log(third)
				run =false
			}
			third += 1
		}