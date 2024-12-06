"use client";
import { Box } from "@chakra-ui/react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  YMap,
  YMapComponentsProvider,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapListener,
  YMapZoomControl,
} from "ymap3-components";

const ResultYandexMap = forwardRef(
  (
    { children, onClick = () => {}, location, setYMap = () => {}, ...props },
    ref
  ) => {
    const [mapLocation, setMapLocation] = useState(
      location ?? { center: [69.28795, 41.355747], zoom: 14 }
    );
    const debouncedLocation = useDebounce(mapLocation, 500);

    const handleBoundsChange = (event) => {
      // setMapLocation(event?.location);
      props?.setListenLocation(null);
    };

    useEffect(() => {
      if (debouncedLocation) {
        props?.setSelectedCoordinates(
          location?.center || debouncedLocation?.[0]?.center
        );
      }
    }, [debouncedLocation]);

    return (
      <Box h="500px" {...props}>
        <YMapComponentsProvider apiKey={"3aa40bba-3bef-4a62-b215-3df44002b0a8"}>
          <YMap
            location={mapLocation}
            mode="vector"
            ref={(ymap) => setYMap(ymap)}
          >
            <YMapListener
              onUpdate={handleBoundsChange}
              layer="any"
              onClick={onClick}
            />

            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
            <YMapControls position="right">
              <YMapZoomControl />
            </YMapControls>
            {children}
          </YMap>
        </YMapComponentsProvider>
      </Box>
    );
  }
);

export default ResultYandexMap;