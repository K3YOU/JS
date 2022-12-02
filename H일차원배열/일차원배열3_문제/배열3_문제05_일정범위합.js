	/*
	  [문제]
	  		array[] = {10, 43, 25, 76, 3, 100, 56};	      
	  		인덱스 2개를 랜덤으로 입력받고 작은인덱스에서 큰인덱스까지의 값들의 합을 출력한다.
	 
	  [조건] 
	  		index1 이 index2 보다 더크더라도 
	        작은인덱스부터 큰인덱스까지의 합을 출력한다.
	         
			[예] index1 = 1;  index2 = 3;
			43 + 25 + 76
			
			[예] index1 = 4;  index2 = 1;
			43 + 25 + 76 + 3
	  
      
      
	 */	
	var array = [10, 43, 25, 76, 3, 100, 56];

	var r1 = parseInt(Math.random() * array.length);
	var r2 = parseInt(Math.random() * array.length);
	if (r1 > r2){
		var temp = r1;
		r1 = r2;
		r2 = temp;
	}
	console.log(r1 , r2)
	total = 0;
	for(var i = r1; i <= r2; i++){
		total += array[i];
		console.log("사이값 : " , array[i]);
	}
	console.log("합 : " , total);


	// // index1 > index2   


	//for (i=0; i<array.length;i++){

	// // index1 <index2
	// 	if (i == index1 &&index2>index1){
	// 		sum += array[index1]
	// 		if (i ==index2){
	// 			break
	// 		}

	// 	}
	
	// // index1 > index2   -> index1 and index2 switch
	// 	else if (i == index2 && index1 >index2){
	// 		temp = index1
	// 		index1 = index2
	// 		index2 = temp

	// 		sum += array[index1]
	// 		if (i ==index2){
	// 			break
	// 		}

	// 	}
	// 	else if (i ==index1 && index1 == index2) {
	// 		sum += array[index1]
	// 	}
	// }
	// console.log(sum)