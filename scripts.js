// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", () => {
    console.log('window loaded');

    let takeoffBtn = document.getElementById("takeoff");
    let landingBtn = document.getElementById("landing");
    let missionAbortBtn = document.getElementById("missionAbort");
    let btnUp = document.getElementById("btnUp");
    let btnDown = document.getElementById("btnDown");
    let btnRight = document.getElementById("btnRight");
    let btnLeft = document.getElementById("btnLeft");
    
    takeoffBtn.addEventListener("click", () => {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeoffConfirm === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }});

    landingBtn.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    missionAbortBtn.addEventListener("click", () => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");

        if (abortConfirm === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }});

    btnUp.addEventListener("click", () => {
        window.alert(document.getElementById("rocket").style.bottom)
    });
});