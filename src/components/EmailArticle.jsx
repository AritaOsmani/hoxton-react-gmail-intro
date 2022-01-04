import EmailActionsButtons from './EmailActionsButtons'
import EmailArticleTitle from './EmailArticleTitle'
import EmailBody from './EmailBody'
import EmailContentHeader from './EmailContentHeader'
function EmailArticle() {
    return (
        <article className="email-content">
            <EmailArticleTitle />
            <EmailContentHeader />
            <EmailBody />
            <EmailActionsButtons />
        </article>
    )
}

export default EmailArticle