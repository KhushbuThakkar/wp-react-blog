import React        from 'react';
import DataStore 	from './../stores/DataStore.js';
import { Link } from 'react-router';
import RecentPosts from './RecentPosts';
import Slider from './Slider';

class Post extends React.Component {

    render() {
		const post_slug  = this.props.params.post
        console.log(this.props.params,'spec');
        let post = DataStore.getPostBySlug(post_slug);
	    let date=new Date(post.date_gmt).toGMTString();

        return (

	

	 <div className='hfeed site'>

		 <Slider/>
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
                                    {post.title.rendered}
                                </h2>
                            
                                <div className="meta-post">
                                    <span className="posted-on">Posted on  
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
                            <p dangerouslySetInnerHTML={{__html: post.content.rendered}}>
                            </p>
        
                        </div>
                </div>
            </div>
        </main>
    </div>

	<div className='col-md-3 widget-area'>
		<RecentPosts></RecentPosts>
	</div>
                </div>
            </div>
        </div>
    </div>

        );
    }

}
export default Post;
