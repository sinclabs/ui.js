//ui.js
//Author: Subramanian Alagappan
//Description: GUI Framework for NW.JS built in JavaScript

//Global Variables
//Require NWJS source variables
var nw = require('nw.gui');
var win = nw.Window.get();
//Require all the plugins
var fs = require('fs'); //File System Access
var path = require('path'); //To create absolute path


//Functions
//Init function to handle window buttons - called on body OnLoad
var onInit = function(){
  win.isMaximized = false;
  
  // Window Minimize
  document.getElementById('windowControlMinimize').onclick = function(){
    win.minimize();
  };

  // Window Close
  document.getElementById('windowControlClose').onclick = function(){
    win.close();
  };

  // Window Maximize
  document.getElementById('windowControlMaximize').onclick = function(){
    if (win.isMaximized)
        win.unmaximize();
    else
        win.maximize();
  };

  win.on('maximize', function(){
      win.isMaximized = true;
  });

  win.on('unmaximize', function(){
      win.isMaximized = false;
  });    
}


module.exports = exp;