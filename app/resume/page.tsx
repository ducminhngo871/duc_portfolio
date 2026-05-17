import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Duc (Daniel) Ngo",
  description:
    "Resume for Duc (Daniel) Ngo, Senior Data / Business Intelligence Analyst.",
};

const experience = [
  {
    company: "TORILAB",
    role: "Senior Data / Business Intelligence Analyst",
    period: "March 2025 – Present",
    location: "Hanoi, Vietnam",
    bullets: [
      "Spearheaded the development of 15+ dynamic Looker dashboards and LookML models on GCP by leveraging complex SQL queries and Python scripts to automate core BI workflows, slashing report preparation time by 80%.",
      "Orchestrated bi-weekly business reporting, presenting to C-suites and senior stakeholders on marketing performance, revenue impact, and AI market trends, driving a 15% uplift in marketing ROI and 50% increase in DAU.",
      "Championed end-to-end event tracking for 60+ features by defining key metrics with design, aligning development instrumentation, and validating GCP data into LookML dashboards, boosting feature-adoption visibility by 40%.",
    ],
  },
  {
    company: "VNDIRECT",
    role: "Team Leader AI - R&D",
    period: "February 2024 – March 2025",
    location: "Hanoi, Vietnam",
    bullets: [
      "Led a team of 5 members to tackle pressing issues in AI model development, ensuring timely delivery of high-quality solutions by fostering a collaborative and innovative team environment.",
      "Achieved a 95% accuracy rate in developing a Word Detection from PDF Model, extracting key information while increasing extraction speed by 90% and reducing error rates by 25% using PaddleOCR and PyMuPDF.",
      "Developed a stock sentiment model using LLM, attaining 90% accuracy and providing a comprehensive view based on forum user sentiment, offering a broader perspective on the overall market for customers.",
    ],
  },
  {
    company: "In4mation Insights",
    role: "Marketing Data Analyst",
    period: "July 2022 – November 2023",
    location: "Needham, Massachusetts, USA",
    bullets: [
      "Employed predictive transaction data to deliver a comprehensive cost analysis of a new loyalty payment program, facilitating informed decision-making strategy.",
      "Built an interactive Python script to predict future transactions for 10,000+ stores with 90% accuracy, optimizing machine learning models through extensive EDA using Python and SQL of 1M+ historical transactions from 2020 to 2022.",
      "Presented actionable data-driven insights to stakeholders during weekly and monthly meetings, offering valuable guidance on dataset selection and playing a key role in driving substantial project improvements.",
    ],
  },
];

const projects = [
  {
    title: "Stock Picking with Machine Learning",
    team: "Team of 3",
    bullets: [
      "Achieved a rate of return of 47.35% in 2021 for the top 20 highest companies, 21% higher than the S&P 500, using Lasso, Random Forest, and Stacking methods.",
      "Constructed a complete financial dataset for S&P 500 companies from 1999 to 2021 from Yahoo Finance using Selenium, BeautifulSoup, and multiprocessing.",
    ],
  },
  {
    title: "Soccer Spatial Analysis",
    team: "Team of 3",
    bullets: [
      "Built spatial analysis of passing tendencies using linear mixed-effects and global slopes models for five major European leagues in 2018 using the Wyscout dataset.",
      "Created 100+ animated graphs displaying passing tendencies, key passes and assists, and position zones for every match using ggsoccer and gganimate.",
    ],
  },
];

const skills = {
  Languages: "SQL, Python, LookML, Looker, R Studio, Power BI, Tableau, Java",
  "Frameworks & Tools": "Azure Databricks, GCP, BigQuery, Pandas, XGBoost, CatBoost, Matplotlib, BeautifulSoup",
  Certifications: "Google Professional Data Analytics, Machine Learning with Python, Analyze Data with SQL",
};

const RESUME_DRIVE_FILE_ID = "1dWvZtEEq3JHbZKd-qx45kmB24rlWsqUw";
const RESUME_DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/19AXPcVM8b1pyYCRckwlrnlWafOgEk21E?usp=drive_link";
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/view?usp=drive_link`;

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#05070D] mb-2">
            Resume
          </h1>
          <p className="text-[#5A2E12]">
            Senior Data / Business Intelligence Analyst
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 self-start">
          <a
            href={RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A7BFF] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0646B8] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1v9M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF
          </a>
          <a
            href={RESUME_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-[#0A7BFF] hover:underline"
          >
            Preview on Drive →
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Main resume */}
        <div className="md:col-span-2 space-y-12">
          {/* Experience */}
          <section>
            <h2 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-6 pb-2 border-b border-[#D8DFEA]">
              Work Experience
            </h2>
            <div className="space-y-10">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <p className="font-semibold text-[#05070D]">{job.role}</p>
                      <p className="text-[#0A7BFF] text-sm font-medium">{job.company}</p>
                      <p className="text-xs text-[#5A2E12]">{job.location}</p>
                    </div>
                    <span className="text-xs text-[#5A2E12] shrink-0 md:text-right">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#05070D] leading-relaxed">
                        <span className="text-[#0A7BFF] mt-1 shrink-0">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-6 pb-2 border-b border-[#D8DFEA]">
              Projects
            </h2>
            <div className="space-y-8">
              {projects.map((proj) => (
                <div key={proj.title}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="font-semibold text-[#05070D]">{proj.title}</p>
                    <span className="text-xs text-[#5A2E12]">{proj.team}</span>
                  </div>
                  <ul className="space-y-2">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#05070D] leading-relaxed">
                        <span className="text-[#0A7BFF] mt-1 shrink-0">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-4 pb-2 border-b border-[#D8DFEA]">
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-[#05070D]">
              <li>
                <a href="mailto:ducminhngo871@gmail.com" className="hover:text-[#0A7BFF] transition-colors">
                  ducminhngo871@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/duc-minh-ngo/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A7BFF] transition-colors">
                  linkedin.com/in/duc-minh-ngo
                </a>
              </li>
              <li>
                <span className="text-[#5A2E12]">(+84) 812-458-898</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-4 pb-2 border-b border-[#D8DFEA]">
              Education
            </h2>
            <p className="font-semibold text-[#05070D] text-sm">Macalester College</p>
            <p className="text-xs text-[#0A7BFF]">Data Science, CS Minor</p>
            <p className="text-xs text-[#5A2E12]">2018 – 2022 · GPA 3.9</p>
            <ul className="mt-3 space-y-1 text-xs text-[#5A2E12]">
              <li>Best In-Show & Best Insight, 2022 DataFest</li>
              <li>#1 May 2021 Kaggle Tabular Playground</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-semibold text-[#5A2E12] uppercase tracking-widest mb-4 pb-2 border-b border-[#D8DFEA]">
              Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-medium text-[#5A2E12] mb-1">{label}</p>
                  <p className="text-xs text-[#05070D] leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download CTA again */}
          <div className="p-5 rounded-xl bg-[#F5F7FA] border border-[#0A7BFF]/20">
            <p className="text-sm text-[#0A7BFF] font-medium mb-3">
              Want the full PDF?
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={RESUME_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm bg-[#0A7BFF] text-white px-4 py-2 rounded-lg hover:bg-[#0646B8] transition-colors"
              >
                Download resume
              </a>
              <a
                href={RESUME_DRIVE_FOLDER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#0A7BFF] hover:underline text-center"
              >
                Browse the resume folder →
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
