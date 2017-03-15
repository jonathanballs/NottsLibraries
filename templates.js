(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['insert.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr>\n            <td class=\"label\">Title</td>\n            <td class=\"value\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n        <tr>\n            <td class=\"label\">Location</td>\n            <td class=\"value\">"
    + alias4(((helper = (helper = helpers.available || (depth0 != null ? depth0.available : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"available","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "\n<h4>Available at UoN libraries</h4>\n\n<div id=\"nottslib-container\">\n    <table>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </table>\n\n\n<div id=\"requestACopy\" class=\"a-button-stack\">\n        <span id=\"buybox-see-all-buying-choices\" class=\"a-button a-spacing-base a-button-primary\"><span class=\"a-button-inner\"><a id=\"buybox-see-all-buying-choices-announce\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.request_link || (depth0 != null ? depth0.request_link : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"request_link","hash":{},"data":data}) : helper)))
    + "\" title=\"See All Buying Options\" class=\"a-button-text\" role=\"button\" target=\"_blank\">\n            Request A Copy\n        </a></span></span>\n    </div>\n\n</div>\n\n";
},"useData":true});
})();