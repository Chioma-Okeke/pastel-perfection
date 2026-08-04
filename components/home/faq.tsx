import { Plus } from "lucide-react";
import PaddingContainer from "../shared/padding-container";
import MaxContainer from "../shared/max-container";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { faqData } from "@/lib/data";

const Faq = () => {
    return (
        <section className="py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="space-y-12 lg:space-y-16">
                    <h2 className="font-heading font-bold text-4xl lg:text-5xl">Frequently Asked Questions</h2>

                    <Accordion defaultValue={[5]} className="border-t border-border">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={index}>
                                <AccordionTrigger className="items-center py-6 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                                    <span className="font-heading text-lg lg:text-xl text-foreground">{faq.question}</span>
                                    <Plus className="size-5 shrink-0 text-accent transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                                </AccordionTrigger>
                                <AccordionContent className="pb-6">
                                    <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </MaxContainer>
            </PaddingContainer>
        </section>
    );
};

export default Faq;
