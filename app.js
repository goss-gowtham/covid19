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

document.getElementById("date").innerHTML = "*All data as of " + date.toLocaleString();

const shareData = {
    title: 'Covid 19',
    text: 'Coronavirus facts vs Myths, Check here!',
    url: 'https://staysafecovid.herokuapp.com',
  }
  
  const btn = document.querySelector('#button');
  const resultPara = document.querySelector('.result');
  
  // Must be triggered some kind of "user activation"
  if (navigator.share){
      btn.style.display = "block";
  }
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
    } catch(err) {
        window.alert("We got an issue, Please spread the word to your friends and family by sharing the link")
    }
  });