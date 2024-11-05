var level1 = 100;
var level2 = 100;
var level3 = 100;
var level4 = 100;
var sum = level1 + level2 + level3 + level4;

var sum_cont = document.getElementById('sum');
var level1_cont = document.getElementById('level1_parking');
var level2_cont = document.getElementById('level2_parking');
var level3_cont = document.getElementById('level3_parking');
var level4_cont = document.getElementById('level4_parking');

sum_cont.innerHTML = sum;
function main() {
    window.addEventListener('keydown', update_num)
    //window.addEventListener('sensor', update_num)
}

function update_num(event) {
    if (event.code == "ArrowUp") {
        sum++;
    } else if (event.code == "ArrowDown") {
        sum--;
    }
    /*
    if (event.code == "Level1_out") {
        level1++;
        level1_cont.innerHTML;
    } else if (event.code == "Level1_in") {
        level1--;
        level1_cont.innerHTML;
    } else if (event.code == "Level2_out") {
        level2++;
        level2_cont.innerHTML;
    } else if (event.code == "Level2_in") {
        level2--;
        level2_cont.innerHTML;
    } else if (event.code == "level3_out") {
        level3++;
        level3_cont.innerHTML;
    } else if (event.code == "level3_in") {
        level3--;
        level3_cont.innerHTML;
    } else if (event.code == "level4_out") {
        level4++;
        level4_cont.innerHTML;
    } else if (event.code == "level4_in") {
        level4--;
        level4_cont.innerHTML;
    }
    level1_cont.innerHTML = level1;
    level2_cont.innerHTML = level2;
    level3_cont.innerHTML = level3;
    level4_cont.innerHTML = level4;
    */
    sum_cont.innerHTML = sum;
        
}
main()