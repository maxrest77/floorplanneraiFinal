import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function AIInputPanel({ onGenerate, onBack }) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);

  const quickSuggestions = [
    "Modern 2-bedroom apartment with open kitchen",
    "Small office space with 3 meeting rooms",
    "Cozy studio apartment with balcony",
    "Traditional 3-bedroom house layout"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please describe your floor plan.");
      return;
    }

    setIsGenerating(true);
    setGeneratedPlan(null);

    try {
      const payload = { prompt: prompt.trim() };

      const response = await fetch("http://localhost:5001/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const text = await response.text(); // read backend error
        console.error("Generation failed:", text);
        alert("Backend error: " + text);
        return;
      }

      // Convert backend response to a blob (image)
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      setGeneratedPlan(imageUrl);
      onGenerate(imageUrl);

    } catch (error) {
      console.error("Generation Error:", error);
      alert("Backend service temporarily unavailable.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setPrompt(suggestion);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[600px] mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-[#1C2B25] hover:text-[#C2A14A] transition-colors duration-150 mb-8"
        >
          <ArrowLeft size={20} />
          <span style={{ fontFamily: "Inter, system-ui, sans-serif" }}>Back to Mode Selection</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl leading-tight text-[#1C2B25] mb-4"
            style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
          >
            AI Floor Plan <em className="text-[#C2A14A]">Generator</em>
          </h1>
          <p
            className="text-lg text-[#2D2D2D] opacity-80"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Describe your space and let AI create the perfect layout
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#F8F6F1]">
          <div className="space-y-6">
            {/* Floor Plan Prompt */}
            <div>
              <label
                className="block text-sm font-medium text-[#1C2B25] mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Describe your floor plan
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A modern 2-bedroom apartment with an open kitchen and living area..."
                className="w-full px-4 py-3 border border-[#E5E3DE] rounded-xl focus:ring-2 focus:ring-[#C2A14A] focus:border-[#C2A14A] outline-none transition-colors resize-none"
                rows={4}
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              />
            </div>

            {/* Quick Suggestions */}
            <div>
              <label
                className="block text-sm font-medium text-[#1C2B25] mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Quick Suggestions
              </label>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(s)}
                    className="px-4 py-2 bg-white text-[#2D2D2D] border border-[#E5E3DE] rounded-xl hover:bg-[#C2A14A] hover:text-white transition-colors duration-150"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full px-8 py-4 bg-[#C2A14A] hover:bg-[#B8975A] disabled:bg-[#E5E3DE] disabled:text-[#2D2D2D] disabled:opacity-50 text-white font-medium text-base rounded-xl transition-all duration-150 flex items-center justify-center space-x-2"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating Layout...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Generate Layout</span>
                </>
              )}
            </button>

            {/* Display Generated Floor Plan */}
            {generatedPlan && (
              <div className="mt-6 text-left bg-[#F8F6F1] p-4 rounded-xl border border-[#E5E3DE]">
                <h2 className="text-lg text-[#1C2B25] mb-2" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>Generated Floor Plan</h2>
                <img src={generatedPlan} alt="Generated Floor Plan" className="w-full rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
