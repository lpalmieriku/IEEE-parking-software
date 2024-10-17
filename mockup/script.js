var num = 100;
var cont = document.getElementById('number');
cont.innerHTML = num;
function main() {
    window.addEventListener('keydown', update_num)
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