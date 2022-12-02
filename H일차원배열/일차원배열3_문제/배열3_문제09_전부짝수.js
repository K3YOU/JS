
/*
	[문제]
		아래 배열의 랜덤값 -100 ~ 100 사이의 랜덤값을 4개 저장한다.
		배열의 랜덤값이 모두 짝수면 true 출력하고,
		하나라도 짝수가 아니면 false를 출력한다.
		단, 0은 짝수이다.
	
 */
	var arr = [];
	
	// 랜덤값 4개 저장

	var ai = 0
	var count = 0
	var c_even = 0
	var c_odd = 0

for (i=0;i<100;i++){
	if (count == 4){
		break
	}
	r =parseInt(Math.random()*201)-100
	arr[ai] = r
	ai ++
	count += 1
	if (r % 2 == 0){
		c_even += 1
	}
	else{
		c_even = 0
	}

}
console.log(arr)

 // 짝수 홀수 출력
if (c_even == 4){
	console.log("this array is even")
}
else{
	console.log("this array is not even")

}
