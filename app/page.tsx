import MainLayout from "@app/components/MainLayout";
import HeroPage from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Testimonies from "./components/Testimonies";
import FaqPage from "./components/FaqPage";
import NewsletterPage from "./components/NewsletterPage";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <HeroPage />
      <Partners />
      <Features />
      <Testimonies />
      <FaqPage />
      <NewsletterPage />
      <Footer />
    </MainLayout>
  );
};

export default Home;
