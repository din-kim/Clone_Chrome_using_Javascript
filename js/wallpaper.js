const wallpapers = [
    "starwars-1.jpg", "starwars-2.jpg", "starwars-3.jpg", "starwars-4.jpg", "starwars-5.jpg",
    "starwars-6.jpg", "starwars-7.jpg", "starwars-8.jpg", "starwars-9.jpg", "starwars-10.jpg",
    "starwars-11.jpg", "starwars-12.jpg", "starwars-13.jpg", "starwars-14.jpg", "starwars-15.jpg",
    "starwars-16.jpg", "starwars-17.jpg", "starwars-18.jpg", "starwars-19.jpg", "starwars-20.jpg",
]
const chosenPicture = wallpapers[Math.floor(Math.random() * wallpapers.length)];
const todaysWallpaper = document.createElement("img");
todaysWallpaper.src = `assets/img/${chosenPicture}`;

document.body.appendChild(todaysWallpaper);

