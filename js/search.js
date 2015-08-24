﻿function ret_val(value) {
    $("#music", window.opener.document).val(value);
    window.opener.select_song();
    window.close();
}

function search(e) {
    var title = $("#title").val();
    var level_low = +$("#level_low").val();
    var level_high = +$("#level_high").val();

    var music_db = window.opener.music_db;
    var result = music_db({ title: { like: title }, level: { ">=": level_low, "<=": level_high } }).order("level asec, type asec, title asec");
    var result_html = "<p>" + result.count() + " songs found.</p>";

    result.each(function(entry) {
        var type_str = "";
        if (entry.type == 1)
            type_str = "NOV";
        else if (entry.type == 2)
            type_str = "ADV";
        else if (entry.type == 3)
            type_str = "EXH";
        else if (entry.type == 4)
            type_str = "INF";
        else if (entry.type == 5)
            type_str = "GRV";

        result_html += "<a href='javascript:ret_val(\"" + entry.value + "\");'>(" + entry.level + ") " + entry.title + " [" + type_str + "]</a><br/>";
    });

    $("#result").html(result_html);
}

function list_test_songs(e) {
    var title = $("#title").val();
    var level_low = +$("#level_low").val();
    var level_high = +$("#level_high").val();

    var music_test_db = window.opener.music_test_db;
    var result = music_test_db({ title: { like: title }, level: { ">=": level_low, "<=": level_high } }).order("level asec, type asec, title asec");
    var result_html = "<p>" + result.count() + " songs found.</p>";

    result.each(function (entry) {
        var type_str = "";
        if (entry.type == 1)
            type_str = "NOV";
        else if (entry.type == 2)
            type_str = "ADV";
        else if (entry.type == 3)
            type_str = "EXH";
        else if (entry.type == 4)
            type_str = "INF";
        else if (entry.type == 5)
            type_str = "GRV";

        result_html += "<a href='javascript:ret_val(\"" + entry.value + "\");'>(" + entry.level + ") " + entry.title + " [" + type_str + "]</a><br/>";
    });

    $("#result").html(result_html);
}

function titleKeyUp(e) {
    if (e.keyCode == 13) {
        search();
    }
}

$(document).ready(function() {
    $("#search").on("click", search);
    $("#test_songs").on("click", list_test_songs);
    $("#title").focus();
    $("#title").on("keyup", titleKeyUp);

    $("#level_low").val(1);
    $("#level_high").val(16);
});