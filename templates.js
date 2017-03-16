(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['insert.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\n            <td class=\"label\">Title</td>\n            <td class=\"value\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n        <tr>\n            <td class=\"label\">Location</td>\n            <td class=\"value\">"
    + alias4(((helper = (helper = helpers.available || (depth0 != null ? depth0.available : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"available","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "No results found";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div id=\"requestACopy\" class=\"a-button-stack\">\n        <span id=\"buybox-see-all-buying-choices\" class=\"a-button a-spacing-base a-button-primary\"><span class=\"a-button-inner\"><a id=\"buybox-see-all-buying-choices-announce\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.request_link : stack1), depth0))
    + "\" title=\"Request A Copy\" class=\"a-button-text\" role=\"button\" target=\"_blank\">\n            Request A Copy\n        </a></span></span>\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <br />\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<br />\n<h4>Available at UoN libraries</h4>\n\n<div id=\"nottslib-container\">\n    <table>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <tr>\n            <td class=\"label\">"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n            <td class=\"value\"><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.manual_search_url || (depth0 != null ? depth0.manual_search_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"manual_search_url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Search manually</a></td>\n        </tr>\n\n    </table>\n\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n";
},"useData":true});
})();