import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TorilabShowcase from "@/components/TorilabShowcase";
import PersonalProjectsList from "@/components/PersonalProjectsList";

export const metadata: Metadata = {
  title: "Portfolio | Duc (Daniel) Ngo",
  description:
    "Case studies in business intelligence, product analytics, AI R&D, and marketing analytics.",
};

/* ─── Types ─────────────────────────────────────────────────── */

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  period: string;
  context: string;
  role: string;
  approach: string;
  impact: string;
  tools: string[];
  metrics: string[];
  image?: string;
  imageAlt?: string;
};

/* ─── Professional case studies ─────────────────────────────── */

const caseStudies: CaseStudy[] = [
  {
    id: "torilab-bi-dashboards",
    title: "Building BI Dashboards and LookML Models on GCP",
    subtitle: "Reduced report preparation time by 80% through Looker and SQL automation.",
    company: "TORILAB",
    period: "March 2025 – Present",
    context:
      "Business teams across Soulriza, AI Avatar, and Twomi needed faster, more reliable reporting on marketing, revenue, and product performance. Reporting was slow, manual, and inconsistent, making it hard for stakeholders to trust the data or act quickly.",
    role:
      "I led the development of 15+ Looker dashboards and LookML models on GCP, designed the semantic data model, wrote complex SQL queries, and built Python scripts to automate core BI workflows across all three products.",
    approach:
      "I audited existing reporting workflows to find the biggest time sinks, then modeled data in LookML to create a reusable, consistent semantic layer. Python automation handled repetitive data transformation and delivery tasks.",
    impact:
      "Report preparation time dropped by 80%. Business and product teams now access self-serve dashboards instead of waiting for manual reports. The LookML semantic layer ensures consistent metric definitions across all dashboards.",
    tools: ["Looker", "LookML", "GCP", "SQL", "Python", "BigQuery"],
    metrics: ["15+ dashboards", "80% time reduction", "Self-serve reporting"],
  },
  {
    id: "torilab-business-reporting",
    title: "Bi-Weekly Business Reporting that Launched a New Product",
    subtitle:
      "Discovered the AI Companion and personalization trend that led to the creation and launch of Twomi.",
    company: "TORILAB",
    period: "March 2025 – Present",
    context:
      "Senior stakeholders needed clear, recurring visibility into marketing performance, revenue, product growth, and competitive AI market trends, all in one place, presented bi-weekly. No structured framework existed for this.",
    role:
      "I created and owned the bi-weekly business reporting cycle, including data preparation, market trend analysis, visualization, and direct presentation to C-suite and senior stakeholders.",
    approach:
      "I connected marketing spend data, product engagement metrics, and revenue figures into a unified reporting framework. Each report told a clear story: what changed, why, and what to do next. I layered in competitive AI market analysis to identify emerging product opportunities.",
    impact:
      "The recurring reporting cadence contributed to a 15% uplift in marketing ROI and a 50% increase in Daily Active Users. Through the bi-weekly reports, I identified the emerging AI Companion and personalization trend, a discovery that directly informed the decision to create and launch Twomi.",
    tools: ["Looker", "SQL", "Python", "GCP", "Business Reporting", "Market Analysis"],
    metrics: ["15% marketing ROI uplift", "50% DAU increase", "Led to Twomi launch"],
  },
  {
    id: "torilab-event-tracking",
    title: "Designing Event Tracking for 60+ Product Features",
    subtitle:
      "Improved feature-adoption visibility by 40% across Soulriza, AI Avatar, and Twomi.",
    company: "TORILAB",
    period: "March 2025 – Present",
    context:
      "Product and engineering teams had limited visibility into which features users were actually adopting across all three products. Without tracking, it was impossible to measure feature impact or prioritize roadmap decisions.",
    role:
      "I championed end-to-end event tracking across 60+ product features, from defining key metrics with the design team through to aligning development instrumentation and validating data flowing into LookML dashboards.",
    approach:
      "I created a tracking taxonomy, aligned with design and engineering on instrumentation standards, wrote validation queries in GCP, and built LookML dashboards to surface adoption trends for product managers.",
    impact:
      "Feature-adoption visibility improved by 40% across all three apps. Product managers now have real-time dashboards to measure engagement for every shipped feature and use that data to inform roadmap prioritization.",
    tools: ["Product Analytics", "GCP", "LookML", "Looker", "SQL", "BigQuery"],
    metrics: ["60+ features tracked", "40% visibility boost", "Real-time adoption dashboards"],
  },
  {
    id: "vndirect-social-listening",
    title: "Building a Social Listening System for Market Intelligence",
    subtitle:
      "Monitored retail investor sentiment at scale to give VNDIRECT customers a broader view of the market.",
    company: "VNDIRECT",
    period: "February 2024 – March 2025",
    context:
      "VNDIRECT customers relied on price data and news headlines for investment decisions. Social forums like F319 contained valuable retail sentiment signals that were impossible to read at scale. The team needed a system to surface this signal reliably.",
    role:
      "I designed and led the Social Listening project from data collection through model deployment, building the crawling infrastructure, NLP pipeline, and customer-facing sentiment product.",
    approach:
      "I built a web scraping pipeline using Selenium and BeautifulSoup to collect and clean forum discussion data from Vietnamese financial communities. I then applied an LLM-based classifier to extract and aggregate sentiment signals, evaluated performance against labeled benchmarks, and tuned the pipeline for production.",
    impact:
      "The model reached 90% accuracy on financial sentiment classification and was integrated into VNDIRECT's analytics product, giving customers access to aggregated market sentiment alongside traditional price data.",
    tools: ["Python", "LLM", "Selenium", "BeautifulSoup", "NLP", "Sentiment Analysis"],
    metrics: ["90% accuracy", "Forum sentiment at scale", "Production deployment"],
    image: "/images/social-listening-banner.png",
    imageAlt: "VNDIRECT Social Listening banner",
  },
  {
    id: "vndirect-pdf-extraction",
    title: "Leading AI R&D for PDF Information Extraction",
    subtitle: "Achieved 95% accuracy and 90% faster extraction with a 5-person AI team.",
    company: "VNDIRECT",
    period: "February 2024 – March 2025",
    context:
      "VNDIRECT processes large volumes of financial PDF documents. Manual extraction was slow, error-prone, and couldn't scale. The team needed an automated solution that could reliably detect and extract structured text from complex financial PDFs.",
    role:
      "I led a team of 5 AI engineers, set the technical direction, coordinated model development, and ensured delivery on time. I also contributed directly to model architecture decisions and evaluation.",
    approach:
      "We used PaddleOCR for word detection combined with PyMuPDF for document parsing. I structured the project in phases: baseline evaluation, model fine-tuning on financial documents, post-processing for structured output, and production integration.",
    impact:
      "The model achieved 95% accuracy, extraction speed improved by 90%, and error rates dropped by 25%. The team delivered on schedule, and the model went into production use.",
    tools: ["Python", "PaddleOCR", "PyMuPDF", "OCR", "AI Model Development"],
    metrics: ["95% accuracy", "90% faster extraction", "25% error reduction"],
  },
  {
    id: "transactions-forecasting",
    title: "Forecasting Transaction Trends for 10,000+ Stores",
    subtitle:
      "90% forecast accuracy across 1M+ historical transactions to support a loyalty payment program.",
    company: "In4mation Insights",
    period: "July 2022 – November 2023",
    context:
      "A client was evaluating the costs and ROI of a new loyalty payment program. They needed reliable transaction forecasts for 10,000+ store locations to model the program's financial impact before launch.",
    role:
      "I built the forecasting workflow end-to-end: data cleaning, EDA, feature engineering, model development, and stakeholder presentation.",
    approach:
      "I analyzed 1M+ historical transactions from 2020 to 2022 using Python and SQL, performed extensive EDA to identify seasonal patterns and store-level trends, then built an interactive Python script that produced store-level transaction forecasts.",
    impact:
      "The model achieved 90% forecast accuracy. The cost analysis output directly informed the client's decision-making strategy around the loyalty program rollout.",
    tools: ["Python", "SQL", "EDA", "Predictive Modeling", "Stakeholder Reporting"],
    metrics: ["90% forecast accuracy", "10,000+ stores", "1M+ transactions analyzed"],
    image: "/images/sales-forecast-banner.png",
    imageAlt: "Sales forecast banner",
  },
];

