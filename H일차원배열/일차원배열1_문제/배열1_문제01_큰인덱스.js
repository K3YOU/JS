
    	/*


	 	index(0~4) 에 숫자를 랜덤으로 저장하고 
          배열에서 index 보다 큰인덱스의 값들만 출력 
	 	
	 	예) 3 
	 	설명 ) 위에서 인덱스 3을 입력받으면 arr[3] 값은 40이므로 40보다 큰값은 50이다.	 	
	 	결과) 50
	*/
	var array = [10,20,30,40,50];

	var index = parseInt(Math.random()*5)
	console.log("index", index)

	for(var i = 0;i<array.length;i++){
		if(array[i]>array[index]){
			console.log(array[i])
		}
	}