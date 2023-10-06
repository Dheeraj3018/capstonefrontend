import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material/";

function Cards() {
  return (
    <>
      <center>
        <Card
          sx={{ maxWidth: 345 }}
          style={{ paddingBottom: "20px", borderRadius: "40px" }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python.
            </Typography>
          </CardContent>
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
            View Details
          </Button>
        </Card>
      </center>
    </>
  );
}

export default Cards;
