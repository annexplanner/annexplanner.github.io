document.addEventListener('DOMContentLoaded', function () {
  const loaderContainer = document.querySelector('.loader-animation');
  const homepage = document.querySelector('.homepage');

  // Initialize the Lottie animation
  const loaderAnim = lottie.loadAnimation({
    container: loaderContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'loader-animation.json' // Replace with your animation file path
  });

  // Simulate loading completion after animation duration (adjust as needed)
  setTimeout(() => {
    loaderContainer.style.display = 'none';
    homepage.style.display = 'block';
    document.body.style.overflow = 'auto'; // Enable scrolling
  }, loaderAnim.totalFrames * loaderAnim.frameRate);
});
