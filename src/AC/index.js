import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE, FILTER_DATE_ARTICLE } from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticle(selectedArticles) {
    return {
        type: FILTER_ARTICLE,
        payload: {selectedArticles}
    }
}

export function filterDateArticle(dateFrom, dateTo) {
    return {
        type: FILTER_DATE_ARTICLE,
        payload: {dateFrom, dateTo}
    }
}