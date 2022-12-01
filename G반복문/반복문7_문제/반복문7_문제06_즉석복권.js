
    	/*
		랜덤으로 1또는 7 을 10번출력한다. 
		7이 연속으로 3번이상이면 "당첨" 아니면 "꽝" 출력 
		
	 */
		let count = 0

		for(i=1;i<=10;i++){
			r=parseInt(Math.random()*2)
			if (r ==0){
				r = 7
				console.log(r)
				count += 1
			
			}
			else{
				console.log(r)

				count = 0
			}
		}
		console.log("count :",count)
		
		if(count >=3){
			console.log("win")
		}
		else {
			console.log("lot")
		}