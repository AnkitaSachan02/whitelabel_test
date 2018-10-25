import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'
 
import Index from '../imports/ui/index';
 
Meteor.startup(() => {
  render(<Index />, document.getElementById('render-target'));
})