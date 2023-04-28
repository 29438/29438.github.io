<?php
header('Content-Type: application/json; charset=utf-8');
if (!isset($_GET['keyword'])) {
  exit(json_encode(array('code' => -1, 'text' => '关键词参数不存在')));
}

$keyword = $_GET['keyword'];
$url = "http://mvsearch.kugou.com/mv_search?keyword=" . urlencode($keyword) . "&page=1&pagesize=20";
$data = file_get_contents($url);
$response = json_decode($data, true);

if ($response['status'] != 1 || empty($response['data']['lists'])) {
  exit(json_encode(array('code' => 0, 'text' => '没有搜索到结果')));
}

$mv_list = array();
foreach ($response['data']['lists'] as $mv) {
  $mv_hash = $mv['MvHash'];
  $mv_name = htmlspecialchars($mv['MvName']);
  $singer_name = htmlspecialchars($mv['SingerName']);

  // 获取封面图片链接
  $cover = htmlspecialchars($mv['ImgUrl']);
  
  $url = "http://m.kugou.com/app/i/mv.php?cmd=100&hash={$mv_hash}&ismp3=1&ext=mp4";
  $data = file_get_contents($url);
  $response = json_decode($data, true);

  if (!empty($response['mvdata']['sq']['downurl'])) {
    $url = $response['mvdata']['sq']['downurl'];
  } else if (!empty($response['mvdata']['le']['downurl'])) {
    $url = $response['mvdata']['le']['downurl'];
  } else {
    $url = $response['mvdata']['rq']['downurl'];
  }

  $mv_url = htmlspecialchars($url);
  $item = array('name' => $mv_name, 'singer' => $singer_name, 'url' => $mv_url, 'cover' => $cover);
  array_push($mv_list, $item);
}

exit(json_encode(array('code' => 1, 'data' => $mv_list)));
echo stripslashes(json_encode($response,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
?>