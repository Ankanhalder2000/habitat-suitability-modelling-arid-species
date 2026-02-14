\# Variable Export Notes



This document records dataset sources and export specifications for reproducibility.



---



\## Climate Variables — WorldClim



Source: WORLDCLIM/V1/BIO



Bands used:



| Variable | Band Name |

|--------|-------------|

BIO1 | bio01 |

BIO12 | bio12 |

BIO15 | bio15 |



Export settings:

\- Scale: 1000 m

\- CRS: EPSG:4326

\- Format: GeoTIFF



---



\## Elevation — SRTM



Dataset: USGS/SRTMGL1\_003



Export settings:

\- Resolution: 30 m

\- CRS: EPSG:4326



---



\## Land Cover — MODIS



Dataset: MODIS/061/MCD12Q1  

Band: LC\_Type1  

Year: 2021



Export settings:

\- Resolution: 500 m

\- CRS: EPSG:4326



---



\## ROI Boundary



Custom polygon drawn in Google Earth Engine representing study region.



Used for clipping all exported rasters.



---



\## Important Note

All datasets were clipped at export stage to ensure:



\- identical spatial extent

\- consistent raster boundaries

\- reduced processing load in QGIS



