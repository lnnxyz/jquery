var strVarCity = "";
strVarCity += "<div class=\"aui_state_box\"><div class=\"aui_state_box_bg\"></div>";
strVarCity += "  <div class=\"aui_alert_zn aui_outer\">";
strVarCity += "    <table class=\"aui_border\" style=\"border:2px solid #fff;\">";
strVarCity += "      <tbody>";
strVarCity += "        <tr>";
strVarCity += "          <td class=\"aui_w\">";
strVarCity += "          <\/td>";
strVarCity += "          <td class=\"aui_c\">";
strVarCity += "            <div class=\"aui_inner\">";
strVarCity += "              <table class=\"aui_dialog\">";
strVarCity += "                <tbody>";
strVarCity += "                  <tr>";
strVarCity += "                    <td class=\"aui_header\" colspan=\"2\"><div class=\"aui_titleBar\">";
strVarCity += "                    ";
strVarCity += "                        <div class=\"aui_title\" style=\"cursor: move;\">选择城市信息<\/div>";
strVarCity += "                        <a href=\"javascript:;\" class=\"aui_close\" onclick=\"Close()\">×<\/a><\/div><\/td>";
strVarCity += "                  <\/tr>";
strVarCity += "                  <tr>";
strVarCity += "                <td class=\"aui_icon\" style=\"display: none;\">";
strVarCity += "                   <div class=\"aui_iconBg\" style=\"background: transparent none repeat scroll 0% 0%;\"><\/div><\/td>";
strVarCity += "                     <td class=\"aui_main\" style=\"width: auto; height: auto;\">";
strVarCity += "                      <div class=\"aui_content\" style=\"padding: 0px; position:relative\">";
strVarCity += "                        <div id=\"\" style=\"width: 900px; position:relative;\">";
strVarCity += "                          <div class=\"data-result\"><em>最多选择 <strong>10<\/strong> 项<\/em><\/div>";//
strVarCity += "                          <div class=\"data-error\" style=\"display: none;\">最多只能选择 <strong>3<\/strong> 项<\/div>";
strVarCity += "                          <div style=\"clear:both\"\/>"
strVarCity += "                          <div class=\"data-tabs\">";
strVarCity += "                            <ul>";
strVarCity += "                              <li onclick=\"removenode_area(this)\" data-selector=\"tab-all\" class=\"active\"><a href=\"javascript:;\"><span>全部<\/span><em><\/em><\/a><\/li>";
strVarCity += "                            <\/ul>";
strVarCity += "                          <\/div>";
strVarCity += "                          <div class=\"data-container data-container-city\">";

strVarCity += "";
strVarCity += "                            <\/div>";
strVarCity += "                          <\/div>";
strVarCity += "                          ";
strVarCity += "                        <\/div>";
strVarCity += "                         ";
strVarCity += "                      <\/div>";
strVarCity += "                      ";
strVarCity += "                    <\/td>";
strVarCity += "                  <\/tr>";
strVarCity += "                  <tr>";
strVarCity += "                    <td class=\"aui_footer\" colspan=\"2\"><div class=\"aui_buttons\">";
strVarCity += "                      <button class=\"aui-btn aui-btn-primary\" onclick=\"svae_City()\" type=\"button\">确定<\/button>";
strVarCity += "                        <button class=\"aui-btn aui-btn-light\" onclick=\"Close()\" type=\"button\">取消<\/button>";
strVarCity += "                      <\/div><\/td>";
strVarCity += "                  <\/tr>";
strVarCity += "                <\/tbody>";
strVarCity += "              <\/table>";
strVarCity += "            <\/div><\/td>";
strVarCity += "          <td class=\"aui_e\"><\/td>";
strVarCity += "        <\/tr>";
strVarCity += "      <\/tbody>";
strVarCity += "    <\/table>";
strVarCity += "  <\/div>";
strVarCity += "<\/div>";

