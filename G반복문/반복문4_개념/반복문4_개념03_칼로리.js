
    	 /*
	    [문제]
	
	        자전거는 1분에 4칼로리가 소모되고, 
	        줄넘기는 1분에 9칼로리가 소모된다.
	
	        철수는 95분 동안 505 칼로리를 소모했다. 
	        철수가 각 운동에 사용한 시간은 각각 얼마인가?
	  */

			let x = 0      //bike
			let y = 95     //rope

			let run = 1
			while (run == 1){
			if (x+y == 95 && 4*x+9*y == 505){
				console.log(x,y)
				run = 0
			}
			x += 1
			y -= 1
		}