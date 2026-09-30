import { Link, useNavigate } from "react-router-dom"
import {
ArrowLeft,
ArrowRight,
Eye,
EyeOff,
LockKeyhole,
Mail,
ShieldCheck,
} from "lucide-react"
import { useState } from "react"

function Login() {
const navigate = useNavigate()

const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e) => {
e.preventDefault()

```
if (!email || !password) return

navigate("/")
```

}

return ( <div className="min-h-screen bg-[#f5f5f7] px-4 py-5 sm:px-6 sm:py-8">

```
  <div className="mx-auto grid min-h-[calc(100vh-40px)] max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-sm lg:grid-cols-2">

    {/* Left Side */}
    <div className="relative hidden overflow-hidden bg-black lg:block">

      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=90"
        alt="iPhone"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-12 text-white">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
          Welcome to iStore
        </p>

        <h2 className="mt-5 max-w-md text-5xl font-semibold tracking-tight">
          Your Apple experience starts here.
        </h2>

        <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
          Discover the latest iPhone, AirPods, Apple Watch and accessories
          in one premium shopping experience.
        </p>

      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-16">

      <div className="w-full max-w-md">

        {/* Back */}
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to iStore
        </Link>

        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Account
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black">
            Welcome back.
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Sign in to access your account and continue shopping.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-9 space-y-5"
        >

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <button
                type="button"
                className="text-xs text-gray-500 transition hover:text-black"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <LockKeyhole
                size={18}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={1.7} />
                ) : (
                  <Eye size={18} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-500">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-black"
            />
            Remember me
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Sign In

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">
            OR
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Demo Google */}
        <button
          type="button"
          className="flex h-13 w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-black transition hover:bg-[#f5f5f7]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-xs font-semibold">
            G
          </span>

          Continue with Google
        </button>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-black underline underline-offset-4"
          >
            Create account
          </Link>
        </p>

        {/* Security */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <ShieldCheck size={15} />
          Secure account access
        </div>

      </div>
    </div>

  </div>
</div>


)
}

export default Login
