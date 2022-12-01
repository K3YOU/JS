

	/*
		 [문제1] array 배열에 1~100점 사이의 랜덤 정수를 5개 저장하고 출력
		 예)    87, 11, 92, 14, 47
		
		 [문제2] 전교생의 총점과 평균 출력
		 예)    총점(251) 평균(50.2)
		
		 [문제3] 성적이 60점 이상이면 합격. 합격생 수 출력
		 예)   2명
	 */

	console.log("ex.1")
	 var array = [];
	 var sum = 0 
	 var student = 0

	 for (i=0;i<5;i++){
		let r = parseInt(Math.random()*100)+1
		array[i]=r
		sum += r
		if (r>=60){
			student += 1
			console.log(i, "pass")
		}
	 }
	 console.log(array)


	console.log("ex.2")
	console.log("sum",sum,"  avg",sum/3)
	



	console.log("ex.3")
	console.log("pass-student :" ,student)


