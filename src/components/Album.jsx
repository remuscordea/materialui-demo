import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Box,
  Button,
  ButtonGroup,
  Paper,
} from "@mui/material"

function Album() {
  return (
    <Paper>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">My Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              // color="textSecondary"
              sx={{ color: "customColors.lightGrey" }}
              paragraph
            >
              Hello everyone! This is a photo album and I'm trying to make this
              sentence as long as possible so we can see how it looks like when
              it wraps.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </Paper>
  )
}

export default Album
