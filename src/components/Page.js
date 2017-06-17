import React from 'react';
import { connect } from 'react-redux';
import * as pagesActions from '../reducers/Pages';
import { bindActionCreators } from 'redux'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.props.pagesActions.getPages();
    }

    render() {
        var me=this;
        //let page = DataStore.getPageBySlug(page_slug);
        let pages = (this.props.pages)?this.props.pages:[];
        const page_slug  = me.props.params.page
        let page =  pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === page_slug;
        })] || {};
        return (
            <div className='main-container'>
                <h1>{(page.title)?page.title.rendered:''}</h1>
                <div dangerouslySetInnerHTML={{__html: (page.content)?page.content.rendered:''}}></div>
            </div>
        );
         
        
        
    }
}
const mapStateToProps = (state) => {
  return {
    pages: state.pages.allPages
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //postsActions: () => dispatch(getPosts())
    pagesActions: bindActionCreators(pagesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);