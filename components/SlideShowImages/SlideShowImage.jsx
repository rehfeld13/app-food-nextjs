'use client';

// Hooks
import { useEffect, useState } from 'react';

// NextJS
import Image from 'next/image';

// Images
import burgerImg from '@/images/burger.jpg';
import curryImg from '@/images/curry.jpg';
import dumplingsImg from '@/images/dumplings.jpg';
import macncheeseImg from '@/images/macncheese.jpg';
import pizzaImg from '@/images/pizza.jpg';
import schnitzelImg from '@/images/schnitzel.jpg';
import tomatoSaladImg from '@/images/tomato-salad.jpg';

// Styles
import styles from './slideShowImage.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function SlideShowImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
          priority
        />
      ))}
    </div>
  );
}