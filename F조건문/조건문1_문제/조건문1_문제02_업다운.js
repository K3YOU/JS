	/*
    [문제]
        숫자 두개를 랜덤으로 저장한다(1~100)

        두숫자중 더큰숫자를 출력한다. 
        서로같으면 같다출력
	 */

        var a = parseInt(Math.random()*100 +1)
        var b = parseInt(Math.random()*100 +1)

        console.log(a,b);


        if(a>b){
            console.log(a);
        }
        if(b>a){
            console.log(b);

        }
        if(b==a){
            console.log(a,b)
        }