import React, {Component, PropTypes} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {

    render() {
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {this.getArticlesList()}
                </ul>
            </div>
        )
    }

    getArticlesList() {
        const { articles } = this.props;

        return articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.state.openArticleId == article.id}
                />
            </li>
        );
    }
}

export default accordion(ArticleList);

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}