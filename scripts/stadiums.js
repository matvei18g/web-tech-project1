const stadiums = [
    {
        name: "Bolt Arena",
        city: "Хельсинки",
        team: "HJK",
        img: "images/stadiums/bolt_arena.jpg"
    },
    {
        name: "Tammelan Stadion",
        city: "Тампере",
        team: "Ilves",
        img: "images/stadiums/tammela.jpg"
    },
    {
        name: "Veritas Stadion",
        city: "Турку",
        team: "Inter Turku / TPS",
        img: "images/stadiums/veritas.jpg"
    },
    {
        name: "OmaSP Stadion",
        city: "Сейняйоки",
        team: "SJK",
        img: "images/stadiums/omaSP.jpg"
    },
    {
        name: "Väre Areena",
        city: "Куопио",
        team: "KuPS",
        img: "images/stadiums/vare.jpg"
    },
    {
        name: "Haka Stadium (Tehtaan Kenttä)",
        city: "Валкеакоски",
        team: "FC Haka",
        img: "images/stadiums/tehtaan.jpg"
    },
    {
        name: "Honka Arena (Tapiolan Urheilupuisto)",
        city: "Эспоо",
        team: "FC Honka",
        img: "images/stadiums/tapiola.jpg"
    },
    {
        name: "Arto Tolsa Areena",
        city: "Котка",
        team: "KTP",
        img: "images/stadiums/arto.jpg"
    },
    {
        name: "Raatin Stadion",
        city: "Оулу",
        team: "AC Oulu",
        img: "images/stadiums/raati.jpg"
    },
    {
        name: "Myyrmäki Stadium",
        city: "Вантаа",
        team: "VPS / PK-35",
        img: "images/stadiums/myyrmaki.jpg"
    },
    {
        name: "Maarianhamina Wiklöf Holding Arena",
        city: "Мариехамн",
        team: "IFK Mariehamn",
        img: "images/stadiums/wiklof.jpg"
    },
    {
        name: "Centralplan",
        city: "Лахти",
        team: "FC Lahti",
        img: "images/stadiums/centralplan.jpg"
    }
];

const container = document.getElementById("stadium-container");

stadiums.forEach(st => {
    const card = document.createElement("div");
    card.className = "stadium-card";

    card.innerHTML = `
        <img src="${st.img}" alt="${st.name}">
        <h3>${st.name}</h3>
        <p>${st.city}</p>
    `;

    container.appendChild(card);
});