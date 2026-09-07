import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'The Fish Tale (Large Numbers & Speed Problems)',
    tagline: 'Lakhs, crores, boat speeds, catch weights, and women’s cooperative banks',
    summary: 'Set sail with Indian fishermen! Learn large numbers up to Lakhs (1,00,000) and Crores (1,00,00,000). Calculate motor boat speeds in km/h, fish drying factory weights, cooperative bank interest, and fish market profits.',
    keyConcepts: [
      { title: 'Indian Place Value', detail: '1 Lakh has 5 zeroes (1,00,000); 1 Crore has 7 zeroes (1,00,00,000).' },
      { title: 'Speed-Distance-Time Formula', detail: 'Distance = Speed × Time; If a motorboat travels at 20 km/h, it covers 20 × 4 = 80 km in 4 hours.' }
    ],
    readingSections: [
      {
        heading: '1. Fish Drying Math',
        body: 'When fresh fish is dried in the sun, it loses water and its weight becomes ⅓ of fresh fish. If women dry 6000 kg of fresh fish in a month, they get 6000 ÷ 3 = 2000 kg of dried fish!',
        tip: 'Women’s cooperative banks (Meenkar Bank) help fisherwomen buy boats without moneylenders.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Shapes and Angles (Protractor & Clock Hands)',
    tagline: 'Right angles (90°), acute angles, obtuse angles, and degree clocks',
    summary: 'Discover angles all around you! Use an angle tester and protractor to identify right angles (L-shape, 90°), acute angles (less than 90°), and obtuse angles (more than 90°). Find angles formed by clock hands at 3:00, 6:00, and 9:00.',
    keyConcepts: [
      { title: 'Right Angle (90°)', detail: 'Formed by perpendicular lines, like the corner of a book, door, or window frame.' },
      { title: 'Acute vs Obtuse Angles', detail: 'Acute is sharper (< 90°); Obtuse is wider (> 90° and < 180°).' }
    ],
    readingSections: [
      {
        heading: '1. Angles in Yoga Asanas',
        body: 'In yoga postures like Trikonasana (Triangle Pose) or Bhujangasana (Cobra Pose), your body forms precise right, acute, and obtuse angles that improve muscle flexibility.',
        tip: 'At 3:00, the minute and hour hands form a sharp right angle of exactly 90°.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'How Many Squares? (Area on Grids & Tangrams)',
    tagline: 'Grid counting, 1 cm² square units, triangles as half rectangles, and stamp areas',
    summary: 'Count square units on checkered grids to calculate area! Discover that the area of a right triangle is exactly half the area of the enclosing rectangle. Trace footprints, postal stamps, and leaf silhouettes on graph paper to estimate non-standard surface areas.',
    keyConcepts: [
      { title: 'Area on Square Grid', detail: 'Count full squares as 1, more-than-half squares as 1, ignore less-than-half squares, and combine half squares (½ + ½ = 1).' },
      { title: 'Triangle Area Rule', detail: 'A diagonal dividing a rectangle of 10 cm² creates two identical triangles of 5 cm² each.' }
    ],
    readingSections: [
      {
        heading: '1. Finding Postal Stamp Areas',
        body: 'A stamp covering 4 squares horizontally and 3 squares vertically has an area of 4 × 3 = 12 square centimeters.',
        tip: 'Two different shapes can have the exact same area but completely different perimeter boundaries!'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Parts and Wholes (Fractions & Flag Colours)',
    tagline: 'Numerator/denominator, Indian tricolour proportions, chocolate shares, and equivalent fractions',
    summary: 'Master fractional portions of a whole! Analyze the Indian Tricolour flag: top ⅓ saffron, middle ⅓ white (with blue Ashoka Chakra), and bottom ⅓ green. Divide chocolate bars with 12 pieces among friends, color grid patterns, and generate equivalent fractions.',
    keyConcepts: [
      { title: 'Fractions of a Set', detail: 'If a chocolate bar has 12 pieces: ¼ of 12 = 3 pieces; ½ of 12 = 6 pieces; ⅓ of 12 = 4 pieces.' },
      { title: 'Fractional Currency', detail: '50 paise is ½ of 1 Rupee; 25 paise is ¼ of 1 Rupee.' }
    ],
    readingSections: [
      {
        heading: '1. The Story of the Greedy Gatekeepers',
        body: 'Birbal had to promise fractions of his royal reward (½, ⅓, ⅒) to three corrupt palace gatekeepers. He asked the Emperor for 100 lashes, so the greedy gatekeepers received their promised punishment!',
        tip: 'To find equivalent fractions, multiply or divide numerator and denominator by the same number.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Does it Look the Same? (Symmetry & Rotations)',
    tagline: 'Mirror line symmetry, folding inkblots, ½ turn (180°), ¼ turn (90°), and ⅙ windmill turns',
    summary: 'Explore visual balance through rotational and reflectional symmetry! Fold inkblot paintings along crease lines. Test which English alphabet letters look identical in a mirror. Rotate geometric shapes by ½ turn (180°), ¼ turn (90°), ⅓ turn (120°), and ⅙ turn (60°) to test rotational invariance.',
    keyConcepts: [
      { title: 'Reflectional Line Symmetry', detail: 'A dotted mirror line divides an image into two identical halves that overlap completely when folded.' },
      { title: 'Rotational Turns', detail: 'A windmill fan with 4 blades looks identical after a ¼ turn; a 3-blade ceiling fan looks identical after a ⅓ turn.' }
    ],
    readingSections: [
      {
        heading: '1. The King and the Secret Safe',
        body: 'A king’s secret safe had a circular lock with a handle shaped like a star. Because the lock looked identical upside-down, the king forgot whether it was open or locked! A wise advisor marked one point on the handle, solving the mystery.',
        tip: 'Letters like H, I, N, O, S, X, Z look the same after a half turn (180°).'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Be My Multiple, I’ll be Your Factor (LCM & HCF)',
    tagline: 'Cat and mouse jumps, common multiples, factor trees, coprime numbers, and circular rings',
    summary: 'Play mathematical games with factors and multiples! Play the Cat and Mouse jumping game to find when the mouse reaches safe hole 24. Find common multiples of 2, 3, and 5 to identify the Lowest Common Multiple (LCM). Deconstruct numbers into factor trees to find the Highest Common Factor (HCF).',
    keyConcepts: [
      { title: 'Multiples vs Factors', detail: 'Multiples of 4 are 4, 8, 12, 16... (growing infinite); Factors of 12 are 1, 2, 3, 4, 6, 12 (exact divisors).' },
      { title: 'Factor Tree Decomposition', detail: 'Breaking 24 into 4 × 6, and further into (2 × 2) × (2 × 3) reveals its prime factors.' }
    ],
    readingSections: [
      {
        heading: '1. The Tamarind Seed Grid Game',
        body: 'Ammini arranges 12 tamarind seeds into different rectangular arrays: 1×12, 2×6, 3×4, 4×3, 6×2, and 12×1. Every array reveals a pair of factors of 12!',
        tip: '1 is a factor of every number, and every number is a multiple of itself.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Can You See the Pattern? (Number Patterns & Magic Squares)',
    tagline: 'Clockwise rotating motifs, palindromic numbers, magic squares (sum 15), and calendar tricks',
    summary: 'Decode visual and numerical patterns! Identify geometric rules: turning shapes by ¼ turn or ½ turn sequentially. Discover Palindromes (words or numbers reading identically forward and backwards, e.g. 12321 or MADAM). Construct 3×3 Magic Squares where rows, columns, and diagonals add up to the same constant sum (15).',
    keyConcepts: [
      { title: '3×3 Magic Square Rule', detail: 'Place 5 at the center; opposite corner numbers sum to 10; every row, column, and diagonal sums to 15.' },
      { title: 'Palindromic Number Trick', detail: 'Take any number (e.g. 43), reverse its digits (34), and add them (43 + 34 = 77) to generate a palindrome!' }
    ],
    readingSections: [
      {
        heading: '1. Calendar Magic Tricks',
        body: 'Take any 3×3 square of dates on a monthly calendar (9 numbers). Add the lowest and highest corner numbers, and multiply the center number by 9: the total sum equals 9 × Center Date!',
        tip: 'Patterns govern nature—from sunflower seeds to seashell spirals and snowflake crystals.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Mapping Your Way (Scale, Directions & Floor Plans)',
    tagline: 'India Gate to Rashtrapati Bhavan, Rajpath axis, map scale (1 cm = 200 km), and aerial grid routes',
    summary: 'Read geographical maps and architectural blueprints! Follow the Republic Day parade route from Vijay Chowk along Rajpath to India Gate and Red Fort. Master map scales: if 1 cm on paper represents 200 km on the ground, calculate real interstate travel distances. Enlarge and reduce drawings using square grid matrices.',
    keyConcepts: [
      { title: 'Map Scale Ratio', detail: 'Scale translates paper dimensions into real-world geographic distances (e.g., 2 cm on map = 2 × 200 km = 400 km in reality).' },
      { title: 'Hexagonal Geometric Landmarks', detail: 'Notice how six major avenues converge around the central hexagon surrounding India Gate.' }
    ],
    readingSections: [
      {
        heading: '1. Compass Directions on Maps',
        body: 'Maps are oriented with North at the top, South at the bottom, East to the right, and West to the left. Traveling from Delhi to Chennai means moving directly South.',
        tip: 'Floor plans show 2D room layouts and door positions as seen from directly overhead.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Boxes and Sketches (3D Nets & Isometric Perspectives)',
    tagline: 'Cube nets, open boxes, floor plans, deep drawings, isometric views, and dice opposite dots (sum=7)',
    summary: 'Transition from 2D flat paper to 3D spatial solids! Cut and fold flat cardboard nets to construct sweet boxes, cubes, and open containers. Contrast flat architectural floor plans with 3D deep drawings showing height and depth. Learn standard dice dot rules: dots on opposite faces always sum to 7 (1 opposite 6, 2 opposite 5, 3 opposite 4).',
    keyConcepts: [
      { title: 'Nets of a Cube', detail: 'A cube has 6 square faces. Exactly 11 unique flat 6-square arrangements can fold correctly into a closed cube.' },
      { title: 'Opposite Faces of a Die', detail: 'On standard gaming dice, the numbers on opposite faces always add up to 7 (e.g., 6 + 1 = 7, 5 + 2 = 7).' }
    ],
    readingSections: [
      {
        heading: '1. Deep Drawings vs Floor Maps',
        body: 'A floor plan shows where doors and windows are located on flat walls, but a deep drawing shows perspective and what the house actually looks like from the front.',
        tip: 'Bridge views drawn from front, side, and top look remarkably different.'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Tenths and Hundredths (Decimals, Millimeters & Currency)',
    tagline: 'Millimeters to centimeters (1 mm = 0.1 cm), 100-square grid, thermometer temperatures, and currency exchange',
    summary: 'Master decimal fractions through real-world metric measurements! Measure pen lengths and pencil tips with a millimeter ruler: 1 millimeter = 1/10 cm = 0.1 cm. Shade 100-square decimal grids to visualize tenths (0.1) and hundredths (0.01). Read city weather thermometers (38.5°C in Jaipur vs 9.8°C in Srinagar) and convert foreign currencies.',
    keyConcepts: [
      { title: 'Millimeters to Centimeters', detail: '10 mm = 1 cm; 1 mm = 0.1 cm; a 4 cm 5 mm frog length is written as 4.5 cm.' },
      { title: 'Hundredths of a Rupee', detail: '1 Rupee = 100 Paise; 75 Paise = ₹0.75; 5 Paise = ₹0.05.' }
    ],
    readingSections: [
      {
        heading: '1. World Long Jump Records in Decimals',
        body: 'In school sports, winning long jumps are recorded down to centimeters: 4.52 meters means 4 meters and 52 centimeters (or 52 hundredths of a meter).',
        tip: 'Never write ₹0.5 for 5 paise; 0.5 means 50 paise, while 5 paise is ₹0.05!'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Area and its Boundary (Perimeters & Optimization)',
    tagline: 'Arbaz’s rectangular plots, string perimeter loops, postcard ribbon challenge, and chewing gum wrapper',
    summary: 'Solve perimeter and area optimization challenges! Calculate boundary perimeter: P = 2(l + b) and area: A = l × b. Discover that different rectangles with the same perimeter can enclose vastly different areas. Cut a small postcard into a continuous paper loop large enough for a person to step through!',
    keyConcepts: [
      { title: 'Perimeter vs Area', detail: 'Perimeter measures total fence length around a field (cm, m); Area measures how many 1 cm² square tiles fit inside.' },
      { title: 'Square Encloses Maximum Area', detail: 'Among all rectangles with the same perimeter, a square encloses the greatest interior area.' }
    ],
    readingSections: [
      {
        heading: '1. The Golden King and the Gold Wire',
        body: 'Chegu was offered as much land as he could enclose with 100 meters of gold wire. Making a 40m × 10m rectangle gave 400 m²; making a 25m × 25m square gave 625 m²; forming a circle gave over 790 m²!',
        tip: 'Unit of perimeter is linear (cm); unit of area is always squared (cm²).'
      }
    ]
  }),
  buildChapter(5, 'c5-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Smart Charts (Tally Marks, Family Trees & Chapati Charts)',
    tagline: 'Yamini’s roadside traffic tally, rabbit population multiplication, family tree generations, and circular pie charts',
    summary: 'Organize dynamic statistics with smart visual displays! Count highway traffic using tally marks (卌 = 5 vehicles). Track rabbit population growth doubling year after year. Construct genealogical family trees spanning great-grandparents, grandparents, and cousins. Read circular "Chapati Charts" (pie charts) to see fractional proportions (½, ¼, ¾) of students participating in art, drama, or sports clubs.',
    keyConcepts: [
      { title: 'Tally Mark 5-Bundle System', detail: 'Drawing four vertical strokes crossed by a horizontal or diagonal bar bundles units into fives for fast tallying.' },
      { title: 'Chapati (Pie) Chart Fractions', detail: 'A circle divided into quarters: ¼ likes tea, ½ likes coffee, ¼ likes milk; visualizes proportions at a single glance.' }
    ],
    readingSections: [
      {
        heading: '1. Growth Chart of a Plant',
        body: 'Amit planted a moong seed and measured its height every 4 days. Plotting dots on a line chart showed that growth was slowest in the first 4 days and fastest between days 8 and 12.',
        tip: 'Chapati charts represent the whole (100% or 1) broken into fractional slices.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 1,
    title: 'Super Senses of Animals (Sight, Hearing & Scent)',
    tagline: 'Ant pheromone trails, eagle binocular vision, dog scent sniffing, bat echolocation, and tiger night whiskers',
    summary: 'Discover incredible animal senses! Learn how ants leave chemical pheromone trails on the ground for column navigation. Understand how predatory eagles spot a piece of roti on the ground from 2 km high in the sky. Learn how dogs demarcate their territories by scent of urine. Discover how tigers use sensitive whiskers (vibrissae) to feel air vibrations in the dark and hear animal movements in rustling leaves.',
    keyConcepts: [
      { title: 'Pheromone Communication in Ants', detail: 'Ants deposit scented chemical pathways; if blocked, following ants detour immediately searching for the scent trace.' },
      { title: 'Tiger’s Super Night Senses', detail: 'A tiger can see 6 times better at night than humans, and its ears can move in different directions to pinpoint prey sounds.' }
    ],
    readingSections: [
      {
        heading: '1. How Mosquitoes Track Humans in the Dark',
        body: 'Mosquitoes locate sleeping humans in pitch-black bedrooms by sensing body warmth and detecting carbon dioxide gas released during exhalation.',
        tip: 'Silkworms can smell their female partners from several kilometers away.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 2,
    title: 'A Snake Charmer’s Story (Reptiles & Antivenom)',
    tagline: 'Kalbeliya tribe, been music, four poisonous snakes of India, hollow fangs, and antivenom serum',
    summary: 'Meet Aryanath of the nomadic Kalbeliya snake-charmer community! Understand that snakes have no external ears and do not "dance" to been music, but follow the physical swaying of the pipe and feel ground vibrations. Identify India’s four venomous snake species: Cobra, Common Krait, Russell’s Viper (Duboya), and Saw-scaled Viper (Afai). Learn that antivenom is manufactured from snake venom itself.',
    keyConcepts: [
      { title: 'Snakes Have No External Ears', detail: 'Snakes sense sound through vibrations traveling through the ground into their belly scales and jawbones.' },
      { title: 'Antivenom Production', detail: 'Diluted venom injected into horses stimulates antibodies, which are purified into life-saving antivenom serum.' }
    ],
    readingSections: [
      {
        heading: '1. Snakes as the Farmer’s Best Friend',
        body: 'Rats eat tons of ripening grain in crop fields. Snakes hunt rats and naturally control rodent pests without chemical poisons.',
        tip: 'Most snakes in India are non-venomous; only four species possess deadly venom.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 3,
    title: 'From Tasting to Digesting (Tongue, Stomach & ORS)',
    tagline: 'Taste buds (sweet, salty, sour, bitter), saliva breaking starch, Dr. Beaumont’s stomach window, and ORS solution',
    summary: 'Trace food from tongue to digestive tract! Identify taste bud zones on the tongue. Learn how salivary amylase in the mouth breaks down plain rice or bread into sweet glucose. Read the true scientific breakthrough of Dr. William Beaumont studying digestion through Alexis St. Martin’s healed gunshot stomach window. Learn how to prepare life-saving Oral Rehydration Solution (ORS).',
    keyConcepts: [
      { title: 'Salivary Starch Breakdown', detail: 'Chewing plain rice or roti 30 times makes it taste sweet as saliva converts starch into sugar.' },
      { title: 'ORS Preparation Recipe', detail: 'Mix 6 level teaspoons of sugar and ½ teaspoon of salt in 1 liter of clean boiled and cooled water.' }
    ],
    readingSections: [
      {
        heading: '1. Dr. Beaumont’s Living Laboratory (1822)',
        body: 'Dr. Beaumont inserted food samples tied to silk strings directly into St. Martin’s stomach to discover that stomach acid digests boiled eggs and meat in 2 to 4 hours.',
        tip: 'Chewing food slowly and thoroughly is the first and most crucial step of digestion.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 4,
    title: 'Mangoes Round the Year (Mamidi Tandra & Food Preservation)',
    tagline: 'Spoiled food vs fermentation, drying, sugar syrup, Mamidi Tandra mango leather, and glass jar sterilization',
    summary: 'Explore food preservation science across seasons! Differentiate naturally spoiled food (sour smell, mold spores) from deliberate fermentation. Discover how brothers Aman and Nita make Mamidi Tandra (Aam Papad) in Andhra Pradesh by layering ripe mango pulp with jaggery and sugar and drying it in the sun for four weeks on a woven palm mat. Learn why pickling jars are boiled and sun-dried.',
    keyConcepts: [
      { title: 'Sun Drying and Dehydration', detail: 'Removing moisture from food prevents bacterial and fungal microorganisms from multiplying.' },
      { title: 'Preservatives (Sugar, Salt, Oil)', detail: 'High concentrations of sugar, salt, or oil draw water out of microbial cells by osmosis, halting decay.' }
    ],
    readingSections: [
      {
        heading: '1. Sterilizing Pickle Jars',
        body: 'Grandmothers thoroughly wash glass jars and dry them in intense sunlight before pouring in raw mango pickles so no moisture remains to cultivate fungus.',
        tip: 'Always check the expiration or "Best Before" date printed on packaged food packets.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 5,
    title: 'Seeds and Seeds (Germination, Dispersal & Velcro)',
    tagline: 'Chana sprouting, water/air/warmth conditions, George de Mestral’s Velcro, and global seed travelers',
    summary: 'Observe the miracle of botanical germination! Soak chana seeds and wrap them in moist cloth to watch white root sprouts emerge. Learn that seeds require moisture, air, and warmth to germinate. Discover seed dispersal vectors: dandelion parachutes carried by wind, coconuts floating on oceans, and cocklebur seeds with hooks that inspired George de Mestral to invent Velcro.',
    keyConcepts: [
      { title: 'Conditions for Germination', detail: 'Seeds require air (oxygen), moisture (water), and optimal warmth; submerged seeds without air cannot sprout.' },
      { title: 'Biomimicry: The Invention of Velcro', detail: 'Swiss engineer George de Mestral noticed burdock seeds clinging to his dog’s fur, examined microscopic hooks, and invented hook-and-loop Velcro.' }
    ],
    readingSections: [
      {
        heading: '1. Seed Travelers Across Continents',
        body: 'Green chillies, tomatoes, and potatoes were brought to India from South America by Portuguese sailors! Peas and cabbage came from Europe; coffee beans and bhindi came from Africa.',
        tip: 'Sprouted seeds are rich in vitamins, enzymes, and easily digestible proteins.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 6,
    title: 'Every Drop Counts (Ghadsisar Lake & Baolis)',
    tagline: 'King Ghadsi of Jaisalmer, 9 interconnected lakes, stepwells (Baolis), Johads, and rainwater harvesting',
    summary: 'Explore ancient rainwater conservation engineering in Rajasthan! Learn about Ghadsisar Lake built 650 years ago by King Ghadsi of Jaisalmer: nine interconnected lakes where overflow from one filled the next, ensuring water all year. Study beautiful architectural stepwells (Baolis) where travelers walked down flights of steps to reach cool groundwater. Meet Tarun Bharat Sangh rejuvenating village johads.',
    keyConcepts: [
      { title: 'Interconnected Lake Systems', detail: 'Rainwater collected over vast catchment areas filled nine linked lakes sequentially with zero water wasted.' },
      { title: 'Stepwells (Baolis)', detail: 'Multi-story architectural staircases descending deep into aquifers, providing drinking water and cool rest pavilions for desert travelers.' }
    ],
    readingSections: [
      {
        heading: '1. Al-Biruni’s Praise of Indian Water Engineering',
        body: 'Uzbek traveler Al-Biruni visited India 1,000 years ago and wrote: "Our people would be amazed to see their water tanks! They pile huge blocks of stone and join them with iron clamps to construct majestic reservoir steps."',
        tip: 'Recharging groundwater through rooftop rainwater harvesting is essential for drought resilience.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 7,
    title: 'Experiments with Water (Density, Dead Sea & Dissolution)',
    tagline: 'Floating vs sinking, salt increasing water density, egg floating in brine, and the 300 g/L salt Dead Sea',
    summary: 'Conduct fun liquid physics experiments! Discover why an iron nail sinks in water while a giant steel ship floats (displacement and buoyant force). Dissolve salt in a glass of water until a submerged lemon or egg floats to the surface! Learn about the Dead Sea between Jordan and Israel, where water contains 300 grams of salt per liter, making the water so dense that humans float effortlessly on their backs without swimming.',
    keyConcepts: [
      { title: 'Density and Buoyancy', detail: 'An object floats if its density is less than the liquid’s density; adding dissolved salt increases water density, exerting greater upward buoyant force.' },
      { title: 'The Dead Sea', detail: 'The saltiest water body on Earth (300 g salt per liter of water); swimmers can lie on the surface reading a book without sinking!' }
    ],
    readingSections: [
      {
        heading: '1. The Historic Dandi March (1930)',
        body: 'Mahatma Gandhi walked 385 km from Sabarmati Ashram to coastal Dandi to break the unjust British Salt Law, stating: "Salt is as essential as air and water; it is a gift of nature that cannot be taxed."',
        tip: 'Warm water dissolves sugar and salt much faster than cold water.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 8,
    title: 'A Treat for Mosquitoes (Malaria, Ronald Ross & Anemia)',
    tagline: 'Anopheles mosquito, plasmodium parasite, blood smear test, Ronald Ross Nobel Prize, and iron-rich jaggery/spinach',
    summary: 'Investigate mosquito-borne epidemiology! Learn that female Anopheles mosquitoes transmit microscopic Plasmodium parasites causing malaria (fever with chills). Follow British doctor Ronald Ross in Secunderabad dissecting mosquitoes to discover the malaria transmission cycle in 1897, earning the 1902 Nobel Prize. Understand Anemia (low hemoglobin/iron in blood) and eat iron-rich foods: amla, green leafy vegetables, and jaggery.',
    keyConcepts: [
      { title: 'Female Anopheles Vector', detail: 'Only female mosquitoes bite humans to obtain protein from blood needed to develop their eggs; males feed on plant sap.' },
      { title: 'Preventing Mosquito Breeding', detail: 'Do not let stagnant water collect in coolers, tires, or flowerpots; introduce Gambusia fish that eat mosquito larvae in ponds.' }
    ],
    readingSections: [
      {
        heading: '1. Ronald Ross’s Discovery in Secunderabad',
        body: 'Dr. Ronald Ross spent months catching and dissecting thousands of mosquitoes under a microscope until he spotted black parasites in the stomach lining of a spotted-winged mosquito, solving the ancient riddle of malaria.',
        tip: 'Normal hemoglobin in human blood should be 12 to 16 grams per deciliter.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 9,
    title: 'Up You Go! (Mountaineering & Bachendri Pal)',
    tagline: 'Nehru Institute of Mountaineering, rucksacks, pitons, crampons, leadership rules, and Mount Everest summit',
    summary: 'Climb snowy Himalayan peaks! Join a mountaineering expedition at the Nehru Institute of Mountaineering (NIM) in Uttarkashi. Learn mountaineering gear: pitons, ropes, karabiners, ice axes, and spiked crampons. Learn camp leadership: leading from behind, carrying heavy rucksacks, and caring for sick teammates. Celebrate Bachendri Pal, who on 23 May 1984 became the first Indian woman to conquer Mount Everest (Sagarmatha, 8848 m).',
    keyConcepts: [
      { title: 'Qualities of an Expedition Leader', detail: 'Help others carry their loads, let the group go ahead and stay behind, find safe camping grounds, and care for anyone who feels unwell.' },
      { title: 'Bachendri Pal’s Historic Everest Ascent', detail: 'Stepping onto the peak at 1:07 PM, she buried the tricolour flag and a picture of Goddess Durga in the snow, standing on top of the world.' }
    ],
    readingSections: [
      {
        heading: '1. Why Mountaineers Take Vitamin C and Iron Tablets',
        body: 'At high altitudes, air is thin and freezing. Mountaineers drink hot milk with turmeric and take vitamin C and iron tablets with breakfast to generate body heat and boost oxygen-carrying red blood cells.',
        tip: 'Mount Everest is called Sagarmatha in Nepal and Chomolungma in Tibet.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 10,
    title: 'Walls Tell Stories (Golconda Fort & Ancient Engineering)',
    tagline: 'Thick bastions, acoustic whisper domes, bronze cannons, water lifting wheels, and museum artifacts',
    summary: 'Step inside the historic 16th-century Golconda Fort of the Qutb Shahi kings near Hyderabad! Explore military architecture: thick stone ramparts, rounded bastions with lookout slits, and sharp iron spikes on double gates against war elephants. Marvel at acoustic engineering: a clap at the entrance gate echoes loudly at the hilltop Bala Hissar palace 1 km away! Discover ancient toothed gear wheels lifting moat water up royal gardens.',
    keyConcepts: [
      { title: 'Bastions (Burj)', detail: 'Tall circular stone towers projecting outward from fortress walls, providing 360° defensive lookout views against attacking enemy armies.' },
      { title: 'Acoustic Warning System', detail: 'Architects engineered palace dome acoustics so any guard warning at the bottom gate echoed instantly to the king’s private chambers on top.' }
    ],
    readingSections: [
      {
        heading: '1. Aurangzeb’s Eight-Month Siege (1687)',
        body: 'Mughal Emperor Aurangzeb camped outside Golconda Fort with heavy cannons for eight months. The fort was so impenetrable that he could only conquer it when a traitor was bribed to open a secret door at midnight!',
        tip: 'Museums preserve terracotta pots, bronze coins, and swords that teach us how ancient people lived.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 11,
    title: 'Sunita in Space (Microgravity & The Blue Planet)',
    tagline: 'NASA astronaut Sunita Williams, zero-gravity floating, eating floating food blobs, and Earth without political borders',
    summary: 'Blast off into orbit with Indian-origin NASA astronaut Sunita Williams! Experience weightlessness aboard the International Space Station (ISS): hair standing up permanently, floating while sleeping strapped into sleeping bags, and chasing water droplets in microgravity. View planet Earth from 400 km high: glowing blue oceans, white swirling storm clouds, and realize that borders between nations exist only on paper maps, not on Earth!',
    keyConcepts: [
      { title: 'Microgravity Effects on the Body', detail: 'In freefall orbit, astronauts feel weightless; without gravity, muscles weaken, so astronauts must exercise on treadmills two hours daily.' },
      { title: 'Earth from Space: No Borders', detail: 'Looking down at Earth, one sees no dividing lines between countries; only landmasses, blue seas, and atmospheric weather systems.' }
    ],
    readingSections: [
      {
        heading: '1. Sunita Williams’s Record Spacewalks',
        body: 'Sunita spent over 320 days in space and completed over 50 hours of spacewalks (EVAs) outside the space station, floating directly in the vacuum of space.',
        tip: 'Gravity is the invisible pulling force that keeps our feet anchored on Earth and keeps the Moon orbiting our planet.'
      }
    ]
  }),
  buildChapter(5, 'c5-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 12,
    title: 'A Shelter so High! (Ladakh, Changpa Tribe & Pashmina)',
    tagline: 'Gaurav Jani on motorcycle "Loner", Cold Desert Ladakh, Rebo yak-hair tents, and 6-sweater-warm Pashmina shawls',
    summary: 'Ride across high Himalayan mountain passes on a motorcycle! Travel with Gaurav Jani from Mumbai to Ladakh ("Cold Desert" with flat mud-roofed stone houses). Climb to the 5000-meter-high Changthang plateau to meet the nomadic Changpa tribe living in octagonal yak-hair tents called Rebo. Learn about Changra goats grazing at -40°C, producing ultra-fine hair woven into world-famous Pashmina shawls.',
    keyConcepts: [
      { title: 'The Miracle of Pashmina Wool', detail: 'Changra goat hair is 6 times thinner than human hair; a handwoven Pashmina shawl is as warm as 6 wool sweaters yet remains light and thin as paper.' },
      { title: 'Ladakhi Stone and Mud Architecture', detail: 'Ground floors have no windows and shelter animals during winter; flat roofs dry apricots, red chillies, and hay for heating.' }
    ],
    readingSections: [
      {
        heading: '1. Handweaving a Pashmina Shawl',
        body: 'Because goat hair is too fine to be spun on machines, Kashmiri artisans weave each shawl by hand on traditional wooden looms; crafting one plain Pashmina takes 250 hours of patient weaving!',
        tip: 'Changpas count their wealth by the number of goats and sheep their family owns.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 1,
    title: 'Ice-Cream Man (Rachel Field) & Wonderful Waste! (Folktale of Kerala)',
    tagline: 'Summer joy cart, vanilla cones, Maharaja of Travancore, leftover vegetable scraps, and invention of Avial',
    summary: 'Savor childhood joy and culinary genius! Rachel Field’s joyful poem "Ice-Cream Man" celebrates the cheerful cart rolling down summer streets dispensing mounds of vanilla, chocolate, and strawberry frost. Paired with the beloved Kerala folktale "Wonderful Waste!" where the Maharaja orders a cook to make use of discarded vegetable peels, inventing Kerala’s most celebrated feast dish: Avial!',
    keyConcepts: [
      { title: 'The Invention of Avial', detail: 'Washing and slicing discarded vegetable peels and strips, simmering them with ground coconut, green chillies, curd, and curry leaves turned waste into a royal delicacy.' },
      { title: 'Resourcefulness and Zero Waste', detail: 'True creativity consists of seeing value in things others carelessly throw away.' }
    ],
    readingSections: [
      {
        heading: '1. The Feast of the Maharaja',
        body: 'The cook served the steaming new dish to the guests. Everyone was eager to know its name. The cook thought and thought; finally, a name came to his mind: Avial! It became famous throughout Kerala.',
        tip: 'Before throwing scraps away, think how vegetable peels can become compost or nutritious stock.'
      }
    ]
  }),
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 2,
    title: 'Teamwork (Jan Nigro) & Flying Together (Panchatantra)',
    tagline: 'Basketball passing, relay race baton, flock of geese, wise old bird, creeper ladder, and hunter’s net',
    summary: 'Celebrate cooperation and elder wisdom! Jan Nigro’s rhythmic poem "Teamwork" reminds us that nobody can shoot a basketball without passing, and relay races halt if no one hands over the baton. Coupled with the classic Panchatantra fable "Flying Together" where a flock of wild geese trapped in a hunter’s net escape by coordinating their wing beats together as one!',
    keyConcepts: [
      { title: 'Power of Collective Coordination', detail: 'Individually, one bird was powerless against the hunter; by flapping their wings simultaneously on signal, the entire flock lifted the heavy net into the sky.' },
      { title: 'Listening to Elder Wisdom', detail: 'The wise old goose warned the flock to destroy the tender creeper when it was small; neglecting his counsel allowed the hunter to climb the tree.' }
    ],
    readingSections: [
      {
        heading: '1. The Great Net Escape',
        body: '"Together we flap, together we fly!" At the wise bird’s signal, all geese flapped their wings at once, carrying the hunter’s net over trees and hills to safety.',
        tip: 'Small habits and tiny problems ignored today become insurmountable obstacles tomorrow.'
      }
    ]
  }),
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 3,
    title: 'My Shadow (Robert Louis Stevenson) & Robinson Crusoe’s Footprint',
    tagline: 'Childhood shadow antics, jumping into bed, Daniel Defoe, desert island loneliness, and single footprint in sand',
    summary: 'Experience magical wonder and thrilling suspense! Robert Louis Stevenson’s beloved poem "My Shadow" explores how our shadow mimics our jumps, stretches tall like an India-rubber ball, and goes to sleep before we do. Followed by Daniel Defoe’s suspenseful excerpt from Robinson Crusoe: living alone on a desolate island for 15 years, Crusoe is startled to discover a clear human footprint in the sand!',
    keyConcepts: [
      { title: 'Stevenson’s Playful Optical Rhyme', detail: 'Captures a child’s delight in optical shadow changes—stretching long in early morning and disappearing at noon.' },
      { title: 'Suspense and Psychology in Crusoe', detail: 'A single solitary footprint shatters Crusoe’s peaceful illusion of solitude, filling him with dread of unknown cannibals or shipwrecked strangers.' }
    ],
    readingSections: [
      {
        heading: '1. Crusoe’s Shock on the Beach',
        body: 'I stood like one thunderstruck! I listened, I looked around me; I could hear nothing, nor see anything. There was exactly the print of a foot: toes, heel, and every part of a foot. How it came there, I knew not.',
        tip: 'Daniel Defoe’s 1719 novel Robinson Crusoe is considered one of the first English adventure novels.'
      }
    ]
  }),
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 4,
    title: 'My Elder Brother (Bade Bhai Sahab by Munshi Premchand)',
    tagline: 'Studious elder brother, playful younger brother, kite flying, ninth grade exams, and emotional life wisdom',
    summary: 'Read Munshi Premchand’s poignant, humorous classic "Bade Bhai Sahab"! Studious elder brother spends hours poring over history and geometry textbooks, lecturing playful younger brother who prefers chasing butterflies and flying paper kites. Yet when exam results arrive, the younger brother tops the class while the elder brother fails! The elder brother gently explains that real wisdom comes not merely from bookish cramming, but from life experience and character.',
    keyConcepts: [
      { title: 'Bookish Knowledge vs Life Wisdom', detail: 'Memorizing facts does not equal maturity; our parents and elders guide us through moral wisdom and life experience even if they hold fewer academic degrees.' },
      { title: 'Brotherly Love and Protection', detail: 'The elder brother scolds not out of spite, but because he feels a protective responsibility as an older sibling to keep his brother on the right path.' }
    ],
    readingSections: [
      {
        heading: '1. The Chased Paper Kite',
        body: 'When a severed kite drifted overhead, the elder brother leaped up with his taller reach, caught the string, and ran towards the hostel with tears of affection, with the younger brother running happily behind him.',
        tip: 'Empathy, humility, and family bonding outshine academic boastfulness.'
      }
    ]
  }),
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 5,
    title: 'Rip Van Winkle (Washington Irving) & The Lazy Frog (Anonymous)',
    tagline: 'Catskill Mountains, bowling dwarf ghosts, twenty-year sleep, long white beard, and lazy frog Fred',
    summary: 'Embark on Washington Irving’s legendary fantasy! Kind-hearted but hopelessly lazy Rip Van Winkle escapes his scolding wife into the Catskill Mountains with his dog Wolf. Meeting mysterious dwarf men playing ninepins, he sips strange liquor and falls into a deep magical sleep. Waking up twenty years later, his musket is rusted, his dog is gone, his beard is a foot long, and his village has changed after the American Revolution! Paired with the comical poem "The Lazy Frog".',
    keyConcepts: [
      { title: 'Irving’s Folklore Fantasy', detail: 'Rip represents harmless good nature paralyzed by laziness; while he slept away two decades, the entire world advanced without him.' },
      { title: 'The Comic Irony of "The Lazy Frog"', detail: 'Frog Fred is so shamelessly lazy he won’t even open one eye when his hard-working mother calls or when a lady frog hops past.' }
    ],
    readingSections: [
      {
        heading: '1. Rip Returns to the Village',
        body: 'As Rip entered the village, children ran after him pointing at his long silver beard. The portrait of King George III on the inn sign was replaced by one of General George Washington! Rip had slept through a historic revolution.',
        tip: 'Time wasted can never be regained; active engagement with life is our greatest duty.'
      }
    ]
  }),
  buildChapter(5, 'c5-eng', 'English Language & Literature', {
    chapterNumber: 6,
    title: 'Class Discussion (Gervase Phinn) & The Talkative Barber (Arabian Nights)',
    tagline: 'Quiet Jane in class, chatterbox barber of Baghdad, six brothers’ defects, and Sultan’s ruined feast',
    summary: 'Explore quiet contemplation and hilarious garrulousness! Gervase Phinn’s sweet poem "Class Discussion" shows quiet Jane sitting peacefully while the rest of the class shouts and argues, reminding us that quiet people often have deep thoughts. Followed by a hilarious tale from the Arabian Nights: a Sultan with a half-shaved head is driven to near madness by an incessantly chattering Baghdad barber who won’t stop reciting horoscopes and family histories!',
    keyConcepts: [
      { title: 'Valuing Quiet Personalities', detail: 'Silence is not a weakness; introverted people observe, think deeply, and speak with measured wisdom when needed.' },
      { title: 'Humor of the Talkative Barber', detail: 'The barber continually protests that he is the quietest man in Baghdad while talking non-stop for three hours straight!' }
    ],
    readingSections: [
      {
        heading: '1. Jane’s Gentle Reply',
        body: '"There are many people in this world who are quiet, and it does not mean they have nothing to say," Jane answered softly when the teacher asked why she was quiet.',
        tip: 'A good conversationalist knows when to speak and when to listen.'
      }
    ]
  })
];

export const class5Curriculum: Subject[] = [
  {
    id: 'c5-math',
    name: 'Mathematics (Math-Magic)',
    code: 'MATH-501',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 12-chapter Class 5 syllabus: The Fish Tale, Shapes & Angles, How Many Squares, Parts & Wholes, Symmetry, Multiples & Factors, Patterns, Mapping Your Way, Boxes & Sketches, Tenths & Hundredths, Area & Boundary, and Smart Charts.',
    chapters: mathChapters
  },
  {
    id: 'c5-sci',
    name: 'Environmental Studies (EVS / Science)',
    code: 'EVS-501',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 12-chapter Class 5 syllabus: Super Senses, Snake Charmer, Tasting to Digesting, Mangoes Round the Year, Seeds & Seeds, Every Drop Counts, Experiments with Water, Mosquitoes & Malaria, Mountaineering, Golconda Fort, Space Station, and Ladakh.',
    chapters: scienceChapters
  },
  {
    id: 'c5-eng',
    name: 'English Language & Literature (Marigold)',
    code: 'ENG-501',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 5 literature anthology: Ice-Cream Man & Avial, Teamwork & Geese, My Shadow & Crusoe, Bade Bhai Sahab, Rip Van Winkle, and Class Discussion & Talkative Barber.',
    chapters: englishChapters
  }
];
