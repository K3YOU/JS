
/*
	아래 indexList의 순서대로 valueList 값을 
	arr 배열에 삽입하려고한다. 
	전부 삽입후 결과를 출력해보자.
	삽입을 하고나면 기존의 값들은 삽입인덱스 부터 한칸씩 뒤로 이동하고
	맨뒤의 숫자는 삭제된다.

	[1] index = 2 , value = 60
	arr = [10,20,60,30,40];
		    
	[2] index = 1 , value = 70
	arr = [10,70,20,60,30];
		  
	[3] index = 0 , value = 80
	arr = [80,10,70,20,60];
	
	[4] index = 3 , value = 90
	arr = [80,10,70,90,20];
	
 */
	var arr = [10,20,30,40,50];		
	var indexList = [2,1,0,3];
	var valueList = [60,70,80,90];

// 문제푸는 순서
/*
1. 1차 for문 
arr[index]에 value[i]를 넣는다.
2. 2차 for문 : 
index~back까지 몇 번을 움직이는지 정한다.
*/


	//자리를 옮기려면 몇 번을 옮겨야할지 정해야한다.
	for(i=0;i<indexList.length;i++){
		index = indexList[i] // 위치 : arr에서 어디서부터 움직여야하는가
		back = arr.length -1 //제일 뒤 : 위치에서 제일 뒤까지 움직여야 하므로
		space = back - index // 간격 : 움직여야하는 횟수
	
		// 제일 뒤의 앞 자리 수부터 뒤로 옮겨야한다. 인덱스의 수부터 옮기면 인덱스 다음에 위치한 수를 옮길 때 다음에 위치한 수가 사라져버린다.
		//인덱스수부터 옮기면 인덱스 다음에 위치한 수를 옮길 때 다음에 위치한 수가 사라져버린다.
		for(j=0;j<space;j++){
			arr[back]= arr[back-1]
			back -= 1
		}

		// value 값을 arr[index]에 넣기
		arr[index] = valueList[i]
	}

	console.log(arr)
	
