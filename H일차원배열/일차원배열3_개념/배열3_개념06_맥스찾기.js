	/*
		[문제]
			array 배열에 -100 ~ 100사이의 랜덤값을 저장후 
	   		가장큰값의 인덱스와 값을 출력한다  //걍 5개 저장
	 */
	var array = [];
	let max = 0
	let max_i =0

	for (i= 0; i<5;i++){
		r  =parseInt(Math.random()*201)-100
		array[i]=r
		
		if(max < array[i]){
			max = array[i]
			max_i = i
		}

	}
	console.log(max_i,max)

	console.log(array)
