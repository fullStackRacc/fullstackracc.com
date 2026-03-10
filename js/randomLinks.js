var URLs = [
    "https://returnednull.com",
    "https://aliteralraccoon.com",
    "https://isitdaylightsavingsti.me",
    "https://trollian.space",
    "https://datakra.sh",
    "https://fmhy.net/beginners-guide",
    "https://www.fantasynamegenerators.com/",
    "https://youraislopbores.me/",
    "https://www.youtube.com/watch?v=DALEwiDArCQ",
    "https://www.youtube.com/watch?v=OzKG32FEXoU",
    "https://www.youtube.com/watch?v=YHnaiRrT_GQ",
    "https://www.youtube.com/watch?v=A0dKni0tYts",
    "https://www.youtube.com/watch?v=2SKUPy0SlHQ",
    "https://www.youtube.com/watch?v=3sydQTaKZmM",
    "https://www.youtube.com/watch?v=FhSAtZCrIMA&list=PL82qch9gq_J_ZNk0akN3Jo1b3UuldWs-L",
    "https://www.patreon.com/cw/fullstackracc",
    "https://www.freecodecamp.org",
];

function luckyLink() {
    window.open(URLs[Math.floor(Math.random() * URLs.length)], "_blank" )
};