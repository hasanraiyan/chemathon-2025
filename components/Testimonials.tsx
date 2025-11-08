import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-sm font-bold text-blue-600 mb-4 mono tracking-wider">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-black">
              What{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Participants Say
              </span>
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-full ${testimonial.color} flex items-center justify-center text-white text-2xl font-bold`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">"{testimonial.quote}"</p>
                    <div className="flex mt-4 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
