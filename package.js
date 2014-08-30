Package.describe({
  summary: "A collection of utility modules"
});

Package.on_use(function(api) {
  api.use(['coffeescript', 'underscore', 'lodash'], ['client', 'server']);
  api.use(['deps', 'autoform', 'templating', 'jquery'], 'client');
  api.export([
    'Arrays', 'Booleans', 'Collections', 'Objects', 'Setter', 'Strings', 'Types'
  ], ['client', 'server']);
  api.export([
    'Forms', 'Window'
  ], 'client');
  api.add_files([
    'Arrays.coffee', 'Booleans.coffee', 'Collections.coffee', 'Objects.coffee', 'Setter.coffee',
    'Strings.coffee', 'Types.coffee'
  ], ['client', 'server']);
  api.add_files([
    'Forms.coffee', 'Window.coffee'
  ], 'client');
});
