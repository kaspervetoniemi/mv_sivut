import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children }) {
  const [nakyvissa, setNakyvissa] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNakyvissa(true);
          observer.unobserve(entry.target); // Animaatio toistuu vain kerran
        }
      },
      { threshold: 0.15 } // Elementti ilmestyy, kun 15% siitä on näkyvissä
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-osio ${nakyvissa ? "nakyvissa" : ""}`}>
      {children}
    </div>
  );
}