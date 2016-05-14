// google.maps.Mapオブジェクト（地図オブジェクト）
var mapCanvas = null;

// 情報ウィンドウオブジェクト
var currentInfoWindow = null;

// バス停の情報オブジェクト
var megurin = {
  "name"      : null, // 名称
  "latitude"  : null, // 緯度
  "longitude" : null, // 経度
  "zoom"      : null, // 地図に表示する際の縮尺値
  "icon"      : null  // アイコン
};

// 停留所位置マーカー出力座標を格納する配列オブジェクト
var k_markerbus = new Array();
var f_markerbus = new Array();
var u_markerbus = new Array();
var a_markerbus = new Array();

//ポリライン
var polylines    = new Array();
var path_k = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695375, 139.751415),
  new google.maps.LatLng(35.695135, 139.749393),
  new google.maps.LatLng(35.693427, 139.743862),
  new google.maps.LatLng(35.691475, 139.743546),
  new google.maps.LatLng(35.687153, 139.741872),
  new google.maps.LatLng(35.685733, 139.741647),
  new google.maps.LatLng(35.685811, 139.740241),
  new google.maps.LatLng(35.685733, 139.739190),
  new google.maps.LatLng(35.684609, 139.739437),
  new google.maps.LatLng(35.684774, 139.740789),
  new google.maps.LatLng(35.684765, 139.741529),
  new google.maps.LatLng(35.684025, 139.741507),
  new google.maps.LatLng(35.683075, 139.741733),
  new google.maps.LatLng(35.681794, 139.741840),
  new google.maps.LatLng(35.681794, 139.741325),
  new google.maps.LatLng(35.682238, 139.740381),
  new google.maps.LatLng(35.682848, 139.740338),
  new google.maps.LatLng(35.683110, 139.741679),
  new google.maps.LatLng(35.684112, 139.741411),
  new google.maps.LatLng(35.684112, 139.740853),
  new google.maps.LatLng(35.683798, 139.737023),
  new google.maps.LatLng(35.684016, 139.734609),
  new google.maps.LatLng(35.684765, 139.733117),
  new google.maps.LatLng(35.685524, 139.730961),
  new google.maps.LatLng(35.686125, 139.731133),
  new google.maps.LatLng(35.686604, 139.729813),
  new google.maps.LatLng(35.685924, 139.729695),
  new google.maps.LatLng(35.685628, 139.731508),
  new google.maps.LatLng(35.684992, 139.733150),
  new google.maps.LatLng(35.684243, 139.734469),
  new google.maps.LatLng(35.684094, 139.735081),
  new google.maps.LatLng(35.683964, 139.737677),
  new google.maps.LatLng(35.686195, 139.736733),
  new google.maps.LatLng(35.686892, 139.738428),
  new google.maps.LatLng(35.687763, 139.740778),
  new google.maps.LatLng(35.688216, 139.742194),
  new google.maps.LatLng(35.692129, 139.743610),
  new google.maps.LatLng(35.690874, 139.739501),
  new google.maps.LatLng(35.689427, 139.735424),
  new google.maps.LatLng(35.691066, 139.735875),
  new google.maps.LatLng(35.692503, 139.740864),
  new google.maps.LatLng(35.694786, 139.739887),
  new google.maps.LatLng(35.695867, 139.740574),
  new google.maps.LatLng(35.697043, 139.741625),
  new google.maps.LatLng(35.698071, 139.742291),
  new google.maps.LatLng(35.699099, 139.743267),
  new google.maps.LatLng(35.699849, 139.743943),
  new google.maps.LatLng(35.700371, 139.744254),
  new google.maps.LatLng(35.701051, 139.744522),
  new google.maps.LatLng(35.701539, 139.744962),
  new google.maps.LatLng(35.701931, 139.745574),
  new google.maps.LatLng(35.701617, 139.747805),
  new google.maps.LatLng(35.702035, 139.747934),
  new google.maps.LatLng(35.701504, 139.748857),
  new google.maps.LatLng(35.701286, 139.749972),
  new google.maps.LatLng(35.701513, 139.750530),
  new google.maps.LatLng(35.700162, 139.751174),
  new google.maps.LatLng(35.699361, 139.749007),
  new google.maps.LatLng(35.697470, 139.750745),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

