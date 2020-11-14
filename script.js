// It works!
const age = 22;
const isFemale = true;
const driverStatus = "";

if (age > 18) {
    if (isFemale) {
    console.log("Come in!"); // older that 18 and female
    } else {
        console.log("Sorry!"); // older than 18 but male
    }
    }
 else {
    console.log("Sorry!"); // younger that 18
    }

if (driverStatus) {
    console.log("Have a save ride home!"); // status bob
}
else {
    console.log("Give me the keys, please."); // status other than bob
}

