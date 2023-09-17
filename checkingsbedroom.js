let question = Math.floor(Math.random()*1)+1;
console.log (question)
var checking = document.querySelector('.inputtocheck');

function reload_interval(time){
    setTimeout(function(){
        location.reload();
    }, time);
}

    document.getElementById("trueanswerbedroom").innerHTML=sessionStorage.trueansbedroom;
    document.getElementById("allanswerbedroom").innerHTML=sessionStorage.allansbedroom1;

if (question === 1){
    document.getElementById("translatebedroom").innerHTML=bedroomeng1;
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check1();
        function check1 () {
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===bedroomrus1v1){
            sessionStorage.trueansbedroom++;
            sessionStorage.allansbedroom++;
            location.reload(true);     
        }
        else if (ischecking==='хз'){
            if (localStorage.bedroomw1==='off'){
                sessionStorage.allansbedroom++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ bedroomrus1v1 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + bedroomeng1 + '</div><br></div><hr>';
                localStorage.bedroomw1='on';
                location.reload(true);
            }
            else if (localStorage.bedroomw1==='on'){
                sessionStorage.allansbedroom++;
                location.reload(true);
            }
        }}}})}

else if (question === 1){
    document.getElementById("translatebedroom").innerHTML=bedroomeng1;
checking.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        check1();
        function check1 () {
        var ischecking = document.querySelector('.inputtocheck').value;
        if (ischecking===bedroomrus1v1){
            sessionStorage.trueansbedroom++;
            sessionStorage.allansbedroom++;
            location.reload(true);     
        }
        else if (ischecking==='хз'){
            if (localStorage.bedroomw1==='off'){
                sessionStorage.allansbedroom++;
                localStorage.otvet += '<div style="margin-top: 10px; marging-bottom: 23px;"><div style="color: black; font-size: 20px; width: 50%; float: left;">'+ bedroomeng2 + '</div><div style="color: black; font-size: 20px; width: 50%; float: left;">' + bedroomrus2v1 + '</div><br></div><hr>';
                localStorage.bedroomw1='on';
                location.reload(true);
            }
            else if (localStorage.bedroomw1==='on'){
                sessionStorage.allansbedroom++;
                location.reload(true);
            }
        }}}})}
