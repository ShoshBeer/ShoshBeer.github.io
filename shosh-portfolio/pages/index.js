import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/ContactNew';
import Experience from '../components/Experience';
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
