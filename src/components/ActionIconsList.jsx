import backArrow from '../assets/icons/back-arrow.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'

function ActionIconsList() {
    return (
        <ul>
            <li>
                <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
                <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                />
            </li>
            <li>
                <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                />
            </li>
        </ul>
    )
}
export default ActionIconsList