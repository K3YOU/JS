
    /*
	[문제]
		철수네반은 여학생 16명과 남학생 22명으로 구성되어있다. 
		팀을 나눠서 조별과제를 하려고한다. 
		각팀당 여학생과 남학생수를 똑같이 구성하고,
		최대한 많은팀을 만들때 남학생수가 2명이 남는다고할때
		몇팀을 만들수있는지 구하시오. 
 */
		let max = 0
		for (i=1;i<=20;i++){
			if(16 % i == 0 && 20 % i == 0){
				max = i
			}
		}
		console.log(max)