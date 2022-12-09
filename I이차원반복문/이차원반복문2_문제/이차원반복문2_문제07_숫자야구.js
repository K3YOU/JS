

    /*
	 	[숫자 야구 게임]		
			[1] com 배열에 0~9사이의 숫자 3개를 저장 단 com배열안에 중복값이 없어야한다.
			[2] me 배열에 0~9사이의 숫자 3개를 직접저장한다 단 me배열안에 중복값이 없어야한다.
			[3] com 과 me 를 비교해서 숫자가 같고 자리도 같으면 strike + 1;
			[4] com 과 me 를 비교해서 숫자가 같고 자리가 틀리면 ball + 1;
			[5] 사용자에게 strike 와 ball  개수를 출력한다. 
			[6] 매턴마다 위를 반복하면서 strike = 3 이 될때까지 반복한다.

	 */

	// com은 한 번만 뽑고 me는 com을 맞추기위해서 계속 돌려야함

	var com = [];
	var me = [];

	//com 안에 중복없이 요소 추가하기
	for(var i = 0; i < 3;){
		var r = parseInt(Math.random() * 10);
		check = false;
		for(var j = 0; j < com.length; j++){
			if (r == com[j]){
				check = true;
			}
		}
		if (check == false){
			com[i] = r;
			i += 1;
		}
	}

	while(true){
		var me = []; // me는 반복되는 것이므로 반복문안에 있어야한다.
		//me 뽑기
		for(var i = 0; i < 3;){
			var r = parseInt(Math.random() * 10);
			check = false;
			for(var j = 0; j < com.length; j++){
				if (r == me[j]){
					check = true;
				}
			}
			if (check == false){
				me[i] = r;
				i += 1;
			}
		}
		console.log("com : " , com , "me : " , me);

		//strike랑 ball 계산하기
		var st = 0;
		var ball = 0;
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < 3; j++){
				if(com[i] == me[j] && i == j){
					st += 1;
				}else if(com[i] == me[j] && i != j){
					ball += 1;
				}
			}
		}
		console.log("st : " , st , "ball : " , ball); // 여기까지해서 strike<2이면 다시 me를 돌려서 st == 2까지 한다.

		if (st == 2){
			break;
		}
		
	}

