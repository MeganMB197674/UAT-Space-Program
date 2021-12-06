//Megan Boyer
function betterCountdown() {

    var currTime = 10;
    
    // Here, we are setting variable i equal to one and saying that if i is less than 11, we increment by 1.
    for (var i = 1; i <= 11; i++) {
    
        // Here, we are saying that if i is equal to 11, print "Blastoff!!!"
        if (i == 11) {
    
            setTimeout(function () {
    
                //code goes here for timer
    
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    
            }, 1000 * i);
    
            // Here, we are saying that if i is greater than 5 (halfway to 11), we would like to display a message and the time left.
        } else if (i > 5) {
    
            setTimeout(function () {
    
                document.getElementById("countdownTimer").innerHTML =
    
                    "Warning: Less than halfway to launch, time left: " + currTime;
    
                currTime = currTime - 1;
    
            }, 1000 * i);
    
            // Here, we are saying that if none of the conditions are met (i is not equal to 11 and i is not greater than 5), we want to display the time left.
        } else {
    
            setTimeout(function () {
    
                document.getElementById("countdownTimer").innerHTML = "The time left is " + currTime;
    
                currTime = currTime - 1;
    
            }, 1000 * i);
    
        }
    
    }
    
    }
    
    function check() {
    // Below, we declare our variables and tell the program to display the value to the user in the HTML.
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var badgeNumber=document.getElementById("badgeNumber").value;

    // Below, we set the variable "operatorName" equal to a concatenation of two strings (firstName and lastName).
    var operatorName= firstName + " " + lastName;

    // Here, we are saying that if the length of the operator's name is over 20 characters or less than 4 characters, display that the username is invalid.
    if (operatorName.length>20 || operatorName.length<4) {
document.getElementById("Status").innerHTML= "Invalid username, please try again."
    }

    // Here, we are saying that else if the badge number length is not equal to 3, display that the badge number is invalid.
    else if (badgeNumber.length !=3) {
        document.getElementById("Status").innerHTML= "Badge number invalid, please try again."
    }

    // Here, we are saying that if all conditions are not met, we would like to display that the login was successful with an alert.
    else { alert("Login successful, welcome to the UAT Space Program user interface" + " " + operatorName + "!");
    location.replace("Blastoff.html");
}
}