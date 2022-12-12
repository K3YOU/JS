
    /*
	 * [석차 출력]
	 * 		성적 순으로 번호와 점수 출력 
	 *ex) 1등은  numlist[index] 점수는 scorelist[index]
 
	 */

	 var numList = [1001, 1002, 1003, 1004];
	 var scoreList = [87, 42,  11, 98];
	 var tempList=[]

	//step 1) 새로운 배열을 만든다. --> 왜? 큰 수부터 출력하고 출력한 뒤 0으로 채우기
	for(i=0;i<scoreList.length;i++){
		tempList[i] = scoreList[i]
	}

	//step 2) 반복문 안에서 변수들 설정하기(반복문 안에 있으면 반복문이 다 돌고나면 0으로 리셋이 된다)
		for( i=0; i<scoreList;i++){
			var max = index
			var index = j
		//제일 큰 수를 뽑는 경우 

		}
		// step 3) 위의 for문이 다 끝나면 여기로 내려와서 콘솔을 찍음
	
	
	
		



















		// //step 1) 새로운 배열을 만든다. --> 왜? 큰 수부터 출력하고 출력한 뒤 0으로 채우기
		// for(var i = 0; i < scoreList.length; i++){
		// 	tempList[i] = scoreList[i];   
		// }
		// console.log(tempList) // [87, 42, 11, 98]
	
		// //step 2) 반복문 안에서 변수들 설정하기(반복문 안에 있으면 반복문이 다 돌고나면 0으로 리셋이 된다)
		// for(var i = 0; i < numList.length; i++){
		// 	var mx = 0;
		// 	var number = 0;  //학생번호
		// 	var index = 0;   // 새로만든 배열 차례 넘기기
	
		// 	//제일 큰 수를 뽑는 경우 
		// 	for(var j = 0; j < numList.length; j++){
		// 		if (mx < tempList[j]){
		// 			mx = tempList[j];
		// 			number = numList[j];
		// 			index = j; 
		// 		}
		// 		console.log("J",j,"index",index)
		// 	}
	
		// 	// step 3) 위의 for문이 다 끝나면 여기로 내려와서 콘솔을 찍음
		// 	console.log((i +1) + "등 : " + number +" 점수 : " + mx);
		// 	tempList[index] = 0;           // 이미 콘솔로 출력된 것이 또 못 나오게 0 대체하기
		// 	//console.log(tempList)
		// }
		 
	
