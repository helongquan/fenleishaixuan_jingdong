<?php
//字符编码设置，以及处理跨域的问题
header("Content-type:text/html;charset=utf-8;Access-Control-Allow-Origin:*;Access-Control-Allow-Methods:GET,POST");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// 创建连接 
$con =mysqli_connect($servername, $username, $password, $dbname);

// 检测连接
$sql = "SELECT city, COUNT(category) AS total FROM job GROUP BY city";
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