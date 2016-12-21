import React from 'react';

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }
        render() {
            console.log(this.state)
            return <Component {...this.props} {...this.state}
                onClick={this.toggleOpen()}
            />
        }

        toggleOpen = id => ev => {
            console.log('123')
            ev && ev.preventDefault && ev.preventDefault()
            let _id = (this.state.openArticleId == id) ? null : id;

            this.setState({
                openArticleId: _id
            });
        }

    }
}