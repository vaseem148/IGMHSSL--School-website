export default function VisionMission() {
  return (
    <section className="bg-bg-alt py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <p className="text-center text-sm tracking-widest text-yellow-500 font-semibold mb-3">
          OUR PURPOSE
        </p>

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-16">
          Vision & Mission
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ================= VISION ================= */}
          <div
            className="
              group relative bg-white rounded-3xl p-12
              border-2 border-green-200
              shadow-xl
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-green-500
            "
          >
            {/* subtle inner glow */}
            <div className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              ring-1 ring-green-300/40
            "></div>

            {/* ICON */}
            <div
              className="
                w-14 h-14 rounded-2xl bg-green-600 text-white mb-6
                flex items-center justify-center
                transition-transform duration-500
                group-hover:scale-110
              "
            >
              👁️
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To be a leading educational institution that shapes young minds
              into confident, morally upright, and intellectually capable
              individuals who contribute positively to society and uphold the
              values of knowledge, faith, and humanity.
            </p>

            {/* DECOR */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full"></div>
          </div>

          {/* ================= MISSION ================= */}
          <div
            className="
              group relative bg-white rounded-3xl p-12
              border-2 border-yellow-200
              shadow-xl
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-yellow-500
            "
          >
            {/* subtle inner glow */}
            <div className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              ring-1 ring-yellow-300/40
            "></div>

            {/* ICON */}
            <div
              className="
                w-14 h-14 rounded-2xl bg-yellow-400 text-white mb-6
                flex items-center justify-center
                transition-transform duration-500
                group-hover:scale-110
              "
            >
              🎯
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To provide quality education that nurtures academic excellence,
              instills moral values, promotes critical thinking, and prepares
              students to meet the challenges of the modern world while staying
              rooted in their cultural and spiritual heritage.
            </p>

            {/* DECOR */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
