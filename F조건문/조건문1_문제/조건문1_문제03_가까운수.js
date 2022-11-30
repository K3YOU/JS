    /*
		[문제]		
    a 는 랜덤으로 1~99를 랜던저장한다.
    c 는 랜덤으로 101~199 를 랜덤저장한다.

    a 와 c 중 어떤숫자가 b 와 더가까운지 출력하시오.
    [1] a 가 b 보다 가까우면 "a가 가깝다."
    [2] c 가 a 보다 가까우면 "c가 가깝다."
    [3] 서로 거리가 같으면 "서로같다"
	 */
     var a=parseInt(Math.random()*100)-1;
     var c = parseInt(Math.random()*99)+101;
     var b = 100;

     console.log(a,c)

     if (b-a>c-b){
      console.log("c is closer")
     }
     if(c-b>b-a){
      console.log("a is closer")
     }
     if (c-b == b-a){   //여기서 else 쓰면 위의 if랑 반대라는 뜻
      console.log("same")

     }


