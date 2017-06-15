import React from 'react';
import DataStore from './../stores/DataStore.js';

class Page extends React.Component {
    render() {
        const page_slug  = this.props.params.page
        console.log(this.props.params,'spec');
        let page = DataStore.getPageBySlug(page_slug);
        console.log(page,'page');
        return (
            <div>
                <h1>{page.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
            </div>
        );
    }
}
export default Page;
