import React from 'react';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Icon,
  Grid,
  TextField,
} from '@material-ui/core';

const InputField = ({ password, icon, label, value, onChange, ...rest }) => {
  return (
    <Grid item>
      <FormControl>
        <TextField
          label={label}
          id="input-with-icon-adornment"
          type={password ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>{icon}</Icon>
            </InputAdornment>
          ),
        }}
          {...rest}
        />
      </FormControl>
    </Grid>
  );
};

export default InputField;
