import Head from "next/head";
import Link from "next/link";
import React from "react";

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "ecommerce"}</title>
        <meta name="description" content="ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex justify-between h-12 shadow-md items-center px-2">
            <Link className="text-lg font-bold " href = '/'>
              ecommerce
            </Link>
          <div className="gap-2 flex items-center text-md font-bold ">
            <Link className="" href='/cart'>Cart</Link>
            <Link href='/login'>login</Link>
          </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 ">{children}</main>
        <footer className="flex justify-center items-center shadow-inner">Copyright  ecommerce @ 2022 </footer>
      </div>
    </div>
  );
}

export default Layout;
