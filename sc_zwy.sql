SET NAMES  UTF8;
DROP DATABASE IF EXISTS	 sc_zwy;
CREATE DATABASE sc_zwy CHARSET = UTF8;
USE sc_zwy;


/*用户信息表*/
CREATE TABLE sc_user (
	uid INT(11) PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	user_name VARCHAR(32),
	gender 	INT(11)
);

/*商品详情表*/
CREATE TABLE sc_laptop (
	lid INT(11)  PRIMARY KEY AUTO_INCREMENT,
	family_id INT(11),
	title VARCHAR(128),
	subtitle VARCHAR(128),
	price decimal(10,2),
	promise VARCHAR(64),
	spec  VARCHAR(64),
	lname VARCHAR(32),
	os VARCHAR(32),  /*os为类型*/
	is_onsale tinyint(1),
	took INT (11) /*评论*/

);
/*商品分类表*/
CREATE TABLE sc_laptop_family (
	fid INT(11) PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(32)
);
/*首页商品详情表*/
CREATE TABLE sc_index_product (
	pid INT(11) PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),   /*图片*/
	price decimal(10,2),
	href VARCHAR(128),
	seq_recommended tinyint(4)
);
/*商品图片表*/
CREATE TABLE sc_laptop_pic (
	pid INT(11) PRIMARY KEY AUTO_INCREMENT,
	laptop_id INT(11),
	sm VARCHAR(128),
	md VARCHAR(128),
	lg VARCHAR(128)
);
/*购物车表*/
CREATE TABLE sc_shoppingcart_item (
	iid INT(11) PRIMARY KEY AUTO_INCREMENT,
	user_id INT(11),
	product_id INT(11),
	count INT(11),
	is_checked tinyint(1)
);
/*banner图片表*/
CREATE TABLE sc_banner_pic (
	bid INT(11) PRIMARY KEY AUTO_INCREMENT,
	banner_id INT(11),
	bpic VARCHAR(128)
);
/*food图片文字表*/
CREATE TABLE sc_food (
	fid INT(11) PRIMARY KEY AUTO_INCREMENT,
	food_id INT(11),
	fpic VARCHAR(128),
	ftext VARCHAR(128),
	fprice VARCHAR(8)
);


/*插入food图和文字*/
INSERT INTO sc_food values('NULL','1','images/food/chocopie.png','马来西亚进口 福多(fudo) 蛋糕 糕点小吃 早餐下午茶佳品','￥22.50');
INSERT INTO sc_food values('NULL','1','images/food/cake.png','幸福西饼芒果栗子茸 蛋糕 全国同城免费配送深圳广州成都杭州苏州重庆','￥158.0');
INSERT INTO sc_food values('NULL','1','images/food/593a0928N0449e38d.png','饼干 蛋糕 苏打 酵母减盐味472.5g/袋','￥9.40');
INSERT INTO sc_food values('NULL','1','images/food/milk.png','伊利 味可滋香蕉 牛奶 240ml*12盒/礼盒装','￥45.00');
INSERT INTO sc_food values('NULL','1','images/food/tj.png','金锣 火腿肠 肉粒多猪肉香肠系列 40个*8支','￥10.90');
INSERT INTO sc_food values('NULL','1','images/food/tj1.png','三只松鼠 坚果 炒货 零食奶油味 碧根果225g/袋','￥22.90');
INSERT INTO sc_food values('NULL','1','images/food/tj3.png','淘豆（TAODO）休闲零食 手撕小糕点 蛋糕 面包 早餐三明治550g','￥17.40');
INSERT INTO sc_food values('NULL','1','images/food/tj2.png','巧克力礼盒装糖果生日礼物送女友','￥88.00');

INSERT INTO sc_food values('NULL','2','images/food/1.png','精选美国车厘子500g 果径26-28mm 新鲜水果','￥48.50');
INSERT INTO sc_food values('NULL','2','images/food/11.png','天天果园 新西兰进口爵士苹果 6个装 单个重150-170g 新鲜','￥35.50');
INSERT INTO sc_food values('NULL','2','images/food/2.png','天天果园 泰国进口龙眼 4斤 桂圆','￥60.00');
INSERT INTO sc_food values('NULL','2','images/food/5.png','五丰 美仑达 精选进口鲜橙 2kg装(±100g) 简致礼盒 铂金果 新鲜','￥32.80');
INSERT INTO sc_food values('NULL','2','images/food/f1-r-3.png','顺丰空运 新鲜 红皮无花果 品仙果 1.5kg','￥88.00');
INSERT INTO sc_food values('NULL','2','images/food/f1-r-2.png','玖原农珍 广西百香果 1.5kg 大果约70-90g 20-24个生鲜','￥29.50');
INSERT INTO sc_food values('NULL','2','images/food/f1-r-1.png','鲜菓篮 红心猕猴桃 四川奇异果 12个 单果80-100g','￥32.80');
INSERT INTO sc_food values('NULL','2','images/food/4.png','进口鲜果 蓝莓 大果4盒装总净重500g 水果 顺丰空运发货','￥128.00');
INSERT INTO sc_food values('NULL','2','images/food/f1.png','','');

INSERT INTO sc_food values('NULL','3','images/food/f2-l-hd.png','优质天然芝士，多道烘焙工艺','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-2.png','柠檬千层盒子','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-3.png','GODIVA歌帝经典','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-1.png','马卡龙','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-4.png','巧克力礼盒','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-hd1.png','美味齐聚 更多选择 更多坚果 可供选择','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-6.png','零食薄皮大核桃500g/袋','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-7.png','开心果180g/袋','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-5.png','栗子休闲零食','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-8.png','南瓜子500gx2袋','');
INSERT INTO sc_food values('NULL','3','images/food//c.png','','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-btm1.png','','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-btm2.png','','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-btm4.png','','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-btm5.png','','');
INSERT INTO sc_food values('NULL','3','images/food/f2-l-btm6.png','','');




