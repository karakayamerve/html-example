//Diziler

const name1 = Array();
console.log(name1);

//örnek

let js = "JavaScript";
const js_change = js.split("");
console.log(js_change); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//örnek
let meyve = ["elma", "armut", "kiraz"];
console.log(meyve[0]); // elma

//örnek
const webtek = ["html", "css", "js", "node"];
console.log(webtek); // ["html", "css", "js", "node"]
console.log(webtek.length); // 4
console.log(webtek[0]); // html

//örnek
const w1 = [1, 2, 3, 4, 5];
w1[0] = 10;
w1[1] = 20;
console.log(w1); //[10, 20, 3, 4, 5]

//örnek
let names = Array(4);
console.log(names); //[empty × 4] -> 4 değişkenli bir dizi oluşturur

const altidegiskenli = Array(6).fill(6); // -> fill : değerleri 6 olarak doldurur
console.log(altidegiskenli); //[6, 6, 6, 6, 6, 6]

//örnek

const birinci = [1, 2, 3];
const ikinci = [4, 5, 6];
const ücüncü = birinci.concat(ikinci); // concat: birleştirme yapar
console.log(ücüncü); //[1, 2, 3, 4, 5, 6]

const birinci1 = [1, 2, 3];
const ikinci2 = [4, 5, 6];
const ücüncü3 = [7, 8, 9];
let sonuc = birinci1.concat(ikinci2, ücüncü3); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sonuc);

//örnek

let w2 = ["merve", "sinan", "ayşe"];
console.log(w2.indexOf("merve")); //0
console.log(w2.indexOf("deren")); // -1
let w3 = w2.concat(["deren"]);
console.log(w3); // ['merve', 'sinan', 'ayşe', 'deren']
console.log(w3.lastIndexOf("deren")); //3 -> derenin son indexi en son geçtiği yer

//örnek
const name = ["merve", "sinan", "ayşe", "ali"];
console.log(name.join(", ")); //merve, sinan, ayşe, ali
console.log(name.join("")); //mervesinanayşeali
console.log(name.slice(1)); //['sinan', 'ayşe', 'ali'] // slice: 1.diziyi siler
console.log(name.slice(1, 3)); //['sinan', 'ayşe'] //

//örnek
let w4 = ["pazartesi", "salı", "çarşamba", "perşembe"];
console.log(w4); // ['pazartesi', 'salı', 'çarşamba', 'perşembe']
w4.push("cuma");
console.log(w4); // ['pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma']

//örnek

let name4 = ["merve1", "merve2", "merve3", "merve4"];
console.log(name4.reverse()); //['merve4', 'merve3', 'merve2', 'merve1'] // reverse: diziyi tersine çevirir
name4.pop(); // pop: son değer siler
console.log(name4); //['merve1', 'merve2', 'merve3']
name4.shift(); // shift: ilk değer siler
console.log(name4); //['merve2', 'merve3']

//örnek

let deger = ["a", "e", "d", "k", "b"];
deger.sort(); // sort : diziyi alfabetik olarak sıralar
console.log(deger); // ['a', 'b', 'd', 'e', 'k']
