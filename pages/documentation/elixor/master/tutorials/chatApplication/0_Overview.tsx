import DocumentationView from "../../../../../../components/documentation/documentationView/DocumtationView";

export default function Overview() {
    return (
        <DocumentationView target="Chat Application Tutorial" render={(r) => {
            r.p("This tutorial will show you how to create a chat/message communication system with Elixor.");

            r.h(2, "Project Setup");
            r.p("First, we need to create a project for our application. We can do this by clicking on the button below.");
        }} />
    )
}
