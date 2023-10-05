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
            image="https://picsum.photos/200"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Loram
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Rem
              oluptatibus molestiae impedit est
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
