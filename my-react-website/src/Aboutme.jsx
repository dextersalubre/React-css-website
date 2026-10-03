import dex from "./dex.jpg";
function Aboutme() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <img src={dex} alt="Dexter Kint A. Salubre" className="dex" />
      <h2>I'm Dexter Kint A. Salubre
        <p>a third year bsit student</p>
      </h2>
    </section>
  );
}

export default Aboutme;