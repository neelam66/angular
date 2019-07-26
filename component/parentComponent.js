var app=angular.module("myApp",[]);
app.component("personalComponent", {
	
	bindings: {
		parentName: "=" // =, <, @, &, 
	},

	templateUrl: "template/parentTemplate.html",	
	controller: ["myServicePersonal", function (myServicePersonal) {
		
		var self = this;
		myServicePersonal.getData().then(function (response) {
			self.studentPersonalData = response.studentPersonal;
			// self.subject = "AngularJs";
		});
  
	}],
	
	controllerAs: "parentCtrl"

});