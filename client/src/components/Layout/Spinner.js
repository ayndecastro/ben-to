import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (
        <div style={{
          height: '80vh',
          width: '100%',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center'
        }}>
        <div style={{margin: '0 auto'}}>
          <CircularProgress 
          size={50}
          thickness={4}
          style={{
            color: '#6f7375'
          }}
          />
        </div>
        </div>
        
  ) 