

    /*
        [배열]
            itemName 와  itemPrice 는 한쌍이며 , 아이템 이름과 가격을 뜻한다. 

            order 는 오늘 주문받은 리스트이다. 
            1,2,3,0,1,0 은 인덱스 번호이고 , 차례대로 
            감 , 귤 , 수박 , 사과 , 감 , 사과 이렇게 주문받은것이다. 

            cancle 은 주문취소 리스트이다. 
            순서대로 사과 , 수박 , 귤이 취소되었다. 

            오늘의 매출 총액을 구하시오.
    */  
    itemName = ["사과" , "감" , "귤" , "수박"]
    itemPrice = [1000,1200,1300,1400]
    order = [1,2,3,0,1,0]
    cancle = [0,3,2]

    var total = 0  // total 을 배열로 잡는게 아니라 하나의 변수로 잡는게 중요하다. (매출 총액은 하나의 값으로 존재하므로)


for(i=0;i<order.length;i++){
    total +=itemPrice[order[i]] 

}
console.log("일단 다 더한 값 :",total)

for(i=0;i<cancle.length;i++){
    total-=itemPrice[cancle[i]] 

}
console.log("취소 뺀 값 ==  매출 총액 :",total)




// for(i=0;i<cancle.length;i++){
//     cancle1[i] = itemPrice[cancle[i]]
// }
// console.log(cancle1)

// if(total[i]== cancle1[i]){
//     total[i] =0
// }
// console.log("일단 다 더한 값 :",total)









