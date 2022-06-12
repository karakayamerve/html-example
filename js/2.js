//1.primitive data types:number,string,boolean,null,undefined
//2. non-primitive data types:object,array,function

let word = "JavaScript";
word[0] = "Y"; // üst satırda belirtilen sting ifade primitiv data olduğu için bu şekilde atama yapılsa bile değişiklik olmaz
console.log(word);

console.log("----------------------------------------------------");

let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // burada console bize TRUE cevabını verir
console.log("----------------------------------------------------");

let js = "JavaScript";
let py = "Python";
console.log(js == py); // Burada console bize FALSE cevabını verir
console.log("----------------------------------------------------");

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // Burada console bize FALSE cevabını verir
console.log("----------------------------------------------------");

let nums = [1, 2, 3, 4, 5];
nums[0] = 10; //non-primitive data değişkenleri değiştirilebilir
console.log(nums); // çıktısı: [10, 2, 3, 4, 5]
console.log("----------------------------------------------------");

let num1 = [1, 2, 3, 4];
let num2 = [1, 2, 3, 4];
console.log(num1 == num2); // Burada console bize FALSE cevabını verir
console.log("----------------------------------------------------");

let user1 = {
  name: "Merve",
  surname: "Karakaya",
};
let user2 = {
  name: "Merve",
  surname: "Karakaya",
};
console.log(user1 == user2); //Burada console bize FALSE cevabını verir
console.log("----------------------------------------------------");

let nums3 = [1, 2, 3];
let nums4 = nums3; //nums4 değişkeni nums3 değişkeniyle aynı adresi taşıyor, bu yüzden true dönüyor
console.log(nums3 == nums4); //burada console bize TRUE cevabını verir

console.log(Math.min(1, 2, 3, 4)); //1
console.log(Math.max(3, 2, 1, 4)); //4
console.log(Math.random()); //random sayı üretiyor

let randomNum = Math.random(); // random sayı üretiliyor
let numZeroandten = randomNum * 11; // 0 ile 10 arasında sayı üretiliyor 11 ile çarpıyor
console.log(numZeroandten); //0,02857248572

let firstName = "Merve";
let lastName = "Karakaya";
let fullName = firstName + " " + lastName;
console.log(fullName); //Merve Karakaya
console.log("----------------------------------------------------");

let parag = "hello\
test\
deneme";
console.log(parag); // hellotestdeneme olarak çıktı gelir
console.log("----------------------------------------------------");

let cumle = "hello\n test\n deneme";
console.log(cumle); // hello
// test
// deneme olarak çıktı gelir
console.log("----------------------------------------------------");

let name2 = "Merve";
let surname2 = "Karakaya";
let a = 3;
let b = 4;
let fullName2 = `${name2} ${surname2} `; // `${} beraber kullamılır
console.log(fullName2); //Merve Karakaya olarak çıktı gelir
console.log("----------------------------------------------------");

let sc = "JavaScript";
let lastIndex = sc.length - 1;
console.log(sc[lastIndex]); // t
console.log("----------------------------------------------------");

console.log(sc.length); // console da lenght : uzunluk belirtir :10
console.log(sc[0]); // console da 0. index : J olarak çıktı gelir
console.log(sc.length - 1); // console da length - 1 : 9 olarak çıktı gelir

let yt = "youtube";
console.log(yt.substr(3)); // console da ''tube'' olarak çıktı gelir
console.log(yt.substr(3, 2)); // console da ''tu'' olarak çıktı gelir

let string = "JavaScript";
console.log(string.substring(0, 4)); // console da ''Java'' olarak çıktı gelir
console.log(string.substring(4, 10)); // console da ''Script'' olarak çıktı gelir
console.log(string.split("")); //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']  // string yazısını dizi haline getirir
console.log(string.split("").reverse()); // ['t', 'p', 'i', 'r', 'S', 'c', 'a', 'v', 'a', 'J'] // string yazısını dizi haline getirir ve ters çevirir
console.log(string.split("").reverse().join("")); // tpircSavaJ // ters çevrilen diziyi tekrar birleştirir join ile

let string4 = "JavaScript, Facebook, Google,";
console.log(string4.split(",")); //['JavaScript', ' Facebook', ' Google']
console.log(string4.split(",").reverse()); // ['Google', ' Facebook', ' JavaScript']
console.log(string4.split(",").reverse().join(",")); // Google, Facebook, JavaScript
console.log(string4.repeat(2)); // JavaScript, Facebook, Google,JavaScript, Facebook, Google, // repeat ile 2 kez çağırılır
console.log(string4.repeat(2).slice(0, -1)); // JavaScript, Facebook, Google,JavaScript, Facebook, Google // slice ile son karakteri kaldırır

let Mrv = " Merhaba Merve, Nasılsın Merve";
console.log(Mrv.replace("Merve", "Sinan")); //Merhaba Sinan, Nasılsın Merve
console.log(Mrv.replaceAll("Merve", "sinan")); // Merhaba sinan, Nasılsın sinan

let string2 = "Love is the best to in this world";
console.log(string2.startsWith("Love")); // true // Love ile mi başlıyor
console.log(string2.endsWith("world")); // true  // world ile mi bitiyor
console.log(string2.startsWith("love")); // false // love ile mi başlıyor

let string3 = "Merhaba Dünya, Nasılsın Dünya, güzel bir dünya";
console.log(string3.match("Dünya"));
console.log(string3.match(/Dünya/g)); //(2) ['Dünya', 'Dünya'] // g ile tekrar edenleri getirir (büyük küçük harf önemlidir)
console.log(string3.match(/Dünya/gi)); //(3) ['Dünya', 'Dünya', 'dünya']  //i büyük küçük harf önemli olmadan kelimeye bakar
console.log(string3.toUpperCase()); // MERHABA DÜNYA, NASILSIN DÜNYA, GÜZEL BIR DÜNYA
