// Selectors

const bar = document.querySelector('.speed-bar');
    console.log(bar);

const speed = document.querySelector('.speed');
    console.log(speed);

const video = document.querySelector('.flex');
    console.log(video);

// Event Listeners
speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    console.log(percent)
}
);