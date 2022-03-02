function myFunction(){
    var selectContinent = ["Europe", "Asia", "North America"];
    var arrEurope = ["England", "France", "Germany", "Ireland", "Poland"];
    var arrAsia = ["India", "China", "Japan", "South Korea", "Vietnam"];
    var arrNAmerica = ["United States", "Mexico", "Canada"];
    
    var selectoption = (document.getElementById("continent").value);
    var displayContries = document.getElementById("countries");
    
    document.getElementById("countries").innerHTML="";

    if(selectoption == "EU"){
        for(i=0; i<arrEurope.length; i++){
            var soptions = document.createElement("option");
            soptions.innerHTML = arrEurope[i];
            soptions.value = arrEurope[i];
            displayContries.appendChild(soptions);
        }
    }else if(selectoption == "Asia"){
        for(i=0; i<arrAsia.length; i++){
            var soptions = document.createElement("option");
            soptions.innerHTML = arrAsia[i];
            soptions.value = arrAsia[i];
            displayContries.appendChild(soptions);
        }
    } else {
        for(i=0; i<arrNAmerica.length; i++){
            var soptions = document.createElement("option");
            soptions.innerHTML = arrNAmerica[i];
            soptions.value = arrNAmerica[i];
            displayContries.appendChild(soptions);
        }
    }
}
