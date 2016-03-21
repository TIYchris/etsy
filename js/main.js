$(document).ready(function() {
        var template = $("#itemTemplate").text();
        var rendered = Mustache.render(template, data);
        $(".musCont").html(rendered);
});
