import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsList = []

class Comments extends Component {
  state = {listOf: commentsList, name: '', comment: ''}

  addItem = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const color = Math.random() * 7
    const num = Math.floor(color)
    const style = initialContainerBackgroundClassNames[num]
    const newComment = {
      id: uuid(),
      username: name,
      commented: comment,
      isLiked: false,
      classOf: style,
    }
    this.setState(prevState => ({
      listOf: [...prevState.listOf, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteTheItem = props => {
    const {listOf} = this.state
    const newArr = listOf.filter(each => each.id !== props)
    this.setState({listOf: newArr})
  }

  likeTheItem = props => {
    this.setState(prevState => ({
      listOf: prevState.listOf.map(each => {
        if (each.id === props) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {listOf, name, comment} = this.state
    const len = listOf.length
    return (
      <div className="cont">
        <div className="inner-cont">
          <div className="card-cont">
            <form className="comment-form" onSubmit={this.addItem}>
              <h1 className="heading">Comments</h1>
              <p className="para">Say Something about 4.0 technologies</p>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input"
                onChange={this.onChangeName}
              />
              <textarea
                rows="5"
                cols="24"
                placeholder="Your Comment"
                className="textarea"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
          <hr className="horizontal" />
          <ul className="uno">
            <div className="image-cont">
              <p className="count">{len}</p>
              <p className="para">Comments</p>
            </div>
            {listOf.map(each => (
              <CommentItem
                key={each.id}
                item={each}
                deleteTheItem={this.deleteTheItem}
                likeTheItem={this.likeTheItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
