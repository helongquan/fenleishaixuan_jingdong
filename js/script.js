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
            var houzhe = Array();
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

		    for (var i = 0; i < newqujian.length; i++) {
			  $("#select3").append("<dd><a href='#'><span class='xiaxian'>"+newqujian[i]+"</span> - <span class='shangxian'>"+newqujian[i+1]+"</span></a></dd>");
		    }
		    $("#select3 dd:last-child").remove();
        },
        error: function (xhr, err, exception) {
            console.log(err);
        }
    });


    // 查询所有信息
    // htmlobj_all = $.ajax({
    //     url: "http://localhost:8080/test/fenleishaixuan/search_all.php",
    //     type: "get",
    //     dataType: "json",
    //     contentType: "application/json",
    //     success: function (res) {
    //         console.log(res);
    //         $("table").css({'display':'table'});
    //         $("#search_result tbody tr").remove();
    //         for (var i = 0; i < res.length; i++) {
    //         	$("#search_result").append("<tr><td><a href='#'>"+res[i]["name"]+"</a></td><td>"+res[i]["city"]+"</a></td><td>"+res[i]["category"]+"</a></td><td>"+res[i]["pay"]+"</a></td></tr>");
		  //   }
    //     },
    //     error: function (xhr, err, exception) {
    //         console.log(err);
    //     }
    // });


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
  //               arr.splice(j,2);
  //           }
  //           else j++;
  //           // console.log(arr[j]["value"]);
  //       }
  //   }
  //   console.log(arr);


  	// $("#select1").on("click","dd",function(){
   //      $(this). find(".fenlei").show()
   //      alert("nhoa");
   //  }).on("mouseleave",".picBox",function(){
   //      $(this). find(".picBox_in").hide()
   //  })


 //  	$("#select1").on("click","dd",function(){
	// 	var fen = $(this).addClass("selected").siblings().removeClass("selected");
	// 	console.log(fen.text());
	// });
			
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
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_all.php",
			        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
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
			var clickNum = 0; //点击的次数
			$(".jiaZai_more").on('click','span', function() {
			    // event.preventDefault();
			    clickNum++;
			    var iNum = 10*clickNum; //每次点击开始加载的第一个索引值
			    SelectAllCate(iNum, clickNum);
			});


		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}

			var fenlei = new Object();
			fenlei.category = $("#selectA a").text();
			// console.log(fenlei.category);

			$.ajax({
		        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_category.php",
		       	// url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
		        type: "get",
		        dataType: "json",
		        data: fenlei,
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
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_all.php",
			        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
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


			var citys = new Object();
			citys.city = $("#selectB a").text();

			$.ajax({
		        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_city.php",
		        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
		        type: "get",
		        async: false,   //设置成同步
		        dataType: "json",
		        data: citys,
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

			$("#search_result tbody tr").remove();
			$(".miaosu").remove(); //关闭职位详情

			function SelectAllPay(num, cNum){
			    $.ajax({
			        type: "get",
			        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_all.php",
			        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
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

		var qian = new Object();
		qian.xiaxian = $("#selectC .xiaxian").text();
		qian.shangxian = $("#selectC .shangxian").text();

		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_pay.php",
	        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
	        type: "get",
	        async: false,   //设置成同步
	        dataType: "json",
	        data: qian,
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


	jQuery_1_8_3(".mingcheng span").live("click",function(event){
		event.preventDefault(true);

		jQuery_1_8_3("table").css({'display':'none'});
		jQuery_1_8_3(".miaosu").remove(); //关闭旧的职位详情
		var obj = new Object();
		obj.name = jQuery_1_8_3(this).text();

		jQuery_1_8_3.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_by_name.php",
	        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
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


	// var insertedNodes = document.querySelectorAll('.select-result dl .selected');
	var insertedNodes = $('.select-result dl .selected');
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
	  	for (var i = 0; i < mutation.addedNodes.length; i++)
	      insertedNodes.push(mutation.addedNodes[i]);
	  })
	    // console.log(insertedNodes.text());

	  	var chaxun = new Object();
		chaxun.city = $("#selectB a").text();
		chaxun.category = $("#selectA a").text();
		chaxun.pay = $("#selectC .xiaxian").text();
		chaxun.xiaxian = $("#selectC .xiaxian").text();
		chaxun.shangxian = $("#selectC .shangxian").text();

		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
	        type: "get",
	        async: false,   //设置成同步
	        dataType: "json",
	        data: chaxun,
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


	});
	observer.observe(document, {
		attributes: true,
		characterData: true,
		childList: true,
		subtree: true,
		attributeOldValue: true,
		characterDataOldValue: true
	});
	
	
});