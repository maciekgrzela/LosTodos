import React from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '& .MuiTextField-root': {
      flexBasis: '70%',
    },
    '& .MuiInputBase-root': {
      color: '#fff',
      borderWidth: 4,
      '&::placeholder': {
        color: 'blue',
      },
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color: 'white',
        borderWidth: 2,
      },
      '&:hover fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color: 'white',
      },
    },
  },
  inputLabel: {
    color: '#fff',
    transform: 'translate(14px, 14px) scale(1)',
  },
  input: {
    '& input': {
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  radioGroup: {
    '& label:last-child': {
      marginRight: 0,
    },
  },
  radioLabel: {
    color: 'white',
    '& span:first-child': {
      color: 'white',
      padding: '9px 2px',
    },
    '& span:last-child': {
      fontSize: '0.9rem',
    },
  },
}));

const DrawerSearch = ({
  sortContent,
  setSortContent,
  sortType,
  setSortType,
  filterTodos,
}) => {
  const styles = useStyles();

  return (
    <Grid container item className={styles.root}>
      <form className={styles.form}>
        <Grid container justify='space-between'>
          <TextField
            InputLabelProps={{
              className: styles.inputLabel,
            }}
            InputProps={{
              className: styles.input,
            }}
            variant='outlined'
            label='Szukaj'
            type='text'
            value={sortContent}
            onChange={(e) => {
              setSortContent(e.target.value);
            }}
            placeholder='Szukaj TODO/ TODO Listy'
          />
          <Button
            type='submit'
            style={{ backgroundColor: 'white' }}
            variant='contained'
            onClick={(e) => {
              e.preventDefault();
              filterTodos();
            }}
          >
            <SearchIcon style={{ color: '#760D0D' }} />
          </Button>
        </Grid>
        <Grid container>
          <FormControl component='fieldset' style={{ width: '100%' }}>
            <RadioGroup
              name='sortingTypes'
              value={sortType}
              onChange={(e, value) => {
                setSortType(value);
              }}
              className={styles.radioGroup}
              style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
              <FormControlLabel
                value='date'
                className={styles.radioLabel}
                control={<Radio />}
                label='Po dacie'
              />
              <FormControlLabel
                value='tag'
                className={styles.radioLabel}
                control={<Radio />}
                label='Po tagu'
              />
              <FormControlLabel
                value='title'
                className={styles.radioLabel}
                control={<Radio />}
                label='Po tytule'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </form>
    </Grid>
  );
};

export default DrawerSearch;
