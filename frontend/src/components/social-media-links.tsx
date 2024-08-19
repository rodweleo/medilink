import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function SocialMediaLinks() {
    return (
        <ul className="flex gap-4 text-lg text-white w-fit">
            <li>
                <button title="Instagram" type="button">
                    <FaInstagram />
                </button>
            </li>
            <li>
                <button title="Twitter (X)" type="button">
                    <FaXTwitter />
                </button>
            </li>
            <li>
                <button title="Whatsapp" type="button">
                    <FaWhatsapp />
                </button>
            </li>
        </ul>
    )
}