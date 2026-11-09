function nav(id) {
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
const ecran = document.getElementById('ecran');
const histo = document.getElementById('historique');
function add(val) {
ecran.value+=val;
}
function effacer() {
ecran.value="";
}
function calculer() {
try {
let res = eval(ecran.value);
histo.innerHTML = `<li>${ecran.value} = ${res}</li>` + histo.innerHTML;
ecran.value = res;
} catch(e) {
ecran.value = 'Erreur';
}
}



function ajouterTache() {
let input = document.getElementById('tacheInput');
if (input.value.trim() === '') return;
let li = document.createElement('li');
li.innerHTML = `<span onclick="this.style.textDecoration='line-through'">${input.value}</span>
<button onclick="this.parentElement.remove()">X</button>`;
document.getElementById('listeTaches').appendChild(li);
input.value = '';
}
function redimensionner(taille) {
document.getElementById('monImage').width = taille;
document.getElementById("y").innerHTML=taille;
}
let grille = [1, 2, 3, 4, 5, 6, 7, 8, ''];
function afficher() {
const plateau = document.getElementById('plateau');
plateau.innerHTML = '';
grille.forEach((val, i) => {
let div = document.createElement('div');
div.className = 'tuile' + (val === '' ? ' vide' : '');
div.textContent = val;
div.onclick = () => jouer(i);
plateau.appendChild(div);
}); }
function jouer(i) {
let vide = grille.indexOf('');
// Vérifier si la case sélectionnée est voisine de la case vide (gauche, droite, haut, bas)
let diff = Math.abs(i - vide);
if (diff === 1 || diff === 3) {
[grille[i], grille[vide]] = [grille[vide], grille[i]];
afficher();
}
}
function melanger() {
grille.sort(() => Math.random() - 0.5);
afficher();
}
afficher(); 
function evaluerQuiz() {
const reponsesCorrectes = { q1: 'B', q2: 'A', q3: 'C', q4: 'B', q5: 'A' };
let score = 0;
let form = document.getElementById('quizForm');
for (let q in reponsesCorrectes) {
let option = form.elements[q];
if (option && option.value === reponsesCorrectes[q]) {
score++;
}
}
let divResultat = document.getElementById('resultatQuiz');
divResultat.innerHTML = `Votre score : ${score} / 5 <br>`;
if (score === 5) {
//Cette partie est à compléter
}
}