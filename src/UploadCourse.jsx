import { TextField, Box, Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function UplodaCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

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
                Upload Course Form
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Description"
                  required
                  margin="normal"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Image Link"
                  required
                  margin="normal"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                <TextField
                  fullWidth={true}
                  label="Price"
                  required
                  margin="normal"
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
                    await axios.post(
                      "https://capstonebackend-ui3a.onrender.com",
                      {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true,
                        price,
                      },
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );
                    alert("'Course Uploaded'");
                  }}
                >
                  Upload
                </Button>
              </form>
            </Box>
          </Card>
        </div>
      </center>
    </>
  );
}

export default UplodaCourse;
