import "@/styles/globals.css";
import "@/styles/flipHover.css";
import "@/styles/animation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />

        <meta
          property="og:description"
          content="Say Goodbye to Overwhelm: Our Virtual Assistants Bring Ease and Efficiency. Call us on +44-(0) 2033369262 (UK) for UK and +977-9801037556 (Nepal) to discuss your needs."
        />
      </Head>
      <Header />
      <ScrollTop />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
