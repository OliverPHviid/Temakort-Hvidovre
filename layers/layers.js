var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Byparken_1 = new ol.format.GeoJSON();
var features_Byparken_1 = format_Byparken_1.readFeatures(json_Byparken_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Byparken_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Byparken_1.addFeatures(features_Byparken_1);
var lyr_Byparken_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Byparken_1, 
                style: style_Byparken_1,
                popuplayertitle: 'Byparken',
                interactive: true,
                title: '<img src="styles/legend/Byparken_1.png" /> Byparken'
            });
var format_Filmbyparken_2 = new ol.format.GeoJSON();
var features_Filmbyparken_2 = format_Filmbyparken_2.readFeatures(json_Filmbyparken_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Filmbyparken_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Filmbyparken_2.addFeatures(features_Filmbyparken_2);
var lyr_Filmbyparken_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Filmbyparken_2, 
                style: style_Filmbyparken_2,
                popuplayertitle: 'Filmby parken',
                interactive: true,
                title: '<img src="styles/legend/Filmbyparken_2.png" /> Filmby parken'
            });
var format_Frededeomrder_3 = new ol.format.GeoJSON();
var features_Frededeomrder_3 = format_Frededeomrder_3.readFeatures(json_Frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_3.addFeatures(features_Frededeomrder_3);
var lyr_Frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_3, 
                style: style_Frededeomrder_3,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_3_5.png" /> <br />' });
var format_Kommuneplaner_4 = new ol.format.GeoJSON();
var features_Kommuneplaner_4 = format_Kommuneplaner_4.readFeatures(json_Kommuneplaner_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplaner_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplaner_4.addFeatures(features_Kommuneplaner_4);
var lyr_Kommuneplaner_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplaner_4, 
                style: style_Kommuneplaner_4,
                popuplayertitle: 'Kommuneplaner',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplaner_4.png" /> Kommuneplaner'
            });
var format_Kystagerparken_5 = new ol.format.GeoJSON();
var features_Kystagerparken_5 = format_Kystagerparken_5.readFeatures(json_Kystagerparken_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kystagerparken_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kystagerparken_5.addFeatures(features_Kystagerparken_5);
var lyr_Kystagerparken_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kystagerparken_5, 
                style: style_Kystagerparken_5,
                popuplayertitle: 'Kystagerparken',
                interactive: true,
                title: '<img src="styles/legend/Kystagerparken_5.png" /> Kystagerparken'
            });
var format_Lodsparken_6 = new ol.format.GeoJSON();
var features_Lodsparken_6 = format_Lodsparken_6.readFeatures(json_Lodsparken_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lodsparken_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lodsparken_6.addFeatures(features_Lodsparken_6);
var lyr_Lodsparken_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lodsparken_6, 
                style: style_Lodsparken_6,
                popuplayertitle: 'Lodsparken',
                interactive: true,
                title: '<img src="styles/legend/Lodsparken_6.png" /> Lodsparken'
            });
