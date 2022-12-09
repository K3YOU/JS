
/*
	[문제]
		arr1 과 arr2 각각의 값들이 모두 같은지 검사하시오.
		전부 같으면 true, 틀린 값이 하나라도 있으면 false를 출력하시오.
		단, 위치는 달라도 상관없다. 
	[정답]
		true	
 */
	var arr1 = [1, 2, 3, 1, 2, 3];
	var arr2 = [3, 2, 1, 2, 3, 1];

	//i랑 j가 같으면 배열을 0으로 채운다.
	for(var i = 0; i < arr1.length; i++){
		for(var j = 0; j < arr2.length; j++){
			if(arr1[i] == arr2[j]){       
				arr1[i] = 0;
				arr2[j] = 0;
			}
		}
	}
	//사실 혹은 거짓으로 판별하기 - 같지 않으면 거짓이다.
	var check = true;
	for(var i =0; i < arr1.length; i++){
		if(arr1[i] != 0 || arr2[i] != 0){
			check = false;  // 0이 아니면 거짓
		}
	}
	console.log(check);

