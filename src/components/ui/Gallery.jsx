import { useState, useRef, useEffect } from "react";

const Gallery = ({ images }) => {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Figure out which slide is current
    const slideWidth = el.clientWidth;
    const index = Math.round(el.scrollLeft / slideWidth);
    setCurrent(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollTo = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth;
    el.scrollBy({ left: direction === "next" ? slideWidth : -slideWidth, behavior: "smooth" });
  };

  const goToSlide = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full flex items-center justify-center bg-zinc-900 py-4"
          >
            <img
              src={src}
              alt={`Zdjęcie renowacji ${index + 1}`}
              className="max-h-[500px] sm:max-h-[600px] w-auto object-contain"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scrollTo("prev")}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/30 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Poprzednie zdjęcie"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scrollTo("next")}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300 hover:text-amber-400 hover:border-amber-400/30 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Następne zdjęcie"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 bg-amber-400"
                : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
            }`}
            aria-label={`Zdjęcie ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 bg-zinc-950/60 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs text-zinc-400">
          <span className="text-zinc-200">{current + 1}</span>
          {" / "}
          {images.length}
        </span>
      </div>
    </div>
  );
};

export default Gallery;