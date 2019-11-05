// Kintamųjų inicijavimas
// /1./

let ger = 1;
console.log(ger);

const gera = 2;
console.log(gera);

var geras = 3;
console.log(geras);

// /2./

let ji = "grazi";
console.log(ji);

let jis = "geras";
console.log(jis);

var mes = "zmones";
console.log(mes);

// /3./

let sarasas1 = [1, 2, 3, 6, 8];
console.log (sarasas1);

let sarasas2 = [9, 3, 5, 7, 3];
console.log (sarasas2);

let sarasas3 = [3, 6, 9, 7, 8];
console.log (sarasas3);

// /4./

let sarasas4 = ['vakaras', 'yra', 'geriau', 'nei', 'rytmetys'];
console.log (sarasas4);

let sarasas5 = ['grazi', 'diena', 'prasideda', 'nuo', 'ryto'];
console.log (sarasas5);

let sarasas6 = ['labas', 'rytas', 'sako', 'tau', 'kava'];
console.log (sarasas6);

// Veiksmai su kintamaisiais
// /1./

let skaicius = ger + gera + geras;
console.log (skaicius);

// /2./

let tekstas = ji + " " + jis + " " + mes;
console.log(tekstas);

// /3./
let skaiciukas = sarasas1[0] - sarasas1[1] + sarasas1[2] - sarasas1[3] + sarasas1[4];
console.log(skaiciukas);

// /4./
let rinkinys = sarasas6[4] + ", " + sarasas6[3] + ", " + sarasas6[2] + ", " + sarasas6[1] + ", " + sarasas6[0];
console.log(rinkinys);

//Kintamųjų palyginimas
// /1./
let vienas = 5;
let du = 7;

//1//a
if (vienas < du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//b
if (vienas > du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//c
if (vienas === du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//d
if (vienas !== du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//e
if (vienas >= du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//f
if (vienas <= du) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//2

let bambukas = 'grazi';
console.log(bambukas.length);

let kaktusas = 'kaktusas'
console.log(kaktusas.length);

// 3 ///a
if (bambukas.length < kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//b
if (bambukas.length > kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//c
if (bambukas.length === kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//d
if (bambukas.length !== kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//e
if (bambukas.length >= kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//f
if (bambukas.length <= kaktusas.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

// /4./
sarasas3 = [3, 6, 9, 7, 8, 6, 7, 7];
console.log (sarasas3.length);
sarasas4 = ['vakaras', 'yra', 'geriau'];
console.log (sarasas4.length);

// //a
if (sarasas3.length < sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//b
if (sarasas3.length > sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//c
if (sarasas3.length === sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//d
if (sarasas3.length !== sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//e
if (sarasas3.length >= sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

//f
if (sarasas3.length <= sarasas4.length) {
    console.log('pomidoras')
}else{
    console.log('Bandykite kitą kartą.')
}

// /11./Ciklo for panaudojimas

for ( var x=0; x <= 0; x++) {
    console.log(x);
}

for (var a=0; a <=4; a++) {
    console.log(a);
}

for (var z=0; z <=100; z++) {
    console.log(z);
}

for (var s=574; s <=815; s++) {
    console.log(s);
}

for (var f=-50; f <=-50; f++) {
    console.log(f);
}

for (var g=-30; g <=-70; g--) {
    console.log(g);
}

//2

let pirminis = 'abcdef';
               
for (x=5; x < pirminis.length-1; x--) {
    let reverse = pirminis(x)
    console.log(pirminis(x))
}


// 



// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalinančių be liekanos iš 7 yra 2 vienetai.



// /12./


// /13./


// /14./


// /15./

// /16./