var dataCityinput = null;
var datatype = "";
var selNum=null;
//thiscon 当前元素   Cityyxz 多选还是单选
function appendCity(thiscon,num) {
    dataCityinput = thiscon;
	$('body').append(strVarCity);
	if(!num){
		$('.data-result').find('em').remove();
		num=1000;
	}else{
		$('.data-result').find('strong').text(num);
		$('.data-error').find('strong').text(num);
	}
	selNum=num;
	if(selNum>1){
		datatype="duoxuan";
	}else{
		datatype="danxuan";	
	}
    
    $('.data-error').find('strong').text(num);
	//回显当前选择
    if ($(dataCityinput).data("value") != "") {
        var inputarry = $(dataCityinput).data("value").split(',');
        var inputarryname = $(dataCityinput).val().split('-');
        if (inputarry.length > 0) {
            for (var i in inputarry) {
                $('.data-result').append("<span class=\"svae_box aui-titlespan\" data-code=\"" + inputarry[i] + "\" data-name=\"" + inputarryname[i] + "\" onclick=\"removespan_area(this)\">" + inputarryname[i] + "<i>×<\/i><\/span>");
            }
        }
    }
	//设置当前弹出框大小
    var minwid = document.documentElement.clientWidth;
    $('.aui_outer .aui_header').on("mousedown", function(e) {
        $(this)[0].oncontextmenu = function(e) { return false; } //防止右击弹出菜单
        var getStartX = e.pageX,
		getStartY = e.pageY;
        var getPositionX = (minwid / 2) - $(this).offset().left,
		getPositionY = 60;
        $(document).on("mousemove", function(e) {
            var getEndX = e.pageX,
			getEndY = e.pageY;
            $('.aui_outer').css({
                left: getEndX - getStartX - getPositionX,
                top: getEndY - getStartY + getPositionY
            });

        });
        $(document).on("mouseup", function() {
            $(document).unbind("mousemove");
        })
    });
	//填充选择数据
    selectProvince('all', null, '');
}

//全部地区数据
var dataarrary = __LocalDataCities.list;

