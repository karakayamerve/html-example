// booleans :true yada false olarak cevap sağlar
// falsy values: 0,on,null,undefined,NaN, the boolean false,"",''
//truthy values: everything else

//operators:
// '='  -> x=y  :x=y
// '+=' -> x+=y :x=x+y
// '-=' -> x-=y :x=x-y

let a1 = 4;
let b1 = 3;
a1 += b1; //7
console.log(a1);

//Karşılaştırma Operatörleri
//'==' : eşitlik kontrolü
//'!=' : eşit değilse kontrolü
//'===' : eşitlik kontrolü (hem değere hem veri türüne bakar)

console.log(3 > 2); //true
console.log(3 < 2); //false
console.log(2 <= 3); //true
console.log("mango".length == "avocado".length); //false
console.log("milk".length == "milk".length); //true
console.log("ahmet".length !== "mehmet".length); //true

//Mantıksal Operatorler
//'&&' : and kontrolü
//'||' : or kontrolü

console.log(4 > 3 && 2 > 1); //true
console.log(4 > 3 && 10 < 5); //false
console.log(4 > 3 || 10 < 5); //true
console.log(4 < 3 || 10 < 5); //false

//Arttırma Operatörleri
let count = 0;
count++;
console.log(count); //1

//Azaltma Operatörleri
let count1 = 1;
count1--;
console.log(count1); //0

//Operatör Önceliği
console.log((2 + 3) * 4); //20
console.log(2 + 3 * 4); //14

//window alert

alert("Merhaba! Başardın"); // alert box ile mesaj gösterir

//window prompt methodu

let answer = prompt("Adınızı giriniz"); //prompt box ile bilgi alır
console.group(answer); //prompt box içerisine yazılan mesajı gösterir

//window confirm methodu

let Delete = confirm("Silmek istediğinize emin misiniz?"); //confirm box ile kullanıcıya sorar
console.log(Delete ? "silme işlemi başarılı" : "silme işlemi başarısız"); //evet yada hayır seçeneğine göre mesajı gösterir , evet ise silme işlemi başarılı

//Data objects

const date = new Date();
console.log(date); //Sun Jun 12 2022 23:42:55 GMT+0300 (GMT+03:00)
console.log(date.getFullYear()); //2022
console.log(date.getMonth()); //5 -> 6 ayının indexi
console.log(date.getDate()); //12
console.log(date.getSeconds()); //42 -> saniye
