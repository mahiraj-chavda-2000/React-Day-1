import React from 'react';

let currTime = new Date();
currTime = currTime.getHours();
let greetings = "";
const cssStyle = {};
if (currTime >= 1 && currTime < 12) {
    greetings = "Good Morning";
    cssStyle.color = "green";
}
else if (currTime >= 12 && currTime < 17) {
    greetings = "Good Afternoon";
    cssStyle.color = "orange";

}
else if (currTime >= 17 && currTime < 20) {
    greetings = "Good Evening";
    cssStyle.color = "skyblue";

}
else {
    greetings = "Good Night";
    cssStyle.color = "black";

}
function Greetings() {
    return (
        <h1 class="greet">Hello , {greetings}</h1>

    );
}
export default Greetings;