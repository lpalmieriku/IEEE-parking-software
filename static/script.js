var sum_cont = document.getElementById('sum');
var level1_cont = document.getElementById('level1_parking');
var level2_cont = document.getElementById('level2_parking');
var level3_cont = document.getElementById('level3_parking');
var level4_cont = document.getElementById('level4_parking');
var handicap_cont = document.getElementById('handicap_parking');
var motorcycle_cont = document.getElementById('motorcycle_parking');

const html_container = [level1_cont, level2_cont, level3_cont, level4_cont, handicap_cont, motorcycle_cont, sum_cont];

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

function set_table(db) {
    var keys = Object.keys(db);
    for (var i = 0; i < html_container.length; i++) {
        html_container[i].innerHTML = db[keys[i]];
    }
}

function createChart(data, level, i, bool) {
    var keys = Object.keys(data);
    const ctx = document.getElementById(level);


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [level],
      datasets: [{
        label: "Unavailable",
        data: [data[keys[i]]],
        borderWidth: 1,
        barPercentage:0.3,
      }, {
        label: "Available",
        data: [100-data[keys[i]]],
        borderWidth: 1,
        barPercentage:0.3,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: bool
        }
      },
      indexAxis: 'y',
      scales: {
        x : {
          stacked: true,
          display: false,
          grid: {
            display:false
          },
          ticks: {
            display:false
          },
        },
        y: {
          stacked: true,
          display: false,
          beginAtZero: true,
          grid: {
            display: false
          },
          ticks: {
            display:false
          }
        }
      }
      
    }
  });
  }

function main() {
    // Fetch data from the Flask API endpoint
    fetch('/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        // Store the fetched data in a variable
        set_table(data);
        createChart(data, "red", 0, true);
        // Use the data in your application
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    //window.addEventListener('keydown', update_num)
    //window.addEventListener('sensor', update_num)
}
main()