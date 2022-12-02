    	/*
		[문제] 인덱스 2개(0~4)를 랜덤으로 저장하고  값 교체하기
		
         var array = [ 10, 20, 30, 40, 50 ];	
		[예시]
         var i1 = 1;
         var i2 = 3;		


      [결과]
         array = [10, 40, 30, 20, 50]
	*/
   var array = [ 10, 20, 30, 40, 50 ];	
	console.log(array)
   // 풀이식1 ) 
   ///랜덤숫자를 중복으로 안 뽑고 배열 바꾸기는 반복문 안 씀
   while (true){   
       var i1 = parseInt(Math.random()*5); //1
       var i2 = parseInt(Math.random()*5); //0
       if(i1 != i2){
       console.log(i1,i2)
      break 
      }
      }
       temp = array[i1]
       array[i1] = array[i2]
       array[i2] =temp
       console.log(array)



      //풀이식2)
      /// 반복문으로 같으면 바꾸기


      //  for (i=0;i<array.length;i++){
      //    if (i1>i2){
      //       if(i == i1){
      //          temp = array[i1] 
      //          array[i1] = array[i2]
      //       }
      //       console.log(temp)
   
      //       if(i == i2){
      //           array[i2] = temp
      //          }
      //    }
      //    else {
      //       if(i == i2){
      //          temp = array[i2] 
      //          array[i2] = array[i1]
      //       }
      //       console.log(temp)

   
      //       if(i == i1){
      //           array[i1] = temp
      //          }

      //    }
      //    /*if(i1 == i){
      //       temp = array[i1] 
      //       array[i] = array[i2]/
      //    }

      //    if(i2 == i){
            
      //       array[i2] = temp
      //       }*/
      //  }
      //  console.log(array)



      //  i1 ->array[i]=i2
      //  i2 ->array[i]=i1
