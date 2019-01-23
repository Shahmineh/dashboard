import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './GoogleSearch.scss';

class GoogleSearch extends Component {

  constructor(props) {
    super(props);
  }
  var myCallback = function() {
    if (document.readyState == 'complete') {
      // Document is ready when CSE element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render(
          {
            div: "test",
            tag: 'search'
          });
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function() {
        // Render an element with both search box and search results in div with id 'test'.
          google.search.cse.element.render(
              {
                div: "test",
                tag: 'search'
              });
      }, true);
    }
  };

  // Insert it before the CSE code snippet so that cse.js can take the script
  // parameters, like parsetags, callbacks.
  window.__gcse = {
    parsetags: 'explicit',
    callback: myCallback
  };

  (function() {
    var cx = '013140834250261006466:mya5yep2bjc'; // Insert your own Custom Search engine ID here
    var gcse = document.createElement('script'); 
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(gcse, s);
  })();
  render() {
    return(
      
       <div id="test"></div>
        
     
    );
  }
}

export default withRouter(GoogleSearch);