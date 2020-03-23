function createCharts() {

    //takes the datasset to create data to generate a pie
    let data = [2, 4, 8, 10];

    var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
}


function rand() { 
    return Math.floor(Math.random() * 10);
}


function loadhardCodedData() {
    let heatdata = {
        0:"50",
        1:"58",
        2:"43",
        3:"63",
        4:"59",
        5:"60",
        6:"63",
        7:"65",
        8:"40",
        9:"79",
        10:"84",
    }

    let storagedata = "586"

    let cpudata = {
        0:"3.63",
        1:"3.69",
        2:"3.72",
        3:"3.70",
        4:"3.60",
        5:"3.50",
        6:"3.75",
        7:"3.70",
        8:"3.71",
        9:"3.74",
        10:"3.68",
    }

    let ramdata = {
        0:"7.40",
        1:"7.60",
        2:"7.20",
        3:"4.40",
        4:"3.92",
        5:"9.50",
        6:"12.38",
        7:"5.99",
        8:"4.71",
        9:"7.33",
        10:"9.98",
    }

    const cpu = document.getElementsByClassName("cpu");
    const ram = document.getElementsByClassName("ram");
    const storage = document.getElementsByClassName("storage");
    const heat = document.getElementsByClassName("heat");
   
    storage[0].innerText = storagedata+ " GHz";
    cpu[0].innerText = cpudata[rand()] + " GB"; 
    ram[0].innerText = ramdata[rand()]+ " GB";
    heat[0].innerText = heatdata[rand()]+ " °C";

    setInterval(() => {
        cpu[0].innerText = cpudata[rand()] + " GHz"; 
    },1000);

    setInterval(()=>{
        ram[0].innerText = ramdata[rand()]+ " GB";
    },5000)

    setInterval(()=>{
        heat[0].innerText = heatdata[rand()]+ " °C";
    },5000)

    
}