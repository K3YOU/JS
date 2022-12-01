	/*
	 * [문제] 
			[1] 숫자 50 ~ 550 사이의 범위에서 7의배수를 순차적으로 검색한다.
	 		[2] 그중 3번째 7의 배수를 출력한다. 
	 */

			let count = 0
			for (i = 50;i <= 550; i ++){
				if (i % 7 == 0){
					count += 1
					if (count == 3){
						console.log(i)
						break
					}
				}
			}


			// true 랑 flase로 멈추기
			
			i = 50 //let 두 번 못 쓴다! , 첫 값은 따로 빼주기
			count = 0 

			for (run =true; run == true;){
				if  (i <= 550){
					if (i % 7 == 0){
						count += 1
						if (count == 3){
							console.log(i)
							run =false
						}
					}
				}
				i += 1
			}