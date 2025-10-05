import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '$0', features: ['1 project', 'PNG export', 'Email support'] },
    { name: 'Pro', price: '$12/mo', features: ['Unlimited projects', 'SVG/PNG export', 'AI suggestions', 'Priority support'] },
    { name: 'Team', price: '$29/mo', features: ['Team collaboration', 'Shared libraries', 'Admin tools', 'SLA support'] },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1100px] mx-auto px-6 py-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 className="text-3xl md:text-4xl text-[#1C2B25] mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="border border-[#E5E3DE] rounded-2xl p-6">
              <div className="text-xl font-semibold text-[#1C2B25] mb-2">{p.name}</div>
              <div className="text-3xl font-bold text-[#C2A14A] mb-4">{p.price}</div>
              <ul className="space-y-2 text-[#2D2D2D]">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="/start-designing" className="mt-6 inline-block px-4 py-2 rounded-xl bg-[#1C2B25] text-white">Get Started</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


