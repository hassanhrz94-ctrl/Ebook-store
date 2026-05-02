"use client";

import { useEffect, useRef } from "react";

export default function Banner() {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return;
      const rect = orbRef.current.closest("section").getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-14px) rotate(2deg); }
          66% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blob-move {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(12px, -18px) scale(1.2); opacity: 1; }
        }
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-10px, -14px) scale(0.8); opacity: 0.9; }
        }
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.6; }
          50% { transform: translate(8px, 16px); opacity: 1; }
        }

        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 12s linear infinite; }
        .animate-blob { animation: blob-move 8s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.7s ease forwards; }
        .animate-pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease forwards; }
        .particle-1 { animation: particle-1 4s ease-in-out infinite; }
        .particle-2 { animation: particle-2 5s ease-in-out infinite 0.8s; }
        .particle-3 { animation: particle-3 3.5s ease-in-out infinite 1.5s; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }

        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #fff 40%, #fde68a 50%, #fff 60%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite 2s;
        }

        .btn-glow {
          box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.7);
          transition: all 0.3s ease;
        }
        .btn-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 146, 60, 0.5);
        }
        .btn-glow:active { transform: translateY(0px); }

        .orb-transition { transition: transform 0.15s ease-out; }
      `}</style>

      <section className="relative mx-4 md:mx-12 mt-6 rounded-3xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600" />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 animate-blob rounded-full" />
        <div
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-400/20 rounded-full"
          style={{ animation: "blob-move 10s ease-in-out infinite 2s" }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-14 gap-8">
          {/* ── LEFT CONTENT ── */}
          <div className="text-white max-w-lg flex flex-col gap-5">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 self-start bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 animate-slide-up opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-yellow-100">
                New Feature
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight animate-slide-up opacity-0 delay-100"
              style={{ animationFillMode: "forwards" }}
            >
              <span className="shimmer-text">Better way</span>
              <br />
              <span className="text-white">to read your</span>
              <br />
              <span className="text-yellow-300">textbooks.</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/75 text-sm md:text-base leading-relaxed animate-slide-up opacity-0 delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              Elevate your learning with AI-powered insights. Foster better
              knowledge management, streamlined workflows, and deeper
              comprehension — all in one place.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 animate-slide-up opacity-0 delay-500"
              style={{ animationFillMode: "forwards" }}
            >
              <button className="btn-glow bg-orange-400 hover:bg-orange-500 text-white font-bold px-7 py-3 rounded-xl text-sm transition-colors">
                Get Started →
              </button>
              <button className="bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-white font-semibold px-7 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5">
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-3 animate-fade-in opacity-0 delay-700"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="flex -space-x-2">
                {["🧑‍💻", "👩‍🎓", "🧑‍🔬", "👩‍💼"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-xs">
                <span className="text-white font-bold">12,000+</span> students
                already reading smarter
              </p>
            </div>
          </div>

          {/* ── RIGHT ILLUSTRATION ── */}
          <div className="relative flex-shrink-0 animate-float">
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/30 animate-pulse-ring" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/20 animate-pulse-ring"
                style={{ animationDelay: "1.2s" }}
              />
            </div>

            {/* Main circle */}
            <div
              ref={orbRef}
              className="orb-transition relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(ellipse at 35% 35%, #fde68a, #f59e0b, #d97706)",
                boxShadow:
                  "0 20px 60px rgba(251, 191, 36, 0.4), inset 0 -10px 30px rgba(180, 100, 0, 0.3)",
              }}
            >
              {/* Orbiting ring */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/25 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-white/15 animate-spin-reverse" />

              {/* Inner purple core */}
              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse at 35% 30%, #c084fc, #9333ea, #7e22ce)",
                  boxShadow:
                    "0 8px 30px rgba(147, 51, 234, 0.6), inset 0 -5px 15px rgba(80, 10, 140, 0.4)",
                }}
              >
                <span className="text-3xl select-none">📚</span>
              </div>

              {/* Floating particles */}
              <div className="absolute top-6 right-10 w-4 h-4 rounded-full bg-white/60 particle-1" />
              <div className="absolute bottom-10 left-8 w-3 h-3 rounded-full bg-pink-200/70 particle-2" />
              <div className="absolute top-16 left-6 w-2.5 h-2.5 rounded-full bg-yellow-200/80 particle-3" />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -top-3 -left-12 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
              style={{ animation: "float 6s ease-in-out infinite 0.5s" }}
            >
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">
                  Reading Speed
                </p>
                <p className="text-sm font-black text-gray-800">+2.4× Faster</p>
              </div>
            </div>

            <div
              className="absolute -bottom-2 -right-8 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2.5"
              style={{ animation: "float 7s ease-in-out infinite 1s" }}
            >
              <span className="text-2xl">🧠</span>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">
                  Retention Rate
                </p>
                <p className="text-sm font-black text-gray-800">87% Better</p>
              </div>
            </div>

            <div
              className="absolute top-1/2 -right-14 -translate-y-1/2 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2"
              style={{ animation: "float 5.5s ease-in-out infinite 1.8s" }}
            >
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm">✓</span>
              </div>
              <p className="text-xs font-bold text-gray-700">AI Summary</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}