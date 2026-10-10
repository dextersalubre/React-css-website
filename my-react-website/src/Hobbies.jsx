import spoti from "./spoti.png";
import dex from "./dex.jpg";
import tourna from "./tourna.jpg";

const hobbies = [
  {
    title: "Listening to music",
    text: "im just bed rotting i always listen to music",
    image: spoti,
    alt: "Frank Ocean",
    caption: "Playing when I took this: White Ferrari by Frank Ocean",
    border: true,
  },
  {
    title: "Gaming",
    text: "I love to play games and engage in esports",
    image: tourna,
    alt: "gaming",
  },
];

function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-4">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-8 font-display text-5xl font-bold tracking-tighter text-heading md:mb-10 md:text-6xl">
          Hobbies
        </h2>

        <div className="flex flex-col gap-16">
          {hobbies.map((hobby, index) => {
            const flipped = index % 2 === 1;
            return (
              <article
                key={hobby.title}
                className={`grid items-center gap-8 md:gap-14 ${
                  flipped ? "md:grid-cols-[1.5fr_1fr]" : "md:grid-cols-[1fr_1.5fr]"
                }`}
              >
                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight text-heading md:text-3xl">
                    {hobby.title}
                  </h3>
                  <p className="max-w-[36ch]">{hobby.text}</p>
                </div>
                <figure className={flipped ? "md:order-first" : ""}>
                  <img
                    src={hobby.image}
                    alt={hobby.alt}
                    className={`w-full rounded-xl ${hobby.border ? "border border-line" : ""}`}
                  />
                  {hobby.caption && (
                    <figcaption className="mt-3 text-sm text-muted">
                      {hobby.caption}
                    </figcaption>
                  )}
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;