import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Fitness Hub transformed my life completely. The trainers are incredibly knowledgeable and supportive. I've achieved goals I never thought possible. The community here is amazing and keeps me motivated every single day.",
      name: "Sarah Johnson",
      role: "FITNESS ENTHUSIAST",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      text: "Best gym experience I've ever had! The equipment is top-notch, the facilities are clean, and the staff is always ready to help. I've seen incredible results in just 3 months. Highly recommend Fitness Hub to anyone serious about their fitness journey.",
      name: "Michael Chen",
      role: "ATHLETE",
      image: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="quote-icon"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="author-image"
                  />
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

