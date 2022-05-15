import { Container } from "@mui/material";
import Header from "./components/header/Header";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Carrer } from "./components/carrer/carrer";
import { Masonry } from "@mui/lab";
import { Education } from "./components/education/Education";
import Repositories from "./components/repos/Repositories";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Container maxWidth="xl">
    <Header />
    <Masonry columns={{sm: 1, md: 2,}} sx={{width: "unset", mt: 1}}>
      <About />
      <Skills />
      <Carrer />
      <Education />
      <Repositories />
      <Contact />
    </Masonry>
  </Container>
  );
}

export default App;
