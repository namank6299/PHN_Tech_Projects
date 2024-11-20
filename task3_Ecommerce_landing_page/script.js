//the  script is changing images of phone container randomly but a single phone brand wise.
let realme_image = document.getElementById('realme-image');
let realme_images = ['./e-commerce-images/realme1.jpg', './e-commerce-images/realme2.jpg', './e-commerce-images/realme3.jpg', './e-commerce-images/realme4.jpg']
setInterval(() => {
    let random = Math.floor(Math.random() * 4);
    realme_image.src = realme_images[random];
}, 3000);

let vivo_image = document.getElementById('vivo-image');
let vivo_images = ['./e-commerce-images/vivo1.jpg', './e-commerce-images/vivo2.jpg', './e-commerce-images/vivo3.jpg', './e-commerce-images/vivo4.jpg']
setInterval(() => {
    let random = Math.floor(Math.random() * 4);
    vivo_image.src = vivo_images[random];
}, 3000);


//this script is to change image of the top=most section of the website randomly.
let top_banner_image = document.getElementById('top-banner-image');
let images = ['img/electronics 851-315.jpg', 'img/clothing 851-315.jpg']
setInterval(() => {
    let random = Math.floor(Math.random() * 4);
    top_banner_image.src = images[random];
}, 2500);


//this script is for changing of laptop images
let laptop_image = document.getElementById('laptop-image');
let laptop_images = ['./e-commerce-images/laptop1asus.jpg', './e-commerce-images/laptop2hp.jpg', './e-commerce-images/laptop3accer.webp', './e-commerce-images/laptop4apple.jpeg', './e-commerce-images/laptop5asuszenbook.jpg']
setInterval(() => {
    let random = Math.floor(Math.random() * 4);
    laptop_image.src = laptop_images[random];
}, 2000);


//this script is for changing of laptop images
let television_image = document.getElementById('television-image');
let television_images = ['./e-commerce-images/tv1.sony.webp', './e-commerce-images/tv3mi.webp', './e-commerce-images/tv1.hissense.avif', './e-commerce-images/tv1.samsung.jpg', './e-commerce-images/tv1.oneplus.avif']
setInterval(() => {
    let random = Math.floor(Math.random() * 4);
    television_image.src = television_images[random];
}, 2000);