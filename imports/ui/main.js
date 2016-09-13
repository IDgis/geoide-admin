import { Meteor } from 'meteor/meteor';

import './main.css';
import './main.html';

Template.main.helpers({
  /**
   * retrieve the url prefix for use in href
   */
  absoluteUrl: function(){
    return Meteor.absoluteUrl();
  },
  
  /**
   * get version using package simple:reactive-method
   */
  version: function(){
    return ReactiveMethod.call('getVersion');
  }
});