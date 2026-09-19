'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Image as ImageIcon, Minus, Plus, ShoppingBasket, ShoppingCart, Trash2, X } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { useCartStore } from '@/store/useCartStore'
import { WHATSAPP_NUMBER } from '@/constants'
import { useState } from 'react'

function CartModal() {
    const { cart, decreaseQty, increaseQty, removeFromCart, clearCart } = useCartStore()
    const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

    const handleSendToWhatsApp = () => {
        if (cart.length === 0) return;

        const itemsList = cart.map((item) => `- ${item.name} | ${item.quantity} pieces`).join('%0A%0A');
        const message = `Hello Pastel Perfection,%0A%0AI'd like to order:%0A${itemsList}%0A%0APlease confirm availability.`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        window.open(url, isMobile ? "_self" : "_blank");
        clearCart();
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)} swipeDirection='right'>
            <DrawerTrigger className='relative cursor-pointer'>
                <ShoppingBasket size={24} className='hover:scale-110 transition-all ease-in-out duration-300 max-lg:text-primary' />
                {itemCount > 0 && (
                    <Badge className='absolute -top-2 -right-2 size-4 min-w-4 justify-center rounded-full px-0 text-[10px]'>
                        {itemCount}
                    </Badge>
                )}
            </DrawerTrigger>
            <DrawerContent className='mx-auto flex w-full max-w-md flex-col max-md:w-[95%] rounded-2xl'>
                <div className='flex items-center justify-between border-b border-border p-6'>
                    <DrawerTitle className='font-heading text-xl font-bold'>Your Cart</DrawerTitle>
                    <DrawerClose className='flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'>
                        <X className='size-4' />
                    </DrawerClose>
                </div>

                {cart.length === 0 ? (
                    <div className='flex flex-1 flex-col items-center justify-center gap-5 px-6 py-16 text-center'>
                        <div className='rounded-full bg-accent/10 p-6'>
                            <ShoppingCart size={36} className='text-accent' />
                        </div>
                        <div>
                            <h3 className='font-heading text-lg font-semibold text-foreground'>Your cart is empty</h3>
                            <p className='mt-1 text-sm text-muted-foreground'>Browse the catalog and add products you&apos;d like to order.</p>
                        </div>
                        <Button onClick={() => setIsOpen(false)} className='h-auto rounded-full px-6 py-3 bg-accent'>
                            Browse Products
                        </Button>
                    </div>
                ) : (
                    <div className='flex flex-1 flex-col overflow-hidden'>
                        <ul className='flex-1 space-y-3 overflow-y-auto p-6'>
                            <AnimatePresence initial={false}>
                                {cart.map((item) => {
                                    const imageUrl = item.images?.[0]?.asset?.url
                                    return (
                                        <motion.li
                                            key={item._id}
                                            layout
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className='flex items-center gap-4 overflow-hidden'
                                        >
                                            <div className='relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-accent/8'>
                                                <Image src={imageUrl ? imageUrl : "https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png"} alt={item.images?.[0]?.alt || item.name} fill sizes='64px' className='object-cover' />
                                            </div>
                                            <div className='min-w-0 flex-1'>
                                                <p className='truncate font-medium text-foreground'>{item.name}</p>
                                                <button
                                                    onClick={() => removeFromCart(item._id)}
                                                    className='mt-1 flex items-center bg-red-600 text-white gap-1 text-xs py-1 px-2 rounded-3xl transition-colors hover:text-destructive'
                                                >
                                                    <Trash2 className='size-3' />
                                                    Remove
                                                </button>
                                            </div>
                                            <div className='flex shrink-0 items-center gap-1 rounded-full border border-border p-1'>
                                                <button
                                                    onClick={() => decreaseQty(item._id)}
                                                    className='flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted'
                                                >
                                                    <Minus className='size-3' />
                                                </button>
                                                <span className='w-5 text-center text-sm font-medium text-foreground'>{item.quantity}</span>
                                                <button
                                                    onClick={() => increaseQty(item._id)}
                                                    className='flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted'
                                                >
                                                    <Plus className='size-3' />
                                                </button>
                                            </div>
                                        </motion.li>
                                    )
                                })}
                            </AnimatePresence>
                        </ul>

                        <div className='flex gap-3 border-t border-border p-6'>
                            <Button onClick={handleSendToWhatsApp} className='h-auto bg-accent flex-1 rounded-full py-3'>
                                Send Order to WhatsApp
                            </Button>
                            <Button variant='outline' onClick={clearCart} className='h-auto rounded-full px-4 py-3'>
                                Clear
                            </Button>
                        </div>
                    </div>
                )}
            </DrawerContent>
        </Drawer>
    )
}

export default CartModal
