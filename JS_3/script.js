let not;
do {
  not = prompt("1-100 arasi bir sayi giriniz.");
} while (not < 0 || not > 100);
{
  console.log("Girdiginiz sayi: ", not);
}
function yasYazdir() {
  console.log(`Benim adım Mehmet ve Ben ${2021 - 1979} yaşındayım`);
}
yasYazdir();
let dogumYili = prompt("Dogum yilinizi giriniz");
function yasHesapla(x) {
  return 2024 - x;
}
const yas = yasHesapla(dogumYili);
console.log("Yasiniz : ", yas);
function hesapMakinesi(girdi1, girdi2, islem) {
  if (islem === "+") {
    return girdi1 + girdi2;
  } else if (islem === "-") {
    return girdi1 - girdi2;
  } else if (islem === "*") {
    return girdi1 * girdi2;
  } else if (islem === "/") {
    return girdi1 / girdi2;
  } else {
    return "Hatali islem girdisi";
  }
}
const sonuc = hesapMakinesi(15, 3, "/");
console.log("Sonuc : ", sonuc);
function tekCift(sayi1) {
  if (sayi1 % 2 === 0) {
    return "Cift";
  } else {
    return "Tek";
  }
}
const sonuc2 = tekCift(23);
console.log("Sonuc2 : ", sonuc2);
// function expression
const tekMi = function (x) {
  return x % 2 ? "Tek" : "Cift";
};
console.log("TekMi : ", tekMi(7));
// arrow function
const topla = (a, b) => {
  return a + b;
};
console.log("Topla : ", topla(3, 5));
alert("MERHABA!");
const selamVer = () => {
  console.log("SELAM!");
};
selamVer();
const meyveDilimle = (meyveAdeti) => meyveAdeti * 4;
const meyveSuyuHazirla = function (armut, elma, muz) {
  const armutDilimi = meyveDilimle(armut);
  const elmaDilimi = meyveDilimle(elma);
  const muzDilimi = meyveDilimle(muz);
  const meyveSuyu = `Meyve Suyu ${armutDilimi} dilim armut,
${elmaDilimi} dilim elma ve ${muzDilimi} dilim muz'dan oluşmaktadır`;
  return meyveSuyu;
};
// Error , cunku armutDilimi Function Scope icinde tanimli
// console.log(armutDilimi);
console.log(meyveSuyuHazirla(2, 3, 6));
// Block Scope Tanimlamasi
{
  const sayi = 3;
}
let sayi3 = 5;
const yeniSayi = function () {
  sayi3 = 10;
  console.log("sayi3 fonksiyon icerisinde soyle : ", sayi3);
};
yeniSayi();
console.log("sayi3 fonksiyon disinda soyle : ", ++sayi3);
let sayi4 = 3;
const yeniSayi2 = function () {
  let sayi4 = 7;
  console.log("sayi4 fonkisyon icerisnde su sekilde : ", sayi4);
};
yeniSayi2();
console.log("sayi4 fonksiyon disinda soyle : ", sayi4);
const fonk = function (x) {
  let negatif;
  if (x < 0) {
    negatif = "true";
  } else {
    negatif = "false";
  }
  console.log(negatif);
};
fonk(3);
// Diziler
// 1.yontem ( daha cok kullanilir)
const arabalar = ["Mercedes", "Ferrari", "Bmw", "Volvo"];
// 2.yontem
const gunler = new Array(
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
  "Pazar"
);
console.log("Arabalar : ", arabalar);
console.log("Ilk araba: ", arabalar[0]);
console.log("Son araba: ", arabalar[arabalar.length - 1]);
arabalar[0] = "Renault";
console.log("yeni arabalar: ", arabalar);
// Error
// arabalar = ["Fiat", "Skoda"];
// console.log("Arabalar deneme : ", arabalar);
const newDizi = ["ABC", 12, true, NaN, arabalar];
console.log("newDizi : ", newDizi);
const meyveler = ["Elma", "Armut", "Muz", "Kivi", "Cilek"];
const konsol = () => console.log(meyveler);
console.log(meyveler.pop());
konsol();
console.log(meyveler.push("Karpuz"));
konsol();
console.log(meyveler.shift());
konsol();
console.log(meyveler.unshift("Cilek"));
konsol();
console.log(meyveler.reverse());
konsol();