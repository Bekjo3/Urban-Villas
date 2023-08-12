import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <main className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header gALLERYColor="#565657" />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          dimensionCode="/social-media-logo5.svg"
          dimensionCodeImageUrl="/social-media-logo6.svg"
          dimensionCodeText="/social-media-logo7.svg"
          dimensionCodeImageText="/social-media-logo8.svg"
          propOverflow="unset"
          propJustifyContent="space-between"
          propGap="unset"
          propFlex="1"
          propHeight="unset"
        />
      </main>
    </>
  );
};

export default LandingPage;
