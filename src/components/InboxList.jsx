import ItemActiveListEl from "./ItemActiveListEl"
import ItemListEl from "./ItemListEl"
import ItemToggleListEl from "./ItemToggleListEl"

function InboxList() {
    return (
        <ul className="inbox-list">
            <ItemActiveListEl />
            <ItemListEl />
            <ItemToggleListEl />
        </ul>
    )
}
export default InboxList