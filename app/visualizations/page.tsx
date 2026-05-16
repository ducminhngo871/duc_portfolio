import type { Metadata } from "next";
import ProjectsList, { type ProjectCard } from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Projects | Duc (Daniel) Ngo",
  description:
    "Academic and personal projects in machine learning, finance, sports analytics, geospatial visualization, and 3D terrain maps.",
};

const projects: ProjectCard[] = [
  {
    title: "Soccer Spatial Analysis",
    date: "March 2022 – May 2022",
    tools: ["R", "ggsoccer", "gganimate", "Wyscout"],
    tags: ["R", "Sports", "Animation"],
    summary: "Academic Project: 5 European Leagues",
    insight:
      "Built 100+ animated graphs displaying passing tendencies, key passes and assists, and position zones for every match in five major European leagues in 2018.",
    color: "#F0F9FF",
    image: "/images/soccer-analysis.png",
    link: "https://nolan-meyer.github.io/correlated_capstone_proj/",
  },
  {
    title: "S&P 500 Stock Picking with ML",
    date: "March 2022 – May 2022",
    tools: ["Python", "Matplotlib", "Lasso", "Random Forest"],
    tags: ["Python", "Finance", "Machine Learning"],
    summary: "Academic Project: 47.35% return in 2021",
    insight:
      "Visualized feature importance, return distributions, and model comparisons for a machine learning stock-picking workflow that outperformed the S&P 500 by 21% in 2021.",
    color: "#F5F7FA",
    image: "/images/stock-ml.png",
    link: "https://sp500predictionprofit.netlify.app/",
  },
  {
    title: "Bayesian Corporate Earnings Forecasting",
    date: "October 2021 – December 2021",
    tools: ["R", "Bayesian Modeling", "SARIMA", "bayesforecast"],
    tags: ["R", "Finance"],
    summary: "Academic Project: S&P 500 Earnings",
    insight:
      "Applied Bayesian hierarchical models and SARIMA to forecast S&P 500 company earnings, exploring how prior information improves prediction intervals.",
    color: "#FDF4FF",
    image: "/images/bayesian-forecast.png",
    link: "https://nolan-meyer.github.io/bayesian-finance/",
  },
  {
    title: "Rayshader 3D Terrain Maps",
    date: "March 2021 – May 2021",
    tools: ["R", "Rayshader", "OpenTopography"],
    tags: ["R", "Maps"],
    summary: "3D terrain rendering exploration",
    insight:
      "Explored rayshader's capabilities for 2D/3D data visualization in R, combining elevation data with raytracing, spherical texture mapping, and ambient occlusion to generate topographic maps.",
    color: "#FFF7ED",
    image: "/images/rayshader.png",
    link: "https://rayshader.netlify.app/",
  },
  {
    title: "Stock Change Before and After the Pandemic",
    date: "September 2020 – December 2020",
    tools: ["R", "Finance", "Data Visualization", "S&P 500"],
    tags: ["R", "Finance"],
    summary: "Academic Project: S&P 500 sector comparison",
    insight:
      "Compared the top three companies across every S&P 500 sector before and after COVID-19, tracking market capitalization, trading volume, and price per share to see which companies and sectors thrived or fell after the pandemic.",
    color: "#EFF6FF",
    image: "/images/stock-pandemic.png",
    link: "https://data-science-final-project.netlify.app/",
  },
];

const filterTags = [
  "All",
  "R",
  "Python",
  "Finance",
  "Machine Learning",
  "Sports",
  "Maps",
  "Animation",
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-14">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#05070D] mb-6">
          Projects
        </h1>
        <p className="text-lg text-[#5A2E12] leading-relaxed mb-3">
          Academic and personal projects where I explore machine learning, finance,
          sports analytics, geospatial work, and analytical storytelling.
        </p>
        <p className="text-base text-[#5A2E12] leading-relaxed">
          Each row highlights the project context, the tools used, and the main idea
          behind the work. Tap a tag below to filter.
        </p>
      </div>

      <ProjectsList projects={projects} filterTags={filterTags} />

      <div className="mt-16 p-8 rounded-2xl border border-dashed border-[#D8DFEA] text-center">
        <p className="text-[#5A2E12] text-sm">
          More projects coming soon as I keep adding polished analyses and experiments.
        </p>
      </div>
    </div>
  );
}
