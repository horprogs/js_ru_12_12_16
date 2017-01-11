import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { filterArticle } from '../AC'


class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array
    };
    //от стeйта избавиться, нужные данные теперь должны в сторе жить
    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        console.log(options)
        return (
            <div>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.setState({
            selected
        }, () => {
            this.props.dispatchChange(filterArticle(this.state.selected));
        });
    }
}

export default ArticlesSelect
