import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPage from "../components/AboutPage";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>ByFr0st</title>
        <meta name="description" content="Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
