import Head from 'next/head';
import Link from 'next/link';
import NavBar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';
import { Providers } from './providers';

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
        <Providers>
          <NavBar />
          {/* <header className='flex flex-col items-center'>
            <Image
              priority
              src='/profile_1.jpg'
              className='rounded-full'
              height={144}
              width={144}
              alt='A photo of me!' 
            />
            <h1 className='text-5xl font-extrabold tracking-tighter my-4 leading-tight'>Shoshana Beer</h1>
          </header> */}
          <div className='pt-[142px] sm:pt-[106px]'>{children}</div>
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
