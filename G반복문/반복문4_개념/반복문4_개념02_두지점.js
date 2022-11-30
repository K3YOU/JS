    	/*
	  [문제]
		철수네 가족은 x 와 y 두지점을 자전거를 타고 왕복하였다. 
		갈때는 시속15km , 올때는 시속12km 로 이동하여 총  45분이 걸렸을때 , 
		두지점의 x 와 y 사이의 거리를 구하시오.
	 */

    let spm_x = 15/60
    let spm_y = 12/60
	let time = 45
	
	let go = 0       //하나는 커지면 하나는 작아지게   
	let back = 45

	let run = 1

	while(run == 1){
		if(go *spm_x == back * spm_y && go + back == 45){
			console.log("go",go,"back",back)
			console.log("distance", go *spm_x)
			run = 0	}
		go += 1
		back -= 1
		 	}
