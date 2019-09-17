let button = document.getElementById("ButtonCheck");
const start = new Date().getTime();
let count = 0;

button.onclick = function(){
        count = count+1;
    if(count === 1) {
        button.className = "bottom_left";
        // var bot_left = new Date().getUTCSeconds();
        // count = count+1;
    }
    else if(count === 2) {
        button.className  = "bottom_right";
        // var bot_right = new Date().getUTCSeconds();
        // count = count+1;
    }
    else if(count === 3) {
        button.className = "top_right";
        // var top_right = new Date().getUTCSeconds();
        // count = count+1;
    }
    else if (count === 4) {
        let stop = new Date().getTime();
        console.log(stop-start);
        // count = count+1;
    }

};