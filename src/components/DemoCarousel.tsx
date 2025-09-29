"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const demos = [
  {
    id: 1,
    title: "Search by Number",
    description: "Type a problem number to instantly find it",
    image: "/demo/demo_1.png",
    alt: "Search by number demo - typing '1' to find Two Sum problem",
    details:
      "Simply type any LeetCode problem number and get instant results. Perfect for when you know exactly which problem you want to practice.",
    color: "chart-3",
  },
  {
    id: 2,
    title: "Search by Title",
    description: "Search by keywords to find related problems",
    image: "/demo/demo_2.png",
    alt: "Search by title demo - typing 'binary search' to find related problems",
    details:
      "Use keywords or partial titles to discover problems. Great for exploring topics like 'binary search', 'dynamic programming', or 'graph traversal'.",
    color: "chart-2",
  },
  {
    id: 3,
    title: "Slash Commands",
    description: "Use slash commands for quick actions",
    image: "/demo/demo_3.png",
    alt: "Slash commands demo - using /potd to access problem of the day",
    details:
      "Access special features with slash commands. Use '/potd' for Problem of the Day or '/random' for a surprise challenge.",
    color: "chart-4",
  },
];

export default function DemoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demos.length) % demos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case "chart-2":
        return {
          bg: "bg-chart-2",
          border: "border-chart-2",
        };
      case "chart-3":
        return {
          bg: "bg-chart-3",
          border: "border-chart-3",
        };
      case "chart-4":
        return {
          bg: "bg-chart-4",
          border: "border-chart-4",
        };
      default:
        return {
          bg: "bg-chart-3",
          border: "border-chart-3",
        };
    }
  };

  const currentColors = getColorClasses(demos[currentSlide].color);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Carousel */}
      <div className="relative bg-card border border-border overflow-hidden mb-8">
        <div className="relative aspect-[16/10] lg:aspect-[20/12]">
          <Image
            src={demos[currentSlide].image}
            alt={demos[currentSlide].alt}
            fill
            className="object-contain bg-background p-4"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Previous demo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Next demo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Info */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className={`w-8 h-8 ${currentColors.bg} text-white text-sm flex items-center justify-center font-bold`}
          >
            {demos[currentSlide].id}
          </span>
          <h3 className="text-2xl font-bold">{demos[currentSlide].title}</h3>
        </div>
        <p className="text-lg text-muted-foreground mb-4">
          {demos[currentSlide].description}
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          {demos[currentSlide].details}
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2">
        {demos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 transition-colors ${
              index === currentSlide
                ? currentColors.bg
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {demos.map((demo, index) => {
          const demoColors = getColorClasses(demo.color);
          return (
            <button
              key={demo.id}
              onClick={() => goToSlide(index)}
              className={`relative bg-card border-2 transition-all hover:scale-105 ${
                index === currentSlide
                  ? demoColors.border
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={demo.image}
                  alt={demo.alt}
                  fill
                  className="object-contain bg-background p-2"
                />
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2 justify-center">
                  <span
                    className={`w-4 h-4 text-white text-xs flex items-center justify-center font-bold ${
                      index === currentSlide
                        ? demoColors.bg
                        : "bg-muted-foreground"
                    }`}
                  >
                    {demo.id}
                  </span>
                  <span className="text-sm font-medium">{demo.title}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
