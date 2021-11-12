var paths = window.location.pathname.split('/');
var project = paths[paths.length - 2];
var np = 'Advertisement';
var nptimes = [];
$.getScript("../j/tb55.php?c="+project+"&np="+np);
var Ads = "/burl/index.php?_f="+project;
var Web = "/burl/index.php?type=web&_f="+project;