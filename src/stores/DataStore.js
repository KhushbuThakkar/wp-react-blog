import alt  		from './../alt/alt.js';
import DataActions  from './../actions/DataActions.js';

class DataStore {
	constructor() {
		this.data = {};

		this.bindListeners({
			// Listen to the getSuccess() in DataActions.js
			handleSuccess: DataActions.GET_SUCCESS
		});

		this.exportPublicMethods({
			getAll: 		this.getAll,
			getAllPages: 	this.getAllPages,
			getPageBySlug: 	this.getPageBySlug,
			getPostBySlug: 	this.getPostBySlug,
			getAllPosts: 	this.getAllPosts,
			getRecentPosts: this.getRecentPosts,
		});
	}

	// Store data returned by getSuccess() in DataActions.js
	handleSuccess(data) {
		this.setState({ data });
	}

	// Returns all pages and posts
	getAll() { 
		return this.getState().data; 
	}

	// Returns all Pages
	getAllPages() { 
		return this.getState().data.pages; 
	}

	// Returns all Posts
	getAllPosts() { 
		return this.getState().data.posts; 
	}

	getPageBySlug(slug){
		const pages = this.getState().data.pages;
		return pages[Object.keys(pages).find((page, i) => {
			return pages[page].slug === slug;
		})] || {};
	}
		// Returns a Page by provided slug
	getPostBySlug(slug){
		const posts = this.getState().data.posts;
		return posts[Object.keys(posts).find((post, i) => {
			return posts[post].slug === slug;
		})] || {};
	}
	getRecentPosts() { 
		//console.log(this.getState().data,'this.getState().data')
		return this.getState().data.posts; 
	}

}

export default alt.createStore(DataStore, 'DataStore');
