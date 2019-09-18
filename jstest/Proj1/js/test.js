let button = document.getElementById("ButtonCheck");
const start = new Date().getTime();
let count = 0;
let savingdata = new Array();
//var savingdata = {Xaxis:344, Yaxis:444, Time:46};
let x = 0;

document.onmousemove = function(e) {
    let stamp = new Date().getTime();
    let seconds = start - stamp;
    let pageCoords = "("+ e.pageX + "," + e.pageY +")" + seconds;
     savingdata[x] = pageCoords;
    console.log(savingdata[x]);
    x = x+1;
    // exportToCsv(pageCoords)
    }
    // function exportToCsv(pageCoords) {
    //
    //     window.open('data:text/csv;charset=utf-8,' + escape(mycsv));
    // }

button.onpointerenter = function(){
        count = count+1;
    if(count === 1) {
        button.className = "bottom_right";
        // var bot_left = new Date().getTime();

    }
    else if(count === 2) {
        button.className = "bottom_left";
        // var bot_right = new Date().getTime();
    }
    else if(count === 3) {
        button.className = "top_right";
        // var top_right = new Date().getUTCSeconds();

    }
    else if (count === 4) {
        let stop = new Date().getTime();
        // xhr.send(savingdata)
        console.log(stop-start);
        // var i;
        // let text = new String();
        // for (i = 0; i < cars.length; i++) {
        //     text += savingdata[i] + "<br>";
        // }
        var blob = new Blob(savingdata, {type:"text/plain;charset=utf-8"});
        saveAs(blob, "testfile1.txt")
        location.href = 'about.html';
        // count = count+1;
    }
};