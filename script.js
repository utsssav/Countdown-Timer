// grabbing all the desired elements
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
// Initializing the counter!
var d = 10,s = 10,m = 0,h = 0;
// initializing the setinterval function to be executed every second
var cD = setInterval(countDown,1000);
// CountDown Function
function countDown(){
    // making days,hours,seconds and hours in proper format
    var ds='0',dh='0',dm='0',dd='0';
    if(s<10) ds+=s;
    else ds=s;
    if(d<10) dd+=d;
    else dd = d;
    if(m<10) dm+=m;
    else dm=m;
    if(h<10) dh+=h;
    else dh = h;
    day.innerText = dd;
    hour.innerText = dh;
    second.innerText = ds;
    minute.innerText = dm;
    // checking the terminating condtition
    if(d==0&&m==0&&h==0&&s==0){
        clearInterval(cd);
    }
    // decrementing secconds and corresponding other values!
    s--;
    if(s==-1){
        s = 59;
        m--;
    }
    if(m==-1){
        m=59;
        h--;
    }
    if(h==-1){
        h = 23;
        d--;
    }
}