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

function Loginup() {
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
                Login/Singin Form
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
                /> <br/>
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
                  <strong>Note : </strong>Select same option as <br /> chosen
                  during singup.
                </Typography>
                <div>
                  <FormControl sx={{ minWidth: "245px", marginTop: "16px" }}>
                    <InputLabel id="role-label" required>
                      Signin as
                    </InputLabel>
                    <Select
                      input={<OutlinedInput label="Signin as" />}
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
                        ? "http://localhost:3000/user/login"
                        : "http://localhost:3000/admin/login";
                    const res = await axios.post(
                      url,
                      {
                        username: email,
                         password: password,
                      },
                      {
                        headers: {
                          "Content-type": "application/json",
                          username: `${email}`,
                          password: `${password}`,
                        },
                      }
                    );
                    const data = res.data;
                    localStorage.setItem("token", data.token);
                    axios.defaults.headers.common[
                      "Authorization"
                    ] = `Bearer ${data.token}`;
                    window.location = "/";
                  }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default Loginup;
