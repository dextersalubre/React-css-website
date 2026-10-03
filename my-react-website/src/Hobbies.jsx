import spoti from "./spoti.png";

function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-4">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-8 font-display text-5xl font-bold tracking-tighter text-heading md:mb-10 md:text-6xl">
          Hobbies
        </h2>

        <article className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr] md:gap-14">
          <div>
            <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight text-heading md:text-3xl">
              Listening to music
            </h3>
            <p className="max-w-[36ch]">
              when im just bed rotting i always listen to music
            </p>
          </div>
          <figure>
            <img
              src={spoti}
              alt="Spotify desktop app playing White Ferrari by Frank Ocean"
              className="w-full rounded-xl border border-line"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Playing when I took this: White Ferrari by Frank Ocean
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default Hobbies;