$("#peoplePlus").on("click", function() {
    $("#lblPeople").text(people+1);
    people+=1;
});
$("#peopleMinus").on("click", function() {
    if ((people-1)!=-1) {
        $("#lblPeople").text(people - 1);
        people -= 1;
    }
});

$("#vehPlus").on("click", function() {
    $("#lblVeh").text(vehicle+1);
    vehicle+=1;
});
$("#vehMinus").on("click", function() {
    if ((vehicle-1)!=-1) {
        $("#lblVeh").text(vehicle - 1);
        vehicle -= 1;
    }
});