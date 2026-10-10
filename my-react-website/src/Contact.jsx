import { useState } from "react";

const field =
    "w-full rounded-lg border border-line bg-heading/5 px-4 py-3 text-heading placeholder:text-muted focus:border-accent focus:outline-none";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const reset = () => {
    setForm({ name: "", email: "", message: "" });
    setSent(false);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="mb-8 font-display text-5xl font-bold tracking-tighter text-heading md:text-6xl">
        Contact
      </h2>

      {sent ? (
        <div className="max-w-xl rounded-xl border border-line p-6">
          <p className="font-display text-2xl font-semibold text-heading">
            Thanks, {form.name}!
          </p>
          <p className="mt-2">Your message has been sent.</p>
          <button
            onClick={reset}
            className="mt-6 rounded-lg bg-blush px-5 py-2 font-semibold text-blush-ink transition-opacity hover:opacity-90"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-muted">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-muted">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Say something..."
              className={field}
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-lg bg-blush px-6 py-3 font-semibold text-blush-ink transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;