	/*
	  1) seatList 는 영화관 7자리를 나타낸다. 
	  2) seatList 의 값들은 영화관 예매한 회원번호를 나타낸다. 
	  3) find의 값들은 검색하고자하는 회원번호들이다.
	  4) find 의 값을 영화관에서 찾아 자리를 출력해주자. 단, 없는번호는 "x" 출력
		- 예) [1] find : 1004 는 없으므로 "x" 출력 
	   	- 예) [2] find : 1003 는 0 , 1
	   	- 예) [3] find : 1001 는 6 
	   	- 예) [4] find : 1005 는 없으므로 "x" 출력  
      
      
		var seatList = [1003,1003,0,0,1002,0,1001];	
		var find = [1004,1003,1001,1005];
	 */




		 


	var seatList = [1003,1003,0,0,1002,0,1001];	
	var find = [1004,1003,1001,1005];

	for(var i = 0; i < find.length; i++){
		var c = 0;
		for(var j = 0; j < seatList.length; j++){
			if (find[i] == seatList[j]){
				console.log(find[i] , j);
			}else{
				c += 1;
			}
		}
		if (c == seatList.length){
			console.log(find[i] , "x");
		}
	}
 
	
