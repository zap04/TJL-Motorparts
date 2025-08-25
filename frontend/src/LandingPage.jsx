import React from "react"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      {/* Top Nav */}
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-8">
            <span className="text-[#FF7A00] font-bold text-lg">TJL Motorparts</span>
            <nav className="hidden md:flex gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-[#FF7A00]">Engine Parts</a>
              <a href="#" className="hover:text-[#FF7A00]">Brakes</a>
              <a href="#" className="hover:text-[#FF7A00]">Suspension</a>
              <a href="#" className="hover:text-[#FF7A00]">Exhaust</a>
              <a href="#" className="hover:text-[#FF7A00]">Performance</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <button className="ml-2 px-3 py-1 bg-[#FF7A00] text-white rounded text-sm font-semibold hover:bg-[#e86c00]">Search</button>
            <a
              href="/login"
              className="ml-4 px-3 py-1 border border-[#FF7A00] text-[#FF7A00] rounded text-sm font-semibold hover:bg-[#FF7A00] hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="ml-2 px-3 py-1 border border-[#FF7A00] text-[#FF7A00] rounded text-sm font-semibold hover:bg-[#FF7A00] hover:text-white transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full bg-[#FFF3EA] py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Rev Up Your <span className="text-[#FF7A00]">Performance</span></h2>
            <p className="text-gray-700 mb-6 max-w-md">
              Premium automotive parts and accessories for enthusiasts who demand the best. From engine upgrades to performance tuning.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#" className="bg-[#FF7A00] text-white px-5 py-2 rounded font-semibold hover:bg-[#e86c00]">Shop Now</a>
              <a href="#" className="text-[#FF7A00] font-semibold underline underline-offset-2">View Installation Guide</a>
            </div>
            <div className="flex gap-8 text-sm">
              <div>
                <span className="font-bold text-lg text-[#FF7A00]">50k+</span>
                <div className="text-gray-600">Parts Available</div>
              </div>
              <div>
                <span className="font-bold text-lg text-[#FF7A00]">24/7</span>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div>
                <span className="font-bold text-lg text-[#FF7A00]">Fast</span>
                <div className="text-gray-600">Shipping</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
                alt="Engine"
                className="rounded-lg w-[340px] h-[260px] object-cover shadow-lg"
              />
              <span className="absolute top-2 right-2 bg-[#FF7A00] text-white text-xs px-2 py-1 rounded font-semibold">New Arrival</span>
            </div>
            <button className="mt-4 text-xs bg-white border border-[#FF7A00] text-[#FF7A00] px-3 py-1 rounded hover:bg-[#FF7A00] hover:text-white transition">Free Shipping</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Shop by Category</h3>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Find exactly what you need with our comprehensive selection of automotive parts and accessories.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Category Card */}
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center border border-[#FFE3C6]">
              <div className="w-16 h-16 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400"> {/* Placeholder image */} </div>
              <div className="font-semibold text-gray-800">Engine Parts</div>
              <div className="text-xs text-gray-500 mt-1">Pistons, gaskets, filters & more</div>
              <div className="text-xs text-[#FF7A00] mt-2 font-semibold">12,000+ parts</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center border border-[#FFE3C6]">
              <div className="w-16 h-16 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800">Brake Systems</div>
              <div className="text-xs text-gray-500 mt-1">Pads, rotors, calipers & lines</div>
              <div className="text-xs text-[#FF7A00] mt-2 font-semibold">9,200+ parts</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center border border-[#FFE3C6]">
              <div className="w-16 h-16 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800">Suspension</div>
              <div className="text-xs text-gray-500 mt-1">Shocks, struts, springs & bushings</div>
              <div className="text-xs text-[#FF7A00] mt-2 font-semibold">8,000+ parts</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center border border-[#FFE3C6]">
              <div className="w-16 h-16 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800">Performance</div>
              <div className="text-xs text-gray-500 mt-1">Turbo, exhaust, intake & tuning</div>
              <div className="text-xs text-[#FF7A00] mt-2 font-semibold">6,500+ parts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Featured Products</h3>
            <a href="#" className="text-[#FF7A00] border border-[#FF7A00] px-3 py-1 rounded text-xs font-semibold hover:bg-[#FF7A00] hover:text-white transition">View All Products</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Product Card */}
            <div className="bg-[#F9FAFB] rounded-lg shadow p-4 flex flex-col border border-[#FFE3C6] relative">
              <span className="absolute top-2 left-2 bg-[#FF7A00] text-white text-xs px-2 py-1 rounded font-semibold">Best Seller</span>
              <div className="w-full h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800 mb-1">Turbo Performance Kit</div>
              <div className="text-xs text-gray-500 mb-2">Boost your engine power</div>
              <div className="font-bold text-lg text-[#FF7A00] mb-2">$2,499</div>
              <button className="bg-[#FF7A00] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#e86c00]">Add to Cart</button>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg shadow p-4 flex flex-col border border-[#FFE3C6] relative">
              <span className="absolute top-2 left-2 bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded font-semibold">New</span>
              <div className="w-full h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800 mb-1">Carbon Fiber Intake</div>
              <div className="text-xs text-gray-500 mb-2">Lightweight, high flow</div>
              <div className="font-bold text-lg text-[#FF7A00] mb-2">$999</div>
              <button className="bg-[#FF7A00] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#e86c00]">Add to Cart</button>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg shadow p-4 flex flex-col border border-[#FFE3C6] relative">
              <span className="absolute top-2 left-2 bg-[#FF7A00] text-white text-xs px-2 py-1 rounded font-semibold">Hot</span>
              <div className="w-full h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800 mb-1">Sport Brake Kit</div>
              <div className="text-xs text-gray-500 mb-2">Ultimate stopping power</div>
              <div className="font-bold text-lg text-[#FF7A00] mb-2">$1,299</div>
              <button className="bg-[#FF7A00] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#e86c00]">Add to Cart</button>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg shadow p-4 flex flex-col border border-[#FFE3C6] relative">
              <span className="absolute top-2 left-2 bg-[#FF7A00] text-white text-xs px-2 py-1 rounded font-semibold">Popular</span>
              <div className="w-full h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400"></div>
              <div className="font-semibold text-gray-800 mb-1">Coilover Suspension</div>
              <div className="text-xs text-gray-500 mb-2">Adjustable ride height</div>
              <div className="font-bold text-lg text-[#FF7A00] mb-2">$1,899</div>
              <button className="bg-[#FF7A00] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#e86c00]">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-[#FF7A00] py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⏳</span>
              <span className="text-xs font-semibold">Limited Time Offer</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Performance Parts<br />Up to 40% Off</h3>
            <p className="mb-4 text-white/90">
              Upgrade your ride with premium performance parts. Free installation guide included with every purchase.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#FF7A00] px-5 py-2 rounded font-semibold hover:bg-gray-100">Shop Performance</a>
              <a href="#" className="border border-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-[#FF7A00]">Learn More</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-56 h-56 bg-white/20 rounded-lg flex items-center justify-center text-white text-3xl font-bold border-2 border-white/30">
              {/* Placeholder for promo image */}
              21
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}