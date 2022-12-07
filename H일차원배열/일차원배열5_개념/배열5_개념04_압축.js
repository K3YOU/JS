
	/*
	   var arr = [1,1,1,3,3,3,3,2,2,3,3,3,4,5];	
	   arr1에 중복되는 숫자는 제외하고 숫자 1개씩만 압축해서 
	   b에 저장하려고 한다.
	   [예] 
	   		b[] = [1,3,2,3,4,5];


	 */
	var arr = [1,1,1,3,3,3,3,2,2,3,3,3,4,5];	
	var b= [];
	
	// 처음값한개는 저장한다. 
	b[0] =arr[0]
	var index = 1
	for (var i = 0;i<arr.length-1;i++){
		if(arr[i] != arr[i+1]){ // 앞이 뒤랑 같은 숫자가 아닐 때
			b[index] = arr[i+1] // b에 들어갈꺼는 그 다음꺼 ->다른거니깐
			index += 1

		}	
	}
	console.log(b)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// b[0] = arr[0];
	// var index = 1;
	// for(var i = 0; i < arr.length-1; i++){
	// 	if (arr[i]!= arr[i +1]){
	// 		b[index] = arr[i + 1];
	// 		index += 1;
	// 	}
	// }
	// console.log(b);