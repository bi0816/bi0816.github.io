const wrap = document.querySelector('.wrap');
const imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const random = Math.floor(Math.random() * imageArray.length);

const image = document.createElement('img');
image.setAttribute('class', 'bg-image');
image.setAttribute('src', `./img/${imageArray[random]}`);
wrap.append(image)