/*插入banner图*/
INSERT INTO sc_banner_pic values('NULL','1','images/banner/ad1.jpg');
INSERT INTO sc_banner_pic values('NULL','1','images/banner/ad2.jpg');
INSERT INTO sc_banner_pic values('NULL','1','images/banner/ad3.jpg');
INSERT INTO sc_banner_pic values('NULL','1','images/banner/ad4.jpg');

INSERT INTO sc_banner_pic values('NULL','2','images/banner/arrow-left.png');
INSERT INTO sc_banner_pic values('NULL','2','images/banner/arrow-right.png');

INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-1.jpg');
INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-2.jpg');
INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-3.jpg');
INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-4.jpg');
INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-5.jpg');
INSERT INTO sc_banner_pic values('NULL','3','images/banner/banner-6.jpg');








/*插入数据用户数据*/
INSERT INTO sc_user values('NULL','tom','123456','tom@qq.com','13574128361','汤姆','1');
INSERT INTO sc_user values('NULL','dingding','123456','dingding@qq.com','13574111361','叮叮','1');
INSERT INTO sc_user values('NULL','dangdang','123456','dangdangg@qq.com','13158411361','当当','0');


/*插入数据*/
INSERT INTO sc_index_product values('1','飞利浦(PHILIPS)系列','飞利浦（PHILIPS） 空气净化器家用除甲醛雾霾净化器办公室空气消毒机2000系列畅销款 AC2888/00-344立方米/h','images/products/md/58de0ef9Ne65be616.jpg','2099.00','product_details.html?lid=1','1');
INSERT INTO sc_index_product values('2','松下(Panasonic)系列','松下（Panasonic）空气净化器家用F-61C7PD 防雾霾PM2.5除甲醛过敏原二手烟 一键操控','images/products/md/5645aa5fNf5b72534.jpg','1699.00','product_details.html?lid=2','2');
INSERT INTO sc_index_product values('3','霍尼韦尔(Honeywell)系列','霍尼韦尔（Honeywell）智能空气净化器 KJ550F-PAC2156W','images/products/md/5a30e091N83fb3631.jpg','5999.00','product_details.html?lid=3','3');
INSERT INTO sc_index_product values('4','三星(SAMSUNG)系列','三星（SAMSUNG）空气净化器KJ713G-K7050WD','images/products/md/5864c7afN486055e2.jpg','4500.00','product_details.html?lid=4','4');


