import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function() {
  return (
    <Layout>
      <Head>
        <title>[project Project]</title>
      </Head>
      <h1>Learn to do words with the mouth more good!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}