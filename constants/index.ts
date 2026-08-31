import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/icons";
import { IContactItems } from "@/types";

const WHATSAPP_NUMBER = "+2348035080782";
export const BULK_ORDER_WHATSAPP_MESSAGE =
    "Hello Pastel Perfection, %0A%0AI'm interested in bulk orders.";
export const BULK_ORDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${BULK_ORDER_WHATSAPP_MESSAGE}`;

export const HEADER_URLS = [
    { label: "Home", link: "/" },
    { label: "All Products", link: "/product-catalog" },
    // { label: "Our Line", link: "/our-line" },
    // { label: "About", link: "/about-us" },
    { label: "Contact", link: "/contact-us" },
];

export const CONTACT_DATA = {
    EMAIL: "pastelperfection@example.com",
    PHONE_NUMBER: `${WHATSAPP_NUMBER}`,
    ADDRESS: [
        "Pastel Perfection Plaza Abia gate, Trade fair complex, Lagos, Nigeria",
        "A5/44 Kano plaza, Trade fair Complex, Lagos, Nigeria",
        "D20/29 Abia plaza, Trade fair complex, Lagos, Nigeria",
    ],
    INSTAGRAM:
        "https://www.instagram.com/veetgoldofficialpage?igsh=MWo0eHJqZGQyamlmMQ==",
    FACEBOOK: "https://facebook.com/veetgold",
    TIKTOK: "https://www.tiktok.com/@veetgold",
    HOURS: "Mon – Sat, 9am – 6pm",
    WAREHOUSE_CITY: "Lagos, Nigeria",
    WAREHOUSE_NOTE: "Wholesale visits by appointment only",
};

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_DATA.ADDRESS[0])}`;

export const CONTACT_ITEMS: IContactItems[] = [
    {
        label: "WhatsApp",
        value: CONTACT_DATA.PHONE_NUMBER.replace("+234", "0"),
        href: BULK_ORDER_LINK,
    },
    {
        label: "Email",
        value: CONTACT_DATA.EMAIL,
        href: `mailto:${CONTACT_DATA.EMAIL}`,
    },
    {
        label: "Warehouse",
        value: CONTACT_DATA.WAREHOUSE_CITY,
    },
    {
        label: "Hours",
        value: CONTACT_DATA.HOURS,
    },
];

export const SORT_OPTIONS = [
    { value: "name-asc", label: "Name (A–Z)" },
    { value: "name-desc", label: "Name (Z–A)" },
] as const;

export const EXPLORE_LINKS = [
    { label: "About Us", link: "/about-us" },
    { label: "Brands & Products", link: "/product-catalog" },
    { label: "Contact Us", link: "/contact-us" },
    { label: "FAQ", link: "/faq" },
    { label: "Our Line", link: "/our-line" },
];

export const SOCIAL_LINKS = [
    {
        label: "Instagram",
        handle: "@pastelperfectionbeauty",
        href: CONTACT_DATA.INSTAGRAM,
        Icon: InstagramIcon,
    },
    {
        label: "TikTok",
        handle: "@pastelperfectionbeauty",
        href: CONTACT_DATA.TIKTOK,
        Icon: TikTokIcon,
    },
    {
        label: "Facebook",
        handle: "Pastel Perfection Beauty",
        href: CONTACT_DATA.FACEBOOK,
        Icon: FacebookIcon,
    },
];
