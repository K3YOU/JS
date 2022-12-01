
    	/*
		[문제] 
			45와 60 , 75의 최대공약수를 구하시오.
	 */
	let max = 0
	for (i=1;i<=40;i++){
		if(45 % i == 0 && 60 % i == 0 && 75 % i == 0){
			max =i
		}
	}
	console.log(max)