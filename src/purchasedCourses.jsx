import { Box, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

import AspectRatio from "@mui/joy/AspectRatio";

function PurchasedCourses() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    axios
      .get("https://capstonebackend-ui3a.onrender.com/user/purchasedCourses", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setCourses(res.data.purchasedCourses);
        console.log(res.data.purchasedCourses);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  if (loading) {
    return (
      <center>
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      </center>
    );
  }
  return (
    <>
      <div>
        <Grid container>
          {courses.map((course, index) => (
            <Grid item lg={12} md={12} sm={12} key={index}>
              <center
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  padding: "10px",
                }}
              >
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
                  <hr />
                  <div>
                    <Typography variant="h3" fontSize="30px">
                      {course.title}
                    </Typography>
                    <Typography level="body2">{course.description}</Typography>
                    <Typography variant="subtitle2" style={{ color: "gray" }}>
                      Bought At
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>Rs {course.price} </b>
                    </Typography>
                  </div>
                </Card>
              </center>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default PurchasedCourses;
