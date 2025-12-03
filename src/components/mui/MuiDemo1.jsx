import { Box, Grid, Typography } from "@mui/material";
import React from "react";

//mui componet custome stype sx poops
export const MuiDemo1 = () => {
  return (
    <Box
      sx={{
        minHeight: "400px",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "10px",
        m: "5px",
        height:"auto"
      }}
    >
      <Typography sx={{color:"blue"}} variant="h3">MUI DEMO</Typography>
      {/* <Grid container spacing={2}>
        <Grid size={8} sx={{height:"200px",backgroundColor:"yellow",border:"1px solid black"}}>

        </Grid>
        <Grid size={4} sx={{height:"200px",backgroundColor:"pink",border:"1px solid black"}}>

        </Grid>
        <Grid size={4} sx={{height:"200px",backgroundColor:"yellow",border:"1px solid black"}}>

        </Grid>
        <Grid size={4} sx={{height:"200px",backgroundColor:"pink",border:"1px solid black"}}>

        </Grid>
        <Grid size={4} sx={{height:"200px",backgroundColor:"white",border:"1px solid black"}}>

        </Grid>
        
      </Grid> */}

      <Grid container spacing={2}>
        <Grid size={{xs:12,md:8,lg:8,sm:12,xl:8}} sx={{height:"200px",backgroundColor:"yellow",border:"1px solid black"}}>

        
        </Grid>
        <Grid size={{xs:12,md:4,lg:4,sm:12,xl:4}} sx={{height:"200px",backgroundColor:"pink",border:"1px solid black"}}>

        </Grid>
        <Grid size={{xs:12,md:4,lg:4,sm:12,xl:4}} sx={{height:"200px",backgroundColor:"yellow",border:"1px solid black"}}>

        </Grid>
        <Grid size={{xs:12,md:4,lg:4,sm:12,xl:4}} sx={{height:"200px",backgroundColor:"pink",border:"1px solid black"}}>

        </Grid>
        <Grid size={{xs:12,md:4,lg:4,sm:12,xl:4}} sx={{height:"200px",backgroundColor:"white",border:"1px solid black"}}>

        </Grid>
        
      </Grid>
    </Box>
  );
};
