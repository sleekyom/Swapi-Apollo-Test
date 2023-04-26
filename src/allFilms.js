import { gql, useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import BasicCard from "./components/Card";
import Typography from "@mui/joy/Typography";

const ALL_FILMS = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

const AllFilms = () => {
  const { data, loading, error } = useQuery(ALL_FILMS);
  if (loading) return `Loading... ${(<Skeleton baseColor="red" />)}`;
  if (error) return `Error... ${error.message}`;
  return (
    <div>
      <Typography level="h4" sx={{ textAlign: "center", mt: 5 }}>
        Swapi Films
      </Typography>
      {/* Show the films title, director and release date */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
          maxWidth: "100%",
        }}
      >
        {data?.allFilms?.films?.map((film, index) => (
          <BasicCard
            collections={film?.speciesConnection?.species}
            title={film?.title}
            director={film?.director}
            releaseDate={film.releaseDate}
          />
          // <div key={index}>
          //   {/* Show the films species connection */}
          //   {film.speciesConnection.species.map((specie, index) => (
          //     <div key={index}>
          //       <span>Species Connection: {specie.name}</span>
          //       <span role="img" aria-label="ghost">
          //         {" "}
          //         👻{" "}
          //       </span>
          //       <span>Species classification: {specie.classification}</span>
          //       <br />
          //     </div>
          //   ))}
          //   <hr />
          // </div>
        ))}
      </div>
    </div>
  );
};

export default AllFilms;
