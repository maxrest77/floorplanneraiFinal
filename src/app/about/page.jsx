import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[900px] mx-auto px-6 py-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 className="text-3xl md:text-4xl text-[#1C2B25] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>About</h1>
        <p className="text-[#2D2D2D] leading-relaxed mb-4">
          FloorPlan AI helps designers and homeowners create beautiful, functional floor plans in minutes.
          We combine intuitive tools with AI-assisted suggestions to accelerate every stage of planning.
        </p>
        <p className="text-[#2D2D2D] leading-relaxed">
          Our mission is to make architectural design more accessible without compromising quality.
          We believe in clear workflows, delightful UX, and results you can build on.
        </p>
      </main>
      <Footer />
    </div>
  );
}


