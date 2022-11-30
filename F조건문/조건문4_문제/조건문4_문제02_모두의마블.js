
    /*	
		[모두의마블게임] 		
		 - 철수는 지금 모두의마블게임을 하고있다.
		 - 게임은 0 ~ 20까지 이동할수있는거리가있다.
		 - 지금 철수의 차례이고 ,  
		 - 현재의 위치는 시작점으로부터  9 만큼 이동했다.		  //9
		 - 1 ~ 6의 눈금이 있는 주사위 2개를 던진다.
		 - 주사위 숫자의  합만큼 이동한다. 
		 - 다음 이동할 철수의 위치를 출력하시오.
		 	
		 [조건]
		 [1] 두 주사위 숫자가 서로다를경우는 현재위치에서
		 	주사위숫자 합만큼 이동한다. 
		 	  예) 3, 5 ==> 8 만큼이동한다.
	
		 [2] 두 주사위 숫자가 같은경우 보너스 이동거리 6 추가한다.
		      예) 2 , 2  ==> 4 + 6 만큼이동한다.
	
		 [3] 14,15,16 번의 위치에 함정이 있다. 
			  함정에 걸리면 다시 주사위2개를 던지고 
			  그합이 6이하이면 [패널티] 처음위치(0)로 이동한다.
	          그합이 7이상이면 [패널티없음] 함정탈출(현재자리를 유지한다)
	
		 [4] 20 이상의 값이 나오면 "승리" 를 출력한다.
	 */

		let dice1 =parseInt(Math.random()*6)+1
		let dice2 =parseInt(Math.random()*6)+1
		console.log("주사위 던진다 ",dice1,dice2)

		let cur = 9
		let move = 0

		//dice != dice
		if (dice1 != dice2){
			move = cur +dice1+dice2	
			console.log("move ",move)
		}
		//dice == dice
		else {
			move = cur + dice1+dice2+6
			console.log("move ",move)

		}
		//move =14,15,16
		  // sum <= 6 ->0 ->패널티
		  // sum >= 7 ->같은자리-> 패널티없음
		if (move == 14 || move == 15|| move == 16){
			
			let dice3 =parseInt(Math.random()*6)+1
			let dice4 =parseInt(Math.random()*6)+1
			console.log("move>=14 agian",dice3,dice4)
			sum = dice3+dice4
			console.log("sum",sum )

			if (sum<= 6){
				move = 0
				console.log("penalty")
			} 
			if (sum>= 7){
				console.log("no penalty")
			}

		}
		 
		//move =20
		if (move >= 20){
			console.log("승리 ",move)
		}
