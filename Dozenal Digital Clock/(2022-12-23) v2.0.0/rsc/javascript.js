function startTime() { 
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

    for(var digitPosIndex=0; digitPosIndex<6; digitPosIndex++){
        var timeDigit = timeStamp[digitPosIndex]; //takes the 0-5 values of the timestamp variable. 0&1 = HH; 2&3 = MM; and 4&5 = SS in HHMMSS.

        if(timeDigit < 10){
            document.getElementById(digitPosIndex).innerHTML = '';
        } else if(timeDigit == "A"){
            document.getElementById(digitPosIndex).innerHTML = '';
        } else if(timeDigit == "B"){
            document.getElementById(digitPosIndex).innerHTML = '';
        } else {
            document.getElementById(digitPosIndex).innerHTML = timeDigit;
        }
        /*switch(timeDigit){
            case "0":
                document.getElementById(digitPosIndex).innerHTML = '<img src="numbers/0' + timeDigit + '.png"></img>';
                break;
            default:
                document.getElementById(digitPosIndex).innerHTML = timeDigit;
                break
        }*/
        /* */
        
    }

    var t = setTimeout(function(){startTime()},5);
}
function toDozenal(timeValue) {
    if (timeValue < 10) { // this function checks the hours, minutes and seconds for single digit numbers.
        timeValue = "0" + timeValue; // if it IS 0-9, a 0 is tacked onto the fromt to keep all the numbers the same length
    } else if (timeValue == 10) {
        timeValue = "0A";
    } else if (timeValue == 11){
        timeValue = "0B";
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