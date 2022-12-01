
	/*
	 	숫자를 하나랜덤으로저장(1~10) 그숫자가 짝수면 ==> 배열에서 짞수만 출력
	 	그숫자가 홀수면 배열에서 홀수만 출력 

	 	
	*/
	var arr = [10, 20, 31, 20, 98, 65, 43, 73, 51, 22];

	var r = parseInt(Math.random()*10)+1
	console.log("r", r)

	for(i = 0;i<arr.length;i++){
		if (r % 2 == 0){
			if (arr[i]% 2 == 0){
				console.log(arr[i])
			}
		}
		else {if (arr[i]% 2 != 0){
			console.log(arr[i])
		}

		}
	}