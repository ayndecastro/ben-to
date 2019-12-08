import React from 'react';
import { connect } from 'react-redux'
import BentoForm from './BentoForm'
import { editBento, removeBento } from './actions/bento'
import BentoList from './BentoList';
export class EditBentoPage extends React.Component {

  onSubmit = (bento) => {
    this.props.editBento(this.props.bento.id, bento)
    this.props.history.push('/')
  }

  onRemovebento = (bento) => {
    this.props.removeBento(this.props.bento.id)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <BentoForm 
          bento={this.props.bento}
          onSubmit = {this.onSubmit}
          header={"Edit"}
          remove={true}
          onRemovebento={this.onRemovebento}
        />
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editBento: (id, bento) => dispatch(editBento(id, bento)),
  removeBento: (id) => dispatch(removeBento(id))
})

const mapStateToProps = (state, props) => {
  return {
    bento: state.bento.find((bento)=> bento.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBentoPage);
