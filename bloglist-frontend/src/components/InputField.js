import React from 'react';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Icon,
  Grid,
} from '@material-ui/core';

const InputField = ({ password, icon, label, value, onChange }) => {
  return (
    <Grid item>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type={password ? 'password' : 'text'}
          startAdornment={
            <InputAdornment position="start">
              <Icon>{icon}</Icon>
            </InputAdornment>
          }
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );
};

export default InputField;
