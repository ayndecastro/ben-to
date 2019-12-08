import React from 'react';
import BentoForm from './BentoForm'
import { connect } from 'react-redux';
import { addBento } from './actions/bento'

class AddBentoPage extends React.Component {
    onSubmit = (bento) => {
        this.props.addBento(bento);
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <h1> Add Bento </h1>
                <BentoForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        addBento: (bento) => dispatch(addBento(bento))
    }
)

export default connect(undefined, mapDispatchToProps)(AddBentoPage);