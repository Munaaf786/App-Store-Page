import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    console.log(tabId)
    return clickTabItem(tabId)
  }
  const activeBtnStyle = isActive ? 'selected-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-Item-btn ${activeBtnStyle}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
