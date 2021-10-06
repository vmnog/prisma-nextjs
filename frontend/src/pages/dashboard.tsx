import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Navbar } from "../components/navbar";
import { UsersList } from "../components/usersList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bem-vindo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="min-h-screen flex justify-center bg-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Home;
