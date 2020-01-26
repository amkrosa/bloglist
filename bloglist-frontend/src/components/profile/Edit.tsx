export const s = 1;
/*import React, { useState } from 'react';
import InputField from '../common/InputField';
import Form from '../common/Form';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: 'center',
  },
  element: {
    margin: '20px auto',
  },
}));

const Edit = (props: any) => {
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Form className={classes.form} onSubmit={handleSubmit}>
        <InputField
          value={name}
          onChange={({ target }) => setName(target.value)}
          label="Name"
        ></InputField>
        <InputField
          password
          value={oldPassword}
          required
          onChange={({ target }) => setOldPassword(target.value)}
          label="Old password"
        ></InputField>
        <InputField
          password
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
          label="New Password"
        ></InputField>
        <div className={classes.form}>
          <Button
            className={classes.element}
            variant="contained"
            color="primary"
            type="submit"
          >
            Edit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Edit;*/
