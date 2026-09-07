import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Building with Bricks (Patterns & Spatial Geometry)',
    tagline: 'Jagriti school Murshidabad, arched windows (jharokhas), jaali screens, brick kilns, and brick dimensions',
    summary: 'Explore architectural patterns in brick masonry! Discover traditional brick designs from Jagriti School in Murshidabad: floor patterns, circular arrangements, arched jharokha windows, and delicate lattice jaali screens. Measure 3D brick faces (length, width, height) and solve brick kiln transport and purchasing calculations.',
    keyConcepts: [
      { title: '3D Brick Faces', detail: 'A standard brick has 6 rectangular faces, 12 straight edges, and 8 sharp corner vertices.' },
      { title: 'Arches and Jaali Patterns', detail: 'Interlocking bricks in offset layers creates strong structural arches that bear heavy roof loads without collapsing.' }
    ],
    readingSections: [
      {
        heading: '1. Brick Kiln Math',
        body: 'Muniya and Zainab want to build a brick wall 1 meter high. If each brick is 10 cm high, how many bricks stacked in a column are needed? 100 cm ÷ 10 cm = 10 bricks!',
        tip: 'Clay bricks are molded, dried in the sun, and baked in high-temperature underground kilns.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Long and Short (Metric Lengths & Marathon Distances)',
    tagline: 'Centimeters, meters, kilometers, height charts, world high-jump records, and 42 km marathons',
    summary: 'Master metric length measurements! Compare heights of classmates using meter tape rules (1 meter = 100 cm). Convert between millimeters, centimeters, meters, and kilometers (1 km = 1000 m). Solve real sports challenges: world high jump records (Javier Sotomayor 2.45 m) and official 42.195 km marathon track laps.',
    keyConcepts: [
      { title: 'Metric Conversion Hierarchy', detail: '10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km.' },
      { title: 'Stadium Track Laps for Marathon', detail: 'A standard running track is 400 meters. To complete a 40 km race on a track requires 40,000 ÷ 400 = 100 laps!' }
    ],
    readingSections: [
      {
        heading: '1. The Tale of Akbar and Birbal’s Line',
        body: 'Emperor Akbar drew a line on the floor and challenged Birbal: "Make my line shorter without erasing any part of it!" Birbal smiled, drew a longer line right beside it, instantly making Akbar’s line the shorter one!',
        tip: 'Length is relative—something is only long or short in comparison to another object.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'A Trip to Bhopal (Travel Estimates & Time Schedules)',
    tagline: 'Bus seating, Narmada bridge height, Bhimbetka 10,000-year-old rock paintings, boat ride tickets, and diesel pumps',
    summary: 'Go on an exciting school excursion from Hoshangabad to Bhopal! Calculate bus passenger seating (210 children in 50-seater buses). Estimate bridge clearances over River Narmada during dry season vs monsoon floods. Count prehistoric deer and bison in 10,000-year-old Bhimbetka cave paintings, and manage boat ticket budgets at the Upper Lake.',
    keyConcepts: [
      { title: 'Division with Remainders in Seating', detail: '210 children ÷ 50 seats = 4 full buses with 10 children remaining; 5 mini-buses of 35 seats are needed instead.' },
      { title: 'Travel Budgeting', detail: 'Calculating combined costs of pedal boats (₹15 for 30 mins) and motor boats (₹25 for 20 mins) for groups.' }
    ],
    readingSections: [
      {
        heading: '1. Fueling at the Petrol Pump',
        body: 'Each bus needed 100 liters of diesel at ₹35 per liter: 100 × 35 = ₹3,500 per bus. If filling one bus took 15 minutes, four buses took 1 full hour!',
        tip: 'Mental math estimation helps double-check cash transactions quickly.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Tick-Tick-Tick (Clocks, Calendars & Expiry Dates)',
    tagline: 'Hour/minute hands, 12-hour vs 24-hour railway time, timeline of puppy growth, and food expiry dates',
    summary: 'Master the measurement of time! Track minute hand rotations: 60 minutes = 1 hour, 1 minute = 60 seconds. Read 24-hour railway timetables (13:00 is 1:00 PM; 20:30 is 8:30 PM). Create life event timelines (Muniya’s first tooth, walking, talking). Read manufacturing and expiry dates on butter, cough syrup, and biscuit packets.',
    keyConcepts: [
      { title: '24-Hour Military/Railway Time', detail: 'Hours after 12 noon are expressed by adding 12 (e.g., 5:30 PM is written as 17:30 hours; midnight is 00:00 or 24:00).' },
      { title: 'Reading Expiry Dates', detail: 'Mfg Date 07/24 and Best Before 180 days means product expires in January 2025; expired medicines must never be consumed.' }
    ],
    readingSections: [
      {
        heading: '1. Puppy Growth Timeline',
        body: 'Appu’s puppy opened its eyes after 2 weeks, got its first teeth after 3 weeks, walked after 4 weeks, and became a full-grown dog having puppies of its own in just 1 year!',
        tip: 'A leap year has 366 days and occurs every 4 years when February has 29 days.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'The Way The World Looks (Spatial Views & Map Perspectives)',
    tagline: 'Gappu’s hot-air balloon ride, top view vs side view, aerial park layout, and dice perspective',
    summary: 'Transform your perspective through spatial visualization! Fly in a hot air balloon with brave mouse Gappu: from high above, the bed, chairs, and books look like flat geometric shapes, while the cat chasing him looks like a tiny ball of fur! Contrast overhead top views (blueprints) with side profile views. Navigate park maps to locate gates, flowerbeds, and benches.',
    keyConcepts: [
      { title: 'Top View vs Side View', detail: 'A cup looks like a circle from top view, but shows a cylindrical body and handle from side view.' },
      { title: 'Funnel Perspective', detail: 'Objects look wide and big at the end closest to your eyes, and look narrow and small at the distant end (e.g. railway tracks converging).' }
    ],
    readingSections: [
      {
        heading: '1. Gappu’s Balloon Adventure',
        body: '"When I ran around on the floor, everything looked so big! But from up here in the balloon, the entire house looks like a doll’s toy!" discovered Gappu.',
        tip: 'Architects draw top views (floor plans) so builders know the exact position of walls and rooms.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'The Junk Seller (Currency Arithmetic & Loan Interest)',
    tagline: 'Kiran’s scrap shop in Patna, rate lists, newspaper/plastic/brass scrap, bank loans, and daily profit',
    summary: 'Learn business arithmetic with Kiran, an inspiring woman junk seller in Patna! Calculate scrap weights and earnings using rate lists: 1 kg newspaper = ₹5, 1 kg iron = ₹12, 1 kg brass = ₹180. Calculate simple loan repayments to banks vs local moneylenders. Add currency denominations (₹100, ₹50, ₹20 notes) to calculate daily profits.',
    keyConcepts: [
      { title: 'Profit and Loss in Trade', detail: 'Profit = Selling Price - Cost Price (SP - CP); if Kiran buys junk for ₹841 and sells it for ₹999, her profit is ₹999 - ₹841 = ₹158.' },
      { title: 'Bank Loan vs Moneylender', detail: 'Banks offer regulated low interest rates; private moneylenders often charge exploitative interest, costing double the borrowed principal.' }
    ],
    readingSections: [
      {
        heading: '1. Smart Mental Multiplication',
        body: 'To multiply 12 × 50 mentally: multiply 12 × 5 = 60, then append a zero to get 600! Breaking numbers into tens and units speeds up commercial transactions.',
        tip: 'Indian currency banknotes display the value in 15 different regional Indian languages on the reverse.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Jugs and Mugs (Liquid Volume, Liters & Milliliters)',
    tagline: 'Bannu and Banno’s wedding kheer, 1 Liter = 1000 mL, measuring droppers, and water tank capacities',
    summary: 'Measure liquid capacity with ease! Celebrate Bannu and Banno’s rabbit wedding feast: 50 frogs drink 100 mL of sweet kheer each (50 × 100 mL = 5000 mL = 5 Liters!). Master conversion: 1 Liter = 1000 milliliters (mL). Determine medicine dosages: 5 mL syrup spoons, 1 mL eye droppers, and 500 L overhead household water storage tanks.',
    keyConcepts: [
      { title: 'Liters and Milliliters Conversion', detail: '1 L = 1000 mL; 500 mL is ½ Liter; 250 mL is ¼ Liter.' },
      { title: 'Estimating Container Capacity', detail: 'Teacup ≈ 150 mL; Water bottle ≈ 1000 mL (1 L); Bath bucket ≈ 15-20 Liters; Household roof tank ≈ 500-1000 Liters.' }
    ],
    readingSections: [
      {
        heading: '1. The Thirsty Crow’s Water Science',
        body: 'The clever crow dropped pebbles into a pitcher of water. Each pebble displaced water, raising the water level until the crow could drink! Water volume was conserved while water height rose.',
        tip: 'A dripping tap that loses one drop every second can waste up to 10 liters of water every single day!'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Carts and Wheels (Circles, Radius & Compass Drawing)',
    tagline: 'Wheel evolution, round chapatis, center point, radius, diameter (d = 2r), and geometry compass',
    summary: 'Discover circular geometry in motion! Observe wheels on bullock carts, bicycles, and tractors. Draw circles using ropes and nails, bangles, and geometry compasses. Identify the Center, Radius (distance from center to boundary), and Diameter (straight line through center, d = 2r). Balance spinning tops on toothpicks by finding the center of gravity.',
    keyConcepts: [
      { title: 'Radius and Diameter Relationship', detail: 'Diameter = 2 × Radius (d = 2r); all radii of a circle are strictly equal in length.' },
      { title: 'Compass Circle Drawing', detail: 'Keep the sharp metal needle firmly fixed at the center while smoothly rotating the pencil lead 360° around it.' }
    ],
    readingSections: [
      {
        heading: '1. Why Wheels are Always Circular',
        body: 'If wheels were square or oval, the vehicle axle would bump up and down unevenly. Because every point on a circular wheel’s rim is the exact same distance (radius) from the center axle, the cart rolls smoothly.',
        tip: 'The center of a spinning top must be precisely at its balance point for it to spin stably.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Halves and Quarters (Fractional Parts & Weights)',
    tagline: 'Kundan’s pumpkin bargaining, ½, ¼, ¾ fractions, meter ribbon pieces, and balance scales',
    summary: 'Divide items into fair equal portions! Cut rotis, chapatis, and cakes into halves (½) and quarters (¼). Combine fractions: ¼ + ¼ = ½; ½ + ¼ = ¾; ¼ + ¼ + ¼ + ¼ = 1 whole. Measure fractional lengths of 1-meter ribbons (50 cm = ½ m, 25 cm = ¼ m, 75 cm = ¾ m). Balance grocery scales with 1 kg, 500 g (½ kg), and 250 g (¼ kg) iron weights.',
    keyConcepts: [
      { title: 'Fractions of a Meter and Kilogram', detail: '½ meter = 50 cm; ¼ meter = 25 cm; ½ kilogram = 500 grams; ¼ kilogram = 250 grams.' },
      { title: 'Equivalent Fractional Values', detail: '2/4 is equivalent to 1/2; 4/8 is equivalent to 1/2.' }
    ],
    readingSections: [
      {
        heading: '1. The Greedy Kundan and the Huge Pumpkin',
        body: 'Kundan wanted a giant pumpkin for cheap. The first vendor offered ½ pumpkin for ₹10 (full pumpkin ₹20); the second offered ¼ for ₹10 (full ₹40!). Greedily trying to pluck one free from a rooftop, Kundan slipped and fell into a mud puddle!',
        tip: 'Sharing equally means every fraction piece must be identical in size.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Play with Patterns (Tessellations & Secret Ciphers)',
    tagline: 'Block printing, border repeat, tessellating tiles, secret letter codes (A=1, B=2), and number towers',
    summary: 'Create and decode symmetrical designs! Study Rajasthani wooden block-printing patterns on fabric: motifs flipping up, down, left, and right. Discover floor tessellations—shapes like hexagons and rectangles that fit together without any gaps or overlapping. Decode secret spy ciphers replacing letters with numbers (e.g., A=1, B=2 ... Z=26) or shifting letters forward (A->B, B->C). Build triangular number addition towers.',
    keyConcepts: [
      { title: 'Tessellation Rule', detail: 'Tiling shapes must interlock seamlessly covering 2D surfaces without leaving any empty gaps (squares, rectangles, hexagons tessellate; regular pentagons do not).' },
      { title: 'Number Addition Towers', detail: 'Add two adjacent base numbers to get the number sitting directly above them in the pyramid layer.' }
    ],
    readingSections: [
      {
        heading: '1. Secret Message Ciphers',
        body: 'If each letter is shifted forward by one letter (A becomes B, B becomes C): the secret message "IFMMP" decodes back to "HELLO"! Cryptography uses mathematical patterns to protect information.',
        tip: 'Notice patterns in odd and even numbers: Odd + Odd = Even; Even + Even = Even; Odd + Even = Odd.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Tables and Shares (Multiplication Arrays & Division)',
    tagline: 'Shyama’s plant garden, leg counting, 7 times table from 2 and 5 tables, and jumping frogs',
    summary: 'Master multiplication arrays and fair sharing division! Help Shyama plant 18 marigolds in different rectangular arrangements: 1 row of 18 (1×18), 2 rows of 9 (2×9), or 3 rows of 6 (3×6). Build the 7 times table by combining the 2 and 5 times tables! Count legs of animals: 28 legs among cats means 28 ÷ 4 = 7 cats! Solve jumping frog division problems on a number line.',
    keyConcepts: [
      { title: 'Multiplication as Rectangular Arrays', detail: 'Arranging objects in rows and columns: Total = Rows × Columns.' },
      { title: 'Additive Table Building', detail: 'Tables can be constructed by adding smaller tables together: 7 × n = (2 × n) + (5 × n).' }
    ],
    readingSections: [
      {
        heading: '1. Gangu’s Sweet Box Packing',
        body: 'Gangu makes festival laddoos. If he has 80 laddoos and packs 4 laddoos in each small box, he needs 80 ÷ 4 = 20 boxes. If packing 23 laddoos in larger boxes, how many full boxes can he make and how many are leftover?',
        tip: 'Division is repeated subtraction; multiplication is repeated addition.'
      }
    ]
  }),
  buildChapter(4, 'c4-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'How Heavy? How Light? (Mass, Grams & Balance Beams)',
    tagline: 'Grams and kilograms (1 kg = 1000 g), heavy elephant on a boat, postal parcels, and pan balances',
    summary: 'Compare weights and measure mass! Convert between grams and kilograms: 1 kilogram = 1000 grams (1 kg = 1000 g). Balance pan scales: place weights on one pan until the central needle points straight up. Read postal parcel weight slabs for postage stamps. Learn the famous ancient riddle: how King’s minister weighed a giant royal elephant using water displacement on a wooden barge!',
    keyConcepts: [
      { title: 'Kilograms and Grams Conversion', detail: '1 kg = 1000 g; ¾ kg = 750 g; ½ kg = 500 g; ¼ kg = 250 g.' },
      { title: 'Weighing an Elephant via Archimedes Principle', detail: 'Load the elephant onto a boat and mark water level line; unload elephant and fill boat with heavy stone rocks until water reaches the same mark, then weigh the rocks!' }
    ],
    readingSections: [
      {
        heading: '1. A Kilogram of Cotton vs a Kilogram of Iron',
        body: 'Which is heavier: 1 kg of cotton wool or 1 kg of iron? They both have the exact same weight: 1 kilogram! However, the cotton occupies a huge sack while the iron is a compact metal brick due to higher density.',
        tip: 'Always check that the balance pans are level before placing items to be weighed.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 1,
    title: 'Going to School (Diverse Transport Across India)',
    tagline: 'Bamboo bridges in Assam, trolley in Ladakh, vallam boats in Kerala, camel carts in Rajasthan, and jugad vehicles',
    summary: 'Travel across India to discover how courageous children reach school everyday! Cross swaying bamboo and rope bridges over flooded rivers in Assam. Ride pulleys and metal trolleys across deep mountain canyons in Ladakh. Sail wooden vallam boats across Kerala backwaters. Travel on wooden camel carts across Thar desert sands, ride bullock carts through green plains, and hop on noisy motorized "Jugad" carts in Gujarat.',
    keyConcepts: [
      { title: 'Geographic Adaptation in Transportation', detail: 'Local materials and terrain dictate transport methods: bamboo in wet Assam, camels in sandy Rajasthan, and wooden boats in coastal Kerala.' },
      { title: 'Trolley Pulley Mechanics', detail: 'An overhead steel rope with a hanging wooden trolley powered by a friction pulley enables children to cross wide river valleys in Ladakh.' }
    ],
    readingSections: [
      {
        heading: '1. Courage and Dedication to Education',
        body: 'In snowy mountains, children hold hands walking carefully on soft fresh snow; if the snow is frozen and crusty, feet slip! Despite mountains, thick jungles, and monsoons, children cross miles every morning to reach school.',
        tip: 'Walking through dense forests requires listening carefully for animal calls and staying together in groups.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 2,
    title: 'Ear to Ear (Animal Ears, Skin & Reproduction)',
    tagline: 'External vs hidden ears, bird ear holes, skin hair/feathers patterns, viviparous mammals, and oviparous birds',
    summary: 'Observe animal anatomy and outer coverings! Identify animals with large visible external ears (elephants with fan ears, rabbits with upright ears, deer). Discover that birds, lizards, and frogs have tiny hidden ear holes covered by feathers or skin. Correlate external features with reproduction: animals with external ears and body hair give birth to young babies (viviparous); animals without visible ears that lay eggs have feathers or scales (oviparous).',
    keyConcepts: [
      { title: 'Viviparous Animals (Mammals)', detail: 'Animals having external ears and hair on their body give birth to live babies (cows, dogs, humans, whales).' },
      { title: 'Oviparous Animals', detail: 'Animals with no external visible ears and feathers or scales lay eggs (birds, lizards, snakes, crocodiles).' }
    ],
    readingSections: [
      {
        heading: '1. Animal Skin Patterns and Camouflage',
        body: 'Zebras have bold black-and-white stripes; tigers have black stripes on orange fur; leopards have rosette spots. These patterns are created by hair color and help predators hide in tall grass to ambush prey.',
        tip: 'Elephants flap their massive ear pinnae like fans to cool the blood circulating through their ear veins.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 3,
    title: 'A Day with Nandu (Elephant Herd Dynamics & Matriarchs)',
    tagline: 'Three-month-old calf Nandu, 100 kg daily vegetation, oldest female matriarch, mud baths, and herd protection',
    summary: 'Spend an enchanting day with three-month-old baby elephant Nandu! Learn that an adult elephant eats more than 100 kilograms of leaves and twigs daily and sleeps only 2 to 4 hours. Follow elephant herds composed solely of female elephants and calves, led by the oldest and wisest female Matriarch. Experience elephant mud baths that protect delicate skin from sunburn and insects, and joyful trunk water sprays.',
    keyConcepts: [
      { title: 'Elephant Herd Structure', detail: 'A herd has 10 to 12 female elephants and young calves; male elephants leave the herd around age 14-15 to live solitary lives.' },
      { title: 'Role of the Matriarch', detail: 'The oldest female leads the herd to perennial waterholes, safe forest corridors, and protects calves from predators.' }
    ],
    readingSections: [
      {
        heading: '1. Why Elephants Love Mud and Water',
        body: 'Elephants have thick grey skin without sweat glands. Covering their bodies with wet river mud creates a protective layer that shields them from biting flies and cooling them under the hot tropical sun.',
        tip: 'Elephants communicate over miles using low-frequency infrasonic rumbles felt through their foot pads.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 4,
    title: 'The Story of Amrita (The Bishnoi Community & Khejadi Trees)',
    tagline: 'Khejadli village near Jodhpur, Bishnoi tree protectors, 300 martyrs, King’s royal decree, and desert Khejadi tree',
    summary: 'Honor environmental martyrdom and ecological bravery in Rajasthan! Three hundred years ago in Khejadli village near Jodhpur, King’s soldiers arrived with axes to fell green Khejadi trees to bake palace lime. Brave Amrita Devi Bishnoi and her daughters hugged the trees, declaring: "If a tree is saved even at the cost of one’s head, it is worth it!" Three hundred villagers sacrificed their lives, inspiring the King to issue a royal decree banning tree felling and hunting forever.',
    keyConcepts: [
      { title: 'The Bishnoi Ecological Creed', detail: 'A community following 29 environmental principles instituted by Guru Jambheshwar, holding wildlife and trees as sacred.' },
      { title: 'The Khejadi Tree (Prosopis cineraria)', detail: 'The lifeline of the Thar desert: thrives with minimal water, its bark is used as medicine, green beans (sangri) are eaten, and leaves nourish desert goats.' }
    ],
    readingSections: [
      {
        heading: '1. Birthplace of the Modern Chipko Movement',
        body: 'Amrita Devi’s sacrifice was the historic precursor to the modern Himalayan Chipko movement of the 1970s led by Sunderlal Bahuguna and Gaura Devi, where villagers hugged trees to stop commercial deforestation.',
        tip: 'In Bishnoi villages today, blackbucks, chinkaras, and peacocks roam fearlessly among human homes.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 5,
    title: 'Anita and the Honeybees (Apiary Science & Girl Stars)',
    tagline: 'Anita Khushwaha of Muzaffarpur Bihar, girl education, litchi flower nectar, queen bee, and bee-keeping boxes',
    summary: 'Celebrate true empowerment with "Girl Star" Anita Khushwaha from Muzaffarpur district in Bihar! Defying poverty, Anita earned money giving tuition to younger children, completed school, and bought two bee-keeping boxes. Learn apiary science: litchi trees bloom in February attracting bees; each hive contains one Queen Bee (lays eggs), thousands of female Worker Bees (collect nectar, build hexagonal wax combs, care for larvae), and few male Drones.',
    keyConcepts: [
      { title: 'Honeybee Caste System', detail: 'Queen Bee: fertile female that lays thousands of eggs; Worker Bees: sterile females that forage nectar, make honey, and sting to defend the hive; Drones: males for mating.' },
      { title: 'Bee Dance Communication', detail: 'Discovered by Karl von Frisch: worker bees perform a waggle dance on combs to communicate the direction and distance of blooming flowers to nestmates.' }
    ],
    readingSections: [
      {
        heading: '1. Anita’s Mission for Girl Education',
        body: 'Today Anita rides a motorcycle across villages, inspiring parents to send their daughters to school and teaching rural women how to become independent beekeepers earning ₹35 per kilogram of pure honey.',
        tip: 'Honey never spoils; archaeologists have found pots of edible honey in ancient Egyptian pharaoh tombs!'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 6,
    title: 'Omana’s Journey & From the Window (Train Travel & Geography)',
    tagline: 'Ahmedabad to Kerala train, reservation charts, dhokla, Western Ghats, 2000 bridges, 92 tunnels, and level crossings',
    summary: 'Embark on an epic railway journey with young Omana from Gujarat to Kerala! Board the train at Ahmedabad junction: check reservation charts on train doors, meet the Ticket Examiner (TTE), and eat dhokla and lemon rice. Gaze from the train window as dry brown Gujarat plains transform into the lush green Western Ghats of Goa and Kerala. Cross bridges over wide muddy rivers, speed through 92 tunnels carved into red mountain rock, and watch vehicles wait at railway level crossings.',
    keyConcepts: [
      { title: 'Train Journey Logistics', detail: 'Ticket details: Train number, Coach/Berth number, PNR number, Distance in km, and Ticket fare.' },
      { title: 'Geographic Diversity from Train Windows', detail: 'Notice how language changes from Gujarati to Marathi and Malayalam, while terrain shifts from dry red soil to coconut groves and coastal paddy fields.' }
    ],
    readingSections: [
      {
        heading: '1. Crossing the Mandovi River Bridge in Goa',
        body: 'The train rattled with a roaring metallic clang over the long iron bridge. Looking down between the sleepers, Omana saw boats with fishermen casting nets in the shimmering water far below!',
        tip: 'Always stay behind closed level-crossing gates and never cross railway tracks while the red warning signal flashes.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 7,
    title: 'A River’s Tale (Water Pollution & Ecosystem Health)',
    tagline: 'Snowy mountain glacial origin, crystal clear streams, village sewage, factory chemicals, and dead fish floating',
    summary: 'Follow the life story of an Indian river! High in snow-capped mountains, the river is born pure, blue, cold, and teeming with jumping fish. Passing through villages, humans wash clothes, bathe cattle, and throw plastic garbage into it. Entering industrial cities, chemical factories dump toxic effluent and municipal sewers pour dark sludge; the water turns black and foul-smelling, fish die, and riverbanks choke with debris. Learn how to clean and conserve river basins.',
    keyConcepts: [
      { title: 'Sources of River Pollution', detail: 'Untreated domestic sewage, industrial chemical effluents, religious offerings wrapped in plastic, and agricultural pesticide runoff.' },
      { title: 'Dissolved Oxygen and Aquatic Life', detail: 'Clean water contains dissolved oxygen for fish respiration; decomposing organic pollution depletes oxygen, suffocating aquatic creatures.' }
    ],
    readingSections: [
      {
        heading: '1. Safe Drinking Water Purification',
        body: 'Water that looks crystal clear can still harbor dangerous invisible disease germs. Boiling water for 10 minutes kills harmful bacteria, making it completely safe for drinking.',
        tip: 'Never dispose of paints, batteries, or plastic bags into rivers or storm drains.'
      }
    ]
  }),
  buildChapter(4, 'c4-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 8,
    title: 'Basva’s Farm (Agricultural Implements & Harvesting)',
    tagline: 'Belvanika Karnataka, Khunti iron rod, Kurige bullock plough, onion seeds, Illige curved cutter, and sack packing',
    summary: 'Step into Basva’s onion farm in Belvanika village, Karnataka! Follow agricultural steps: loosening dry soil using an iron rod (Khunti), hitching bullocks to the wooden seed drill (Kurige) to sow seeds at uniform depth, removing unwanted weeds competing for nutrients, and pulling out mature onions when top leaves turn yellow and dry. Use the sharp curved iron cutter (Illige) to snip dry leaves and pack onions into burlap gunny sacks for the city wholesale market.',
    keyConcepts: [
      { title: 'Sequential Steps of Onion Farming', detail: '1) Digging soil with Khunti; 2) Sowing seeds with Kurige; 3) Weeding; 4) Harvesting ripe onions; 5) Cutting leaves with Illige; 6) Sack transport to mandi.' },
      { title: 'Why Weeding is Essential', detail: 'Weeds are wild plants that sprout spontaneously; if not removed, they consume all fertilizer and water, stunting crop yields.' }
    ],
    readingSections: [
      {
        heading: '1. Harvesting Onions on Time',
        body: '"If onions are not harvested right when their leaves turn dry and yellow, they will rot inside the soil and all our family’s hard labor will be wasted!" explained Basva’s father Appa.',
        tip: 'Farmers use bullocks, tractors, and organic compost to cultivate healthy sustainable food.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(4, 'c4-eng', 'English Language & Literature', {
    chapterNumber: 1,
    title: 'Wake Up! (C. Fletcher) & Neha’s Alarm Clock (Girija Rani Asthana)',
    tagline: 'Morning chirping birds, buzzing bees, alarm clock ringing, warm sunbeam, and internal body clock',
    summary: 'Awaken with nature’s joy and uncover your internal circadian rhythm! C. Fletcher’s melodious poem "Wake Up!" calls children out of sleepy beds to join chirping birds in trees, lowing cows, galloping horses, and buzzing bees. Coupled with Girija Rani Asthana’s enchanting story "Neha’s Alarm Clock": Neha wishes her 6:00 AM alarm would stop, but when the clock breaks, chirping sparrows, the warm morning sunbeam, and her own internal body clock awaken her on time!',
    keyConcepts: [
      { title: 'The Human Internal Body Clock', detail: 'Our body possesses an internal biological clock that tells us instinctively when to sleep, when to wake up, and when to eat lunch.' },
      { title: 'Joy of Morning Nature', detail: 'Early morning air is fresh, peaceful, and filled with natural vitality that energizes both mind and body for the day ahead.' }
    ],
    readingSections: [
      {
        heading: '1. Neha’s Mother’s Gentle Secret',
        body: '"Why do you eat your lunch every day at one in the afternoon? Why do you sleep at nine every night?" asked mother. "Because there is a clock inside you which tells you what to do!"',
        tip: 'Waking up early gives you calm morning hours to read, exercise, and think clearly.'
      }
    ]
  }),
  buildChapter(4, 'c4-eng', 'English Language & Literature', {
    chapterNumber: 2,
    title: 'Noses (Aileen Fisher) & The Little Fir Tree',
    tagline: 'Funny mirror nose with two holes, magician Shetty, golden leaves, glass leaves, and true self-acceptance',
    summary: 'Celebrate unique individuality and self-acceptance! Aileen Fisher’s playful poem "Noses" shows a child giggling at the funny nose sticking out on her face like a handle with two breathing holes! Followed by "The Little Fir Tree": rewarded by magician Shetty, the fir tree wishes for gold leaves (stolen by a thief), then glass leaves (shattered by wind), and tender green leaves (eaten by a goat). Finally, the fir tree happily embraces its original green needle leaves!',
    keyConcepts: [
      { title: 'Embracing One’s True Nature', detail: 'The fir tree realized that its needle-like leaves were already perfect for shedding mountain snow and discouraging grazing goats.' },
      { title: 'Body Positivity in "Noses"', detail: 'Every face has unique, quirky features; finding humor and gratitude in our appearance brings joyful confidence.' }
    ],
    readingSections: [
      {
        heading: '1. The Fir Tree’s Final Contentment',
        body: '"I like my old needle-like leaves best," smiled the fir tree. "For goats do not eat them, no man can steal them, and the wind will do them no harm!"',
        tip: 'Comparison is the thief of joy; nature designs every creature for its specific ecological niche.'
      }
    ]
  }),
  buildChapter(4, 'c4-eng', 'English Language & Literature', {
    chapterNumber: 3,
    title: 'Run! (Mary Daunt) & Nasruddin’s Aim (Folk Tale)',
    tagline: 'Running into the countryside, gentle raindrops, Nasruddin’s boast, archery bow, and hitting the bullseye',
    summary: 'Burst with athletic vitality and chuckle at courtly wit! Mary Daunt’s spirited poem "Run!" encourages city children to run away from crowded streets into open green meadows, race with country breezes, and splash through raindrop showers. Followed by a hilarious tale of Mullah Nasruddin: boasting about his unmatched archery skills, his first arrow falls hopelessly short ("That was Shoeb’s aim!"), his second flies wild ("That was the Chief’s aim!"), but when his third arrow hits the dead center bullseye, he beams: "And that was MY aim!"',
    keyConcepts: [
      { title: 'Physical Freedom in Nature', detail: 'Running outdoors under open skies releases stress, builds cardiovascular stamina, and brings joyful lightness to the spirit.' },
      { title: 'Humor and Quick Wits of Nasruddin', detail: 'Nasruddin uses quick-witted bluster and comedic misdirection to turn embarrassing failures into apparent triumph.' }
    ],
    readingSections: [
      {
        heading: '1. The Bullseye Triumph',
        body: 'Nasruddin drew the bowstring, aimed, and let fly! Thwack! The arrow hit right on target! Everybody’s mouth fell open in amazement. Before anyone could speak, Nasruddin smiled triumphantly: "Did you see that? It was MY aim!"',
        tip: 'Humor and presence of mind can rescue you from awkward predicaments.'
      }
    ]
  }),
  buildChapter(4, 'c4-eng', 'English Language & Literature', {
    chapterNumber: 4,
    title: 'Don’t be Afraid of the Dark (Ruskin Bond) & Helen Keller',
    tagline: 'Gentle night darkness, resting Earth, shining stars, Helen Keller, and Anne Sullivan’s hand spelling',
    summary: 'Conquer fear and witness the triumph of human spirit! Ruskin Bond’s comforting poem "Don’t be Afraid of the Dark" teaches children that night is simply Earth resting after daytime labor, and starlight shines forever in peaceful quietude. Paired with the inspiring biography of Helen Keller, who lost both sight and hearing at 19 months due to illness. Dedicated teacher Anne Sullivan spelled words into Helen’s palm under running water ("W-A-T-E-R"), unlocking language and knowledge!',
    keyConcepts: [
      { title: 'Transforming Fear into Friendship with Night', detail: 'Darkness is not a monster; it is nature’s tranquil blanket allowing tired minds and bodies to dream and restore.' },
      { title: 'The Miracle of Language for Helen Keller', detail: 'Feeling cold water pouring over one hand while Sullivan spelled W-A-T-E-R into the other made Helen realize that words were names for living things, liberating her from silent isolation.' }
    ],
    readingSections: [
      {
        heading: '1. Helen’s Awakening under the Pump',
        body: 'Suddenly Helen understood! That mystery of living language rushed into her soul. She left the well-house eager to learn, touching flowers and trees, spelling words with tears of joyous discovery.',
        tip: 'Helen Keller went on to graduate from university with honors, becoming a world-renowned author and disability activist.'
      }
    ]
  }),
  buildChapter(4, 'c4-eng', 'English Language & Literature', {
    chapterNumber: 5,
    title: 'The Scholar’s Mother Tongue (Birbal) & The Giving Tree (Shel Silverstein)',
    tagline: 'Polyglot scholar’s challenge, midnight tickle with feather, mother tongue in sleep, and selfless tree love',
    summary: 'Delight in Birbal’s genius and Shel Silverstein’s touching parable! A boastful scholar visits Emperor Akbar’s court, speaking Hindi, Persian, Sanskrit, and Tamil with native perfection and challenging anyone to name his mother tongue. At night, Birbal creeps into his bedchamber, tickles his ear with a soft feather; startled awake, the scholar cries out in Telugu! Paired with Shel Silverstein’s "The Giving Tree", the moving tale of an apple tree giving its apples, branches, and trunk out of unconditional love for a boy.',
    keyConcepts: [
      { title: 'The Instinctive Mother Tongue', detail: 'In times of sudden danger, shock, or surprise, a person instinctively speaks and cries out in their native mother tongue.' },
      { title: 'Unconditional Selfless Giving', detail: 'The tree finds true joy in giving everything it possesses to nurture the person it loves, asking for nothing in return.' }
    ],
    readingSections: [
      {
        heading: '1. Birbal’s Court Explanation',
        body: '"Your Majesty," explained Birbal, "when a person is startled or in distress, he always forgets foreign languages and speaks in his own mother tongue!" Akbar praised Birbal’s wisdom and rewarded him generously.',
        tip: 'Respect all languages, for every language is a treasure chest of human culture.'
      }
    ]
  })
];

export const class4Curriculum: Subject[] = [
  {
    id: 'c4-math',
    name: 'Mathematics (Math-Magic)',
    code: 'MATH-401',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 12-chapter Class 4 syllabus: Building with Bricks, Long & Short, A Trip to Bhopal, Tick-Tick-Tick, The Way World Looks, The Junk Seller, Jugs & Mugs, Carts & Wheels, Halves & Quarters, Patterns, Tables & Shares, and How Heavy.',
    chapters: mathChapters
  },
  {
    id: 'c4-sci',
    name: 'Environmental Studies (EVS / Science)',
    code: 'EVS-401',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete Class 4 syllabus: Going to School, Ear to Ear, A Day with Nandu, The Story of Amrita, Anita and Honeybees, Omana’s Journey, A River’s Tale, and Basva’s Farm.',
    chapters: scienceChapters
  },
  {
    id: 'c4-eng',
    name: 'English Language & Literature (Marigold)',
    code: 'ENG-401',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 4 literature anthology: Wake Up & Neha’s Alarm Clock, Noses & Little Fir Tree, Run & Nasruddin’s Aim, Don’t be Afraid of the Dark & Helen Keller, and The Scholar’s Mother Tongue.',
    chapters: englishChapters
  }
];