var format_Lokalplaner_7 = new ol.format.GeoJSON();
var features_Lokalplaner_7 = format_Lokalplaner_7.readFeatures(json_Lokalplaner_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_7.addFeatures(features_Lokalplaner_7);
var lyr_Lokalplaner_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_7, 
                style: style_Lokalplaner_7,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_7_0.png" /> 1012930<br />\
    <img src="styles/legend/Lokalplaner_7_1.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_7_2.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_7_3.png" /> 1054617<br />\
    <img src="styles/legend/Lokalplaner_7_4.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_7_5.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_7_6.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_7_7.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_7_8.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_7_9.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_7_10.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_7_11.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_7_12.png" /> 1061704<br />\
    <img src="styles/legend/Lokalplaner_7_13.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_7_14.png" /> 1061718<br />\
    <img src="styles/legend/Lokalplaner_7_15.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_7_16.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_7_17.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_7_18.png" /> 1061753<br />\
    <img src="styles/legend/Lokalplaner_7_19.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_7_20.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_7_21.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_7_22.png" /> 1061828<br />\
    <img src="styles/legend/Lokalplaner_7_23.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_7_24.png" /> 1061833<br />\
    <img src="styles/legend/Lokalplaner_7_25.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_7_26.png" /> 1062080<br />\
    <img src="styles/legend/Lokalplaner_7_27.png" /> 1062111<br />\
    <img src="styles/legend/Lokalplaner_7_28.png" /> 1062117<br />\
    <img src="styles/legend/Lokalplaner_7_29.png" /> 1062118<br />\
    <img src="styles/legend/Lokalplaner_7_30.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_7_31.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_7_32.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_7_33.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_7_34.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_7_35.png" /> 1074665<br />\
    <img src="styles/legend/Lokalplaner_7_36.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_7_37.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_7_38.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_7_39.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_7_40.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_7_41.png" /> 1075550<br />\
    <img src="styles/legend/Lokalplaner_7_42.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_7_43.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_7_44.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_7_45.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_7_46.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_7_47.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_7_48.png" /> 1075667<br />\
    <img src="styles/legend/Lokalplaner_7_49.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_7_50.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_7_51.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_7_52.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_7_53.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_7_54.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_7_55.png" /> 1075749<br />\
    <img src="styles/legend/Lokalplaner_7_56.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_7_57.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_7_58.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_7_59.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_7_60.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_7_61.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_7_62.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_7_63.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_7_64.png" /> 1075891<br />\
    <img src="styles/legend/Lokalplaner_7_65.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_7_66.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_7_67.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_7_68.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_7_69.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_7_70.png" /> 1075906<br />\
    <img src="styles/legend/Lokalplaner_7_71.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_7_72.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_7_73.png" /> 1076003<br />\
    <img src="styles/legend/Lokalplaner_7_74.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_7_75.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_7_76.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_7_77.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_7_78.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_7_79.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_7_80.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_7_81.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_7_82.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_7_83.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_7_84.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_7_85.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_7_86.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_7_87.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_7_88.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_7_89.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_7_90.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_7_91.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_7_92.png" /> 1076901<br />\
    <img src="styles/legend/Lokalplaner_7_93.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_7_94.png" /> 1076905<br />\
    <img src="styles/legend/Lokalplaner_7_95.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_7_96.png" /> 1076943<br />\
    <img src="styles/legend/Lokalplaner_7_97.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_7_98.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_7_99.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_7_100.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_7_101.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_7_102.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_7_103.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_7_104.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_7_105.png" /> 1077899<br />\
    <img src="styles/legend/Lokalplaner_7_106.png" /> 1078061<br />\
    <img src="styles/legend/Lokalplaner_7_107.png" /> 1078066<br />\
    <img src="styles/legend/Lokalplaner_7_108.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_7_109.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_7_110.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_7_111.png" /> 1078080<br />\
    <img src="styles/legend/Lokalplaner_7_112.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_7_113.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_7_114.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_7_115.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_7_116.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_7_117.png" /> 1078270<br />\
    <img src="styles/legend/Lokalplaner_7_118.png" /> 1078272<br />\
    <img src="styles/legend/Lokalplaner_7_119.png" /> 1078274<br />\
    <img src="styles/legend/Lokalplaner_7_120.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_7_121.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_7_122.png" /> 1078282<br />\
    <img src="styles/legend/Lokalplaner_7_123.png" /> 1078288<br />\
    <img src="styles/legend/Lokalplaner_7_124.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_7_125.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_7_126.png" /> 1078447<br />\
    <img src="styles/legend/Lokalplaner_7_127.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_7_128.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_7_129.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_7_130.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_7_131.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_7_132.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_7_133.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_7_134.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_7_135.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_7_136.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_7_137.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_7_138.png" /> 1103656<br />\
    <img src="styles/legend/Lokalplaner_7_139.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_7_140.png" /> 1104764<br />\
    <img src="styles/legend/Lokalplaner_7_141.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_7_142.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_7_143.png" /> 1359142<br />\
    <img src="styles/legend/Lokalplaner_7_144.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_7_145.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_7_146.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_7_147.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_7_148.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_7_149.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_7_150.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_7_151.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_7_152.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_7_153.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_7_154.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_7_155.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_7_156.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_7_157.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_7_158.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_7_159.png" /> 2702994<br />\
    <img src="styles/legend/Lokalplaner_7_160.png" /> 2969850<br />\
    <img src="styles/legend/Lokalplaner_7_161.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_7_162.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_7_163.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_7_164.png" /> 3016102<br />\
    <img src="styles/legend/Lokalplaner_7_165.png" /> 3016103<br />\
    <img src="styles/legend/Lokalplaner_7_166.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_7_167.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_7_168.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_7_169.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_7_170.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_7_171.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_7_172.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_7_173.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_7_174.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_7_175.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_7_176.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_7_177.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_7_178.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_7_179.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_7_180.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_7_181.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_7_182.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_7_183.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_7_184.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_7_185.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_7_186.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_7_187.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_7_188.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_7_189.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_7_190.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_7_191.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_7_192.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_7_193.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_7_194.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_7_195.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_7_196.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_7_197.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_7_198.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_7_199.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_7_200.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_7_201.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_7_202.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_7_203.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_7_204.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_7_205.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_7_206.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_7_207.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_7_208.png" /> <br />' });
var format_Lokalplanerforslag_8 = new ol.format.GeoJSON();
var features_Lokalplanerforslag_8 = format_Lokalplanerforslag_8.readFeatures(json_Lokalplanerforslag_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanerforslag_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanerforslag_8.addFeatures(features_Lokalplanerforslag_8);
var lyr_Lokalplanerforslag_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanerforslag_8, 
                style: style_Lokalplanerforslag_8,
                popuplayertitle: 'Lokalplaner forslag',
                interactive: true,
    title: 'Lokalplaner forslag<br />\
    <img src="styles/legend/Lokalplanerforslag_8_0.png" /> 11367622<br />\
    <img src="styles/legend/Lokalplanerforslag_8_1.png" /> 11461117<br />\
    <img src="styles/legend/Lokalplanerforslag_8_2.png" /> 11484598<br />\
    <img src="styles/legend/Lokalplanerforslag_8_3.png" /> <br />' });
