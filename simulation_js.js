function showCode() {
    document.getElementById('Swap').className = 'show, codeLayout';
}

function changeClass(id, className) {
    document.getElementById(id).className = className;
}

function displayElements() {
    var a = Number(document.getElementById('inputV1').value);
    var b = Number(document.getElementById('inputV2').value);
    if (a == "" || b == "") {
        location.reload();
        alert("Please provide inputs");
        return;
    }
    if (!parseFloat(a) || !parseFloat(b)) {
        location.reload();
        alert("Please provide numbers only");
        return;
    }
    //this.createBoxes()
    showCode();
    var c = "line"
        //this.convertFromStringToNumber()
    changeClass(c + "1", 'showDivInRed code-text');
    changeClass('next', 'show button-style');
    changeClass('next1', 'show button-style bottom-button');





    //document.getElementById("A").innerHTML=""+a;
    //document.getElementById("B").innerHTML=""+b;

    //Execution(a,b);
}

function createBoxes() {

    changeClass('resultDisplay', 'resultDisplay');

}

var d = 1;

function Execution() {


    var a = Number(document.getElementById('inputV1').value);
    var b = Number(document.getElementById('inputV2').value);
    changeClass("line" + d, "line code-text");
    d = d + 1;
    var temp1 = a;
    changeClass("line" + d, 'showDivInRed code-text');

    if (d == 2) {
        createBoxes();
        document.getElementById("A").innerHTML = "" + a;
        document.getElementById("B").innerHTML = "" + b;
        document.getElementById("box-B").classList.add("green");
        document.getElementById("box-A").classList.add("green");

    }
    if (d == 3) {

        temp = a;
        document.getElementById("temp").innerHTML = "" + temp;
        document.getElementById("box-temp").classList.add("yellow");
        document.getElementById('A').innerHTML = "";
        document.getElementById("box-A").classList.remove("green");
        ///alert(temp1);

    }
    if (d == 4) {
        a = b;
        document.getElementById('A').innerHTML = "" + a;
        document.getElementById("box-A").classList.add("green");
        document.getElementById("box-B").classList.remove("green");
        document.getElementById('B').innerHTML = "";
        //alert("temp1")
    }
    if (d == 5) {

        b = temp;
        document.getElementById('B').innerHTML = "" + b;
        document.getElementById("box-B").classList.add("green");
        document.getElementById("box-temp").classList.remove("yellow");
        document.getElementById("temp").innerHTML = "";
    }

    if (d == 6) {
        changeClass('temp1', 'hide');
    }

    if (d == 7) {
        alert("Program Finished");
        location.reload();
    }

}