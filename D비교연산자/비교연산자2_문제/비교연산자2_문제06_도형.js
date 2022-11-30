/*
	[설명]
  		사각형가로는 7이다. 
	 	사각형가로는 삼각형가로와 같다. 
	 	삼각형 가로는 삼각형 세로보다 2크다.	   	 
	 	삼각형 넓이 3개의 합이 사각형의 넓이와 같다. 
	[문제]
		위 식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/

var rec_garo = 7
var tri_garo = rec_garo //7
var tri_sero = tri_garo -2 //5

var tri_area = tri_garo*tri_sero*1/2 //35/2
var rec_sero = 3*tri_area/rec_garo

var rec_area = rec_garo*rec_sero

console.log(3*tri_area == rec_garo*rec_sero) 
console.log(rec_sero)