var format_RebkSpark_9 = new ol.format.GeoJSON();
var features_RebkSpark_9 = format_RebkSpark_9.readFeatures(json_RebkSpark_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RebkSpark_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RebkSpark_9.addFeatures(features_RebkSpark_9);
var lyr_RebkSpark_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RebkSpark_9, 
                style: style_RebkSpark_9,
                popuplayertitle: 'Rebæk Søpark',
                interactive: true,
                title: '<img src="styles/legend/RebkSpark_9.png" /> Rebæk Søpark'
            });
var format_Strandbeskyttedeomrder_10 = new ol.format.GeoJSON();
var features_Strandbeskyttedeomrder_10 = format_Strandbeskyttedeomrder_10.readFeatures(json_Strandbeskyttedeomrder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttedeomrder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttedeomrder_10.addFeatures(features_Strandbeskyttedeomrder_10);
var lyr_Strandbeskyttedeomrder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttedeomrder_10, 
                style: style_Strandbeskyttedeomrder_10,
                popuplayertitle: 'Strandbeskyttede områder',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttedeomrder_10.png" /> Strandbeskyttede områder'
            });
var format_Strandengen_11 = new ol.format.GeoJSON();
var features_Strandengen_11 = format_Strandengen_11.readFeatures(json_Strandengen_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandengen_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandengen_11.addFeatures(features_Strandengen_11);
var lyr_Strandengen_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandengen_11, 
                style: style_Strandengen_11,
                popuplayertitle: 'Strandengen',
                interactive: true,
                title: '<img src="styles/legend/Strandengen_11.png" /> Strandengen'
            });
