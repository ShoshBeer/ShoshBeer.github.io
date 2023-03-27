import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-xl font-bold">I control this body I'm typing with. You can call either one of us Shoshana, or Shoeshine if you prefer.</p>
        <p>
         I usually use money to acquire goods and services, but eventually I'll use goods and services.
        </p>
        <Link href="/projects/talking-in-circles">Go to Project 1</Link>
      </section>
    </Layout>
  );
}
