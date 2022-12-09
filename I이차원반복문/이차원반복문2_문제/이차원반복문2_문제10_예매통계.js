/*
	    var seatList = [1003,1003,0,0,1002,0,1001];
		var numList= [1001,1002,1003,1004];
		var countList = [];

	 	1) seatList 는 영화관 7자리를 나타낸다. 
	 	2) seatList 의 값들은 영화관 예매한 회원번호를 나타낸다. 
	 	3) numList 는 회원번호이다.
	 	4) countList 는 각회원들이 예매를 얼마나 했는지 개수를 표현한다.
	 	5) seatList 를 검사해서 각 회원들이 예매한 수를 countList에저장한다.
	  
	  	예) var countList = [1,1,2,0];
	 */
	
	var seatList = [1003,1003,0,0,1002,0,1001];
	var numList = [1001,1002,1003,1004];
	var countList = [];

	//countList 0으로 채우기
	for(var i=0;i<numList.length;i++){
		countList[i] = 0
	}
	console.log(countList)

	//넘리스트의 요소가 하나가 좌석리스트의 전부를 돌아야함.

	for(var i = 0;i<numList.length;i++){
		for(j=0;j<seatList.length;j++){
			if(numList[i]== seatList[j]){
				countList[i] += 1
			}
		}
	}
	console.log(countList)
	