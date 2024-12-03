var name
var level1;
var level2;
var level3;
var level4;
var handicap;
var motorcycle;
var sum;

var sum_cont = document.getElementById('sum');
var level1_cont = document.getElementById('level1_parking');
var level2_cont = document.getElementById('level2_parking');
var level3_cont = document.getElementById('level3_parking');
var level4_cont = document.getElementById('level4_parking');

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

async function submitQuery() {
    const garage = { name: "Allen Fieldhouse Parking Garage"};
    try {
        const response = await fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(garage),
        }); 
        const data = await response.json()
        console.log(data[0]);
        setAvailableSpots(data[0]);
    } catch (error) {
        console.error('Error submitting query:', error);
    }
}

function setAvailableSpots(garage) {
    level1 = garage['floor 1'];
    level2 = garage['floor 2'];
    level3 = garage['floor 3'];
    level4 = garage['floor 4'];
    handicap = garage['handicap'];
    motorcycle = garage['motorcycle'];
    sum = level1 + level2 + level3 + level4;
    console.log(level1, level2, level3, level4, handicap, motorcycle, sum, "Test");
    return level1, level2, level3, level4, handicap, motorcycle, sum;
}

function main() {
    level1, level2, level3, level4, handicap, motorcycle, sum = submitQuery();
    console.log(level1, level2, level3, level4, handicap, motorcycle, sum, "Test");
    sum_cont.innerHTML = sum;
    //window.addEventListener('keydown', update_num)
    //window.addEventListener('sensor', update_num)
}
main()