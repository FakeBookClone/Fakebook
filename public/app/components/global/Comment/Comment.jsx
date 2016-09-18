import React from 'react';
import Axios from 'axios';
import CommentEditButton from './CommentEditButton.jsx';
import CommentProfilePicture from './CommentProfilePicture.jsx';
import CommentTextContainer from './CommentTextContainer.jsx';
import CommentHidden from './CommentHidden.jsx';

var imageshome = '/images/home/';
require('../../../../stylesheets/components/global/Comment.scss');
require('../../../../stylesheets/components/global/main.scss');

export default class Comment extends React.Component {

	constructor() {
		super();
		this.state = { likes: [], iLiked: false };
	}

	componentWillMount() {
		Axios.get(`/api/likes/comment/${this.props.comment.comment_id}`).then(r => {
			var temp = false;
			for(var i in r.data) {
				if(r.data[i].profile_id == this.props.user.id) {
					temp = true;
				}
			}
			this.setState({likes: r.data, iLiked: temp});
		})

		if(this.props.user.facebook_id === this.props.comment.profile_id) {
			this.state.myComment = true;
		} else {
			this.state.myComment = false;
		}

		if(this.props.postID === this.props.user.facebook_id) {
			this.state.myPost = true;
		} else {
			this.state.myPost = false;
		}
	}

	render() {
		// console.log({thePostID: this.props.postID, theProfileID: this.props.comment.profile_id, myPost: this.state.myPost, myComment: this.state.myComment});
		if(this.props.comment.hidden) {
			return (
				<div className="user-comment-wrapper-hidden">
					<div className="user-comment-container-hidden">
						<CommentEditButton myComment={this.state.myComment} myPost={this.state.myPost} comment={this.props.comment} />
						<CommentProfilePicture comment={this.props.comment} />
						<CommentTextContainer comment={this.props.comment} likeComment={this.likeComment.bind(this)} iLiked={this.state.iLiked} likes={this.state.likes} hidden={this.props.comment.hidden} refreshComments={this.props.refreshComments} />
					</div>
				</div>
			)
		} else {
			return (
				<div className="user-comment-wrapper">
					<div className="user-comment-container">
						<CommentEditButton myComment={this.state.myComment} myPost={this.state.myPost} comment={this.props.comment} />
						<CommentProfilePicture comment={this.props.comment} />
						<CommentTextContainer comment={this.props.comment} likeComment={this.likeComment.bind(this)} iLiked={this.state.iLiked} likes={this.state.likes} hidden={this.props.comment.hidden} refreshComments={this.props.refreshComments} />
					</div>
				</div>
			)
		}
	}

	likeComment() {
		Axios.post(`api/like/comment/${this.props.comment.comment_id}`, {profile_id: this.props.user.facebook_id}).then(r => {
			this.setState({likes: r.data, iLiked: !this.state.iLiked});
		})
	}


}
