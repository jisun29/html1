let obj = {
    oddOrEven: function (num){
        if (num % 2==0){
            console.log('${num}은 짝수다')

        }
     else {
        console.log(num,"은 홀수다.")
     }
        }
    }


    function returnMaxNumber(arr){
        maxNum = -100;
        for (num of arr) {
            if (num > maxNum){
                maxNum=num;
                console.log('maxNum:', maxNum);
            }
        }
        console.log(returnMaxNumber([1,2,3,77,15]))
    }