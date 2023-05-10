import Layout from '../components/layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/ContactNew';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <Layout home>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
