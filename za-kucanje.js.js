// 1 - kad se klikne na element koji ima id dugme da izbaci alert sa tekstom "Kliknuto"
document.getElementById('dugme').addEventListener('click', function () {
    alert("Kliknuto");
});

// 2 - kad se klikne na element koji ima id dugme da izbaci alert sa tekstom "Kliknuto" ali da se koristi imenovana funkcija
document.getElementById('dugme').addEventListener('click', klikNaDugme);

function klikNaDugme() {
    alert("Kliknuto");
}

// 3 - Niz sadrži elemente: Jedan, Dva, Tri, Četiri, Pet. Prođite sa for petljom kroz sve njih i u konzolu ispišite njihove vrednosti
var niz = ["Jedan", "Dva", "Tri", "Četiri", "Pet"];
for (var i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

// 4 - Pomoću select liste ispišite godine od 1900 do 2100 i value i tekst option atributa treba da budu godine, kreiranu selekt listu upišite na kraj body-ja
var selekt = '<select name="godine">';
for (var j = 1900; j < 2100; j++) {
    selekt += "<option value='" + j + "'>" + j + "</option>";
}
selekt += '</select>';
document.body.innerHTML += selekt;


// 5 - Nacrtajte tabelu sa 10 kolona i 8 redova, svaki tr i svaki td moraju da imaju jedinstven id, nacrtanu tabelu ispišite na kraj body taga
var table = '<table>';
for (var i = 0; i < 8; i++) {
    table += '<tr id="red_' + i + '">';
    for (var j = 0; j < 10; j++) {
        table += '<td id="kolona_' + i + '_' + j + '"></td>';
    }
    table += '</tr>';
}
table += '</table>';
document.body.innerHTML += table;

// 6 - Napravite funkciju pomoću koje ćemo zadatak broj 4 uraditi korišćenjem DOM metoda i moći d kreiramo listu sa drugim rasponom godina. Tako kreiranu listu napišite na kraj body-ja
function kreirajSelectListuGodine(pocetak, kraj) {
    var selekt = document.createElement("select");
    for (var i = pocetak; i <= kraj; i++) {
        var opcija = document.createElement("option");
        opcija.setAttribute("value", i);
        opcija.textContent = i;
        selekt.appendChild(opcija);
    }
    return selekt;
}

document.body.appendChild(kreirajSelectListuGodine(1980, 2017));

// 6a - Napravite funkciju pomoću koje ćemo zadatak broj 5 uraditi korišćenjem DOM metoda i moći da kreiramo tabelu drugih dimenzija. Tako kreiranu tabelu napišite na kraj body-ja
function kreirajTabelu(redova, kolona) {
    var tabela = document.createElement("table");
    for (var i = 0; i < redova; i++) {
        var newRow = document.createElement("tr");
        for (var j = 0; j < kolona; j++) {
            var newColumn = document.createElement("td");
            newColumn.setAttribute("id", 'cell_' + i + '_' + j);
            newRow.appendChild(newColumn);
        }
        tabela.appendChild(newRow);
    }
    return tabela;
}

document.body.appendChild(kreirajTabelu(3, 4));

// 7 - ne treba da se meri brzina

// 8 - Napravite funkciju koja će za prosleđeni Date objekat da nam vrati datum u sledećem formatu "2020-02-24 17:38:45" // dan, mesec, godina, sat, minut, sekund . U konzolu upišite rezultat za Date objekat kreiran od vašeg rođendana
function formatiraj(datum) {
    return datum.getFullYear()
        + '-' + dodajNulu(1 + datum.getMonth())
        + '-' + dodajNulu(datum.getDate())
        + ' ' + dodajNulu(datum.getHours())
        + ':' + dodajNulu(datum.getMinutes())
        + ':' + dodajNulu(datum.getSeconds())
}

function dodajNulu(broj) {
    return broj < 10 ? '0' + broj : broj;
}

console.log(formatiraj(new Date(2082, 12 - 1, 29)));

// 9 - napišite funkciju koja vraća random broj između 0 i x
function randomBroj(x) {
    return Math.floor(Math.random() * x);
}

// 10 - napišite funkciju koja vraća random broj između x i y
function randomBroj(x, y) {
    return Math.floor(Math.random() * (y - x)) + x;
}

// 11 - zamenite sva pojavljivanja jednog stringa u drugom
function replaceAll(search, replace, subject) {
    while (subject.includes(search)) {
        subject = subject.replace(search, replace);
    }
    return subject;
}

// 12 - Vratite niz od 20 brojeva od 0 do 100 bez ponavljanja, greške napisane ispod moraju biti vraćene na ovaj način i u ovom formatu, posle nje napišite funkciju koja vraća random x elemenata objekta koji joj prosledimo, ta funkcija može da koristi funkciju koju smo napravili za vraćanje random niza jedinstvenih brojeva
function randomNumbers(start, end, count) {
    if (end - start < 0) {
        throw 'Param "end" must be bigger than param "start"';
    }
    if ((end - start) < count) {
        throw 'You can\'t generate ' + count + ' different numbers between ' + start + ' and ' + end;
    }
    var returnArray = [],
        randomNumber;
    for (var i = 0; i < count; i++) {
        randomNumber = Math.floor(Math.random() * (end - start)) + start;
        if (returnArray.indexOf(randomNumber) == -1) {
            returnArray.push(randomNumber);
        } else {
            --i;
        }
    }
    return returnArray;
}

function randomObjectElements(obj, count) {
    var tmpArray = [],
        returnObject = {};
    for (var key in obj) {
        tmpArray.push(key);
    }
    // var tmpArray = Object.keys(obj), returnObject = {}
    var randomElements = randomNumbers(0, tmpArray.length - 1, count);
    for (var randomArrayElement in randomElements) {
        var objectKey = tmpArray[randomElements[randomArrayElement]];
        returnObject[objectKey] = obj[objectKey];
    }
    return returnObject;
}

// 13 - Napišite funkciju pomoću koje možemo proslediti niz css pravila u formatu {color:'red','background-color':'blue'} a ona te stilove primeniti na element
function css(element, cssRules) {
    for (var stil in cssRules) {
        var osobineNiz = stil.split('-'),
            osobina = '';
        for (var i = 0; i < osobineNiz.length; i++) {
            if (i == 0) {
                osobina = osobineNiz[i];
            } else {
                osobina += osobineNiz[i].substr(0, 1).toUpperCase() + osobineNiz[i].substr(1);
            }
        }
        element.style[osobina] = cssRules[stil];
    }
}

// 14 - Kreirajte element koji ćete preko tastature moći da pomerate po stranici. takođe napravite tabelu za logovanje pretisnutih tastera kao u primeru ispod
document.body.innerHTML += "<div id='loptica' style='position: absolute;top:0;left:50%;'>X</div>";
var loptica = document.getElementById('loptica'),
    y = 0,
    x = (innerWidth / 2 - 25);
loptica.style.left = x + 'px';
document.body.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) { //if(event.key=="ArrowLeft"){
        x -= 25;
    } else if (event.keyCode == 39) {
        x += 25;
    } else if (event.keyCode == 38) {
        y -= 25;
    } else if (event.keyCode == 40) {
        y += 25;
    }
    loptica.style.left = x + 'px';
    loptica.style.top = y + 'px';
});

