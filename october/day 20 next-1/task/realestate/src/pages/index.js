import Head from "next/head";
import HomeComponent from "@/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Real Estate Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <HomeComponent />
        </main>
      </div>
    </>
  );
}
