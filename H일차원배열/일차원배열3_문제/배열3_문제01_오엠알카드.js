

	/*
	  [OMR카드]
	  
	  1. 배열 test는 시험문제의 정답지이다.
	  2. 배열 student에 1~5 사이의 랜덤 숫자 5개를 저장한다.	
	  3. 각자리수를 비교해서 점수를 RESULT에 기록한다.
	      ==> 맞으면 true , 틀리면 false
	  4. 점수는 한 문제당 20점이다.
	  5. 성적을 출력한다.  
	   
	[예]
	 test  = [1, 3, 4, 2, 5];
	 student = [1, 1, 4, 4, 3];  // 랜덤숫자 5개
	 result  = [true, false, true, false, false];
	 score = 40;
	*/

	test  = [1, 3, 4, 2, 5];
	console.log(test)
	student = [];  // 랜덤숫자 5개
	result  = [];
	score = 0

	for(i=0;i<test.length; i ++){
		r = parseInt(Math.random()*5)+1
		student[i] =r
		if (test[i]== student[i]){
			result[i] = "true"
			score += 20
		}
		else {
			result[i] = "false"
			score -= 20
		}
	}
	console.log(student)
	console.log(result)
	console.log(score)

