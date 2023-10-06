import { Typography, Card, Button } from "@mui/material/";
import AspectRatio from "@mui/joy/AspectRatio";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:9000/admin/courses/", {
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
      {courses.map((course) => {
        return <Cards1 course={course} />;
      })}
    </div>
  );
}

export function Cards1(props) {
  const course = props.course;
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
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
              backgroundColor: "#00aagg",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            Purchase
          </Button>
        </Card>
      </center>
    </>
  );
}

export default Courses;
