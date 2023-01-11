// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun(); // => "This saturday, I want to roller-skate!"
saturdayFun("ice-skate"); // => "This saturday, I want to ice-skate!"

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
// had to define the mondayWork function before assigning to a variable for it to work
const fn = function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
fn(); // => "This monday, I will go to the office."

function wrapAdjective(special)  {
    //want the function to wrap an adjective with *
    const adjective = "a hard worker";
    return function(adjective) {
            return `You are ${special}${adjective}${special}!`;
    };
};

wrapAdjective("*")();
wrapAdjective("||")("a dedicated programmer");

