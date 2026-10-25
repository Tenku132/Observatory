import Card from '../ui/Card'

// @doc CONTACT-WINDOW
function ContactWindow() {
  return (
    <div className="space-y-5">
      <p>
        Have a project in mind or want to discuss a development opportunity?
        This section will contain the best ways to reach me.
      </p>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">EMAIL</h3>
        <p className="text-slate-300">
          Your public email address will go here.
        </p>
      </Card>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">GITHUB</h3>
        <p className="text-slate-300">
          Add your public GitHub profile and selected repositories here.
        </p>
      </Card>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">OPPORTUNITIES</h3>
        <p>Add the roles, collaborations, or projects you are interested in.</p>
      </Card>
    </div>
  )
}

export default ContactWindow
