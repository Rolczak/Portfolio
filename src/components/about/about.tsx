import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { CardItem } from "../layout/CardItem";

export function About() {
    return (<CardItem title="About me" icon={<InfoIcon color="primary" sx={{verticalAlign: 'middle'}} />}>
      <Typography p={3} variant="body1">
        I'm don't afraid of challenges and tough topics. I'm ambiotious and
        hardworkig. In projects I'm often responsible for creating new solutions
        from scratch. I feel comfortable working in backend (which is my main
        specialization) and frontend. I can cooperate with team and I'm always
        helping others. I'm interested in things that in that moment seems
        fun to me, but above all I like creating things that's why I like
        my job so much 😉
      </Typography>
    </CardItem>)
}