/* ─── Timeline ───────────────────────────────────────────────── */

const timeline = [
  {
    period: "March 2025 – Present",
    role: "Senior Data / Business Intelligence Analyst",
    company: "TORILAB",
    location: "Hanoi, Vietnam",
  },
  {
    period: "February 2024 – March 2025",
    role: "Team Leader AI - R&D",
    company: "VNDIRECT",
    location: "Hanoi, Vietnam",
  },
  {
    period: "July 2022 – November 2023",
    role: "Marketing Data Analyst",
    company: "In4mation Insights",
    location: "Needham, Massachusetts",
  },
];

/* ─── Study ──────────────────────────────────────────────────── */

const studyTimeline = [
  {
    period: "August 2018 – May 2022",
    degree: "Data Science Major, Computer Science Minor",
    school: "Macalester College",
    location: "Saint Paul, Minnesota, United States",
    highlights: [
      "GPA 3.9 / 4.0",
      "Best In-Show & Best Insight, 2022 DataFest Competition",
      "#1, May 2021 Kaggle Tabular Playground",
    ],
  },
  {
    period: "August 2011 – May 2018",
    degree: "High School Diploma, Natural Science Track",
    school: "Hanoi Amsterdam High School for the Gifted",
    location: "Hanoi, Vietnam",
    highlights: [
      "One of Vietnam's top selective high schools",
      "Natural Science specialization",
    ],
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* ── Hero: large photo left, bio + timeline right ──────── */}
      <section className="flex flex-col md:flex-row gap-10 md:gap-16 mb-20 animate-fade-in-up">
        {/* Photo */}
        <div className="md:w-[42%] shrink-0">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ height: "500px" }}>
            <Image
              src="/images/portfolio-section.jpg"
              alt="Duc (Daniel) Ngo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Bio + compact timeline */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-xs font-semibold text-[#0A7BFF] uppercase tracking-wide mb-3">
            Currently at TORILAB · Hanoi, Vietnam
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#05070D] mb-5">
            Hi, I&apos;m Duc (Daniel) Ngo.
          </h1>
          <p className="text-base text-[#5A2E12] leading-relaxed mb-8">
            I build analytics systems, BI dashboards, and AI-powered data workflows that
            help teams measure performance, understand users, and make better decisions.
          </p>

          <div>
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-4">
              Where I&apos;ve Worked
            </p>
            <div className="divide-y divide-[#D8DFEA]">
              {timeline.map((item) => (
                <div key={item.company} className="flex items-baseline gap-4 py-3.5">
                  <span className="text-xs text-[#5A2E12] w-40 shrink-0">{item.period}</span>
                  <span className="text-sm text-[#05070D]">
                    <span className="font-semibold">{item.role}</span>{" "}
                    <span className="text-[#0A7BFF]">@ {item.company}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TORILAB showcase ──────────────────────────────────── */}
      <section className="mb-6">
        <TorilabShowcase />
      </section>

      {/* ── Case Studies ─────────────────────────────────────── */}
      <section className="mb-24">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-10">
          Selected Case Studies
        </h2>
        <div className="space-y-14">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.id}
              id={cs.id}
              className="border border-[#D8DFEA] rounded-2xl bg-white overflow-hidden card-hover"
            >
              {cs.image && (
                <div className="relative w-full aspect-[3/1] overflow-hidden border-b border-[#D8DFEA] bg-[#F5F7FA]">
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt ?? cs.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 1024px, 100vw"
                  />
                </div>
              )}

              <div className="p-8 border-b border-[#D8DFEA]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#0A7BFF] bg-[#F5F7FA] px-2.5 py-1 rounded-full">
                    {cs.company}
                  </span>
                  <span className="text-xs text-[#5A2E12]">{cs.period}</span>
                  <span className="text-xs text-[#5A2E12]">Case study {i + 1}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-2">
                  {cs.title}
                </h3>
                <p className="text-[#5A2E12] text-base leading-relaxed">{cs.subtitle}</p>
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  {[
                    { label: "Context", text: cs.context },
                    { label: "My Role", text: cs.role },
                    { label: "Approach", text: cs.approach },
                    { label: "Impact", text: cs.impact },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <h4 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-2">
                        {label}
                      </h4>
                      <p className="text-sm text-[#05070D] leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-3">
                      Key Metrics
                    </h4>
                    <ul className="space-y-2">
                      {cs.metrics.map((m) => (
                        <li
                          key={m}
                          className="text-sm font-medium text-[#0A7BFF] bg-[#F5F7FA] px-3 py-2 rounded-lg"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-3">
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tools.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-[#F5F7FA] border border-[#D8DFEA] text-[#5A2E12] px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Section separator ────────────────────────────────── */}
      <div className="border-t-2 border-[#D8DFEA] my-4" />

      {/* ── WHERE I'VE STUDIED ───────────────────────────────── */}
      <section className="py-16 mb-4">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D] mb-10">
          Where I&apos;ve Studied
        </h2>
        <div className="space-y-6">
          {studyTimeline.map((s) => (
            <div
              key={s.school}
              className="border border-[#D8DFEA] rounded-2xl bg-white p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#05070D]">
                    {s.school}
                  </p>
                  <p className="text-[#0A7BFF] text-sm font-medium mt-0.5">{s.degree}</p>
                  <p className="text-xs text-[#5A2E12] mt-0.5">{s.location}</p>
                </div>
                <span className="text-xs text-[#5A2E12] shrink-0 md:text-right">{s.period}</span>
              </div>
              <ul className="space-y-1.5">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#05070D]">
                    <span className="text-[#0A7BFF] mt-0.5 shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { src: "/images/graduation-1.jpg", alt: "Macalester College graduation" },
            { src: "/images/macalester-pic1.jpeg", alt: "Duc with Macalester friends at dinner" },
            { src: "/images/macalester-group.jpeg", alt: "Duc with Macalester classmates" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm img-zoom"
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section separator ────────────────────────────────── */}
      <div className="border-t-2 border-[#D8DFEA] my-4" />

      {/* ── PERSONAL PROJECTS ────────────────────────────────── */}
      <section className="py-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#05070D] mb-3">
          Personal Projects
        </h2>
        <p className="text-[#5A2E12] text-base mb-10">
          Writing, music, and academic projects built outside of work.
        </p>
        <PersonalProjectsList />

        {/* ── CTA: see all projects ──────────────────────────── */}
        <Link
          href="/projects"
          className="group mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#0A7BFF] to-[#063A99] p-8 shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              Want to see more?
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-white">
              Still curious? Check out all of my projects!
            </p>
            <p className="text-sm text-white/80 mt-1.5">
              Machine learning, finance, sports analytics, geospatial work, and more.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start sm:self-auto shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#063A99] transition-transform group-hover:translate-x-1">
            Check out all my projects
            <span aria-hidden>→</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
