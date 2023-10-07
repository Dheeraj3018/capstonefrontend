import { Typography, Grid, Avatar, Button, Box, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [adminEmail, setAdminEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://capstonebackend-ui3a.onrender.com/user/me", {
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
        const response = await axios.get("https://capstonebackend-ui3a.onrender.com/admin/me", {
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
          <Paper elevation={3}>
            <div style={{ padding: "20px", backgroundColor: "#eeeeee",display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ boxShadow: 10 ,justifyContent: "space-between"}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "2px solid black",
                    paddingRight: "8px",
                    paddingLeft: "4px",
                    boxShadow: 3,
                    backgroundColor: "white",
                  }}
                >
                  
                  <div style={{ display: "flex"  }}>
                    <Grid item xs={1}>
                      <SchoolIcon
                        style={{
                          color: "#00aaff",
                          fontSize: "60px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                    <Typography
                      style={{
                        paddingTop: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Courses
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => {
                          navigate("/purchasedCourses");
                        }}
                      >
                        Purchased Courses
                      </Button>
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => {
                          navigate("/courses");
                        }}
                      >
                        Courses
                      </Button>
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "19px",
                          fontWeight: "bold",
                          color: "white",
                          textTransform: "none",
                          backgroundColor: "#db047b",
                        }}
                        variant="contained"
                        onClick={() => {
                          localStorage.setItem("token", null);
                          window.location = "/";
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        alt="Cananon"
                        src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </Paper>
        </>
      );

    case adminEmail !== null:
      return (
        <>
          <Paper elevation={3}>
            <div style={{ padding: "20px", backgroundColor: "#eeeeee" }}>
              <Box sx={{ boxShadow: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "2px solid black",
                    paddingRight: "8px",
                    paddingLeft: "4px",
                    boxShadow: 3,
                    backgroundColor: "white",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Grid item xs={1}>
                      <SchoolIcon
                        style={{
                          color: "#00aaff",
                          fontSize: "60px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                    <Typography
                      style={{
                        paddingTop: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Kourses
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => {
                          navigate("/addcourse");
                        }}
                      >
                        Add Course
                      </Button>
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => {
                          navigate("/courses");
                        }}
                      >
                        Courses
                      </Button>
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "19px",
                          fontWeight: "bold",
                          color: "white",
                          textTransform: "none",
                          backgroundColor: "#db047b",
                        }}
                        variant="contained"
                        onClick={() => {
                          localStorage.setItem("token", null);
                          window.location = "/";
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        alt="Cananon"
                        src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </Paper>
        </>
      );

    default:
      return (
        <>
    
          <Paper elevation={3}>
            <div style={{ padding: "20px", backgroundColor: "#eeeeee" }}>
              <Box sx={{ boxShadow: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "2px solid black",
                     boxShadow: 3,
                    backgroundColor: "white",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Grid item xs={1}>
                      <SchoolIcon
                        style={{
                          color: "#00aaff",
                          fontSize: "60px",
                          paddingRight: "10px",
                        }}
                      />
                    </Grid>
                    <Typography
                      style={{
                        paddingTop: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      Courses
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => {
                          navigate("/signin");
                        }}
                      >
                        See Courses
                      </Button>
                    </div>
                    <div style={{ paddingTop: "8px" }}>
                      <Button
                        style={{
                          fontSize: "19px",
                          fontWeight: "bold",
                          color: "white",
                          textTransform: "none",
                          backgroundColor: "#db047b",
                        }}
                        variant="contained"
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          
          </Paper>
        </>
      );
  }
}

export default Appbar;