var format_Busstoppesteder_12 = new ol.format.GeoJSON();
var features_Busstoppesteder_12 = format_Busstoppesteder_12.readFeatures(json_Busstoppesteder_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstoppesteder_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstoppesteder_12.addFeatures(features_Busstoppesteder_12);
var lyr_Busstoppesteder_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstoppesteder_12, 
                style: style_Busstoppesteder_12,
                popuplayertitle: 'Busstoppesteder',
                interactive: true,
                title: '<img src="styles/legend/Busstoppesteder_12.png" /> Busstoppesteder'
            });
var format_Brnehaver_13 = new ol.format.GeoJSON();
var features_Brnehaver_13 = format_Brnehaver_13.readFeatures(json_Brnehaver_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_13.addFeatures(features_Brnehaver_13);
var lyr_Brnehaver_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_13, 
                style: style_Brnehaver_13,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_13.png" /> Børnehaver'
            });
var format_EUDHvidovre_14 = new ol.format.GeoJSON();
var features_EUDHvidovre_14 = format_EUDHvidovre_14.readFeatures(json_EUDHvidovre_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDHvidovre_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDHvidovre_14.addFeatures(features_EUDHvidovre_14);
var lyr_EUDHvidovre_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDHvidovre_14, 
                style: style_EUDHvidovre_14,
                popuplayertitle: 'EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/EUDHvidovre_14.png" /> EUD Hvidovre'
            });
var format_Fodboldbaner_15 = new ol.format.GeoJSON();
var features_Fodboldbaner_15 = format_Fodboldbaner_15.readFeatures(json_Fodboldbaner_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_15.addFeatures(features_Fodboldbaner_15);
var lyr_Fodboldbaner_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_15, 
                style: style_Fodboldbaner_15,
                popuplayertitle: 'Fodboldbaner',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_15.png" /> Fodboldbaner'
            });
var format_Folkeskoler_16 = new ol.format.GeoJSON();
var features_Folkeskoler_16 = format_Folkeskoler_16.readFeatures(json_Folkeskoler_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_16.addFeatures(features_Folkeskoler_16);
var lyr_Folkeskoler_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_16, 
                style: style_Folkeskoler_16,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_16.png" /> Folkeskoler'
            });
var format_Gymnasier_17 = new ol.format.GeoJSON();
var features_Gymnasier_17 = format_Gymnasier_17.readFeatures(json_Gymnasier_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gymnasier_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gymnasier_17.addFeatures(features_Gymnasier_17);
var lyr_Gymnasier_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gymnasier_17, 
                style: style_Gymnasier_17,
                popuplayertitle: 'Gymnasier',
                interactive: true,
                title: '<img src="styles/legend/Gymnasier_17.png" /> Gymnasier'
            });
var format_Havne_18 = new ol.format.GeoJSON();
var features_Havne_18 = format_Havne_18.readFeatures(json_Havne_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havne_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havne_18.addFeatures(features_Havne_18);
var lyr_Havne_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havne_18, 
                style: style_Havne_18,
                popuplayertitle: 'Havne',
                interactive: true,
                title: '<img src="styles/legend/Havne_18.png" /> Havne'
            });
var format_Hospital_19 = new ol.format.GeoJSON();
var features_Hospital_19 = format_Hospital_19.readFeatures(json_Hospital_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_19.addFeatures(features_Hospital_19);
var lyr_Hospital_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_19, 
                style: style_Hospital_19,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_19.png" /> Hospital'
            });
var format_Lger_20 = new ol.format.GeoJSON();
var features_Lger_20 = format_Lger_20.readFeatures(json_Lger_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lger_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lger_20.addFeatures(features_Lger_20);
var lyr_Lger_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lger_20, 
                style: style_Lger_20,
                popuplayertitle: 'Læger',
                interactive: true,
                title: '<img src="styles/legend/Lger_20.png" /> Læger'
            });
