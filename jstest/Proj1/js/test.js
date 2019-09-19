let button = document.getElementById("ButtonCheck");
const start = new Date().getTime();
let count = 0;
let timestamping = new Array();
let savingdata = new Array();
//var savingdata = {Xaxis:344, Yaxis:444, Time:46};
timestamping[0] = "0." +start;
let x = 7;
//add name and case maybe!
document.onmousemove = function(e) {
    let stamp = new Date().getTime();
    let seconds =  stamp - start;
    let pageCoords = e.pageX +','+ e.pageY + "," + stamp + "\n";
     savingdata[x] = pageCoords;
    console.log(savingdata[x]);
    x = x+1;
    }

button.onpointerenter = function(){
        count = count+1;
    if(count === 1) {
        button.className = "bottom_left";
         var top_left = new Date().getTime();
         timestamping[1] = "1."+ top_left;
    }
    else if(count === 2) {
        button.className = "bottom_right";
        var bot_right = new Date().getTime();
        timestamping[2] = "2." +bot_right;
    }
    else if(count === 3) {
        button.className = "top_right";
        var bot_left = new Date().getTime();
        timestamping[3] = "3."+ bot_left;
    }
    else if(count === 4) {
        button.className = "bottom_left";
        var bot_left = new Date().getTime();
        timestamping[4] = "4."+ bot_left;

    }
    else if (count === 5) {
        let stop = new Date().getTime();
        timestamping[5] = "5." + stop;
        total = stop-start;
        console.log(total);
        timestamping[6] = "6."+ total + "\n";
        // savingdata[savingdata.length] = timestamping[0];
        // savingdata[savingdata.length] = timestamping[1];
        // savingdata[savingdata.length] = timestamping[2];
        // savingdata[savingdata.length] = timestamping[3];
        // savingdata[savingdata.length] = timestamping[4];
        // savingdata[savingdata.length] = timestamping[5];
        // savingdata[savingdata.length] = timestamping[6];
        savingdata[0] = timestamping[0];
        savingdata[1] = timestamping[1];
        savingdata[2] = timestamping[2];
        savingdata[3] = timestamping[3];
        savingdata[4] = timestamping[4];
        savingdata[5] = timestamping[5];
        savingdata[6] = timestamping[6];
        var blob = new Blob(savingdata , {type:"text/plain;charset=utf-8"});
        // var blob2 = new Blob(timestamping , {type:"text/plain;charset=utf-8"});
        saveAs(blob, "testfile1.txt")
        location.href = 'about.html';
        // count = count+1;
    }
};