function selectProvince(type, con, isremove) {
    var strVarCity = "";
	//显示所有数据
    if (type == "all") {
		//省数据
        var dataCityxz = __LocalDataCities.category.provinces;
		//热门数据
        var datahotcityxz =__LocalDataCities.category.hotcities;
        strVarCity += "                            <div class=\"view-all\" id=\"\">";
		//设置热门城市信息
		if(datahotcityxz &&	datahotcityxz.length>0){
			strVarCity += "                              <p class=\"data-title\">热门城市<\/p>";
			strVarCity += "                              <div class=\"data-list data-list-hot\">";
			strVarCity += "                                <ul class=\"clearfix\">";
			for (var i in datahotcityxz) {
				strVarCity += '<li><a href=\"javascript:;\" data-code=\"' + datahotcityxz[i] + '\" data-name=\"' + dataarrary[datahotcityxz[i]][0] + '\" class=\"d-item\"  onclick="selectProvince(\'sub\',this,\'\')">' + dataarrary[datahotcityxz[i]][0] + '<label>0</label></a></li>';
			}
			strVarCity += "                                <\/ul>";
			strVarCity += "                              <\/div>";
		}
		//设置省信息
		if(dataCityxz && dataCityxz.length>0){
	        strVarCity += "                              <p class=\"data-title\">全部省份<\/p>";
	        strVarCity += "                              <div class=\"data-list\">";
	        strVarCity += "                                <ul class=\"clearfix\">";
	
	        for (var i in dataCityxz) {
	            strVarCity += '<li><a href=\"javascript:;\" data-code=\"' + dataCityxz[i] + '\" data-name=\"' + dataarrary[dataCityxz[i]][0] + '\" class=\"d-item\"  onclick="selectProvince(\'sub\',this,\'\')">' + dataarrary[dataCityxz[i]][0] + '<label>0</label></a></li>';
	        }
	        strVarCity += "                                <\/ul>";
	        strVarCity += "                              <\/div>";  
		}
		
        $('.data-container-city').html(strVarCity);

        $('.data-result span').each(function(index) {
            if ($('a[data-code=' + $(this).data("code") + ']').length > 0) {
                $('a[data-code=' + $(this).data("code") + ']').addClass('d-item-active');
                if ($('a[data-code=' + $(this).data("code") + ']').attr("class").indexOf('data-all') > 0) {
                    $('a[data-code=' + $(this).data("code") + ']').parent('li').nextAll('li').find('a').css({ 'color': '#ccc', 'cursor': 'not-allowed' });
                    $('a[data-code=' + $(this).data("code") + ']').parent('li').nextAll("li").find('a').attr("onclick", "");
                }
            } else {
                var numlabel = $('a[data-code=' + $(this).data("code").toString().substring(0, 3) + ']').find('label').text();
                $('a[data-code=' + $(this).data("code").toString().substring(0, 3) + ']').find('label').text(parseInt(numlabel) + 1).show();
            }
        });
    }
    //显示下一级  根据  sub 关系查找
    else {
		//省数据
        var dataCityxz = __LocalDataCities.category.provinces;
		//获取地区关系  省--市--区
        var relations = __LocalDataCities.relations;
		//如果当前选择的没有  relation  代表 没有 下一级
        if (typeof (relations[$(con).data("code")]) != "undefined") {
            //添加标题
            if (isremove != "remove") {
				//.data("data-code") 类似于 attr("data-code");
                $('.data-tabs ul').append('<li data-code=' + $(con).data("code") + ' data-name=' + $(con).data("name") + ' class="active" onclick="removenode_area(this)"><a href="javascript:;"><span>' + $(con).data("name") + '</span><em></em></a></li>');
            }
            //添加内容 根据
            strVarCity += "<ul class=\"clearfix\">";
			//下面注释的是 省,默认不显示这个
            //strVarCity += '<li class="" style="width:100%"><a href="javascript:;" class="d-item data-all"  data-code="' + $(con).data("code") + '"  data-name=\"' + $(con).data("name") + '\"  onclick="selectitem_area(this)">' + $(con).data("name") + '<label>0</label></a></li>';
            for (var i in relations[$(con).data("code")]) {
                strVarCity += '<li><a href="javascript:;" class="d-item" data-code="' + relations[$(con).data("code")][i] + '"  data-name=\"' + dataarrary[relations[$(con).data("code")][i]][0] + '\" onclick="selectProvince(\'sub\',this,\'\')">' + dataarrary[relations[$(con).data("code")][i]][0] + '<label>0</label></a></li>';
            }
            strVarCity += "<\/ul>";
            $('.data-container-city').html(strVarCity);
        } else {
		    //多选
            if (datatype == "duoxuan") {
				//查看当期是否有选择
                if ($(con).attr("class").indexOf('d-item-active') > 0) {
					//删除选择样式 和 值
                    $('.data-result span[data-code="' + $(con).data("code") + '"]').remove();
                    $(con).removeClass('d-item-active');
                    return false;
                }
				//如果选择大于2
                if ($('.data-result span').length > (selNum-1)) {
					//提示显示,并缓缓消失
                    $('.data-error').slideDown();
                    setTimeout("$('.data-error').hide()", 1000);
                    return false;
                } else {
					//添加一个结果到结果集中
                    $('.data-result').append("<span class=\"svae_box aui-titlespan\" data-code=\"" + $(con).data("code") + "\" data-name=\"" + $(con).data("name") + "\" onclick=\"removespan_area(this)\">" + $(con).data("name") + "<i>×<\/i><\/span>");
                    $(con).addClass('d-item-active');
                }
            } else {
                //单选 
				//清空结果集
                $('.data-result span').remove();
				//添加结果到结果集
                $('.data-result').append("<span class=\"svae_box aui-titlespan\" data-code=\"" + $(con).data("code") + "\" data-name=\"" + $(con).data("name") + "\" onclick=\"removespan_area(this)\">" + $(con).data("name") + "<i>×<\/i><\/span>");
                $(con).parent('li').siblings('li').find('a').removeClass('d-item-active')
                $(con).addClass('d-item-active');
            }
        }
        $('.data-result span').each(function(index) {
            if ($('a[data-code=' + $(this).data("code") + ']').length > 0) {
                $('a[data-code=' + $(this).data("code") + ']').addClass('d-item-active');
                if ($('a[data-code=' + $(this).data("code") + ']').attr("class").indexOf('data-all') > 0) {
                    if (datatype == "duoxuan") {
                        $('a[data-code=' + $(this).data("code") + ']').parent('li').nextAll('li').find('a').css({ 'color': '#ccc', 'cursor': 'not-allowed' });
                        $('a[data-code=' + $(this).data("code") + ']').parent('li').nextAll("li").find('a').attr("onclick", "");
                    }
                }
            } else {
                //var numlabel=$('a[data-code='+$(this).data("code").toString().substring(0,6)+']').find('label').text();
                $('a[data-code=' + $(this).data("code").toString().substring(0, 6) + ']').find('label').text('*').show();
            }
        });
    }

}

