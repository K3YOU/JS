


    	/*
	 *  [다음 소수 찾기]
	 * 1. 숫자를 한 개 랜덤으로 저장한다(1~2000);
	 * 2. 입력받은 숫자보다 큰 첫 번째 소수를 출력한다.
	 * 
	 * 예)  랜덤숫자 :  1000
	 *    1000보다 큰 첫번재 소수는 1009
	 * 예)  랜덤숫자 : 500
	 *    500보다 큰 첫번째 소수는 503
	 */



	//랜덤 출력

	r = parseInt(Math.random()*2000)+1
	console.log("r",r) 

	// var share = 1
	// var count = 0

	while(true){
		r++ // 반복문 안에서 1씩 커지게 만들어야 한다.
		share = 1 // 얘네들도 여기 안에 같이 적어줘야 한다. 안에서 도는 것이므로
		count = 0

		while(share<=r){

			if(r % share == 0){
				count++			
			}	
			share++
		}
		if (count == 2){
				console.log("answer ;", r)
				break
			}
	}
	

		// while (true){
		// 	r += 1; // 11
		// 	i = 1;  // 몫
		// 	c = 0;
		// 	while (i <= r){
		// 		if (r %  i == 0){
		// 			c += 1;
		// 		}
		// 		i += 1;
		// 	}
		// 	if(c == 2){  // c==2가 되면 카운트가 멈추는거 밑에 따로 적어둬야 한다. 
		// 		console.log(r);
		// 		break;
		// 	}
		// }





	