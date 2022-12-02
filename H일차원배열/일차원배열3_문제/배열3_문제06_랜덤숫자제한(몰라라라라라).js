
	/*
	 	[문제] 
	 		a 배열안에 1 또는 7만 랜덤으로 7개 저장후 출력. 
	 		단, 7은 3개 1은 4개여야한다.
	 		전부 랜덤위치여야한다.
	 	[예]
	 		[ 1, 7, 7, 1, 1, 7, 1];
	 		[ 7, 1, 1, 7, 7, 1, 1];

             	
	 */
	var a=[]
	var count7 =0
	var count1 =0

	var i = 0
	var run = true


	
while (i<100){
	if (count1 + count7 == 7){ //#1이랑 7의 개수가 합쳐서 7개여야 하므로  # count1과 count7의 범위롤 각자 정하지 않아도 된다.
		break }//#멈춰!! ->여기서 밖의 프린트로

	r = parseInt(Math.random()*2) 

	if (r == 0 && count7 < 3){// <3인 이유는 2일 때 밑으로 내려가서 +1이 되니깐
		a[i] = 7
		i += 1

		count7 += 1 } //  # count7이 4가 된다면 더 이상 안 올라가고
	else if (r == 1 && count1 < 4){// #count1만 올라감
		a[i] = r
		i += 1

		count1 += 1}
	//i += 1  빈게 들어감
}
console.log(a)


	// for(i=0;i<1000;i++){
	// 	r =parseInt(Math.random()*2)
	// 	if (r == 0){
	// 		r = 7
	// 		a[i] =r
	// 		c7++
	// 		if (c7 >3){
	// 			// 여기에 이건 멈추고 다른건 돌아가는 기능

	// 		}
	// 	}
	// 	else {
	// 		a[i] =1
	// 		c1 ++
	// 		if (c1 > 4){
				
	// 		}
	// 	}
	// }
	// console.log(a)