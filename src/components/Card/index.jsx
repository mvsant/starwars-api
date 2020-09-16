import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardStyled } from "./style";

export default function NewCard({ title, img }) {
  return (
    <CardStyled>
      <CardContent>
        <Typography variant="h5">{title || "Card Title"}</Typography>
      </CardContent>
      <CardMedia
        image={img}
        title={title + " image"}
        height="160"
        component="img"
      />
    </CardStyled>
  );
}