document.body.innerHTML += '<table><thead><tr><td>key</td><td>keyCode</td><td>altKey</td><td>shiftKey</td><td>ctrlKey</td></tr></thead><tbody id="tastatura_log"></tbody></table>';
document.body.addEventListener('keydown', function (e) {
    var osobineDogadjaja = [e.key, e.keyCode, e.altKey, e.shiftKey, e.ctrlKey];
    document.getElementById('tastatura_log').insertAdjacentHTML('afterbegin', "<tr><td>" + osobineDogadjaja.join('</td><td>') + "</td></tr>");
    e.preventDefault();
    e.stopPropagation();
});

// 15, 16,  17 - ne treba

// 18 - napišite funkciju randomElementNiza()  koja vraća random element niza
function randomElementNiza(niz) {
    return niz[Math.floor(Math.random() * niz.length)];
}

// 19 - napišite funkciju randomElementObjekta() koja vraća random element objekta
function randomElementObjekta(obj) {
    var keysArray = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }
    var randomKey = keysArray[Math.floor(keysArray.length * Math.random())];
    return obj[randomKey];
}

// 20 -  napravite funkciju kao što je ova dole u primeru i pozovite je, nije bitno kako pišete kod bitno je da pri izvršavanju radi isto kao ova napisana ispod
function meni(poruka) {
    if (!poruka) {
        poruka = "Dobro došli";
    }
    var odgovor = prompt(poruka + "\nIzaberite broj iz menija da biste nastavili:\n" +
        "0 - da se vratite na početak\n" +
        "1 - promeni boju pozadine\n" +
        "2 - vrati random broj\n" +
        "3 - izlaz\n"
    );
    if (odgovor == 0) {
        meni();
    } else if (odgovor == 1) {
        var boje = ['red', 'green', 'blue', 'yellow', 'olive'];
        var randomBoja = boje[Math.floor(Math.random() * boje.length)];
        document.body.style.background = randomBoja;
        meni("Boja pozadine promenjena u: " + randomBoja);
    } else if (odgovor == 2) {
        meni("Random broj: " + Math.floor(Math.random() * 100));
    } else if (odgovor == 3) {
        console.log("Izlaz");
    } else {
        meni("Izabrali ste pogrešan unos!!!");
    }
}

