	/*
	  [중첩반복문과배열]
	    - 중첩반복문 3 x 4 을 활용해  1차원배열에 1~12 값넣기
    
	 */


	 var arr = [];
	 var n = 0;
	
	for(var i = 0;i<3;i++){
		for(var j = 0; j<4;j++){
			console.log(i,j)
			console.log(arr)  //여기까지는 빈 배열
			arr[n] = n+1
			n ++
		}
	}
console.log(arr);
