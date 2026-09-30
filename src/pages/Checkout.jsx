import { Link } from "react-router-dom"
import { ArrowLeft, LockKeyhole } from "lucide-react"
import { useState } from "react"

function Checkout() {
const [payment, setPayment] = useState("cod")

return (
<div className="min-h-screen bg-[#f5f5f7] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

    <Link
      to="/cart"
      className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
    >
      <ArrowLeft size={16} />
      Back to Cart
    </Link>

    <div className="mb-12">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
        Checkout
      </p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
        Complete your order.
      </h1>
    </div>

    <div className="grid gap-7 lg:grid-cols-[1fr_380px]">

      {/* Form */}
      <div className="space-y-6">

        <div className="rounded-[28px] bg-white p-7 sm:p-8">
          <h2 className="text-xl font-semibold text-black">
            Contact Information
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone
              </label>

              <input
                type="tel"
                placeholder="98XXXXXXXX"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
              />
            </div>

          </div>
        </div>

        <div className="rounded-[28px] bg-white p-7 sm:p-8">
          <h2 className="text-xl font-semibold text-black">
            Delivery Address
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>

              <input
                type="text"
                placeholder="Street, Tole, Area"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                City
              </label>

              <input
                type="text"
                placeholder="Kathmandu"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Province
              </label>

              <select className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-black">
                <option>Koshi</option>
                <option>Madhesh</option>
                <option>Bagmati</option>
                <option>Gandaki</option>
                <option>Lumbini</option>
                <option>Karnali</option>
                <option>Sudurpashchim</option>
              </select>
            </div>

          </div>
        </div>

        <div className="rounded-[28px] bg-white p-7 sm:p-8">
          <h2 className="text-xl font-semibold text-black">
            Payment Method
          </h2>

          <div className="mt-7 space-y-3">

            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <p className="text-sm font-medium text-black">
                    Cash on Delivery
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>
              </div>
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="esewa"
                  checked={payment === "esewa"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <p className="text-sm font-medium text-black">
                    eSewa
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Secure digital payment
                  </p>
                </div>
              </div>
            </label>

            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="khalti"
                  checked={payment === "khalti"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <p className="text-sm font-medium text-black">
                    Khalti
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Secure digital payment
                  </p>
                </div>
              </div>
            </label>

          </div>
        </div>

      </div>

      {/* Summary */}
      <div className="h-fit rounded-[28px] bg-white p-7 sm:p-8 lg:sticky lg:top-8">

        <h2 className="text-xl font-semibold text-black">
          Order Summary
        </h2>

        <div className="mt-7 space-y-5">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">
                iPhone 17 Pro Max
              </p>

              <p className="mt-1 text-xs text-gray-500">
                256GB • Natural Titanium × 1
              </p>
            </div>

            <p className="text-sm font-medium text-black">
              NPR 189,999
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-black">
                AirPods Pro
              </p>

              <p className="mt-1 text-xs text-gray-500">
                USB-C × 1
              </p>
            </div>

            <p className="text-sm font-medium text-black">
              NPR 34,999
            </p>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">NPR 224,998</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="font-medium">NPR 200</span>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">
              NPR 225,198
            </span>
          </div>

        </div>

        <button className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black text-sm font-medium text-white transition hover:bg-gray-800">
          <LockKeyhole size={16} />
          Place Order
        </button>

        <p className="mt-4 text-center text-xs leading-5 text-gray-400">
          This is a frontend demo. Payment processing is not connected.
        </p>

      </div>

    </div>
  </div>
</div>
)
}

export default Checkout