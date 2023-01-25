// code your solution here
function superbowlWin(record){
    return record.find(isWin).year
}
function isWin(record){
    record.result === "W";

}