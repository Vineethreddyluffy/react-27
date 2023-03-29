import './index.css'

const CommentItem = props => {
  const {item, deleteTheItem, likeTheItem} = props
  const {username, commented, isLiked, classOf, id} = item
  const deleteItem = () => {
    deleteTheItem(id)
  }
  const likeItem = () => {
    likeTheItem(id)
  }
  const result2 = isLiked ? 'toggle' : ''
  const result = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li>
      <div className="start">
        <h1 className={classOf} id="heading">
          {username[0]}
        </h1>
        <div className="paras">
          <div className="some">
            <p className="subhead">{username}</p>
            <p className="time">Less than a minute ago</p>
          </div>
          <p className="description">{commented}</p>
        </div>
      </div>
      <div className="spread">
        <div className="toggle-cont">
          <img src={result} alt="Like" className="like" />
          <button className={result2} onClick={likeItem}>
            Like
          </button>
        </div>
        <button
          onClick={deleteItem}
          type="button"
          id="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
