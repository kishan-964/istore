import { Link, useNavigate } from "react-router-dom"
import {
ArrowLeft,
ArrowRight,
Eye,
EyeOff,
LockKeyhole,
Mail,
ShieldCheck,
UserRound,
} from "lucide-react"
import { useState } from "react"

function Register() {
const navigate = useNavigate()

const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const handleSubmit = (e) => {
e.preventDefault()

```
if (!name || !email || !password || !confirmPassword) return

if (password !== confirmPassword) return

navigate("/login")
```

}

return ( <div className="min-h-screen bg-[#f5f5f7] px-4 py-5 sm:px-6 sm:py-8">

```
  <div className="mx-auto grid min-h-[calc(100vh-40px)] max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-sm lg:grid-cols-2">

    {/* Left Side */}
    <div className="relative hidden overflow-hidden bg-black lg:block">

      <img
        src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&w=1400&q=90"
        alt="Apple accessories"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-12 text-white">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
          Join iStore
        </p>

        <h2 className="mt-5 max-w-md text-5xl font-semibold tracking-tight">
          Everything Apple. All in one place.
        </h2>

        <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
          Create your iStore account and enjoy a simple, convenient way
          to explore and shop your favorite Apple products.
        </p>

      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-16">

      <div className="w-full max-w-md">

        {/* Back */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to iStore
        </Link>

        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
            Create Account
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black">
            Start shopping.
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Create your account to get started with iStore.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full name
            </label>

            <div className="relative">
              <UserRound
                size={18}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

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
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

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
                placeholder="Create a password"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={1.7} />
                ) : (
                  <Eye size={18} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm password
            </label>

            <div className="relative">
              <LockKeyhole
                size={18}
                strokeWidth={1.7}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} strokeWidth={1.7} />
                ) : (
                  <Eye size={18} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-5 text-gray-500">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-black"
            />

            <span>
              I agree to the iStore terms and privacy policy.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="group mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Create Account

            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </form>

        {/* Login */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-black underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>

        {/* Security */}
        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">
          <ShieldCheck size={15} />
          Your information is kept secure
        </div>

      </div>
    </div>

  </div>
</div>


)
}

export default Register
