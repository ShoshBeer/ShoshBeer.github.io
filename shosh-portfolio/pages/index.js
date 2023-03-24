import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I control this body I'm typing with. You can call either one of us Shoshana, or Shoeshine if you prefer.</p>
        <p>
         I usually use money to acquire goods and services, but eventually I'll use goods and services.
        </p>
      </section>
    </Layout>
  );
}
