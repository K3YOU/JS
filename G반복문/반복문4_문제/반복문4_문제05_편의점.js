
    	/*
		[문제]
			철수가 편의점에서 우유를 15개 구입할려고한다. 
			한개에 1000원인 흰우유와 
			한개에 1200원인 초코우유를 합쳐서 총 15개 구입했다.
			20000원을 내고 4200원을 거슬러받았을때 
			철수가 구입한 흰우유는 몇개인가요??
	 */

			let total = 15
			let milk = 1000
			let choco = 1200
			let money = 20000
			let change = 4200

			let milk_c = 0
			let choco_c = 15

			let run = 1

			while (run == 1){
				if (milk_c+choco_c == 15 && money == change+milk*milk_c +choco*choco_c){
					console.log(milk_c)
					run = 0
				}
				milk_c += 1
				choco_c -= 1
			}