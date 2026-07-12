import { Button } from "../ui/button"

const NavBar = () => {
    return (
        <div>
            <div>
                Logo
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>All Products</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <Button>WhatsApp Us</Button>
            </div>
        </div>
    )
}

export default NavBar
