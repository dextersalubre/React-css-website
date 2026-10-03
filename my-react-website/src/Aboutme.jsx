import dex from "./dex.jpg";

function Aboutme() {
  return (
    <section id="about" className="scroll-mt-4 bg-blush text-blush-soft">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:gap-14 md:py-24">
        <div>
          <h2 className="font-display text-5xl font-bold tracking-tighter text-blush-ink md:text-6xl">
            About Me
          </h2>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-blush-ink md:text-4xl">
            I'm Dexter Kint A. Salubre
          </h3>
          <p className="mt-2 text-xl">a third year BSIT student</p>
        </div>
        <img
          src={dex}
          alt="Dexter wearing a headset with a mic while gaming"
          className="aspect-3/2 w-full rounded-2xl object-cover md:order-first"
        />
      </div>
    </section>
  );
}

export default Aboutme;