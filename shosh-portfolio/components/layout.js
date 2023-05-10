import Head from 'next/head';
import Link from 'next/link';
import NavBar from './Navbar';
import Footer from './Footer';
import { Providers } from './providers';

export default function Layout({ children, home, ...customMeta }) {
  const meta = {
    title: "Shoshana Beer",
    description: `I'm a developer. I will develop!`,
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
      <main className='bg-white dark:bg-[#121212]'>
        <Providers>
          <NavBar />
          <div className='pt-[149px] xs:pt-[142px] sm:pt-[106px]'>{children}</div>
          <Footer />
        </Providers>
      </main>
      {!home && (
        <div className="mt-12">
          <Link className="text-blue-500 hover:underline" href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