meni();

// 21 - Upišite u localStorage 3 elementa prvi, drugi i treci, njihove vrednosti treba da budu 1, 2 i 3. Izbrišite drugi a u prvi upišite vrednost trećeg
localStorage.setItem('prvi', 1);// u localStorage uvek upisujemo na ovaj način: ključ, vrednost
localStorage.setItem('drugi', 2);
localStorage.setItem('treci', 3);
localStorage.removeItem('drugi');
localStorage.setItem('prvi', localStorage.getItem('treci'));


// 22 - Prepišite sve primere ispod
(function () {
    console.log("IIFE 1");
})();

(function () {
    console.log("IIFE 2");
}());

(function (a, b) {
    console.log("IIFE 3:", a, b);
}(5, 9));

(function () {
    var a = 5;

    function b() {
        console.log('b');
    }
})();
console.log(a, b());

var options = {a: 5, b: 7};
(function (o) {
    console.log('a:', o.a, 'b:', o.b);
}(options));


// 23 - ne treba

// 24, 25, 26 - input elementu koji ima id ime, upišite vrednost "Petar", postavite njegov title atribut da sadrži tekst "Upišite vaše ime ovde", dodajte mu klase jedan i dva, sklonite mu klasu tri i uradite toggle klase cetiri
document.body.innerHTML += "<input type='text' id='ime'>";
var ime = document.getElementById('ime');
ime.value = "Petar";
ime.setAttribute("title", "Upišite vaše ime ovde");
var klase = ime.classList;
klase.add('jedan');
klase.add('dva');
klase.remove('tri');
klase.toggle('cetiri');

// 27, 28, 29 - U stringu "a,b,c,d,e,f,g,h" zemenite zareze sa dvotačkom koristeći samo split i join metode. Iz dobijenog stringa na kraju izvadite 5. element ponovo razdvajajući ga sa split koristeći dvotačku kao separator
"a,b,c,d,e,f,g,h".split(',').join(':').split(':')[4];

/* 30 - Imamo sledeći html:
            Select all<input type="checkbox" name="check-all" id="all"><br>
                A<input type="checkbox" name="a" id="check1"><br>
                B<input type="checkbox" name="b" id="check2"><br>
                C<input type="checkbox" name="c" id="check3"><br>
                D<input type="checkbox" name="d" id="check4"><br>
                E<input type="checkbox" name="e" id="check5"><br>
Ako se čekira #all checkbox svi drugi treba da se čekiraju a ako su svi čekirani da se odčekiraju
Ako se čekira bilo koji od ostalih checkboxova ako su svi čekirani treba i #all da bude čekiran u protivnom #all treba da bude odčekiran

Posle toga za multiple select listu koja ima id="boja" u konzolu upišite njene vrednosti pri svakoj promeni izabranih vrednosti liste
    */
document.querySelectorAll('input[id^=check]').forEach(function (elem) {
    elem.addEventListener('change', function () {
        document.getElementById('all').checked = allChecked('input[id^=check]');
    });
});
document.getElementById('all').addEventListener('change', function () {
    var elementi = document.querySelectorAll('input[id^=check]');
    for (var i = 0; i < elementi.length; i++) {
        elementi[i].checked = this.checked;
    }
});

function allChecked(selektor) {
    var elementi = document.querySelectorAll(selektor);
    var checked = 0;
    for (var i = 0; i < elementi.length; i++) {
        if (elementi[i].checked == true) checked++;
    }
    return checked > 0 && checked == elementi.length;
}

