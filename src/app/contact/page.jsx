import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[900px] mx-auto px-6 py-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 className="text-3xl md:text-4xl text-[#1C2B25] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Floor Planner AI</h1>
        <p className="text-[#2D2D2D] mb-8">Have questions about Floor Planner AI? Send us a message and we’ll get back to you.</p>
        <form className="space-y-4">
          <input className="w-full px-4 py-3 border border-[#E5E3DE] rounded-xl" placeholder="Your name" />
          <input type="email" className="w-full px-4 py-3 border border-[#E5E3DE] rounded-xl" placeholder="Your email" />
          <textarea rows={5} className="w-full px-4 py-3 border border-[#E5E3DE] rounded-xl" placeholder="How can we help?" />
          <button type="button" className="px-6 py-3 rounded-xl bg-[#1C2B25] text-white">Send</button>
        </form>

        <div className="mt-10 p-6 border border-[#E5E3DE] rounded-2xl bg-[#F8F6F1]">
          <h2 className="text-xl font-semibold text-[#1C2B25] mb-2">Built by</h2>
          <ul className="list-disc pl-6 text-[#2D2D2D]">
            <li>Karthikeyan S</li>
            <li>Rithic</li>
            <li>Megnath</li>
            <li>Zeeshan</li>
            <li>Derwin</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}


