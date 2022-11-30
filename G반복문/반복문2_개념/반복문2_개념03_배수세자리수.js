
    /*
	[문제]
	 	28 이상 999 이하의 28의 배수 중에서 가장큰수를 출력 
	[정답]
		980
*/

let i = 1000

while (i >= 28){
	if(i % 28==0){
		console.log(i)
		break // 출력하자마자 끝나게
	}
	i -= 1
}




// 다 나열하고 마지막에 큰 수 보는 형식 
let j = 28

while (j <= 999){
	if(j% 28==0){
		console.log(j)
			}
	j += 1
}