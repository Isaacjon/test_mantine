
import { forwardRef, useEffect, useState } from "react";
import {
  YMap,
  YMapComponentsProvider,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapListener,
  YMapZoomControl,
} from "ymap3-components";
import './style.css'
import { Box } from "@mantine/core";

// eslint-disable-next-line react/display-name
const YandexMap = forwardRef(
  (
    { children, onClick = () => {}, location, setYMap = () => {}, ...props },
    _ref
  ) => {

    return (
      <Box h="500px" {...props}>
        <YMapComponentsProvider apiKey='2fafb3d0-61ed-4f0a-a446-9e0423e01481' lang="en_EN" >
          <YMap
            location={location || { center: [69.28795, 41.355747], zoom: 14 }}
            mode="vector"
            ref={(ymap) => setYMap(ymap)}
          >
            <YMapListener layer="any" onClick={onClick} />

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

export default YandexMap;
