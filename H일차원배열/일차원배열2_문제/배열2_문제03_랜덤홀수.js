
	/*
	 	아래 배열에 랜덤값 -100 ~ 100을 4개 저장후 그값중 홀수만 출력 
	 	
	 	예) arr = [-11, 4, 73, -2 ];
	 	결과) -11 , 73

	*/
	var arr = [];
	
	for(var i = 0;i<4;i++){
		var rand =parseInt(Math.random()*202)-101
		arr[i]=rand
		if (rand % 2 == 1 ||rand % 2 == -1){
			console.log("odd",rand)
		}
	}
	console.log(arr)
//	console.log("odd",rand)

