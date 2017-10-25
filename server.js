const bs = require('browser-sync').create();

bs.init({
  server: './'
});

bs.watch('./*.html', function (event, file) {
  if (event === 'change') {
    bs.reload(file);
  }
});

bs.watch(['./css/*.css','./js/*.js'], function (event, file) {
  bs.reload();
});
