const sectionClass =
  'space-y-2 border border-retro-border bg-retro-surface/30 p-4'

// @doc CONTACT-WINDOW
function ContactWindow() {
  return (
    <div className="space-y-5">
      <p>
        Have a project in mind or want to discuss a development opportunity?
        This section will contain the best ways to reach me.
      </p>

      <section className={sectionClass}>
        <h3 className="font-pixel text-sm text-retro-cyan">EMAIL</h3>
        <p className="text-slate-300">
          Your public email address will go here.
        </p>
      </section>

      <section className={sectionClass}>
        <h3 className="font-pixel text-sm text-retro-cyan">GITHUB</h3>
        <p className="text-slate-300">
          Add your public GitHub profile and selected repositories here.
        </p>
      </section>

      <section className={sectionClass}>
        <h3 className="font-pixel text-sm text-retro-cyan">OPPORTUNITIES</h3>
        <p>Add the roles, collaborations, or projects you are interested in.</p>
      </section>
    </div>
  )
}

export default ContactWindow