/*插入商品数据*/
INSERT INTO sc_laptop values('1','1','飞利浦(PHILIPS)空气净化器KJ330F-C03(AC4076)香槟色家用除雾霾除甲醛除过敏原','【下单限量送价值499元吸尘器限时狂欢！赠完即止！北京地区节能补贴再省10%！手慢无！】好评破7万！可除多种空气污染源！','2500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','经典款香槟金AC4076-320立方米/h','飞利浦','shoudong',1,50);
INSERT INTO sc_laptop values('2','1','飞利浦(PHILIPS)空气净化器6000系列KJ650F-F02(AC6608)家用除雾霾除甲醛除过敏原','【疯抢价4999元限时特惠！立即抢购！手慢无！】高端畅销！双侧过滤！颗粒物CADR：710立方米/h！','3500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','精致两居AC6608-710立方米/h','飞利浦','shoudong',1,30);
INSERT INTO sc_laptop values('3','1','飞利浦(PHILIPS)空气净化器3000系列高端款KJ360F-C06(AC3256)家用除雾霾除甲醛除过敏原','【1月22日0点原机限量买一赠一！每台仅1950元狂欢24小时！赠完即止！手慢无！】好评破万！独特气态侦测模式！','4000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','升级数字显示AC3256-400立方米/h','飞利浦','shoudong',1,25);
INSERT INTO sc_laptop values('4','1','飞利浦（PHILIPS） 空气净化器家用除甲醛雾霾净化器办公室空气消毒机2000系列畅销款 AC2888/00-344立方米/h','【超值秒杀价2009元疯抢中，下单再减300！限时24h！】智能数字监控，纳米级滤网保护！','2000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','办公室空气消毒机2000系列畅销款','飞利浦','shoudong',1,150);
INSERT INTO sc_laptop values('5','2','霍尼韦尔（Honeywell）空气净化器 KJ300F-PAC1101W','狂销16万台爆款！家用抗雾霾，有效除PM2.5！因销售火爆，原版部分地区缺货，新老版本随机发货，版本信息见商详介绍','1880.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','狂售16万台爆款','霍尼韦尔','shoudong',1,45);
INSERT INTO sc_laptop values('6','2','霍尼韦尔（Honeywell）空气净化器KJ300F-PAC1101G','【1799，22日18点抢，提前加入购物车】狂售16万台爆款金色版！家用抗雾霾，有效除PM2.5！因销售火爆，原版部分地区缺货，新老版本随机发货，版本信息见商详介绍','2400.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','好评破2万流光金版','霍尼韦尔','shoudong',1,19);
INSERT INTO sc_laptop values('7','2','霍尼韦尔（Honeywell）智能空气净化器 KJ700F-PAC2127W','【买送3999空净，PLUS会员7999专享】700CADR旗舰智能款，北京居民享9折节能补贴！家用抗雾霾，数显PM2.5及有毒有害气体，APP远程控制【符合新国标】','9000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','700CADR旗舰版','霍尼韦尔','shoudong',1,270);
INSERT INTO sc_laptop values('8','2','霍尼韦尔（Honeywell）智能空气净化器 KJ550F-PAC2156W','【买送3999空净】IF国际设计奖得主，LED数显PM2.5，app远程控制，北京居民享9折节能补贴！家用抗雾霾，有效除PM2.5！【符合新国标】','3500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','550CADR精品款','霍尼韦尔','shoudong',1,17);
INSERT INTO sc_laptop values('9','3','松下（Panasonic）空气净化器F-PDF35C-G 防雾霾PM2.5除甲醛过敏原二手烟小型家用','【799元抢购中！横扫雾霾！松下经典家用净化器，好评5.2w+！】净化能效等级双高效级！性价比之选！','700.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','F-PDF35C-G性价比爆款','松下','shoudong',1,0);
INSERT INTO sc_laptop values('10','3','松下（Panasonic）空气净化器家用F-61C7PD 防雾霾PM2.5除甲醛过敏原二手烟 一键操控','【1月22日0点开秒！除霾能手！按规则晒单送价值399元滤网！一键操控，简单便捷！】颗粒物CADR:326，甲醛CADR:208，有效抵抗7项过敏原！','1500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','CADR值326高性价比净化器','松下','shoudong',1,15);
INSERT INTO sc_laptop values('11','3','松下（Panasonic）空气净化器家用F-61C7PD 防雾霾PM2.5除甲醛过敏原二手烟 一键操控','【11月22日0点开秒！除霾能手！按规则晒单送价值399元滤网！一键操控，简单便捷！】颗粒物CADR:326，甲醛CADR:208，有效抵抗7项过敏原！','1300.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','纳米水离子PXF35动感银','松下','shoudong',1,13);
INSERT INTO sc_laptop values('12','4','夏普（SHARP） 空气净化器 KC-Z380SW1 除雾霾PM2.5除甲醛加强型（KC-Z380SW升级版）净离子群杀菌加湿','【年货节限时秒杀价1998元火热抢购中，限量100台】【经典畅销款升级版，3.2万+人次好评】雾霾/颗粒物CADR值400m3/h，适用面积28-48平，甲醛CADR值230m3/h','1888.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','KC-Z380SW强化升级版','夏普','shoudong',1,11);
INSERT INTO sc_laptop values('13','4','夏普（SHARP） 空气净化器 KC-WE20-W 除雾霾PM2.5除甲醛净离子群杀菌加湿器','【年货节限时秒杀价1998元火热抢购中，限量100台】【经典畅销款升级版，3.2万+人次好评】雾霾/颗粒物CADR值400m3/h，适用面积28-48平，甲醛CADR值230m3/h','2000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','KC-WE20-W','夏普','shoudong',1,8);
INSERT INTO sc_laptop values('14','4','夏普（SHARP） 空气净化器 KC-CG60-S 除雾霾PM2.5除甲醛净离子群杀菌加湿器','年货节促销价4149火热抢购中！下单立减150元！成交价3999元！横扫雾霾！夏普净化器颜值担当，适用面积28-48m2，APP智能远程控制，智能触控面版，颗粒物CADR值398.5m3/h，甲醛CADR值250m3/h','4000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','KC-CG60-S银色','夏普','shoudong',1,70);
INSERT INTO sc_laptop values('15','4','夏普（SHARP） 空气净化器 KI-CE60-W 除雾霾PM2.5除甲醛净离子群杀菌加湿器','【年货节促销价2999火热抢购中】横扫雾霾！4层滤网净化空气，smart智能语音操控，会说话的空气净化器！遥控器控制，25000高浓度净离子群主动杀菌','2500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','KI-CE60-W','夏普','shoudong',1,42);
INSERT INTO sc_laptop values('16','5','布鲁雅尔（Blueair） 空气净化器503瑞典家用除甲醛除PM2.5雾霾空气净化机','【下单立减！评价赠布鲁雅尔原装滤网】高效立体循环风道！5+1年整机质保！适合客厅、办公场等','4799.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','布鲁雅尔（Blueair） 空气净化器503','布鲁雅尔','shoudong',1,1230);
INSERT INTO sc_laptop values('17','5','布鲁雅尔（Blueair）空气净化器 WiFi智能感应 Sense+蓝色','【评论送价值279元Barrier净水壶！】体感互动，挥手换挡，智能WIFI连接！四年整机质保！Sense升级款！不止多一份性能！靓丽机身，潮人之选！','3000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','布鲁雅尔Sense','夏普','shoudong',1,1);
INSERT INTO sc_laptop values('18','6','史密斯(A.O.Smith) 空气净化器 除甲醛型 针对重污染设计 KJ400F-A12','【23号0点秒杀价4688元开抢,北京地区节能补贴省10%】颗粒物CADR400m3/h,甲醛CADR265m3/h,甲醛CCM8000mg,1小时甲醛去除率98%【晒单享双立人刀+初滤+口罩】','4648.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','新居除甲醛增强型-洁净空气量400','史密斯','shoudong',1,12);
INSERT INTO sc_laptop values('19','6','史密斯(A.O.Smith) 空气净化器 针对重污染除PM2.5甲醛 KJ350F-M01D3','【家用净化器经典款,过滤效率高,滤芯寿命长,净化速度快,消费者明智之选】颗粒物CADR350m3/h,颗粒物CCM43024mg是新国标P4的3.5倍【晒单送浴巾+初滤+口罩】','2228.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','数字监测除重霾-洁净空气量650','史密斯','shoudong',1,11);
INSERT INTO sc_laptop values('20','6','史密斯(A.O.Smith) 空气净化器 针对重污染设计精确数显KJ650F-B01','【美国品牌】PM2.5实时数字显示,红外线+激光双重传感监测,过滤效率高,净化速度快,纯物理净化,零臭氧,高效净除PM2.5/甲醛/沙尘！','8000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','数字监测除重霾-洁净空气量650','史密斯','shoudong',1,51);
INSERT INTO sc_laptop values('21','6','史密斯 A.O.Smith 空气净化器 长效除甲醛 PM2.5实时数字监测 KJ560F-B11','【23号0点秒杀价4688元开抢,北京地区节能补贴省10%】颗粒物CADR400m3/h,甲醛CADR265m3/h,甲醛CCM8000mg,1小时甲醛去除率98%【晒单享双立人刀+初滤+口罩】','7000.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','PM2.5实时数显-洁净空气量560','史密斯','shoudong',1,88);
INSERT INTO sc_laptop values('22','6','史密斯(A.O.Smith) 空气净化器 针对重污染除PM2.5甲醛 KJ-400A01','【改善室内空气,高效除雾霾,北京节能补贴省10%】颗粒物CCM43024mg是新国标P4等级3.5倍,颗粒物CADR400m3/h【晒单享双立人刀+初滤+口罩】','4150.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','卧室净化型-洁净空气量400','史密斯','shoudong',1,10);
INSERT INTO sc_laptop values('23','7','三星（SAMSUNG）空气净化器KJ393G-K5050WD','PM2.5数值显示 国标双高效P4、F4 底部滑轮设计 方便客卧间移动 净化 甲醛 雾霾','2610.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','除霾利器 客卧兼备','三星','shoudong',1,13);
INSERT INTO sc_laptop values('24','7','三星（SAMSUNG）空气净化器KJ713G-K7050WD','【原装进口】【三星除甲醛强机，大CADR】【客厅新装修优选】专治雾霾 PM2.5甲醛','9500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','原装进口 大客厅','三星','shoudong',1,16);
INSERT INTO sc_laptop values('25','7','三星（SAMSUNG）空气净化器KJ350F-M3035WM','卧室专款 抵御雾霾甲醛 双传感器6组颜色 情景照明 睡眠静音模式 人性关怀','1999.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','卧室性价比','三星','shoudong',1,4);
INSERT INTO sc_laptop values('26','7','三星（SAMSUNG）KJ310F-K3020PW温馨粉 卧室智能净化器','爆品卧室优选！除霾利器！简洁实用卧室速净 性价比优选 双传感器 带童锁模式 睡眠模式 静音节能 高效净化','1500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','卧室净化型-除甲醛，除异味','三星','shoudong',1,10);
INSERT INTO sc_laptop values('27','7','三星（SAMSUNG）KJ310F-K3020PW温馨粉 卧室智能净化器','爆品卧室优选！除霾利器！简洁实用卧室速净 性价比优选 双传感器 带童锁模式 睡眠模式 静音节能 高效净化','1500.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','卧室净化型-除甲醛，除异味','三星','shoudong',1,17);
INSERT INTO sc_laptop values('28','7','三星（SAMSUNG）空气净化器KJ719F-K7580WW','豪返500元春运红包，“净”享年货！原装进口！除霾利器！86平大空间！专利除菌技术！原装进口！三星机皇级表现 PM2.5/10数值显示，内置WiFi','5899.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','白色 双电机 雾霾增强','三星','shoudong',1,60);
INSERT INTO sc_laptop values('29','7','三星（SAMSUNG）KJ1100G-K9080W韩国原装进口空气净化器 大空间CARD值','韩国原装进口，CADR值1158立方米每小时，四面出风立体净化大空间，支持远程操控，超净离子群除菌技术，高效洁净使人舒心','19999.00','*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','韩国原装进口空气净化器','三星','shoudong',1,3);


