PORTFOLIO PERSONNEL — Yasmina Maïga
==================================================

INSTRUCTIONS
------------
1. Ouvrir le dossier "site/" 
2. Double-cliquer sur index.html pour ouvrir le site dans un navigateur
   (ou utiliser l'extension Live Server de VS Code pour un rechargement automatique)
3. Navigateur utilisé pour les tests : Firefox + Chrome


QUALITÉ — Résumé
================

1) ACCESSIBILITÉ

- Problème : structure HTML initiale à vérifier pour la conformité sémantique.
  Correction : utilisation systématique de <header>, <nav>, <main>, <section>,
  <footer> ; un seul <h1> par page (hero), hiérarchie <h2>/<h3> respectée
  pour chaque section (À propos, Compétences, Projets, Contact).
  Résultat : structure sémantique complète, vérifiée via l'inspecteur du
  navigateur — aucune <div> générique utilisée à la place d'une balise
  porteuse de sens.

- Problème : un formulaire sans label explicite est inutilisable au clavier
  et par les lecteurs d'écran.
  Correction : chaque champ (<input>, <textarea>) est associé à un <label
  for="..."> correspondant à son id, et des messages d'erreur clairs
  s'affichent sous chaque champ invalide via JavaScript.
  Résultat : formulaire testé au clavier (Tab) et par soumission invalide —
  chaque erreur est explicite et visible.

- Problème : la navigation clavier doit permettre d'atteindre tous les
  éléments interactifs dans un ordre logique.
  Correction : aucun élément interactif n'a été neutralisé (pas de
  tabindex="-1" ni d'outline supprimé), l'ordre du DOM suit l'ordre visuel
  (header > hero > sections > footer).
  Résultat : test au clavier (touche Tab) confirmé — le focus est visible
  sur chaque lien et bouton, dans un ordre cohérent.

- Problème : un contraste insuffisant entre texte et fond rend le contenu
  illisible pour certains utilisateurs.
  Correction : vérification du contraste du bouton de contact (texte foncé
  sur fond clair) via l'outil de contraste des DevTools.
  Résultat : ratio de contraste conforme aux normes AA.


2) PERFORMANCE

- Problème : plusieurs fichiers CSS/JS séparés multiplient les requêtes
  réseau et complexifient la maintenance.
  Correction : un seul fichier style.css et un seul fichier app.js pour
  tout le site ; le script est chargé avec l'attribut defer pour ne pas
  bloquer le rendu de la page.
  Résultat : 7 requêtes au total pour charger toute la page (HTML, CSS, JS,
  2 images), poids total 151,90 Ko, chargement en 749 ms (mesuré via
  l'onglet Réseau des DevTools).

- Problème : les blocs "à venir" (cartes projets) utilisaient initialement
  des zones d'image inutiles, ajoutant du poids sans contenu réel.
  Correction : suppression des placeholders d'image non essentiels sur les
  cartes projets (texte seul, plus sobre) ; image d'illustration du hero
  conservée mais choisie légère.
  Résultat : réduction du nombre de ressources chargées, page plus sobre et
  plus rapide, cohérent avec la démarche d'écoconception (limiter le poids
  des médias).


3) CORRECTIONS / ROBUSTESSE

- Problème : une requête vers /favicon.ico échouait (erreur 404) car aucune
  icône n'était définie, générant une erreur visible en console.
  Correction : ajout d'un favicon léger encodé directement en SVG dans le
  <head> du HTML (aucun fichier externe à charger).
  Résultat : plus aucune erreur dans la console du navigateur.

- Problème : le site devait rester lisible et fonctionnel sur mobile et
  desktop, avec des formulaires robustes face aux erreurs de saisie.
  Correction : mise en place de 2 breakpoints CSS (1024px et 768px) pour
  adapter la mise en page (tablette et mobile), et validation JavaScript
  du formulaire de contact (champs requis, format email, longueur minimale
  du message) avec messages d'erreur dédiés.
  Résultat : rendu vérifié en desktop, tablette et mobile (360px) sans
  débordement horizontal ; formulaire testé avec des cas valides et
  invalides, comportement conforme dans tous les cas.


DIFFICULTÉS RENCONTRÉES
------------------------
La personnalisation du wireframe généré par IA avec des informations réelles


LIEN DE PUBLICATION
--------------------------------
[à compléter si le site est publié sur GitHub Pages]