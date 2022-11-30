
    /*
	[369게임]
	[1] 1~99 사이의 랜덤 숫자를 저장한다.
	[2-1] 랜덤숫자중에서 3이나 6이나 9의 개수가  2개면, 짝짝을 출력한다.
	[2-2] 랜덤숫자중에서 3이나 6이나 9의 개수가  1개면, 짝을 출력한다.
	[2-3] 0개이면, 해당 숫자를 출력한다.
	(예)
		33	==> 짝짝
		16	==> 짝
		 7	==> 7
*/

let r = parseInt(Math.random()*99)+1
console.log(r)

let ten = parseInt(r/10)
let one=parseFloat(r%10)

let count = 0


if (ten == 3 ||ten == 6 || ten == 9){
	count += 1
	if(one == 3 ||one == 6 || one == 9){
		count += 1
	}
}
else{
	if(one == 3 ||one == 6 || one == 9){
		count += 1
	}
}



if (count == 0){
	console.log(r)
}
if (count == 1){
	console.log("짝")
}
if (count == 2){
	console.log("짝짝")
}



