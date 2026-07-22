import heroImg from './../../assets/Man-working.webp'

export default function Hero() {
  return (
    <section className="mx-auto w-7/12 my-10 overflow-hidden rounded-3xl bg-linear-to-br from-stone-100 to-stone-200 px-6 pt-6 font-sans sm:px-10">

      {/* Content */}
      <div className="flex flex-col-reverse items-center gap-5 md:flex-row">
        <div className="flex-1 pb-10">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-emerald-950 sm:text-5xl">
            CareerTrack Lite <br /> that help you <br /> track jobs
          </h1>

          <p className="mb-8 max-w-sm leading-relaxed text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <form
            className="flex max-w-md items-center gap-2 rounded-full bg-white p-2 shadow-xl"
          >
            <div className="flex-1 px-4 py-1.5">
              <label htmlFor="email" className="mb-0.5 block text-xs text-neutral-400">
                Your email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="samantha@email.com"
                className="w-full font-semibold text-emerald-950 outline-none placeholder:text-neutral-400"
              />
            </div>
            <button
              type="submit"
              className="whitespace-nowrap cursor-pointer rounded-full bg-emerald-950 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-900"
            >
              Get Started
            </button>
          </form>
        </div>

        <div className="flex flex-1 justify-end">
          <img
            src={heroImg}
            alt="Person searcing for jobs"
            className="w-full max-w-lg rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}