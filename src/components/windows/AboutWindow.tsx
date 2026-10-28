import { profile } from '../../data/profile'

// @doc ABOUT-WINDOW
// Pinned profile header (stays visible) and scrolling content.

export function AboutWindowHeader() {
  return (
    <section className="flex items-center gap-4 px-6 py-4">
      <img
        src={profile.avatar}
        alt={`Portrait of ${profile.fullName}`}
        width={80}
        height={80}
        decoding="async"
        className="h-20 w-20 shrink-0 border-2 border-retro-border bg-retro-surface object-cover object-top"
      />
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-widest text-nebula">
          DEVELOPER PROFILE
        </p>
        <h3 className="mt-1 font-pixel text-lg text-retro-green">
          {profile.fullName}
        </h3>
        <p className="text-sm leading-5 text-slate-200">{profile.title}</p>
        <p className="mt-1 text-xs leading-5 text-retro-cyan">
          {profile.stack.join(' · ')}
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          {profile.location}
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
          Hi, I’m Ian, an entry-level full-stack developer and 2026 BSIT
          graduate (Web and Mobile Application) from FEU Alabang. I build web
          applications with Laravel on the back end and React and TypeScript on
          the front end, and I care about interfaces that are clear, accessible,
          and easy to maintain.
        </p>
      </section>

      {/* @doc ABOUT-DEVELOPMENT-FOCUS */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">
          DEVELOPMENT FOCUS
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Full-stack web applications with Laravel, React, and TypeScript
          </li>
          <li>
            Role-based access, authentication, and secure back-end features
          </li>
          <li>Accessible, tested, and maintainable interfaces</li>
          <li>Clear documentation and clean pull request workflows</li>
        </ul>
      </section>

      {/* @doc ABOUT-BACKGROUND */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">BACKGROUND</h3>
        <p>
          My capstone, NutriApp, was a web and Android marketplace that lets
          smallholder farmers in CALABARZON sell directly to buyers. I co-led
          its development in a four-person team, owning the back end and helping
          with the front end.
        </p>
        <p>
          In 2026 I interned at Lamina Studios (Thumbworx) as a web developer,
          building Laravel back-end features and React and TypeScript interfaces
          for a logistics platform. I also hold the Information Technology
          Specialist: Python certification from Certiport.
        </p>
      </section>

      {/* @doc ABOUT-GOALS */}
      <section className="space-y-2">
        <h3 className="font-pixel text-sm text-retro-cyan">WHAT’S NEXT</h3>
        <p>
          I’m looking for an entry-level full-stack role where I can learn from
          an experienced team, ship real features, and take on larger parts of a
          system over time.
        </p>
        <p>
          Meanwhile, I’m planning a cleaner, improved version of NutriApp, and I
          built this portfolio from scratch to practice accessibility, testing,
          and automated checks.
        </p>
      </section>
    </div>
  )
}
