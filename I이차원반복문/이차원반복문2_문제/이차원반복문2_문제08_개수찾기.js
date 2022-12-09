

	/*
	 * [개수찾기]
	 
	  	 아래배열의 문자들을 새로운배열두개를 만들어서 문자별 개수로 모으시오.
		 var arr = [ "a", "b", "c", "c", "d", "a", "c", "c", "b", "c", "b" ];	
	  	 var str = ["a","b","c","d"];
	  	 var count = [2,3,5,1];


        	
	 */

	var arr = [  "a", "b", "c", "c", "d", "a", "c", "c", "b", "c", "b"];	
	var str = []; // 문자종류
	var count = []; //문자개수

	///문자종류별로 나누기
	var stri = 0;        
	for(var i = 0; i < arr.length; i++){
		val = arr[i];//a ,,, c
		check = false;

		///중복방지(str.length = 0~stri)
		for(var j = 0; j < str.length; j++){
			if(val == str[j]){ //str[0~3]까지 다 val이랑 비교
				check = true;
			}
		}
		if(check == false){
			str[stri] = val; //str[0] = a
			stri += 1;//1,,,3
		}
	}
	console.log(str);
	
	///문자개수별로 나누기
	// 빈 배열 0으로 다 채우기
	for(var i = 0; i < str.length; i++){
		count[i] = 0;
	}
	console.log(count)

	//문자열 개수 구하기 : arr[0]이 str(0~last)까지 다 만난 뒤 중복되는 값을 만날 때마다 카운트 들어나게
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < str.length; j++){
			if(arr[i] == str[j]){
				count[j] += 1;
			}
		}
	}
	console.log(count);


	