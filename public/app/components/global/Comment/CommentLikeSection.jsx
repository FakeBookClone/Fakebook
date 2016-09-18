import React from 'react';

var imageshome = '/images/home/';

export default class CommentLikeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.hidden) {
      return (
        <div className="user-comment-like-container">
          <p className="user-comment-like-text">Unhide</p>
        </div>  
      )
    } else {
      return (
        <div className="user-comment-like-container">
          {this.props.iLiked
            ? <p className="user-comment-like-text" onClick={this.props.likeComment}>Unlike</p>
            : <p className="user-comment-like-text" onClick={this.props.likeComment}>Like</p>
          }
          {this.props.likes.length !== 0
            ? <div className="user-comment-like-indicator">
                ·&nbsp;<img src={imageshome + 'normal-like.png'} /><p>{this.props.likes.length}</p>
              </div>
              : null
            }
        </div>
      )
    }
  }
}
