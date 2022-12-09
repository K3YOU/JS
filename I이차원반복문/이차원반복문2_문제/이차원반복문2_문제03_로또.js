

    /*
	  [문제]
	  
	 	[로또] 
		1~45사이의 랜덤값 6 개를 lotto1 에 저장할려고 한다.
		[조건] 중복되는숫자는 없어야한다. 
*/


var lotto1 = [];

for(var i = 0; i < 6;){  // 처음 for문은 랜덤숫잘 뽑아서 돌리는거고
	var r = parseInt(Math.random() * 45)+1;  

	var check = false; // 중복체크
 	
	for(var j = 0; j < lotto1.length; j++){ // 두번째 for문은 지금까지 뽑아온 숫자들 중에서 중복이 있는지 확인을 함.
		if(r == lotto1[j]){                 // j의 길이가 lotto1.length인 것도 i가 들어나면 배열의 값도 증가하므로 지금까지 뽑아온 숫자들의 중복을 확인할 수 있다.
			check = true;
		}
	}
	if (check == false){ // 중복이 없으면 추가
		lotto1[i] = r;
		i += 1;  // 다음 턴으로
	}
}
console.log(lotto1);