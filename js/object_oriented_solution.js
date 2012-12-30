$(document).ready(function() {
  var body = $("html, body");
  var links = $("#navigation a");
  var sections = $(".section");
  new RocketMind.Navigator(body, links, sections);
});
