import DocumentationView from "../../components/documentation/documentationView/DocumtationView";

export default function Index() {
    return (
        <DocumentationView target="Skylix Documentation Center" render={(r) => {
            r.p("Welcome to the Skylix documentation center. Here you can find all the tutorials, references, and other documentation that you might need.");
        }} />
    )
}
