var wms_layers = [];

var format_UFO_India_spatialj_final_0 = new ol.format.GeoJSON();
var features_UFO_India_spatialj_final_0 = format_UFO_India_spatialj_final_0.readFeatures(json_UFO_India_spatialj_final_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFO_India_spatialj_final_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFO_India_spatialj_final_0.addFeatures(features_UFO_India_spatialj_final_0);
var lyr_UFO_India_spatialj_final_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UFO_India_spatialj_final_0, 
                style: style_UFO_India_spatialj_final_0,
                interactive: true,
    title: 'UFO_India_spatialj_final<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_0.png" /> Changing<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_1.png" /> Chevron<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_2.png" /> Cigar<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_3.png" /> Circle<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_4.png" /> Cone<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_5.png" /> Cross<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_6.png" /> Cube<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_7.png" /> Cylinder<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_8.png" /> Diamond<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_9.png" /> Disk<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_10.png" /> Egg<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_11.png" /> Fireball<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_12.png" /> Flash<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_13.png" /> Formation<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_14.png" /> Light<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_15.png" /> Orb<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_16.png" /> Other<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_17.png" /> Oval<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_18.png" /> Rectangle<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_19.png" /> Sphere<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_20.png" /> Star<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_21.png" /> Teardrop<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_22.png" /> Triangle<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_23.png" /> Unknown<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_24.png" /> unspecified<br />\
    <img src="styles/legend/UFO_India_spatialj_final_0_25.png" /> <br />'
        });

lyr_UFO_India_spatialj_final_0.setVisible(true);
var layersList = [lyr_UFO_India_spatialj_final_0];
lyr_UFO_India_spatialj_final_0.set('fieldAliases', {'Date_1': 'Date_1', 'Time': 'Time', 'Year': 'Year', 'Month': 'Month', 'City': 'City', 'Country': 'Country', 'Shape_1': 'Shape_1', 'Time_o': 'Time_o', 'desc': 'desc', 'report_dat': 'report_dat', 'lat': 'lat', 'lon': 'lon', 'city_leane': 'city_leane', 'India-Stat': 'India-Stat', 'ST_NM': 'ST_NM', 'Photos': 'Photos', });
lyr_UFO_India_spatialj_final_0.set('fieldImages', {'Date_1': 'Hidden', 'Time': 'Hidden', 'Year': 'TextEdit', 'Month': 'Hidden', 'City': 'TextEdit', 'Country': 'Hidden', 'Shape_1': 'TextEdit', 'Time_o': 'TextEdit', 'desc': 'Hidden', 'report_dat': 'Hidden', 'lat': 'Hidden', 'lon': 'Hidden', 'city_leane': 'Hidden', 'India-Stat': 'Hidden', 'ST_NM': 'Hidden', 'Photos': 'Hidden', });
lyr_UFO_India_spatialj_final_0.set('fieldLabels', {'Year': 'no label', 'City': 'no label', 'Shape_1': 'header label', 'Time_o': 'no label', });
lyr_UFO_India_spatialj_final_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});