var path_f = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695375, 139.751415),
  new google.maps.LatLng(35.697400, 139.750632),
  new google.maps.LatLng(35.698855, 139.749313),
  new google.maps.LatLng(35.699578, 139.746502),
  new google.maps.LatLng(35.699544, 139.745718),
  new google.maps.LatLng(35.699073, 139.745826),
  new google.maps.LatLng(35.699613, 139.746534),
  new google.maps.LatLng(35.699605, 139.745708),
  new google.maps.LatLng(35.699822, 139.745676),
  new google.maps.LatLng(35.700162, 139.745729),
  new google.maps.LatLng(35.700946, 139.746073),
  new google.maps.LatLng(35.701330, 139.746448),
  new google.maps.LatLng(35.701835, 139.745600),
  new google.maps.LatLng(35.701495, 139.745021),
  new google.maps.LatLng(35.701068, 139.744570),
  new google.maps.LatLng(35.700328, 139.744334),
  new google.maps.LatLng(35.699779, 139.743991),
  new google.maps.LatLng(35.699361, 139.743530),
  new google.maps.LatLng(35.699117, 139.743380),
  new google.maps.LatLng(35.698019, 139.742339),
  new google.maps.LatLng(35.697034, 139.741770),
  new google.maps.LatLng(35.695858, 139.740687),
  new google.maps.LatLng(35.694795, 139.739979),
  new google.maps.LatLng(35.692564, 139.740901),
  new google.maps.LatLng(35.694046, 139.745289),
  new google.maps.LatLng(35.694873, 139.744967),
  new google.maps.LatLng(35.694725, 139.744131),
  new google.maps.LatLng(35.695823, 139.743787),
  new google.maps.LatLng(35.696093, 139.744935),
  new google.maps.LatLng(35.696058, 139.745000),
  new google.maps.LatLng(35.696555, 139.747296),
  new google.maps.LatLng(35.695527, 139.748551),
  new google.maps.LatLng(35.695168, 139.748737),
  new google.maps.LatLng(35.695274, 139.749162),
  new google.maps.LatLng(35.695736, 139.752360),
  new google.maps.LatLng(35.697923, 139.751973),
  new google.maps.LatLng(35.697758, 139.753454),
  new google.maps.LatLng(35.698184, 139.753508),
  new google.maps.LatLng(35.698995, 139.753089),
  new google.maps.LatLng(35.699143, 139.753583),
  new google.maps.LatLng(35.698367, 139.754055),
  new google.maps.LatLng(35.699326, 139.757048),
  new google.maps.LatLng(35.699683, 139.757531),
  new google.maps.LatLng(35.700084, 139.757134),
  new google.maps.LatLng(35.701373, 139.756769),
  new google.maps.LatLng(35.701138, 139.758336),
  new google.maps.LatLng(35.701147, 139.759151),
  new google.maps.LatLng(35.699796, 139.763271),
  new google.maps.LatLng(35.698803, 139.762724),
  new google.maps.LatLng(35.699918, 139.759548),
  new google.maps.LatLng(35.701077, 139.758303),
  new google.maps.LatLng(35.701591, 139.755439),
  new google.maps.LatLng(35.700929, 139.755503),
  new google.maps.LatLng(35.695867, 139.758164),
  new google.maps.LatLng(35.695771, 139.755364),
  new google.maps.LatLng(35.695693, 139.754044),
  new google.maps.LatLng(35.695300, 139.751512),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