var format_Rdhus_21 = new ol.format.GeoJSON();
var features_Rdhus_21 = format_Rdhus_21.readFeatures(json_Rdhus_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rdhus_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rdhus_21.addFeatures(features_Rdhus_21);
var lyr_Rdhus_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rdhus_21, 
                style: style_Rdhus_21,
                popuplayertitle: 'Rådhus',
                interactive: true,
                title: '<img src="styles/legend/Rdhus_21.png" /> Rådhus'
            });
var format_Sportsfaciliteter_22 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_22 = format_Sportsfaciliteter_22.readFeatures(json_Sportsfaciliteter_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_22.addFeatures(features_Sportsfaciliteter_22);
var lyr_Sportsfaciliteter_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_22, 
                style: style_Sportsfaciliteter_22,
                popuplayertitle: 'Sportsfaciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_22.png" /> Sportsfaciliteter'
            });
var format_Togstationer_23 = new ol.format.GeoJSON();
var features_Togstationer_23 = format_Togstationer_23.readFeatures(json_Togstationer_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_23.addFeatures(features_Togstationer_23);
var lyr_Togstationer_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_23, 
                style: style_Togstationer_23,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_23.png" /> Togstationer'
            });
var format_Valdemarkoter_24 = new ol.format.GeoJSON();
var features_Valdemarkoter_24 = format_Valdemarkoter_24.readFeatures(json_Valdemarkoter_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valdemarkoter_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valdemarkoter_24.addFeatures(features_Valdemarkoter_24);
var lyr_Valdemarkoter_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valdemarkoter_24, 
                style: style_Valdemarkoter_24,
                popuplayertitle: 'Valdemar koter',
                interactive: true,
                title: '<img src="styles/legend/Valdemarkoter_24.png" /> Valdemar koter'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Byparken_1.setVisible(true);lyr_Filmbyparken_2.setVisible(true);lyr_Frededeomrder_3.setVisible(true);lyr_Kommuneplaner_4.setVisible(true);lyr_Kystagerparken_5.setVisible(true);lyr_Lodsparken_6.setVisible(true);lyr_Lokalplaner_7.setVisible(true);lyr_Lokalplanerforslag_8.setVisible(true);lyr_RebkSpark_9.setVisible(true);lyr_Strandbeskyttedeomrder_10.setVisible(true);lyr_Strandengen_11.setVisible(true);lyr_Busstoppesteder_12.setVisible(true);lyr_Brnehaver_13.setVisible(true);lyr_EUDHvidovre_14.setVisible(true);lyr_Fodboldbaner_15.setVisible(true);lyr_Folkeskoler_16.setVisible(true);lyr_Gymnasier_17.setVisible(true);lyr_Havne_18.setVisible(true);lyr_Hospital_19.setVisible(true);lyr_Lger_20.setVisible(true);lyr_Rdhus_21.setVisible(true);lyr_Sportsfaciliteter_22.setVisible(true);lyr_Togstationer_23.setVisible(true);lyr_Valdemarkoter_24.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Byparken_1,lyr_Filmbyparken_2,lyr_Frededeomrder_3,lyr_Kommuneplaner_4,lyr_Kystagerparken_5,lyr_Lodsparken_6,lyr_Lokalplaner_7,lyr_Lokalplanerforslag_8,lyr_RebkSpark_9,lyr_Strandbeskyttedeomrder_10,lyr_Strandengen_11,lyr_Busstoppesteder_12,lyr_Brnehaver_13,lyr_EUDHvidovre_14,lyr_Fodboldbaner_15,lyr_Folkeskoler_16,lyr_Gymnasier_17,lyr_Havne_18,lyr_Hospital_19,lyr_Lger_20,lyr_Rdhus_21,lyr_Sportsfaciliteter_22,lyr_Togstationer_23,lyr_Valdemarkoter_24];
