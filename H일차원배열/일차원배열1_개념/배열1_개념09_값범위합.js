
    	/*
	  	숫자(10~50) 한개를 랜덤으로 저장하고 
          배열안에서 그숫자보다 작은값들의 합을 출력 
	  	
	  	예) 34
	  	결과) 10,20,30 ==> 60

		  */
	var array = [10,20,30,40,50];
	var r = parseInt(Math.random()*41)+10
	console.log(r)

	var sum = 0
	for (i=0;i<array.length;i++){
		if (r>array[i]){
			sum += array[i]
		}
	}
console.log(sum)