var path_u = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695375, 139.751415),
  new google.maps.LatLng(35.695597, 139.751265),
  new google.maps.LatLng(35.695867, 139.753100),
  new google.maps.LatLng(35.696111, 139.760717),
  new google.maps.LatLng(35.695701, 139.761318),
  new google.maps.LatLng(35.696825, 139.761651),
  new google.maps.LatLng(35.698751, 139.762713),
  new google.maps.LatLng(35.699744, 139.759870),
  new google.maps.LatLng(35.700746, 139.760331),
  new google.maps.LatLng(35.699761, 139.763324),
  new google.maps.LatLng(35.696808, 139.761715),
  new google.maps.LatLng(35.695614, 139.761340),
  new google.maps.LatLng(35.694499, 139.762906),
  new google.maps.LatLng(35.694403, 139.763947),
  new google.maps.LatLng(35.694647, 139.765181),
  new google.maps.LatLng(35.695963, 139.768635),
  new google.maps.LatLng(35.696407, 139.768399),
  new google.maps.LatLng(35.697566, 139.769236),
  new google.maps.LatLng(35.697374, 139.769483),
  new google.maps.LatLng(35.696459, 139.769773),
  new google.maps.LatLng(35.696764, 139.770684),
  new google.maps.LatLng(35.697618, 139.771017),
  new google.maps.LatLng(35.698559, 139.769129),
  new google.maps.LatLng(35.696695, 139.767734),
  new google.maps.LatLng(35.695971, 139.767455),
  new google.maps.LatLng(35.692190, 139.767477),
  new google.maps.LatLng(35.694769, 139.776929),
  new google.maps.LatLng(35.694194, 139.777143),
  new google.maps.LatLng(35.693052, 139.778077),
  new google.maps.LatLng(35.692625, 139.777165),
  new google.maps.LatLng(35.691710, 139.774815),
  new google.maps.LatLng(35.690299, 139.769848),
  new google.maps.LatLng(35.689305, 139.768496),
  new google.maps.LatLng(35.690072, 139.764430),
  new google.maps.LatLng(35.690674, 139.762112),
  new google.maps.LatLng(35.691641, 139.760953),
  new google.maps.LatLng(35.695396, 139.761275),
  new google.maps.LatLng(35.695928, 139.760546),
  new google.maps.LatLng(35.695762, 139.755374),
  new google.maps.LatLng(35.695701, 139.754055),
  new google.maps.LatLng(35.695335, 139.751448),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

var path_a = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695522, 139.751325),
  new google.maps.LatLng(35.695757, 139.753074),
  new google.maps.LatLng(35.695914, 139.755343),
  new google.maps.LatLng(35.695208, 139.755714),
  new google.maps.LatLng(35.693927, 139.755885),
  new google.maps.LatLng(35.693047, 139.756202),
  new google.maps.LatLng(35.692825, 139.758734),
  new google.maps.LatLng(35.692921, 139.761046),
  new google.maps.LatLng(35.692163, 139.767451),
  new google.maps.LatLng(35.694860, 139.777472),
  new google.maps.LatLng(35.693866, 139.777895),
  new google.maps.LatLng(35.694115, 139.778802),
  new google.maps.LatLng(35.695095, 139.778384),
  new google.maps.LatLng(35.695491, 139.778732),
  new google.maps.LatLng(35.695470, 139.780004),
  new google.maps.LatLng(35.696428, 139.780014),
  new google.maps.LatLng(35.698680, 139.780309),
  new google.maps.LatLng(35.698807, 139.775685),
  new google.maps.LatLng(35.697513, 139.775658),
  new google.maps.LatLng(35.697530, 139.773872),
  new google.maps.LatLng(35.698632, 139.774221),
  new google.maps.LatLng(35.698706, 139.773684),
  new google.maps.LatLng(35.699094, 139.773722),
  new google.maps.LatLng(35.699090, 139.773990),
  new google.maps.LatLng(35.698776, 139.773969),
  new google.maps.LatLng(35.698767, 139.774242),
  new google.maps.LatLng(35.700793, 139.774478),
  new google.maps.LatLng(35.702740, 139.774360),
  new google.maps.LatLng(35.702954, 139.771667),
  new google.maps.LatLng(35.704505, 139.771844),
  new google.maps.LatLng(35.704688, 139.769801),
  new google.maps.LatLng(35.703703, 139.769763),
  new google.maps.LatLng(35.702022, 139.769350),
  new google.maps.LatLng(35.699813, 139.769141),
  new google.maps.LatLng(35.699830, 139.768438),
  new google.maps.LatLng(35.699107, 139.768175),
  new google.maps.LatLng(35.699639, 139.767027),
  new google.maps.LatLng(35.700623, 139.763851),
  new google.maps.LatLng(35.696803, 139.761754),
  new google.maps.LatLng(35.695426, 139.761335),
  new google.maps.LatLng(35.695962, 139.760547),
  new google.maps.LatLng(35.695840, 139.755349),
  new google.maps.LatLng(35.695653, 139.753042),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

