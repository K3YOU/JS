
	/*
	   [문제] 
		  50에서 100까지 자연수중에서 9의 배수의 개수를 출력하시오.
		  답 : 6개
	 */
    
	let i = 50
	let count = 0
	while (i <= 100){
		if(i % 9 == 0){
			count += 1
		}
		i += 1
	}
	console.log(count)