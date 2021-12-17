import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ProjectStyles";
function Project({ project, classes }) {
  return (
    <div className={classes.main}>
      <Card sx={{ width: "100%" }}>
        <a href={project.url}>
          <CardHeader title={project.name} />
          <CardMedia
            component="img"
            height="194"
            image={project.img}
            alt={project.name}
          />
        </a>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {project.about} <br />
            <a href={project.gitHub}>GitHub Code</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Project);
