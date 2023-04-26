import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

export default function BasicCard({
  title,
  director,
  releaseDate,
  collections,
}) {
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          height: 320,
          textAlign: "center",
          margin: "20px",
        }}
      >
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5, fontWeight: 800 }}>
          {title}
        </Typography>
        <Typography level="body2">Release date: {releaseDate}</Typography>
        <Typography level="body2">Director: {director}</Typography>
        <Typography level="body2">Collections: </Typography>
        <Typography level="body3" sx={{ overflow: "scroll" }}>
          {collections?.map((c) => (
            <ol>
              {c?.name} - {c?.classification}
            </ol>
          ))}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{
              fontWeight: 600,
            }}
          >
            See More
          </Button>
        </Box>
      </Card>
    </div>
  );
}
