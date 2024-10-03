import NavBar from "./NavBar/NavBar";
import Hero from "./Home/Hero";
import Discover from "./Home/Discover";
import About from "./Home/About";
import Form from "./Home/Form";
import Footer from "./NavBar/Footer";
import bgImg_1 from "./assets/bg-1.png";


function Home() {
  return (
    <>
      <div>
        <main style={{'--image-url': `url(${bgImg_1})`}} className='bg-[image:var(--image-url)] bg-fixed'>
          <nav>
            {" "}
            <NavBar />{" "}
          </nav>

          <header>
          <About/>

          </header>

          {/*Discover section*/}
          <section>
          </section>

          {/*About section*/}
          <section>
          </section>

          {/*Form section*/}
          <section>
          </section>

          <footer className="bg-gray-900">
            <Footer/>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Home;
