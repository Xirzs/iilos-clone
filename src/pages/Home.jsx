import CardSection from "../components/Home/cardSection";
import CTASection from "../ui/components/CTA";
import FeatureBlock from "../components/Home/featureBox";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureBlock />
      <CardSection />
      <CTASection />
    </div>
  );
};

export default Home;
