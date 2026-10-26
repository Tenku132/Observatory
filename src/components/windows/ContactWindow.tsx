import { profile } from '../../data/profile'
import Card from '../ui/Card'
import ExternalLink from '../ui/ExternalLink'

// @doc CONTACT-WINDOW
function ContactWindow() {
  return (
    <div className="space-y-5">
      <p>
        I’m open to entry-level full-stack opportunities and happy to talk about
        web projects. Email is the best way to reach me.
      </p>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">EMAIL</h3>
        <p>
          <ExternalLink href={`mailto:${profile.email}`} newTab={false}>
            {profile.email}
          </ExternalLink>
        </p>
      </Card>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">LINKEDIN</h3>
        <p>
          <ExternalLink href={profile.linkedin}>
            linkedin.com/in/ibdiaz
          </ExternalLink>
        </p>
      </Card>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">GITHUB</h3>
        <p>
          <ExternalLink href={profile.github}>github.com/Tenku132</ExternalLink>
        </p>
      </Card>

      <Card>
        <h3 className="font-pixel text-sm text-retro-cyan">OPPORTUNITIES</h3>
        <p>
          Entry-level full-stack developer roles (Laravel, React, and
          TypeScript) and collaborations on web projects. Based in{' '}
          {profile.location}.
        </p>
      </Card>
    </div>
  )
}

export default ContactWindow
