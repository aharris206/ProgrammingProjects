var colors = ["00ffff", "00ffff", "00ffff", "00ffff", "00ffff", "00ffff"];
var offset = 0+(0/60)+(37/3600)
function startTime() { 
    var today = Date.now(); //sets the variable "today" equal to the values of the Date object
    var unixTime = today + (offset * 3600000)
    var offsetDate = new Date(unixTime)
    var hour = offsetDate.getUTCHours(); //these three pieces get the hours, minuets, and seconds from the "today" variable
    var minute = offsetDate.getUTCMinutes(); 
    var second = offsetDate.getUTCSeconds();

    hour = hour.toString(12);
    minute = minute.toString(12); //this allows the next step to combine them with STRING concatenation insted of mathimaticlly. 
    second = second.toString(12); 
    hour = checkTime(hour); // these three pieces run the three new variables through the "checkTime" function to make sure they are 2 digits long.
    minute = checkTime(minute);
    second = checkTime(second);
    var timeStamp = hour + minute + second;

        //runs 6 times for the 6 digit positions
    for(var digitPosIndex=0; digitPosIndex<6; digitPosIndex++){
        var timeDigit = timeStamp[digitPosIndex]; //takes the 0-5 values of the timestamp variable. 0&1 = HH; 2&3 = MM; and 4&5 = SS in HHMMSS.
        var DigitActivity = setBitMask(timeDigit); // sets the variable DigitActivity equal to the value from the setBitMask Function.

        display(DigitActivity, digitPosIndex); //passes the DigitActivity into the display function
    }
    var t = setTimeout(function(){startTime()},5);
}

function checkTime(value) {
    if (value.length == 1) { // this function checks the hours, minutes and seconds for single digit numbers.
        value = "0" + value.toString();
    }
    return value; // the two digit variable is returned and set to the oringial variable. 
}

function setBitMask(timeDigit){

    switch(timeDigit) {
        case "0":
            return "000000111111";
            break;
         case "1":
            return "100000000000";
            break;
        case "2":
            return "110000000000";
            break;
        case "3":
            return "111000000000";
            break;
        case "4":
            return "111100000000";
            break;
        case "5":
            return "111110000000";
            break;
        case "6":
            return "111111000000";
            break;
        case "7":
            return "111111100000";
            break;
        case "8":
            return "111111110000";
           break;
        case "9":
            return "111111111000";
        case "a":
            return "111111111100";
        case "b":
            return "111111111110";
    }
}

function display(DigitActivity, digitPosIndex){
    var AsciiValue = 65 + digitPosIndex; //ASCII for A-F digit positions (65 - 70)
    var AsciiLetter = String.fromCharCode(AsciiValue); // converts the ASCII codes (65 - 70) to their coresponding characters (A - F)   
    var userColor = colors[digitPosIndex];  
    for (segmentIndex=0; segmentIndex<12; segmentIndex++) { //runs 7 times for the 7 LED segments
        var SegNumber = segmentIndex + 1; // because the Index starts at 0 and our segments start at 1
        if(SegNumber == 12){SegNumber=0}
        var segment = AsciiLetter + SegNumber; //Piecs the segment together. The segments are a letter and number. A-F and 00-11 for each LED on the clock.

        switch(segmentIndex){  //sets each of the 7 LED segments as variables in preperation fot the ids in the following code
            case 11:
                var bit12 = segment + "0"; //each segment is assigned to a bit
                break;
            case 10:
                var bit11 = segment;
                break;
            case 9:
                var bit10 = segment;
                break;
            case 8:
                var bit9 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 7:
                var bit8 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 6:
                var bit7 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 5:
                var bit6 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 4:
                var bit5 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 3:
                var bit4 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 2:
                var bit3 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 1:
                var bit2 = segment.substr(0,1) + "0" + segment.substr(1,1);
                break;
            case 0:
                var bit1 = segment.substr(0,1) + "0" + segment.substr(1,1);
        }
    }
 
    for(activeIndex=0; activeIndex<12; activeIndex++){   //this chunk of code checks the segment's bits and turns them on or off.   
        var ordinal = activeIndex + 1;
        var bitid = "bit" + ordinal;
        var bits = [bit1, bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10, bit11, bit12]; //sets an array equal to each segment. This makes it possible to loop through the ids.
        var on = "#" + userColor;
        var off = "#202020"
        if (DigitActivity[activeIndex] == 1) { //for the rest, if the coresponding id is one, the LED is turned on. Otherwise it is turned off
            document.getElementById(bits[activeIndex]).setAttribute("style", "fill: " + on + ";");
        }else{
                document.getElementById(bits[activeIndex]).setAttribute("style", "fill: " + off + ";");
        }
    }
}