/*插入商品分类数据*/
INSERT INTO sc_laptop_family values("1","飞利浦(PHILIPS)空气净化器");
INSERT INTO sc_laptop_family values("2","霍尼韦尔(Honeywell)空气净化器");
INSERT INTO sc_laptop_family values("3","夏普(SHARP)空气净化器");
INSERT INTO sc_laptop_family values("4","布鲁雅尔(Blueair)空气净化器");
INSERT INTO sc_laptop_family values("5","史密斯(A.O.Smith) 空气净化器");
INSERT INTO sc_laptop_family values("6","三星(SAMSUNG)空气净化器");

/*插入图片数据*/
INSERT INTO sc_laptop_pic values("1","1","images/products/sm/5a3a0f31N6c7774bd.jpg","images/products/md/5a3a0f31N6c7774bd.jpg","images/products/lg/5a3a0f31N6c7774bd.jpg");
INSERT INTO sc_laptop_pic values("2","1","images/products/sm/5a4afcbdN2de9011a.jpg","images/products/md/5a4afcbdN2de9011a.jpg","images/products/lg/5a4afcbdN2de9011a.jpg");
INSERT INTO sc_laptop_pic values("3","1","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/5a5c6c0cN31cd0364.jpg","images/products/lg/5a5c6c0cN31cd0364.jpg");

INSERT INTO sc_laptop_pic values("4","2","images/products/sm/5a4afcbdN2de9011a.jpg","images/products/md/5a4afcbdN2de9011a.jpg","images/products/lg/5a4afcbdN2de9011a.jpg");
INSERT INTO sc_laptop_pic values("5","2","images/products/sm/5a4afcbdN2de9011a.jpg","images/products/md/5a4afcbdN2de9011a.jpg","images/products/lg/5a4afcbdN2de9011a.jpg");
INSERT INTO sc_laptop_pic values("6","2","images/products/sm/5a5c6c0cN31cd0364.jpg",
"images/products/md/5a5c6c0cN31cd0364.jpg","images/products/lg/5a5c6c0cN31cd0364.jpg");

INSERT INTO sc_laptop_pic values("7","3","images/products/sm/592e4b4eN76ed9ee6.jpg","images/products/md/592e4b4eN76ed9ee6(1).jpg","images/products/lg/592e4b4eN76ed9ee6(1).jpg");
INSERT INTO sc_laptop_pic values("8","3","images/products/sm/5a4afcbdN2de9011a.jpg","images/products/md/5a4afcbdN2de9011a.jpg","images/products/lg/5a4afcbdN2de9011a.jpg");
INSERT INTO sc_laptop_pic values("9","3","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/5a5c6c0cN31cd0364.jpg","images/products/lg/5a5c6c0cN31cd0364.jpg");

