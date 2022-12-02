
	/*
	     
		 [문제] 학번을 랜덤으로 입력받아 성적 출력
		 [정답] 학번 입력 : 1003 성적 : 45점
	 */
	 numberList = [ 1001, 1002, 1003, 1004, 1005 ];
	scoreList = [];

	for (i=0;i<numberList.length;i++){
		r =parseInt(Math.random()*100)+1
		scoreList[i]=r
		console.log("student number :", numberList[i], ", score :", scoreList[i])
	}

	