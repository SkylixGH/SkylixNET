import Link from "next/link";
import Image from "next/image";
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
            href: "/jobs",
            label: "Jobs",
        },
        {
            href: "/Projects",
            label: "Projects",
        }
    ];

    return (
        <nav className={styles._}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="https://github.com/SkylixGH/Info/raw/main/logos/Logo%20Icon%20Dark.svg" />
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

            </div>
        </nav>
    );
}
