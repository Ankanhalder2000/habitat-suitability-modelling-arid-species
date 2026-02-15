# Workflow Description



The habitat suitability modelling workflow followed a reproducible geospatial pipeline consisting of the following sequential steps:



1. Define study area boundary (Region of Interest)

2. Acquire environmental predictor datasets using Google Earth Engine

3. Export rasters as GeoTIFF files in EPSG:4326

4. Import datasets into QGIS environment

5. Verify coordinate reference systems

6. Clip rasters to study area extent

7. Align raster grids for pixel consistency

8. Standardize spatial resolution

9. Reclassify environmental predictors into suitability scores

10. Assign ecological weights to predictors

11. Apply weighted overlay model

12. Generate composite suitability raster

13. Normalize output raster values

14. Classify suitability into categorical zones

15. Export final suitability map outputs



This workflow ensures spatial consistency, reproducibility, and methodological transparency.




