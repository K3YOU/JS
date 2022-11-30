

    	/*	  
	  	[가운데 숫자 맞추기 게임]	  
		   [1] 10000~90000 사이의 랜덤 숫자 저장한다.
		   [2] 랜덤 숫자의 가운데 숫자를 출력하시오.
		[예]
	  		[제시] ==> 24912 
	  		[출력] ==> 9
	  	
	 */
 
			let r = parseInt(Math.random()*90000)+10000
			console.log(r)
			
			let 만 = parseInt(r/10000)
			let 천 =parseInt(r%10000/1000)
			let 백 = parseInt(r%10000%1000/100)
			//let 십 = parseInt(r%10000%1000%100/10)
			//let 일  = parseInt(r%10)

			console.log(백)