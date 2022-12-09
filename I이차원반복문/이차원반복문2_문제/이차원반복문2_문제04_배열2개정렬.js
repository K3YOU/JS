
	/*
		[정렬]
	     두 배열을 하나로 합치고 오름차순으로정렬하시오.	
		 	var arr1 = [9,10,3,2,20,19];
			var arr2 = [15,12,1,5,7,8];	
			var test = []
		 예) 1,2,3,5,7,8,9,10,12,15,19,20

	 */
		 var arr1 = [9,10,3,2,20,19];
		 var arr2 = [15,12,1,5,7,8];	
		 var test = []
	 
		 var ti = 0;

		 //arr1을 넣는다
		 for(var i = 0; i < arr1.length; i++){
			 test[ti] = arr1[i];
			 ti += 1;
		 }
		 console.log(test)

		 //arr2를 넣는다
		 for(var i = 0; i < arr2.length; i++){
			 test[ti] = arr2[i];
			 ti += 1;
		 }
		 console.log(test)
	 
		 //오름차순 식으로 교환한다.
		 for(var i = 0; i < test.length; i++){ // i = 0,1......test
			 for(var j = i; j < test.length; j++){ //j = 0~test, 1~test,.....,test
				 
				if (test[i] > test[j]){ 
					 temp = test[i];
					 test[i] = test[j];
					 test[j] = temp;
				 }
			 }
		 }
		 console.log(test);
	 
