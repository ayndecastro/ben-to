import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  TextField: {
    fontSize: '15px'
  }
});

class InputField extends Component {
  render() {
    const {
      input,
      label,
      hint,
      placeholder,
      classes,
      multiline,
      shrink,
      ...attributes
    } = this.props;
    return (
      <div>
        <TextField
          fullWidth
          multiline={multiline ? true : false}
          className={classes.TextField}
          label={label}
          placeholder={placeholder}
          {...input}
          {...attributes}
          inputProps={{
            style: {
              fontSize: '13px'
            }
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(InputField);