// ページロード時にinitialize関数を呼び出す
google.maps.event.addDomListener(window, "load", initialize);

// 地図を初期化する
function initialize() {
  // GoogleMapの中心座標, 表示の大きさを設定する
  var mapDiv = document.getElementById("map_canvas");
  var myOptions = {
    center    : new google.maps.LatLng(35.694003, 139.753634),
    zoom      : 16,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  mapCanvas = new google.maps.Map(mapDiv, myOptions);

  // マーカー出力位置情報を取得
  initializeMarkerObj("data/busStationK.json", "k_bus_station", k_markerbus, "img/k_bus.png");
  initializeMarkerObj("data/busStationK.json", "f_bus_station", f_markerbus, "img/f_bus.png");
  initializeMarkerObj("data/busStationK.json", "u_bus_station", u_markerbus, "img/u_bus.png");
  initializeMarkerObj("data/busStationK.json", "a_bus_station", a_markerbus, "img/a_bus.png");

  // ポリゴンを表示する
  polylines[0] = new google.maps.Polyline({
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
    path: path_k,
    strokeColor: "red", // 線の色
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
    path: path_f,
    strokeColor: "green", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
  polylines[2] = new google.maps.Polyline({
    icons: [{
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: 2,
        strokeColor: "orange",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_u,
    strokeColor: "orange", // 線の色
    strokeOpacity: 0.8, // 線の透明度
    visible: false
  });
  polylines[3] = new google.maps.Polyline({
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
    path: path_a,
    strokeColor: "blue", // 線の色
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

      // 情報ウィンドウオブジェクトに説明を登録
      var infoWindow = new google.maps.InfoWindow({
        content: '<a data-toggle="modal" data-target="#myModal">' + this.name + "</a>"
      });

      // マーカークリックイベントを登録
      google.maps.event.addListener(marker, "click", function() {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infoWindow.open(mapCanvas, marker);
        currentInfoWindow = infoWindow;
      });
    });
  });
}

// ボタンクリックイベント制御
$(function() {
  $("#btn_0").click(function() {
    for (var i = 0; i < k_markerbus.length; i++) {
      k_markerbus[i].setVisible(!k_markerbus[i].visible);
    }
    polylines[0].setVisible(!polylines[0].visible);
  });
  $("#btn_1").click(function() {
    for (var i = 0; i < f_markerbus.length; i++) {
      f_markerbus[i].setVisible(!f_markerbus[i].visible);
    }
    polylines[1].setVisible(!polylines[1].visible);
  });
  $('#btn_2').on('click', function() {
    for (var i = 0; i < u_markerbus.length; i++) {
      u_markerbus[i].setVisible(!u_markerbus[i].visible);
    }
    polylines[2].setVisible(!polylines[2].visible);
  });
  $('#btn_3').on('click', function() {
    for (var i = 0; i < a_markerbus.length; i++) {
      a_markerbus[i].setVisible(!a_markerbus[i].visible);
    }
    polylines[3].setVisible(!polylines[3].visible);
  });
  $("#btn_4").click(function() {
    initialize();
  });
});