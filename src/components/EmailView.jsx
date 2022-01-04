import EmailArticle from './EmailArticle'
import EmailToolbar from './EmailToolbar'

function EmailView() {
    return (
        <main className="email-view">
            <EmailToolbar />
            <EmailArticle />
        </main>
    )
}
export default EmailView