$(document).ready(function(){

	htmlobj_category = $.ajax({
        url: "http://localhost:8080/project/fenleishaixuan_jingdong/getdata_category.php",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
		    	var fenlei = res[i]["category"];
            	$("#select1").append("<dd class='fenlei'><a href='#'>"+fenlei+"</a></dd>");
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
            // console.log(res);
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
            console.log(res);
            var groups = 5;
            var perGroup = (res.length)/groups;  
            // 向下取整
            perGroup = Math.floor(perGroup);
            // console.log(perGroup);
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


    // 加载更多+查询所有内容
    function nwalletProfit(num, cNum){
	    $.ajax({
	        type: "get",
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_all.php",
	        dataType: "json",
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
	                    htmltxt += '<td>'+res[i]["name"]+'</td>';
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
	$(".jiaZai_more").on('click','span', function() {
	    // event.preventDefault();
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
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}

			var fenlei = new Object();
			fenlei.catog = $("#selectA a").text();
			// if ($("#selectB a").text()) {
			// 	fenlei.chengshi =$("#selectB a").text();
			// }else{
			// 	fenlei.chengshi = null;
			// }
			console.log(fenlei.catog);

			$.ajax({
		        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_category.php",
		       	// url: "http://localhost:8080/test/fenleishaixuan/search_filter.php",
		        type: "get",
		        dataType: "json",
		        data: fenlei,
		        contentType: "application/json",
		        success: function (res) {
		            // console.log(res);
		            $("table").css({'display':'table'});
		            $("#search_result tbody tr").remove();
		            for (var i = 0; i < res.length; i++) {
		            	$("#search_result").append("<tr><td><a href='#'>"+res[i]["name"]+"</a></td><td>"+res[i]["city"]+"</a></td><td>"+res[i]["category"]+"</a></td><td>"+res[i]["pay"]+"</a></td></tr>");
				    }
		        },
		        error: function (xhr, err, exception) {
		            console.log(err);
		        }
		    });

		}
	});
	
	$("#select2").on("click","dd",function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}


			var citys = new Object();
			// if ($("#selectA a").text()) {
			// 	citys.catog = $("#selectA a").text();
			// }else{
			// 	citys.catog = null;
			// }
			citys.chengshi = $("#selectB a").text();
			console.log(citys.catog);

			$.ajax({
		        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_city.php",
		        // url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_filter.php",
		        type: "get",
		        dataType: "json",
		        data: citys,
		        contentType: "application/json",
		        success: function (res) {
		            console.log(res);
		            $("table").css({'display':'table'});
		            $("#search_result tbody tr").remove();
		            for (var i = 0; i < res.length; i++) {
		            	$("#search_result").append("<tr><td><a href='#'>"+res[i]["name"]+"</a></td><td>"+res[i]["city"]+"</a></td><td>"+res[i]["category"]+"</a></td><td>"+res[i]["pay"]+"</a></td></tr>");
				    }
		        },
		        error: function (xhr, err, exception) {
		            console.log(err);
		        }
		    });



		}
	});
	
	$("#select3").on("click","dd",function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC").html($(this).html());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}


		var qian = new Object();
		// qian.pay = $("#selectC a").text();
		qian.xiaxian = $("#selectC .xiaxian").text();
		qian.shangxian = $("#selectC .shangxian").text();
		console.log(qian.pay);

		$.ajax({
	        url: "http://localhost:8080/project/fenleishaixuan_jingdong/search_only_pay.php",
	        type: "get",
	        dataType: "json",
	        data: qian,
	        contentType: "application/json",
	        success: function (res) {
	            console.log(res);
	            $("table").css({'display':'table'});
	            $("#search_result tbody tr").remove();
	            for (var i = 0; i < res.length; i++) {
	            	$("#search_result").append("<tr><td><a href='#'>"+res[i]["name"]+"</a></td><td>"+res[i]["city"]+"</a></td><td>"+res[i]["category"]+"</a></td><td>"+res[i]["pay"]+"</a></td></tr>");
			    }
	        },
	        error: function (xhr, err, exception) {
	            console.log(err);
	        }
	    });


	});
	
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
	
});