
	/* 
	 	랜덤가위바위보	 	
	 	철수와 민수는 계단에서 가위바위보를 한다. 	 	
	 	총 5회반복하고 철수와 민수의 위치를 출력 
	 	철수와 민수는 각각 0~2 의 랜덤값을 입력받는다.
	 	0 ==> 가위 , 1 ==> 바위 , 2 ==> 보를 뜻한다.	 	
	 	이겨면 5칸올라가기 , 비기면 1칸 올라가기 , 지면 3칸내려가기이다.	 	
	 	철수와 민수는 계단 50의 위치에서 시작하였다. 	 	
	 	게임이 종료후 철수와 민수의 위치를 출력하시오.  

		 do while 사용
	 */

var i = 1 // 횟수
var cur_c = 50
var cur_m = 50
 

do{
	var chul = parseInt(Math.random()*3)
	var min = parseInt(Math.random()*3)
	console.log("chul :",chul,"min :", min)

	//chul win 
	if (chul== 0 && min == 2){
		cur_c += 5
		cur_m -= 3
	}

	//min win


	//tie 


	//min win
	
}while(i<=5);