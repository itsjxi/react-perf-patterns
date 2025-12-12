import { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Carousel.css';

const Carousel = () => {
  const slides = [
    { id: 1, title: 'Slide 1', content: 'This is the first slide', color: '#3b82f6' },
    { id: 2, title: 'Slide 2', content: 'This is the second slide', color: '#10b981' },
    { id: 3, title: 'Slide 3', content: 'This is the third slide', color: '#f59e0b' },
    { id: 4, title: 'Slide 4', content: 'This is the fourth slide', color: '#ef4444' },
    { id: 5, title: 'Slide 5', content: 'This is the fifth slide', color: '#8b5cf6' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <h2>Carousel</h2>
      <Card className="carousel-card">
        <div className="carousel-wrapper">
          <Button variant="secondary" onClick={prevSlide} className="carousel-btn prev">
            ←
          </Button>
          
          <div className="carousel-content">
            <div 
              className="slide"
              style={{ backgroundColor: slides[currentSlide].color }}
            >
              <h3>{slides[currentSlide].title}</h3>
              <p>{slides[currentSlide].content}</p>
            </div>
          </div>
          
          <Button variant="secondary" onClick={nextSlide} className="carousel-btn next">
            →
          </Button>
        </div>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Carousel;