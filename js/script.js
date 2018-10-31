$(document).ready(function(){

	htmlobj_category = $.ajax({
        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_category.php",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            for (var i = 0; i < res.length; i++) {
		    	var fenlei = res[i]["category"];
		    	var detail = res[i]["detail"];
            	$("#select1").append("<dd class='fenlei'><a href='#'>"+res[i]["category"]+"</a></dd>");
		    }
        },
        error: function (xhr, err, exception) {
            console.log(err);
        }
    });

    htmlobj_city = $.ajax({
        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_city.php",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            for (var i = 0; i < res.length; i++) {
		    	var chengshi = res[i]["city"];
            	$("#select2").append("<dd><a href='#'>"+chengshi+"</a></dd>");
		    }
        },
        error: function (xhr, err, exception) {
            console.log(err);
        }
    });

    htmlobj_pay = $.ajax({
        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_pay.php",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            var groups = 5;
            var perGroup = (res.length)/groups;  
            // 向下取整
            perGroup = Math.floor(perGroup);
            var newqujian = Array();
            // var houzhe = Array();
            for (var i = 0; i < res.length; i++) {
            	var z = (i+1)%groups;
            	if(i == 0){
            		newqujian.push(res[i]["pay"]);
            	}
            	if(z == 0){
            		newqujian.push(res[i]["pay"]);
            	}
		    }

		    newqujian.push(res[res.length-1]["pay"]);

		    var htmltxt = "";
            for (var i = 0; i < newqujian.length; i++) {
                htmltxt += "<dd>";
                htmltxt += "<a href='#'>";
                htmltxt += "<span class='xiaxian'>"+newqujian[i]+"</span> - <span class='shangxian'>"+newqujian[i+1]+"</span>";
                htmltxt += "</a>";
                htmltxt += "</dd>";
		    }
            $("#select3").append(htmltxt).show(500);

		    $("#select3 dd:last-child").remove();
        },
        error: function (xhr, err, exception) {
            console.log(err);
        }
    });

    // 访问页面的时候，加载更多+查询所有内容
    function nwalletProfit(num, cNum){
	    $.ajax({
	        type: "get",
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_all.php",
	        dataType: "json",
	        async: false,   //设置成同步
	        contentType: "application/json",
	        success: function (res) {
	        	$("table").css({'display':'table'});
	            if (res.length > 0){
	                var i = num;
	                var ci= 0;
	                var x = parseInt((res.length)/10);//x为每10个一组的组数
	                if(cNum >= x){
	                    $(".jiaZai_more").hide(); //当点击更多的次数 ≥ 组数时，隐藏按钮
	                }

	                for(; i < res.length; i++){
	                    var htmltxt = "";
	                    ci++;
	                    htmltxt += '<tr>';
	                    htmltxt += '<td class="mingcheng"><span>'+res[i]["name"]+'</span></td>';
	                    htmltxt += '<td>'+res[i]["city"]+'</td>';
	                    htmltxt += '<td>'+res[i]["category"]+'</td>';
	                    htmltxt += '<td>$'+res[i]["pay"]+'</td>';

	                    if(ci> 10){
	                        break;
	                    }
	                    $("#search_result").append(htmltxt);
	                }

	            }

	        },
	        error: function (e, d, c) {
	        console.log(d)
	        }
	    });
	}
	nwalletProfit(0);
	var clickNum = 0; //点击的次数
	$(".jiaZai_more").on('click','span', function(event) {
	    event.preventDefault();
	    clickNum++;
	    var iNum = 10*clickNum; //每次点击开始加载的第一个索引值
	    nwalletProfit(iNum, clickNum);
	});


  //   var arr = [
		// { "name": "刘红", "value": "qqq", "age": "10" },
		// { "name": "曹操", "value": "qqq", "age": "10" },
		// { "name": "曹操", "value": "qqq", "age": "10" },
		// { "name": "关羽", "value": "eee", "age": "20" },
		// { "name": "刘备", "value": "rrr", "age": "50" },
		// { "name": "张飞", "value": "ttt", "age": "100" }
  //   ];
  //   for (var i = 0; i < arr.length; i++) {
  //       for (var j =i+1; j <arr.length; ) {
  //           if (arr[i].name == arr[j].name && arr[i].value == arr[j].value && arr[i].age == arr[j].age) {
  //               arr.splice(j,1);
  //           }
  //           else j++;
  //       }
  //   }
  //   console.log(arr);
			
	$("#select1").on("click","dd",function(){

		$("table").css({'display':'table'});
		$("#search_result tbody tr").remove();
		$(".miaosu").remove(); //关闭旧的职位详情

		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();

			function SelectAllCate(num, cNum){
			    $.ajax({
			        type: "get",
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
			        dataType: "json",
			        async: false,   //设置成同步
			        contentType: "application/json",
			        success: function (res) {
			        	
			            if (res.length > 0){
			                var i = num;
			                var ci= 0;
			                var x = parseInt((res.length)/10);//x为每10个一组的组数
			                if(cNum >= x){
			                    $(".jiaZai_more").hide(); //当点击更多的次数 ≥ 组数时，隐藏按钮
			                }

			                for(; i < res.length; i++){
			                    var htmltxt = "";
			                    ci++;
			                    htmltxt += '<tr>';
			                    htmltxt += '<td class="mingcheng"><span>'+res[i]["name"]+'</span></td>';
			                    htmltxt += '<td>'+res[i]["city"]+'</td>';
			                    htmltxt += '<td>'+res[i]["category"]+'</td>';
			                    htmltxt += '<td>$'+res[i]["pay"]+'</td>';

			                    if(ci> 10){
			                        break;
			                    }
			                    $("#search_result").append(htmltxt);
			                }
			            }

			        },
			        error: function (e, d, c) {
			        console.log(d)
			        }
			    });
			}

			SelectAllCate(0);
			var clickNum = 0;
			$(".jiaZai_more").on('click','span', function() {
			    clickNum++;
			    var iNum = 10*clickNum;
			    SelectAllCate(iNum, clickNum);
			});


		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}

			var obj = new Object();
				obj.category = $("#selectA a").text();
				obj.city = $("#selectB a").text();
				obj.xiaxian = $("#selectC .xiaxian").text();
				obj.shangxian = $("#selectC .shangxian").text();

			$.ajax({
		       	url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
		        type: "get",
		        dataType: "json",
		        data: obj,
		        contentType: "application/json",
		        success: function (res) {
		            var htmltxt = "";
		            for (var i = 0; i < res.length; i++) {
		                htmltxt += "<tr>";
		                htmltxt += "<td class='mingcheng'><span>"+res[i]["name"]+"</span></td>";
		                htmltxt += "<td>"+res[i]["city"]+"</td>";
		                htmltxt += "<td>"+res[i]["category"]+"</td>";
		                htmltxt += "<td>"+res[i]["pay"]+"</td>";
		                htmltxt += "</tr>";
				    }
	                $("#search_result").append(htmltxt).show(500);

		        },
		        error: function (xhr, err, exception) {
		            console.log(err);
		        }
		    });

		}
	});
	
	$("#select2").on("click","dd",function(){

		$("table").css({'display':'table'});
		$("#search_result tbody tr").remove();
		$(".miaosu").remove(); //关闭旧的职位详情

		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();

			function SelectAllCity(num, cNum){
			    $.ajax({
			        type: "get",
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
			        dataType: "json",
			        async: false,   //设置成同步
			        contentType: "application/json",
			        success: function (res) {

			            if (res.length > 0){
			                var i = num;
			                var ci= 0;
			                var x = parseInt((res.length)/10);//x为每10个一组的组数
			                if(cNum >= x){
			                    $(".jiaZai_more").hide(); //当点击更多的次数 ≥ 组数时，隐藏按钮
			                }

			                for(; i < res.length; i++){
			                    var htmltxt = "";
			                    ci++;
			                    htmltxt += '<tr>';
			                    htmltxt += '<td class="mingcheng"><span>'+res[i]["name"]+'</span></td>';
			                    htmltxt += '<td>'+res[i]["city"]+'</td>';
			                    htmltxt += '<td>'+res[i]["category"]+'</td>';
			                    htmltxt += '<td>$'+res[i]["pay"]+'</td>';

			                    if(ci> 10){
			                        break;
			                    }
			                    $("#search_result").append(htmltxt);
			                }

			            }

			        },
			        error: function (e, d, c) {
			        console.log(d)
			        }
			    });
			}

			SelectAllCity(0);
			var clickNum = 0; //点击的次数
			$(".jiaZai_more").on('click','span', function() {
			    // event.preventDefault();
			    clickNum++;
			    var iNum = 10*clickNum; //每次点击开始加载的第一个索引值
			    SelectAllCity(iNum, clickNum);
			});


		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}


			var obj = new Object();
				obj.category = $("#selectA a").text();
				obj.city = $("#selectB a").text();
				obj.xiaxian = $("#selectC .xiaxian").text();
				obj.shangxian = $("#selectC .shangxian").text();

			$.ajax({
		        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
		        type: "get",
		        async: false,   //设置成同步
		        dataType: "json",
		        data: obj,
		        contentType: "application/json",
		        success: function (res) {
		            // console.log(res);
		            var htmltxt = "";
		            for (var i = 0; i < res.length; i++) {
		                htmltxt += "<tr>";
		                htmltxt += "<td class='mingcheng'><span>"+res[i]["name"]+"</span></td>";
		                htmltxt += "<td>"+res[i]["city"]+"</td>";
		                htmltxt += "<td>"+res[i]["category"]+"</td>";
		                htmltxt += "<td>"+res[i]["pay"]+"</td>";
		                htmltxt += "</tr>";
				    }
	                $("#search_result").append(htmltxt).show(500);
		        },
		        error: function (xhr, err, exception) {
		            console.log(err);
		        }
		    });


		}
	});
	
	$("#select3").on("click","dd",function(){

		$("table").css({'display':'table'});
		$("#search_result tbody tr").remove();
		$(".miaosu").remove(); //关闭旧的职位详情

		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();

			function SelectAllPay(num, cNum){
			    $.ajax({
			        type: "get",
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
			        dataType: "json",
			        async: false,   //设置成同步
			        contentType: "application/json",
			        success: function (res) {

			            if (res.length > 0){
			                var i = num;
			                var ci= 0;
			                var x = parseInt((res.length)/10);//x为每10个一组的组数
			                if(cNum >= x){
			                    $(".jiaZai_more").hide(); //当点击更多的次数 ≥ 组数时，隐藏按钮
			                }

			                for(; i < res.length; i++){
			                    var htmltxt = "";
			                    ci++;
			                    htmltxt += '<tr>';
			                    htmltxt += '<td class="mingcheng"><span>'+res[i]["name"]+'</span></td>';
			                    htmltxt += '<td>'+res[i]["city"]+'</td>';
			                    htmltxt += '<td>'+res[i]["category"]+'</td>';
			                    htmltxt += '<td>$'+res[i]["pay"]+'</td>';

			                    if(ci> 10){
			                        break;
			                    }
			                    $("#search_result").append(htmltxt);
			                }

			            }

			        },
			        error: function (e, d, c) {
			        console.log(d)
			        }
			    });
			}

			SelectAllPay(0);
			var clickNum = 0; //点击的次数
			$(".jiaZai_more").on('click','span', function() {
			    clickNum++;
			    var iNum = 10*clickNum; //每次点击开始加载的第一个索引值
			    SelectAllPay(iNum, clickNum);
			});


		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC").html($(this).html());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}

		var obj = new Object();
			obj.category = $("#selectA a").text();
			obj.city = $("#selectB a").text();
			obj.xiaxian = $("#selectC .xiaxian").text();
			obj.shangxian = $("#selectC .shangxian").text();

		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
	        type: "get",
	        async: false,   //设置成同步
	        dataType: "json",
	        data: obj,
	        contentType: "application/json",
	        success: function (res) {
	            var htmltxt = "";
	            for (var i = 0; i < res.length; i++) {
                htmltxt += "<tr>";
                htmltxt += "<td class='mingcheng'><span>"+res[i]["name"]+"</span></td>";
                htmltxt += "<td>"+res[i]["city"]+"</td>";
                htmltxt += "<td>"+res[i]["category"]+"</td>";
                htmltxt += "<td>"+res[i]["pay"]+"</td>";
                htmltxt += "</tr>";
			    }
                $("#search_result").append(htmltxt).show(500);
	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });
	});

	var jQuery_1_8_3 = $.noConflict(true);
	jQuery_1_8_3("#selectA").live("click", function () {
		jQuery_1_8_3(this).remove();
		jQuery_1_8_3("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});

	jQuery_1_8_3(".close").live("click",function(){
		jQuery_1_8_3("#detail_area div").hide(500);
		location.reload(true);
	});
	
	jQuery_1_8_3("#selectB").live("click", function () {
		jQuery_1_8_3(this).remove();
		jQuery_1_8_3("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	jQuery_1_8_3("#selectC").live("click", function () {
		jQuery_1_8_3(this).remove();
		jQuery_1_8_3("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	jQuery_1_8_3(".select dd").live("click", function () {
		if (jQuery_1_8_3(".select-result dd").length > 1) {
			jQuery_1_8_3(".select-no").hide(500);
		} else {
			jQuery_1_8_3(".select-no").show(500);
		}
	});


	jQuery_1_8_3(".mingcheng span").live("click",function(){

		jQuery_1_8_3("table").css({'display':'none'});
		jQuery_1_8_3(".miaosu").remove(); //关闭旧的职位详情
		var obj = new Object();
		obj.name = jQuery_1_8_3(this).text();

		jQuery_1_8_3.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_by_name.php",
	        type: "get",
	        dataType: "json",
	        data: obj,
	        contentType: "application/json",
	        success: function (res) {

	            var htmltxt = "";
                htmltxt += "<div class='miaosu' style='padding:15px;background:#eaeaea;position:relative'>";
                htmltxt += "<h2>职位："+res[0].name+"</h2>";
                htmltxt += "<p>薪资："+res[0].pay+"</p>";
                htmltxt += "<p>类别："+res[0].category+"</p>";
                htmltxt += "<p>地区："+res[0].city+"</p>";
                htmltxt += "<p>投递简历：<a href="+res[0].url+">"+res[0].url+"</a></p>";
                htmltxt += "<p>详情说明："+res[0].detail+"</p>";
                htmltxt += "<span class='close'>关闭</span></div>";
                htmltxt += "</div>";
                jQuery_1_8_3("#detail_area").append(htmltxt).show(500);
	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });

	});

	// dom变化监控，更多请了解MutationObserver
	// var insertedNodes = $('.select-result dl .selected');
	// var observer = new MutationObserver(function(mutations) {
	//   mutations.forEach(function(mutation) {
	//   	for (var i = 0; i < mutation.addedNodes.length; i++)
	//       insertedNodes.push(mutation.addedNodes[i]);
	//   })
	//     console.log(insertedNodes.text());
	// });
	// observer.observe(document, {
	// 	attributes: true,
	// 	characterData: true,
	// 	childList: true,
	// 	subtree: true,
	// 	attributeOldValue: true,
	// 	characterDataOldValue: true
	// });
	
	// 数据可视化统计
	
	jQuery_1_8_3("#tj_city").live("click",function(){
		$(this).addClass('active').siblings().removeClass('active');
		$("#chengshi").css({'display':'block'}).siblings().css({'display':'none'});
		$('#search_result').hide(500);
		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_city_information.php",
	        type: "get",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (res) {
			    var citys = new Array();
			    var totals = new Array();
	            for (var i = 0; i < res.length; i++) {
	            	citys.push(res[i].city);
	            	totals.push(res[i].total);
			    }

			    // 数据可视化开始
				var dom = document.getElementById("chengshi");
				var myChart = echarts.init(dom);
				var app = {};
				option = null;
				option = {
					title: {
				        text: '城市职位发布情况'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    xAxis: {
				        type: 'category',
				        data: citys
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        data: totals,
				        type: 'line',
				        smooth: true
				    }]
				};
				if (option && typeof option === "object") {
				    myChart.setOption(option, true);
				}
				// 数据可视化结束

	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });

	});


	$("#tj_pingjun").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$("#xinzi").css({'display':'block'}).siblings().css({'display':'none'});
		$('#search_result').hide(500);
		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_category_information.php",
	        type: "get",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (res) {
			    var fenlei = new Array();
			    console.log(res);
	            for (var i = 0; i < res.length; i++) {
	            	fenlei.push(res[i].name);
			    }

			    // 数据可视化开始
				var dom = document.getElementById("xinzi");
				var myChart = echarts.init(dom);
				option = {
				    title : {
				        text: '各分类平均薪资',
				        subtext: '平均薪资',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: fenlei
				    },
				    series : [
				        {
				            name: '职位类别',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data: res,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				};

				if (option && typeof option === "object") {
				    myChart.setOption(option, true);
				}
				// 数据可视化结束

	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });

	});


	$("#city_pingjun").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$("#city_avg").css({'display':'block'}).siblings().css({'display':'none'});
		$('#search_result').hide(500);
		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_city_pay.php",
	        type: "get",
	        dataType: "json",
	        contentType: "application/json",
	        success: function (res) {
			    var cc = new Array();
			    var pp = new Array();
			    console.log(res);
	            for (var i = 0; i < res.length; i++) {
	            	cc.push(res[i].city);
	            	pp.push(res[i].value);
			    }

			    // 数据可视化开始
				var dom = document.getElementById("city_avg");
				var myChart = echarts.init(dom);
				var app = {};
				app.title = '坐标轴刻度与标签对齐';

				option = {
				    color: ['#3398DB','#f43653','#547634'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : cc,
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'平均薪资',
				            type:'bar',
				            barWidth: '60%',
				            data:pp
				        }
				    ]
				};

				if (option && typeof option === "object") {
				    myChart.setOption(option, true);
				}
				// 数据可视化结束

	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });

	});

	
});