// google.maps.Mapオブジェクト（地図オブジェクト）
var mapCanvas = null;

// 情報ウィンドウオブジェクト
var currentInfoWindow = null;

// めぐりんバス停の情報オブジェクト
var megurin = {
  "name"      : null, // 名称
  "latitude"  : null, // 緯度
  "longitude" : null, // 経度
  "zoom"      : null, // 地図に表示する際の縮尺値
  "icon"      : null  // アイコン
};

// 停留所位置マーカー出力座標を格納する配列オブジェクト
var ew_markerbus = new Array();
var n_markerbus  = new Array();
var s_markerbus  = new Array();
var g_markerbus  = new Array();

//ポリライン
var polylines    = new Array();
var path_ew = [
  new google.maps.LatLng(35.712471, 139.779651),
  new google.maps.LatLng(35.712520, 139.779235),
  new google.maps.LatLng(35.711932, 139.778873),
  new google.maps.LatLng(35.712106, 139.778118),
  new google.maps.LatLng(35.711388, 139.776278),
  new google.maps.LatLng(35.711623, 139.774529),
  new google.maps.LatLng(35.712490, 139.774996),
  new google.maps.LatLng(35.713139, 139.775462),
  new google.maps.LatLng(35.713700, 139.775709),
  new google.maps.LatLng(35.716323, 139.777776),
  new google.maps.LatLng(35.717279, 139.775788),
  new google.maps.LatLng(35.718300, 139.773744),
  new google.maps.LatLng(35.718564, 139.773248),
  new google.maps.LatLng(35.719949, 139.774479),
  new google.maps.LatLng(35.721292, 139.773657),
  new google.maps.LatLng(35.720667, 139.772107),
  new google.maps.LatLng(35.719927, 139.771160),
  new google.maps.LatLng(35.719572, 139.769870),
  new google.maps.LatLng(35.720699, 139.769360),
  new google.maps.LatLng(35.721120, 139.770787),
  new google.maps.LatLng(35.722737, 139.770179),
  new google.maps.LatLng(35.723499, 139.769321),
  new google.maps.LatLng(35.723700, 139.767369),
  new google.maps.LatLng(35.723726, 139.766977),
  new google.maps.LatLng(35.724497, 139.764633),
  new google.maps.LatLng(35.724582, 139.764222),
  new google.maps.LatLng(35.725004, 139.764131),
  new google.maps.LatLng(35.726676, 139.764576),
  new google.maps.LatLng(35.726837, 139.763638),
  new google.maps.LatLng(35.724821, 139.763042),
  new google.maps.LatLng(35.724629, 139.764265),
  new google.maps.LatLng(35.724560, 139.764592),
  new google.maps.LatLng(35.724020, 139.765955),
  new google.maps.LatLng(35.723532, 139.769474),
  new google.maps.LatLng(35.722757, 139.770247),
  new google.maps.LatLng(35.721089, 139.770869),
  new google.maps.LatLng(35.720627, 139.769399),
  new google.maps.LatLng(35.719386, 139.767532),
  new google.maps.LatLng(35.719042, 139.768031),
  new google.maps.LatLng(35.718789, 139.768348),
  new google.maps.LatLng(35.717182, 139.769817),
  new google.maps.LatLng(35.716672, 139.769871),
  new google.maps.LatLng(35.715936, 139.769758),
  new google.maps.LatLng(35.714743, 139.770091),
  new google.maps.LatLng(35.714329, 139.771427),
  new google.maps.LatLng(35.711862, 139.772977),
  new google.maps.LatLng(35.710647, 139.773331),
  new google.maps.LatLng(35.710566, 139.773758),
  new google.maps.LatLng(35.711583, 139.774637),
  new google.maps.LatLng(35.712195, 139.774919),
  new google.maps.LatLng(35.713142, 139.775547),
  new google.maps.LatLng(35.713613, 139.775750),
  new google.maps.LatLng(35.716313, 139.777864),
  new google.maps.LatLng(35.715625, 139.779066),
  new google.maps.LatLng(35.717019, 139.780246),
  new google.maps.LatLng(35.716975, 139.780578),
  new google.maps.LatLng(35.717306, 139.780857),
  new google.maps.LatLng(35.717027, 139.781544),
  new google.maps.LatLng(35.713081, 139.778980),
  new google.maps.LatLng(35.712881, 139.779430),
  new google.maps.LatLng(35.712550, 139.779345),
  new google.maps.LatLng(35.712341, 139.780729),
  new google.maps.LatLng(35.713046, 139.780868),
  new google.maps.LatLng(35.715747, 139.782531),
  new google.maps.LatLng(35.713796, 139.792434),
  new google.maps.LatLng(35.711478, 139.792133),
  new google.maps.LatLng(35.710720, 139.797873),
  new google.maps.LatLng(35.712402, 139.799171),
  new google.maps.LatLng(35.712689, 139.797841),
  new google.maps.LatLng(35.710633, 139.797691),
  new google.maps.LatLng(35.710781, 139.796393),
  new google.maps.LatLng(35.708795, 139.796082),
  new google.maps.LatLng(35.708987, 139.794268),
  new google.maps.LatLng(35.707715, 139.793947),
  new google.maps.LatLng(35.706748, 139.793410),
  new google.maps.LatLng(35.707419, 139.790985),
  new google.maps.LatLng(35.707506, 139.785009),
  new google.maps.LatLng(35.706713, 139.784988),
  new google.maps.LatLng(35.704735, 139.784752),
  new google.maps.LatLng(35.703394, 139.784409),
  new google.maps.LatLng(35.703821, 139.781329),
  new google.maps.LatLng(35.708542, 139.782134),
  new google.maps.LatLng(35.708734, 139.780160),
  new google.maps.LatLng(35.712262, 139.780739),
  new google.maps.LatLng(35.712471, 139.779651)
];

