# Methodology



## 1. Study Objective

The objective of this study was to generate a raster-based Habitat Suitability Map for environmental conditions influencing species distribution within the semi-arid Rajasthan–Gujarat region of India using geospatial environmental predictors representing climate, topography, and land cover.



---



## 2. Study Area Definition

A polygon representing the study region was defined as the Region of Interest (ROI). All spatial datasets were clipped to this boundary to ensure spatial consistency and eliminate extraneous geographic areas.



All datasets were processed in the coordinate reference system:



**EPSG:4326 — WGS84 Geographic Coordinate System**



---



## 3. Environmental Variables



Five predictor variables were selected based on ecological relevance to habitat suitability modelling.



### Climate Variables (WorldClim Version 1 — accessed via Google Earth Engine)



- **BIO1\_AnnualMeanTemp\_WorldClim.tif** — Annual Mean Temperature  

- **BIO12\_AnnualPrecip\_WorldClim.tif** — Annual Precipitation  

- **BIO15\_PrecipSeasonality\_WorldClim.tif** — Precipitation Seasonality  



### Topographic Variable



- **Elevation\_SRTM.tif** — Digital Elevation Model (SRTM)



### Land Cover Variable



- **LandCover\_MODIS\_2021.tif** — MODIS MCD12Q1 Land Cover (IGBP classification, Year 2021)



---



## 4. Data Acquisition using Google Earth Engine (GEE)



Environmental datasets were accessed and exported using Google Earth Engine.



**Processing steps performed in GEE:**



1. Imported ROI boundary

2. Loaded environmental datasets

3. Selected required bands

4. Clipped datasets to ROI

5. Exported rasters to Google Drive

6. Export format: GeoTIFF

7. CRS specified as EPSG:4326

8. Resolution preserved according to source dataset



**Exported rasters:**



- BIO1\_AnnualMeanTemp\_WorldClim.tif  

- BIO1s2\_AnnualPrecip\_WorldClim.tif  

- BIO15\_PrecipSeasonality\_WorldClim.tif  

- Elevation\_SRTM.tif  

- LandCover\_MODIS\_2021.tif  



---



## 5. Data Pre-Processing in QGIS



All rasters were imported into QGIS for preprocessing.




**Processing operations:**



- Verified CRS consistency across layers

- Clipped rasters to study area polygon

- Aligned rasters to identical extent and grid

- Ensured pixel-to-pixel correspondence

- Matched resolution across datasets



Raster alignment was performed using the **Align Raster Tool**.

Continuous rasters were resampled using bilinear interpolation, while categorical land cover data were resampled using nearest neighbor.


---



## 6. Suitability Scoring of Environmental Variables



Each environmental raster was transformed into a suitability score raster using conditional expressions in QGIS Raster Calculator.



Suitability scores ranged from **1–5**, where:



| Score | Suitability |

|------|-------------|

|1|Very Low|

|2–3|Moderate|

|4–5|High|



Thresholds were defined manually using ecological reasoning based on environmental gradients.



**Generated suitability rasters:**



- BIO1\_suitability.tif  

- BIO12\_suitability.tif  

- BIO15\_suitability.tif  

- Elevation\_suitability.tif  

- LandCover\_suitability.tif  



---



## 7. Weighted Multi-Criteria Habitat Suitability Model



A weighted multi-criteria evaluation (MCE) approach was applied to integrate environmental predictors into a composite suitability index.



**Habitat Suitability Index equation:**



HSI = (w1 × BIO1) + (w2 × BIO12) + (w3 × BIO15) + (w4 × Elevation) + (w5 × LandCover)





**Assigned weights**



| Variable | Weight |

|--------|-------|

Temperature (BIO1) | 0.30 |

Precipitation (BIO12) | 0.25 |

Land Cover | 0.20 |

Elevation | 0.15 |

Seasonality (BIO15) | 0.10 |



Higher weights indicate greater ecological influence.
Weights were assigned based on assumed ecological influence derived from literature on arid-adapted species habitat requirements.


The weighted overlay produced:



**HabitatSuitability\_raw.tif**



---



## 8. Final Raster Normalisation



The composite raster was rescaled to a \*\*0–1 range\*\* to standardise interpretation.



**Output:**  

`HabitatSuitability\_norm.tif`



---



## 9. Final Classification



The normalized raster was classified into four categories:



- Very Low Suitability  

- Low Suitability  

- Moderate Suitability  

- High Suitability  



**Output:**  

`HabitatSuitability\_classes.tif`



---



## 10. Clipping to Study Boundary



The final classified raster was clipped to the study area polygon to remove values outside the region of interest.



---



## 11. Cartographic Map Preparation



Final layout created in QGIS Layout Manager included:



- Suitability raster

- Study area boundary

- Legend

- North arrow

- Scale bar

- Projection information

- Data source attribution



**Export settings**



- Resolution: 300 dpi  

- Formats: PNG and PDF  



---



## 12. Software Used



- Google Earth Engine — dataset acquisition and preprocessing  

- QGIS — raster processing and modelling  

- R — raster inspection and verification  



---



## 13. Model Limitations



- No species occurrence records were used  

- Suitability thresholds were expert-defined  

- Model represents environmental suitability only, not actual species presence  

- No temporal variability considered  



---



## 14. Reproducibility



All datasets used are publicly available and all analyses were performed using open-source software. The workflow is fully reproducible using the provided scripts and raster inputs.





