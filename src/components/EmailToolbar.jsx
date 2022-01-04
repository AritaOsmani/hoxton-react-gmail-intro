import '../styles/EmailToolbar.css'

import PageSection from "./PageSection"
import Space from "./Space"
import ToolbarList from "./ToolbarList"

function EmailToolbar() {
    return (
        <nav className="email-toolbar">
            <ToolbarList />
            <Space />
            <PageSection />
        </nav>
    )
}
export default EmailToolbar