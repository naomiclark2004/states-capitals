function displayCap(){
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
    var capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento"];
    var selectoption = (document.getElementById("states").value);
    var displayCapital = document.getElementById("capital");
    displayCapital.innerHTML="";


    for(i=0; i<1; i++){
        if(selectoption == "AL"){
            var cap = document.createElement("option");
            cap.innerHTML = capitals[0];
            cap.value = capitals[0];
            displayCapital.appendChild(cap);
        }else if(selectoption == "AK"){
            var cap = document.createElement("option");
            cap.innerHTML = capitals[1];
            cap.value = capitals[1];
            displayCapital.appendChild(cap);
        }else if(selectoption == "AZ"){
            var cap = document.createElement("option");
            cap.innerHTML = capitals[2];
            cap.value = capitals[2];
            displayCapital.appendChild(cap);
        }else if(selectoption == "AR"){
            var cap = document.createElement("option");
            cap.innerHTML = capitals[3];
            cap.value = capitals[3];
            displayCapital.appendChild(cap);
        }else{
            var cap = document.createElement("option");
            cap.innerHTML = capitals[4];
            cap.value = capitals[4];
            displayCapital.appendChild(cap);
        }
    }
}