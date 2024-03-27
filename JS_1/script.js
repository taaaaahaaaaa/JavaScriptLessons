console.log("Merabalarrr")
console.warn("Uyarı")
console.error("Hata")
alert("Merabalarrr")

const sayı = 1;
// conts 1sayı = 1;   HATALI YAZIM DEĞİŞKENİN İSMİ SAYI İLE BAŞLAYAMAZ

let versinNo = 5;
// let versin No = 5  HATALI DEĞİŞKENİN BOŞLUK OLAMAZZZ

// DEĞİŞKENİN İSMİ FOR , DO OLAMAZ!!!!

const isim = "Furkan";
console.log("isim degiskeninin degeri: ", isim);
console.log("isim degiskeninin tipi: ", typeof isim);

const pi = 3.14;
console.log("pi degiskeninin degeri: ", pi);
console.log("pi degiskeninin tipi: ", typeof pi);

const dogruMU = true;
console.log("dogruMU degiskeninin degeri: ", dogruMU);
console.log("dogruMU degiskeninin tipi: ", typeof dogruMU);

const bos = null;
console.log("bos degiskeninin degeri: ", bos);
console.log("bos degiskeninin tipi: ", typeof bos);

// const isim = "Taha";  AYNI TANIMLAMAYI İKİNCİ KEZ KABUL ETMİYOR

// const hüüü;  CONST DEĞİŞKENİ BOŞ BIRAKILAMAZ VEYA DAHA SONRADAN DEĞİŞTİRİLEMEZ

let dil = "Java";
dil = "JavaScript";
console.log("dil degiskeninin degeri: ", dil);
console.log("dil degiskeninin tipi: ", typeof dil);

dil = 1;
console.log("dil degiskeninin degeri: ", dil);
console.log("dil degiskeninin tipi: ", typeof dil);

dil = null;
console.log("dil degiskeninin degeri: ", dil);
console.log("dil degiskeninin tipi: ", typeof dil);

dil = true;
console.log("dil degiskeninin degeri: ", dil);
console.log("dil degiskeninin tipi: ", typeof dil);

let sayac;
console.log("sayac degiskeninin degeri: ", sayac);
console.log("sayac degiskeninin tipi: ", typeof sayac);

sayac = true;
console.log("sayac degiskeninin degeri: ", sayac);

kalanBorc = 15.5;
// let kalanBorc = 10; 
console.log("kalanBorc degiskeninin degeri: ", kalanBorc);
console.log("kalanBorc degiskeninin tipi: ", typeof kalanBorc);

// let sayac = 2; block scoped tanimlamayi kabul

var fiyat;
fiyat = 23;
console.log("fiyat degiskeninin degeri: ", fiyat);

fiyat = 15.55;
console.log("fiyat degiskeninin degeri: ", fiyat);

var fiyat = 45;
console.log("fiyat degiskeninin degeri: ", fiyat);

// var global scoped tanimlamayi kabul eder ve tekrar kullanilabilir. 

// Aritmetik Operatorler
const ekmek = 2;
const yumurta = 30;
const peynir = 40;
const toplamHarcama = ekmek + peynir + yumurta;
console.log("Harcama " + toplamHarcama + " Lira");
console.log(`HARCAMA:${toplamHarcama} TL`);
const firstName = "Gerrard";
const surname = "Y";
const fullName = firstName + " " + surname;
console.log("Ad Soyad: ", fullName);
const x = 2;
const y = "2";
const result = x + y;
console.log("result: ", result);
console.log("typeof result: ", typeof result);
const yil = 2024;
const dogumTarihi = 1994;
const yas = yil - dogumTarihi;
console.log("yas: ", yas);
console.log("yas: " + (yil - dogumTarihi));
const q = 3;
const k = "1";
const result2 = k - q;
const result3 = q - k;
console.log("result2: ", result2);
console.log("result3: ", result3);
console.log("final result: " + q - k); // NaN
// const pi = 3.14; yukarida tanimli
const r = 3;
const alan = pi * r ** 2;
const cevre = 2 * pi * r;
console.log("alan: ", alan);
console.log("cevre: ", cevre);
let a = 3;
console.log("a: ", a);
let b = ++a;
console.log("a: ", a);
let c = --a;
console.log(a, b, c);
// const z = 3;
// let klm = z++;
// console.log("klm: ", klm); Uncaught TypeError: Assignment to constant variable.
a = 5;
console.log("a: ", a);
b = ++a;
console.log("b: ", b);
c = a++;
console.log("c: ", c);
console.log("a: ", a);
let sayi = 123;
console.log("sayi: ", sayi % 2);
const s1 = 5;
console.log(s1 == 5);
console.log(s1 == "5");
console.log(s1 === "5");
console.log(s1 != "5");
console.log(s1 !== "5");
let s2 = true;
let s3 = true;
console.log(s2 && true);
console.log(s2 && s3);
console.log(s2 && s3 && false);
s3 = false;
console.log(s2 || s3 || false);
s3 = null;
console.log(s2 && s3);
console.log(s2 || s3);
// 0 , false ,  null , undefined , "", NaN  disindaki butun durumlar true kabul edilir.
s2 = "kus";
s3 = "kedi";
console.log(s2 || s3);
console.log(s2 && s3);
s2 = true;
s3 = false;
console.log(!s2);
console.log(!s3);
s3 = null;
console.log(!s3);
s2 = "gerrard";
console.log(!s2);
s2 = 55;
console.log(!s2)