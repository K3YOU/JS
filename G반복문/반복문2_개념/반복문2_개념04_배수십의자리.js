
    	
	/*
		[문제]
			숫자 100이상 900 이하인 9의 배수중에서 10의 자리가 6인 첫번째 배수를 출력 
		[정답]
			162
	 */

			let i = 100
			let count = 0
			let run = true

			while (run) {
				let ten = parseInt(i %100/10)

				if( i>=100 && i <= 900){
				if (i % 9 == 0 && ten == 6){
					count += 1
					if (count == 1){
						console.log(i)
						run =false
					}
				}
				i += 1
			}
		}
