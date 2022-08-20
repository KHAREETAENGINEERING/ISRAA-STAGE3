var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ROADS_1 = new ol.format.GeoJSON();
var features_ROADS_1 = format_ROADS_1.readFeatures(json_ROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_1.addFeatures(features_ROADS_1);
var lyr_ROADS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_1, 
                style: style_ROADS_1,
                interactive: true,
                title: '<img src="styles/legend/ROADS_1.png" /> ROADS'
            });
var format_HOUSING_2 = new ol.format.GeoJSON();
var features_HOUSING_2 = format_HOUSING_2.readFeatures(json_HOUSING_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOUSING_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOUSING_2.addFeatures(features_HOUSING_2);
var lyr_HOUSING_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOUSING_2, 
                style: style_HOUSING_2,
                interactive: true,
                title: '<img src="styles/legend/HOUSING_2.png" /> HOUSING'
            });
var format_SOLD_3 = new ol.format.GeoJSON();
var features_SOLD_3 = format_SOLD_3.readFeatures(json_SOLD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLD_3.addFeatures(features_SOLD_3);
var lyr_SOLD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOLD_3, 
                style: style_SOLD_3,
                interactive: true,
                title: '<img src="styles/legend/SOLD_3.png" /> SOLD'
            });
var format_KHADAMAT_4 = new ol.format.GeoJSON();
var features_KHADAMAT_4 = format_KHADAMAT_4.readFeatures(json_KHADAMAT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHADAMAT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHADAMAT_4.addFeatures(features_KHADAMAT_4);
var lyr_KHADAMAT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KHADAMAT_4, 
                style: style_KHADAMAT_4,
                interactive: true,
                title: '<img src="styles/legend/KHADAMAT_4.png" /> KHADAMAT'
            });
var format_TEGARY_5 = new ol.format.GeoJSON();
var features_TEGARY_5 = format_TEGARY_5.readFeatures(json_TEGARY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEGARY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEGARY_5.addFeatures(features_TEGARY_5);
var lyr_TEGARY_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEGARY_5, 
                style: style_TEGARY_5,
                interactive: true,
                title: '<img src="styles/legend/TEGARY_5.png" /> TEGARY'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ROADS_1.setVisible(true);lyr_HOUSING_2.setVisible(true);lyr_SOLD_3.setVisible(true);lyr_KHADAMAT_4.setVisible(true);lyr_TEGARY_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ROADS_1,lyr_HOUSING_2,lyr_SOLD_3,lyr_KHADAMAT_4,lyr_TEGARY_5];
lyr_ROADS_1.set('fieldAliases', {'عرض_ا': 'سعة الشارع', });
lyr_HOUSING_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'RefName': 'RefName', 'AREA': 'AREA', 'رقم_ن': 'رقم_ن', });
lyr_SOLD_3.set('fieldAliases', {'id': 'id', });
lyr_KHADAMAT_4.set('fieldAliases', {'Id': 'Id', 'تنظيم': 'تنظيم', });
lyr_TEGARY_5.set('fieldAliases', {'مؤقت': 'مؤقت', 'المسا': 'المسا', 'مباع': 'مباع', 'المال': 'المالك', 'التنظ': 'التنظيم', });
lyr_ROADS_1.set('fieldImages', {'عرض_ا': 'TextEdit', });
lyr_HOUSING_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'رقم_ن': 'Range', });
lyr_SOLD_3.set('fieldImages', {'id': 'TextEdit', });
lyr_KHADAMAT_4.set('fieldImages', {'Id': 'TextEdit', 'تنظيم': 'TextEdit', });
lyr_TEGARY_5.set('fieldImages', {'مؤقت': 'TextEdit', 'المسا': 'TextEdit', 'مباع': 'TextEdit', 'المال': 'TextEdit', 'التنظ': 'TextEdit', });
lyr_ROADS_1.set('fieldLabels', {'عرض_ا': 'header label', });
lyr_HOUSING_2.set('fieldLabels', {'OBJECTID': 'header label', 'RefName': 'header label', 'AREA': 'header label', 'رقم_ن': 'header label', });
lyr_SOLD_3.set('fieldLabels', {'id': 'header label', });
lyr_KHADAMAT_4.set('fieldLabels', {'Id': 'header label', 'تنظيم': 'header label', });
lyr_TEGARY_5.set('fieldLabels', {'مؤقت': 'header label', 'المسا': 'header label', 'مباع': 'header label', 'المال': 'header label', 'التنظ': 'header label', });
lyr_TEGARY_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});