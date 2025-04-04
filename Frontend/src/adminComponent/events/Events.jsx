// import { Box, Button, Grid, Modal, TextField } from "@mui/material";
// import React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// const initialValues=
//     {
//         image:"",
//         location:"",
//         name:"",
//         startedAt:"",
//         endsAt:null
//     }


// export const Events=()=>{

//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [formValues,setFormValues] = React.useState(initialValues)

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log("submit" , formValues);
//         setFormValues(initialValues)
//     }
//     const handleFormChange = (e)=>{
//         setFormValues({...formValues,[e.target.name]:e.target.values})
//     }
//     const handleDateChange = (date,dateType) =>{
//         const formatedDate=days(date).format("MMMM DD, YYYY hh:mm A");
//         setFormValues({...formValues,[dateType]:formatedDate})
//     }


//     return (
//         <div>
//             <div className="p-5">
//                 <Button onClick={handleOpen} variant="contained">
//                     Create New Event
//                 </Button>
//                 <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//                 >
//                     <Box sx={style}>
//                         <form onSubmit={handleSubmit}>
//                             <Grid container spacing={3}>
//                                 <Grid item xs={12}> 
//                                     <TextField 
//                                     name="image" 
//                                     label="Image URL" 
//                                     variant="outlined" 
//                                     fullWidth 
//                                     value={formValues.image}
//                                     onChange={handleFormChange}
//                                     /> 
//                                 </Grid> 
//                                 <Grid item xs={12}> 
//                                     <TextField 
//                                     name="location" 
//                                     label="Location" 
//                                     variant="outlined"
//                                     fullWidth
//                                     value={formValues.location}
//                                     onChange={handleFormChange}/>

//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                     name="name"
//                                     label="Event Name" 
//                                     variant="outlined"
//                                     fullWidth
//                                     value={formValues.name}
//                                     onChange={handleFormChange}/>

//                                 </Grid>
//                                 <Grid item xs={12}> 
//                                     <LocalizationProvider dateAdapter={AdapterDayjs}> 
//                                         <DateTimePicker 
//                                             render Input={(props) => <TextField {...props} />} 
//                                             label="Start Date and Time" 
//                                             value={formValues.startedAt}
//                                             onChange={(newValue) => 
//                                                 handleDateChange (newValue, "startedAt") 
//                                             } 
//                                             inputFormat= "MM/dd/yyyy hh:mm a" 
//                                             className="w-full" 
//                                             sx={{ width: "100%"}}
//                                         />
//                                     </LocalizationProvider>
//                                 </Grid>

//                                 <Grid item xs={12}> 
//                                     <LocalizationProvider dateAdapter={AdapterDayjs}> 
//                                         <DateTimePicker 
//                                             render Input={(props) => <TextField {...props} />} 
//                                             label="End Date and Time" 
//                                             value={formValues.endsAt}
//                                             onChange={(newValue) => 
//                                                 handleDateChange (newValue, "endsAt") 
//                                             } 
//                                             inputFormat= "MM/dd/yyyy hh:mm a" 
//                                             className="w-full" 
//                                             sx={{ width: "100%"}}
//                                         />
//                                     </LocalizationProvider>
//                                 </Grid>


                                    
//                             </Grid>
//                         </form>
//                     </Box>
//                 </Modal>
//             </div>
//         </div>
//     )
// }
// export default Events








import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto'
};

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null
};

export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
    setFormValues(initialValues);
    handleClose();
  };

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateType) => {
    const formattedDate = date ? date.format("MMMM DD, YYYY hh:mm A") : null;
    setFormValues({ ...formValues, [dateType]: formattedDate });
  };

  return (
    <div className="p-5">
      <Button onClick={handleOpen} variant="contained">
        Create New Event
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="image"
                  label="Image URL"
                  variant="outlined"
                  fullWidth
                  value={formValues.image}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="location"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  value={formValues.location}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Event Name"
                  variant="outlined"
                  fullWidth
                  value={formValues.name}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12} >
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Start Date and Time"
                    value={formValues.startedAt ? dayjs(formValues.startedAt) : null}
                    onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        variant="outlined"
                       
                      />
                    )}
                  />
                
                </LocalizationProvider>
            
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="End Date and Time"
                    value={formValues.endsAt ? dayjs(formValues.endsAt) : null}
                    onChange={(newValue) => handleDateChange(newValue, "endsAt")}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          style: {
                            backgroundColor: '#fff',  // match other fields
                          }
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Events;
