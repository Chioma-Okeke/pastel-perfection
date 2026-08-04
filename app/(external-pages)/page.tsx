import BestSellers from "@/components/home/best-sellers";
import Faq from "@/components/home/faq";
import HeroSection from "@/components/home/hero-section";
import LaunchingSoon from "@/components/home/launching-soon";
import Testimonials from "@/components/home/testimonials";
import ChatNowBanner from "@/components/shared/chat-now-banner";

const Home = () => {
    return (
        <>
            <HeroSection />
            <BestSellers />
            <LaunchingSoon />
            <Testimonials />
            <Faq />
            <ChatNowBanner/>
        </>
    )
}

export default Home;