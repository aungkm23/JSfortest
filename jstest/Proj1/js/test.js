let button = document.getElementById("ButtonCheck");
const start = new Date().getTime();
let count = 0;
// let a = new Array(200);
document.onmousemove = function(e) {
    let pageCoords = "("+ e.pageX + "," + e.pageY +")";
    // a.append(e.pageX)(e.pageY)
    console.log(pageCoords);
    // exportToCsv(pageCoords)
    }
    // function exportToCsv(pageCoords) {
    //
    //     window.open('data:text/csv;charset=utf-8,' + escape(myCsv));
    // }

button.onpointerenter = function(){
        count = count+1;
    if(count === 1) {
        button.className = "bottom_right";
        // var bot_left = new Date().getTime();
        // count = count+1;
    }
    // else if(count === 2) {
    //     button.className  = "bottom_left";
    //     // var bot_right = new Date().getTime();
    //     // count = count+1;
    // }
    // else if(count === 3) {
    //     button.className = "top_right";
    //     // var top_right = new Date().getUTCSeconds();
    //     // count = count+1;
    // }
    else if (count === 2) {
        let stop = new Date().getTime();
        console.log(stop-start);
        location.href = 'about.html';
        // count = count+1;
    }
};