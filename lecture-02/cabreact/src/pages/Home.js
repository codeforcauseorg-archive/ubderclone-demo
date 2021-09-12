import { Box, Chip, Typography } from "@material-ui/core";
import SimpleMap from "../components/GoogleMapBox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
export default function Home() {
  let services = [
    {
      src: "/icons/cab.png",
      upside: "Promo",
      title: "Ride",
    },
    {
      src: "/icons/cab.png",
      upside: "Promo",
      title: "Rentals",
    },
    {
      src: "/icons/cab.png",
      upside: "",
      title: "Package",
    },
    {
      src: "/icons/cab.png",
      upside: "",
      title: "Intercity",
    },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      style={{
        marginTop: "64px",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        style={{
          minHeight: "100px",
          backgroundColor: "#0D4F8B",
          margin: "0px 16px 16px 16px",
          borderRadius: "16px",
        }}
      >
        <Box
          width="30%"
          display="flex"
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
          style={{
            color: "#ffffff",
            padding: "32px",
          }}
        >
          <Typography
            variant="h5"
            style={{
              marginBottom: "16px",
            }}
          >
            Welcome to Golden Star Apartment
          </Typography>

          <Typography variant="body2">Pick-up Details</Typography>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1}></Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        style={{
          margin: "16px",
          overflow: "scroll",
        }}
      >
        {services.map(function (service, index) {
          return (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              key={index}
              style={{
                padding: "16px",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                style={{
                  backgroundColor: "#e2e2e2",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                <img alt={service.title} src={service.src} width="100px" />
              </Box>
              <Typography
                style={{
                  marginTop: "8px",
                }}
              >
                {service.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        flexGrow={1}
        alignItems="center"
        style={{
          minHeight: "50px",
          backgroundColor: "#e2e2e2",
          margin: "0px 16px 16px 16px",
          color: "#000000",
          padding: "0px 16px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
          }}
        >
          Where to?
        </Typography>

        <Chip
          style={{
            backgroundColor: "#ffffff",
          }}
          avatar={<AccessTimeIcon />}
          label="Now"
          onClick={undefined}
        />
      </Box>

      <Box width="100%" display="flex" flexDirection="row">
        <SimpleMap />
      </Box>
    </Box>
  );
}
