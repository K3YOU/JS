
/*
	chul는 학교에서 산수시험을 봤다. 
	a배열의 숫자와 b배열의 숫자의 각각의 값의 합을 구하는 시험이다.
	시험은 인덱스 순차적으로 제시된다.	
	chul의 답안지와 비교해서 chul의 정답개수를 출력하시오.	
	아래 답안지는 chul가 작성한답이다. 
	chul는 답을 문제순서대로 적은것이 아니라 뒤죽박죽 적었다.
	위 문제의 해답이 chul의 답안지에 있으면 정답이다.
	단, 같은 인덱스의 자리가 아니여도 상관없다. 

	var a = [4, 65, 23, 1, 45, 7];
    var b = [61, 2, 54, 3, 5, 6];		
    var chul = [67, 13, 2, 22, 65, 4];
	
	정답은 [ 65, 67, 77, 4, 50, 13 ] 이고,
	chul의 답은 [67, 13, 2, 22, 65, 4] 이다.
	위치에 상관없이 정답을 찾는 문제이므로 , [65, 67, 4, 13] 총 4문제를 맞췄다. 

	

*/

	var a = [4, 65, 23, 1, 45, 7];
    var b = [61, 2, 54, 3, 5, 6];		
    var chul = [67, 13, 2, 22, 65, 4];

//a와 b의 합을 구한다음 chul꺼랑 비교
	var ab  =[]  
    for(i=0;i<a.length;i++){
	ab[i] = a[i] +b[i]
	}
console.log(ab)

var count = 0
for(j=0;j<chul.length;j++){
	for(z=0;z<ab.length;z++){
		if(chul[j]==ab[z]){
			console.log(chul[j]);
			count ++
			
		}
	}
}
console.log( count+"개를 맞췄다")


console.log(end=" ")


var sum = []
	
	
	
	for(var i = 0; i < a.length; i++){
		sum[i] = a[i] + b[i];
	}
	var count = 0; // 정답 몇 개 맞췄는지 
	for(var i = 0; i < chul.length; i++){
		for(var j = 0; j < sum.length; j++){
			if(sum[i] == chul[j]){
				console.log(chul[j]);
				count += 1;
			}
		}
	}
	console.log( count+"개를 맞췄다");