var path_s = [
  new google.maps.LatLng(35.711895, 139.778899),
  new google.maps.LatLng(35.712031, 139.778127),
  new google.maps.LatLng(35.711046, 139.776931),
  new google.maps.LatLng(35.710188, 139.778615),
  new google.maps.LatLng(35.709221, 139.778315),
  new google.maps.LatLng(35.707448, 139.778084),
  new google.maps.LatLng(35.707230, 139.779988),
  new google.maps.LatLng(35.702371, 139.779457),
  new google.maps.LatLng(35.700293, 139.779103),
  new google.maps.LatLng(35.700150, 139.780552),
  new google.maps.LatLng(35.699152, 139.780380),
  new google.maps.LatLng(35.698840, 139.784631),
  new google.maps.LatLng(35.699755, 139.784814),
  new google.maps.LatLng(35.700635, 139.785125),
  new google.maps.LatLng(35.701750, 139.785339),
  new google.maps.LatLng(35.701759, 139.788032),
  new google.maps.LatLng(35.706394, 139.788032),
  new google.maps.LatLng(35.706063, 139.790747),
  new google.maps.LatLng(35.709670, 139.791412),
  new google.maps.LatLng(35.711664, 139.791895),
  new google.maps.LatLng(35.712335, 139.788483),
  new google.maps.LatLng(35.714470, 139.788901),
  new google.maps.LatLng(35.719191, 139.789513),
  new google.maps.LatLng(35.720123, 139.789384),
  new google.maps.LatLng(35.719975, 139.786047),
  new google.maps.LatLng(35.719226, 139.785908),
  new google.maps.LatLng(35.717475, 139.785468),
  new google.maps.LatLng(35.717884, 139.783344),
  new google.maps.LatLng(35.716595, 139.782904),
  new google.maps.LatLng(35.715750, 139.782582),
  new google.maps.LatLng(35.713067, 139.780876),
  new google.maps.LatLng(35.712283, 139.780737),
  new google.maps.LatLng(35.712492, 139.779235),
  new google.maps.LatLng(35.711895, 139.778899)
];

