import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EducationPhotos from "@/components/EducationPhotos";
import FlipPortraitToggle from "@/components/FlipPortraitToggle";

export const metadata: Metadata = {
  title: "About | Duc (Daniel) Ngo",
  description:
    "Data and BI analyst who enjoys turning messy business questions into systems that teams can actually use.",
};

const skillGroups = [
  {
    category: "Business Intelligence & Analytics",
    skills: [
      "Looker", "LookML", "Power BI", "Tableau",
      "Business Reporting", "KPI Design", "Stakeholder Communication",
    ],
  },
  {
    category: "Data & Engineering",
    skills: [
      "SQL", "Python", "GCP", "BigQuery", "Azure Databricks",
      "Pandas", "Data Pipelines", "Automation",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "XGBoost", "CatBoost", "Lasso", "Random Forest", "Stacking",
      "LLM Sentiment Analysis", "OCR", "PaddleOCR", "PyMuPDF",
    ],
  },
  {
    category: "Visualization & Communication",
    skills: [
      "Matplotlib", "R", "R Studio", "ggsoccer", "gganimate",
      "Data Storytelling", "Dashboarding", "Geospatial Visualization",
    ],
  },
  {
    category: "Web & Data Collection",
    skills: [
      "BeautifulSoup", "Selenium", "Multiprocessing", "Web Scraping",
    ],
  },
];

