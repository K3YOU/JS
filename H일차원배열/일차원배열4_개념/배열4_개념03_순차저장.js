		/*
		 	arr 배열에 랜덤값 -100 ~100을 랜덤으로 저장한다.
		 	그중에 음수값만 b에 저장한다.
		 	단 , b에 저장할때는 앞에서 부터 순차적으로 저장한다. 
		 	(예) 
		 		
		 	    b = [-10,-30,0,0,0]
		 */
	var arr = [1,45,-10,-30,2];
	var b = [0,0,0,0,0];

	var count = 0
	var ai = 0

	for (i = 0; i <100; i ++){
		if (count == 5){
			break
		}
		r =parseInt(Math.random()*201)-100
		console.log("r",r)

		if (r % 2 != 0){
		b[ai] = r
		ai ++ 
		count += 1
		}
	}
	console.log(b)