Router.map(function () {
  this.route('xmlapi', {
    path: '/xmlapi',
    where: 'server',
    action: function () {
//      console.log('calling xmlDemo');
      var res = 'OK';
      var json = {'data' : res};
      this.response.setHeader('Content-Type', 'application/json');
      this.response.end(JSON.stringify(json));
    }
  });
});

Meteor.methods({
  getCap : function (host, query){
      var res = HTTP.call('GET',host,{'query': query});
      return res;
  }
});


//      HTTP.call('GET',
//          'http://acc-services.inspire-provincies.nl/ProtectedSites/services/view_PS',
//          {'query':'request=GetCapabilities&service=WMS&version=1.3.0',
//        'headers': {'Origin':'http://acc-services.inspire-provincies.nl'}},
//        function(callError,callResponse){
//          if (callError){
//            res = callError;
//          } else {
//            res = callResponse;
//          }
//        }
//      );
