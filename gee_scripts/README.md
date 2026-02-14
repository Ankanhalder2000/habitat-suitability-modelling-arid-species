\# Google Earth Engine Scripts



This folder contains scripts used to acquire and preprocess environmental datasets for the habitat suitability model.



---



\## Purpose

Google Earth Engine was used to:



\- Load global environmental datasets

\- Clip layers to study region

\- Export rasters as GeoTIFF

\- Maintain CRS consistency



---



\## Exported Variables



Climate (WorldClim):

\- BIO1 — Annual Mean Temperature

\- BIO12 — Annual Precipitation

\- BIO15 — Precipitation Seasonality



Topography:

\- SRTM Elevation



Land Cover:

\- MODIS MCD12Q1 (2021)



---



\## Export Settings



All rasters exported using:



\- Format: GeoTIFF

\- CRS: EPSG:4326

\- Region: ROI polygon

\- MaxPixels: 1e13



Resolution used:



| Variable | Resolution |

|--------|-------------|

Climate | 1000 m |

Elevation | 30 m |

Land Cover | 500 m |



---



\## Notes

Data acquisition was performed entirely using public datasets available within Google Earth Engine.



Processing and modelling were conducted in QGIS after export.



