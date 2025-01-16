import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  const [currentSlode, setCurrentSlide] = useState(0)

  // Array of Slides
  const slides [
    {
      images: './Images/s-1.jpg',
      message: 'Choose the right theme for education',
    },
    {
      images: './Images/s-2.jpg',
      message: 'Choose the right theme for education',
    },
    {
      images: './Images/s-3.jpg',
      message: 'Choose the right theme for education',
    },
  ]

  // Change slides every 5 seconds

  useEffect(() => {
    const interval = setInterval(() =>{
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  })
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection