import React from "react"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

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
import { orange } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import Album from "./components/Album"
import Form from "./components/Form"

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: orange[500],
    },
    customColors: {
      blue: "#00f",
      green: "#0f0",
      red: "#f00",
      lightGrey: "#f5f5f5",
    },
  },
})

// const useStyles = makeStyles((theme) => ({
//   background: theme.palette.primary.main,
// }))

function App() {
  // const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Album /> */}
        <Form />
      </ThemeProvider>
    </>
  )
}

export default App
