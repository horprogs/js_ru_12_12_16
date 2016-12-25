import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filter'
import Datepicker from './Datepicker'

function AppContainer(props) {
    return (
        <div>
            <UserForm />
            <Datepicker/>
            <Filter articles = {props.articles}/>
            <ArticleList articles={props.articles}/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer