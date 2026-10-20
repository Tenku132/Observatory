// @doc ABOUT-WINDOW
// Pinned profile header (stays visible) and scrolling content.

export function AboutWindowHeader() {
  return (
    <section className="flex items-center gap-4 px-6 py-4">
      <div
        role="img"
        aria-label="Temporary profile avatar for Ian Diaz"
        className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-retro-border bg-retro-surface font-pixel text-xl text-retro-cyan"
      >
        ID
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-widest text-[#B99CF6]">
          DEVELOPER PROFILE
        </p>
        <h3 className="mt-1 font-pixel text-lg text-retro-green">Ian Diaz</h3>
        <p className="text-sm leading-5 text-slate-200">Full-Stack Developer</p>
        <p className="mt-1 text-xs leading-5 text-retro-cyan">
          React · TypeScript · Laravel
        </p>
      </div>
    </section>
  )
}

export function AboutWindowContent() {
  return (
    <div className="space-y-6">
      {/* @doc ABOUT-INTRODUCTION */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">INTRODUCTION</h3>
        <p>
          Welcome to my digital universe. I'm a developer interested in building
          useful applications and creating clear, accessible interfaces.
        </p>
        <p className="text-slate-300">
          This is temporary content. My final introduction, background, and
          professional experience will go here.
        </p>
      </section>

      {/* @doc ABOUT-DEVELOPMENT-FOCUS */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">
          DEVELOPMENT FOCUS
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Frontend interface development</li>
          <li>Backend and API integration</li>
          <li>Database-driven applications</li>
          <li>Reusable and maintainable code</li>
        </ul>
      </section>

      {/* @doc ABOUT-BACKGROUND */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">BACKGROUND</h3>
        <p>
          This section will introduce my development journey, relevant
          experience, education, and contributions to projects.
        </p>
      </section>

      {/* @doc ABOUT-GOALS */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">FUTURE GOALS</h3>
        <p>
          Continue improving my full-stack skills, build practical applications,
          and create well-documented projects that demonstrate my abilities.
        </p>
        <p className="text-slate-300">
          Additional content is included to test scrolling while the profile
          remains visible.
        </p>
        <p className="text-slate-300">
          As this portfolio grows, this area can contain more detail about my
          experience and approach to development.
        </p>
      </section>
    </div>
  )
}
