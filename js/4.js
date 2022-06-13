//Koşullar :if, if else, if else if, switch, while, for, do while

//If : doğru ise {} kod bloğunu çalıştırır.

let z = 10;
if (z > 0) {
  console.log(`${z} sayısı 0'dan büyük`); //10 sayısı 0'dan büyük
}

//If Else : doğru ise {} kod bloğunu çalıştırır. değilse {} kod bloğunu çalıştırır.

let s = 5;
if (s > 6) {
  console.log(`${s} sayısı 6'dan büyük`);
} else {
  console.log(`${s} sayısı 6'dan küçük`); //5 sayısı 6'dan küçük
}

let sonuc = prompt("2+3 kaç yapar", "cevap"); // kutucuğun içerisinde cavap yazar
if (sonuc == 5) {
  console.log("Doğru cevap"); //Doğru cevap
} else {
  console.log("Yanlış cevap, doğru cevap 5, olmalıydı."); //Yanlış cevap, doğru cevap 5, olmalıydı.
}

//switch
let sonuc1 = prompt("2+4 kaç yapar", "cevap");
switch (sonuc1) {
  case "6":
    console.log("doğru cevap-switch");
    break;
  case "7":
    console.log("yanlış ama yaklaştın-switch");
    break;
  default:
    console.log("yanlış cevap-switch");
}

//örnek
let n = prompt("Sayı");
let islem = n % 2 == 0;
if (islem) {
  console.log("sayı çifttir");
} else {
  console.log("sayı tektir");
}

//örnek
let n1 = prompt("Sayı bulma");
switch (true) {
  case n1 >= 80 && n1 <= 100:
    console.log("sayı 80-100 arasıdır");
    break;
  case n1 >= 50 && n1 <= 79:
    console.log("sayı 79-50 arasıdır");
    break;
  default:
    n1 >= 0 && n1 <= 49;
    console.log("sayı 0-49 arasındadır");
}

n1 = prompt("Sayı bulma2");
switch (parseInt(n1)) {
  case 80:
    console.log("sayı 80");
    break;
  case 70:
    console.log("70");
    break;
  default:
    n1 >= 0 && n1 <= 49;
    console.log("sayı 0-49 arasındadır");
}

//örnek
let n2 = parseInt(prompt("Sayı giriniz"));
if (n2 >= 80 && n2 <= 100) {
  console.log("sayı 80-100 arasıdır");
} else if (n2 >= 50 && n2 <= 79) {
  console.log("sayı 79-50 arasıdır");
} else {
  console.log("sayı 0-49 arasındadır");
}

//örnek
const kis = ["aralık", "ocak", "subat"];
const bahar = ["mart", "nisan", "mayıs"];
const yaz = ["haziran", "temmuz", "ağustos"];
const sbahar = ["eylül", "ekim", "kasım"];

let ay = prompt("ay giriniz");

if (kis.includes(ay)) {
  console.log("kış ayı");
} else if (bahar.includes(ay)) {
  console.log("bahar ayı");
} else if (yaz.includes(ay)) {
  console.log("yaz ayı");
} else if (sbahar.includes(ay)) {
  console.log("sbahar ayı");
} else {
  console.log("yat uyu");
}
