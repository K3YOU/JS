
	/*
	  [문제] 
	  	9의 배수중 일의 자리가 6인 다섯번째 배수 출력하시오.
	 */
		  let i = 1
		  let c = 0
		  
		  while (true){
			  if (i % 9 == 0){
				  let one =parseInt(i%10)
				  if (one == 6){
					  c += 1
					  if (c == 5){
					  	console.log(i)
					  	break // flase를 여기다 쓰면 안 됨: while은 true일 때만 이라고 정해뒀으니깐! ->단지 거짓이라고 명하고 무한루프,flase로 멈추고 싶으면 run = true 이렇게 정의하고 들어오기
					}
				  }
			  }
			  i += 1
		  }