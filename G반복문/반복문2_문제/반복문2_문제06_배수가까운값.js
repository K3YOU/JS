
    /*
	[문제] 
  		6의 배수를 순차적으로 검사한다. 
  		그중 100에 가장가까운 수를 출력 
 		정답 : 102
*/

let i = 1
let f = 0
let l = 0

while(i<= 100){
	if (i% 6 == 0){
		f = i
	}
	i += 1
	l = f + 6
}
console.log(f,l)

//f랑 l중에 100이랑 더 가까운 값 찾기 ->새로운 변수

let f_result = 100- f
let l_result = l - 100

if (l_result <0){   //l_result가 음수이면 양수로 만들어주기
	l_result = -l_result
}

if (f_result>l_result){
	console.log(l)
}
else{
	console.log(f)

}



