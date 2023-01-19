const wallpapers = ["starwars-1.jpg","starwars-2.jpg","starwars-3.jpg","starwars-4.jpg","starwars-5.jpg",]
const chosenPicture = wallpapers[Math.floor(Math.random() * wallpapers.length)];
const todaysWallpaper = document.createElement("img");
todaysWallpaper.src = `assets/img/${chosenPicture}`;

document.body.appendChild(todaysWallpaper);

