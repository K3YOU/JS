
	/*
	  [정렬]
	  
	  1. 인덱스 0번이 나머지를 검사한다.
	  2. 제일 큰 값을 찾아 교환한다.
	  3. 인덱스 1증가한다.
	  4. [1~3]을 끝까지 반복한다.
	  예)
	  10, 50, 30, 40, 80, 19   ==> 80을 찾아내고 교환한다.
	  80, 50, 30, 40, 10, 19   ==> 50은 나머지중 이미 제일크다.
	  80, 50, 30, 40, 10, 19   ==> 40을 찾아내고 교환한다.
	  80, 50, 40, 30, 10, 19   ==> 30은 나머지중 이미 제일크다.
	  80, 50, 40, 30, 10, 19   ==> 19을 찾아내고 교환한다.
	  80, 50, 40, 30, 19, 10
	 */

	var arr = [10,50,30,40,80,19];
	for(i=0;i<arr.length; i++){
		// 인덱스랑 맥스 값 변수로 정하기
		var index = i
		var max = arr[i]
		//큰 값을 앞으로 데려오기 : 처음부터 끝까지 다 훑어보고 공백 생길 수 있으므로, 0~1, 0~2까지 같이 하나씩 넓혀가기
		for(j=i+1;j<arr.length;j++){
			if(arr[j]>max){
				max = arr[j]
				index = j
			}
		}
		// 값 바꾸기
		var temp = arr[index]   //in here, index is j accordings to upper 
		arr[index] = arr[i]
		arr[i] = temp
	}
	console.log(arr);



















	for(var i = 0; i <  arr.length; i++){
		var index = i;
		var max = arr[i]; //10
		for(var j = i + 1; j < arr.length ; j++){
			if(arr[j] > max){
				max = arr[j];
				index = j;
			}
		}
		var temp = arr[index];
		arr[index] = arr[i];
		arr[i] = temp;
	}
	console.log(arr);
	

