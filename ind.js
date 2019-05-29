//const fetch = require("node-fetch");
var url;

function myfunc() {
    var Country = document.getElementById("country").value;
    localStorage.setItem("final", Country);
    for (var i = 0; i < 8; i++) {
        divName = 'a' + i;
        document.getElementById(divName).style.display = "none";
    }

    url = 'https://restcountries.eu/rest/v2/name/' + Country + '?fields=name;flag;';
    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                var divName;
                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data.length);
                    for (var i = 0; i < data.length && i < 8; i++) {
                        divName = 'a' + i;
                        var imgName = 'img0' + i;
                        var hName = 'h0' + i;
                        document.getElementById(divName).style.display = "block";
                        document.getElementById(hName).innerHTML = data[i].name;
                        document.getElementById(imgName).src = data[i].flag;


                    }


                });

            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}



function navigate(el) {
    // var a = document.getElementById(clicked_id).childNodes;
    var a = el.getElementsByTagName('h3');
    localStorage.setItem("countryName", a[0].getAttribute('id'));

    window.location = "index2.html";

}

function page() {
    txt = localStorage.getItem("countryName");
    var index = txt.charAt(2);
    Country = localStorage.getItem("final");
    var url = 'https://restcountries.eu/rest/v2/name/' + Country + '?fields=name;flag;capital;population;currencies;languages;';
    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                var divName;
                // Examine the text in the response
                response.json().then(function(data) {
                    document.getElementById('name').innerHTML = ":  " + data[index].name;
                    document.getElementById('capital').innerHTML = ":  " + data[index].capital;
                    document.getElementById('population').innerHTML = ":  " + data[index].population;
                    document.getElementById('currency').innerHTML = ":  " + data[index].currencies[0].name;
                    document.getElementById('language').innerHTML = ":  " + data[index].languages[0].name;
                    document.getElementById("imgName").src = data[index].flag;
                    console.log(data);


                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}