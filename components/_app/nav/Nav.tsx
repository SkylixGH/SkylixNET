import Link from "next/link";
import styles from "./Styles.module.scss";

interface NavItem {
    href: string;
    label: string;
}

export default function Nav() {
    const navContent: NavItem[] = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/documentation",
            label: "Documentation",
        },
        {
            href: "/jobs",
            label: "Jobs",
        },
        {
            href: "/Projects",
            label: "Projects",
        }
    ];

    return (
        <div className={styles._}>
            <nav className={styles.inner}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="https://github.com/SkylixGH/Info/raw/main/logos/Logo%20Icon%20Dark.svg" />
                    </Link>
                </div>

                <div className={styles.links}>
                    { navContent.map((item, index) => { 
                        return (
                            <>
                                <Link href={item.href} key={index}>
                                    <a>{item.label}</a>
                                </Link>

                                { index !== navContent.length - 1 && <span /> }
                            </>
                        )
                    }) }
                </div>

                <div className={styles.actions}>
                    <button>Login</button>
                    <button className={styles.actions_button__accent}>Sign Up</button>
                </div>
            </nav>
        </div>
    );
}
