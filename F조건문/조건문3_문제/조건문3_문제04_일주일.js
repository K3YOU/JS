
    /*
	 * [문제]
	 * 
	 *  [요일 맞추기]
	 *  
	 * 	이번달 1일이 수요일이라고 할때, 
	 *  랜덤으로 1~31을 저장하고 해당 요일 출력한다. 
	 *  
	 *  (예)
	 *   3일 ==> 금요일
	 */	

	//let day1 = wen
	//let day2 = thur
	//let day3 = fri
	//let day4 = sat
	//let day5 = sun
	//let day6 = mon
	//let day7 = tue // 나머지 : 0

	let day = 0 // 해당 요일
	
	let date = parseInt(Math.random()*31)+1
	console.log(date)

	if (date % 7 == 1){
		//day = day1
		console.log(date,"일", "==>","wen")
	}
	if (date % 7 == 2){
		//day = day2
		console.log(date,"일", "==>","thur")
	}
	if (date % 7 == 3){
		//day = day3
		console.log(date,"일", "==>","fri")
	}
	if (date % 7 == 4 ){
		//day = day4
		console.log(date,"일", "==>","sat")
	}
	if (date % 7 == 5 ){
		//day = day5
		console.log(date,"일", "==>","sun")
	}
	if (date % 7 == 6 ){
		//day = day6
		console.log(date,"일", "==>","mon")
	}
	if (date % 7 == 0 ){
		//day = day7
		console.log(date,"일", "==>","tue")
	}
