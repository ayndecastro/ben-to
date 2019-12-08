import React from 'react';
import BentoForm from '../components/BentoForm'
import { connect } from 'react-redux';
import { addBento } from '../actions/bento'

class AddBentoPage extends React.Component {
    onSubmit = (bento) => {
        this.props.addBento(bento);
        console.log(bento)
    }

    render () {
        return (
                <BentoForm 
                    header={"Make Bento."}
                    onSubmit={this.onSubmit}
                />
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        addBento: (bento) => dispatch(addBento(bento))
    }
)

export default connect(undefined, mapDispatchToProps)(AddBentoPage);