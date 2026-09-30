import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag } from "lucide-react"

const products = [
{
id: 1,
name: "iPhone 17 Pro Max",
subtitle: "Titanium. Power. Pro.",
price: "NPR 189,999",
image:
"https://images.unsplash.com/photo-1592286927505-2fd0c7f8a4f4?auto=format&fit=crop&w=1400&q=90",
},
{
id: 2,
name: "iPhone 17 Pro",
subtitle: "Power meets perfection.",
price: "NPR 169,999",
image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=90",
},
{
id: 3,
name: "iPhone 17",
subtitle: "A new way to love iPhone.",
price: "NPR 129,999",
image:
"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1400&q=90",
},
]

function FeaturedProducts() {
return ( <section className="w-full bg-white px-4 py-32 sm:px-7 sm:py-36 lg:px-10 lg:py-44"> <div className="mx-auto w-full max-w-[1600px]">

```
    <div className="mb-20 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
      <div>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-gray-400">
          Featured Collection
        </p>

        <h2 className="text-5xl font-semibold tracking-[-0.05em] text-black sm:text-6xl lg:text-7xl">
          The latest iPhone.
        </h2>

        <p className="mt-7 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
          Discover the latest iPhone lineup, designed with powerful
          performance, beautiful displays and an experience you will love.
        </p>
      </div>

      <button className="group flex w-fit shrink-0 items-center gap-2 border-b border-black pb-2 text-sm font-medium text-black transition hover:border-gray-400 hover:text-gray-600">
        <span>View all iPhone</span>

        <ArrowRight
          size={18}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>

    <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.75,
            delay: index * 0.12,
          }}
          className="group overflow-hidden rounded-[36px] bg-[#f5f5f7] transition-all duration-500 hover:shadow-2xl hover:shadow-black/10"
        >
          <div className="relative flex h-[520px] items-center justify-center overflow-hidden p-8 sm:h-[590px] sm:p-10 lg:h-[650px] lg:p-12">

            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105"
            />

            <button
              aria-label={`Add ${product.name} to cart`}
              className="absolute right-7 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-105"
            >
              <ShoppingBag size={21} strokeWidth={1.8} />
            </button>
          </div>

          <div className="px-9 pb-11 pt-3 sm:px-10 sm:pb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
              iPhone
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
              {product.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              {product.subtitle}
            </p>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-black sm:text-base">
                From {product.price}
              </p>

              <button className="group/link flex items-center gap-2 text-sm font-medium text-black">
                <span>View</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


)
}

export default FeaturedProducts
