<?php
//字符编码设置，以及处理跨域的问题
header("Content-type:text/html;charset=utf-8;Access-Control-Allow-Origin:*;Access-Control-Allow-Methods:GET,POST");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// 创建连接 
$con =mysqli_connect($servername, $username, $password, $dbname);

// 判断一个参数是否获取
// function check_var( $var, $default = ''){
//     return( (isset($var) and !empty($var )) ? $var : (!empty($default) ? $default : false) );
// }

if(empty($_GET['city']) && empty($_GET['category']) && empty($_GET['xiaxian'])){
	$sql = "SELECT * FROM job";
}
else if (isset($_GET['city']) && empty($_GET['category']) && empty($_GET['xiaxian']) ) {
	$ci = $_GET['city'];
	$sql = "SELECT * FROM job WHERE city = '$ci'";
}
else if (empty($_GET['city']) && isset($_GET['category']) && empty($_GET['xiaxian']) ) {
	$cate = $_GET['category'];
	$sql = "SELECT * FROM job WHERE category = '$cate'";
}
else if (empty($_GET['city']) && empty($_GET['category']) && isset($_GET['xiaxian']) ) {
	$zc_xx = $_GET['xiaxian'];
	$zc_sx = $_GET['shangxian'];
	$sql = "SELECT * FROM job WHERE pay BETWEEN $zc_xx AND $zc_sx";
}
else if(isset($_GET['city']) && isset($_GET['category']) && empty($_GET['xiaxian']) ){
	$ci = $_GET['city'];
	$cate = $_GET['category'];
	$sql = "SELECT * FROM job WHERE city = '$ci' AND category = '$cate'";
}
else if (isset($_GET['city']) && empty($_GET['category']) && isset($_GET['xiaxian']) ) {
	$ci = $_GET['city'];
	$zc_xx = $_GET['xiaxian'];
	$zc_sx = $_GET['shangxian'];
	$sql = "SELECT * FROM job WHERE city = '$ci' AND pay BETWEEN $zc_xx AND $zc_sx";
}
else if (empty($_GET['city']) && isset($_GET['category']) && isset($_GET['xiaxian']) ) {
	$cate = $_GET['category'];
	$zc_xx = $_GET['xiaxian'];
	$zc_sx = $_GET['shangxian'];
	$sql = "SELECT * FROM job WHERE category = '$cate' AND pay BETWEEN $zc_xx AND $zc_sx";
}
else if( isset($_GET['city']) && isset($_GET['category']) && isset($_GET['xiaxian']) ){
	$zc_xx = $_GET['xiaxian'];
	$zc_sx = $_GET['shangxian'];
	$cate = $_GET['category'];
	$ci = $_GET['city'];
	$sql = "SELECT * FROM job WHERE pay BETWEEN $zc_xx AND $zc_sx AND category = '$cate' AND city = '$ci'";
}

$result = mysqli_query($con,$sql);
if (!$result) {
    printf("Error: %s\n", mysqli_error($con));
    exit();
}

$jarr = array();
while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
    for($i=0;$i<$count;$i++){
        unset($rows[$i]);//删除冗余数据  
    }
    array_push($jarr,$rows);
}
//查看数组
// print_r($jarr);
echo $str=json_encode($jarr,JSON_UNESCAPED_UNICODE);//将数组进行json编码，并且解决中文乱码的问题
mysqli_close($con);
?>