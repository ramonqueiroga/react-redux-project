import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';
const Single = React.createClass({
    render() {
        //index of the post
        const { postId } = this.props.params;
        const { params } = this.props;
        const index = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || [];
        console.log(post);
        //get us the post
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments {...this.props} postComments={postComments} />
            </div>
        )
    }
});

export default Single;