import Link from "next/link";
import Image from "next/image";
import FlipPortraitToggle from "@/components/FlipPortraitToggle";

const featuredWork = [
  {
    title: "BI Dashboards and LookML Models on GCP",
    summary:
      "Built 15+ Looker dashboards and LookML models backed by SQL and Python automation, reducing report preparation time by 80%.",
    tools: ["Looker", "LookML", "GCP", "SQL", "Python"],
    impact: "80% faster reporting",
    slug: "torilab-bi-dashboards",
  },
  {
    title: "Product Event Tracking for 60+ Features",
    summary:
      "Built a product analytics tracking workflow from metric definition to development instrumentation and LookML dashboard validation.",
    tools: ["Product Analytics", "GCP", "LookML", "SQL"],
    impact: "40% visibility boost",
    slug: "torilab-event-tracking",
  },
  {
    title: "AI PDF Information Extraction",
    summary:
      "Led a 5-person AI R&D team to build a PDF word-detection model with 95% accuracy and 90% faster extraction.",
    tools: ["Python", "PaddleOCR", "PyMuPDF", "OCR"],
    impact: "95% accuracy",
    slug: "vndirect-pdf-extraction",
  },
  {
    title: "Forecasting Transactions for 10,000+ Stores",
    summary:
      "Built a Python and SQL forecasting workflow to predict store-level transactions across 1M+ historical records.",
    tools: ["Python", "SQL", "EDA", "Predictive Modeling"],
    impact: "90% forecast accuracy",
    slug: "transactions-forecasting",
  },
];

const projects = [
  {
    title: "Soccer Spatial Analysis",
    tools: "R, ggsoccer, gganimate",
    insight: "Animated passing tendencies across five European leagues.",
    image: "/images/soccer-analysis.png",
    color: "#EEF2FF",
  },
  {
    title: "S&P 500 Stock Picking with ML",
    tools: "Python, Matplotlib, ML",
    insight: "Feature importance and model comparisons for a finance workflow.",
    image: "/images/stock-ml.png",
    color: "#F5F7FA",
  },
  {
    title: "Bayesian Earnings Forecasting",
    tools: "R, Bayesian Modeling",
    insight: "Forecasting S&P 500 company earnings with Bayesian methods.",
    image: "/images/bayesian-forecast.png",
    color: "#FDF4FF",
  },
  {
    title: "Rayshader 3D Terrain Maps",
    tools: "R, Rayshader",
    insight: "Terrain rendering experiments using elevation data.",
    image: "/images/rayshader.png",
    color: "#F0FDF4",
  },
  {
    title: "Stock Change Before and After the Pandemic",
    tools: "R, Finance, Data Visualization",
    insight: "Compared market cap, volume, and share price shifts across top S&P 500 sector companies.",
    image: "/images/stock-pandemic.png",
    color: "#EFF6FF",
  },
];

const metrics = [
  "15+ Looker dashboards",
  "80% faster reporting",
  "15% marketing ROI uplift",
  "50% DAU increase",
  "60+ features tracked",
  "95% PDF accuracy",
  "10,000+ stores forecasted",
  "47.35% ML stock return",
];

const workExperience = [
  {
    role: "Senior Data / Business Intelligence Analyst",
    company: "TORILAB",
    period: "March 2025 – Present",
    note: "15+ dashboards · 80% faster reporting · 50% DAU increase",
  },
  {
    role: "Team Leader AI - R&D",
    company: "VNDIRECT",
    period: "February 2024 – March 2025",
    note: "95% PDF accuracy · 90% extraction speed · LLM sentiment model",
  },
  {
    role: "Marketing Data Analyst",
    company: "In4mation Insights",
    period: "July 2022 – November 2023",
    note: "10,000+ stores · 1M+ transactions · 90% forecast accuracy",
  },
];

