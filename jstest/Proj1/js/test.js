let button = document.getElementById("ButtonCheck");
const start = new Date().getTime();
let count = 0;
let timestamping = new Array();
let savingdata = new Array();
//var savingdata = {Xaxis:344, Yaxis:444, Time:46};
timestamping[0] = "start: " +start;
let x = 0;
//add name and case maybe!
document.onmousemove = function(e) {
    let stamp = new Date().getTime();
    let seconds =  stamp - start;
    let pageCoords = "("+ e.pageX + "," + e.pageY +")" + "Time:" + seconds + "\n";
     savingdata[x] = pageCoords;
    console.log(savingdata[x]);
    x = x+1;
    }

button.onpointerenter = function(){
        count = count+1;
    if(count === 1) {
        button.className = "bottom_right";
         var top_left = new Date().getTime();
         timestamping[1] = "top_left : "+ top_left;
    }
    else if(count === 2) {
        button.className = "bottom_left";
        var bot_right = new Date().getTime();
        timestamping[2] = "Bot right: " +bot_right;
    }
    else if(count === 3) {
        button.className = "top_right";
        var bot_left = new Date().getTime();
        timestamping[3] = "bot_left : "+ bot_left;

    }
    else if (count === 4) {
        let stop = new Date().getTime();
        timestamping[4] = "Top_right :" + stop;
        // xhr.send(savingdata)
        total = stop-start;
        console.log(total);
        timestamping[5] = "Total : " + total;
        savingdata[savingdata.length] = timestamping[0];
        savingdata[savingdata.length] = timestamping[1];
        savingdata[savingdata.length] = timestamping[2];
        savingdata[savingdata.length] = timestamping[3];
        savingdata[savingdata.length] = timestamping[4];
        savingdata[savingdata.length] = timestamping[5];
        var blob = new Blob(savingdata , {type:"text/plain;charset=utf-8"});
        // var blob2 = new Blob(timestamping , {type:"text/plain;charset=utf-8"});
        saveAs(blob, "testfile1.txt")
        location.href = 'about.html';
        // count = count+1;
    }
};