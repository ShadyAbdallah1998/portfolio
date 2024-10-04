import Container from "../Container/Container";
import SectionHeader from "../SectionHeader/SectionHeader";

import Author from "../../assets/images/about/author.png";

function About() {
  return (
    <section className="py-10" id="about">
      <Container>
        <SectionHeader number="01" title="About">
          <div className="py-10 lg:flex items-center justify-between gap-x-5">
            <div className="my-10 mx-auto max-w-[400px] lg:w-1/2 lg:max-w-[500px] lg:mr-auto">
              <img className="w-full" src={Author} alt="author" />
            </div>
            <div className="text-[20px] lg:text-[22px] text-dark lg:w-1/2">
              I am a full stack developer with a strong background in technology
              and a passion for building web applications. After completing my
              full stack web development studies (MEARN stack) at ITI,I honed my
              skills in both frontend and backend development.I am proficient in
              three languages: Arabic, English, and German, and bring additional
              creative expertise through my experience in 3D
              animation/modeling.I also enjoy drawing as a hobby, which enhances
              my problem-solving and design thinking.
            </div>
          </div>
        </SectionHeader>
      </Container>
    </section>
  );
}

export default About;
