import React, { useState } from "react"
import {
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
  FormGroup,
  Container,
  Paper,
} from "@mui/material"

const CheckboxComponent = () => {
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  })

  const handleChange = (event) => {
    const { name, checked } = event.target
    setOptions({
      ...options,
      [name]: checked,
    })
  }

  const handleSave = () => {
    console.log("Selected Options:", options)
    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  const handleReset = () => {
    setOptions({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    })
  }

  return (
    <Container maxWidth="sm" style={{ padding: "20px", marginTop: "20px" }}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <FormGroup>
          <Box mb={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.option1}
                  onChange={handleChange}
                  name="option1"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Option 1</Typography>
                  <Typography variant="caption">
                    This is an explanatory text for Option 1.
                  </Typography>
                </Box>
              }
            />
          </Box>
          <Box mb={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.option2}
                  onChange={handleChange}
                  name="option2"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Option 2</Typography>
                  <Typography variant="caption">
                    This is an explanatory text for Option 2.
                  </Typography>
                </Box>
              }
            />
          </Box>
          <Box mb={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.option3}
                  onChange={handleChange}
                  name="option3"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Option 3</Typography>
                  <Typography variant="caption">
                    This is an explanatory text for Option 3.
                  </Typography>
                </Box>
              }
            />
          </Box>
          <Box mb={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.option4}
                  onChange={handleChange}
                  name="option4"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Option 4</Typography>
                  <Typography variant="caption">
                    This is an explanatory text for Option 4.
                  </Typography>
                </Box>
              }
            />
          </Box>
        </FormGroup>
        <Box mt={2} display="flex" justifyContent="flex-end" width="100%">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{ marginRight: "8px" }}
          >
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default CheckboxComponent