var path_n = [
  new google.maps.LatLng(35.711704, 139.798493),
  new google.maps.LatLng(35.713590, 139.800407),
  new google.maps.LatLng(35.716414, 139.802929),
  new google.maps.LatLng(35.717654, 139.803950),
  new google.maps.LatLng(35.718244, 139.803990),
  new google.maps.LatLng(35.720412, 139.804263),
  new google.maps.LatLng(35.722501, 139.804483),
  new google.maps.LatLng(35.722836, 139.804523),
  new google.maps.LatLng(35.722695, 139.805831),
  new google.maps.LatLng(35.723595, 139.806044),
  new google.maps.LatLng(35.725985, 139.806571),
  new google.maps.LatLng(35.726123, 139.805804),
  new google.maps.LatLng(35.726280, 139.804989),
  new google.maps.LatLng(35.726231, 139.802091),
  new google.maps.LatLng(35.726188, 139.800842),
  new google.maps.LatLng(35.725666, 139.799836),
  new google.maps.LatLng(35.724747, 139.797861),
  new google.maps.LatLng(35.724578, 139.797285),
  new google.maps.LatLng(35.726345, 139.795752),
  new google.maps.LatLng(35.728132, 139.794251),
  new google.maps.LatLng(35.728648, 139.793766),
  new google.maps.LatLng(35.729505, 139.792429),
  new google.maps.LatLng(35.729921, 139.791761),
  new google.maps.LatLng(35.728792, 139.790764),
  new google.maps.LatLng(35.725461, 139.791014),
  new google.maps.LatLng(35.724756, 139.791071),
  new google.maps.LatLng(35.724712, 139.789766),
  new google.maps.LatLng(35.724665, 139.787574),
  new google.maps.LatLng(35.725066, 139.786495),
  new google.maps.LatLng(35.725197, 139.786253),
  new google.maps.LatLng(35.724443, 139.785319),
  new google.maps.LatLng(35.723614, 139.784257),
  new google.maps.LatLng(35.722883, 139.783431),
  new google.maps.LatLng(35.722045, 139.782649),
  new google.maps.LatLng(35.722258, 139.782209),
  new google.maps.LatLng(35.722428, 139.781900),
  new google.maps.LatLng(35.723727, 139.781896),
  new google.maps.LatLng(35.724770, 139.781912),
  new google.maps.LatLng(35.724788, 139.781275),
  new google.maps.LatLng(35.724772, 139.780554),
  new google.maps.LatLng(35.724816, 139.779936),
  new google.maps.LatLng(35.724834, 139.779348),
  new google.maps.LatLng(35.724910, 139.778957),
  new google.maps.LatLng(35.724936, 139.778166),
  new google.maps.LatLng(35.725233, 139.776970),
  new google.maps.LatLng(35.725005, 139.777218),
  new google.maps.LatLng(35.724067, 139.778658),
  new google.maps.LatLng(35.723191, 139.778322),
  new google.maps.LatLng(35.722942, 139.778949),
  new google.maps.LatLng(35.722769, 139.779323),
  new google.maps.LatLng(35.721017, 139.781034),
  new google.maps.LatLng(35.720812, 139.781388),
  new google.maps.LatLng(35.722096, 139.782595),
  new google.maps.LatLng(35.721724, 139.783378),
  new google.maps.LatLng(35.721543, 139.784238),
  new google.maps.LatLng(35.721363, 139.785071),
  new google.maps.LatLng(35.721168, 139.786218),
  new google.maps.LatLng(35.721213, 139.786878),
  new google.maps.LatLng(35.721198, 139.787253),
  new google.maps.LatLng(35.718598, 139.787849),
  new google.maps.LatLng(35.718199, 139.789331),
  new google.maps.LatLng(35.719006, 139.789405),
  new google.maps.LatLng(35.719189, 139.789526),
  new google.maps.LatLng(35.720602, 139.789333),
  new google.maps.LatLng(35.721261, 139.789343),
  new google.maps.LatLng(35.721342, 139.790732),
  new google.maps.LatLng(35.721317, 139.791196),
  new google.maps.LatLng(35.721239, 139.792531),
  new google.maps.LatLng(35.721207, 139.792908),
  new google.maps.LatLng(35.721638, 139.792928),
  new google.maps.LatLng(35.722249, 139.793112),
  new google.maps.LatLng(35.722596, 139.792918),
  new google.maps.LatLng(35.722251, 139.793197),
  new google.maps.LatLng(35.721550, 139.792981),
  new google.maps.LatLng(35.720235, 139.793200),
  new google.maps.LatLng(35.720143, 139.793763),
  new google.maps.LatLng(35.719708, 139.795902),
  new google.maps.LatLng(35.719228, 139.797820),
  new google.maps.LatLng(35.719106, 139.798230),
  new google.maps.LatLng(35.717826, 139.797942),
  new google.maps.LatLng(35.716145, 139.797479),
  new google.maps.LatLng(35.716099, 139.797678),
  new google.maps.LatLng(35.715863, 139.798712),
  new google.maps.LatLng(35.714425, 139.798352),
  new google.maps.LatLng(35.712687, 139.797901),
  new google.maps.LatLng(35.712347, 139.797893),
  new google.maps.LatLng(35.710939, 139.797854),
  new google.maps.LatLng(35.711704, 139.798493)
];

