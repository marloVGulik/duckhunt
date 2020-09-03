function loadArray(files) {
    files.forEach(element => {
        var script = document.createElement("script");
        script.src = "SRC/JS/" + element + ".js";
        document.getElementById("scripts").appendChild(script);
    });
}




var fileArray = [
    "Math/Vector",
    "Duck/Duck",
    "main"
];

loadArray(fileArray);