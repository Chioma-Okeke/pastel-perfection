import IntroSection from "@/components/about/intro-section";
import MissionSection from "@/components/about/mission-section";
import StatsSection from "@/components/about/stats-section";
import Faq from "@/components/home/faq";

export default function AboutUsPage() {
    return (
        <>
            <IntroSection />
            <StatsSection />
            <MissionSection />
            <Faq />
        </>
    )
}