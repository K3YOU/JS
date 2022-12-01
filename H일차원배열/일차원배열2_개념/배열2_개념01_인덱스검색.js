

	/*
		[문제]
			인덱스를(0~4)랜덤저장받고 값을 출력 			
			예) 3
			결과) 24
            
	        
	 */
	 var array = [10, 543, 52, 24, 67];
	var r =parseInt(Math.random()*5)
	console.log("r",r)
	for (i=0;i<array.length;i++){
		if (i == r){
			console.log(array[i])
		}
	}