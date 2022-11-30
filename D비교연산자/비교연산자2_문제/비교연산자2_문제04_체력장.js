/*
	[설명]
		철수는 체력장을 한다.
		종목은 윗몸일으키기 이고, 1분에 35개를 하면 통과이다.
		철수는 매번같은속도로 3분20초에 123개를 한다.
	[문제]
		위 내용을 식으로 표현하고, 풀이과정을 주석으로 작성하시오.
*/

/*
60: x =200 : 123
200x = 123* 60
x = 123*60/200
철수는 1분에 몇개의 윗몸을 하는가?

*/

var chulsoo = 123/200   //count per 1sec
var chulsoo = 123/200 *60 //count per 1min
console.log(chulsoo>35) //if over 35, chulsoo will pass