INSERT INTO sc_laptop_pic values("10","4","images/products/sm/5a3a0f31N6c7774bd.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("11","4","images/products/sm/5a4afcbdN2de9011a.jpg","images/products/md/5a4afcbdN2de9011a.jpg","images/products/lg/5a4afcbdN2de9011a.jpg");
INSERT INTO sc_laptop_pic values("12","4","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/5a5c6c0cN31cd0364.jpg","images/products/lg/5a5c6c0cN31cd0364.jpg");

INSERT INTO sc_laptop_pic values("13","5","images/products/sm/57b698dbNa7e3b048.jpg","images/products/md/57b698dbNa7e3b048.jpg","images/products/lg/57b698dbNa7e3b048.jpg");
INSERT INTO sc_laptop_pic values("14","5","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("15","5","images/products/sm/5a61ac68N77ada593.jpg","images/products/md/5a61ac68N77ada593.jpg","images/products/lg/5a61ac68N77ada593.jpg");


INSERT INTO sc_laptop_pic values("16","6","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("17","6","images/products/sm/5a07fedeN11d2096e.jpg","images/products/md/5a07fedeN11d2096e.jpg","images/products/lg/5a07fedeN11d2096e.jpg");
INSERT INTO sc_laptop_pic values("18","6","images/products/sm/5a61ac68N77ada593.jpg","images/products/md/5a61ac68N77ada593.jpg","images/products/lg/5a61ac68N77ada593.jpg");

INSERT INTO sc_laptop_pic values("19","7","images/products/sm/5a61ac68N77ada593.jpg","images/products/md/5a61ac68N77ada593.jpg","images/products/lg/5a61ac68N77ada593.jpg");
INSERT INTO sc_laptop_pic values("20","7","images/products/sm/5a07fedeN11d2096e.jpg","images/products/md/5a07fedeN11d2096e.jpg","images/products/lg/5a07fedeN11d2096e.jpg");
INSERT INTO sc_laptop_pic values("21","7","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");


INSERT INTO sc_laptop_pic values("22","8","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("23","8","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("24","8","images/products/sm/5a122ff6N0e0d2ace.jpg","images/products/md/5a122ff6N0e0d2ace.jpg","images/products/lg/5a122ff6N0e0d2ace.jpg");
INSERT INTO sc_laptop_pic values("25","8","images/products/sm/5a61af30N23165936.jpg","images/products/md/5a42153aN2d9494df.jpg","images/products/lg/5a42153aN2d9494df.jpg");
INSERT INTO sc_laptop_pic values("26","8","images/products/sm/56aad0abN324456ed.jpg","images/products/md/56f25867N8f6ea372.jpg","images/products/lg/56f25867N8f6ea372.jpg");
INSERT INTO sc_laptop_pic values("27","8","images/products/sm/57b698dbNa7e3b048.jpg","images/products/md/57b698dbNa7e3b048.jpg","images/products/lg/57b698dbNa7e3b048.jpg");

INSERT INTO sc_laptop_pic values("28","9","images/products/sm/5a122ff6N0e0d2ace.jpg","images/products/md/5a122ff6N0e0d2ace.jpg","images/products/lg/5a122ff6N0e0d2ace.jpg");
INSERT INTO sc_laptop_pic values("29","9","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("30","9","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("31","9","images/products/sm/5a61af30N23165936.jpg","images/products/md/5a42153aN2d9494df.jpg","images/products/lg/5a42153aN2d9494df.jpg");
INSERT INTO sc_laptop_pic values("32","9","images/products/sm/56aad0abN324456ed.jpg","images/products/md/56f25867N8f6ea372.jpg","images/products/lg/56f25867N8f6ea372.jpg");
INSERT INTO sc_laptop_pic values("33","9","images/products/sm/57b698dbNa7e3b048.jpg","images/products/md/57b698dbNa7e3b048.jpg","images/products/lg/57b698dbNa7e3b048.jpg");

INSERT INTO sc_laptop_pic values("34","10","images/products/sm/5a61af30N23165936.jpg","images/products/md/5a42153aN2d9494df.jpg","images/products/lg/5a42153aN2d9494df.jpg");
INSERT INTO sc_laptop_pic values("35","10","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("36","10","images/products/sm/5a61c531N806644bf.jpg","images/products/md/5a61c531N806644bf.jpg","images/products/lg/5a61c531N806644bf.jpg");
INSERT INTO sc_laptop_pic values("37","10","images/products/sm/5a122ff6N0e0d2ace.jpg","images/products/md/5a122ff6N0e0d2ace.jpg","images/products/lg/5a122ff6N0e0d2ace.jpg");
INSERT INTO sc_laptop_pic values("38","10","images/products/sm/56aad0abN324456ed.jpg","images/products/md/56f25867N8f6ea372.jpg","images/products/lg/56f25867N8f6ea372.jpg");
INSERT INTO sc_laptop_pic values("39","10","images/products/sm/57b698dbNa7e3b048.jpg","images/products/md/57b698dbNa7e3b048.jpg","images/products/lg/57b698dbNa7e3b048.jpg");

INSERT INTO sc_laptop_pic values("40","11","images/products/sm/57689efbNb9e23cca.jpg","images/products/md/57ce5cbeN8173c3b6.jpg","images/products/lg/57ce5cbeN8173c3b6.jpg");
INSERT INTO sc_laptop_pic values("41","11","images/products/sm/58de0971N728fb38f.jpg","images/products/md/58c623b2N55f4ab78.jpg","images/products/lg/58c623b2N55f4ab78.jpg");
INSERT INTO sc_laptop_pic values("42","11","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/58cf4901Nfc783ce0.jpg","images/products/lg/58cf4901Nfc783ce0.jpg");
INSERT INTO sc_laptop_pic values("43","11","images/products/sm/58de0ef9Ne65be616.jpg","images/products/md/58de0ef9Ne65be616.jpg","images/products/lg/58de0ef9Ne65be616.jpg");
INSERT INTO sc_laptop_pic values("44","11","images/products/sm/58e6e9e0N730b0e7f.jpg",
"images/products/md/58e6e9e0N730b0e7f.jpg","images/products/lg/58e6e9e0N730b0e7f.jpg");

INSERT INTO sc_laptop_pic values("45","12","images/products/sm/58de0971N728fb38f.jpg","images/products/md/58c623b2N55f4ab78.jpg","images/products/lg/58c623b2N55f4ab78.jpg");
INSERT INTO sc_laptop_pic values("46","12","images/products/sm/57689efbNb9e23cca.jpg","images/products/md/57ce5cbeN8173c3b6.jpg","images/products/lg/57ce5cbeN8173c3b6.jpg");
INSERT INTO sc_laptop_pic values("47","12","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/58cf4901Nfc783ce0.jpg","images/products/lg/58cf4901Nfc783ce0.jpg");
INSERT INTO sc_laptop_pic values("48","12","images/products/sm/58de0ef9Ne65be616.jpg","images/products/md/58de0ef9Ne65be616.jpg","images/products/lg/58de0ef9Ne65be616.jpg");
INSERT INTO sc_laptop_pic values("49","12","images/products/sm/58e6e9e0N730b0e7f.jpg",
"images/products/md/58e6e9e0N730b0e7f.jpg","images/products/lg/58e6e9e0N730b0e7f.jpg");

INSERT INTO sc_laptop_pic values("50","13","images/products/sm/5a5c6c0cN31cd0364.jpg","images/products/md/58cf4901Nfc783ce0.jpg","images/products/lg/58cf4901Nfc783ce0.jpg");
INSERT INTO sc_laptop_pic values("51","13","images/products/sm/57689efbNb9e23cca.jpg","images/products/md/57ce5cbeN8173c3b6.jpg","images/products/lg/57ce5cbeN8173c3b6.jpg");
INSERT INTO sc_laptop_pic values("52","13","images/products/sm/58de0971N728fb38f.jpg","images/products/md/58c623b2N55f4ab78.jpg","images/products/lg/58c623b2N55f4ab78.jpg");
INSERT INTO sc_laptop_pic values("53","13","images/products/sm/58de0ef9Ne65be616.jpg","images/products/md/58de0ef9Ne65be616.jpg","images/products/lg/58de0ef9Ne65be616.jpg");
INSERT INTO sc_laptop_pic values("54","13","images/products/sm/58e6e9e0N730b0e7f.jpg","images/products/md/58e6e9e0N730b0e7f.jpg","images/products/lg/58e6e9e0N730b0e7f.jpg");


INSERT INTO sc_laptop_pic values("55","14","images/products/sm/5a5c6c11Nfb2f91a3.jpg","images/products/md/59e724a6N5073e2c1.jpg","images/products/lg/59e724a6N5073e2c1.jpg");
INSERT INTO sc_laptop_pic values("56","14","images/products/sm/5a27959cN55f3dada.jpg","images/products/md/59e7246cN754e41f7.jpg","images/products/lg/59e7246cN754e41f7.jpg");
INSERT INTO sc_laptop_pic values("57","14","images/products/sm/59f2e9e5N81128421.jpg","images/products/md/59f2e9e5N81128421.jpg","images/products/lg/59f2e9e5N81128421.jpg");
INSERT INTO sc_laptop_pic values("58","14","images/products/sm/59f28b9bNe2623072.jpg",
"images/products/md/59f28b9bNe2623072.jpg","images/products/lg/59f28b9bNe2623072.jpg");

INSERT INTO sc_laptop_pic values("59","15","images/products/sm/5a27959cN55f3dada.jpg","images/products/md/59e7246cN754e41f7.jpg","images/products/lg/59e7246cN754e41f7.jpg");
INSERT INTO sc_laptop_pic values("60","15","images/products/sm/5a5c6c11Nfb2f91a3.jpg","images/products/md/59e724a6N5073e2c1.jpg","images/products/lg/59e724a6N5073e2c1.jpg");
INSERT INTO sc_laptop_pic values("61","15","images/products/sm/59f2e9e5N81128421.jpg","images/products/md/59f2e9e5N81128421.jpg","images/products/lg/59f2e9e5N81128421.jpg");
INSERT INTO sc_laptop_pic values("62","15","images/products/sm/59f28b9bNe2623072.jpg",
"images/products/md/59f28b9bNe2623072.jpg","images/products/lg/59f28b9bNe2623072.jpg");

INSERT INTO sc_laptop_pic values("63","16","images/products/sm/59f2e9e5N81128421.jpg","images/products/md/59f2e9e5N81128421.jpg","images/products/lg/59f2e9e5N81128421.jpg");
INSERT INTO sc_laptop_pic values("64","16","images/products/sm/5a5c6c11Nfb2f91a3.jpg","images/products/md/59e724a6N5073e2c1.jpg","images/products/lg/59e724a6N5073e2c1.jpg");
INSERT INTO sc_laptop_pic values("65","16","images/products/sm/5a27959cN55f3dada.jpg","images/products/md/59e7246cN754e41f7.jpg","images/products/lg/59e7246cN754e41f7.jpg");
INSERT INTO sc_laptop_pic values("66","16","images/products/sm/59f28b9bNe2623072.jpg","images/products/md/59f28b9bNe2623072.jpg","images/products/lg/59f28b9bNe2623072.jpg");


INSERT INTO sc_laptop_pic values("67","17","images/products/sm/59faaea1N4f0beec5.jpg","images/products/md/59faaea1N4f0beec5.jpg","images/products/lg/59faaea1N4f0beec5.jpg");
INSERT INTO sc_laptop_pic values("68","17","images/products/sm/591a7001N0c4f911c.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("69","17","images/products/sm/592e4b4eN76ed9ee6.jpg","images/products/md/592e4b4eN76ed9ee6.jpg","images/products/lg/592e4b4eN76ed9ee6.jpg");
INSERT INTO sc_laptop_pic values("70","17","images/products/sm/592e4ddeNf09b06a5.jpg","images/products/md/592e4ddeNf09b06a5.jpg","images/products/lg/592e4ddeNf09b06a5.jpg");
INSERT INTO sc_laptop_pic values("71","17","images/products/sm/5645aa5eN79a1e53b.jpg","images/products/md/5645aa5eN79a1e53b.jpg","images/products/lg/5645aa5eN79a1e53b.jpg");
INSERT INTO sc_laptop_pic values("72","17","images/products/sm/5645aa5fNf5b72534.jpg","images/products/md/5645aa5fNf5b72534.jpg","images/products/lg/5645aa5fNf5b72534.jpg");
INSERT INTO sc_laptop_pic values("73","17","images/products/sm/5864c7afN486055e2.jpg","images/products/md/5864c7afN486055e2.jpg","images/products/lg/5864c7afN486055e2.jpg");
INSERT INTO sc_laptop_pic values("74","17","images/products/sm/55123ad6N46e96b69.jpg","images/products/md/55123ad6N46e96b69.jpg","images/products/lg/55123ad6N46e96b69.jpg");

INSERT INTO sc_laptop_pic values("75","18","images/products/sm/591a7001N0c4f911c.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("76","18","images/products/sm/59faaea1N4f0beec5.jpg","images/products/md/59faaea1N4f0beec5.jpg","images/products/lg/59faaea1N4f0beec5.jpg");
INSERT INTO sc_laptop_pic values("77","18","images/products/sm/592e4b4eN76ed9ee6.jpg","images/products/md/592e4b4eN76ed9ee6.jpg","images/products/lg/592e4b4eN76ed9ee6.jpg");
INSERT INTO sc_laptop_pic values("78","18","images/products/sm/592e4ddeNf09b06a5.jpg","images/products/md/592e4ddeNf09b06a5.jpg","images/products/lg/592e4ddeNf09b06a5.jpg");
INSERT INTO sc_laptop_pic values("79","18","images/products/sm/5645aa5eN79a1e53b.jpg","images/products/md/5645aa5eN79a1e53b.jpg","images/products/lg/5645aa5eN79a1e53b.jpg");
INSERT INTO sc_laptop_pic values("80","18","images/products/sm/5645aa5fNf5b72534.jpg","images/products/md/5645aa5fNf5b72534.jpg","images/products/lg/5645aa5fNf5b72534.jpg");
INSERT INTO sc_laptop_pic values("81","18","images/products/sm/5864c7afN486055e2.jpg","images/products/md/5864c7afN486055e2.jpg","images/products/lg/5864c7afN486055e2.jpg");
INSERT INTO sc_laptop_pic values("82","18","images/products/sm/55123ad6N46e96b69.jpg","images/products/md/55123ad6N46e96b69.jpg","images/products/lg/55123ad6N46e96b69.jpg");

INSERT INTO sc_laptop_pic values("83","19","images/products/sm/592e4ddeNf09b06a5.jpg","images/products/md/592e4ddeNf09b06a5.jpg","images/products/lg/592e4ddeNf09b06a5.jpg");
INSERT INTO sc_laptop_pic values("84","19","images/products/sm/592e4b4eN76ed9ee6.jpg","images/products/md/592e4b4eN76ed9ee6.jpg","images/products/lg/592e4b4eN76ed9ee6.jpg");
INSERT INTO sc_laptop_pic values("85","19","images/products/sm/59faaea1N4f0beec5.jpg","images/products/md/59faaea1N4f0beec5.jpg","images/products/lg/59faaea1N4f0beec5.jpg");
INSERT INTO sc_laptop_pic values("86","19","images/products/sm/591a7001N0c4f911c.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("87","19","images/products/sm/5645aa5eN79a1e53b.jpg","images/products/md/5645aa5eN79a1e53b.jpg","images/products/lg/5645aa5eN79a1e53b.jpg");
INSERT INTO sc_laptop_pic values("88","19","images/products/sm/5645aa5fNf5b72534.jpg","images/products/md/5645aa5fNf5b72534.jpg","images/products/lg/5645aa5fNf5b72534.jpg");
INSERT INTO sc_laptop_pic values("89","19","images/products/sm/5864c7afN486055e2.jpg","images/products/md/5864c7afN486055e2.jpg","images/products/lg/5864c7afN486055e2.jpg");
INSERT INTO sc_laptop_pic values("90","19","images/products/sm/55123ad6N46e96b69.jpg","images/products/md/55123ad6N46e96b69.jpg","images/products/lg/55123ad6N46e96b69.jpg");


INSERT INTO sc_laptop_pic values("91","20","images/products/sm/5645aa5eN79a1e53b.jpg","images/products/md/5645aa5eN79a1e53b.jpg","images/products/lg/5645aa5eN79a1e53b.jpg");
INSERT INTO sc_laptop_pic values("92","20","images/products/sm/59faaea1N4f0beec5.jpg","images/products/md/59faaea1N4f0beec5.jpg","images/products/lg/59faaea1N4f0beec5.jpg");
INSERT INTO sc_laptop_pic values("93","20","images/products/sm/591a7001N0c4f911c.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("94","20","images/products/sm/592e4b4eN76ed9ee6.jpg","images/products/md/592e4b4eN76ed9ee6.jpg","images/products/lg/592e4b4eN76ed9ee6.jpg");
INSERT INTO sc_laptop_pic values("95","20","images/products/sm/592e4ddeNf09b06a5.jpg","images/products/md/592e4ddeNf09b06a5.jpg","images/products/lg/592e4ddeNf09b06a5.jpg");
INSERT INTO sc_laptop_pic values("96","20","images/products/sm/5645aa5fNf5b72534.jpg","images/products/md/5645aa5fNf5b72534.jpg","images/products/lg/5645aa5fNf5b72534.jpg");
INSERT INTO sc_laptop_pic values("97","20","images/products/sm/5864c7afN486055e2.jpg","images/products/md/5864c7afN486055e2.jpg","images/products/lg/5864c7afN486055e2.jpg");
INSERT INTO sc_laptop_pic values("98","20","images/products/sm/55123ad6N46e96b69.jpg","images/products/md/55123ad6N46e96b69.jpg","images/products/lg/55123ad6N46e96b69.jpg");


INSERT INTO sc_laptop_pic values("99","21","images/products/sm/59699ffeN8c093226.jpg","images/products/md/59699ffeN8c093226.jpg","images/products/lg/59699ffeN8c093226.jpg");
INSERT INTO sc_laptop_pic values("100","21","images/products/sm/59362188N0baf614e.jpg","images/products/md/59362188N0baf614e.jpg","images/products/lg/59362188N0baf614e.jpg");
INSERT INTO sc_laptop_pic values("101","21","images/products/sm/5a39daaaNdaa8b134.jpg","images/products/md/59770054N77d9a6f7.jpg","images/products/lg/59770054N77d9a6f7.jpg");
INSERT INTO sc_laptop_pic values("102","21","images/products/sm/5a154563Ndfdb6dd7.jpg","images/products/md/5a2fa83cN9fd17e95.jpg","images/products/lg/5a2fa83cN9fd17e95.jpg");

INSERT INTO sc_laptop_pic values("103","22","images/products/sm/59362188N0baf614e.jpg","images/products/md/59362188N0baf614e.jpg","images/products/lg/59362188N0baf614e.jpg");
INSERT INTO sc_laptop_pic values("104","22","images/products/sm/59699ffeN8c093226.jpg","images/products/md/59699ffeN8c093226.jpg","images/products/lg/59699ffeN8c093226.jpg");
INSERT INTO sc_laptop_pic values("105","22","images/products/sm/5a39daaaNdaa8b134.jpg","images/products/md/59770054N77d9a6f7.jpg","images/products/lg/59770054N77d9a6f7.jpg");
INSERT INTO sc_laptop_pic values("106","22","images/products/sm/5a154563Ndfdb6dd7.jpg","images/products/md/5a2fa83cN9fd17e95.jpg","images/products/lg/5a2fa83cN9fd17e95.jpg");

INSERT INTO sc_laptop_pic values("107","23","images/products/sm/5a39daaaNdaa8b134.jpg","images/products/md/59770054N77d9a6f7.jpg","images/products/lg/59770054N77d9a6f7.jpg");
INSERT INTO sc_laptop_pic values("108","23","images/products/sm/59699ffeN8c093226.jpg","images/products/md/59699ffeN8c093226.jpg","images/products/lg/59699ffeN8c093226.jpg");
INSERT INTO sc_laptop_pic values("109","23","images/products/sm/59362188N0baf614e.jpg","images/products/md/59362188N0baf614e.jpg","images/products/lg/59362188N0baf614e.jpg");
INSERT INTO sc_laptop_pic values("110","23","images/products/sm/5a154563Ndfdb6dd7.jpg","images/products/md/5a2fa83cN9fd17e95.jpg","images/products/lg/5a2fa83cN9fd17e95.jpg");


INSERT INTO sc_laptop_pic values("111","24","images/products/sm/57689ef3Ne8422ce1.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("112","24","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("113","24","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("114","24","images/products/sm/57d607daNfcbdce09.jpg",
"images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");

INSERT INTO sc_laptop_pic values("115","25","images/products/sm/57689ef3Ne8422ce1.jpg","images/products/md/591a7001N0c4f911c.jpg","images/products/lg/591a7001N0c4f911c.jpg");
INSERT INTO sc_laptop_pic values("116","25","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("117","25","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("118","25","images/products/sm/57d607daNfcbdce09.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");

INSERT INTO sc_laptop_pic values("119","26","images/products/sm/57689ef3Ne8422ce1.jpg","images/products/md/5a122ff6N0e0d2ace.jpg","images/products/lg/5a122ff6N0e0d2ace.jpg");
INSERT INTO sc_laptop_pic values("120","26","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("121","26","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("122","26","images/products/sm/57d607daNfcbdce09.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");

INSERT INTO sc_laptop_pic values("123","27","images/products/sm/57689ef3Ne8422ce1.jpg","images/products/md/56f25867N8f6ea372.jpg","images/products/lg/56f25867N8f6ea372.jpg");
INSERT INTO sc_laptop_pic values("124","27","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("125","27","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("126","27","images/products/sm/57d607daNfcbdce09.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");

INSERT INTO sc_laptop_pic values("127","28","images/products/sm/57689ef3Ne8422ce1.jpg","images/products/md/5645aa5fNf5b72534.jpg","images/products/lg/5645aa5fNf5b72534.jpg");
INSERT INTO sc_laptop_pic values("128","28","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("129","28","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("130","28","images/products/sm/57d607daNfcbdce09.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");

INSERT INTO sc_laptop_pic values("131","29","images/products/sm/57da1ef7N08dc96e4.jpg","images/products/md/58c613c5Na58ebd9f.jpg","images/products/lg/58c613c5Na58ebd9f.jpg");
INSERT INTO sc_laptop_pic values("132","29","images/products/sm/5a30e091N83fb3631.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("133","29","images/products/sm/57d607d1N899f074a.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");
INSERT INTO sc_laptop_pic values("134","29","images/products/sm/57d607daNfcbdce09.jpg","images/products/md/5a30e091N83fb3631.jpg","images/products/lg/5a30e091N83fb3631.jpg");


/*插入订单数据表*/
INSERT INTO sc_shoppingcart_item values("1","2","5","5","1");
INSERT INTO sc_shoppingcart_item values("2","2","1","10","0");
INSERT INTO sc_shoppingcart_item values("3","1","15","50","1");
INSERT INTO sc_shoppingcart_item values("4","3","2","1","0");
INSERT INTO sc_shoppingcart_item values("5","2","4","6","1");
INSERT INTO sc_shoppingcart_item values("6","1","8","100","1");
INSERT INTO sc_shoppingcart_item values("7","3","3","7","1");
INSERT INTO sc_shoppingcart_item values("8","2","20","15","1");





