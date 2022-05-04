import styles from '../styles/Home.module.scss'

interface Stat {
  title: string;
  description: string;
  icon: any;
}

export default function Home() {
  const stats: Stat[] = [
    {
      title: "Helpful Community",
      description: "We have a community of people who are passionate about programming and want to help each other.",
      icon: <img src="https://github.com/SkylixGH/Info/raw/main/logos/Logo%20Icon%20Dark.svg" />
    },
    {
      title: "Open Source",
      description: "We are open source and want to help others learn from us.",
      icon: <img src="https://github.com/SkylixGH/Info/raw/main/logos/Logo%20Icon%20Dark.svg" />
    }
  ];

  return (
    <div className={styles._}>
      <header className={styles.header}>
        <div className={styles.header_text}>
          <h1>Building Open Source Software for the World!</h1>
          <p>With an openly flexible, and colaborative community!</p>
        </div>

        <div className={styles.header_view}>
          <button>Sign Up</button>
          <button>Projects</button>
        </div>
      </header>

      <section>
        <h1>Skylix</h1>
        <h6>It do be like that</h6>
      </section>
    </div>
  )
}
