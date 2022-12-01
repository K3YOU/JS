
/*
	 * [문제] 
	 * 	 	100의 약수중에서 큰수부터 4개만 출력
	 */

let count = 0
for (i= 100;i>=1; i--){
	if (100 % i == 0){
		console.log(i)
		count +=1
		if (count == 4){
			break
		}
	}
	i -= 1
}