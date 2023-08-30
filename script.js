document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.querySelector('.progress-bar');
    const loadingContainer = document.querySelector('.loading-container');
    const homepage = document.querySelector('.homepage');
  
    // Simulate loading completion after 3 seconds
    setTimeout(() => {
      loadingContainer.style.display = 'none';
      homepage.style.display = 'block';
    }, 3000);
  });
  