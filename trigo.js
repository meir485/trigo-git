const arr=[]
const Points=[]
function addInfo(x){
    
     div = document.getElementsByClassName('in')[0]
    let m = document.getElementsByTagName("input")[0].value
    document.getElementsByTagName("input")[0].value = "";
    let db ={
        type: x,
        val: m
    }
    arr.push(db)
    var textnode = document.createTextNode(x+" : "+m);
    var p = document.createElement('p')  
    p.appendChild(textnode)
    div.appendChild(p);
}
var s=""

function start(){
arr.forEach(ty =>{
    if(ty.type=="side"){
        s=s+"s"
    }
    else{
        s=s+"a"
    }
})
   switch (s){
       case sss:
        sss()
       break;
       case ssa:
        ssa()
       break;
       case sas:
        sas()
       break;
       case asa:
        asa()
       break;
   }
}

function tg(degrees) {
    return Math.tan(degrees * Math.PI/180);
}

function SqureM(a,b,c,m,n){
    debugger
    let z = Math.sqrt(Math.pow(b,2) - 4*a*c)
    let  x1 =-b+z
    let  x2 =-b-z
    let  y1 =m*x1 + n
    let  y2 =m*x2 + n
    if(y1>0){
    var point={
        x:x1,
        y:y1
    }}
    else if(y2>0)
    var point={
        x:x2,
        y:y2
    }
    return point;
}

function sss(){

}
function ssa(){
    
}
function sas(){
     
    m1 = arr[0].val
    a1 = arr[1].val
    m2 = arr[2].val
    Points.push({x:m1,y:0})
    if(a1==90){
        Points.push({x:m1,y:m2})
        return Points
    }
    m = tg(180-a1) 
    n = -1*m1*m;

    a = Math.pow(m,2) + 1
    b = 2*m*n - 2*m1
    c = Math.pow(n,2)+Math.pow(m1,2)-Math.pow(m2,2)
    var g = SqureM(a,b,c,m,n)
    Points.push(g);
    return Points
}
function asa(){
    
}


function draw(){
var canvas = document.getElementById('trig');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

}
