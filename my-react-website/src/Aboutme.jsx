import dex from "./dex.jpg";
function Aboutme() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <h2>I'm Dexter Kint A. Salubre
        <p>a third year bsit student</p>
      </h2>
      <img src={dex} alt="Dexter Kint A. Salubre" width="200" />
    </section>
  );
}

export default Aboutme;