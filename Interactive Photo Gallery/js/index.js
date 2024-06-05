// Array containing the gallery data
const galleryData = [
    {
        imgSrc: "./assets/image4.png",
        name: "FENNEC FOX",
        place: "India",
    },
    {
        imgSrc: "./assets/image 4.png",
        name: "HUMPBACK WHALE",
        place: "South Africa",
    },
    {
        imgSrc: "./assets/Image.png",
        name: "COMMON,BROWN BABOON",
        place: "South Africa"
    },
    {
        imgSrc: "./assets/Image3.png",
        name: "SPOTTED DEER",
        place: "Amazon",
    },
];

// Function to create gallery cards
function createGalleryCards() {
    const galleryWrapper = document.querySelector(".galleryWrapper");
    galleryData.forEach((data) => {
        const galleryCard = document.createElement("div");
        galleryCard.classList.add("galleryCard");

        galleryCard.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.name}" />
    <div class="galleryOverlay">
      <div class="details">
        <h1>${data.name.split(" ").join("<br>")}</h1>
        <small class="place">${data.place}</small>
        </div>
        <p class="know">  Know More &nbsp;<i class="fa-solid fa-arrow-right-long"></i></p>
    </div>
  `;

        galleryWrapper.appendChild(galleryCard);
    });
}
document.addEventListener("DOMContentLoaded", createGalleryCards);
