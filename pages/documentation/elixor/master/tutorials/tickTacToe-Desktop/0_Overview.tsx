import DocumentationView from "../../../../../../components/documentation/documentationView/DocumtationView";

export default function Overview() {
    return (
        <DocumentationView target="Tick Tac Toe Tutorial [Desktop]" render={(r) => {
            r.p("This tutorial will show you how to create Tick Tac Toe as a desktop application with Elixor.");
            
            r.h(2, "Project Setup");
            r.p("First, we need to create a project for our application. We can do this by clicking on the button below.");
        }} />
    )
}