var path_g = [
  new google.maps.LatLng(35.714394, 139.778400),
  new google.maps.LatLng(35.715069, 139.778893),
  new google.maps.LatLng(35.717282, 139.780717),
  new google.maps.LatLng(35.719072, 139.780497),
  new google.maps.LatLng(35.720627, 139.781227),
  new google.maps.LatLng(35.722047, 139.782530),
  new google.maps.LatLng(35.723645, 139.784156),
  new google.maps.LatLng(35.725213, 139.786183),
  new google.maps.LatLng(35.724708, 139.787567),
  new google.maps.LatLng(35.724747, 139.789407),
  new google.maps.LatLng(35.724769, 139.790883),
  new google.maps.LatLng(35.728923, 139.790593),
  new google.maps.LatLng(35.730208, 139.791698),
  new google.maps.LatLng(35.728792, 139.793774),
  new google.maps.LatLng(35.724594, 139.797384),
  new google.maps.LatLng(35.724934, 139.798302),
  new google.maps.LatLng(35.726201, 139.800802),
  new google.maps.LatLng(35.726332, 139.804932),
  new google.maps.LatLng(35.727469, 139.805050),
  new google.maps.LatLng(35.728597, 139.805351),
  new google.maps.LatLng(35.728235, 139.808457),
  new google.maps.LatLng(35.727660, 139.808542),
  new google.maps.LatLng(35.725775, 139.807995),
  new google.maps.LatLng(35.724172, 139.807614),
  new google.maps.LatLng(35.722534, 139.807260),
  new google.maps.LatLng(35.721071, 139.806853),
  new google.maps.LatLng(35.720618, 139.806563),
  new google.maps.LatLng(35.719399, 139.805286),
  new google.maps.LatLng(35.715017, 139.801842),
  new google.maps.LatLng(35.713737, 139.800565),
  new google.maps.LatLng(35.710735, 139.797765),
  new google.maps.LatLng(35.711380, 139.792004),
  new google.maps.LatLng(35.709664, 139.791425),
  new google.maps.LatLng(35.706083, 139.790749),
  new google.maps.LatLng(35.706397, 139.788034),
  new google.maps.LatLng(35.701779, 139.788058),
  new google.maps.LatLng(35.701666, 139.785988),
  new google.maps.LatLng(35.701910, 139.784014),
  new google.maps.LatLng(35.700812, 139.783735),
  new google.maps.LatLng(35.698947, 139.782973),
  new google.maps.LatLng(35.699148, 139.780376),
  new google.maps.LatLng(35.700158, 139.780537),
  new google.maps.LatLng(35.700472, 139.776954),
  new google.maps.LatLng(35.702554, 139.777158),
  new google.maps.LatLng(35.702223, 139.780956),
  new google.maps.LatLng(35.705272, 139.781629),
  new google.maps.LatLng(35.708556, 139.782123),
  new google.maps.LatLng(35.708748, 139.780149),
  new google.maps.LatLng(35.713069, 139.780878),
  new google.maps.LatLng(35.713696, 139.779183),
  new google.maps.LatLng(35.714219, 139.778346),
  new google.maps.LatLng(35.714394, 139.778400)
];

// ページロード時にinitialize関数を呼び出す
google.maps.event.addDomListener(window, "load", initialize);

