import FindExploreJobs from "@/components/Home/Findexplorejobs";
import Hero from "@/components/Home/Hero";
import PricingSection from "@/components/Home/Pricingsection";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";

const Home = () => {
    return (
        <>
          <Hero />
          <FindExploreJobs />
          <PricingSection />
          <Faq />
        </>
    );
};

export default Home;