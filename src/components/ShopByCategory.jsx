import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
const categories = [
  {
    id: 1,
    name: "iPhone",
    subtitle: "The latest iPhone lineup",
    image:
      "https://images.unsplash.com/photo-1592286927505-2fd0c7f8a4f4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    name: "AirPods",
    subtitle: "Immersive sound experience",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "Apple Watch",
    subtitle: "More than a watch",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    name: "Accessories",
    subtitle: "Complete your setup",
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&w=1400&q=85",
  },
]
function ShopByCategory() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl"></div>
          {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
        Shop by Category
      </p>

      <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-black sm:text-5xl">
          Find what fits your world.
        </h2>

        <p className="max-w-md text-sm leading-6 text-gray-500 lg:text-right">
          Explore iPhone, AirPods, Apple Watch and essential accessories
          designed to work beautifully together.
        </p>
      </div>
    </motion.div>

    {/* Category Grid */}
    <div className="grid gap-5 md:grid-cols-2">

      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: index * 0.1,
          }}
          className="group relative h-[440px] overflow-hidden rounded-[30px] bg-black sm:h-[500px]"
        >

          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 sm:p-9">

            <div className="text-white">
              <p className="mb-2 text-sm text-white/60">
                {category.subtitle}
              </p>

              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {category.name}
              </h3>
            </div>

            {/* Explore Button */}
            <button
              aria-label={`Explore ${category.name}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            >
              <ArrowUpRight
                size={20}
                strokeWidth={1.8}
              />
            </button>

          </div>
        </motion.div>
      ))}

    </div>

    </section>

)
}
export default ShopByCategory