import {  Box,Typography, Card, Button } from "@mui/material/";
import AspectRatio from "@mui/joy/AspectRatio";
import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {displayRazorpay} from './payment/pament'

function Courses() {
  const [courses, setCourses] = useState([]);
  console.log('courses :::',courses)

  

  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("https://capstonebackend-ui3a.onrender.com/admin/courses/", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses && courses.map((course) => {
        return <Cards1 course={course} />;
      })}
    </div>
  );
}

export function Cards1(props) {
  const course = props.course;
  const navigate = useNavigate();
  const handleDetails = useCallback((course) => ()=>{
    console.log('>>>')
    navigate('/courses/details',{
      state : {detail : course}
    });
  },[])

  const handlePayment = useCallback((price)=>()=>{
    displayRazorpay(price);
  },[])
  return (
    <>
      <center style={{ padding: "10px" }}>
        <Card
          variant="outlined"
          sx={{ width: 300 }}
          style={{ paddingBottom: "20px", borderRadius: "40px" }}
        >
          <AspectRatio ratio={16 / 9}>
            <div>
              <img src={course.imageLink} />
            </div>
          </AspectRatio>
          <div>
            <Typography variant="h3" fontSize="30px">
              {course.title}
            </Typography>
            <Typography level="body2">{course.description}</Typography>
            <Typography variant="subtitle2" style={{ color: "gray" }}>
              Price
            </Typography>
            <Typography variant="subtitle1">
              <b>Rs {course.price} </b>
            </Typography>
          </div>
          <Box sx={{display : 'flex',justifyContent : 'space-around'}}>
          <Button
            style={{
              borderRadius : 5
            }}
            variant="contained"
            onClick={handlePayment(course.price)}
            >
            Purchase
          </Button>
          <Button variant="contained"
            style={{
              borderRadius : 5
            }}
            onClick={handleDetails(course)}
          >View Details</Button>
          </Box>
        </Card>
      </center>
    </>
  );
}

export default Courses;
