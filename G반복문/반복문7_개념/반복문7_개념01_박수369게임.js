
	/*
	 *  [369게임]
	 * 1. 1~50까지 반복을 한다.
	 * 2. 그 안에서 해당 숫자의 369게임의 결과를 출력한다.
	 * 
	 * 3. 각각의 숫자에 3이나 6이나 9가 두개 면 "짝짝"
	 * 4. 각각의 숫자에 3이나 6이나 9가 한개 면 "짝"
	 * 5. 3이나 6이나 9가 없으면 그냥 숫자출력 
	 * 
	 * 예) 1 2 짝 4 5 짝 7 8 짝 10 11 12 짝 ...
	 */
	/*
		 * [1] 1 부터 50까지 반복문으로 숫자를 출력한다.
		 * [2] 숫자를 십의 자리와 일의 자리로 분리한다.
		 * [3] 분리된숫자중에  3,6,9 의 개수를 카운트하고 
		 * [4] 카운트한 숫자에 맞춰서 결과를 출력한다. 
		 * 
		 */
		


	for (i=1;i<=50;i++){
		let ten = parseInt(i/10)
		let one = parseInt(i%10)
		let count = 0	
		
		if (ten == 3 || ten == 6 || ten == 9){
			count += 1
			if (one == 3 || one == 6 || one == 9){
				count += 1
			}

		}	
		else {
			if (one == 3 || one == 6 || one == 9){
				count += 1
			}
		}

		if (count == 2){
			console.log("clap twice")
		}
		else if (count == 1){
			console.log("clap")
		}
		else if (count == 0) {
			console.log(i)
		}
		

	 }
        

