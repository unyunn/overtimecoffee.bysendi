document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  // Cek apakah ini kunjungan pertama di sesi
  if (!sessionStorage.getItem("hasVisited")) {
    sessionStorage.setItem("hasVisited", "true"); // Tandai kunjungan pertama

    // Tampilkan loading
    setTimeout(() => {
      loadingScreen.classList.add("hidden-loading"); // Tambah kelas untuk fade-out
      setTimeout(() => {
        loadingScreen.style.display = "none"; // Hapus elemen setelah transisi
      }, 2000); // Durasi fade-out (sesuai dengan CSS transition)
    }, 3000); // Durasi loading
  } else {
    // Langsung sembunyikan loading jika sudah pernah mengunjungi
    loadingScreen.style.display = "none";
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  // Scroll to top on button click
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});




const video = document.getElementById("background-video");
const playPauseButton = document.getElementById("play-pause");
const muteUnmuteButton = document.getElementById("mute-unmute");
const fullscreenButton = document.getElementById("fullscreen");

const playIcon = document.getElementById("play-icon");
const muteIcon = document.getElementById("mute-icon");

playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.src = "pause.png"; // Ganti ikon ke 'Pause'
  } else {
    video.pause();
    playIcon.src = "play.png"; // Ganti ikon ke 'Play'
  }
});

muteUnmuteButton.addEventListener("click", () => {
  video.muted = !video.muted;
  muteIcon.src = video.muted ? "mute.png" : "sound.png";
}); 

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");
  const fullScreenButton = document.getElementById("full-screen");

  fullScreenButton.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    } else {
      console.error("Fullscreen is not supported.");
    }
  });
});



// Close Menu When Clicking Outside



// Fungsi toggle untuk hamburger menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Fungsi scroll halus ke elemen tertentu
document.querySelectorAll('.navbar ul li a').forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(navLink.getAttribute('href'));

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Pastikan scroll mulai dari awal elemen
            });
            // Tutup menu setelah klik (untuk mobile)
            const navbar = document.querySelector('.navbar');
            navbar.classList.remove('active');
        }
    });
});



function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.about-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.classList.add('visible');
        }
    });
});


// Animations can be added using JavaScript or CSS keyframes for complex effects
function showProductDetails(itemId) {
    // Menyembunyikan deskripsi produk lainnya
    const allItems = document.querySelectorAll('.menu-item');
    allItems.forEach(item => {
        if (item.id !== itemId) {
            item.classList.remove('clicked');
        }
    });

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    const productInfo = document.getElementById('product-info');

    // Data produk (bisa kamu ganti dengan data dinamis atau API)
    const products = {
        1: {
            image: "assets/images/coffee-1.jpg",
            title: "Coffee 1",
            description: "A delicious dark roast perfect for energy boosts."
        },
        2: {
            image: "assets/images/coffee-2.jpg",
            title: "Coffee 2",
            description: "A smooth medium roast with hints of chocolate."
        },
        3: {
            image: "assets/images/coffee-3.jpg",
            title: "Coffee 3",
            description: "A light roast with floral and fruity notes."
        }
    };

    const product = products[productId];
    if (product) {
        productImage.src = product.image;
        productTitle.textContent = product.title;
        productInfo.textContent = product.description;
    } else {
        productTitle.textContent = "Product not found.";
        productInfo.textContent = "Sorry, we couldn't find the product you were looking for.";
    }
}
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let currentIndex = 0;
  let autoSlideInterval;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event Listeners
  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);

  // Pause auto-slide on hover
  const carousel = document.querySelector(".carousel-content");
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  showTestimonial(currentIndex);
  startAutoSlide();
});


const quotes = document.querySelectorAll('.quote-container');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");
  const backToHome = document.getElementById("back-to-home");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("hidden");
    thankYouMessage.classList.remove("hidden");
  });

  backToHome.addEventListener("click", function () {
    window.location.href = "#home"; // Scroll ke bagian home
  });
});

// Pilih form berdasarkan ID
const form = document.querySelector("#contact-form");

// Pilih ikon animasi
const icon = document.querySelector("#icon-animation");

// Tambahkan event listener ke form
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah halaman reload

    // Tampilkan ikon dengan menghapus class 'hidden'
    icon.classList.remove("hidden");

    // Mulai animasi
    setTimeout(() => {
        icon.classList.add("hidden"); // Sembunyikan ikon setelah animasi selesai
    }, 2000); // Sesuai durasi animasi CSS
});

