'use strict'
/*
const switcher = document.querySelector("btn");

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});*/
/*
金額
1:0.4876
2:0.8763
3:0.7634
 */
var totalBill=document.getElementById("bill");//總金額

function btn_add(itemID){ //增加數量
    var tempitemID=itemID;
    var btemp1, btemp2, btemp3, allbtemp, tbtemp;
    if (tempitemID==1){
        var txt1=document.getElementsByClassName("item01")[0];
        var temp1=txt1.value;
        totalBill=document.getElementById("bill");//總金額
        temp1++;
        txt1.value=temp1;
        btemp1=Number(totalBill.innerText)+0.4876;        
        totalBill.innerText=btemp1.toFixed(4);
        //totalBill.value=parseFloat(totalBill.value)+parseFloat(btemp1);
        //totalBill.value=parseFloat(btemp1);
        //totalBill.innerHTML++;
    }
    else if (tempitemID==2){
        var txt2=document.getElementsByClassName("item02")[0];
        var temp2=txt2.value;
        temp2++;
        txt2.value=temp2;
        btemp2=Number(totalBill.innerText)+0.8763;      
        totalBill.innerText=btemp2.toFixed(4);
        //totalBill.value=parseFloat(totalBill.value)+parseFloat(btemp2);
        //totalBill.innerHTML=btemp2;
        //totalBill.innerHTML++;
    }
    else if (tempitemID==3){
        var txt3=document.getElementsByClassName("item03")[0];
        var temp3=txt3.value;
        temp3++;
        txt3.value=temp3;
        btemp3=Number(totalBill.innerText)+0.7634;     
        totalBill.innerText=btemp3.toFixed(4);
        //totalBill.value=parseFloat(totalBill.value)+parseFloat(btemp3);
        //totalBill.innerHTML=btemp3;
        //totalBill.innerHTML++;
    }
    
    //allbtemp=btemp1+btemp2+btemp3;
    //tbtemp=totalBill+allbtemp;
    //totalBill.value=tbtemp;
    //totalBill.value=parseInt(allbtemp);
}
function btn_sub(itemID){ //減少數量
    var tempitemID=itemID;
    var totalBill=document.getElementById("bill");
    var btemp1, btemp2, btemp3, allbtemp, tbtemp;
    if (tempitemID==1){
        var txt1=document.getElementsByClassName("item01")[0];
        var temp1=txt1.value;
        if(temp1>0){
            temp1--;
            txt1.value = temp1;
            btemp1=Number(totalBill.innerText)-0.4876;
            totalBill.innerText=btemp1.toFixed(4);
            //totalBill.innerHTML--;            
        }else{
            txt1.value = 0;
        }
    }
    else if (tempitemID==2){
        var txt2=document.getElementsByClassName("item02")[0];
        var temp2=txt2.value;
        if(temp2>0){
            temp2--;
            txt2.value = temp2;
            btemp2=Number(totalBill.innerText)-0.8763;
            totalBill.innerText=btemp2.toFixed(4);
            //totalBill.innerHTML--;
        }else{
            txt2.value = 0;
        }
    }
    else if (tempitemID==3){
        var txt3=document.getElementsByClassName("item03")[0];
        var temp3=txt3.value;
        if(temp3>0){
            temp3--;
            txt3.value = temp3;
            btemp3=Number(totalBill.innerText)-0.7634;
            totalBill.innerText=btemp3.toFixed(4);
            //totalBill.innerHTML--;
        }else{
            txt3.value = 0;
        }
    }
}



