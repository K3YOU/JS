
	/*
	  [문제] 
	  	7의 배수중 작은수부터 3개만 출력 하시오.
	    답 : 7,14,21
	 */

    var n = 7;
    var count = 0;
    var run = true;   //run = 1 말고 true or flase로 하기! 
    while(run) {  // 이렇게 run만 써주면 된다
        if(n % 7 == 0) {
            console.log(n);
            count += 1;
            if(count == 3) {
                run = false; //flase이면 끝~
            }
            
        }
        n += 1;
    }
