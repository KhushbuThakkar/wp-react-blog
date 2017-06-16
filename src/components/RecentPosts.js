import React        from 'react';
import DataStore 	from './../stores/DataStore.js';
import { Link } from 'react-router';

class RecentPosts extends React.Component {

    render() {
        //let RecentPosts = DataStore.getRecentPosts();
    	let RecentPosts = (this.props.posts)?this.props.posts:[];
        return (
            <div>		
                <aside  className="widget widget_recent_entries">	
	                <h3 className="widget-title">Recent Posts</h3>	
                	<ul>
 						{RecentPosts.map((post) => {                    		
                    		return (
                    			<li key={post.id}>
                                    <Link  to={`/blogs/${post.slug}`} style={{marginRight: '10px'}}>{post.title.rendered}
                                    </Link>
                                </li>
							)}
						)}
                	</ul>
				</aside>
            </div>

        );
    }

}
export default RecentPosts;
