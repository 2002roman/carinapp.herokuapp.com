exports.pgCon = {
    'user' : 'jmisxwifsbrdbh',
    'host' : 'ec2-174-129-209-212.compute-1.amazonaws.com',
    'database' : 'dc7cvv5em9dmdr',
    'password' : '1443c7d4942f246ca5724122ecc850eb8d7f9b6866d2f5a4246c71e2ecff5922',
    'port' : 5432
};
exports.facebookCon = {
    'clientID' : "2052181424999563",
    'clientSecret' : "4662a73147709bc214ee7af1e7c6e993",
    'callbackURL' : "https://carinapp.herokuapp.com/api/facebook/callback"
};
exports.corsCon = {
	'origin':['http://localhost:8080'],
    'methods':['GET', 'HEAD', 'OPTIONS','POST','DELETE'],
    'credentials': true
}
exports.authenticationSuccessRedirect = "https://carinapp.herokuapp.com/";
exports.authenticationFailedRedirect = "https://carinapp.herokuapp.com/error";