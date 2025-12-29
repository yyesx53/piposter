const grid = document.querySelector(".grid");

const posters = Array.from({ length: 12 }).map((_, i) => ({
  title: "Modern Poster",
  artist: "Piposter Studio",
  image: `https://picsum.photos/400/600?random=${i + 1}`
}));

posters.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" />
    <h3>${p.title}</h3>
    <p>${p.artist}</p>
  `;

  grid.appendChild(card);
});