document.getElementById('boja').addEventListener('change', function () {
    for (var i = 0; i < this.options.length; i++) {
        if (this.options[i].selected) {
            console.log(this.options[i].textContent, this.options[i].value);
        }
    }
});

/* 31 - sortirajte elemente nizpva:
    var niz1 = ["jedan", "dva", "osam"],
        niz2 = [88, 17, 38, 415, 977, 834];

        niz1 - po dužini stringa
        niz2 - po veličini ostatka pri deljenju sa 33
 */
niz1.sort(function (a, b) {
    return a.length - b.length;
});
niz2.sort(function (a, b) {
    return a % 33 - b % 33;
});

// 32, 33 - ne treba

// 34 - Za svaki div element koji se nalazi u divu koji ima id="brojevi" vratite id i tag tog elementa - koristite obavezno dole naveden način pisanja
var brojevi= document.getElementById("brojevi");
brojevi.addEventListener("click", klikNaBroj, false);
function klikNaBroj(e) {
    if (e.target !== e.currentTarget) {
        console.log("Kliknuto: " + e.target.id + " Tag:"+e.target.tagName);
    }
    e.stopPropagation();
}

// 35 - upuisujte u element koji ima id="tajmerOutput" vrednost za 1 manju od trenutne dok ona ne dođe do nule html izgleda ovako <div id="tajmerOutput">20</div> html kreirajte korišćenjem dom metoda a zatim ga dodajte na početak body-ja pomoću insertAdjacentHTML
var div=document.createElement('div');
div.setAttribute('id','tajmerOutput');
div.textContent=20;
document.body.insertAdjacentHTML('beforebegin',div.outerHTML);
var tajmer=setInterval(function (){
    var trenutnaVrednost=parseInt(document.getElementById('tajmerOutput').innerHTML,10);
    if(trenutnaVrednost<1){
        clearInterval(tajmer);
    }else{
        document.getElementById('tajmerOutput').innerHTML=trenutnaVrednost-1;
    }
},1000);


// 36 - ne treba

// 37 - Napišite funkciju koja dinamički poziva eksterni javascript fajl i učitava ga na stranici. Funkciju pozovite sa nekim svojim eksternim fajlom
function loadScript(url, callback){
    var script = document.createElement('script');
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    document.head.appendChild(script);
}
loadScript('formatiraj_datum.js',function (){
    console.log(formatiraj(new Date()));
});

// 38, 39 - ne treba

// 40 - napravite animaciju koja radi isto što i ova ispod, možete koristiti ovaj kod ili animacija4.js
function animacija(){
    var w = 20,
        h = 20,
        y = w / 2,
        x = (innerWidth / 2 - w / 2),
        smer = 'dole',
        smer2 = 'desno',
        speedHorizontal = 10,
        speedVertical = 10,
        bgColor = '#'+Math.random().toString(16).substr(2,3);

    var loptica = document.createElement('div');
    loptica.id = 'loptica';
    loptica.style.position = 'absolute';
    loptica.style.top = y + 'px';
    loptica.style.left = x + 'px';
    loptica.style.background = bgColor;
    loptica.style.borderRadius = (Math.random()<0.5?100:0)+'%';
    loptica.style.width = w + 'px';
    loptica.style.height = h + 'px';
    document.body.appendChild(loptica);

    loptica.style.left = x + 'px';

    function renderAnimation() {
        if (smer == 'gore') y -= speedVertical;
        else y += speedVertical;

        if (smer2 == 'desno') x += speedHorizontal;
        else x -= speedHorizontal;

        if (y > innerHeight - h / 2) smer = 'gore';
        if (y < h / 2) smer = 'dole';

        if (x > innerWidth - w / 2) smer2 = 'levo';
        if (x < w / 2) smer2 = 'desno';

        loptica.style.top = y + 'px';
        loptica.style.left = x + 'px';
        window.requestAnimationFrame(renderAnimation);
    }

    window.requestAnimationFrame(renderAnimation);
}
animacija();


// 41 - ajaxom pozovite random json fajl: 1.json, 2.json ili 3.json i ispišite  u konzoli sva imena koja ste u njemu našli
var xhr = new XMLHttpRequest();
xhr.open('GET', 'ajax/json/' + Math.ceil(Math.random(0, 3)) + '.json');
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.response);
        for (var d in data) {
            if (typeof data[d].ime != 'undefined'){
                console.log(data[d].ime);
            }
        }
    } else {
        console.log('Errror: ' + xhr.status);
    }
};
xhr.send();
