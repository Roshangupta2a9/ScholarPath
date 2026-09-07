import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Where to Look From (Perspectives & Mirror Halves)',
    tagline: 'Top view of car, side view of staircase, dot-grid rangoli, line symmetry, and mirror reflection',
    summary: 'View objects from different spatial angles! Notice how a staircase looks like steps from the side, but looks like a flat rectangle from the top; a car looks long from the side, but reveals its roof and windshield from above. Draw traditional Indian rangoli on dot grids. Test reflectional symmetry using small mirrors to check if a dotted line divides a shape into two identical mirror halves.',
    keyConcepts: [
      { title: 'Perspectives (Top, Side, Front)', detail: 'An object’s apparent 2D shape depends on the observer’s viewing angle (e.g., a pressure cooker from the side shows handle and body; from the top shows a circle and whistle).' },
      { title: 'Mirror Line Symmetry', detail: 'If you place a mirror along the dotted line and the reflection completes the exact picture, the picture has mirror symmetry.' }
    ],
    readingSections: [
      {
        heading: '1. The Painter and the Clever Girl',
        body: 'A painter painted only half a portrait for Amina and asked for full pay, saying "The other half is just the same, put a mirror to see it!" Amina paid him a ₹100 note and said, "Put a mirror next to it to see the other ₹100 note!"',
        tip: 'Letters like A, M, T, Y have vertical symmetry; B, C, D, E have horizontal symmetry.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Fun with Numbers (Centuries, Place Value & Skip Counting)',
    tagline: 'Cricket centuries (Dhoni 96 + 6 = 102), expanded form, hundreds place, and skip counting by 10s and 50s',
    summary: 'Score big with three-digit numbers! Follow exciting cricket matches: MS Dhoni on 96 runs hits a six to complete a spectacular century (102 runs)! Understand place value in three-digit numbers: Ones, Tens, and Hundreds (e.g. 256 = 2 Hundreds + 5 Tens + 6 Ones). Practice skip counting forward and backward by 10s (110, 120, 130...) and by 50s (200, 250, 300...).',
    keyConcepts: [
      { title: 'Century in Cricket', detail: 'A century means exactly 100 runs; a half-century is 50 runs.' },
      { title: 'Three-Digit Place Value', detail: 'In 374: 3 has place value 300, 7 has place value 70, and 4 has place value 4.' }
    ],
    readingSections: [
      {
        heading: '1. Collecting Tamarind Seeds',
        body: 'Radhika collected 24 seeds, Gauri collected 47, Sunil collected 38, and Indra collected 54. Adding and comparing seed counts teaches which child needs how many more to reach 50 or 100!',
        tip: '99 is the largest 2-digit number; adding 1 gives 100, the smallest 3-digit number.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Give and Take (Addition & Subtraction Strategies)',
    tagline: 'Gittu’s 100-room house, vertical jumps of 10, carrying in addition, and breaking numbers into tens/ones',
    summary: 'Master mental addition and subtraction! Navigate Gittu the ant’s 100-room house: jumping 1 step up adds 10 rooms (from room 28, jump up to 38, then 48); jumping left or right adds or subtracts 1. Break numbers into tens and ones for lightning-fast mental math (e.g., 37 + 22 = (30 + 7) + (20 + 2) = 50 + 9 = 59). Learn carrying in columnar addition.',
    keyConcepts: [
      { title: 'Jumping by Tens on a 100-Grid', detail: 'Moving vertically one row up increases a number by 10; moving one row down decreases it by 10.' },
      { title: 'Partitioning Strategy', detail: 'Decomposing numbers into friendly tens and units simplifies arithmetic without paper and pencil.' }
    ],
    readingSections: [
      {
        heading: '1. The Story of the Baby Deer',
        body: 'A baby deer lost in the jungle was sheltered by an old rabbit. In the morning, they counted: 27 rabbits, 48 deer, 124 birds, and 38 squirrels. Adding them verified that the cunning fox had not eaten any animal!',
        tip: 'Check your subtraction by adding the answer to the smaller number.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Long and Short (Measuring with Rulers & Strings)',
    tagline: 'Centimeter scale (15 cm), measuring ropes and threads, and estimating meters and kilometers',
    summary: 'Measure the physical world! Learn how to use a standard 15 cm school ruler: always align the starting edge at mark 0, not at the end of the plastic ruler. Measure pencil lengths, erasers, nail widths, and leaf veins in centimeters (cm). Measure longer lengths in meters (1 m = 100 cm) using tailor measuring tapes. Estimate interstate travel in kilometers.',
    keyConcepts: [
      { title: 'Ruler Measurement Rule', detail: 'Place the object’s starting point at 0 on the ruler scale, and read the mark at the object’s ending tip.' },
      { title: 'Metric Units (cm, m, km)', detail: 'Centimeters (cm) for small items (pencil, book); Meters (m) for rooms, cloth, sarees; Kilometers (km) for distance between cities.' }
    ],
    readingSections: [
      {
        heading: '1. Gibli the Ant and the Shortest Grain Road',
        body: 'Gibli the ant wants to reach sugar grains across four roads (Road A, B, C, D). Measuring each path with a string shows that a straight line is always the shortest distance between two points!',
        tip: 'A standard adult saree is about 5 to 6 meters long.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Shapes and Designs (Tangrams & Edge Counting)',
    tagline: 'Curved vs straight edges, corners (vertices), 5-piece and 7-piece Tangram puzzles, and floor tile tessellations',
    summary: 'Explore 2D geometry and ancient Chinese puzzles! Differentiate straight edges (table, book) which form corners (vertices) from curved edges (ball, wheel) which have zero corners. Assemble Chinese Tangram puzzles (5-piece and 7-piece) by fitting triangles, squares, and parallelograms together to form cats, birds, and boats. Examine repeating floor tile patterns.',
    keyConcepts: [
      { title: 'Edges and Corners', detail: 'Shapes with straight edges (squares, rectangles, triangles) have sharp corners; circular curved shapes have no corners.' },
      { title: 'The Ancient 7-Piece Tangram', detail: 'Consists of 5 triangles (two large, one medium, two small), 1 square, and 1 parallelogram, which can be rearranged into hundreds of figures.' }
    ],
    readingSections: [
      {
        heading: '1. Blindfolded Corner Touch Game',
        body: 'In a game where children stand around a rectangular table, the child in the center claps until stopping. Children caught along straight edges are safe, but anyone standing at a corner must touch it!',
        tip: 'Floor tiles must fit together without gaps or overlapping to create a seamless floor.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Time Goes On... (Clocks, Calendars & Birth Certificates)',
    tagline: 'Seconds, minutes, hours, days, months, reading wall calendars, and reading official birth certificates',
    summary: 'Track the flow of time! Classify events by duration: blinking an eye (seconds), boiling milk or taking a bath (minutes), weaving a saree (days), ripening fruit (months), and growing taller (years). Read clock faces: hour hand (shorter, moves slowly) and minute hand (longer, moves 12 times faster). Read wall calendars (months with 30, 31, or 28/29 days) and decode details on official birth certificates.',
    keyConcepts: [
      { title: 'Clock Hands Speed', detail: 'The minute hand completes a full circle (60 minutes) while the hour hand moves from one number to the next (1 hour).' },
      { title: 'Reading a Birth Certificate', detail: 'Identifies Name, Sex, Date of Birth (both in digits and words), Place of Birth, Parents’ Names, and Registration Number.' }
    ],
    readingSections: [
      {
        heading: '1. Days in a Month Knuckle Trick',
        body: 'Make a fist and count across knuckles and valleys from January: knuckles have 31 days (Jan, Mar, May, Jul, Aug, Oct, Dec); valleys between knuckles have 30 days (or 28/29 for February)!',
        tip: 'There are 24 hours in a full day and night, 7 days in a week, and 365 days in a regular year.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Who is Heavier? (Balancing Weights & Kilograms)',
    tagline: 'Shabnam’s groundnuts and jaggery, equal weights but different volumes, pan balance, and double weight sweets',
    summary: 'Compare mass using balance scales! Shabnam bought 1 kg of jaggery (gur) and 1 kg of groundnuts. The groundnut bag looked much bigger than the jaggery bag, but both weighed the exact same 1 kilogram on the balance scale! Practice balancing pan scales: heavier pan tilts down; lighter pan rises up. Solve Kunjamma’s parent tradition: distributing double her body weight in sweets to poor children on her birthday.',
    keyConcepts: [
      { title: 'Mass vs Volume', detail: 'Two objects can have identical weight (1 kg) while occupying very different volumes depending on their material density.' },
      { title: 'Pan Balance Equilibrium', detail: 'When both pans hold equal mass, the central pointer points vertically straight and the beam is completely horizontal.' }
    ],
    readingSections: [
      {
        heading: '1. Kunjamma’s Birthday Sweet Distribution',
        body: 'When Kunjamma was born, she weighed 3 kg, so her parents distributed 3 × 2 = 6 kg of sweets. Today at age 9 she weighs 28 kg, so her family distributes 28 × 2 = 56 kg of sweets to celebrate!',
        tip: 'Items sold by weight use standard metal weights: 100g, 200g, 500g, 1kg, 2kg, 5kg.'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'How Many Times? (Multiplication Wheels & Grouping)',
    tagline: 'Repeated addition, counting legs of 5 goats (5×4 = 20), multiplication flower wheels, and box method',
    summary: 'Multiply numbers through repeated addition! Count legs of animals: 5 goats have 4 + 4 + 4 + 4 + 4 = 5 × 4 = 20 legs! Build multiplication flower wheels for tables of 2, 3, 4, 5, and 10. Solve 2-digit multiplication using the intuitive box method: 23 × 15 = (20 + 3) × (10 + 5) = 200 + 100 + 30 + 15 = 345.',
    keyConcepts: [
      { title: 'Multiplication is Repeated Addition', detail: 'Adding 4 three times (4 + 4 + 4) is written as 3 × 4 = 12.' },
      { title: 'Multiplication by Zero and One', detail: 'Any number multiplied by 0 equals 0 (n × 0 = 0); any number multiplied by 1 equals itself (n × 1 = n).' }
    ],
    readingSections: [
      {
        heading: '1. Multiplication on Cross Sticks',
        body: 'Tarva lays 2 horizontal sticks and crosses them with 3 vertical sticks. Counting the 6 intersection crossing points gives the answer to 2 × 3 = 6! Geometry visualizes multiplication.',
        tip: 'To multiply a number by 10, simply append a zero to the right (e.g., 27 × 10 = 270).'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Can We Share? (Division as Equal Distribution)',
    tagline: 'Caterpillars on leaves, 28 laddoos among 4 plates, division sign (÷), and jumping squirrels',
    summary: 'Share items equally through division! Distribute 28 laddoos equally among 4 plates: each plate gets 28 ÷ 4 = 7 laddoos. Watch jumping squirrels take 3-step jumps to reach 27 (27 ÷ 3 = 9 jumps). Understand division as repeated subtraction: 12 ÷ 3 means subtracting 3 four times until zero remains.',
    keyConcepts: [
      { title: 'Division is Equal Sharing', detail: 'Distributing a total collection into equal groups; written with the division symbol ÷.' },
      { title: 'Division as Inverse of Multiplication', detail: 'Since 4 × 7 = 28, it follows that 28 ÷ 4 = 7 and 28 ÷ 7 = 4.' }
    ],
    readingSections: [
      {
        heading: '1. Sharing Bananas Among Monkeys',
        body: 'If there are 6 bananas and 2 monkeys, each monkey gets 6 ÷ 2 = 3 bananas. If there are 60 bananas and 2 monkeys, each gets 30! Division ensures fairness.',
        tip: 'Any number divided by itself equals 1 (e.g., 8 ÷ 8 = 1); divided by 1 equals itself (8 ÷ 1 = 8).'
      }
    ]
  }),
  buildChapter(3, 'c3-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Rupees and Paise (Currency, Bills & Change Return)',
    tagline: 'Indian coins (₹1, ₹2, ₹5, ₹10), notes (₹10, ₹20, ₹50, ₹100, ₹500), self-service toy shop bills, and change calculation',
    summary: 'Manage money with confidence! Identify Indian coins (50 paise, ₹1, ₹2, ₹5, ₹10, ₹20) and paper banknotes. Practice making bills at a self-service toy shop: buying a toy car (₹15), a rubber ball (₹7), and a glass of lemon juice (₹10.50). Add up totals and calculate change returned from a ₹50 or ₹100 note.',
    keyConcepts: [
      { title: 'Rupees to Paise', detail: '1 Rupee = 100 Paise; ₹2.50 means 2 Rupees and 50 Paise.' },
      { title: 'Preparing Cash Bills', detail: 'Write item name, unit rate, quantity, item amount, and sum up the grand total neatly.' }
    ],
    readingSections: [
      {
        heading: '1. Railway Ticket Booking Fare',
        body: 'A train ticket from New Jalpaiguri to Alipurduar costs ₹28.00. If two tickets are booked and a ₹100 note is handed over: Total Cost = 28 × 2 = ₹56.00; Change Returned = 100 - 56 = ₹44.00.',
        tip: 'The official currency symbol for the Indian Rupee is ₹, designed by D. Udaya Kumar in 2010.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 1,
    title: 'Poonam’s Day Out (Animal Diversity & Habitats)',
    tagline: 'Poonam resting under tree, crows, squirrels, monkeys, pond animals (frogs, tortoises, egrets), and animal locomotion',
    summary: 'Observe the animal kingdom right in your backyard! Poonam rests under a backyard neem tree and spots pigeons, squirrels, crows, monkeys, and butterflies in the branches. At the village pond, she spots goats, frogs, tortoises, egrets, and buffaloes. Classify animals by movement: flying with wings, crawling on bellies, hopping with strong legs, or swimming with fins.',
    keyConcepts: [
      { title: 'Animal Movement Diversity', detail: 'Birds fly and walk; snakes crawl; frogs and kangaroos hop; fish swim using fins and tails.' },
      { title: 'Animal Habitats', detail: 'Arboreal (live in trees), Terrestrial (live on land), Aquatic (live in water), and Amphibian (live both on land and in water).' }
    ],
    readingSections: [
      {
        heading: '1. Fingers and Thumb Animal Paintings',
        body: 'Dip your thumb and fingertips in water colors and press them on paper: with a few pen strokes, thumbprints transform into running dogs, fluttering butterflies, and peacocks!',
        tip: 'Frogs have long sticky tongues that flick out in milliseconds to capture flying insects.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 2,
    title: 'The Plant Fairy (Leaves, Trunks & Bark Rubbing)',
    tagline: 'Michael as plant fairy, leaf colors (green, yellow, purple), margins (round, serrated), and tree bark rubbing',
    summary: 'Play botanical games in the garden! Ammu and Michael play "The Plant Fairy", touching marigold bushes, neem trees, and jasmine creepers. Collect fallen leaves to discover diverse shapes (round, triangular, elongated), colors (green, purple, yellow), and margins (smooth, serrated like saw teeth). Create bark rubbings by placing paper against tree trunks and rubbing gently with wax crayons.',
    keyConcepts: [
      { title: 'Leaf Margins', detail: 'Smooth margins (banana, mango), serrated/toothed margins (rose, neem), and wavy margins (peepal).' },
      { title: 'Bark Rubbing Texture', detail: 'Rough, cracked bark (neem, banyan) creates bold crayon patterns; smooth bark (eucalyptus) leaves light impressions.' }
    ],
    readingSections: [
      {
        heading: '1. Traditional Dry Leaf Art by Vishnu Chinchalkar',
        body: 'Renowned artist Vishnu Chinchalkar from Indore created magnificent pictures of birds, deer, and historical heroes entirely from dry fallen leaves and twigs glued onto paper!',
        tip: 'Never pluck fresh green leaves from living plants; collect only dry fallen leaves from the ground.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 3,
    title: 'Water O’ Water! (Sources, States & Conservation)',
    tagline: 'Poem on water, liquid, ice, vapor, natural sources (lakes, waterfalls, tubewells), and saving water',
    summary: 'Celebrate the elixir of life! Read Shri Prasad’s poem "Water": water quenches burning thirst, flows in laughing waterfalls, roars in ocean waves, and shines as white snow. Learn three states of water: Liquid water, Solid ice, and Gaseous water vapor. Identify freshwater sources: rain, springs, ponds, rivers, and deep tubewells. Learn why every drop of water must be preserved without waste.',
    keyConcepts: [
      { title: 'Three Physical States of Water', detail: 'Ice (solid) melts into water (liquid); water boils into steam/vapor (gas); vapor cools and condenses back into liquid water droplets.' },
      { title: 'Water is Essential for All Life', detail: 'Neither plants, animals, nor human beings can survive more than a few days without clean water.' }
    ],
    readingSections: [
      {
        heading: '1. Floods vs Droughts',
        body: 'Excessive torrential rainfall causes catastrophic river floods that submerge homes and crops; complete absence of rain causes devastating droughts where soil cracks and crops wither.',
        tip: 'Turning off the water tap while brushing your teeth saves up to 6 liters of water every time.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 4,
    title: 'Foods We Eat (Regional Dishes & Nutrition)',
    tagline: 'Vipul’s family meal, soft dal for dadi, bhutta, regional foods: Ling-hu-fen (Hong Kong), Dosa, and Tapioca with curry',
    summary: 'Explore culinary traditions across India and the world! Join Vipul’s family: grandmother needs her dal soaked with crushed chapatis because her teeth are weak, while baby Chhutki drinks only mother’s milk. Compare regional diets: rice and fish in Kerala with tapioca, wheat rotis in Punjab, steamed momos in Sikkim, and exotic dishes like snake soup (Ling-hu-fen) eaten in Hong Kong.',
    keyConcepts: [
      { title: 'Age and Food Suitability', detail: 'Infants need mother’s milk; active children need energy-giving carbs and bodybuilding proteins; elderly people need soft, easily digestible meals.' },
      { title: 'Geography Determines Diet', detail: 'People eat whatever crops grow easily and abundantly in their local climate (rice in coastal plains, wheat and bajra in dry northern plains).' }
    ],
    readingSections: [
      {
        heading: '1. Juniper’s Story from Kashmir',
        body: 'Juniper loves fish cooked in mustard oil in Kashmir. When she visited Goa, she found the sea fish tasted very different because it was cooked in coconut oil! Cooking oil changes food flavor completely.',
        tip: 'Eat fresh fruits and home-cooked meals instead of ultra-processed junk food.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 5,
    title: 'Saying Without Speaking (Sign Language & Expressions)',
    tagline: 'Dumb charades, speech/hearing impairment, sign language, facial expressions, and classical dance mudras',
    summary: 'Communicate beyond spoken words! Play "Dumb Charades" acting out stories without talking. Learn how children with speech and hearing impairments communicate through expressive Indian Sign Language (ISL). Notice how faces reflect emotions: joyful smiles, wide-eyed fear, furrowed angry brows, and sad tears. Learn hand gestures (Mudras) and facial expressions (Bhavas) in Indian classical dance (Bharatanatyam, Kathakali).',
    keyConcepts: [
      { title: 'Sign Language Communication', detail: 'A rich visual language using hand configurations, finger movements, and facial expressions to express complex thoughts.' },
      { title: 'Dance Mudras and Bhavas', detail: 'Hand gestures (mudras) like Mukula (bud) or Mayura (peacock) combined with eye and eyebrow movements convey narrative emotion in classical dance.' }
    ],
    readingSections: [
      {
        heading: '1. The Eyes are the Window to the Soul',
        body: 'Even before small babies learn to speak words, they understand everything through smiling eyes, loving voices, and affectionate touches from their parents.',
        tip: 'Be respectful, patient, and welcoming when communicating with persons with disabilities.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 6,
    title: 'Flying High (Bird Beaks, Feathers & Flight)',
    tagline: 'National bird peacock, curved beak woodpecker, sharp claws of eagle, vulture scavenger, and feather warmth',
    summary: 'Soar through the sky with feathered friends! Identify birds by their calls and plumage: the magnificent Peacock with crowned iridescent feathers, the Woodpecker tapping tree trunks for grubs, the Vulture scavenging dead animals to keep nature clean, and the Owl turning its head almost all the way around! Analyze bird beaks: hooked for tearing meat (hawks), short and hard for cracking seeds (sparrows), and long and thin for sucking flower nectar (sunbirds).',
    keyConcepts: [
      { title: 'Beak Adaptations', detail: 'A bird’s beak shape is specialized for the food it eats: cracking seeds, tearing meat, drilling wood, or filtering water weeds.' },
      { title: 'Feathers and Body Heat', detail: 'Feathers help birds fly and keep their bodies warm in cold winters; birds molt and grow new feathers every year.' }
    ],
    readingSections: [
      {
        heading: '1. The Owl That Can Rotate Its Head',
        body: 'Owls cannot move their eyeballs inside their eye sockets! To compensate, an owl can rotate its neck up to 270 degrees to look directly behind without moving its body.',
        tip: 'Leave a bowl of clean water on your balcony or roof for thirsty birds during hot summer days.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 7,
    title: 'Sharing Our Feelings (Braille Script & Louis Braille)',
    tagline: 'Seema’s blind Dadi, white cane, Louis Braille’s 6 raised dots, and empathy for visually impaired people',
    summary: 'Discover sensory empathy and accessibility! Seema loves sharing school news with her blind grandmother and Ravi bhaiya, a visually impaired college professor who travels everywhere with a white cane and reads audiobooks. Learn about Braille Script: invented by French boy Louis Braille in 1824, where letters and numbers are embossed as patterns of 6 raised dots on thick paper, read by running fingertips over the dots.',
    keyConcepts: [
      { title: 'The Six Raised Dots of Braille', detail: 'Braille uses a 2×3 matrix of raised dots; combinations of dots represent alphabets, punctuation, and musical notes.' },
      { title: 'Sensory Compensation', detail: 'People who cannot see develop exceptionally sharp senses of hearing, touch, and smell to navigate their surroundings.' }
    ],
    readingSections: [
      {
        heading: '1. Louis Braille’s Determination',
        body: 'Louis Braille lost his eyesight at age three in an accident in his father’s workshop. Determined to read, he devised a code of raised dots that emancipated blind people worldwide, allowing them to read literature, science, and music.',
        tip: 'Always ask politely before offering assistance to someone walking with a white cane.'
      }
    ]
  }),
  buildChapter(3, 'c3-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 8,
    title: 'The Story of Food (Medicinal Plants & Family Roles)',
    tagline: 'Venu and Rani’s family chores, equality in domestic work, medicinal herbs: tulsi, turmeric, ginger, ajwain, and clove',
    summary: 'Explore family cooperation and traditional herbal remedies! Compare Venu’s family (where father and mother cook together, clean together, and read newspapers together) with Rani’s family (where women do all domestic chores while men eat first), promoting gender equality at home. Open grandmother’s home medicine chest: turmeric milk for wounds, tulsi and ginger tea for colds, ajwain seeds for stomach aches, and clove oil for toothaches.',
    keyConcepts: [
      { title: 'Gender Equality in Household Chores', detail: 'Cooking, washing dishes, and sweeping are shared family responsibilities, not the sole burden of women.' },
      { title: 'Traditional Kitchen Pharmacy', detail: 'Turmeric (antiseptic healing), Tulsi & Ginger (cough and cold), Clove (toothache relief), Ajwain & Hing (digestive gas relief).' }
    ],
    readingSections: [
      {
        heading: '1. What Parts of Plants Do We Eat?',
        body: 'We eat roots of carrots and radishes; stems of potatoes and ginger; leaves of spinach and mint; seeds of rice, wheat, and peas; and flowers of cauliflower and kachnar!',
        tip: 'Natural herbs heal common ailments safely without harsh chemical side effects.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(3, 'c3-eng', 'English Language & Literature', {
    chapterNumber: 1,
    title: 'Good Morning (Fannie R. Buchanan) & The Magic Garden',
    tagline: 'Greeting the sky, sun, winds, and grass, and school children caring for talking sunflowers and roses',
    summary: 'Awaken with poetic wonder and step into a magical school garden! Fannie R. Buchanan’s joyful poem "Good Morning" greets the morning sky, the golden sun, little creeping grass, and buzzing bees. Coupled with the beloved story "The Magic Garden": sunflowers, roses, marigolds, and poppies love school children because they water their thirsty roots and dig the soil gently, while fairies sing songs that only children can hear!',
    keyConcepts: [
      { title: 'Loving Stewardship of Nature', detail: 'Plants thrive and bloom beautifully when tended with gentle care, water, and affection by children.' },
      { title: 'Poetic Personification', detail: 'Flowers talk, laugh, and dance in the golden sunshine, celebrating innocence and youthful wonder.' }
    ],
    readingSections: [
      {
        heading: '1. The Fairies’ Secret Songs',
        body: 'The fairies had dresses made of flower petals and wings made of sunshine! After a while, they came out dancing and singing sweet songs which only the school children could hear.',
        tip: 'Spending time in green school gardens refreshes the mind and fosters appreciation for living plants.'
      }
    ]
  }),
  buildChapter(3, 'c3-eng', 'English Language & Literature', {
    chapterNumber: 2,
    title: 'Bird Talk (Aileen Fisher) & Nina and the Baby Sparrows',
    tagline: 'Robins and jays gossiping about funny humans without feathers, and Nina protecting baby sparrows in her room',
    summary: 'Hear the hilarious opinions of birds and celebrate tender empathy! Aileen Fisher’s witty poem "Bird Talk" shows a Robin and a Jay sitting in a tree chuckling over how strange human beings are: they have no feathers, they cannot sit on wires, and they cannot fly! Followed by Pratibha Nath’s touching story "Nina and the Baby Sparrows": Nina refuses to buy a new wedding dress because leaving the house would lock up the baby sparrows nesting on her bookshelf!',
    keyConcepts: [
      { title: 'Empathy for Helpless Wildlife', detail: 'Nina’s kind heart prioritizes the feeding and survival of baby birds over festive party shopping.' },
      { title: 'Bird Talk Humorous Perspective', detail: 'Looking at human beings through the eyes of wild birds exposes funny human limitations.' }
    ],
    readingSections: [
      {
        heading: '1. Nina’s Mother’s Brilliant Idea',
        body: '"We will leave the room window open so Papa and Mama sparrow can fly in and out freely to feed their little babies!" suggested mother. Nina clapped her hands with joy.',
        tip: 'Respect bird nests; never touch or disturb eggs or fragile fledglings.'
      }
    ]
  }),
  buildChapter(3, 'c3-eng', 'English Language & Literature', {
    chapterNumber: 3,
    title: 'Little by Little & The Enormous Turnip (Russian Folktale)',
    tagline: 'Tiny acorn growing into giant forest oak, huge turnip, teamwork of old man, old woman, boy, and girl',
    summary: 'Witness the power of persistent growth and unified teamwork! The poem "Little by Little" follows a tiny hidden acorn beneath the soil sending roots downward and leaves upward year by year until it becomes the mighty king of the forest. Paired with the classic Russian folktale "The Enormous Turnip": an old man plants a turnip that grows so gigantic he cannot pull it up alone; with the combined pulling strength of the old woman, a boy, and a girl, up comes the enormous turnip!',
    keyConcepts: [
      { title: 'Incremental Daily Progress', detail: 'Just as a mighty oak tree begins with a single tiny acorn, great mastery and knowledge grow little by little every single day.' },
      { title: 'Strength in Cooperation', detail: 'When multiple people unite their efforts toward a single goal, they can accomplish feats impossible for one person alone.' }
    ],
    readingSections: [
      {
        heading: '1. Up Came the Enormous Turnip!',
        body: 'They pulled and they pulled together with all their might! Heave-ho! Pop! Out of the ground came the giant white turnip! "We will help you eat it," laughed the children.',
        tip: 'Never give up when a task is hard; ask friends and family to join hands with you.'
      }
    ]
  }),
  buildChapter(3, 'c3-eng', 'English Language & Literature', {
    chapterNumber: 4,
    title: 'The Balloon Man (Rose Fyleman) & The Yellow Butterfly',
    tagline: 'Market square colorful balloons (red, purple, blue, green), Sonu chasing yellow butterfly in garden',
    summary: 'Delight in vivid colors and gentle animal protection! Rose Fyleman’s charming poem "The Balloon Man" celebrates the vendor standing in the market square with bunches of red, purple, blue, and green balloons tugging on strings like shining jewels in the sun. Followed by "The Yellow Butterfly": Sonu spots a gorgeous yellow butterfly fluttering in his garden. When it flies into a hungry spider’s sticky web, Sonu gently rescues it and sets it free into the warm sky!',
    keyConcepts: [
      { title: 'Compassionate Protection of Living Creatures', detail: 'Loving nature means letting creatures fly free and unconfined rather than trapping them in bottles or cages.' },
      { title: 'Vivid Visual Color Imagery', detail: 'Poems that celebrate colors spark creative imagination and artistic visual appreciation.' }
    ],
    readingSections: [
      {
        heading: '1. Fly Away, Yellow Butterfly!',
        body: 'Sonu reached out and gently scooped the little butterfly out of the spider’s web. It fluttered its golden wings and flew over the roses, over the peach tree, free and happy once more!',
        tip: 'Butterflies are essential pollinators that help flowers produce seeds and fruits.'
      }
    ]
  }),
  buildChapter(3, 'c3-eng', 'English Language & Literature', {
    chapterNumber: 5,
    title: 'Trains (James S. Tippett) & The Story of the Road',
    tagline: 'Over mountains, plains, rivers, freight cars carrying precious loads, and early morning waking street',
    summary: 'Travel across scenic landscapes and observe bustling street life! James S. Tippett’s rhythmic poem "Trains" follows passenger and freight trains rushing over mountains, wide rivers, and fertile plains day and night without stopping. Coupled with "The Story of the Road": at dawn, the road is quiet and asleep; slowly, chirping sparrows, the newspaper boy on a bicycle, vegetable vendors crying peas and cabbages, and chattering schoolchildren bring the street to vibrant life!',
    keyConcepts: [
      { title: 'The Pulse of Transportation', detail: 'Trains carry passengers and essential cargo (food grains, coal, machinery) across thousands of miles uniting a vast nation.' },
      { title: 'Sensory Observation in Writing', detail: 'Noticing the sounds, smells, and sights of everyday streets makes for rich descriptive storytelling.' }
    ],
    readingSections: [
      {
        heading: '1. The Awakening Road',
        body: '"Caw, caw, caw!" says the crow. "Tring-a-ling!" rings the bicycle bell. "Wake up, wake up!" cries the sparrow. But the road is already wide awake and ready for another busy day!',
        tip: 'Look left, right, and left again before crossing any street safely.'
      }
    ]
  })
];

export const class3Curriculum: Subject[] = [
  {
    id: 'c3-math',
    name: 'Mathematics (Math-Magic)',
    code: 'MATH-301',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 10-chapter Class 3 syllabus: Where to Look From, Fun with Numbers, Give & Take, Long & Short, Shapes & Designs, Time Goes On, Who is Heavier, How Many Times, Can We Share, and Rupees & Paise.',
    chapters: mathChapters
  },
  {
    id: 'c3-sci',
    name: 'Environmental Studies (EVS / Science)',
    code: 'EVS-301',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete Class 3 syllabus: Poonam’s Day Out, The Plant Fairy, Water O Water, Foods We Eat, Saying Without Speaking, Flying High, Sharing Our Feelings, and The Story of Food.',
    chapters: scienceChapters
  },
  {
    id: 'c3-eng',
    name: 'English Language & Literature (Marigold)',
    code: 'ENG-301',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 3 literature anthology: Good Morning & Magic Garden, Bird Talk & Nina, Little by Little & Enormous Turnip, The Balloon Man & Yellow Butterfly, and Trains & Story of the Road.',
    chapters: englishChapters
  }
];