document.getElementById('liveChat').addEventListener('click', function () {
    // Arahkan ke live chat platform atau tampilkan alert untuk demo
    alert('Live chat akan segera tersedia!');
    // Anda bisa mengganti alert dengan redirect ke halaman lain atau membuka chat widget
    // window.location.href = "URL_LIVE_CHAT";
});





document.addEventListener('DOMContentLoaded', () => {
  const locations = [
    {
      name: 'Overtime Coffee Ciamis',
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3798912047837!2d108.3528744!3d-7.3261128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6599d327056c113%3A0xcdbbd90d2b6f0f29!2sOvertime%20Coffee!5e0!3m2!1sid!2sid!4v1698202600541!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
      mapLink: 'https://maps.app.goo.gl/VdnjsTCAw3nmvrGG7',
    },
    {
      name: 'Overtime Coffee Banjar',
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3798912047837!2d108.5240011!3d-7.3700002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6598c04f7bd143%3A0xcdbbd90d2b6f0f29!2sOvertime%20Coffee%20Banjar!5e0!3m2!1sid!2sid!4v1698202701542!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
      mapLink: 'https://maps.app.goo.gl/2SpMM1LpMBqQ8NBB',
    },
    {
      name: 'Overtime Coffee Pangandaran',
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3798912047837!2d108.6500002!3d-7.5200101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6599e44f7bd987%3A0xcdbbd90d2b6f0f29!2sOvertime%20Coffee%20Pangandaran!5e0!3m2!1sid!2sid!4v1698202802043!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
      mapLink: 'https://maps.app.goo.gl/pfqThCzDBFE97ZcS',
    },
  ];

  let currentIndex = 0;
  const locationMap = document.getElementById('location-map');
  const locationName = document.getElementById('location-name');
  const openMapButton = document.getElementById('open-map');
  const indicators = document.querySelectorAll('.indicator');
  const mapWrapper = document.getElementById('map-wrapper');

  function updateLocation(direction) {
    if (direction === 'prev') {
      currentIndex = (currentIndex === 0) ? locations.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
      currentIndex = (currentIndex === locations.length - 1) ? 0 : currentIndex + 1;
    }
    renderLocation();
  }

  function renderLocation() {
    locationMap.innerHTML = locations[currentIndex].mapEmbed;
    locationName.textContent = locations[currentIndex].name;
    openMapButton.setAttribute('href', locations[currentIndex].mapLink);
    indicators.forEach((indicator, idx) => {
      indicator.classList.toggle('active', idx === currentIndex);
    });
  }

  // Swipe functionality for mobile
  let startX = 0;

  mapWrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  mapWrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) updateLocation('next'); // Swipe left
    if (endX - startX > 50) updateLocation('prev'); // Swipe right
  });

  // Autoplay
  setInterval(() => {
    updateLocation('next');
  }, 5000); // Change every 5 seconds

  // Button navigation
  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', () => updateLocation(button.dataset.direction));
  });

  renderLocation();
});


// Optional Auto Scroll for Sliders
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach(slider => {
  let scrollAmount = 0;

  setInterval(() => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
    scrollAmount += 300;

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
      scrollAmount = 0;
    }
  }, 3000);
});



// Filter Logic
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryCategories = document.querySelectorAll(".gallery-category");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Hapus kelas 'active' dari semua tombol
      filterBtns.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");

      // Dapatkan kategori yang dipilih
      const category = btn.getAttribute("data-category");

      // Sembunyikan semua kategori terlebih dahulu
      galleryCategories.forEach((categoryElement) => {
        if (category === "all" || categoryElement.getAttribute("data-category") === category) {
          categoryElement.style.display = "block"; // Tampilkan kategori relevan
        } else {
          categoryElement.style.display = "none"; // Sembunyikan kategori lain
        }
      });
    });
  });

  // Aktifkan kategori 'all' secara default
  document.querySelector(".filter-btn[data-category='all']").click();
});



















function updateMapAnimation(locationIndex) {
  const map = document.getElementById("location-map");
  map.classList.add("fade-out");

  setTimeout(() => {
    updateLocation(locationIndex); // Memperbarui lokasi
    map.classList.remove("fade-out");
    map.classList.add("fade-in");
  }, 500);

  setTimeout(() => {
    map.classList.remove("fade-in");
  }, 1000);
}



function setActiveIndicator(index) {
  const indicators = document.querySelectorAll(".mobile-indicators .indicator");
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}
