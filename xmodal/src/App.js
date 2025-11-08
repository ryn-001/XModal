import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./App.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState({
    username: '',
    phno: '',
    email: '',
    dob: ''
  })

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.phno.length < 10){
      alert('Invalid Phone Number. Please enter a 10-digit phone number.');
      return;
    }

    if((new Date(data.dob)).getTime() > (new Date()).getTime()){
      alert('Invalid date of birth. Date of birth cannot be in the future.')
      return;
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>User Detail Model</h1>
        <Button onClick={handleOpen}>Open Form</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <h3>Fill Details</h3>

              <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='Enter your username' id='username' name='username' value={data.username} onChange={handleChange} required /> <br/>

                <label htmlFor='email-id'>Email Address:</label>
                <input type='email' placeholder='Enter your Email Address' id='email-id' name='email' value={data.email} onChange={handleChange} required /> <br/>

                <label htmlFor='ph-no'>Phone Address:</label>
                <input type='number' placeholder='Enter your phone number' id='ph-no' name='phno' value={data.phno} onChange={handleChange} /> <br/>

                <label htmlFor='dob'>Date of Birth:</label>
                <input type='date' id='dob' name='dob' value={data.dob} onChange={handleChange} /> <br/>
                
                <button>Submit</button>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
