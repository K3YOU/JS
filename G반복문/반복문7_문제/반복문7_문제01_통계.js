
    	/*
	 * [랜덤점수통계]
	 * 
 *	   1. 10회 반복을 한다.
	 * 2. 0~100 사이의 랜덤 숫자를 출력한다 (학생 점수)
	 * 3. 번호는 1번부터 시작한다. 번호와 점수를 출력한다 
	 * 4. 성적이 60점 이상이면 합격생이다. 합격생은 점수옆에[합격] 불합격은 [불합격] 을 출력한다. 
	 * 5. 전교생(10명)의 총점과 평균을 출력한다.
	   6. 1등의 번호와 점수를 출력한다.
	 */

	   let sum = 0
	   let first = 0 //1등의 점수
	   let first_index = 0   // 1등의 번호


	   for(i=1;i<=10;i++){  //i : student num
			score =parseInt(Math.random()*100)+1  

			if (score>= 60){
				sum += score
				console.log(i, "pass")
				if (score >first){
					first_index = i
					first = score

				}
			}
			else{
				sum += score
				console.log(i, "non pass")
				if (score >first){
					first_index = i

					first = score
				}
			}

			
			


	   }
	   console.log("first :",first_index,first)
	   console.log("sum:",sum)
	   console.log("avg :",sum/10)