// 地図を初期化する
function initialize() {
  // GoogleMapの中心座標, 表示の大きさを設定する
  var mapDiv = document.getElementById("map_canvas");
  var myOptions = {
    center    : new google.maps.LatLng(35.712645, 139.779956),
    zoom      : 16,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  mapCanvas = new google.maps.Map(mapDiv, myOptions);

  // マーカー出力位置情報を取得
  initializeMarkerObj("data/busStationM.json", "ew_bus_station", ew_markerbus, "img/ew_bus.png");
  initializeMarkerObj("data/busStationM.json", "n_bus_station",  n_markerbus,  "img/n_bus.png");
  initializeMarkerObj("data/busStationM.json", "s_bus_station",  s_markerbus,  "img/s_bus.png");
  initializeMarkerObj("data/busStationM.json", "g_bus_station",  g_markerbus,  "img/g_bus.png");

  // ポリゴンを表示する
  polylines[0] = new google.maps.Polyline({
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: "blue",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_ew,
    strokeColor: "blue", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
  polylines[1] = new google.maps.Polyline({
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: "green",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_s,
    strokeColor: "green", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
  polylines[2] = new google.maps.Polyline({
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: "red",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_n,
    strokeColor: "red", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
  polylines[3] = new google.maps.Polyline({
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: "black",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_g,
    strokeColor: "black", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
}

// JSONファイルからマーカーオブジェクトに情報を読み込む
function initializeMarkerObj(jsonFilePath, itemKey, markerObject, iconImg) {
  $.getJSON(jsonFilePath, function(json) {

    // 取得した情報を登録する
    $(json[itemKey]).each(function() {
      // マーカーオブジェクトに位置情報を追加
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Number(this.latitude), Number(this.longitude)),
        map     : mapCanvas,
        icon    : iconImg,
        visible : false
      });
      markerObject.push(marker);

      var busStationName = this.name;
      var startTime = this.start;
      var endTime = this.end;
      var memo = this.memo;

      // 情報ウィンドウオブジェクトに説明を登録
      var infoWindow = new google.maps.InfoWindow({
        content: '<a data-toggle="modal" data-target="#myModal">' + busStationName + "</a>"
      });

      // マーカークリックイベントを登録
      google.maps.event.addListener(marker, "click", function() {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infoWindow.open(mapCanvas, marker);
        currentInfoWindow = infoWindow;

        // モーダル情報追加
        var divHeader = $('<div>');
        divHeader.append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        divHeader.append('<h4 class="modal-title" id="myModalLabel">' + busStationName + '</h4>');
        $('.modal-header').html(divHeader);

        var divBody = $('<div>');
        divBody.append('<h5>' + "平日：【始発】" + startTime + "【最終】" + endTime + '</h5>');
        divBody.append('<h5>' + "休日：【始発】" + "" + "【最終】" + "" + '</h5>');
        divBody.append('<h5>' + memo + '</h5>');
        $('.modal-body').html(divBody);
      });
    });
  });
}

// ボタンクリックイベント制御
$(function() {
  $("#btn_0").click(function() {
    for (var i = 0; i < ew_markerbus.length; i++) {
      ew_markerbus[i].setVisible(!ew_markerbus[i].visible);
    }
    polylines[0].setVisible(!polylines[0].visible);
  });
  $("#btn_1").click(function() {
    for (var i = 0; i < s_markerbus.length; i++) {
      s_markerbus[i].setVisible(!s_markerbus[i].visible);
    }
    polylines[1].setVisible(!polylines[1].visible);
  });
  $('#btn_2').on('click', function() {
    for (var i = 0; i < n_markerbus.length; i++) {
      n_markerbus[i].setVisible(!n_markerbus[i].visible);
    }
    polylines[2].setVisible(!polylines[2].visible);
  });
  $('#btn_3').on('click', function() {
    for (var i = 0; i < g_markerbus.length; i++) {
      g_markerbus[i].setVisible(!g_markerbus[i].visible);
    }
    polylines[3].setVisible(!polylines[3].visible);
  });
  $("#btn_4").click(function() {
    initialize();
  });
});