
/*
		[셔플] 	
		 1) 인덱스 2개를 랜덤(0~5)으로 저장하고 각 인덱스의 값을 교환한다.
		 2) 위 1번을 10 번 반복하며 과정  출력 		
		예) 1 , 2 ==> [10,30,20,40,50,60];  // 20 과 30이 교환된다.		
		예) 4 , 1 ==> [10,50,20,40,30,60];  // 50 과 30이 교환된다.	
		예) 3 , 3 ==> [10,50,20,40,30,60]; // 같을땐 아무일도안생긴다.
		...
	*/

	var arr = [10,20,30,40,50,60];

for (i=0;i<10;i++){
	r=parseInt(Math.random()*6)
	console.log(r)
	

}