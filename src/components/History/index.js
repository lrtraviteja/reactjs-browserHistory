import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    const val = event.target.value
    this.setState({searchInput: val})
  }

  render() {
    const {historyList} = this.props
    const {searchInput} = this.state
    const searchResults = historyList.filter(
      each =>
        each.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        each.domainUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const onDelete = id => searchResults.filter(each => each.id !== id)

    const code =
      searchResults.length === 0 ? (
        <p className="empty-text">There is no history to show</p>
      ) : (
        <ul className="history-list">
          {searchResults.map(each => (
            <HistoryItem key={each.id} details={each} Delete={onDelete} />
          ))}
        </ul>
      )
    return (
      <div className="bg">
        <nav className="navbar">
          <img
            className=""
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-container">
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
            />
            <input
              onChange={this.onSearch}
              className="search-bar"
              placeholder="Search history"
              type="search"
            />
          </div>
        </nav>
        <div className="container">{code}</div>
      </div>
    )
  }
}

export default History
