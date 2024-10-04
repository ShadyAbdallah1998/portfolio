import Container from "../Container/Container";

import TicTac from "../TicTac/TicTac";
import "./header.css";
function Header() {
  return (
    <header className="py-10" id="home">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-7 lg:my-[200px]">
          <section className="text-left">
            <h1 className="text-[35px] lg:text-[50px] font-bold">
              <span className="animate-wobble relative inline-block max-w-24">
                <span>✌🏻</span>
              </span>
              Hi, I’m <span className="text-blue">Shady Abdallah</span>
            </h1>
            <div className="text-[25px] lg:text-[40px] mb-5 font-bold">
              A <span className="text-blue">Front-End </span>
              Developer
            </div>
            <p className="mb-7 text-lg">
              Hello, I am passionate about programming and creating
              user-friendly interfaces. I decided to pursue frontend development
              to pursue this interest and have been continuously learning and
              improving my skills ever since.
            </p>
            <button
              className="py-5 bg-blue text-white font-bold w-full text-[18px]"
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
            >
              Contact Me
            </button>
          </section>
          <TicTac />
        </div>
      </Container>
    </header>
  );
}

export default Header;
