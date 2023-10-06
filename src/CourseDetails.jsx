import { Box,Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'

const CourseDetails = () => {
  const location = useLocation();
  const [course,setCourse] = useState({})
  console.log('Main course :::',course)
  useEffect(()=>{
    console.log('location :::',location)
    setCourse(location?.state?.detail)
  },[location])
  return (<Grid container>
      <Grid item xs={6}>
       <Box sx={{height:'500px',width:'80%'}} component='img' src={course?.imageLink} alt = 'Course Image' />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h2">{course?.title}</Typography>
        <Typography variant="h4">{course?.price}</Typography>
        <Typography variant="body1">{course?.description}</Typography>
      </Grid>
    </Grid>)
}

export default CourseDetails;