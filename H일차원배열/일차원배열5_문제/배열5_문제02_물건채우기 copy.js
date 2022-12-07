
	/*
		편의점 물건채우기 
		철수는 편의점에서 아르바이트를 하고있다. 
		오늘 장사가 잘되서 라면이 많이 판매되었다.
		라면진열장에 라면들이 전부 채워질수있도록 라면을 채워보자.
		
		라면은 진열장은 한칸에 최대 5개씩 진열할수있으며,
		재고는 6개 밖에 없고 앞에서부터 순차적으로 채워넣는다. 
		재고를 다채웠을때 라면진열장의 모습을 출력해보자.
		
		[예] 
			
			1번은 3이므로 2개를 추가해 ==> +2
			2번은 5이므로 0개를 추가해 ==> +0
			3번은 2이므로 3개를 추가해 ==> +3
			4번은 1이므로 4개를 추가해야되지만 재고가 1개밖에없어서 +1
			
			최종으론 [5,5,5,2,2] 가된다. 

	 */


		var ramen = [3,5,2,1,2];	
		var last = 6;

		var index = 0

		
		while(true) {
		//for(i=0;i<ramen.length;i++)// for문으로 쓰면 라멘 배열의 길이만큼만 세고 카운트를 중간에 멈춘다.
			console.log("ramen's array :",ramen)
			console.log("index :", index)

			if(last == 0){  // 재고가 다 떨어진 경우
				break
			}
			if (index == 5){  //인덱스가 다 찬 경우
				break
			}

			if(ramen[index]<5){ 
				ramen[index] +=1
				last -= 1
			}
			if (ramen[index]==5){
				index ++
			}
		}
		console.log(ramen)