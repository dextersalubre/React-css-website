import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Aboutme from "./Aboutme.jsx";
import Hobbies from "./Hobbies.jsx";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Aboutme />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;