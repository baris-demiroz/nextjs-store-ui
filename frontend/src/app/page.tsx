import CampaignBanner from "@/src/components/home/CampaignBanner";
import CategorySection from "@/src/components/home/CategorySection";
import FeaturedProducts from "@/src/components/home/FeaturedProducts";
import Features from "@/src/components/home/Features";
import Hero from "@/src/components/home/Hero";
import NewProducts from "@/src/components/home/NewProducts";

export default function Home() {
  
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <CampaignBanner />
      <NewProducts />
      <Features />
    </>
  );
}
