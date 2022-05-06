import Center from '../components/_mixed/Center';
import styles from '../styles/Home.module.scss'

interface Section {
  title: string;
  description: string;
  jsx?: any;
}

function Quad(props: { data: [ Section, Section, Section, Section ]}) {
  const createSector = (d1: Section, d2: Section, top: boolean) =>{
    return (
      <div className={styles.__quad__sections}>
        <div className={styles.__quad__sections_section}>
          <div className={styles.__quad__sections_section_jsx}>
            { d1.jsx }
          </div>

          <div className={styles.__quad__sections_section_text}>
            <h1>{ d1.title }</h1>
            <p>{ d1.description }</p>
          </div>
        </div>

        <hr style={{
          marginBottom: top ? "-20px" : "0",
          marginTop: top ? "0" : "-20px"
        }} />

        <div className={styles.__quad__sections_section}>
          <div className={styles.__quad__sections_section_jsx}>
            { d2.jsx }
          </div>

          <div className={styles.__quad__sections_section_text}>
            <h1>{ d2.title }</h1>
            <p>{ d2.description }</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.__quad__}>
      { createSector(props.data[0], props.data[1], true) }

      <hr />

      { createSector(props.data[2], props.data[3], false) }
    </div>
  )
}

export default function Home() {
  const sections: Section[] = [
    {
      title: 'Privacy',
      description: 'We value our user\'s privacy. We will never sell any of your data!',
      jsx: <span style={{ fontSize: "40px" }}>🤣</span>
    },
    {
      title: 'Open Source',
      description: 'Common software created by skylix will always be open source!',
      jsx: <span style={{ fontSize: "40px" }}>🤣</span>
    },
    {
      title: 'Flexible',
      description: 'Open source software created by Skylix will always lie under the MIT license, giving you all the freedom you could ever want!',
      jsx: <span style={{ fontSize: "40px" }}>🤣</span>
    },
    {
      title: 'Community',
      description: 'Skylix\'s community is filled with many pationate developers who will always be willing to help you succeed.',
      jsx: <span style={{ fontSize: "40px" }}>🤣</span>
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

      <Center>
        <Quad data={sections as any} />
      </Center>
    </div>
  )
}
