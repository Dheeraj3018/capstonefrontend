import { TextField, Box, Button, Card, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AspectRatio from "@mui/joy/AspectRatio";
import Cards1 from "./Cards1";

function Course() {
  let { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    console.log(courseId);
    axios
      .get("https://capstonebackend-ui3a.onrender.com" + courseId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourse(res.data.course);
        console.log(res.data.course);
      });
  }, []);

  if (!course) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <>
      <div>
        <Grid container>
          <Grid item lg={6} md={12} sm={12}>
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
                <hr />
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
              </Card>
            </center>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <UpdateCourse course={course} setCourse={setCourse} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export function UpdateCourse({ course, setCourse }) {
  console.log("hihiihi");
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.imageLink);
  const [price, setPrice] = useState(course.price);

  return (
    <>
      <center>
        <div style={{ padding: "20px" }}>
          <Card
            sx={{ maxWidth: 445, boxShadow: 10 }}
            style={{ paddingBottom: "20px" }}
          >
            <div style={{ paddingTop: "10px" }}>
              <Typography style={{ fontWeight: "bolder", fontSize: "30px" }}>
                Update Course Form
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                padding: "20px",
              }}
            >
              <form>
                <TextField
                  fullWidth={true}
                  label="Title"
                  required
                  margin="normal"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Description"
                  required
                  margin="normal"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Image Link"
                  required
                  margin="normal"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Price"
                  required
                  margin="normal"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "16px" }}
                  onClick={async (e) => {
                    e.preventDefault();
                    axios.put(
                      "https://capstonebackend-ui3a.onrender.com" + course._id,
                      {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true,
                        price,
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );
                    let updatedCourse = {
                      _id: course._id,
                      title: title,
                      description: description,
                      imageLink: image,
                      price,
                    };
                    setCourse(updatedCourse);
                    alert("'Course Updated'");
                  }}
                >
                  Update Course
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default Course;