const schoolExperience = [
  {
    role: "Data Science Major, Computer Science Minor",
    company: "Macalester College",
    period: "August 2018 – May 2022",
    note: "GPA 3.9 · Best In-Show DataFest · #1 Kaggle Tabular Playground",
  },
  {
    role: "Mathematics Specialized Class",
    company: "Hanoi-Amsterdam High School for the Gifted",
    period: "August 2011 – May 2018",
    note: "Natural science track",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-on-dark bg-[radial-gradient(circle_at_top_right,#0646B8_0%,#061B5F_42%,#05070D_100%)]">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-14 md:pt-20 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
          {/* Text */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-medium text-[#0A7BFF] mb-4 tracking-wide uppercase">
              Currently at TORILAB · Hanoi, Vietnam
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold !text-white leading-[1.05] mb-6 max-w-3xl">
              Hi, I&apos;m Duc (Daniel) Ngo.
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F7FA] leading-relaxed mb-5 max-w-3xl">
              I connect analytics, BI, and AI to help teams measure performance,
              understand users, and make better decisions.
            </p>
            <p className="hero-muted text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              Senior Data / Business Intelligence Analyst with experience across Looker,
              LookML, GCP, SQL, Python, product tracking, marketing analytics, machine
              learning, and AI-powered data workflows.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="hero-cta-light bg-white !text-[#05070D] px-6 py-3 rounded-lg text-sm font-medium btn-press"
              >
                View my work
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=14C_N57dCt2BzTMtpAHH_LqFF2dds5-J1"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/35 !text-white px-6 py-3 rounded-lg text-sm font-medium hover:border-white hover:bg-white/10 transition-colors"
              >
                Download resume
              </a>
              <div className="flex items-center gap-4 ml-1">
                <a
                  href="https://linkedin.com/in/duc-minh-ngo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-muted text-sm hover:!text-white transition-colors link-underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ducminhngo871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-muted text-sm hover:!text-white transition-colors link-underline"
                >
                  GitHub
                </a>
                <a
                  href="https://stillhereduc.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-muted text-sm hover:!text-white transition-colors link-underline"
                >
                  Substack
                </a>
                <a
                  href="mailto:ducminhngo871@gmail.com"
                  className="hero-muted text-sm hover:!text-white transition-colors link-underline"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <FlipPortraitToggle />
          </div>
          </div>
        </div>
      </section>

      {/* Site Directory */}
      <section className="border-y border-[#D8DFEA] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-2">
            Start here
          </h2>
          <p className="text-[#5A2E12] text-sm mb-8">
            Not sure where to look? Here&apos;s how different visitors navigate the site.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: "Recruiter or hiring manager?",
                title: "Work & Case Studies",
                desc: "Business intelligence, product analytics, AI R&D, forecasting, and machine learning projects with measurable outcomes.",
                href: "/work",
                cta: "View case studies",
              },
              {
                label: "Interested in projects?",
                title: "Projects",
                desc: "Academic and personal projects in machine learning, finance, spatial analysis, sports analytics, and 3D terrain maps.",
                href: "/projects",
                cta: "Explore projects",
              },
              {
                label: "Want to know how I think?",
                title: "Writing & Notes",
                desc: "Book reviews, analytics notes, and reflections on how I work, learn, and approach problems.",
                href: "/writing",
                cta: "Read the writing",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block p-6 rounded-xl border border-[#D8DFEA] bg-[#F5F7FA] hover:border-[#0A7BFF] hover:bg-white card-hover"
              >
                <p className="text-xs text-[#0A7BFF] font-medium mb-2">{card.label}</p>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#05070D] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5A2E12] leading-relaxed mb-4">{card.desc}</p>
                <span className="text-sm text-[#0A7BFF] font-medium group-hover:underline">
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D]">
            Featured work
          </h2>
          <Link href="/work" className="text-sm text-[#0A7BFF] hover:underline">
            All case studies →
          </Link>
        </div>
        <p className="text-[#5A2E12] mb-10 max-w-2xl">
          A selection of projects where I built analytics systems, improved reporting
          workflows, developed AI models, or turned complex data into decisions.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {featuredWork.map((project) => (
            <Link
              key={project.slug}
              href={`/work#${project.slug}`}
              className="group block p-6 rounded-xl border border-[#D8DFEA] bg-white hover:border-[#0A7BFF] card-hover"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#05070D] leading-snug">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs font-medium bg-[#F5F7FA] text-[#0A7BFF] px-2.5 py-1 rounded-full">
                  {project.impact}
                </span>
              </div>
              <p className="text-sm text-[#5A2E12] leading-relaxed mb-4">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#F5F7FA] border border-[#D8DFEA] text-[#5A2E12] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-sm text-[#0A7BFF] font-medium group-hover:underline">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-[#0A7BFF]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m} className="text-center">
                <p className="text-white text-sm font-medium leading-snug">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D]">
            Projects
          </h2>
          <Link href="/projects" className="text-sm text-[#0A7BFF] hover:underline">
            See all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((v) => (
            <Link
              key={v.title}
              href="/projects"
              className="group block rounded-xl border border-[#D8DFEA] bg-white overflow-hidden hover:border-[#0A7BFF] card-hover img-zoom"
            >
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: v.color }}
              >
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/0" />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-[#05070D] mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-[#5A2E12] mb-2">{v.tools}</p>
                <p className="text-sm text-[#5A2E12] leading-relaxed">{v.insight}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="border-t border-[#D8DFEA] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D] mb-10">
            Experience
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { heading: "Work", items: workExperience },
              { heading: "School", items: schoolExperience },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-4">
                  {group.heading}
                </h3>
                <div className="space-y-0">
                  {group.items.map((item) => (
                    <div
                      key={item.company}
                      className="flex flex-col gap-1 py-5 border-b border-[#D8DFEA] last:border-0"
                    >
                      <span className="text-xs text-[#5A2E12]">{item.period}</span>
                      <div>
                        <p className="font-medium text-[#05070D] text-sm">{item.role}</p>
                        <p className="text-sm text-[#0A7BFF]">{item.company}</p>
                      </div>
                      <p className="text-xs text-[#5A2E12] leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D] mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-[#5A2E12] max-w-xl mx-auto mb-8">
          I&apos;m always interested in thoughtful conversations about analytics systems,
          BI, AI workflows, product measurement, marketing performance, and data
          visualization.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ducminhngo871@gmail.com"
            className="bg-[#0A7BFF] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0646B8] transition-colors"
          >
            Email Duc
          </a>
          <a
            href="https://linkedin.com/in/duc-minh-ngo/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D8DFEA] text-[#05070D] px-6 py-3 rounded-lg text-sm font-medium hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
