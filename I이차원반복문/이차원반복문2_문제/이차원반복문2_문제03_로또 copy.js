

    /*
	  [문제]
	  
	 	[로또] 
		1~45사이의 랜덤값 6 개를 lotto1 에 저장할려고 한다.
		[조건] 중복되는숫자는 없어야한다. 
*/


var lotto1 = [];



for (i=0;i<6;){
	r = parseInt(Math.random()*45)+1

	var check = false

	for(j=1; j <lotto1.length;j++){
		if(r==lotto1[j]){
			check = true
		}
	}
	if(check== false){
		lotto1[i] = r
		i++
	}
}
console.log(lotto1)