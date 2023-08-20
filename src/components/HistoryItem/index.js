import './index.css'

const HistoryItem = props => {
  const {details, Delete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const remove = () => {
    Delete(id)
  }
  return (
    <li className="item">
      <p className="time">{timeAccessed}</p>
      <div className="details">
        <img alt="domain logo" src={logoUrl} className="logo" />
        <p className="title">{title}</p>
        <p className="text">{domainUrl}</p>
      </div>
      <button
        onClick={remove}
        data-testid="delete"
        className="delete-button"
        type="button"
      >
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
