let mix = require('laravel-mix');

mix.css('node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css','src/assets/css')
mix.css('node_modules/admin-lte/dist/css/adminlte.min.css','src/assets/css')
mix.css('node_modules/admin-lte/plugins/chart.js/Chart.min.css','src/assets/css')

mix.copy('node_modules/admin-lte/plugins/jquery/jquery.min.js','src/assets/js')
mix.copy('node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js','src/assets/js')
mix.copy('node_modules/admin-lte/dist/js/adminlte.min.js','src/assets/js')
mix.copy('node_modules/admin-lte/plugins/chart.js/Chart.min.js','src/assets/js')
mix.copy('node_modules/admin-lte/plugins/chart.js/Chart.bundle.min.js','src/assets/js')
mix.copy('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js','src/assets/js')

