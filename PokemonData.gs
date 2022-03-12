function getPokemonFromDex(dexNo) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  var url = 'https://pokeapi.co/api/v2/pokemon/' + dexNo;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var pokemonName = toProperCase(data.name);

  return dashToString(pokemonName);
}

function getHeight(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var height = data.height;
  height = height + 0.1
  return height + " m";
}

function getWeight(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var weight = data.weight;
  weight = weight * 0.1
  return weight + " kg";
}

function getAbilities(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  const abilities = [];

  data.abilities.forEach(function (item, index) {
    abilities.push(toProperCase(item.ability.name))
  });

  var abilityString = abilities.join(', ')
  
  return abilityString;
}

function getType(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  const types = [];

  data.types.forEach(function (item, index) {
    types.push(toProperCase(item.type.name))
  });

  var typeString = types.join(', ')
  
  return typeString;
}

function getHeldItems(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  const types = [];

  data.held_items.forEach(function (item, index) {
    types.push(toProperCase(item.item.name))
  });

  var typeString = types.join(', ')
  
  return (typeString == "") ? "N/A" : typeString;
}

function getBaseExperience(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var baseExperience = data.base_experience;

  return baseExperience;
}

function getBaseStats(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  const baseStats = [];

  data.stats.forEach(function (item, index) {
    baseStats.push(item.base_stat)
  });

  var baseStatString = baseStats.join(', ');
  
  return baseStatString;
}

function getReturnEV(pokemonName) {
  var options = {
    'muteHttpExceptions': true,
    'crossDomain': true,
    'method': 'GET'
  };

  pokemonName = pokemonName.toLowerCase();

  var url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName;

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);

  const baseEV = [];

  data.stats.forEach(function (item, index) {
    if (item.effort > 0) {
      switch(item.stat.name) {
        case 'hp':
          stat = 'HP';
          break;
        case 'attack':
          stat = 'ATK';
          break;
        case 'defense':
          stat = 'DEF';
          break;
        case 'special-attack':
          stat = 'SPA';
          break;
        case 'special-defense':
          stat = 'SPD';
          break;
        case 'speed':
          stat = 'SPE';
          break;
      }
      baseEV.push(item.effort + " " + stat);
    }
  });

  var baseEVstring = baseEV.join(', ');
  
  return baseEVstring;
}

function toProperCase(s) {
  return s.toLowerCase().replace(/^(.)|\s(.)/g, 
          function($1) { return $1.toUpperCase(); });
}

function dashToSpace(s) { return s.split('-').join(' '); }
