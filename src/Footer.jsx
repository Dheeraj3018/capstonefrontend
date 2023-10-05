import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Paper elevation={10}>
        <div style={{ padding: "20px" }}>
          <Box sx={{ boxShadow: 10 }}>
            <center>
              <div
                style={{
                  border: "2px solid black",
                  paddingRight: "8px",
                  paddingLeft: "4px",
                  boxShadow: 3,
                  backgroundColor: "white",
                }}
              >
                <Typography color="textPrimary" variant="h5">
                  React Based Full Stack App
                </Typography>
                <hr style={{ border: "2px solid black", width: "80%" }} />
                <Typography
                  color="textSecondary"
                  variant="subtitle1"
                >{`${new Date().getFullYear()}`}</Typography>
                <hr style={{ border: "1px solid black", width: "80%" }} />
                <Typography
                  color="textSecondary"
                  fontWeight="bold"
                  variant="subtitle1"
                >{`Develpoed By : @username`}</Typography>
              </div>
            </center>
          </Box>
        </div>
      </Paper>
    </>
  );
}

export default Footer;
