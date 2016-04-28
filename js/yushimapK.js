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
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

var path_u = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695375, 139.751415),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(35.694551, 139.751807),
  new google.maps.LatLng(35.693863, 139.752923),
  new google.maps.LatLng(35.694159, 139.753170)
];

var path_a = [
  new google.maps.LatLng(35.694056, 139.753240),
  new google.maps.LatLng(35.693819, 139.752912),
  new google.maps.LatLng(35.694460, 139.751818),
  new google.maps.LatLng(35.695375, 139.751415),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
  new google.maps.LatLng(, ),
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
        strokeColor: "yellow",
        strokeOpacity: 0.8,
      },
      repeat: "1%",
      offset: "100px"
    }],
    map: mapCanvas,
    path: path_u,
    strokeColor: "yellow", // 線の色
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