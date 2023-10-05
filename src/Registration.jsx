import {
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Registration() {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
                Register/Singup Form
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <form>
                <TextField
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  label="Email"
                  required
                  margin="normal"
                /><br/>
               
                <TextField
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  label="Password"
                  required
                  margin="normal"
                />
                <Typography variant="subtitle1" color="red">
                  <strong>Note : </strong>Sigup as ADMIN <br /> only for course
                  uploads.
                </Typography>
                <div>
                  <FormControl sx={{ minWidth: "245px", marginTop: "16px" }}>
                    <InputLabel id="role-label" required>
                      Signup as
                    </InputLabel>
                    <Select size=""
                      input={<OutlinedInput label="Signup as" />}
                      labelId="role-label"
                      id="role-select"
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "16px" }}
                  onClick={async (e) => {
                    e.preventDefault();
                    const url =
                      selectedRole === "user"
                        ? "http://localhost:9000/user/signup"
                        : "http://localhost:9000/admin/signup";
                    const res = await axios.post(
                      url,
                      {
                        username: email,
                        password: password,
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                        },
                      }
                    );
                    const data = res.data;

                    localStorage.setItem("token", data.token);
                    window.location = "/";
                  }}
                >
                  Sign up
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default Registration;
