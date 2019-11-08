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

// />>>>>>>>>>>>./Ciklo for panaudojimas
//1
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
//1 variantas
let pirminis = 'abcdef';

let rezultatas = "";
for (x = pirminis.length-1; x >= 0 ; x--) {
        console.log(pirminis[x]);
        rezultatas = rezultatas + pirminis[x];    
}

console.log(rezultatas);

// 2 variantas

console.log('--------------------')
pirminis = 'gerina'.split('');
for(i = 0; i < pirminis.length / 2; i++) {

    let temporar = pirminis[i]; //a
    pirminis[i] = pirminis[pirminis.length-1-i] //f
    pirminis[pirminis.length-1-i] = temporar; //a
     console.log(pirminis);
    
}

console.log(pirminis.join(''));

//3 // 
//a
for( let x = 0; x <= 11; x++) {
    if((x % 3) == 0)  {
        console.log('dalijasi is 3');
    }
    if((x % 5) == 0)  {
        console.log('dalijasi is 5');
    }
    if((x % 7) == 0)  {
        console.log('dalijasi is 7');
    }
}
//b
for(x = 8; x <= 31; x++) {
    if((x % 3 == 0)) {
        console.log('dalijasi is 3')
    }
    if((x % 5 == 0)) {
        console.log('dalijasi is 5')
    }
    if((x % 7 == 0)) {
        console.log('dalijasi is 7')
    }
}
//c
for(x = -18; x <= -18; x++) {
    if((x % 3 == 0)) {
        console.log('dalijasi is 3')
    }
    if((x % 5 == 0)) {
        console.log('dalijasi is 5')
    }
    if((x % 7 == 0)) {
        console.log('dalijasi is 7')
    }
}

//d
//1d
let daliklis = 3;
let nuo = 0;
let iki = 11;
let kartai = 0;

for(x = nuo; x <= iki; x++) {
    // rezultata = (x % iki)
    if(x % daliklis === 0){
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ' , besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai+ ' vienetai');
//2d
daliklis = 5;
nuo = 0;
iki = 11;
kartai = 0;

for(x = nuo; x <= iki; x++) {
    
    if(x % daliklis === 0){
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ' , besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai+ ' vienetai');
//3d

daliklis = 7;
nuo = 0;
iki = 11;
kartai = 0;

for(x = nuo; x <= iki; x++) {
    
    if(x % daliklis === 0) {
        kartai++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ' , besidalinančių be liekanos iš ' + daliklis + ' yra ' + kartai+ ' vienetai');

/////funkcijos///////

//1

function tusciaFunkcija() {
    return false;
}
console.log( tusciaFunkcija() );

//2

function daugyba1 (skaicius1, skaicius2) {
    return(skaicius1 * skaicius2);
}

console.log(daugyba1(4, 3));

function daugyba2 (skaicius3, skaicius2) {
    return (skaicius3 * skaicius2)
}

console.log (daugyba2(7, 8));

function daugyba3 (skaicius1, skaicius2, skaicius3) {
    return (skaicius1 * skaicius3)
}
console.log(daugyba3(4, 2, 3));

// 3// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”

function skaitmenuKiekisSkaiciuje (numb1) {
    if(typeof(numb1) !== 'number' || isNaN(numb1) === true) {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    let skaitmKiekis = ('' + numb1).length;
// papildomas kl., o jei su '-' zenklu
    if(numb1 < 0) {
        skaitmKiekis--;
    }
// papildomas kl., o jei su kableliu
    if(numb1 % 1 !== 0) {
        skaitmKiekis--;
    }
    // if(('' + numb1).indexOf('.') >= 0) {
    //     skaitmKiekis--;
//     }
    return skaitmKiekis;
}
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( -348 ) );
console.log( skaitmenuKiekisSkaiciuje( 2.465 ) );

//4 Funkcija pavadinimu “didziausiasSkaiciusSarase”:

function didziausiasSkaiciusSarase(list) {
    if(Array.isArray(list) === false) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if(list.length === 0) {
        return'Pateiktas sąrašas negali būti tuščias.';
    }
    

    let didziausias = - Infinity;
    for (let t = 0; t < list.length; t++) {
        if (typeof(list[t]) !== 'number' || isFinite(list[t]) === false) {
            continue;
        }
        if (list[t] > didziausias) {
            didziausias = list[t];
        }
    }
    return didziausias;
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, 5, Infinity, NaN, -Infinity] ) );

//5 Funkcija pavadinimu “isrinktiRaides”:



