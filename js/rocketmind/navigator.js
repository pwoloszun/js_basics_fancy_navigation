RocketMind.Navigator = (function() {

  function Navigator(body, links, sections) {
    this._links = links;
    this._body = body;
    this._sections = sections;
    this._initLinksOnClickHandlers();
  }

  Navigator.prototype._initLinksOnClickHandlers = function() {
    var navigator = this;
    this._links.on("click", function(event) {
      event.preventDefault();
      var clickedLink = $(this);
      var selectedSection = navigator._findSelectedSectionFor(clickedLink);
      navigator._scrollSmoothlyTo(selectedSection);
    });
  };

  Navigator.prototype._findSelectedSectionFor = function(link) {
    var sectionId = link.attr("href");
    return this._sections.filter(sectionId);
  };

  Navigator.prototype._scrollSmoothlyTo = function(section) {
    var animationParams = {
      scrollTop: section.offset().top
    };
    this._body.stop();
    this._body.animate(animationParams, 2200);
  };

  return Navigator;

})();
