import React, {useState, useEffect} from 'react';
import { useFormspark } from "@formspark/use-formspark";
import { Box, Container, Typography, TextField, Button, MenuItem, Grid } from '@mui/material';
// import { useDarkMode } from '../context/DarkModeContext';
import { Fade } from 'react-awesome-reveal';
import { useMediaQuery } from '@mui/material';
import ContactAppBar from '../components/ContactAppBar';
import LoadingScreen from '../components/LoadingScreen'
import EmailIcon from '@mui/icons-material/Email';

const projectTypes = [
  'Event & Content Marketing',
  'Creative Digital Marketing',
  'Marketing Analytics',
  'Brand Strategy & Development',
  'Other',
];

const formContainerStyles = {
  margin:'auto',
  transition: 'width 1s ease-in-out', // CSS transition for width
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Glassy effect background color
  backdropFilter: 'blur(10px)', // Glassy effect backdrop filter
  borderRadius: '25px',
  padding: '25px',
  zIndex: 1,
};


const smformContainerStyles = {
  margin:'auto',
  marginTop: '2rem',
  transition: 'width 1s ease-in-out', // CSS transition for width
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Glassy effect background color
  backdropFilter: 'blur(10px)', // Glassy effect backdrop filter
  borderRadius: '25px',
  padding: '25px',
};


const FORMSPARK_ACTION_URL = "https://submit-form.com/YOUR FORM ID FROM FORMSPARK";

const ContactPage = () => {



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  // const { darkMode } = useDarkMode();
  const darkMode = true;
  const [formWidth, setFormWidth] = React.useState('0%');
  const isMdScreen = useMediaQuery('(min-width:960px)');

  React.useEffect(() => {

    const timeout = setTimeout(() => {
      setFormWidth('80%');
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const containerStyles = isMdScreen ? formContainerStyles : smformContainerStyles;


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const [submit, submitting] = useFormspark({
    formId: "YOUR FORM ID" // Use this hook from formspark if you dont want to use the FORMSPARK_ACTION_URL
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Please Fill All The Fields.");
    } else {
     
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          projectType,
          message,
        }),
      });
      alert("Mesage Sent.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setProjectType("");
        setMessage("");
    }
  };


  return (
    <>
    {loading ? <LoadingScreen /> 
    :
    <Box sx={{height:'100vh', backgroundColor:'#090808'}}>
 
      <ContactAppBar/>
      <Box id="contactUs" sx={{position:'relative', backgroundColor: darkMode ? '#090808' : '#f6fbf6', color: darkMode ? 'white' : 'black', marginTop: '4%', }}>
        <Container >
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{marginLeft:'2rem', fontSize:{xs:'50px', md:'100px'}, color:'#00c062'}}>
              <EmailIcon sx={{fontSize:'2rem'}}/> 
            </Box >
            <Typography sx={{fontSize:{xs:'50px', md:'70px'}, fontWeight: '500', fontFamily:'Poppins', color:'#00c062'}}>
              CONTACT US
            </Typography>
          </Box>
          <br />
          <Fade left triggerOnce>
            <Box sx={{...containerStyles, width: formWidth, }}>


              <form validate autoComplete="off"  onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      name='firstName'
                      fullWidth
                      required
                      margin="normal"
                      label="First Name"
                      variant="standard"
                      className='textfields'
                      sx={{'& label': darkMode ? {color:'black'} : {color:'black'}, '& label.Mui-focused': {color: 'black', }, '& .MuiInput-underline:after':{borderBottomColor: 'black',} }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      name='lastName'
                      fullWidth
                      required
                      margin="normal"
                      label="Last Name"
                      variant="standard"
                      className='textfields'
                      sx={{'& label': darkMode ? {color:'black'} : {color:'black'}, '& label.Mui-focused': {color: 'black', }, '& .MuiInput-underline:after':{borderBottomColor: 'black',} }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                      fullWidth
                      required
                      margin="normal"
                      label="Email Address"
                      variant="standard"
                      className='textfields'
                      sx={{'& label': darkMode ? {color:'black'} : {color:'black'}, '& label.Mui-focused': {color: 'black', }, '& .MuiInput-underline:after':{borderBottomColor: 'black',} }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      name='projectType'
                      fullWidth
                      margin="normal"
                      select
                      required
                      label="Project Type"
                      variant="standard"
                      className='textfields'
                      sx={{'& label': darkMode ? {color:'black'} : {color:'black'}, '& label.Mui-focused': {color: 'black', }, '& .MuiInput-underline:after':{borderBottomColor: 'black',} }}
                      defaultValue=""
                    >
                      {projectTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name='message'
                      fullWidth
                      required
                      margin="normal"
                      multiline
                      rows={4}
                      label="Message"
                      variant="standard"
                      className='textfields'
                      sx={{'& label': darkMode ? {color:'black'} : {color:'black'}, '& label.Mui-focused': {color: 'black', }, '& .MuiInput-underline:after':{borderBottomColor: 'black',} }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <br></br>
                    <Box sx={{ textAlign: 'center',}}>
                      <Button type="submit" disabled={submitting} sx={{fontFamily:'Inter', border: '1px solid black', color: 'black', backgroundColor:'#00c062', width:'150px', borderRadius:'20px', '&:hover': {backgroundColor:'#00c062', borderColor:'white',},}}>
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Fade>
          
        </Container>
      </Box>
           
    </Box>
    }
    </>
  );
};

export default ContactPage;
