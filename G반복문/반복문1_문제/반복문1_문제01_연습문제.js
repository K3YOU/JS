
	/*
	     [문제1] 1~4까지 출력
		 [정답1] 1,2,3,4
	
		 [문제2] 4~1 까지 거꾸로 출력
		 [정답2] 4,3,2,1
 
	 */

   
console.log("ex.1")

var i = 1
while(i<= 4){
	console.log(i)
	i += 1
}


console.log(" ")

console.log("ex.2")

var i = 4 // while에서 i =4일 때 i += 1 되므로 i = 5
while(i>= 1){
	console.log(i)
	i -= 1
}

console.log(" ")
console.log("cf")


let j = 4 
while(j>= 1){
	console.log(j)
	j -= 1
}
