/*
	아래배열이 앞에서 부터 출력하나 뒤에서 부터
     거꾸로 출력하나 똑같은수 인지 판별하시오.	
	앞에서 출력하나 뒤에서 출력하나 서로 같으면
     true 하나라도 틀리면 false 를 출력하시오.

 */
 var arr1 = [1,5,4,4,5,1];
var count = 0

 for(i=0;i<arr1.length/2; i++){
     if(arr1[i]== arr1[5-i]){
          count ++
     } 
     else{
          count = 0
     }
 }
 
 if (count == arr1.length/2){
     console.log("true")
 }
 else{
     console.log("no true")

 }