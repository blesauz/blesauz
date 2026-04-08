export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* NAV */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          Blesauz<span className="text-green-600">.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-gray-800">Nyumba</span>
          <span className="cursor-pointer hover:text-gray-800">Apartments</span>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg text-sm hover:bg-green-50">
            Orodhesha Mali
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
            Ingia
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <div className="inline-block bg-green-50 text-green-700 text-xs font-medium px-4 py-1 rounded-full mb-6">
          Tanzania's Property Platform
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
          Pata Nyumba Yako ya <span className="text-green-600 italic">Ndoto</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          Browse apartments and houses across Tanzania. View sizes, amenities, and call owners directly — no middlemen.
        </p>
        <div className="flex bg-white border border-gray-200 rounded-xl px-4 py-2 max-w-2xl mx-auto items-center gap-3 shadow-sm mb-4">
          <input
            type="text"
            placeholder="Search by area, e.g. Masaki, Kariakoo..."
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <select className="border-l border-gray-200 pl-3 text-sm text-gray-500 outline-none bg-transparent">
            <option>All types</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Studio</option>
          </select>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700">
            Tafuta
          </button>
        </div>
        <div className="flex justify-center gap-3">
          {['Kukodisha (Rent)', 'Kununua (Buy)', 'Orodhesha'].map((tab, i) => (
            <button key={i} className={`text-sm px-4 py-2 rounded-full border ${i === 0 ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-500 border-gray-200'}`}>
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="flex justify-center gap-12 pb-12">
        {[['1,240+', 'Properties listed'], ['18', 'Regions covered'], ['3,800+', 'Happy tenants'], ['0%', 'Agent commission']].map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-bold text-gray-900">{num}</div>
            <div className="text-sm text-gray-400 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* FEATURED LISTINGS */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured listings</h2>
          <span className="text-sm text-green-600 underline cursor-pointer">See all →</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { type: 'Apartment', name: 'Modern 2BR, Masaki', location: 'Masaki, Dar es Salaam', beds: 2, baths: 1, size: 85, price: '900,000', bg: 'bg-green-50' },
            { type: 'House', name: 'Spacious Villa, Mbezi', location: 'Mbezi Beach, Dar es Salaam', beds: 4, baths: 2, size: 210, price: '2,500,000', bg: 'bg-blue-50' },
            { type: 'Studio', name: 'Cozy Studio, Kariakoo', location: 'Kariakoo, Dar es Salaam', beds: 1, baths: 1, size: 42, price: '350,000', bg: 'bg-amber-50' },
          ].map((p) => (
            <div key={p.name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-green-200 transition-all">
              <div className={`${p.bg} h-40 flex items-center justify-center`}>
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">{p.type}</div>
                <div className="font-semibold text-gray-900 mb-1">{p.name}</div>
                <div className="text-xs text-gray-400 mb-3">📍 {p.location}</div>
                <div className="flex gap-3 text-xs text-gray-400 mb-3">
                  <span>🛏 {p.beds} beds</span>
                  <span>🚿 {p.baths} bath</span>
                  <span>📐 {p.size} m²</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                  <div className="font-semibold text-gray-900 text-sm">TZS {p.price}<span className="text-xs text-gray-400 font-normal">/mo</span></div>
                  <button className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-green-100">
                    📞 Call owner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white border-t border-b border-gray-100 py-16 px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Jinsi inavyofanya kazi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🔍', title: 'Tafuta', desc: 'Search by location, size, price and type across Tanzania.' },
              { icon: '🏠', title: 'Angalia', desc: 'View full details — photos, floor sizes and amenities.' },
              { icon: '📞', title: 'Piga simu', desc: 'Call the owner directly. No agents, no commissions.' },
              { icon: '🤝', title: 'Kaa', desc: 'Agree on terms with the owner and move in.' },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">{s.icon}</div>
                <div className="font-semibold text-gray-900 mb-2">{s.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER CTA */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-green-900 rounded-2xl p-10 flex justify-between items-center gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Una nyumba ya kukodisha?</h2>
            <p className="text-green-300 text-sm">List your property for free and connect directly with tenants across Tanzania.</p>
          </div>
          <button className="bg-white text-green-900 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-green-50 whitespace-nowrap">
            Orodhesha Mali Yako →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8 px-6 max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4 text-sm text-gray-400">
        <div className="font-bold text-gray-900">Blesauz<span className="text-green-600">.</span></div>
        <div>Tanzania's direct property platform · No middlemen</div>
        <div>© 2025 Blesauz.com</div>
      </footer>

    </main>
  )
}