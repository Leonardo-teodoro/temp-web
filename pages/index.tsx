import Head from "next/head";

import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather</title>

        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Search />
    </div>
  );
}
