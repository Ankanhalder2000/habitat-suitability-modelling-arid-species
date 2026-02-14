// ------------------------------------------------------------
// Project: Habitat Suitability Mapping 
// Species: Dipodomys merriami (model organism)
// Region: Semi-arid Rajasthan–Gujarat belt, India
// Tools: Google Earth Engine (data access & preprocessing)
// Output: GeoTIFFs for QGIS-based suitability modelling
// Author: Ankan Halder

Map.centerObject(roi, 6);
Map.addLayer(roi, {color: 'red'}, 'Study Area (ROI)');

// Load WorldClim Bioclimatic variables
var bioclim = ee.Image('WORLDCLIM/V1/BIO');

// Select key bioclimatic variables
var bio1  = bioclim.select('bio01'); // Annual Mean Temperature
var bio12 = bioclim.select('bio12'); // Annual Precipitation
var bio15 = bioclim.select('bio15'); // Precipitation Seasonality

// Clip bioclim variables to study area
bio1  = bio1.clip(roi);
bio12 = bio12.clip(roi);
bio15 = bio15.clip(roi);

Map.addLayer(bio1, {}, 'BIO1 - Annual Mean Temperature');

Export.image.toDrive({
  image: bio1,
  description: 'BIO1_AnnualMeanTemp_WorldClim',
  folder: 'GEE_Habitat_Project',
  fileNamePrefix: 'BIO1_AnnualMeanTemp_WorldClim',
  region: roi,
  scale: 1000,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});


Export.image.toDrive({
  image: bio12,
  description: 'BIO12_AnnualPrecip_WorldClim',
  folder: 'GEE_Habitat_Project',
  fileNamePrefix: 'BIO12_AnnualPrecip_WorldClim',
  region: roi,
  scale: 1000,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

Export.image.toDrive({
  image: bio15,
  description: 'BIO15_PrecipSeasonality_WorldClim',
  folder: 'GEE_Habitat_Project',
  fileNamePrefix: 'BIO15_PrecipSeasonality_WorldClim',
  region: roi,
  scale: 1000,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ------------------------------------------------------------
// Elevation (SRTM)
// ------------------------------------------------------------

var elevation = ee.Image('USGS/SRTMGL1_003')
  .clip(roi);

Map.addLayer(elevation, {}, 'Elevation (SRTM)');

Export.image.toDrive({
  image: elevation,
  description: 'Elevation_SRTM',
  folder: 'GEE_Habitat_Project',
  fileNamePrefix: 'Elevation_SRTM',
  region: roi,
  scale: 30,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});

// ------------------------------------------------------------
// Land Cover (MODIS MCD12Q1 - IGBP classification)
// ------------------------------------------------------------

var landcover = ee.ImageCollection('MODIS/061/MCD12Q1')
  .filterDate('2021-01-01', '2021-12-31')
  .first()
  .select('LC_Type1')
  .clip(roi);

Map.addLayer(landcover, {}, 'Land Cover (MODIS 2021)');

Export.image.toDrive({
  image: landcover,
  description: 'LandCover_MODIS_2021',
  folder: 'GEE_Habitat_Project',
  fileNamePrefix: 'LandCover_MODIS_2021',
  region: roi,
  scale: 500,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
