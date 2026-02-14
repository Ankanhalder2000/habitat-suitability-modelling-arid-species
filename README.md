# Habitat Suitability Modelling — Hypothetical Arid-Adapted Species

## Project Overview
This project generates a raster-based habitat suitability model using environmental variables representing climate, topography, and land cover conditions. The workflow integrates Google Earth Engine for data acquisition and QGIS for spatial analysis and modelling.

The study region covers a semi-arid landscape spanning parts of Rajasthan–Gujarat, India.

---

## Objectives
- Build a reproducible GIS-based habitat suitability workflow
- Integrate multiple environmental predictors
- Generate a classified habitat suitability map
- Demonstrate geospatial modelling pipeline skills

---

## Study Area
Semi-arid region spanning western Rajasthan and northern Gujarat, India.  

**Coordinate System:** EPSG:4326 (WGS84)  
**Spatial Resolution:** ~1 km (inherited from WorldClim dataset)  

All datasets were clipped to a defined study area polygon.

---

## Environmental Variables Used

### Climate (WorldClim)
- BIO1 — Annual Mean Temperature
- BIO12 — Annual Precipitation
- BIO15 — Precipitation Seasonality

### Topography
- SRTM Elevation

### Land Cover
- MODIS MCD12Q1 (2021)

---

## Workflow Summary
1. ROI defined in Google Earth Engine  
2. Environmental layers clipped to ROI  
3. GeoTIFFs exported  
4. Imported into QGIS  
5. Raster alignment + preprocessing  
6. Reclassification into suitability scores  
7. Weighted overlay modelling  
8. Final suitability classification  
9. Map layout export  

---

## Suitability Model
A weighted multi-criteria overlay approach was used:

```
HSI = (0.30 * BIO1) +
      (0.25 * BIO12) +
      (0.20 * LandCover) +
      (0.15 * Elevation) +
      (0.10 * BIO15)
```

Weights reflect ecological relevance of predictors.

---

## Final Suitability Map
![Habitat Suitability Map](maps/Habitat_Suitability_Map_Dipodomys_merriami_2026.png)

---

## Output Files

### Final Raster Outputs
- HabitatSuitability_raw.tif
- HabitatSuitability_norm.tif
- HabitatSuitability_classes.tif
- HabitatSuitability_classes_clipped.tif

### Individual Suitability Layers
- BIO1_suitability.tif
- BIO12_suitability.tif
- BIO15_suitability.tif
- Elevation_suitability.tif
- LandCover_suitability.tif

---

## Software Used
- Google Earth Engine — data acquisition  
- QGIS 3.34 — spatial analysis  
- R — raster inspection  

---

## Limitations
- No species occurrence data used  
- Thresholds are expert-defined  
- No statistical validation performed  
- Model represents environmental suitability, not confirmed distribution  

---

## Reproducibility
All datasets used are publicly available and all processing steps are documented. The workflow can be reproduced using the provided scripts and data structure.

---

## Author
**Ankan Halder**

---

## License
MIT License
