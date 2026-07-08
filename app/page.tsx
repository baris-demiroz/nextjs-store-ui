import CampaignBanner from "@/components/home/CampaignBanner";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import NewProducts from "@/components/home/NewProducts";

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
