let marvel;
fetch("marvel.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        marvel = data.slice(0, 35);
        generateCards(marvel);
    })
    .catch((err) => { });

function generateCards(listaMarvel) {
    const marveldex = document.getElementById("marveldex");
    while (marveldex.firstChild) {
        marveldex.removeChild(marveldex.firstChild);
    }
    listaMarvel.forEach((marvel) => {
        const card = `<div class="iniline-block rounded-xl m-auto drop-shadow-xl max-w-[200px] lg:max-w-[300px] p-5 hover:bg-[#BF3131] text-center">
                          <img src="/img/${formatID(marvel.id)}.png">
                          <h2 class="text-xl pt-3">${marvel.name} (${marvel.year})</h2>
                          <i class="block">${marvel.director}</i>
                          <strong class="inline-block">${marvel.rating}/5<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline w-5 h-5 align-text-bottom">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                          </strong>
                          </div>`;
        marveldex.insertAdjacentHTML("beforeend", card);
    });
}

function formatID(id) {
    if (id.toString().length == 1) return `0${id}`;
    return id;
}

const searchBar = document.getElementById("srcbar");
searchBar.addEventListener("keyup", (e) => {
    let marvelFilter = [];
    marvelFilter = marvel.filter((mrvl) => {
        return mrvl.name.match(e.target.value);
    });
    generateCards(marvelFilter);
});

function menubtn() {
    const menubtn = document.getElementById("ulmenu").style.display;
    if (menubtn == "none") { document.getElementById("ulmenu").style.display = "flex"; }
    else { document.getElementById("ulmenu").style.display = "none"; }
}