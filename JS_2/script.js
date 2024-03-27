const para = "1000";
console.log(para + 15);
console.log(Number(para) + 15);

const dil = "JavaScript";
console.log(Number(dil)); // NaN

const sayi = 54;
console.log(String(sayi) + " bu bir string.");
console.log(typeof sayi);
console.log(typeof String(sayi));

const s1 = 5;
const s2 = -4;
const s3 = "John";
console.log(Boolean(s1));
console.log(Boolean(s2));
console.log(Boolean(s3));

const sifir = 0;
console.log("Sifirin boolean degeri : ", Boolean(sifir));
const nal = null;
console.log("nal boolean degeri : ", Boolean(nal));
const tanimsiz = undefined;
console.log("tanimsiz boolean degeri : ", Boolean(tanimsiz));
const bosluk = "";
console.log("bosluk boolean degeri : ", Boolean(bosluk));
const sayiDegil = NaN;
console.log("sayiDegil boolean degeri : ", Boolean(sayiDegil));

const yas = 18;
if (yas < 18) {
  console.log("cocuk");
} else {
  console.log("yetiskin");
}

let sonuc;
if (yas <= 3) {
  sonuc = "Bebek";
} else if (yas <= 14) {
  sonuc = "Ergen";
} else if (yas < 18) {
  sonuc = "Genc";
} else {
  sonuc = "Yetiskin";
}

console.log("Sonuc su sekilde: ", sonuc);

// let age = prompt("Please enter your age");
// if (age > 0) {
//   console.log("You are alive");
// }

const bireyYas = 21;
const cinsiyet = "erkek";
const saglikli = true;

const kosul = bireyYas >= 18 && cinsiyet === "erkek" && saglikli;

if (kosul) {
  console.log("Askere gidebilir");
} else {
  console.log("Askere gidemez.");
}

let gun = prompt("1 ile 7 arasında bir sayı giriniz"); // gun degiskeni string, cunku propmt her zaman string degeri veriyor.

if (gun > 0 && gun < 8 && !isNaN(gun)) {
  switch (Number(gun)) {
    case 1:
      gun = "pazartesi";
      break;
    case 2:
      gun = "salı";
      break;
    case 3:
      gun = "çarşamba";
      break;
    case 4:
      gun = "perşembe";
      break;
    case 5:
      gun = "cuma";
      break;
    case 6:
      gun = "cumartesi";
      break;
    case 7:
      gun = "pazar";
      break;
    default:
      alert("Gün 1-7 arasında olmalıdır");
      break;
  }
  console.log("gun: ", gun);
} else {
  alert("Lütfen 1 ile 7 arasında bir sayı giriniz.");
}

const hiz = 90;
const mesaj = hiz >= 120 ? "Hizli" : "Yavas";
console.log("Hiziniz : ", mesaj);
for (let i = 1; i <= 10; i++) {
  console.log("Hello World!");
}
for (let i = 20; i >= 15; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
let toplam = 0;
for (let t = 1; t <= 10; t++) {
  toplam += t;
}
console.log("Toplam : ", toplam);
const n = prompt("Pozitif bir sayi giriniz.");
let toplam2 = 0;
for (let i = 1; i <= n; i++) {
  toplam2 += i;
}
console.log("Toplam2 : ", toplam2);
const sayi2 = prompt("pozitif bir sayi giriniz.");
const asalMi = (sayi2) => {
  let asal = true;
  for (let i = 2; i < sayi2; i++) {
    if (sayi2 % i == 0) {
      asal = false;
      break;
    }
  }
  return asal ? "ASAL" : "ASAL DEGIL";
};
console.log(` Bu ${sayi2} asal mi ? :  ${asalMi(sayi2)}`);
let sayi3 = 1;
while (sayi3 <= 10) {
  console.log(sayi3 + " Merhaba");
  sayi3++;
}