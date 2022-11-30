
    	/*
	   [문제] 
	   		1~ 999 의 범위안의 숫자중에서 8의 배수를 
               큰수부터 차례대로 4개 출력하시오.
	 */
let i = 999
let c = 0
while (i>= 1){
	if(i % 8 ==0){
		console.log(i)
		c += 1
		if (c==4){
			break
		}
	}
	i -= 1
}