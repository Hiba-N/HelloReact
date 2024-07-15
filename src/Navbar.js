export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/about">About</a>
                </li>
                <li>
                <a href="/signup">Sign Up</a>
            </li>
        </ul>
    </nav>
}