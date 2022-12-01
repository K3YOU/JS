    	/*
	 * [문제]
		학교에서 집까지 갈때 시속 15km로 자전거를 타고 가면, 
		시속 6km로 걸어가는거보다 18분 빨리 도착한다고 한다.
		학교에서 집까지의 거리를 구하시오.
	 */
		//분속
		let bike = 15/60
		let walk = 6/ 60

		let time = 0


		while (true){
			if (time *bike == (18+time)*walk){
				console.log("time",time)
				let distnace = time *bike // 이게 여기 들어가 있어야한다. 아님 거리 = 0 나옴

				console.log("distance",distnace)

				flase
			}

			time += 1
		}
		


		/*distance
		x*15/60 = (18 + x)*6/60

		*/

