import React from 'react';
import FormController from '../shared/FormController';
import ButtonLink from '../shared/ButtonLink';

export default ({ user }) => (
    <div style={{
        height: '80vh',
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <FormController
        formSlot={() => (
          <div>
            <h1>Dashboard</h1>
          <p>
            <i /> Welcome, {user && user.name}
          </p>
          {/* <div>
            <span>{user && user.email}</span>
          </div> */}
           
           </div>
        )}
        bottomLeftSlot={() => (
          <p>You have not yet setup a profile, please add some info</p>
        )}
        bottomRightSlot={() => (
          <ButtonLink 
            dialogue={"Create Profile"}
            link="/create-profile"
          />
        )}
      />
    
      </div>
)