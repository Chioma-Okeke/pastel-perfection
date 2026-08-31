import AboutTeaser from "@/components/home/about-teaser";
import BestSellers from "@/components/home/best-sellers";
import BrandLogos from "@/components/home/brand-logos";
import HeroSection from "@/components/home/hero-section";
import LaunchingSoon from "@/components/home/launching-soon";
import Testimonials from "@/components/home/testimonials";
import ChatNowBanner from "@/components/shared/chat-now-banner";

const Home = () => {
    return (
        <>
            <HeroSection />
            <BrandLogos />
            <AboutTeaser />
            <BestSellers />
            <LaunchingSoon />
            <Testimonials />
            <ChatNowBanner/>
        </>
    )
}

export default Home;