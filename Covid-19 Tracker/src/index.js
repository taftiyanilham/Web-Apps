import "./style/style.css";
import "./customElements/covid19Box.js";
import swal from 'sweetalert2';
const Swal = require('sweetalert2')

Swal.fire({
    title: 'Hallo',
    text : 'Selamat Datang di Covid19Data pantau data secara Realtime',
    imageUrl : 'https://cdn0-production-images-kly.akamaized.net/r53YZr_mOhnH6zhs8oKfUaNhlzM=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3044727/original/043940800_1581138377-20200208-Virus-Corona-Ancam-Kesehatan-Dunia-1.jpg',
    imageWidth : 400,
    imageHeight : 200,
   
});



let dataCovid = document.querySelector("#CovidBox");

const ShowData= ()=>{
    let outputData = "";
    const url = new URL('https://api.covid19api.com/summary');
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const {Countries : [{Country}]} = res;
            let b = res.Global;
            outputData +=`<h2>Data Global</h2>
                            <p>Data disediakan oleh : https://api.covid19api.com/summary<p>
                            <ul>
                            <li class= "penderita"> Kasus Baru : ${b.NewConfirmed} </li>
                                <li class = "kematian"> Pertambahan Kematian : ${b.NewDeaths}</li>
                                <li class="kematian"> Total Kematian : ${b.TotalDeaths}</li>
                                <li class="sembuh"> Pertambahan Sembuh : ${b.NewRecovered}</li>
                                <li class="sembuh"> Total Sembuh : ${b.TotalRecovered}</li>
                                <li class = "penderita">Total jumlah : ${b.TotalConfirmed}</li>
                            </ul>`;
            res.Countries.map(user => {
               
                    outputData += `
                                    <ul id="daftar">
                                    <li class="negara">Negara : ${user.Country}</li>
                                    <li class= "penderita"> Kasus Baru : ${user.NewConfirmed} </li>
                                    <li class = "kematian"> Pertambahan Kematian : ${user.NewDeaths}</li>
                                    <li class="kematian"> Total Kematian : ${user.TotalDeaths}</li>
                                    <li class="sembuh"> Pertambahan Sembuh : ${user.NewRecovered}</li>
                                    <li class="sembuh"> Total Sembuh : ${user.TotalRecovered}</li>
                                    <li class = "penderita">Total jumlah : ${user.TotalConfirmed}</li>
                                    </ul>
                                    `
                                    
                                dataCovid.innerHTML = outputData;
            })
            
        })
       
    

}


document.addEventListener("DOMContentLoaded", ShowData)

