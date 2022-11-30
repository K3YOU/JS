    // 랜덤 
    var rand = Math.random(); // 0 < 소수점 < 1
    console.log("0~1 " + rand);

    // 만약에 0~2사이의 값을 뽑자.
    rand = rand * 3; //0부터3개 0,1,2
    console.log("0~3 " + rand);
    rand = parseInt(rand);
    console.log("정수값 " + rand);
    console.log("--------------------------------------")
    rand = parseInt(Math.random() * 3); // 0,1,2  // 3개 중에 랜덤으로 뽑고 정수화하기

    // 1~6 주사위?
    rand = parseInt(Math.random() * 6) + 1; // 1~6
    
    // 문제1) -3 ~ 3 사이의 랜덤값 출력.
    rand = parseInt(Math.random() * 7) - 3;   // 0<소수점 <7  if rand = 0, rand-3 = -3 // -3 ~ 3  
    console.log("결과 : " + rand);