const interests = [
  "Data visualization experiments",
  "Building analytics systems from scratch",
  "Bayesian modeling and forecasting",
  "Soccer analytics and sports data",
  "Reading, especially on systems thinking, economics, and technology",
  "3D terrain mapping with Rayshader",
  "Playing piano",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Profile photo + name hero */}
      <div className="flex flex-col md:flex-row md:items-center gap-10 mb-16 animate-fade-in-up">
        <div className="w-full md:w-[360px] shrink-0">
          <FlipPortraitToggle />
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#05070D] mb-3">
            About
          </h1>
          <p className="text-lg text-[#0A7BFF] font-medium mb-2">Duc (Daniel) Ngo</p>
          <p className="text-[#5A2E12] text-base leading-relaxed max-w-xl">
            Senior Data / Business Intelligence Analyst at TORILAB · Hanoi, Vietnam.
            Connecting analytics, BI, and AI to help teams make better decisions.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="https://stillhereduc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#5A2E12] border border-[#D8DFEA] px-3 py-1.5 rounded-full hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
            >
              ✍️ Substack
            </a>
            <a
              href="https://www.youtube.com/@ducducngo98977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#5A2E12] border border-[#D8DFEA] px-3 py-1.5 rounded-full hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
            >
              🎹 YouTube (Piano)
            </a>
            <a
              href="https://linkedin.com/in/duc-minh-ngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#5A2E12] border border-[#D8DFEA] px-3 py-1.5 rounded-full hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2">
          <div className="prose prose-slate max-w-none space-y-5 text-[#05070D] text-base leading-relaxed">
            <p>
              I&apos;m Duc, though I also go by Daniel. I&apos;m a data and BI analyst
              who enjoys turning messy business questions into systems that people can
              actually use.
            </p>
            <p>
              My work sits between analytics, product thinking, and business
              communication: defining metrics, building dashboards, validating data,
              creating models, and explaining what the numbers mean. Recently, I&apos;ve
              worked on Looker and LookML dashboards on GCP, product event tracking,
              executive business reporting, and AI-powered data workflows.
            </p>
            <p>
              Before TORILAB, I led an AI R&D team at VNDIRECT, where we built
              production-grade PDF extraction models and LLM-based sentiment analysis
              tools for financial customers. Before that, I worked as a Marketing Data
              Analyst at In4mation Insights in Massachusetts, where I built forecasting
              models for retail transaction data and presented insights directly to
              stakeholders.
            </p>
            <p>
              I studied Data Science at Macalester College in Saint Paul, Minnesota,
              with a Computer Science minor. I graduated with a 3.9 GPA and won Best
              In-Show and Best Insight at the 2022 DataFest Competition.
            </p>
            <p>
              Outside of work, I like exploring visualization challenges, reading, and
              building small projects that help me understand data from different angles.
              I also play piano. You can find my recordings on{" "}
              <a
                href="https://www.youtube.com/@ducducngo98977"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A7BFF] hover:underline"
              >
                YouTube
              </a>
              .
            </p>
          </div>

          {/* What I care about */}
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-5">
              What I care about
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Analytics systems, not just reports",
                  desc: "I think the best analytics work creates infrastructure: semantic layers, tracking frameworks, and reliable pipelines. Not one-off answers.",
                },
                {
                  title: "Business clarity through data",
                  desc: "I care about making data useful for the people who make decisions, not just the people who analyze it. That means simplicity, storytelling, and context.",
                },
                {
                  title: "Honest measurement",
                  desc: "I'm skeptical of metrics that look good but don't measure anything real. I try to define metrics that are actionable, not just trackable.",
                },
                {
                  title: "Continuous learning",
                  desc: "BI, AI, and data are all moving fast. I read, experiment, and build side projects to stay current and build genuine understanding.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-[#D8DFEA] bg-white card-hover"
                >
                  <h3 className="font-semibold text-[#05070D] text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5A2E12] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education with graduation photos */}
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-5">
              Education
            </h2>
            <div className="space-y-6">
              <div className="border border-[#D8DFEA] rounded-xl bg-white p-6">
                <p className="font-semibold text-[#05070D]">Macalester College</p>
                <p className="text-[#0A7BFF] text-sm">
                  Data Science Major, Computer Science Minor
                </p>
                <p className="text-xs text-[#5A2E12] mt-1">
                  Saint Paul, Minnesota · August 2018 – May 2022
                </p>
                <ul className="mt-4 space-y-1 text-sm text-[#5A2E12]">
                  <li>GPA: 3.9 / 4.0</li>
                  <li>Best In-Show & Best Insight, 2022 DataFest Competition</li>
                  <li>#1, May 2021 Kaggle Tabular Playground</li>
                </ul>

                <EducationPhotos
                  photos={[
                    {
                      src: "/images/graduation-1.jpg",
                      alt: "Duc at Macalester College graduation",
                      caption: "Graduation Day · Macalester College, 2022",
                    },
                    {
                      src: "/images/graduation-2.jpg",
                      alt: "Duc graduating from Macalester",
                      caption: "Commencement · Data Science, Class of 2022",
                    },
                    {
                      src: "/images/macalester-pic1.jpeg",
                      alt: "Duc with Macalester friends at dinner",
                      caption: "Macalester College · with friends",
                    },
                    {
                      src: "/images/macalester-group.jpeg",
                      alt: "Duc with Macalester classmates",
                      caption: "With friends at Macalester",
                    },
                  ]}
                />
              </div>

              <div className="border border-[#D8DFEA] rounded-xl bg-white p-6">
                <p className="font-semibold text-[#05070D]">
                  Hanoi-Amsterdam High School for the Gifted
                </p>
                <p className="text-[#0A7BFF] text-sm">Mathematics Specialized Class</p>
                <p className="text-xs text-[#5A2E12] mt-1">
                  Hanoi, Vietnam · August 2011 – May 2018
                </p>

                <EducationPhotos
                  gridClassName="grid grid-cols-1 sm:max-w-xs gap-3 mt-6"
                  photos={[
                    {
                      src: "/images/amsterdam-hs.jpg",
                      alt: "Duc at Hanoi-Amsterdam High School",
                      caption: "Hanoi-Amsterdam High School · Class of 2018",
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Piano / outside life */}
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-5">
              Outside of analytics
            </h2>
            <ul className="space-y-2 mb-8">
              {interests.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#05070D]">
                  <span className="text-[#0A7BFF] mt-0.5">→</span>
                  {i}
                </li>
              ))}
            </ul>

            {/* Piano photo */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md img-zoom">
              <Image
                src="/images/piano.jpg"
                alt="Duc playing piano"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm font-medium">Playing piano</p>
                <a
                  href="https://www.youtube.com/@ducducngo98977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-xs hover:text-white transition-colors"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-5">
              Get in touch
            </h2>
            <p className="text-[#5A2E12] text-sm leading-relaxed mb-5">
              I&apos;m open to thoughtful conversations about data, analytics, and interesting
              problems. The best way to reach me is by email.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ducminhngo871@gmail.com"
                className="bg-[#0A7BFF] text-white px-5 py-2.5 rounded-lg text-sm font-medium btn-press"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/duc-minh-ngo/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8DFEA] text-[#05070D] px-5 py-2.5 rounded-lg text-sm font-medium hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ducminhngo871"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8DFEA] text-[#05070D] px-5 py-2.5 rounded-lg text-sm font-medium hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://stillhereduc.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D8DFEA] text-[#05070D] px-5 py-2.5 rounded-lg text-sm font-medium hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors"
              >
                Substack
              </a>
            </div>
          </section>
        </div>

        {/* Sidebar: Skills */}
        <aside className="space-y-6">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#05070D] mb-5">
              Skills
            </h2>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-[#F5F7FA] border border-[#D8DFEA] text-[#05070D] px-2 py-1 rounded hover:border-[#0A7BFF] hover:text-[#0A7BFF] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-[#D8DFEA]">
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-3">
              Certifications
            </p>
            <ul className="space-y-2 text-sm text-[#05070D]">
              <li>Google Professional Data Analytics</li>
              <li>Machine Learning with Python</li>
              <li>Analyze Data with SQL</li>
            </ul>
          </div>

          {/* Quick nav */}
          <div className="mt-6 pt-6 border-t border-[#D8DFEA]">
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-3">
              Explore the site
            </p>
            <ul className="space-y-2">
              {[
                { href: "/work", label: "Work & Case Studies" },
                { href: "/projects", label: "Projects" },
                { href: "/writing", label: "Writing & Notes" },
                { href: "/resume", label: "Resume" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#0A7BFF] hover:underline link-underline"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="mt-6 pt-6 border-t border-[#D8DFEA]">
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-3">
              Find me online
            </p>
            <ul className="space-y-2">
              {[
                { href: "https://stillhereduc.substack.com/", label: "Substack (writing & stories)" },
                { href: "https://www.youtube.com/@ducducngo98977", label: "YouTube (piano)" },
                { href: "https://github.com/ducminhngo871", label: "GitHub" },
                { href: "https://linkedin.com/in/duc-minh-ngo/", label: "LinkedIn" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
