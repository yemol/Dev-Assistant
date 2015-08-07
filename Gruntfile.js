module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main:{
      files:[

//        {expand: true,src:'node_modules/oauth2orize/lib/*',dest:'OAuth_Server/lib/oauth2orize/',flatten: true},
//          {expand: true,src:'node_modules/oauth2orize/lib/errors/*',dest:'OAuth_Server/lib/oauth2orize/errors/',flatten: true},
//          {expand: true,src:'node_modules/oauth2orize/lib/exchange/*',dest:'OAuth_Server/lib/oauth2orize/exchange/',flatten: true},
//          {expand: true,src:'node_modules/oauth2orize/lib/grant/*',dest:'OAuth_Server/lib/oauth2orize/grant/',flatten: true},
//          {expand: true,src:'node_modules/oauth2orize/lib/middleware/*',dest:'OAuth_Server/lib/oauth2orize/middleware/',flatten: true},
//        {expand: true,src:'node_modules/express/lib/*',dest:'OAuth_Server/lib/express',filter: 'isFile',flatten: true},
//          {expand: true,src:'node_modules/express/lib/middleware/*',dest:'OAuth_Server/lib/express/middleware/',filter: 'isFile',flatten: true},
//          {expand: true,src:'node_modules/express/lib/router/*',dest:'OAuth_Server/lib/express/router/',filter: 'isFile',flatten: true},
//        {expand: true,src:'node_modules/body-parser/lib/*',dest:'OAuth_Server/lib/body-parser/',filter: 'isFile',flatten: true},
//          {expand: true,src:'node_modules/body-parser/lib/types/*',dest:'OAuth_Server/lib/body-parser/types/',filter: 'isFile',flatten: true},
//        {src:'node_modules/express-session/index.js',dest:'OAuth_Server/lib/express-session/index.js'},
//          {expand: true,src:'node_modules/express-session/session/*',dest:'OAuth_Server/lib/express-session/session/',filter: 'isFile',flatten: true},
//        {src:'node_modules/ejs/ejs.min.js',dest:'OAuth_Server/lib/ejs/ejs.min.js'},
//        {src:'node_modules/cookie-parser/lib/parse.js',dest:'OAuth_Server/lib/cookie-parser/parse.js'},
        {src:'node_modules/angular/angular.min.js',dest:'Auth_Server/public/javascript/angular.min.js'},
        {src:'node_modules/jquery/dist/jquery.min.js',dest:'Auth_Server/public/javascript/jquery.min.js'},
        {src:'node_modules/jquery/dist/jquery.min.map',dest:'Auth_Server/public/javascript/jquery.min.map'},
        {src:'node_modules/bootstrap/dist/js/bootstrap.min.js',dest:'Auth_Server/public/javascript/bootstrap.min.js'},
          {expand: true,src:'node_modules/bootstrap/dist/fonts/*.*',dest:'Auth_Server/public/fonts/',flatten: true},
          {src:'node_modules/bootstrap/dist/css/bootstrap.min.css',dest:'Auth_Server/public/css/bootstrap.min.css'},
          {src:'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',dest:'Auth_Server/public/css/bootstrap-theme.min.css'},

        //Web Site requirements
        {src:'node_modules/angular/angular.min.js',dest:'WebSite/javascript/angular.min.js'},
        {src:'node_modules/jquery/dist/jquery.min.js',dest:'WebSite/javascript/jquery.min.js'},
        {src:'node_modules/jquery/dist/jquery.min.map',dest:'WebSite/javascript/jquery.min.map'},
        {src:'node_modules/bootstrap/dist/js/bootstrap.min.js',dest:'WebSite/javascript/bootstrap.min.js'},
        {expand: true,src:'node_modules/bootstrap/dist/fonts/*.*',dest:'WebSite/fonts/',flatten: true},
        {src:'node_modules/bootstrap/dist/css/bootstrap.min.css',dest:'WebSite/css/bootstrap.min.css'},
        {src:'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',dest:'WebSite/css/bootstrap-theme.min.css'},
        {expand: true,src:'node_modules/express/lib/*',dest:'WebSite/lib/express',filter: 'isFile',flatten: true},
        {expand: true,src:'node_modules/express/lib/middleware/*',dest:'WebSite/lib/express/middleware/',filter: 'isFile',flatten: true},
        {expand: true,src:'node_modules/express/lib/router/*',dest:'WebSite/lib/express/router/',filter: 'isFile',flatten: true},
        {expand: true,src:'node_modules/body-parser/lib/*',dest:'WebSite/lib/body-parser/',filter: 'isFile',flatten: true},
        {expand: true,src:'node_modules/body-parser/lib/types/*',dest:'WebSite/lib/body-parser/types/',filter: 'isFile',flatten: true},
        {src:'node_modules/express-session/index.js',dest:'WebSite/lib/express-session/index.js'},
        {expand: true,src:'node_modules/express-session/session/*',dest:'WebSite/lib/express-session/session/',filter: 'isFile',flatten: true},
        {src:'node_modules/ejs/ejs.min.js',dest:'WebSite/lib/ejs/ejs.min.js'},
      ],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

};
