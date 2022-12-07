

	/*
		랜덤으로 인덱스를 입력받고 해당 인덱스의 값과  0으로 변경
		
		추가조건 : 해당 값 양옆의 값들도 0으로 변경 
		단, 0, 4 인덱스일경우는 양옆중 한개만 0으로 변경 
		
		(예) 1 ==> [0,0,0,9,9]
		(예) 4 ==> [9,9,9,0,0]
			
	 */
	 var arr = [9,9,9,9,9,9,9,9,9];
	
	 r = parseInt(Math.random()*arr.length)
	 console.log(r)
	
	 var index = 0

	 //(r=0;r<arr.length;r ++){
		if(r >= 1  && r <= arr.length-2){
			arr[r-1] = 0
			arr[r] = 0
			arr[r+1] = 0 
		}
		if (r== 0 ){
			arr[r] = 0
			arr[r+1] = 0  
		}
		if (r== arr.length-1 ){
			arr[r-1] = 0
			arr[r] = 0
		}
	 //}
	 console.log(arr)