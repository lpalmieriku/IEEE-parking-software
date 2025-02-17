function set_table(db) {
    var keys = Object.keys(db);
    document.getElementById("level1_parking").innerHTML = db[keys[0]];
    document.getElementById("level2_parking").innerHTML = db[keys[1]];
    document.getElementById("level3_parking").innerHTML = db[keys[2]];
    document.getElementById("level4_parking").innerHTML = db[keys[3]];
    document.getElementById("motorcycle_parking").innerHTML = db[keys[5]];
}

function createChart(level) {
  const ctx = document.getElementById(level);
  
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [level],
      datasets: [{
        label: "Available",
        data: [100],
        borderWidth: 1,
        barPercentage:0.3,
      }, {
        label: "Unavailable",
        data: [0],
        borderWidth: 1,
        barPercentage:0.3,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
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

  return chart;
  }

  let red_chart = createChart("red");
  let blue_chart = createChart("blue");
  let orange_chart = createChart("orange");
  let green_chart = createChart("green");

function get_data() {
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

        main(data);
        // Use the data in your application
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    //window.addEventListener('keydown', update_num)
    //window.addEventListener('sensor', update_num)
}

function main(data) {
  var keys = Object.keys(data);
  red_chart.data = {
    labels: ["red"],
    datasets: [{
      label: "Available",
      data: [data[keys[0]]],
      borderWidth: 1,
      barPercentage:0.3,
    }, {
      label: "Unavailable",
      data: [100-data[keys[0]]],
      borderWidth: 1,
      barPercentage:0.3,
    }]
  };
  red_chart.update();
}

setInterval(get_data, 10000);