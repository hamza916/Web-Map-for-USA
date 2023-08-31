var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_California_Boundary_1 = new ol.format.GeoJSON();
var features_California_Boundary_1 = format_California_Boundary_1.readFeatures(json_California_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_California_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_California_Boundary_1.addFeatures(features_California_Boundary_1);
var lyr_California_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_California_Boundary_1, 
                style: style_California_Boundary_1,
                interactive: false,
                title: '<img src="styles/legend/California_Boundary_1.png" /> California_Boundary'
            });
var format_California_zones_2 = new ol.format.GeoJSON();
var features_California_zones_2 = format_California_zones_2.readFeatures(json_California_zones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_California_zones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_California_zones_2.addFeatures(features_California_zones_2);
var lyr_California_zones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_California_zones_2, 
                style: style_California_zones_2,
                interactive: false,
                title: '<img src="styles/legend/California_zones_2.png" /> California_zones'
            });
var format_GlampingZones_3 = new ol.format.GeoJSON();
var features_GlampingZones_3 = format_GlampingZones_3.readFeatures(json_GlampingZones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlampingZones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlampingZones_3.addFeatures(features_GlampingZones_3);
var lyr_GlampingZones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GlampingZones_3, 
                style: style_GlampingZones_3,
                interactive: false,
                title: '<img src="styles/legend/GlampingZones_3.png" /> GlampingZones'
            });
var format_Glamping_Allowed_4 = new ol.format.GeoJSON();
var features_Glamping_Allowed_4 = format_Glamping_Allowed_4.readFeatures(json_Glamping_Allowed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glamping_Allowed_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glamping_Allowed_4.addFeatures(features_Glamping_Allowed_4);
var lyr_Glamping_Allowed_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Glamping_Allowed_4, 
                style: style_Glamping_Allowed_4,
                interactive: true,
                title: '<img src="styles/legend/Glamping_Allowed_4.png" /> Glamping_Allowed'
            });
var format_Glamping_Not_Allowed_5 = new ol.format.GeoJSON();
var features_Glamping_Not_Allowed_5 = format_Glamping_Not_Allowed_5.readFeatures(json_Glamping_Not_Allowed_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glamping_Not_Allowed_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glamping_Not_Allowed_5.addFeatures(features_Glamping_Not_Allowed_5);
var lyr_Glamping_Not_Allowed_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Glamping_Not_Allowed_5, 
                style: style_Glamping_Not_Allowed_5,
                interactive: true,
                title: '<img src="styles/legend/Glamping_Not_Allowed_5.png" /> Glamping_Not_Allowed'
            });

lyr_OSMStandard_0.setVisible(true);lyr_California_Boundary_1.setVisible(true);lyr_California_zones_2.setVisible(true);lyr_GlampingZones_3.setVisible(true);lyr_Glamping_Allowed_4.setVisible(true);lyr_Glamping_Not_Allowed_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_California_Boundary_1,lyr_California_zones_2,lyr_GlampingZones_3,lyr_Glamping_Allowed_4,lyr_Glamping_Not_Allowed_5];
lyr_California_Boundary_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_California_zones_2.set('fieldAliases', {'ID_0': 'ID_0', 'NAME_1': 'NAME_1', 'Name': 'Name', });
lyr_GlampingZones_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Glamping_Allowed_4.set('fieldAliases', {'Name': 'Name', 'ALOWED_NOT': 'ALOWED_NOT', });
lyr_Glamping_Not_Allowed_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'ALOWED_NOT': 'ALOWED_NOT', });
lyr_California_Boundary_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_California_zones_2.set('fieldImages', {'ID_0': 'TextEdit', 'NAME_1': 'TextEdit', 'Name': 'TextEdit', });
lyr_GlampingZones_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Glamping_Allowed_4.set('fieldImages', {'Name': 'TextEdit', 'ALOWED_NOT': 'TextEdit', });
lyr_Glamping_Not_Allowed_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'ALOWED_NOT': 'TextEdit', });
lyr_California_Boundary_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_California_zones_2.set('fieldLabels', {'ID_0': 'no label', 'NAME_1': 'no label', 'Name': 'no label', });
lyr_GlampingZones_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Glamping_Allowed_4.set('fieldLabels', {'Name': 'inline label', 'ALOWED_NOT': 'inline label', });
lyr_Glamping_Not_Allowed_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label', 'ALOWED_NOT': 'inline label', });
lyr_Glamping_Not_Allowed_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});