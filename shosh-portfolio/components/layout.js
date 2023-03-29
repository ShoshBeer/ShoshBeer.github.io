import Head from 'next/head';
import Link from 'next/link';
import NavBar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, home, ...customMeta }) {
  const meta = {
    title: "Shoshana - Learner, Developer, Teacher",
    description: `I'm always learning and I want to build websites to help people and the planet.`,
    image: "/profile_1.png",
    type: "website",
    url: "https://shoshbeer.github.io/",
    name: "Shoshana Beer",
    ...customMeta,
  };

  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{meta.title}</title>
        <meta property="og:site_name" content="Shoshana Beer" />
        <meta property="og:title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </main>
      {!home && (
        <div className="">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
