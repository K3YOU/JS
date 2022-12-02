
	/*
	  [문제] d의 값을 번갈아가면서 e, f 에 각각 저장 
	  [예]
	  	a = [10,20,30,40,50,60];
	  	b = [10,30,50]
	  	c = [20,40,60];

	 */

	var a = [10,20,30,40,50,60];
	var b = [0,0,0];
	var c = [0,0,0];

	// b랑 c의 숫자를 세는 변수를 각각 써줘야한다.
	bi = 0
	ci =0

	for (i =0; i<a.length; i ++){
		if (bi == 3 && ci == 0){
			break
		}
		if (i % 2 == 0){
			b[bi] = a[i]
			bi ++
		}
		 else{
			c[ci] = a[i]
			ci ++
		 }
	}
	console.log("b",b )
	console.log("c",c)