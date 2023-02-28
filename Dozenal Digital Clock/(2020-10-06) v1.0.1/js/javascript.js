var colors = ["ff0000", "ff0000", "ff0000", "ff0000", "ff0000", "ff0000"];
var pause = false;
function startTime() { 
    if(pause==true){
        var t = setTimeout(function(){startTime()},5);
    }else{
        var today = new Date(); //sets the variable "today" equal to the values of the Date object
        var hour = today.getHours(); //these three pieces get the hours, minuets, and seconds from the "today" variable
        var minute = today.getMinutes(); 
        var second = today.getSeconds();
        hour = toDozenal(hour); // these three pieces convert the three new variables to base 12 with the "toDozenal" function and make sure the numbers are 2 digits long.
        minute = toDozenal(minute);
        second = toDozenal(second);
        hour = hour.toString(); //these three pieces take the hour, minute, and second variables and turn them all into strings
        minute = minute.toString(); //this allows the next step to combine them with STRING concatenation insted of mathimaticlly. 
        second = second.toString(); 
        var timeStamp = hour + minute + second; //creates a variable string going HHMMSS

         //runs 6 times for the 6 digit positions
        for(var digitPosIndex=0; digitPosIndex<6; digitPosIndex++){
            var timeDigit = timeStamp[digitPosIndex]; //takes the 0-5 values of the timestamp variable. 0&1 = HH; 2&3 = MM; and 4&5 = SS in HHMMSS.
            var DigitActivity = setBitMask(timeDigit); // sets the variable DigitActivity equal to the value from the setBitMask Function.

            display(DigitActivity, digitPosIndex); //passes the DigitActivity into the display function
        }
        var t = setTimeout(function(){startTime()},5);
    }
} 

function toDozenal(timeValue) {
    if (timeValue < 10) { // this function checks the hours, minutes and seconds for single digit numbers.
        timeValue = "0" + timeValue; // if it IS 0-9, a 0 is tacked onto the fromt to keep all the numbers the same length
    } else if (timeValue == 10) {
        timeValue = "A";
    } else if (timeValue == 11){
        timeValue = "B";
    } else if (timeValue > 11 && timeValue < 22) {
        timeValue -= 12;
        timeValue = "1" + timeValue;
    } else if (timeValue == 22) {
        timeValue = "1A";
    } else if (timeValue == 23){
        timeValue = "1B";
    } else if (timeValue > 23 && timeValue < 34) {
        timeValue -= 24;
        timeValue = "2" + timeValue;
    } else if (timeValue == 34) {
        timeValue = "2A";
    } else if (timeValue == 35){
        timeValue = "2B";
    } else if (timeValue > 35 && timeValue < 46) {
        timeValue -= 36;
        timeValue = "3" + timeValue;
    } else if (timeValue == 46) {
        timeValue = "3A";
    } else if (timeValue == 47){
        timeValue = "3B";
    } else if (timeValue > 47 && timeValue < 58) {
        timeValue -= 48;
        timeValue = "4" + timeValue;
    } else if (timeValue == 58) {
        timeValue = "4A";
    } else if (timeValue == 59){
        timeValue = "4B";
    }
    return timeValue; // the two digit variable is returned in Dozenal and set to the oringial variable. 
}

function setBitMask(timeDigit){

    switch(timeDigit) { //looks for the 10 possibilities that the timeDigit can be (0-9)
        case "0":
            return "01111011"; //each of these show "on" or "off" bit positions fot the LEDs.
            break;
         case "1":
            return "00001010"; //The one that coresponds with the timeDigit is sent back to and stored in the DigitActivity variable.
            break;
        case "2":
            return "00110111";
            break;
        case "3":
            return "00011111";
            break;
        case "4":
            return "01001110";
            break;
        case "5":
            return "01011101";
            break;
        case "6":
            return "01111101";
            break;
        case "7":
            return "00001011";
            break;
        case "8":
            return "01111111";
           break;
        case "9":
            return "01011111";
        case "A":
            return "01101111";
        case "B":
            return "01111000";
    }
}

function display(DigitActivity, digitPosIndex){
    var AsciiValue = 65 + digitPosIndex; //ASCII for A-F digit positions (65 - 70)
    var AsciiLetter = String.fromCharCode(AsciiValue); // converts the ASCII codes (65 - 70) to their coresponding characters (A - F)   
    var userColor = colors[digitPosIndex];  
    for (segmentIndex=0; segmentIndex<7; segmentIndex++) { //runs 7 times for the 7 LED segments
        var SegNumber = segmentIndex + 1; // because the Index starts at 0 and our segments start at 1
        var segment = AsciiLetter + SegNumber; //Piecs the segment together. The segments are a letter and number. A-F and 1-7 for each LED on the clock.

        switch(segmentIndex){  //sets each of the 7 LED segments as variables in preperation fot the ids in the following code
            case 6:
                var bit7 = segment; //each segment is assigned to a bit
                break;
            case 5:
                var bit6 = segment;
                break;
            case 4:
                var bit5 = segment;
                break;
            case 3:
                var bit4 = segment;
                break;
            case 2:
                var bit3 = segment;
                break;
            case 1:
                var bit2 = segment;
                break;
            case 0:
                var bit1 = segment;
        }
    }
 
    for(activeIndex=0; activeIndex<8; activeIndex++){   //this chunk of code checks the segment's bits and turns them on or off.   
        var decend = 8 - activeIndex;
        var bitid = "bit" + decend;
        var bits = [null, bit7, bit6, bit5, bit4, bit3, bit2, bit1]; //sets an array equal to each segment. This makes it possible to loop through the ids.
        var on = "#" + userColor;
        var off = "#0a0a0a"

        if (activeIndex==0){ //skips the 0 since there is no 8th LED
            var skip = true;
        } else {
            if (DigitActivity[activeIndex] == 1) { //for the rest, if the coresponding id is one, the LED is turned on. Otherwise it is turned off
                document.getElementById(bits[activeIndex]).setAttribute("style", "background-color: " + on + ";");
            }else{
                document.getElementById(bits[activeIndex]).setAttribute("style", "background-color: " + off + ";");
            }
        }
    }
}

function onlyMe(positionValue){
    if(pause==true){
        var t = setTimeout(function(){onlyMe(positionValue)},100);
    } else {

        switch(positionValue){
            case '1':
                colors[0] = document.getElementById('hexValue').value;
                break;
            case '2':
                colors[1] = document.getElementById('hexValue').value;
                break;
            case '3':
                colors[2] = document.getElementById('hexValue').value;
                break;
            case '4':
                colors[3] = document.getElementById('hexValue').value;
                break;
            case '5':
                colors[4] = document.getElementById('hexValue').value;
                break;
            case '6':
                colors[5] = document.getElementById('hexValue').value;
                break;
        }
    }
}

function reset(){
    colors = ["ff0000", "ff0000", "ff0000", "ff0000", "ff0000", "ff0000"];
    document.getElementById('hexValue').value = "ff0000"; 
}

function stopThePress(){
    pause = true;
}

function resume(){
    pause = false;
}

function appToAll(){
    for(allIndex=0;allIndex<6;allIndex++){
       colors[allIndex] = document.getElementById('hexValue').value; 
    }
    
}