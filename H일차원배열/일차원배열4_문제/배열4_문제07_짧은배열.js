
	/*
	   [문제] d의 값을 순차적으로 e에저장후 , 남은값은 f에 저장한다. 
	   [예]
            var d = [10,20,30,40,50,60];
            e = [10,20,30]
            f = [40,50,60];
        
	 */

   var d = [10,20,30,40,50,60];
   var e = [0,0,0];
   var f = [0,0,0];

for(var i=0; i< e.length;i++){
   e[i]=d[i]
   f[i]= d[i+3]
}
console.log(e)
console.log(f)
