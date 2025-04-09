import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDeleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-item-details">
        <img src={logoUrl} className="history-logo" alt="domain logo" />
        <div className="browser-details">
          <p className="app-name">{title}</p>
          <p className="website-url">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
