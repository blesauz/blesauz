'use client'
import { useState } from 'react'

export default function ListProperty() {
  const [step, setStep] = useState(1)

  return (
    <main className="min-h-screen bg-gray-50">

      {/* NAV */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-900">
          Blesauz<span className="text-green-600">.</span>
        </a>
        <div className="text-sm text-gray-400">List your property</div>
      </nav>

      {/* PROGRESS BAR */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <div className="flex items-center justify-between mb-2">
          {['Location', 'Property', 'Condition', 'Amenities', 'Photos & Price'].map((label, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-1
                ${step > i + 1 ? 'bg-green-600 text-white' :
                  step === i + 1 ? 'bg-green-600 text-white' :
                  'bg-gray-200 text-gray-400'}`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <div className={`text-xs text-center hidden md:block ${step === i + 1 ? 'text-green-600 font-medium' : 'text-gray-400'}`}>
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
          <div
            className="bg-green-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>

        {/* STEP 1 - LOCATION */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Where is the property?</h2>
            <p className="text-gray-400 text-sm mb-8">Tell us the location so renters can find it easily.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500">
                  <option>Dar es Salaam</option>
                  <option>Arusha</option>
                  <option>Mwanza</option>
                  <option>Dodoma</option>
                  <option>Zanzibar</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area / Neighbourhood</label>
                <input
                  type="text"
                  placeholder="e.g. Masaki, Mbezi Beach, Kariakoo..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Street or nearest landmark</label>
                <input
                  type="text"
                  placeholder="e.g. Behind Shoprite Mbezi, near Makumbusho..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Distance from city centre</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500">
                    <option>Less than 1 km</option>
                    <option>1 - 3 km</option>
                    <option>3 - 5 km</option>
                    <option>5 - 10 km</option>
                    <option>More than 10 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Distance from tarmac road</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500">
                    <option>On tarmac road</option>
                    <option>Less than 50m</option>
                    <option>50m - 100m</option>
                    <option>100m - 200m</option>
                    <option>200m - 500m</option>
                    <option>More than 500m</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Next: Property Details →
            </button>
          </div>
        )}

        {/* STEP 2 - PROPERTY */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Property details</h2>
            <p className="text-gray-400 text-sm mb-8">Tell us about the size and layout of your property.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property type</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Apartment', 'House', 'Studio', 'Villa', 'Townhouse', 'Other'].map((type) => (
                    <button key={type} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of bedrooms</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>1</option><option>2</option><option>3</option>
                    <option>4</option><option>5</option><option>6+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of bathrooms</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>1</option><option>2</option><option>3</option><option>4+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total floor area (m²)</label>
                  <input type="number" placeholder="e.g. 85" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen size (m²)</label>
                  <input type="number" placeholder="e.g. 12" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Floor level</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>Ground floor</option>
                    <option>1st floor</option>
                    <option>2nd floor</option>
                    <option>3rd floor</option>
                    <option>Penthouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parking</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>No parking</option>
                    <option>1 car</option>
                    <option>2 cars</option>
                    <option>Shared compound</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50">
                ← Back
              </button>
              <button onClick={() => setStep(3)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">
                Next: Condition →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 - CONDITION */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Condition & age</h2>
            <p className="text-gray-400 text-sm mb-8">This helps renters understand what to expect.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age of the house</label>
                <div className="grid grid-cols-2 gap-3">
                  {['New (never lived in)', 'Less than 1 year', '1 - 2 years', '2 - 5 years', '5 - 10 years', '10+ years'].map((age) => (
                    <button key={age} className="border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 text-left transition-colors">
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Excellent', 'Good', 'Fair', 'Needs minor work'].map((c) => (
                    <button key={c} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Has it been renovated recently?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600">Yes</button>
                  <button className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600">No</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Floor type</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>Tiles</option><option>Marble</option><option>Cement</option><option>Wood</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roof type</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500">
                    <option>Flat concrete</option><option>Pitched tiles</option><option>Iron sheets</option><option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50">
                ← Back
              </button>
              <button onClick={() => setStep(4)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">
                Next: Amenities →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 - AMENITIES */}
        {step === 4 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Amenities</h2>
            <p className="text-gray-400 text-sm mb-8">What does your property include?</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Water source</label>
                <div className="grid grid-cols-2 gap-3">
                  {['DAWASA mains', 'Well / Borehole', 'DAWASA + Borehole', 'Other'].map((w) => (
                    <button key={w} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{w}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Water storage tank</label>
                <div className="grid grid-cols-3 gap-3">
                  {['No tank', '500 litres', '1,000 litres', '2,000 litres', '5,000 litres', '5,000+ litres'].map((t) => (
                    <button key={t} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{t}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Cooling</label>
                <div className="grid grid-cols-3 gap-3">
                  {['AC (all rooms)', 'AC (some rooms)', 'Ceiling fans', 'Standing fans', 'None'].map((c) => (
                    <button key={c} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{c}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Internet</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Fibre', '4G Router', 'None'].map((i) => (
                    <button key={i} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{i}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Security</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Security guard', 'Electric fence', 'CCTV', 'Alarm', 'Gated', 'None'].map((s) => (
                    <button key={s} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{s}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Furnishing</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Fully furnished', 'Partially furnished', 'Unfurnished'].map((f) => (
                    <button key={f} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{f}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setStep(3)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50">
                ← Back
              </button>
              <button onClick={() => setStep(5)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">
                Next: Photos & Price →
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 - PHOTOS & PRICE */}
        {step === 5 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Photos & asking price</h2>
            <p className="text-gray-400 text-sm mb-8">Add photos and set your monthly rent.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Upload photos (up to 10)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                  <div className="text-4xl mb-3">📷</div>
                  <div className="text-sm text-gray-500 mb-1">Click to upload or drag and drop</div>
                  <div className="text-xs text-gray-400">JPG or PNG, max 5MB each</div>
                  <input type="file" multiple accept="image/*" className="hidden" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe your property — mention what's nearby, transport links, special features..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly rent (TZS)</label>
                <input
                  type="number"
                  placeholder="e.g. 900000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500"
                />
                <p className="text-xs text-gray-400 mt-2">After entering your price, we will show you how it compares to similar properties in your area.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Deposit required?</label>
                <div className="grid grid-cols-3 gap-3">
                  {['No deposit', '1 month', '2 months', '3 months'].map((d) => (
                    <button key={d} className="border border-gray-200 rounded-xl py-3 text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors">{d}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setStep(4)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50">
                ← Back
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">
                Submit Listing 🎉
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-6 pb-10">
          Your listing is free. Blesauz never charges commission.
        </p>
      </div>
    </main>
  )
}