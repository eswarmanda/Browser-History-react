import './index.css'

const List = props => {
  const {listDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails
  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-card">
        <div className="title-card">
          <img className="title-icon" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="title-link">{domainUrl}</p>
        </div>
        <div className="delete-card">
          <button
            data-testid="delete"
            className="delete"
            type="button"
            onClick={onDeleteItem}
          >
            <img
              className="trash-img"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default List
