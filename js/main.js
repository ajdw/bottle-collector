  $( function() {
    var availableTags = [
      'Aquafina',
      'Arrowhead Water',
      'Crystal Geyser',
      'Dasani',
      'Dejà Blue',
      'Evian',
      'Fiji Water',
      'Glaceau',
      'Mountain Valley Spring Water',
      'Nestlé Pure Life',
      'Panama Blue',
      'Perrier',
      'San Pellegrino',
      'Sierra Springs',
      'Smart Water',
      'VOSS'
    ];
    $( '#tags' ).autocomplete({
      source: availableTags
    });
  } );