lyr_Byparken_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'filmby': 'filmby', });
lyr_Filmbyparken_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Filmby': 'Filmby', });
lyr_Frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Kommuneplaner_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Kystagerparken_5.set('fieldAliases', {'fid': 'Kystagerparken', 'name': 'name', });
lyr_Lodsparken_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Lodsparken': 'Lodsparken', 'name': 'name', });
lyr_Lokalplaner_7.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanerforslag_8.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datostart': 'datostart', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_RebkSpark_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Strandbeskyttedeomrder_10.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Strandengen_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'strandeng': 'strandeng', });
lyr_Busstoppesteder_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_13.set('fieldAliases', {'fid': 'fid', 'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDHvidovre_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Fodboldbaner_15.set('fieldAliases', {'fid': 'fid', 'Fodbold St': 'Fodbold St', 'Adresse': 'Adresse', 'By': 'By', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_16.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Gymnasier_17.set('fieldAliases', {'fid': 'fid', 'Gymnasiena': 'Gymnasiena', 'Ungdomsudd': 'Ungdomsudd', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Havne_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospital_19.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lger_20.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Rdhus_21.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_22.set('fieldAliases', {'fid': 'fid', 'Sport- og': 'Sport- og', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Valdemarkoter_24.set('fieldAliases', {'fid': 'fid', 'Fikspunkt nr': 'Fikspunkt nr', 'Type': 'Type', 'Referencesystemer': 'Referencesystemer', 'Easting': 'Easting', 'Northing': 'Northing', 'Kote': 'Kote', });
lyr_Byparken_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'filmby': 'TextEdit', });
lyr_Filmbyparken_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Filmby': 'TextEdit', });
lyr_Frededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Kommuneplaner_4.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Kystagerparken_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_Lodsparken_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Lodsparken': 'TextEdit', 'name': 'TextEdit', });
lyr_Lokalplaner_7.set('fieldImages', {'fid': 'TextEdit', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanerforslag_8.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datostart': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_RebkSpark_9.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_Strandbeskyttedeomrder_10.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_Strandengen_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'strandeng': 'TextEdit', });
lyr_Busstoppesteder_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Brnehaver_13.set('fieldImages', {'fid': '', 'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDHvidovre_14.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Fodboldbaner_15.set('fieldImages', {'fid': '', 'Fodbold St': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Folkeskoler_16.set('fieldImages', {'fid': 'TextEdit', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Gymnasier_17.set('fieldImages', {'fid': 'TextEdit', 'Gymnasiena': 'TextEdit', 'Ungdomsudd': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Havne_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Hospital_19.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lger_20.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Rdhus_21.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Sportsfaciliteter_22.set('fieldImages', {'fid': '', 'Sport- og': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_23.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Valdemarkoter_24.set('fieldImages', {'fid': '', 'Fikspunkt nr': 'TextEdit', 'Type': 'TextEdit', 'Referencesystemer': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Kote': 'TextEdit', });
lyr_Byparken_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'filmby': 'no label', });
lyr_Filmbyparken_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Filmby': 'no label', });
lyr_Frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Kommuneplaner_4.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Kystagerparken_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Lodsparken_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Lodsparken': 'no label', 'name': 'no label', });
lyr_Lokalplaner_7.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplanerforslag_8.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datostart': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_RebkSpark_9.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Strandbeskyttedeomrder_10.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Strandengen_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'strandeng': 'no label', });
lyr_Busstoppesteder_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Brnehaver_13.set('fieldLabels', {'fid': 'no label', 'Børnehave': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefon': 'no label', });
lyr_EUDHvidovre_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_Fodboldbaner_15.set('fieldLabels', {'fid': 'no label', 'Fodbold St': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Mail': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Folkeskoler_16.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Gymnasier_17.set('fieldLabels', {'fid': 'no label', 'Gymnasiena': 'no label', 'Ungdomsudd': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Havne_18.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Hospital_19.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Lger_20.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Rdhus_21.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_Sportsfaciliteter_22.set('fieldLabels', {'fid': 'no label', 'Sport- og': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Togstationer_23.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', });
lyr_Valdemarkoter_24.set('fieldLabels', {'fid': 'no label', 'Fikspunkt nr': 'no label', 'Type': 'no label', 'Referencesystemer': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Kote': 'no label', });
lyr_Valdemarkoter_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});