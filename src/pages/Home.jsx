import CardSection from "../components/cardSection";
import CTASection from "../components/CTA";
import FeatureBlock from "../components/featureBox";
import Hero from "../components/Hero";

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
