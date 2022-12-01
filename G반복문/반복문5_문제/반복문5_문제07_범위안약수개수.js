
	/*
	 * [문제] 
	 * 	48의 약수중 홀수의 개수를 출력하시오.
	 */

let count = 0
for (i=48;i>=1; i--){
	if (48 % i == 0){
		count +=1
	}
	i -= 1
}
console.log(count)