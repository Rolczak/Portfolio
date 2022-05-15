import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface CardItemProps {
  icon: ReactElement;
  title: string;
  children: ReactNode;
}

export function CardItem(props: CardItemProps) {
  return (
    <Card sx={{ marginTop: 1 }}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item>{props.icon}</Grid>
          <Grid item>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box p={1}>{props.children}</Box>
    </Card>
  );
}
