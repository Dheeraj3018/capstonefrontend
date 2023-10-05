import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AspectRatio, Button, Card, CardContent, Typography } from "@mui/joy/";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <AllCourses course={course} />;
      })}
    </div>
  );
}

export function AllCourses({ course }) {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [adminEmail, setAdminEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = response.data;
        if (data.username) {
          setUserEmail(data.username);
        }
      } catch (error) {
        console.log("403 userEmail doesnt exist");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = response.data;
        if (data.username) {
          setAdminEmail(data.username);
        }
      } catch (error) {
        console.log("403 adminEmail doesnt exist");
      }
    };

    fetchData();
  }, []);

  switch (true) {
    case userEmail !== null:
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card variant="outlined" sx={{ width: 320 }}>
              <div>
                <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                  {course.title}
                </Typography>
                <Typography level="body2">{course.description}</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img src={course.imageLink} />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    {course.price}
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 600 }}
                  onClick={async () => {
                    await axios.post(
                      "http://localhost:3000/user/courses/" + course._id,
                      {},
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );
                    alert("'Course purchased successfully'");
                  }}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      );

    case adminEmail !== null:
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card variant="outlined" sx={{ width: 320 }}>
              <div>
                <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                  {course.title}
                </Typography>
                <Typography level="body2">{course.description}</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img src={course.imageLink} />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    {course.price}
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 600 }}
                  onClick={() => {
                    navigate("/course/" + course._id);
                  }}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      );

    default:
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card variant="outlined" sx={{ width: 320 }}>
              <div>
                <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                  {course.title}
                </Typography>
                <Typography level="body2">{course.description}</Typography>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img src={course.imageLink} />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    {course.price}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      );
  }
}

export default Courses;
