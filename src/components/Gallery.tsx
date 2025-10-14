import React, { useEffect } from 'react';

declare const Swiper: any;

const galleryImages = [
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery1.jpeg',
    title: 'Opening Ceremony',
    description: 'ChEMATHON 2025 Kickoff',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery2.jpeg',
    title: 'Team Collaboration',
    description: "Building Tomorrow's Solutions",
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery3.jpeg',
    title: 'Hardware Innovation',
    description: 'Prototyping in Action',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery4.jpeg',
    title: 'Expert Mentorship',
    description: 'Learning from the Best',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery5.jpeg',
    title: 'Night Coding',
    description: '36 Hours of Innovation',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery6.jpeg',
    title: 'Project Presentation',
    description: 'Showcase Time',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery7.jpeg',
    title: 'Judging Panel',
    description: 'Expert Evaluation',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery8.jpeg',
    title: 'Award Ceremony',
    description: 'Celebrating Winners',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery9.jpeg',
    title: 'Networking',
    description: 'Building Connections',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery10.jpeg',
    title: 'Team Spirit',
    description: 'Collaboration & Fun',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/gallery11.jpeg',
    title: 'Innovation Lab',
    description: 'Hands-On Development',
  },
  {
    src: 'https://chemathon2025.kongu.edu/images/galleryfinal.jpeg',
    title: 'Grand Finale',
    description: 'ChEMATHON 2025 Success',
  },
];

// Duplicate images to ensure the Swiper loop works correctly with coverflow effect
const allGalleryImages = [...galleryImages, ...galleryImages];

const Gallery: React.FC = () => {
  useEffect(() => {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.gallerySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        speed: 800,
      });
    }
  }, []);

  return (
    <section id="gallery" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink opacity-20 blur-3xl rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black righteous mb-3">
            <span style={{ color: 'var(--text-primary)' }}>OUR </span>
            <span className="gradient-text">GALLERY</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            ChEMATHON 2025 Highlights
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto mt-3"></div>
        </div>

        <div className="swiper gallerySwiper max-w-7xl mx-auto">
          <div className="swiper-wrapper pb-12">
            {allGalleryImages.map((image, index) => (
              <div key={index} className="swiper-slide">
                <div className="neon-box rounded-2xl overflow-hidden relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-xs text-gray-300">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next">
            <div
              className="neon-box backdrop-blur w-12 h-12 rounded-full flex items-center justify-center text-neon-cyan hover:scale-110 transition-transform"
              style={{ background: 'var(--card-bg)' }}
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </div>
          </div>
          <div className="swiper-button-prev">
            <div
              className="neon-box backdrop-blur w-12 h-12 rounded-full flex items-center justify-center text-neon-pink hover:scale-110 transition-transform"
              style={{ background: 'var(--card-bg)' }}
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
