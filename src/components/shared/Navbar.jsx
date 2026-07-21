import { Button } from "@/components/ui/button"


const navItems = [
  { label: "Home", href: "#" },
  { label: "All Applications", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
]

const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Part 1: Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">CareerTrack Lite</span>
        </a>

        {/* Part 2: Menu  */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Part 3: Auth buttons cursor-pointer */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="cursor-pointer">Login</Button>
          <span className="text-sm text-muted-foreground">or</span>
          <Button className="cursor-pointer">Sign up</Button>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;