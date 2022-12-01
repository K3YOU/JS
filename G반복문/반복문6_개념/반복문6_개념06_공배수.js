
    	/*
	  
	  	[문제]
	   		12와 15의 공배수를 작은것부터 순서대로 5개만 출력 
	 */
			let count = 0
			for (i=1;i<=10000; i ++){
				if(i% 12 == 0 && i % 15 ==0){
					console.log(i)
					count += 1
					if (count == 5){
						break
					}
				}
			}
