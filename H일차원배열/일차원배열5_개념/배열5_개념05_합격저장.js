
    /*
    [문제] 
    아래는 시험결과 이다 시험에 합격한 사람의 번호만 win2 에 저장한다. (60점이상 합격)
    단, 앞에서부터 저장하시오.
    [예] 
    win2 = [1001, 1003, 0];

   
        */


    var student = [ 1001, 80 , 1002, 23, 1003 , 78 ];
    var win2 = [ 0,0,0 ];
    var index = 0 // win2자리에서 커질 숫자를 하나 정해야한다. 

    for(i=0;i<student.length;i+=2){ // 2씩 증가해야한다. 모든 숫자를 다 넣는게 아니니깐
        //if(i % 2 == 1){ 
        if(student[i+1]>=60){ // 성적 자리의 숫자가 60이상이면
            win2[index] =student[i] 
            index += 1
        }
        //}
    }
    console.log(win2)