
import Avatar from './Avatar'
import DateInfo from './DateInfo'
import EmailActionIcons from './EmailActionIcons'
import EmailInfo from './EmailInfo'

function EmailContentHeader() {
    return (
        <header className="email-content--header">
            <Avatar />
            <EmailInfo />
            <DateInfo />
            <EmailActionIcons />
        </header>
    )
}
export default EmailContentHeader