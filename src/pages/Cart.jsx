import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const initialItems = [
{
id: 1,
name: "iPhone 17 Pro Max",
variant: "256GB • Natural Titanium",
price: 189999,
quantity: 1,
image:
"https://images.unsplash.com/photo-1592286927505-2fd0c7f8a4f4?auto=format&fit=crop&w=600&q=85",
},
{
id: 2,
name: "AirPods Pro",
variant: "USB-C",
price: 34999,
quantity: 1,
image:
"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=85",
},
]

function Cart() {
const [items, setItems] = useState(initialItems)

const increaseQuantity = (id) => {
setItems((current) =>
current.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
)
}

const decreaseQuantity = (id) => {
setItems((current) =>
current
.map((item) =>
item.id === id
? { ...item, quantity: Math.max(1, item.quantity - 1) }
: item
)
)
}

const removeItem = (id) => {
setItems((current) => current.filter((item) => item.id !== id))
}

const subtotal = items.reduce(
(total, item) => total + item.price * item.quantity,
0
)

const delivery = subtotal > 0 ? 200 : 0
const total = subtotal + delivery

return (
<div className="min-h-screen bg-[#f5f5f7] px-5 py-10 sm:px-8 lg:px-10">
  <div className="mx-auto max-w-4xl">
    <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

    <div className="mt-8 space-y-6">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 pb-6">
          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.variant}</p>
            <p className="mt-2 text-xl font-bold text-gray-900">
              ₹{item.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-gray-300"
            >
              <Minus size={20} />
            </button>

            <span className="text-lg font-medium text-gray-900">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-gray-300"
            >
              <Plus size={20} />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="flex h-10 w-full max-w-[128px] items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-600"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>

    {items.length === 0 && (
      <p className="text-center text-lg text-gray-500">
        Your cart is empty.
      </p>
    )}

    {items.length > 0 && (
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="text-lg font-medium text-gray-9₀₀">Subtotal</span>
          <span className="text-lg font-bold text-gray-9₀₀">₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-lg font-medium text-gray-9₀₀">Delivery</span>
          <span className="text-lg font-bold text-gray-9₀₀">₹{delivery.toLocaleString()}</span>
        </div>

        <div className="flex justify-between border-t border-gray-2００ pt=4">
          <span className="text-xl font-bold text-gray-9₀₀">Total</span>
          <span className="text-xl font-bold text-gray-$₀₀">₹{total.toLocaleString()}</span>
        </div>

        <Link
to="/checkout"
className="flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:bg-gray-800">


         Proceed to Checkout

</Link>
      </div>
    )}
  </div>
</div>
)
}

export default Cart