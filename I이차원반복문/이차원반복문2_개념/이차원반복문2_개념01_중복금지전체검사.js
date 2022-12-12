

/*
	중복숫자금지 ==> 1~4를 배열에 저장하는데 섞어서 중복없이 저장한다. 
*/

//ver. count 
	var arr = [];
	var i = 0
	var count = 0

	for(i=0;i<4;){
		var r = parseInt(Math.random()*4)+1 
		var count = 0 
		arr[i] = r // 넣고
		for(j=0;j<i;j++){ //i까지 돌리기
			if(arr[j] != r){
			count ++ // 아니면 늘어나기
			}
			
		}
		if(count == i){
			i++
		}
	}
	console.log("arr", arr)


//ver. shuffle 
var arr1 = [1,2,3,4]

for(i=0;i<100;i++){
	var index1 = parseInt(Math.random()*4)
	var index2 = parseInt(Math.random()*4)
	//console.log(index1,index2)
	var temp = arr1[index1]
	
	arr1[index1] = arr1[index2]
	arr1[index2] = temp
}

console.log(arr1)
	
console.log(end = " ")


//ver. true and false
var arr2 = []
var i = 0
while(true){
	
		var ran = parseInt(Math.random()*4)+1
		var check = false

		for(j=0;j<i ;j++){
			if (arr2[j]== ran){
				check = true
				console.log("check is true", check)
			}
		
		}
		if(check== false){ // check==flase가 두번째 for문 밑에 있어야한다.
			console.log("check is flase", check)
			
			arr2[i] = ran
			i++
		}


		if(i == 4){
			break
		}

}
console.log(arr2)

	


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	// var i = 0;
	// while(true){
	// 	var ran  = parseInt(Math.random() * 4) + 1;
	// 	var check = false;
	// 	console.log("i",i,"j",j,"ran",ran)
	// 	for(var j = 0; j < i; j++){
	// 		if(arr[j] == ran){// 만약 여기서 arr[0(i의 이전 수이자 j의 현재 수)] == r(현재 뽑은 랜덤 수)이면 체크가 트루가 된다.
	// 			check = true;  //true이면  중복이라서 안 넣는다.
	// 			console.log(check)
	// 		} // !=이면 체크는 false이므로 아래 if로 내려감
	// 	}
	// 	if(check == false){  // flase라는 것은 중복이 아니라는 뜻
	// 		console.log(check) 

	// 		arr[i] = ran; // 중복이 아니므로 넣는다.
	// 		i += 1;
	// 	}
	// 	if(i == 4){
	// 		break;
	// 	}
	// }
	// console.log(arr);
