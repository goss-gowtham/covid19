function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var confirmed = JSON.parse(Get("https://api.covid19api.com/total/country/india/status/confirmed"));
document.getElementById("confirmed").innerHTML = JSON.stringify(confirmed.slice(-1).pop().Cases);

var deaths = JSON.parse(Get("https://api.covid19api.com/total/country/india/status/deaths"));
document.getElementById("deaths").innerHTML = JSON.stringify(deaths.slice(-1).pop().Cases);

var recovered = JSON.parse(Get("https://api.covid19api.com/total/country/india/status/recovered"));
document.getElementById("recovered").innerHTML = JSON.stringify(recovered.slice(-1).pop().Cases);

var date = new Date(recovered.slice(-1).pop().Date);
console.log(date);

document.getElementById("date").innerHTML = "*as of " + date.toLocaleString();