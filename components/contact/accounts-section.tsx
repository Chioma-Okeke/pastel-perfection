import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { SOCIAL_LINKS } from "@/constants"

const AccountsSection = () => {
    return (
        <section className="py-16 lg:py-20">
            <PaddingContainer>
                <MaxContainer className="space-y-4">
                    <h2 className="font-heading font-bold text-4xl lg:text-5xl">Follow Us</h2>

                    <div className="grid gap-4 sm:grid-cols-3 pt-6">
                        {SOCIAL_LINKS.map(({ label, handle, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-accent/40"
                            >
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                                    <Icon />
                                </span>
                                <span>
                                    <span className="block font-semibold text-card-foreground">{label}</span>
                                    <span className="block text-accent text-sm">{handle}</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AccountsSection
