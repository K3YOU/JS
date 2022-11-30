
/*
	[문제]
		[1] 5~15 사이를 전부출력한다.
		[2] 반복문 종료후 7보다 큰수중 4의배수의 개수를 출력한다.
 */

		let i = 5
		let c = 0
		while (i<= 15){
			console.log(i)
			if (i>7 && i% 4 == 0){
				c += 1
			}
			i += 1
		}
		console.log("count",c)