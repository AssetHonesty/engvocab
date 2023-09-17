


/*local-sessionstorage*/
if (!sessionStorage.trueans) sessionStorage.trueans = 0;
if (!sessionStorage.allans) sessionStorage.allans = 0;
var prop = '<hr>'
if (!localStorage.otvet) localStorage.otvet = prop;
if (!localStorage.w1) localStorage.w1 = 'off';
if (!localStorage.w2) localStorage.w2 = 'off';
if (!localStorage.w3) localStorage.w3 = 'off';
if (!localStorage.w4) localStorage.w4 = 'off';
if (!localStorage.w5) localStorage.w5 = 'off';
if (!localStorage.w6) localStorage.w6 = 'off';
if (!localStorage.w7) localStorage.w7 = 'off';
if (!localStorage.w8) localStorage.w8 = 'off';
if (!localStorage.w9) localStorage.w9 = 'off';
if (!localStorage.w10) localStorage.w10 = 'off';

/*home*/
    if (!localStorage.uk) localStorage.uk = 'off';
    if (!localStorage.usa) localStorage.usa = 'off';

function deletethedraft (){
        localStorage.removeItem('otvet');
        localStorage.w1 = 'off';
        localStorage.w2 = 'off';
        localStorage.w3 = 'off';
        localStorage.w4 = 'off';
        localStorage.w5 = 'off';
        localStorage.w6 = 'off';
        localStorage.w7 = 'off';
        localStorage.w8 = 'off';
        localStorage.w9 = 'off';
        localStorage.w10 = 'off';
        localStorage.usa = 'off';
        localStorage.uk = 'off';
        localStorage.bedroomw1 = 'off';
    }


/*words*/
/*1st - to abate*/
var eng1 = "To abate";
var rus1v1  = 'сокращать';
var rus1v2 = 'уменшать';
var rus1v3 = 'ослаблять';
/**/

/*2nd - to abduct*/
var eng2 = 'To abduct';
var rus2v1 = 'похищать';
/**/

/*3rd - to venerate*/
var eng3 = 'To venerate';
var rus3v1 = 'почитать';
/**/

/*4th word*/
var eng4 = 'To recycle';
var rus4v1 = 'переработать';
/**/

/*5th word*/
var eng5 = 'To ingest';
var rus5v1 = 'проглатить';
/**/

/*6th word*/
var eng6 = 'To surpass';
var rus6v1 = 'превзойти'
/**/

/*7th word*/
var eng7 = 'To refute';
var rus7v1 = 'опровергать'
/**/

/*8th word*/
var eng8 = 'To banish';
var rus8v1 = 'изгнать'
/**/

/*9th word*/
var eng9 = 'To conspire';
var rus9v1 = 'сговориться'
/**/

/*10th word*/
var eng10 = 'To substitute';
var rus10v1 = 'заменить'
/**/



/*bedroom*/
if (!sessionStorage.trueanswerbedroom) sessionStorage.trueanswerbedroom = 0;
if (!sessionStorage.allanswerbedroom1) sessionStorage.allanswerbedroom1 = 0;

if (!localStorage.bedroomw1) localStorage.bedroomw1 = 'off';

/*1st word*/
var bedroomeng1 = "Кровать";
var bedroomrus1v1  = 'bed';
/**/

/*2nd word*/
var bedroomeng2 = "Floor";
var bedroomrus2v1  = 'пол';
/**/