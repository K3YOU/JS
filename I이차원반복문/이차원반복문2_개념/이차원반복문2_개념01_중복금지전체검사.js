

/*
	중복숫자금지 ==> 1~4를 배열에 저장하는데 섞어서 중복없이 저장한다. 
*/
	var arr = [];
	var i = 0
	while(true){
		//random num
		var ran =parseInt(Math.random()*4)+1
		//true is overlap , flase is adding 
		var check = false
		/// overlap -> for : using new variable : j
		for(j=0; j<i; j++){  //j<i :i가 무조건 더 커야 중복을 방지할 수 있다.
			if(arr[j]== ran){
				check = true
			}
		}
		if(check == false){
			arr[i] = ran
			i += 1
		}
		//over 
		if(i == 4){
			break
		}
	}
	console.log(arr)
	


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	var i = 0;
	while(true){
		var ran  = parseInt(Math.random() * 4) + 1;
		var check = false;
		console.log("i",i,"j",j,"ran",ran)
		for(var j = 0; j < i; j++){
			if(arr[j] == ran){// 만약 여기서 arr[0(i의 이전 수이자 j의 현재 수)] == r(현재 뽑은 랜덤 수)이면 체크가 트루가 된다.
				check = true;  //true이면  중복이라서 안 넣는다.
				console.log(check)
			} // !=이면 체크는 false이므로 아래 if로 내려감
		}
		if(check == false){  // flase라는 것은 중복이 아니라는 뜻
			console.log(check) 

			arr[i] = ran; // 중복이 아니므로 넣는다.
			i += 1;
		}
		if(i == 4){
			break;
		}
	}
	console.log(arr);

