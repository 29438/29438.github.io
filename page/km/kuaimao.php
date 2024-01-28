<?php
header('Content-Type: application/json');
class Encryption {
    private $key;
    private $iv;

    public function __construct($key = "625202f9149maomi", $iv = "5efd3f6060emaomi") {
        $this->key = $key;
        $this->iv = $iv;
    }

    public function decryptData($hexString) {
        $binaryData = hex2bin($hexString);
        $decryptedData = openssl_decrypt($binaryData, 'aes-128-cbc', $this->key, OPENSSL_RAW_DATA, $this->iv);
        return utf8_encode($decryptedData);
    }

    public function encryptData($data) {
        $binaryData = utf8_encode($data);
        $encryptedData = openssl_encrypt($binaryData, 'aes-128-cbc', $this->key, OPENSSL_RAW_DATA, $this->iv);
        return strtoupper(bin2hex($encryptedData));
    }
}

class ApiRequest {
    public static function makeCurlRequest($url, $data) {
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_PORT => "8099",
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $data,
            CURLOPT_HTTPHEADER => [
                "Content-Type: application/x-www-form-urlencoded",
                "content-type: text/html"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return $response;
        }
    }
}

class ApiResponse {
    public static function createResponse($code, $data, $msg) {
        $array = [
            "code" => $code,
            "data" => $data,
            "msg" => $msg
        ];
        return json_encode($array, JSON_PRETTY_PRINT);
    }
}

$encryption = new Encryption();

$type = $_GET['type'];
if ($type == null){
    echo ApiResponse::createResponse(403, null, "请选择类型");
    return;
}

if ($type == "getList"){
    $page = $_GET['page'] ?: 1;
    $dataToEncrypt = '{"page":' . $page . ',"perPage":10,"uId":"13454502"}';
    $encryptedResult = $encryption->encryptData($dataToEncrypt);
    $sig = md5('_app_version=1.1.7&_device_type=PJA110&_device_version=13&_sdk_version=33&data=' . $encryptedResult . 'maomi_pass_xyz');
    $url = "http://43.135.52.148:8099/api/videos/listHot";
    $data = "_app_version=1.1.7&_device_type=PJA110&_device_version=13&_sdk_version=33&data=" . $encryptedResult . "&sig=" . $sig;
    $decodedResponse = json_decode($encryption->decryptData(ApiRequest::makeCurlRequest($url, $data)), true);

    $resultArray = [];
    $totalItems = count($decodedResponse['data']['list']);

    foreach ($decodedResponse['data']['list'] as $key => $item) {
        $dataToEncrypt = '{"uId":"13454502","mvId":"'.$item['mv_id'].'","type":"1"}';
        $encryptedResult = $encryption->encryptData($dataToEncrypt);
        $sig = md5('_app_version=1.1.7&_device_type=PJA110&_device_version=13&_sdk_version=33&data=' . $encryptedResult . 'maomi_pass_xyz');
        $urls = "http://43.135.52.148:8099/api/videos/detail";
        $data = "_app_version=1.1.7&_device_type=PJA110&_device_version=13&_sdk_version=33&data=" . $encryptedResult . "&sig=" . $sig;
        $decodedResponses = json_decode($encryption->decryptData(ApiRequest::makeCurlRequest($urls, $data)), true);
        $resultItem = [
            'mv_title' => $item['mv_title'],
            'mv_img_url' => $item['mv_img_url'],
            'mv_play_url' => $decodedResponses['data']['mv_play_url']
        ];

        if ($key < $totalItems - 1) {
            $resultArray[] = $resultItem;
        }
    }

    if (empty($resultArray)){
        echo ApiResponse::createResponse(403, null, "暂无数据");
        return;
    }

    echo json_encode(json_decode(ApiResponse::createResponse(200, $resultArray, "获取成功"), true), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}
