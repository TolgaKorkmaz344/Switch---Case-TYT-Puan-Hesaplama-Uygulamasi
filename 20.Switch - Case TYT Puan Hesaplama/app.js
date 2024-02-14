/*

    1- Türkçe 40  - her soru 4 puan
    2- Matematik 40
    3- Sosyal Bilgiler 20
    4- Fen Bilgileri 20

    ---> 100 puanı ÖSYM veriyor

*/

let  turkceDogru, turkceYanlis=0;
let matematikDogru, matematikYanlis=0;
let sosyalDogru, sosyalYanlis=0;
let fenDogru, fenYanlis=0;
let okulPuani=0;

let yeniSatir = "\r\n";
let mesaj ="TYT Puan Hesaplama uygulamasına Hoşgeldiniz"+yeniSatir+"1-Puan Hesapla"+yeniSatir+"2-Çıkış Yap";

let secim = prompt(mesaj);

switch(secim) {

    case "1" :

    okulPuani=Number(prompt("Okul Puanınızı Giriniz : "));
    turkceDogru=Number(prompt("Türkçe Doğru Sayınızı Giriniz : "));
    turkceYanlis=Number(prompt("Türkçe Yanlış Sayınızı Giriniz : "));

    matematikDogru=Number(prompt("Matematik Doğru Sayınızı Giriniz : "));
    matematikYanlis=Number(prompt("Matematik Yanlış Sayınızı Giriniz : "));

    sosyalDogru=Number(prompt("Sosyal Bilgiler Doğru Sayınızı Giriniz : "));
    sosyalYanlis=Number(prompt("Sosyal Bilgiler Yanlış Sayınızı Giriniz : "));

    fenDogru=Number(prompt("Fen Bilgiler Doğru Sayınızı Giriniz : "));
    fenYanlis=Number(prompt("Fen Bilgiler Yanlış Sayınızı Giriniz : "));

    let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
    let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
    let kalanDogru = dogruSayisi - (yanlisSayisi/4);
    puan = (kalanDogru*4) + 100 + okulPuani;
    alert("TYT Puanınız : "+puan);

    break;

    case "2" : 
    alert("Sistemden Çıkış Yapılmıştır.");
    break;

    default :

    alert("Geçerli Bir Rakam Seçiniz");


}



