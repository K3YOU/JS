	/*

	[문제] 다음 리스트를 이용해서 a 의 값중 홀수만 c 에 저장
	[조건] 위치는 뒤에서 부터 저장한다. 
	[예]   c = [ 0, 0, 17, 51, 49 ]
	
      	
	 */
	var a = [ 10, 49, 51, 36, 17 ];	
	var c = [ 0,0,0,0,0 ];
	var count = 0

	for(i=0;i<a.length;i++){
		if(a[i]%2 !=0){
			
				c[(a.length-1)-count] = a[i]
				count ++
			}
		// else{
		// 	a[i]=0
		// 	c[i] =a[i]
			

		// }
	    }
	
	console.log(c)