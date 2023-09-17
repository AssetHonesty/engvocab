let question = Math.floor(Math.random()*10)+1;
console.log(question)
var checking = document.querySelector('.inputtocheck');

function reload_interval(time){
    setTimeout(function(){
        location.reload();
    }, time);
}

    document.getElementById("trueanswer").innerHTML=sessionStorage.trueans;
    document.getElementById("allanswer").innerHTML=sessionStorage.allans;

if (question === 1){
    document.getElementById("translate1").innerHTML=eng1;
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check1();
        function check1 () {
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus1v1){
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);
        }
        else if(ischecking===rus1v2){
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);
        }
        else if (ischecking===rus1v3){
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);
        }
        else if (ischecking==='хз'){
            if (localStorage.w1==='off'){
                sessionStorage.allans++;
                localStorage.otvet +='<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng1 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus1v1 + ', ' + rus1v2 + ', ' + rus1v3 +'</div><br></div><hr>';
                localStorage.w1='on';
                location.reload(true);
            }
            else if (localStorage.w1==='on'){
                sessionStorage.allans++;
                location.reload(true);
            }
        }
        }
    }
})}

else if (question === 2){
    document.getElementById("translate1").innerHTML=eng2;
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check2();
        function check2 () {
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus2v1){
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);     
        }
        else if (ischecking==='хз'){
            if (localStorage.w2==='off'){
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng2 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus2v1 + '</div><br></div><hr>';
                localStorage.w2='on';
                location.reload(true);
            }
            else if (localStorage.w2==='on'){
                sessionStorage.allans++;
                location.reload(true);
            }
        }
/*        else {
            sessionStorage.allans++;
        }*/
        }
    }
})}

else if (question === 3){ /*change1*/
    document.getElementById("translate1").innerHTML=eng3; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check3(); function check3 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus3v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w3==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng3 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus3v1 +'</div><br></div><hr>';
                localStorage.w3='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w3==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
/*        else {
            sessionStorage.allans++;
        }*/
        }
    }
})}

else if (question === 4){ /*change1*/
    document.getElementById("translate1").innerHTML=eng4; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check4(); function check4 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus4v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w4==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng4 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus4v1 +'</div><br></div><hr>';
                localStorage.w4='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w4==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
/*        else {
            sessionStorage.allans++;
        }*/
        }
    }
})}

else if (question === 5){ /*change1*/
    document.getElementById("translate1").innerHTML=eng5; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check5(); function check5 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus5v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w5==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng5 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus5v1 +'</div><br></div><hr>';
                localStorage.w5='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w5==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
/*        else {
            sessionStorage.allans++;
        }*/
        }
    }
})}

else if (question === 6){ /*change1*/
    document.getElementById("translate1").innerHTML=eng6; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check6(); function check6 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus6v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w6==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng6 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus6v1 +'</div><br></div><hr>';
                localStorage.w6='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w6==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
/*        else {
            sessionStorage.allans++;
        }*/
        }
    }
})}

else if (question === 7){ /*change1*/
    document.getElementById("translate1").innerHTML=eng7; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check7(); function check7 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus7v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w7==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng7 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus7v1 +'</div><br></div><hr>';
                localStorage.w7='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w7==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
        }
    }
})}

else if (question === 8){ /*change1*/
    document.getElementById("translate1").innerHTML=eng8; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check8(); function check8 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus8v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w8==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng8 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus8v1 +'</div><br></div><hr>';
                localStorage.w8='on'; /*change8*/
                location.reload(true);
            }
            else if (localStorage.w8==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
        }
    }
})}

else if (question === 9){ /*change1*/
    document.getElementById("translate1").innerHTML=eng9; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check9(); function check9 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus9v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w9==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng9 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus9v1 +'</div><br></div><hr>';
                localStorage.w9='on'; /*change9*/
                location.reload(true);
            }
            else if (localStorage.w9==='on'){ /*change9*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
        }
    }
})}

else if (question === 10){ /*change1*/
    document.getElementById("translate1").innerHTML=eng10; /*change2*/
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check10(); function check10 () { /*change3-2*/
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===rus10v1){ /*change4*/
            sessionStorage.trueans++;
            sessionStorage.allans++;
            location.reload(true);   
        }
        else if (ischecking==='хз'){
            if (localStorage.w10==='off'){ /*change5*/
                sessionStorage.allans++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ eng10 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + rus10v1 +'</div><br></div><hr>';
                localStorage.w10='on'; /*change10*/
                location.reload(true);
            }
            else if (localStorage.w10==='on'){ /*change10*/
                sessionStorage.allans++;
                location.reload(true);
            }
        }
        }
    }
})}