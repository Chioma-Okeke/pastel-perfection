import { BULK_ORDER_LINK } from "@/constants"
import { Button } from "../ui/button"
import MaxContainer from "./max-container"
import PaddingContainer from "./padding-container"

const ChatNowBanner = () => {
    return (
        <div className="bg-secondary text-secondary-foreground">
            <PaddingContainer>
                <MaxContainer className="flex max-sm:flex-col max-sm:items-start items-center justify-between gap-4 py-4">
                    <p className="text-sm md:text-base">Interested in bulk or wholesale orders? Chat with us on WhatsApp.</p>
                    <Button
                        render={<a href={BULK_ORDER_LINK} target="_blank" rel="noopener noreferrer" />}
                        className="h-auto rounded-full px-6 py-3 shrink-0"
                    >
                        Chat Now
                    </Button>
                </MaxContainer>
            </PaddingContainer>
        </div>
    )
}

export default ChatNowBanner
