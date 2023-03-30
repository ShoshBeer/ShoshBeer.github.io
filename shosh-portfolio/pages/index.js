import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <Layout home>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