//选中地区
function selectitem_area(con) {
	//多选
    if (datatype == "duoxuan") {
        //如果选择数量足够
        if ($('.data-result span').length > (selNum-1)) {
            $('.data-error').slideDown();
            setTimeout("$('.data-error').hide()", 1000);
            return false;
        } else {
			//删除选择框
            $('.data-result span').each(function() {
                if ($(this).data("code").toString().substring(0, $(con).data("code").toString().length) == $(con).data("code").toString()) {
                    $(this).remove();
                }
            })
            $(con).parent('li').siblings('li').find("a").removeClass("d-item-active");

            if ($(con).attr("class").indexOf("d-item-active") == -1) {
                $(con).parent('li').nextAll("li").find('a').css({ 'color': '#ccc', 'cursor': 'not-allowed' })
                $(con).parent('li').nextAll("li").find('a').attr("onclick", "");
            } else {
                $(con).parent('li').nextAll("li").find('a').css({ 'color': '#0077b3', 'a.d-item-active:hover': '#fff', 'cursor': 'pointer' })
                $(con).parent('li').nextAll("li").find('a').attr("onclick", "selectProvince(\'sub\',this,\'\')");
            }
            if ($(con).attr("class").indexOf('d-item-active') > 0) {
                $('.data-result span[data-code="' + $(con).data("code") + '"]').remove();
                $(con).removeClass('d-item-active');
                return false;
            }
            $('.data-result').append("<span class=\"svae_box aui-titlespan\" data-code=\"" + $(con).data("code") + "\" data-name=\"" + $(con).data("name") + "\" onclick=\"removespan_area(this)\">" + $(con).data("name") + "<i>×<\/i><\/span>");
            $(con).addClass('d-item-active');
        }
    } else {
        //单选
        $('.data-result span').remove();
        $('.data-result').append("<span class=\"svae_box aui-titlespan\" data-code=\"" + $(con).data("code") + "\" data-name=\"" + $(con).data("name") + "\" onclick=\"removespan_area(this)\">" + $(con).data("name") + "<i>×<\/i><\/span>");
        $(con).parent('li').siblings('li').find('a').removeClass('d-item-active')
        $(con).addClass('d-item-active');
    }
}


function removenode_area(lithis) {
    if ($(lithis).nextAll('li').length == 0) {
        return false;
    }
    $(lithis).nextAll('li').remove();
    if ($(lithis).data("selector") == "tab-all") {
        selectProvince('all', null, '');
    }
    else {
        selectProvince('sub', lithis, 'remove');
    }
}

function removespan_area(spanthis) {
    $('a[data-code=' + $(spanthis).data("code") + ']').removeClass('d-item-active');
    if ($('a[data-code=' + $(spanthis).data("code") + ']').length > 0) {
        if ($('a[data-code=' + $(spanthis).data("code") + ']').attr("class").indexOf('data-all') > 0) {
            $('a[data-code=' + $(spanthis).data("code") + ']').parent('li').nextAll('li').find('a').css({ 'color': '#0077b3', 'a.d-item-active:hover': '#fff', 'cursor': 'pointer' });
            $('a[data-code=' + $(spanthis).data("code") + ']').parent('li').nextAll("li").find('a').attr("onclick", "selectProvince(\'sub\',this,\'\')");

        }
    }
    $(spanthis).remove();
}

//确定选择
function svae_City() {

    var val = '';
    var Cityname = '';
    if ($('.svae_box').length > 0) {
        $('.svae_box').each(function() {
            val += $(this).data("code") + ',';
            Cityname += $(this).data("name") + '-';
        })
    }
    if (val != '') {
        val = val.substring(0, val.lastIndexOf(','));
    }
    if (Cityname != '') {
        Cityname = Cityname.substring(0, Cityname.lastIndexOf('-'));
    }

    $(dataCityinput).data("value", val);
    $(dataCityinput).val(Cityname);

    Close();
}
function Close() {
    $('.aui_state_box').remove();
}


function showData(showElam,area){
	//回显当前选择
    var val = '';
    var Cityname = '';
    if (area && area.length>0) {
        for (var i in area) {
			val += area[i] + ',';
            Cityname += dataarrary[area[i]][0] + '-';
		}
    }
    if (val != '') {
        val = val.substring(0, val.lastIndexOf(','));
    }
    if (Cityname != '') {
        Cityname = Cityname.substring(0, Cityname.lastIndexOf('-'));
    }

    $(showElam).data("value", val);
    $(showElam).val(Cityname);
}














