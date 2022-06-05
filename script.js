const input1 = document.querySelector(".test");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const val1 = input1.value;

    // Проверка на кол-во минимальных символов
    if (val1.length < 4 || val1.length > 7) {
        alert("Error. Incorrect time format");
    } else {

        // Military time validation
        if (val1.length == 5) {

            if (val1.indexOf(":") == 2) {
                alert("Good Military time");
            } else {
                alert("Error military time");
            }

        // Meridian time validation
        } else if (val1.length == 7) {

            if ((val1.indexOf(":") == 2) && (val1.indexOf("a") == 5) && (val1.indexOf("m") == 6)) {
                alert("Good Meridian time AM")
            } else if ((val1.indexOf(":") == 2) && (val1.indexOf("p") == 5) && (val1.indexOf("m") == 6)) {
                alert("Good Meridian time PM")
            } else {
                alert("Error meridian time")
            }

        } else {
            alert("Error. Incorrect time format");
        }
    } 

})


