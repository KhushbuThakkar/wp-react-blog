import React        from 'react';
import { Link } from 'react-router';
import RecentPosts from './RecentPosts';
import Slider from './Slider';
import { connect } from 'react-redux';
import * as postsActions from '../reducers/Posts';
import { bindActionCreators } from 'redux'

class Post extends React.Component {

     constructor(props) {
        super(props);
        this.props.postsActions.getPosts();
    }

    render() {
		const post_slug  = this.props.params.post
        
        //let post = DataStore.getPostBySlug(post_slug);
        let posts = (this.props.posts)?this.props.posts:[];
        let post=posts[Object.keys(posts).find((post, i) => {
            return posts[post].slug === post_slug;
        })] || {};
	    let date=new Date(post.date_gmt).toGMTString();

        return (

	

	 <div className='main-container hfeed site'>

        <div className="page-wrap">
            <div className="container content-wrapper">
                <div className="row">   


    <div  className="content-area col-md-9 classic">
        <main  className="post-wrap" role="main">
            <div className='posts-layout'>
	            <div className='post type-post status-publish format-standard has-post-thumbnail hentry' key={post.id}>
                        <div className="entry-thumb">
                            <a href='#'><img className="attachment-sydney-large-thumb size-sydney-large-thumb wp-post-image" src={post.fi_300x180} sizes="(max-width: 366px) 100vw, 366px" width="366" height="292"/></a>
                        </div>
                        <header className="entry-header">
                                <h2 className="title-post">
                                    { (post.title)?post.title.rendered:''}
                                </h2>
                            
                                <div className="meta-post">
                                    <span className="posted-on">Posted on &nbap;
                                        <a href="" rel="bookmark">
                                            <time className="entry-date published updated">
                                                {date}
                                            </time>
                                        </a>
                                    </span>
                                    <span className="byline"> 
                                        <span className="author vcard">
                                            <a className="url fn n" href="http://wpreact.dev/author/khushbu/">khushbu</a>
                                        </span>
                                    </span>
                                    <span className="comments-link">
                                        <a href=''>Leave a comment</a>
                                    </span>       
                                </div>
                        </header>

                        <div className="entry-post">
                            <p dangerouslySetInnerHTML={{__html: (post.content)?post.content.rendered:''}}>
                            </p>
        
                        </div>
                </div>
            </div>
        </main>
    </div>

	<div className='col-md-3 widget-area'>
		<RecentPosts posts={posts}></RecentPosts>
	</div>
                </div>
            </div>
        </div>
    </div>

        );
    }

}
const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //postsActions: () => dispatch(getPosts())
    postsActions: bindActionCreators(postsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
