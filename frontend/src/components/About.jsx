export default function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ABOUT BADGE */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            About Us
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900">
          Welcome to Imam Ghazzali School
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-center max-w-3xl mx-auto text-lg text-slate-600">
          A premier educational institution in Lalpettai, dedicated to nurturing
          young minds with quality education, moral values, and discipline for
          over 25 years.
        </p>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Founded in 1995,{" "}
              <span className="font-semibold text-slate-900">
                Imam Ghazzali School
              </span>{" "}
              has been a beacon of educational excellence in Lalpettai.
            </p>

            <p>
              Our school is named after Imam Al-Ghazzali, embodying principles of
              knowledge, wisdom, and spiritual growth.
            </p>

            <p>
              With modern facilities and experienced faculty, we prepare
              students not just for exams, but for life.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative bg-white rounded-2xl p-12
              flex flex-col items-center justify-center text-center
              border border-yellow-300
              shadow-lg
              transition-all duration-700 ease-out
              hover:-translate-y-4 hover:shadow-2xl
            "
          >
            {/* glow ring */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-700
                            ring-2 ring-yellow-400 ring-offset-4 ring-offset-white"></div>

            <div
              className="
                w-20 h-20 rounded-full bg-yellow-500 text-white mb-6 text-3xl
                flex items-center justify-center
                transition-all duration-700
                hover:scale-110
              "
            >
              🏫
            </div>

            <h3 className="text-xl font-semibold text-slate-900 relative z-10">
              School Building & Campus
            </h3>
          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD TEMPLATE */}
          {[
            { icon: "❤️", title: "Moral Values", text: "Building strong character with ethics and values" },
            { icon: "👨‍🏫", title: "Experienced Faculty", text: "Qualified teachers committed to success" },
            { icon: "🎯", title: "Holistic Development", text: "Academics, sports, arts, and growth" },
            { icon: "🏆", title: "Excellence", text: "Consistent academic achievements" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative group bg-white rounded-2xl p-8
                border border-yellow-600
                shadow-md
                transition-all duration-700 ease-out
                hover:-translate-y-4 hover:shadow-2xl
              "
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700
                              ring-2 ring-yellow-400 ring-offset-4 ring-offset-white"></div>

              <div
                className="
                  w-14 h-14 rounded-xl bg-yellow-500 text-white mb-6 text-xl
                  flex items-center justify-center
                  transition-all duration-700
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-3 relative z-10">
                {item.title}
              </h4>

              <p className="text-slate-600 text-sm relative z-10">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
