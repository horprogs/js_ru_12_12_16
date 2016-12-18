import React, {Component} from 'react';
import Article from './Article';
import CommentList from './CommentList';

export default class ArticleList extends Component {

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
                <Article article={article}/>
                {this.renderCommentList(article.comments)}
            </li>
        );
    }

    renderCommentList(comments) {
        //лучше эту проверку в CommentList делать
        if (!comments) {
            return;
        }

        //логичнее CommentList внутри Article использовать
        return <CommentList comments={comments}/>
    }


}
