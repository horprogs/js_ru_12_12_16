import { DELETE_ARTICLE, FILTER_ARTICLE, FILTER_DATE_ARTICLE } from '../constants'
import { articles } from '../fixtures'

export default (articlesState = articles, action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        case FILTER_ARTICLE:
            if (payload.selectedArticles.length === 0) {
                return articlesState.map((article) => {
                    article.isShowed = true;
                    return article;
                })
            }

            return articlesState.map((article) => {
                let result = payload.selectedArticles.some((item) => {
                    return item.value === article.id

                });
                article.isShowed = false;

                if (result) {
                    article.isShowed = true;
                }
                return article;
            });

        case FILTER_DATE_ARTICLE:
            if (!payload.dateFrom || !payload.dateTo) {
                return articlesState.map((article) => {
                    article.isShowed = true;
                    return article;
                });
            }

            return articlesState.map(article => {
                let from = new Date(payload.dateFrom),
                    to = new Date(payload.dateTo),
                    day = new Date(article.date);

                article.isShowed = false;
                if (from < day && day < to) {
                    article.isShowed = true;
                }
                return article;
            });
    }

    return articlesState
}