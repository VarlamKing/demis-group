const url = "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1";
const link = document.querySelector('#showcase__link');
const body = document.querySelector('showcase');

const myModal = document.createElement('div');
myModal.classList.add('modal-back');

link.addEventListener('click', function (e) {
	e.preventDefault();
	body.append(myModal);
	video.play();
})

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
myModal.append(modalContent);
const video = document.createElement('iframe');
video.setAttribute('src', url);
video.classList.add('modal-video');
video.setAttribute('frameborder', 0);
modalContent.append(video);
const closeLink = document.createElement('a');
closeLink.classList.add('close');
closeLink.textContent = 'x';
closeLink.setAttribute('href', '#');
myModal.append(closeLink);
closeLink.addEventListener('click', function (e) {
	e.preventDefault();
	myModal.remove();
	video.currentTime = 0;
})

window.addEventListener('click', function (e) {
	if (e.target == myModal) {
		myModal.remove();
		video.currentTime = 0;
	}
})