exports.pgCon = {
    'user' : 'aoarpgboekmezt',
    'host' : 'ec2-23-21-148-223.compute-1.amazonaws.com',
    'database' : 'db1koekpfjahur',
    'password' : '0199b9b831c2d2ce5b7cd4404e358ffa23009a61993904586b512d45f8c92692',
    'port' : 5432
};
exports.facebookCon = {
    'clientID' : "2052181424999563",
    'clientSecret' : "4662a73147709bc214ee7af1e7c6e993",
    'callbackURL' : "https://carinapp.herokuapp.com/facebook/callback"
};
exports.corsCon = {
	'origin':['http://localhost:8080'],
    'methods':['GET', 'HEAD', 'OPTIONS','POST','DELETE'],
    'credentials': true
}
exports.authenticationSuccessRedirect = "https://carinapp.herokuapp.com/test";
exports.authenticationFailedRedirect = "https://carinapp.herokuapp.com/test/error";