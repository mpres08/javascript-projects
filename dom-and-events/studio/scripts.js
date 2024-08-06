window.addEventListener("load", function() {
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    const rocket = document.getElementById("rocket");

    takeoffButton.addEventListener("click", function() {
        let shouldTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeoff){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000
            shuttleHeight.innerHTML = altitude;
        }
    });

    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 10000
        shuttleHeight.innerHTML = altitude;
    });

    abortButton.addEventListener("click", function() {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");
        if (shouldAbort){
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            altitude = 10000
            shuttleHeight.innerHTML = altitude;
        }
    });

    this.document.addEventListener("click", function(event) {
        if(event.target.id === "left") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";

        }
    });

    this.document.addEventListener("click", function(event) {
        if(event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }
    });

    this.document.addEventListener("click", function(event) {
        if(event.target.id === "up") {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude; 
        }
    });

    this.document.addEventListener("click", function(event) {
        if(event.target.id === "bottom") {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + "px";
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });
})
