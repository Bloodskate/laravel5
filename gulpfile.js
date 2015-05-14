var elixir = require('laravel-elixir');

var paths = {
	'bootstrap': './resources/assets/bower/bootstrap-sass-official/assets/'
}

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');
    mix.scripts([
    '../assets/bower/jquery/dist/jquery.js',
    '../assets/bower/bootstrap/dist/js/bootstrap.js'
], 'public/js/vendor.js');
     mix.sass("style.scss", 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/']})
	      .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
	      .scripts([
	        paths.jquery + "dist/jquery.js",
	        paths.bootstrap + "javascripts/bootstrap.js"
	      ], './', 'public/js/app.js');
});
