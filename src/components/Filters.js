import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import {connect} from 'react-redux'
import store from '../store'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <ArticlesSelect articles = {this.props.articles} dispatchChange = {store.dispatch}/>
                <DateRange dispatchChange={store.dispatch}/>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles

        }
    }
)(Filters)