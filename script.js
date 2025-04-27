const btnClick = document.getElementById("btn");

btnClick.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please enter valid details");
        return; // Important: stop execution
    }

    promiseDec(age).then((data) => {
        alert(data);
    }).catch((err) => {
        alert(err);
    });
});

function promiseDec(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Welcome, You can vote");
            } else {
                reject("Oh sorry. You aren't old enough.");
            }
        }, 4000);
    });
}
