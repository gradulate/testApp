// -------------
// рух по заданій траекторії
MR.style.left =  x + "px"; // тепер це число задаємо як стисль діва, у пікселях
MR.style.top = y + "px";

document.getElementById('RedX').value = x;
document.getElementById('RedY').value = y;

var i = 0;
function MarioLoadWay() {
    var points = [
        [600, 70],
        [430, 170],
        [420, 290],
        [260, 200]
    ];

    MB.style.left =  points[i][0] + "px";
    MB.style.top = points[i][1] + "px";
    i = i+1;
    if(i < 4){
        setTimeout("MarioLoadWay()",1000);
    }
};

function MarioLoadWayR() {
    var points = [
        [600, 70],
        [430, 170],
        [420, 290],
        [260, 200]
    ];

    MR.style.left =  points[i][0] + "px";
    MR.style.top = points[i][1] + "px";
    i = i+1;
    if(i < 4){
        setTimeout("MarioLoadWayR()",1000);
    }
};

function distance(form) {
    var x1 = eval(form.x1.value);
    var y1 = eval(form.y1.value);
    var x2 = eval(form.x2.value);
    var y2 = eval(form.y2.value);
    var xdiff = x2 - x1;
    var ydiff = y2 - y1;
    form.answer.value = Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);
}