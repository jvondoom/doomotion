import { Template } from 'meteor/templating';
import { Shows } from '../api/shows.js';
import { Current } from '../api/current.js';
 
import './body.html';

Template.body.helpers({
  shows() {
  	return Shows.find({});
  },
  current() {
  	return Current.find({});
  }
});

Template.body.events({
	'submit #form-guide': function (e) {
		e.preventDefault();

		var nameShow1 = $(e.delegateTarget).find("#show-1")[0].selectedOptions[0];
		var nameShow2 = $(e.delegateTarget).find("#show-2")[0].selectedOptions[0];
		var nameShow3 = $(e.delegateTarget).find("#show-3")[0].selectedOptions[0];
		var nameShow4 = $(e.delegateTarget).find("#show-4")[0].selectedOptions[0];
		
		if (nameShow4.value != "First Show" && nameShow2.value != "Second Show" && nameShow3.value != "Third Show" && nameShow4.value != "Forth Show") {
			var show1 = Shows.findOne({ "name" : nameShow1.value });
			var show2 = Shows.findOne({ "name" : nameShow2.value });
			var show3 = Shows.findOne({ "name" : nameShow3.value });
			var show4 = Shows.findOne({ "name" : nameShow4.value });


			Current.remove({_id: Current.findOne({"id":1})['_id']});
			Current.remove({_id: Current.findOne({"id":2})['_id']});
			Current.remove({_id: Current.findOne({"id":3})['_id']});
			Current.remove({_id: Current.findOne({"id":4})['_id']});
			Current.insert({
				id : 1,
				name: show1.name,
				creator: show1.creator,
				origin: show1.origin,
				numSeasons: show1.numSeasons
			});
			Current.insert({
				id : 2,
				name: show2.name,
				creator: show2.creator,
				origin: show2.origin,
				numSeasons: show2.numSeasons
			});
			Current.insert({
				id : 3,
				name: show3.name,
				creator: show3.creator,
				origin: show3.origin,
				numSeasons: show3.numSeasons
			});
			Current.insert({
				id : 4,
				name: show4.name,
				creator: show4.creator,
				origin: show4.origin,
				numSeasons: show4.numSeasons
			});
		}
	}
});