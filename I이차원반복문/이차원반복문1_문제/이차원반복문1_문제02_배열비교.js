
	/*
	  	[문제] 
		  	a 배열과  b배열을 서로 비교해서 
		    a 의 값이  b배열에 없으면 c 에저장
    		var a = [10,20,30,40];	
			var b = [10,5,20,9];
		[정답]
			[30, 40]
	*/
	var a = [10,20,30,40];	
	var b = [10,5,20,9];
	var c = [];
	var ci = 0;

	for(i=0;i<a.length;i++){
		var count = 0   // 꼭 여기에 써줘야함
	
		for(j=0;j<b.length;j++){
			if(a[i]!=b[j]){
				count++
			}else{
				
			}

		}
		
		if(count ==b.length){ // 30이 b의 요소를 다 둘려봤을 때 없으면
			c[ci] = a[i]
			ci++
		}
	}
console.log(c)




	// for(i =0;i<a.length;i++){
	// 	var check = false
	// 	for(j=0;j<b.length;j++){
	// 		if(a[i]==b[j]){
	// 			check = true; // 있으면
	// 		}
	// 		/*생략
	// 		if(a[i]!=b[j]){
	// 			check = false; // 있으면
	// 		}
	// 	    */

//			if(check==false){ //없으면
	// 			c[ci] = a[i]
	// 			ci += 1
	// 		}
	// }
	// console.log(c)






