import StarIcon from "@mui/icons-material/Star";
import {
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import { CardItem } from "../layout/CardItem";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/system";
import { ReactNode } from "react";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.secondary.main,
  },
}));

const RateWrapper = (props: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
    </Box>
  );
};

export function Skills() {
  return (
    <CardItem title={"Skills"} icon={<StarIcon color="primary" sx={{verticalAlign: 'middle'}} />}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }} mt={1}>
            <Typography variant="h5">Backend</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">C# and .NET (ASP)</Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">SQL (MySQL)</Typography>
            <StyledRating
              value={3}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">
              Entity Framework (Core, 6)
            </Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Rabbit MQ</Typography>
            <StyledRating
              value={2}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">REST API</Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Unit tests (xUnit, nUnit)</Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Jenkins</Typography>
            <StyledRating
              value={2}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }} mt={1}>
            <Typography variant="h5">Frontend</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">React</Typography>
            <StyledRating
              value={3}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Typescript (Javascript)</Typography>
            <StyledRating
              value={3}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">jQuery</Typography>
            <StyledRating
              value={2}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Bootstrap</Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Mui</Typography>
            <StyledRating
              value={1}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={6}>
          <RateWrapper>
            <Typography component="legend">Kendo UI</Typography>
            <StyledRating
              value={4}
              max={5}
              readOnly
              emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
              icon={<CircleIcon fontSize="inherit" />}
            />
          </RateWrapper>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }} mt={1}>
            <Typography variant="h5">Others</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <RateWrapper>
            <Typography component="legend">
              Team player
            </Typography>
            <Rating value={5} max={5} readOnly />
          </RateWrapper>
        </Grid>
        <Grid item xs={12}>
          <RateWrapper>
            <Typography component="legend">
              Google and StackOverflow searching
            </Typography>
            <Rating value={5} max={5} readOnly />
          </RateWrapper>
        </Grid>
        <Grid item xs={12}>
          <RateWrapper>
            <Typography component="legend">
              TDD, DDD, SSD and other 3 letter acronyms
            </Typography>
            <Rating value={5} max={5} readOnly />
          </RateWrapper>
        </Grid>
      </Grid>
    </CardItem>
  );
}
