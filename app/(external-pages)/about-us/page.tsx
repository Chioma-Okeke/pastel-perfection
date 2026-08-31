import IntroSection from "@/components/about/intro-section";
import OurLineTeaser from "@/components/about/our-line-teaser";
import StatsSection from "@/components/about/stats-section";
import Faq from "@/components/home/faq";

export default function AboutUsPage() {
    return (
        <>
            <IntroSection />
            <StatsSection />
            {/* <MissionSection /> */}
            <OurLineTeaser />
            <Faq />
        </>
    )
}