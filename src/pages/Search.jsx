import { Search as SearchIcon, X } from "lucide-react"
import { useState } from "react"

const products = [
{
id: 1,
name: "iPhone 17 Pro Max",
category: "iPhone",
price: "NPR 189,999",
image:
"https://images.unsplash.com/photo-1592286927505-2fd0c7f8a4f4?auto=format&fit=crop&w=700&q=85",
},
{
id: 2,
name: "iPhone 17 Pro",
category: "iPhone",
price: "NPR 169,999",
image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
},
{
id: 3,
name: "iPhone 17",
category: "iPhone",
price: "NPR 129,999",
image:
"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=700&q=85",
},
{
id: 4,
name: "AirPods Pro",
category: "AirPods",
price: "NPR 34,999",
image:
"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=85",
},
]

function Search() {
	const [query, setQuery] = useState("")

	const filteredProducts = products.filter((product) =>
		`${product.name} ${product.category}`
			.toLowerCase()
			.includes(query.trim().toLowerCase()),
	)

	return (
		<main className="min-h-[calc(100vh-5rem)] bg-white px-6 py-14 lg:px-8 lg:py-20">
			<div className="mx-auto max-w-7xl">
				<p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gray-400">
					iStore collection
				</p>
				<h1 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
					Search products
				</h1>

				<div className="relative mt-8 max-w-2xl">
					<SearchIcon
						aria-hidden="true"
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
						size={20}
						strokeWidth={1.8}
					/>
					<input
						autoFocus
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search iPhone, AirPods..."
						aria-label="Search products"
						className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-12 text-base text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:bg-white"
					/>
					{query && (
						<button
							type="button"
							onClick={() => setQuery("")}
							aria-label="Clear search"
							className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-200 hover:text-black"
						>
							<X size={18} />
						</button>
					)}
				</div>

				<div className="mt-12">
					<p className="mb-5 text-sm text-gray-500" aria-live="polite">
						{filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
						{query.trim() && ` for “${query.trim()}”`}
					</p>

					{filteredProducts.length > 0 ? (
						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{filteredProducts.map((product) => (
								<article key={product.id} className="group min-w-0">
									<div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#f5f5f7] p-7">
										<img
											src={product.image}
											alt={product.name}
											loading="lazy"
											className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
										/>
									</div>
									<p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
										{product.category}
									</p>
									<h2 className="mt-1 text-lg font-semibold text-black">
										{product.name}
									</h2>
									<p className="mt-2 text-sm text-gray-600">{product.price}</p>
								</article>
							))}
						</div>
					) : (
						<div className="border-t border-gray-200 py-12">
							<h2 className="text-xl font-medium text-black">No products found</h2>
							<p className="mt-2 text-sm text-gray-500">
								Try another search term or clear your search.
							</p>
						</div>
					)}
				</div>
			</div>
		</main>
	)
}

export default Search
