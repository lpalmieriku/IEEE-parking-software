var sum = 100;
var level1 = 100;
var level2 = 100;
var level3 = 100;
var level4 = 100;
var cont = document.getElementById('number');
cont.innerHTML = num;
function main() {
    window.addEventListener('keydown', update_num)
    //window.addEventListener('sensor', update_num)
}

function update_num(event) {
    if (event.code == "ArrowUp") {
        num++;
        cont.innerHTML = num;
    } else if (event.code == "ArrowDown") {
        num--;
        cont.innerHTML = num;
    }
}
main()