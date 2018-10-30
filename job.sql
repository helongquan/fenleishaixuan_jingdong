/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-10-30 10:52:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `pay` int(64) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `detail` text,
  `created_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('1', 'Windows应用运维工程师', '研发类', '深圳市', '60000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('2', 'Linux应用运维工程师', '研发类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('3', 'GNSS基带算法工程师', '研发类', '深圳市', '7000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('4', '高级运营专员（电商方向）', '市场销售类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('5', '旗舰店运营专员', '市场销售类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('6', '高级销售专员（阿拉伯语）', '市场销售类', '北京市', '8000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('7', '市场专员（渠道营销）', '市场销售类', '深圳市', '7000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('8', '3D渲染工程师', '市场销售类', '深圳市', '9000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('9', '高级信息安全工程师（运营和安全事件响应）', '信息安全类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('10', '信息安全工程师（Python）', '信息安全类', '北京市', '8000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('11', '信息安全架构师', '信息安全类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('12', '跨平台开发工程师（ C++）', '互联网类', '北京市', '35000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('13', '前端工程师', '互联网类', '深圳市', '32000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('14', 'Golang开发工程师', '互联网类', '北京市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('15', '安全开发工程师', '互联网类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('16', '高级需求分析师（行政方向）', '互联网类', '深圳市', '9000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('17', '项目经理', '互联网类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('18', '高级后台开发工程师（.NET）', '互联网类', '深圳市', '11000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('19', 'iOS开发工程师 (19届)', '互联网类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('20', '行业销售专员（海外方向）', '行业应用类', '上海市', '18000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('21', '销售助理', '行业应用类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('22', '行业销售专员（安防方向）', '行业应用类', '北京市', '23000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:22:17');
INSERT INTO `job` VALUES ('23', '行业产品运营专员', '行业应用类', '深圳市', '25000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('24', '行业解决方案工程师', '行业应用类', '上海市', '12000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('25', '高级市场专员', '行业应用类', '深圳市', '19000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('26', '采购实习生（MRO）', '运营类', '北京市', '13000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('27', '寻源经理-生产物料方向', '运营类', '深圳市', '7000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:22:30');
INSERT INTO `job` VALUES ('28', '项目采购-生产物料方向', '运营类', '上海市', '11000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('29', '关务经理/主管', '运营类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('30', '供应商管理-电子料/结构件', '运营类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('31', '关务专员', '运营类', '珠海市', '42000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:22:39');
INSERT INTO `job` VALUES ('32', '订单执行专员', '运营类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('33', '采购助理', '运营类', '深圳市', '30000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('34', '供应链管理培训生', '运营类', '广州市', '25000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('35', '资源开发经理', '运营类', '深圳市', '43000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:22:44');
INSERT INTO `job` VALUES ('36', '总账会计', '财务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('37', '成本会计', '财务类', '广州市', '25000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('38', '（高级）财务分析师', '财务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('39', '资金专员', '财务类', '上海市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('40', '高级资金专员', '财务类', '深圳市', '35000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('41', '视频剪辑（实习生）', '设计类', '深圳市', '43000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:22:54');
INSERT INTO `job` VALUES ('42', '（高级）视觉设计师', '设计类', '深圳市', '30000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('43', '（高级）景观设计师', '设计类', '上海市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('44', '（高级）包装设计师', '设计类', '深圳市', '25000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('45', '周边产品设计师', '设计类', '深圳市', '42000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 17:23:03');
INSERT INTO `job` VALUES ('46', '交互设计师', '设计类', '深圳市', '10000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('47', '技术文档专员', '职能类', '北京市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('48', '行政前台', '职能类', '深圳市', '55000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('49', 'HRBP', '职能类', '深圳市', '11000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('50', '行政助理（西安）', '职能类', '西安市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('51', '人力资源实习生', '职能类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('52', '总经办管培生', '职能类', '深圳市', '6000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('53', '高级市场专员（产品发布方向）', '职能类', '深圳市', '28000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('54', '（高级）税务主管', '职能类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('55', '技术支持专员/助理（葡萄牙语）', '职能类', '西安市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('56', '技术支持专员（Work Force 方向）', '职能类', '西安市', '16000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('57', '备件管理专员', '服务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('58', '运营支撑专员（呼叫中心）', '服务类', '广州市', '7000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('59', '运营支撑专员（系统支撑）', '服务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('60', '技术支持主管', '服务类', '西安市', '7000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('61', '高级数据分析师（用户建模方向）', '服务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('62', '高级数据分析师（数据挖掘方向）', '服务类', '西安市', '8000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('63', '高级旗舰店服务主管', '服务类', '深圳市', '7500', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('64', 'Social Media Specialist', '服务类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('65', '客服专员/助理（维修查询）', '服务类', '西安市', '8000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('66', '客服专员/助理（维修查询-应届生）', '服务类', '西安市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('67', '项目副总经理', '地产类', '深圳市', '12000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('68', '安全员', '地产类', '深圳市', '18000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('69', '装修项目经理', '地产类', '深圳市', '12000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('70', '施工员', '地产类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('71', '项目技术总工', '地产类', '西安市', '16000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('72', 'QE工程师', '地产类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('73', '预算专员', '地产类', '深圳市', '17000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('74', 'IE工程师', '地产类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('75', '产品工艺工程师', '地产类', '上海市', '13800', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('76', '助理报批报建经理', '地产类', '深圳市', '22000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('77', '演播室技术（实习生）', '其他类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('78', '赛务助理（实习生）', '其他类', '广州市', '20000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('79', '教育课程工程师', '其他类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('80', 'STEAM课程工程师', '其他类', '深圳市', '26000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('81', '运营实习生', '其他类', '深圳市', '10000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('82', 'QC工程师', '其他类', '广州市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
INSERT INTO `job` VALUES ('83', '赛事导演（实习生）', '其他类', '深圳市', '15000', 'http://localhost:8080/test/fenleishaixuan/detail.htm', '知道基本的设计思想，做得多说的少，能够加班十个小时没有怨言，能够抵抗超强的压力', '2018-10-29 09:18:49');
