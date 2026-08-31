'use client'

import { FormEvent } from "react"
import PaddingContainer from "../shared/padding-container"
import MaxContainer from "../shared/max-container"
import { Button } from "../ui/button"
import { CONTACT_DATA } from "@/constants"

const inputClasses =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"

const BeFirstSection = () => {
    const handleRetailerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const businessName = formData.get("businessName") as string
        const phone = formData.get("phone") as string

        const message = encodeURIComponent(
            `Hello Pastel Perfection,\n\nI'd like to join the retailer pre-order list for the house line.\n\nBusiness name: ${businessName}\nPhone/WhatsApp: ${phone}`
        )
        window.open(`https://wa.me/${CONTACT_DATA.PHONE_NUMBER.replace("+", "")}?text=${message}`, "_blank")
        e.currentTarget.reset()
    }

    const handleConsumerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string

        const subject = encodeURIComponent("Be First to Know — Pastel Perfection house line")
        const body = encodeURIComponent(`Please add ${email} to the launch notification list.`)
        window.open(`mailto:${CONTACT_DATA.EMAIL}?subject=${subject}&body=${body}`, "_blank")
        e.currentTarget.reset()
    }

    return (
        <section className="bg-muted py-16 lg:py-24">
            <PaddingContainer>
                <MaxContainer className="text-center">
                    <h2 className="font-heading font-bold text-4xl lg:text-5xl">Be First</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Choose the list that fits you. Retailers and consumers get separate updates.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto text-left">
                        <form onSubmit={handleRetailerSubmit} className="space-y-4 rounded-md bg-card p-8">
                            <div>
                                <p className="text-accent text-xs font-semibold tracking-widest uppercase">Retailers</p>
                                <h3 className="mt-1 font-heading font-bold text-xl text-card-foreground">Join the retailer pre-order list</h3>
                            </div>
                            <input name="businessName" type="text" required placeholder="Business name" className={inputClasses} />
                            <input name="phone" type="tel" required placeholder="Phone / WhatsApp" className={inputClasses} />
                            <Button type="submit" className="h-auto w-full rounded-full py-3">
                                Join Pre-Order List
                            </Button>
                        </form>

                        <form onSubmit={handleConsumerSubmit} className="space-y-4 rounded-md bg-card p-8">
                            <div>
                                <p className="text-accent text-xs font-semibold tracking-widest uppercase">Consumers</p>
                                <h3 className="mt-1 font-heading font-bold text-xl text-card-foreground">Be first to know</h3>
                            </div>
                            <input name="email" type="email" required placeholder="Email address" className={inputClasses} />
                            <Button type="submit" className="h-auto w-full rounded-full py-3">
                                Be First to Know
                            </Button>
                        </form>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default BeFirstSection
