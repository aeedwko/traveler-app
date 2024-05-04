const calgaryPlaces = [
  {
    placeId: 'ChIJJzJsi_1vcVMRgZd7NwckWfE',
    city: 'Calgary',
    country: 'Canada',
    name: 'Calgary Tower',
    category: 'Tourist Attraction',
    description: 'Soaring tower with panoramic views from a glass-floored observation deck & a revolving restaurant.',
  },
  {
    placeId: 'ChIJ5dncsfl7cVMRmlZaLAQhsto',
    city: 'Calgary',
    country: 'Canada',
    name: 'Calgary Zoo',
    category: 'Zoo',
    description: 'The Calgary Zoo is a dynamic conservation-focused institution providing immersive experiences with diverse animal species and ecosystems.'
  },
  {
    placeId: 'ChIJYSGE0_xvcVMRXBO38Lu18x0',
    city: 'Calgary',
    country: 'Canada',
    name: 'Devonian Gardens',
    category: 'Park',
    description: "Tropical botanical gardens inside a shopping centre, with fishponds, palms & a children's play area.",
  },
  {
    placeId: 'ChIJpS1pyfBvcVMRR_gMg_K0K0Y',
    city: 'Calgary',
    country: 'Canada',
    name: "Prince's Island Park",
    category: 'Park',
    description: 'Urban park built on the site of a former sawmill, with picnic areas, trails & regular major events.',
  },
  {
    placeId: 'ChIJAQAAwKd6cVMRnekk-oKwJ-M',
    city: 'Calgary',
    country: 'Canada',
    name: "Scotsman's Hill",
    category: 'Tourist Attraction',
    description: 'This lookout point offers striking vistas of skyscrapers & landmarks in downtown Calgary.',
  },
  {
    placeId: 'ChIJyaYiQKt6cVMRKqNT7NvmrEY',
    city: 'Calgary',
    country: 'Canada',
    name: 'The Confluence Historic Site & Parkland',
    category: 'Historical Landmark',
    description: 'Wooden fort, built in 1875 by the North West Mounted Police, with history displays & offering tours.',
  },
  {
    placeId: 'ChIJ3eqB2u9vcVMR4yx4U9Zcc7I',
    city: 'Calgary',
    country: 'Canada',
    name: 'Peace Bridge',
    category: 'Tourist Attraction',
    description: 'Modern, red pedestrian& bike bridge designed by Santiago Calatrava, a well-known Spanish architect.',
  },
  {
    placeId: 'ChIJQ94Uu0plcVMRus1ooc0XHrs',
    city: 'Calgary',
    country: 'Canada',
    name: 'TELUS Spark Science Centre',
    category: 'Museum',
    description: "Science centre with interactive museum exhibits, a children's play area & an HD planetarium theatre.",
  },
  {
    placeId: 'ChIJa1pSzkBwcVMRffjyXskSZVI',
    city: 'Calgary',
    country: 'Canada',
    name: 'Stanley Park',
    category: 'Park',
    description: 'Riverfront 21-hectare park with play & picnic areas, tennis courts, a sports field & bowling club.',
  },
  {
    placeId: 'ChIJxRF-UcZxcVMRLHZcX-S80zI',
    city: 'Calgary',
    country: 'Canada',
    name: 'The Military Museums',
    category: 'Museum',
    description: 'Complex of 8 museums covering naval, army & air force history, plus a gallery about human conflict.'
  },
  {
    placeId: 'ChIJlStFuGZvcVMRnd3-AT74ALE',
    city: 'Calgary',
    country: 'Canada',
    name: 'Contemporary Calgary',
    category: 'Art Gallery',
    description: 'Contemporary Calgary is an institution dedicated to showcasing contemporary art and fostering creative dialogue through exhibitions, programs, and collaborations.'

  },
  {
    placeId: 'ChIJwW53PR1wcVMR-GG-IzCmRDo',
    city: 'Calgary',
    country: 'Canada',
    name: 'Central Memorial Park',
    category: 'Park',
    description: 'Relaxed city park featuring landscaped gardens, war-memorial statues, a fountain & a library.',
  },
  {
    placeId: 'ChIJKxlRM_5vcVMRpi7SoPK4Ggg',
    city: 'Calgary',
    country: 'Canada',
    name: 'Olympic Plaza',
    category: 'Park',
    description: '1988 Olympic Winter Games venue turned park with a pond, stage & seasonal ice skating.',
  },
  {
    placeId: 'ChIJHXmJcgtwcVMRvRk3l7Ike6g',
    city: 'Calgary',
    country: 'Canada',
    name: 'Stampede Park',
    category: 'Event Venue',
    description: 'Stampede Park in Calgary is a bustling event venue hosting the world-renowned Calgary Stampede as well as a variety of concerts, trade shows, and cultural events.'
  },
  {
    placeId: 'ChIJuRFbQg1xcVMROa2svlIsB4Y',
    city: 'Calgary',
    country: 'Canada',
    name: 'Heritage Park',
    category: 'Museum',
    description: 'Large Western Canadian history museum with working antiques & seasonal re-creations with actors.',
  },
  {
    placeId: 'ChIJ32Lx_wFwcVMRbI76TE_q8u8',
    city: 'Calgary',
    country: 'Canada',
    name: 'Glenbow Museum',
    category: 'Museum',
    description: 'Art & area history museum with a permanent collection & archives, plus visiting exhibits & events.',
  },
  {
    placeId: 'ChIJO9RPhqp6cVMRDtLkeZR5CXY',
    city: 'Calgary',
    country: 'Canada',
    name: 'Studio Bell, home of the National Music Center',
    category: 'Museum',
    description: 'Exhibits on Canadian music history, hands-on instrument areas & concerts in a contemporary setting.',
  },
  {
    placeId: 'ChIJHes8p4V2cVMRE2_DGixcj_o',
    city: 'Calgary',
    country: 'Canada',
    name: 'Fish Creek Provincial Park',
    category: 'Park',
    description: 'Expansive outdoor park featuring miles of hiking & biking trails, a manmade lake & wildlife.',
  },
  {
    placeId: 'ChIJ0cC7evlkcVMRxnr5Zs9ENTQ',
    city: 'Calgary',
    country: 'Canada',
    name: 'The Hangar Flight Museum',
    category: 'Museum',
    description: 'Commerical & military aircraft, plus flight history exhibits, in a former WWII training hangar.',
  },
  {
    placeId: 'ChIJe3qBjFVwcVMReZWFdJC3Cqg',
    city: 'Calgary',
    country: 'Canada',
    name: 'CF Chinook Centre',
    category: 'Shopping Mall',
    description: 'Sophisticated shopping complex with high-end department stores, well-known chains & a cinema.',
  },
  {
    placeId: 'ChIJP9RS1R1vcVMR0xEsnBKFn5I',
    city: 'Calgary',
    country: 'Canada',
    name: 'CF Market Mall',
    category: 'Shopping Mall',
    description: 'A kids’ playground & food court join hundreds of retailers on 1 level at this indoor shopping plaza.',
  },
  {
    placeId: 'ChIJz-ID1PxvcVMRb0uKfZBjeTU',
    city: 'Calgary',
    country: 'Canada',
    name: 'Stephen Avenue Walk',
    category: 'Tourist Attraction',
    description: 'Bustling pedestrian walkway lined with art, eateries, shopping & entertainment venues.',
  },
  {
    placeId: 'ChIJuRFbQg1xcVMRzc9h2iNOZ5k',
    city: 'Calgary',
    country: 'Canada',
    name: 'Gasoline Alley Museum',
    category: 'Museum',
    description: 'Site in Heritage Park Historical Village with pre-1950s cars, old-timey gas pumps & vintage signage.',
  },
  {
    placeId: 'ChIJoXCBsPlvcVMRXz5VykaGLq4',
    city: 'Calgary',
    country: 'Canada',
    name: 'Sien Lok Park',
    category: 'Park',
    description: 'Riverside public park with Chinese lion sculptures, a pagoda, a tai chi area & a playground.',
  },
  {
    placeId: 'ChIJ933LHfhlcVMRr6gOlw35dnU',
    city: 'Calgary',
    country: 'Canada',
    name: 'Nose Hill Park',
    category: 'Park',
    description: 'Tranquil, spacious park known for its abundant wildlife, hiking trails & archeological finds.',
  }
]