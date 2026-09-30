import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    model: "iPhone 17 Pro Max",
    title: "Titanium. Power. Pro.",
    description: "The ultimate iPhone experience, built for everything you do.",
    price: "Starting from NPR 189,999",
    image:
      "https://images.unsplash.com/photo-1592286927505-2fd0c7f8a4f4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    model: "iPhone 17 Pro",
    title: "Power meets perfection.",
    description: "Pro performance with a stunning design.",
    price: "Starting from NPR 169,999",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    model: "iPhone 17",
    title: "A new way to love iPhone.",
    description: "Beautiful design. Incredible performance. Made for you.",
    price: "Starting from NPR 129,999",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    model: "iPhone Air",
    title: "Light. Beautiful. Powerful.",
    description: "A lighter iPhone without compromising on performance.",
    price: "Starting from NPR 119,999",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    model: "AirPods Pro",
    title: "Hear it differently.",
    description: "Immersive sound with intelligent noise cancellation.",
    price: "Starting from NPR 34,999",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    model: "Apple Watch",
    title: "More than a watch.",
    description: "A smarter way to stay connected and active.",
    price: "Starting from NPR 54,999",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1400&q=85",
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[current]

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-black">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.model}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
              New at iStore
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {slide.model}
            </h2>

            <h3 className="mt-4 text-2xl font-medium text-white/90 sm:text-3xl">
              {slide.title}
            </h3>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              {slide.description}
            </p>

            <p className="mt-5 text-base font-medium text-white">
              {slide.price}
            </p>

          <div className="mt-10 flex items-center gap-8">
  {/* Buy Now */}
  <button className="group relative flex items-center gap-2 pb-1 text-sm font-medium text-white transition-all duration-300">
    <span>Buy Now</span>

    <ArrowRight
      size={16}
      strokeWidth={1.8}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />

    <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
  </button>

  {/* Divider */}
  <span className="h-4 w-px bg-white/30" />

  {/* Explore */}
  <button className="group relative flex items-center gap-2 pb-1 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white">
    <span>Explore iPhone</span>

    <ArrowRight
      size={16}
      strokeWidth={1.8}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />

    <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
  </button>
</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous / Next */}
      <div className="absolute bottom-20 right-6 z-20 flex gap-2 lg:right-10">
        <button
          onClick={previousSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero