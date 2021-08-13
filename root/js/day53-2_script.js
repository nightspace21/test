// day53-2_script.js


function lottogo(){
    // console.log('lotto go');

    //숫자 1~45의 숫자중 랜덤하게 7개의 숫자를 만들어 얻습니다.
    var count = 0, rNum = 0, lNum = [], flag = true;
    while(count < 7){
        // rNum = Math.floor(99.9999999);
        rNum = parseInt(Math.random()*45+1);
        for(var i=0; i < count; i++){
            if(lNum[i] == rNum){flag = false;}
        }
        if(flag){
            lNum[count] = rNum;
            // console.log(rNum);
            count++;
        }
        flag = true;
    }

    for(var n=0; n < 7; n++){
        document.getElementById("n"+n).innerText = lNum[n];
    }
}

