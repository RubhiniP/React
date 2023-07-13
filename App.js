import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/styles';


function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
    control={<Checkbox
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    inputProps={{
      'aria-label': 'secondary checkbox'
    }}
    />}
    label = "Click Me"
    />
    )
}

// const useStyles = makeStyles({
//   root:{
//     background: 'linear-gradient(45deg, #333, #999)',
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: 'white',
//     padding: '5px 30px'
//   }
// })

// function ButtonStyled(){
//   const classes = useStyles();
//   return <Button className={classes.root}>TEST BUTTON</Button>
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <ButtonStyled /> */}
      <Button 
      size='large'
      onClick={() => alert("Hello")} 
      variant='contained' 
      color='success'>HELLO WORLD</Button>
      <CheckboxExample />
      <img src={logo} className="App-logo" alt="logo" />
      <TextField 
      // onClick={() => alert('YOu typed')}
      variant='outlined'
      color='secondary'
      label='Full Name'
      placeholder='Enter your name'
      />
      <TextField 
      variant='outlined'
      color='secondary'
      type='time'/>
      <TextField 
      variant='outlined'
      color='primary'
      type='date'/>
      </header>
    </div>
  );
}

export default App;
