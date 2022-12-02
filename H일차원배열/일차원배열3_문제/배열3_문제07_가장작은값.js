
	/*
		[문제]
			array 배열에 -100~100사이의 랜덤값중 홀수만 5개 저장한다. 
	 		그중 가장작은값의 인덱스와 값을 출력한다. 
             
	 */

	var array=[]
	var min = 100
	var count = 0
	
	var run = true
	var i = 0 
	var ai = 0 // 홀수일때만 인덱스 세는 거
	for (run = true;run == true;){
		r =parseInt(Math.random()*201)-100
		
		if (count== 5){
			break // false이면 바로 여기서 끝내는게 아니라 밑으로 가서 나머지 식들 작동하고 끝남.
		}
		if (r % 2 != 0 ){
			//array[i] = r -> 이렇게 하면 짝수일 때는 건너뛰는게 아니라 공백으로 넣고 홀수 나오면 넣음
			array[ai] = r
			
			
			if (min > array[ai]){
				min = array[ai]
            }
			count += 1
			ai ++
		}
		i += 1
	}
console.log("array :", array)
console.log("min",min)

////////////////////////////////////////////////////다른 풀이//////////////////////////////////////////////////////////////

// 5개 런덤으로 저장
var arr=[]
var c = 0
var ai = 0
for (run =true; run == true;){
	if (c == 5){
		break
	}
	r1 =parseInt(Math.random()*201)-100
	if (r1 % 2 != 0){
	arr[ai] = r1
	ai += 1
	c += 1

	}
}
console.log(arr)

// 가장 작은 값 뽑기

var m = 100
for (i = 0;i <arr.length; i ++){
	if (arr[i]<m){
		m = arr[i]  // arr[ai]라고 쓰는건 위에서만 가능!
	}
}
console.log(ai,m)
