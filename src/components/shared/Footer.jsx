import { useState } from "react"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const serviceLinks = ["Find Jobs +", "Applications", "Our Process", "Referral Program"]
const companyLinks = ["About Us", "Resources", "Contact", "Blog"]

const socials = [
  { label: "Dribbble", Icon: 'Dr' },
  { label: "LinkedIn", Icon: <FaLinkedinIn /> },
  { label: "Instagram", Icon: <FaInstagram /> },
  { label: "Twitter", Icon: <FaXTwitter /> },
]

function LinkColumn({ items }) {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="text-sm text-neutral-300 transition-colors hover:text-neutral-50"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  )
}


const Footer = () => {
   const [email, setEmail] = useState("")

  return (
    <footer className="w-full px-4 py-10">
      <div className="mx-auto rounded-3xl bg-neutral-950 p-8 md:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_auto_1.6fr_auto_auto]">
          {/* Brand + newsletter */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-800 text-xs font-semibold text-neutral-100">
                CT
              </span>
              <span className="text-sm font-medium leading-tight text-neutral-100">
                CareerTrack
                <br />
                Lite
              </span>
            </div>

            <h2 className="text-pretty text-2xl font-medium leading-tight text-neutral-100">
              Ambitious careers
              <br />
              <span className="text-neutral-500">for ambitious people.</span>
            </h2>

            <p className="mt-8 mb-3 text-sm text-neutral-300">Subscribe to our newsletter</p>
            <form
              className="flex items-center justify-between gap-2 rounded-full border border-neutral-700 py-1.5 pl-4 pr-1.5"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-sm text-neutral-100 transition-colors hover:bg-neutral-700"
              >
                <span aria-hidden="true">{"\u2197"}</span>
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden w-px bg-neutral-800 lg:block" aria-hidden="true" />

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16 lg:pt-1">
            <LinkColumn items={serviceLinks} />
            <LinkColumn items={companyLinks} />
          </div>

          {/* Divider */}
          <div className="hidden w-px bg-neutral-800 lg:block" aria-hidden="true" />

          {/* Socials */}
          <div className="flex gap-3 lg:flex-col lg:pt-1">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-medium text-neutral-300 ring-1 ring-neutral-800 transition-colors hover:bg-neutral-800 hover:text-neutral-50"
              >
                <span aria-hidden="true">{Icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;