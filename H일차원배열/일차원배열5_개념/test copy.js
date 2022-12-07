

    /*
        [배열]
            랜덤으로 1~9사이의 숫자를 저장한다. 
            arr 배열안에 랜덤숫자있으면 인덱스를 출력
            arr 배열안에 랜덤숫자가 없으면 "x" 를 출력 
        [예시]
            r = 3 : "x"
            r = 7 : 3
    */  
        arr = [4,5,6,7,8]

        r=parseInt(Math.random()*9)+1  // 랜덤 숫자 하나만 고르면 됨
        var c = 0
        console.log("r :",r)
        for(i=0;i<arr.length;i++){
            if(arr[i]== r){
                console.log("same num",i)
                break //  여기서 멈춰줘야 c의 숫자가 더 안 올라가서 아래 if의 콘솔이 출력이 안된다.
            }
            else;{
                c ++
            }
        }
        if(c == arr.length){
                console.log("none", "x")

        }




        // var r = parseInt(Math.random() * 9) + 1;
        // console.log("r" , r);
        // var c = 0;
        // for(var i = 0; i < arr.length; i++){
        //     if(arr[i] == r){
        //         console.log(i);
        //     }else{
        //         c += 1;
        //     }
        // }
        // if (c == arr.length){
        //     console.log("x");
        // }

    
