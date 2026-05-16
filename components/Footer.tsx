export default function Footer() {
  return (
    <footer className="border-t border-[#D8DFEA] bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#5A2E12]">Duc (Daniel) Ngo</p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="mailto:ducminhngo871@gmail.com"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/duc-minh-ngo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ducminhngo871"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            GitHub
          </a>
          <a
            href="https://stillhereduc.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            Substack
          </a>
          <a
            href="https://www.youtube.com/@ducducngo98977"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            YouTube
          </a>
          <a
            href="/resume"
            className="text-sm text-[#5A2E12] hover:text-[#0A7BFF] transition-colors link-underline"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
