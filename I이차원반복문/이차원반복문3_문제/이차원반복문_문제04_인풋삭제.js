
/*
	아래 indexList 의 순서대로 arr 배열의 값을 삭제 하려고 한다. 
	삭제는 indexList 의 값위치까지 맨뒤에서 부터 한칸씩 앞으로 전진하고,
	맨뒤는 0을 저장한다. 
	indexList위치의 값이 0이면 "삭제불가" 메세지를 출력한다.

	[1] indexList = 2 ==>  arr = [10,20,40,50,0]
	[2] indexList = 1 ==>  arr = [10,40,50,0,0]
	[3] indexList = 0 ==>  arr = [40,50,0,0,0]
	[4] indexList = 3 ==>  arr = "삭제불가"

*/
	var arr = [10,20,30,40,50];
	var indexList = [2,1,0,3]; 

	// arr[index] 값을 먼저 지우고, 뒤에서부터 0을 집어넣는다

	for(i=0;i<indexList.length;i++){
		// arr[index]가 무언인지 정의하고, 해당 자리는 뒤의 값을 불러온다.
		index = indexList[i]
		if(arr[index] == 0){
			console.log("can't delete :",arr)
		}
		else{ //arr[index] != 0 
			console.log("0이 아닐 때 : " ,arr)
		}
		back = arr.length -1
		space = back - index

		//값을 뒤에서 앞으로 불러올 것 
		for(j=0;j<space;j++){
			arr[index]= arr[index+1]
			index ++
		}
		arr[back] = 0  // 제일 뒤의 값을 0이라고 지정해줘야 바로 위에서 돌릴 때 제일 뒤의 값을 앞으로 불러올 때 0이 옮겨지게 됨.
		
	}
//console.log(arr)