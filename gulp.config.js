module.exports = ()=>{
  let client = './src/';
  let root = './';
  let temp = './.temp/';

  let config = {
    /***********
    * File paths
    ***********/

    build:'./dist/',
    client: client,
    images:client + 'images/**/*.*',
    html: client + 'src/*.html',
    index:client + 'index.html',
    root:root,

    /***
    * Browser sync
    ***/
    browserReloadDelay: 1000,


    /***
    * Bower and NPM locations
    ***/
    bower:{
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    },
    packages : [
      './package.json',
      './bower.json'
    ],

  };

  return config;
};
