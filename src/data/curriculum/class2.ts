import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'What is Long, What is Round? (Rolling vs Sliding)',
    tagline: 'Meeku Uncle’s bag guessing game, round balls that roll, flat boxes that slide, and postcard towers',
    summary: 'Explore shape dynamics! Play Meeku Uncle’s blindfold guessing game: guessing by touch whether an object is round or flat. Discover why spherical objects like tennis balls, lemons, and coins on edge roll smoothly, while flat objects like matchboxes, erasers, and books slide across tables. Build tall, stable towers using coins and matchboxes.',
    keyConcepts: [
      { title: 'Rolling vs Sliding', detail: 'Round curved surfaces roll without scraping; flat planar surfaces slide when pushed.' },
      { title: 'Rolling AND Sliding Objects', detail: 'A coin or carrom striker can both roll (on its thin round edge) and slide (on its flat circular face)!' }
    ],
    readingSections: [
      {
        heading: '1. The Postcard Strength Challenge',
        body: 'Can a flimsy paper postcard support a heavy hardcover book? Roll the postcard into a hollow cylinder and tape the edges: the vertical paper cylinder will easily support a thick encyclopedia!',
        tip: 'Round shapes distribute weight evenly around their perimeter, giving structural strength.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Counting in Groups (Pairs & Estimations)',
    tagline: 'Cups arranged in pyramids, pairs of shoes, guessing bindi stickers on cards, and counting by 2s and 5s',
    summary: 'Count quickly by grouping! Count cups arranged in triangular tiers: 1 cup on top, 2 below, 3 at bottom (1 + 2 + 3 = 6 cups). Count shoes in matching pairs (3 pairs of shoes = 6 shoes). Guess quantities before counting: how many seeds in an apple, how many teeth in your mouth, or how many bindi stickers on a sheet.',
    keyConcepts: [
      { title: 'Pairing Objects', detail: 'A pair consists of exactly 2 matching items (pair of socks, pair of eyes, pair of shoes).' },
      { title: 'Estimation Strategy', detail: 'Making an educated visual guess before counting trains visual perception and number sense.' }
    ],
    readingSections: [
      {
        heading: '1. The Story of the Giant Turnip',
        body: 'Grandfather pulled, grandmother held grandfather, granddaughter held grandmother, the dog pulled the granddaughter, and the cat pulled the dog! Counting the line shows that 5 characters pulled before the mouse made 6 to pop the turnip out!',
        tip: 'Counting in groups of 2, 5, or 10 is much faster than counting individual items one by one.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'How Much Can You Carry? (Heavier vs Lighter)',
    tagline: 'Sandesh’s clever donkey, dissolving salt sacks, wet cotton wool, and seesaw balancing',
    summary: 'Compare weight and capacity! Sandesh’s donkey carried sacks of heavy salt. Crossing a stream, the donkey slipped into the water; the salt dissolved, making the sack light! The next day, the tricky donkey dipped again on purpose with sacks of cotton wool; the cotton absorbed water and became ten times heavier! Practice comparing weights on playground seesaws.',
    keyConcepts: [
      { title: 'Heavier vs Lighter on a Seesaw', detail: 'The heavier friend goes down; the lighter friend goes up in the air.' },
      { title: 'Material Water Absorption', detail: 'Cotton absorbs water and becomes much heavier, while salt dissolves in water and washes away.' }
    ],
    readingSections: [
      {
        heading: '1. Which Can Each Animal Carry?',
        body: 'A tiny ant carries a sugar grain larger than its head; a pigeon carries a twig for its nest; a donkey carries sacks; a father carries his little child on his shoulders.',
        tip: 'A large hollow plastic bucket can be lighter than a small solid iron key!'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Counting in Tens (Bundles & Place Value)',
    tagline: 'Tilu’s forest twigs in bundles of 10, chickens and cunning fox, and marigold garlands',
    summary: 'Master the power of the Ten-bundle! Help Tilu collect fallen twigs in the forest: every time he gathers 10 loose twigs, he ties them with string into 1 bundle of 10. Count collections rapidly: 3 bundles of 10 and 4 loose twigs equals 34 twigs! Help Malti string marigold garlands: each garland has 10 flowers. Outsmart the cunning fox who counted chickens in baskets of 10.',
    keyConcepts: [
      { title: 'The Base-10 Bundle System', detail: '10 loose ones make 1 ten; 4 tens and 7 ones make forty-seven (47).' },
      { title: 'Grouping to Solve Counting Mysteries', detail: 'Counting in tens makes it immediately obvious if any item is missing or stolen.' }
    ],
    readingSections: [
      {
        heading: '1. Outsmarting the Fox',
        body: 'Tiklu counted her chickens every morning in baskets of 10. When a greedy fox began stealing them, Tiklu noticed that one morning there were only 4 baskets of 10 instead of 5, immediately catching the fox!',
        tip: 'Bundling in tens is the foundation of our entire decimal number system.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Footprints (Animal Tracks & Tracing 2D Shapes)',
    tagline: 'Muddy forest footprints (elephant, duck, dog, frog), tracing bowls, coins, and matchboxes',
    summary: 'Trace footprints and real-world everyday objects! Watch muddy animal tracks in the forest: the giant round circle footprint of the elephant, webbed footprint of the duck, and tiny star track of the frog. Trace objects on paper: a coin traces a circle; a matchbox traces a rectangle; a birthday cap traces a triangle; a dice traces a square.',
    keyConcepts: [
      { title: 'Tracing 3D Objects into 2D Shapes', detail: 'Tracing the flat base of a cylinder yields a circle; tracing a cuboid yields a rectangle or square.' },
      { title: 'Animal Footprint Identification', detail: 'Different animals have uniquely shaped foot pads adapted for swimming, climbing, or carrying weight.' }
    ],
    readingSections: [
      {
        heading: '1. Tarani’s Shapes Art Picture',
        body: 'Tarani made a picture using many shapes: triangles for roofs and trees, circles for sun and human faces, squares for window panes, and rectangles for bus bodies!',
        tip: 'Look around your room: how many circles, squares, and rectangles can you spot right now?'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Jugs and Mugs (Volume & Filling Containers)',
    tagline: 'Lemon drink stall, 1 big jug = 6 small glasses, thirsty crow adding pebbles, and bucket capacity',
    summary: 'Measure liquid volume with cups, mugs, and jugs! Set up a lemon drink stall at the village fair: Chaitu’s big jug fills exactly 6 small glasses of sweet nimbu pani (selling for ₹5 per glass). Relive the clever thirsty crow dropping black pebbles into a pitcher to raise the water level. Guess how many mugs of water it takes to fill your bathroom bucket.',
    keyConcepts: [
      { title: 'Capacity of Containers', detail: 'The maximum amount of liquid a container can hold is its capacity (a jug holds more than a cup; a bucket holds more than a jug).' },
      { title: 'Water Level Rise via Displacement', detail: 'Submerging solid pebbles pushes water upward because two objects cannot occupy the exact same space simultaneously.' }
    ],
    readingSections: [
      {
        heading: '1. Which Vessel Holds the Most Water?',
        body: 'Sunaina and Jaspreet gathered a bowl, a mug, a pot, and a jug from the kitchen. Filling each with water using a small cup showed that the round clay pot took the most cups of water to fill!',
        tip: 'Always turn off water taps tightly to ensure no precious drops leak away.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Tens and Ones (Currency Notes, Coins & The Flute Man)',
    tagline: 'Paying uncle with ₹10 notes and ₹1 coins, token cards, and Flute Man catching 80 rats',
    summary: 'Shop with Indian money and token cards! Buy pencils and notebooks by paying with ₹10 notes and ₹1 coins: a ₹23 notebook requires two ₹10 notes and three ₹1 coins. Use blue triangular cards for 1s and yellow square cards for 10s. Read the story of the Flute Man of Hamelin who trapped 80 village rats by counting them in his pocket with token cards!',
    keyConcepts: [
      { title: 'Currency Composition', detail: 'Any price can be paid using combinations of ₹10 notes (tens) and ₹1 coins (ones).' },
      { title: 'Counting with Token Cards', detail: 'One yellow square represents 10; one blue triangle represents 1; 3 yellow squares and 5 blue triangles represent 35.' }
    ],
    readingSections: [
      {
        heading: '1. The Flute Man Counts the Rats',
        body: 'The King promised one gold coin for every rat caught. The Flute Man kept token cards in his pocket: every time 10 blue rat cards were collected, he swapped them for 1 yellow card of 10, proving he caught exactly 80 rats!',
        tip: 'Check your change whenever you buy pencils or erasers at a stationery shop.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'My Funday (Days of the Week & Daily Routine)',
    tagline: 'Seven days of the week, school timetable, favorite weekday, and months of the year',
    summary: 'Sing the days of the week! Monday through Sunday: Monday starts the school week, Friday brings weekend excitement, and Sunday is our joyful Funday! Read school class timetables: which day has games, drawing, music, or library periods. Learn the 12 months of the year: January cold, May summer mangoes, July monsoon rains, and November festive Diwali.',
    keyConcepts: [
      { title: 'Order of Weekdays', detail: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday; exactly 7 days form one complete week.' },
      { title: 'Yesterday, Today, Tomorrow', detail: 'Today is the present day; Yesterday was the day before; Tomorrow will be the day after.' }
    ],
    readingSections: [
      {
        heading: '1. Teacher-Teacher Classroom Game',
        body: 'Children in Class 2 take turns playing the teacher each day: Vaibhav on Monday, Alpana on Tuesday, Gaurav on Wednesday, and Gurpreet on Thursday!',
        tip: 'There are 12 months in a year: January is the first month, December is the last.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Lines and Lines (Standing, Sleeping & Slanting)',
    tagline: 'Fatima’s standing ruler line, Jasmir’s slanting line, Rayan’s sleeping line, curved rangoli, and digital clock numbers',
    summary: 'Discover dynamic lines in art and dance! Fatima keeps her cricket wicket standing straight (vertical standing line); Jasmir keeps his slanting (diagonal slanting line); Rayan lays his flat on the floor (horizontal sleeping line). Draw smooth curved lines like waves and smiles. Notice how straight matchstick lines assemble into digital clock numbers (0, 1, 2, ... 9) and alphabet letters.',
    keyConcepts: [
      { title: 'Four Types of Lines', detail: 'Standing lines (vertical |), Sleeping lines (horizontal —), Slanting lines (diagonal /), and Curved lines (arcs ~).' },
      { title: 'Digital Numbers from Straight Lines', detail: 'Electronic displays use 7 straight line segments to form all digits from 0 to 9.' }
    ],
    readingSections: [
      {
        heading: '1. Classical Dancing with Lines',
        body: 'In Indian classical dance (Bharatanatyam, Odissi), dancers position their arms and legs in precise standing lines, sleeping lines, and graceful curved arcs to narrate stories.',
        tip: 'A straight line drawn between two points is the shortest path.'
      }
    ]
  }),
  buildChapter(2, 'c2-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'How Many Ponytails? (Sorting & Pictographs)',
    tagline: 'Hair styles, counting ponytails, favorite fruits (mangoes, bananas, apples), and reading simple tally charts',
    summary: 'Collect and display classroom data with fun pictures! Count how many children in your class have one ponytail, two ponytails, or short hair. Survey classmates’ favorite fruits: tallying mangoes, bananas, apples, and oranges on a chalkboard. Answer data questions: which fruit is liked the most, which fruit is liked the least, and how many children participated in total.',
    keyConcepts: [
      { title: 'Collecting and Sorting Data', detail: 'Counting and sorting items into clear categories to compare quantities at a glance.' },
      { title: 'Pictorial Representation', detail: 'Using smileys or fruit icons to represent children’s choices in a visual chart.' }
    ],
    readingSections: [
      {
        heading: '1. Footwear Size Survey in Class',
        body: 'Teacher checked the shoe sizes of all children: 9 children wear size 9, 14 wear size 10, and 5 wear size 11. Size 10 is the most common shoe size in the classroom!',
        tip: 'Charts make it easy to understand information without reading long lists of numbers.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(2, 'c2-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 1,
    title: 'All About Me & My Incredible Senses',
    tagline: 'Head, shoulders, knees, toes, five sense organs (eyes, ears, nose, tongue, skin), and body hygiene',
    summary: 'Discover the wonderful machine that is your body! Name body parts from head to toes. Explore the five incredible sense organs: Eyes (seeing colors, shapes, and distances), Ears (hearing loud, soft, and melodious sounds), Nose (smelling sweet roses and foul garbage), Tongue (tasting sweet, salty, sour, and bitter foods), and Skin (feeling hot, cold, soft, and sharp textures).',
    keyConcepts: [
      { title: 'The Five Senses', detail: 'Eyes to see, Ears to hear, Nose to smell, Tongue to taste, Skin to touch and feel.' },
      { title: 'Personal Hygiene Habits', detail: 'Brushing teeth twice daily, washing hands with soap before eating, and bathing regularly keep our body healthy.' }
    ],
    readingSections: [
      {
        heading: '1. How Our Skin Protects Us',
        body: 'Skin covers our entire body like a waterproof coat, keeping germs out, regulating body temperature, and warning us instantly when something is painfully hot or sharp.',
        tip: 'Never insert sharp hairpins, matchsticks, or pencils into your ears!'
      }
    ]
  }),
  buildChapter(2, 'c2-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 2,
    title: 'Food for Health & Clean Drinking Water',
    tagline: 'Energy foods, bodybuilding proteins, protective fruits and vegetables, balanced diet, and boiling water',
    summary: 'Fuel your growing body with nutritious food! Classify meals: Energy-giving foods (rice, wheat chapatis, potatoes, butter), Bodybuilding foods (milk, pulses, eggs, paneer), and Protective foods (green vegetables, oranges, apples that shield us from sickness). Understand the importance of drinking 6 to 8 glasses of clean filtered water every day and washing fruits before eating.',
    keyConcepts: [
      { title: 'Three Types of Food', detail: 'Energy-givers for running and playing; Bodybuilders for growing bones and muscles; Protective foods for warding off diseases.' },
      { title: 'Safe Water Habits', detail: 'Drinking boiled or filtered water prevents stomach infections and keeps our digestion smooth.' }
    ],
    readingSections: [
      {
        heading: '1. Why Junk Food is Harmful',
        body: 'Chips, sodas, and sugary candies give quick energy but contain no vitamins or minerals. Eating too much junk food causes tooth decay, stomach aches, and fatigue.',
        tip: 'Milk is a complete food packed with calcium that makes bones and teeth rock-hard.'
      }
    ]
  }),
  buildChapter(2, 'c2-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 3,
    title: 'Clothes We Wear & Seasonal Seasons',
    tagline: 'Cotton clothes in hot summer, woolens in chilly winter, raincoats and umbrellas in monsoon, and uniforms',
    summary: 'Dress comfortably for changing seasons! Learn where clothes come from: Cotton from cotton plant pods woven into light breathable clothes that absorb sweat in hot summer; Wool from sheep fleece spun into warm sweaters, caps, and scarves in chilly winter; Waterproof raincoats, gumboots, and umbrellas made of plastic and rubber in monsoon. Discover special uniforms worn by students, doctors, and pilots.',
    keyConcepts: [
      { title: 'Clothes According to Season', detail: 'Summer: light-colored cotton clothes; Winter: warm woolen sweaters; Monsoon: waterproof raincoats and gumboots.' },
      { title: 'Special Uniforms', detail: 'Help identify a person’s occupation: police khaki uniform, doctor’s white coat, school uniform.' }
    ],
    readingSections: [
      {
        heading: '1. Where Silk Comes From',
        body: 'Silken sarees and kurtas are woven from shimmering threads spun by tiny caterpillars called silkworms inside their protective cocoons!',
        tip: 'Fold your clothes neatly and keep them in your wardrobe after washing.'
      }
    ]
  }),
  buildChapter(2, 'c2-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 4,
    title: 'Our Homes & Neighborhood Community Helpers',
    tagline: 'Kutcha vs Pucca houses, rooms in a home, doctor, nurse, police, firefighter, sweeper, and postman',
    summary: 'Appreciate safe shelters and helpful neighbors! Contrast Kutcha houses (made of mud, bamboo, and thatch) with Pucca houses (made of bricks, cement, iron rods, and marble). Explore rooms: living room, kitchen, bedroom, and bathroom. Meet our neighborhood community helpers: the Doctor caring for the sick, Police protecting law and order, Firefighter extinguishing blazes, and Sweeper keeping our roads clean.',
    keyConcepts: [
      { title: 'Kutcha vs Pucca House', detail: 'Kutcha houses are temporary natural shelters in villages; Pucca houses are strong, permanent buildings in towns and cities.' },
      { title: 'Respect for All Work', detail: 'Every community helper performs an essential service that makes our neighborhood clean, safe, and happy.' }
    ],
    readingSections: [
      {
        heading: '1. Keeping the Home Clean',
        body: 'A good home has plenty of sunlight and fresh air through windows. Throwing kitchen garbage into closed bins prevents flies and mosquitoes from spreading illnesses.',
        tip: 'Always greet your neighborhood sweeper and security guard with a kind smile.'
      }
    ]
  }),
  buildChapter(2, 'c2-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 5,
    title: 'Plants and Animals in Our World',
    tagline: 'Big trees, bushy shrubs, soft herbs, pet dogs, farm cows, wild lions, and caring for nature',
    summary: 'Discover living neighbors in nature! Classify plants: tall Trees with thick woody trunks (neem, banyan), medium bushy Shrubs (rose, hibiscus), and soft green Herbs (mint, coriander, tulsi). Meet animals: Domestic pets living in our homes (dogs, cats), Farm animals giving milk, eggs, and wool (cows, hens, sheep), and Wild animals roaming free in jungles (tigers, elephants, deer).',
    keyConcepts: [
      { title: 'Plant Categories', detail: 'Trees: tall with hard woody trunks; Shrubs: medium bushy plants; Herbs: small plants with soft green stems.' },
      { title: 'Animal Domesticity', detail: 'Domestic animals live with or serve humans; Wild animals live freely in forests and natural habitats.' }
    ],
    readingSections: [
      {
        heading: '1. Plants Give Us Everything',
        body: 'Plants give us oxygen to breathe, delicious fruits and vegetables to eat, wood for furniture and books, and colorful flowers that bring joy to our hearts.',
        tip: 'Water potted plants every morning and treat stray animals with gentle kindness.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(2, 'c2-eng', 'English Language & Literature', {
    chapterNumber: 1,
    title: 'First Day at School (Aileen Fisher) & Haldi’s Adventure',
    tagline: 'New school bag, wondering if drawing is good, Haldi meeting gentle giraffe Smiley with glasses and book',
    summary: 'Step bravely into your first school day with joyful imagination! Aileen Fisher’s relatable poem "First Day at School" captures a child’s fluttering thoughts: Will my drawings be as good as others? Will teachers like me or look like Mom and Grandma? Will my puppy miss me? Paired with "Haldi’s Adventure": walking to school, Haldi meets Smiley the gentle giraffe wearing oversized glasses and holding a book, riding on his tall back all the way to the school playground!',
    keyConcepts: [
      { title: 'Overcoming First-Day Butterflies', detail: 'Feeling nervous about new environments is completely natural; school soon becomes a warm home filled with friends, books, and games.' },
      { title: 'The Joy of Reading and Learning', detail: 'Haldi loves books because they take her to far-off magical lands filled with stars, trees, and friendly talking creatures.' }
    ],
    readingSections: [
      {
        heading: '1. Haldi Rides Smiley the Giraffe',
        body: '"Jump onto my back!" said Smiley. Haldi climbed up and found that she could see so many wonderful things from that great height. Before she knew it, she had reached the school playground!',
        tip: 'Always say "Good Morning" with a cheerful smile when you meet friends and teachers.'
      }
    ]
  }),
  buildChapter(2, 'c2-eng', 'English Language & Literature', {
    chapterNumber: 2,
    title: 'I am Lucky! & I Want (The Monkey and the Magic Wand)',
    tagline: 'Gratitude for wings and fins, mischievous little monkey, giraffe neck, elephant trunk, and zebra stripes',
    summary: 'Celebrate self-acceptance and gratitude! The joyful poem "I am Lucky!" expresses gratitude for being ourselves: lucky to be a butterfly with wings, a myna singing in a tree, a fish giggling in the water, or a kangaroo hopping high! Paired with the hilarious story "I Want": a little monkey wants to be big, so a fairy gives him a magic wand. He asks for a giraffe’s long neck, an elephant’s water-squirting trunk, and zebra’s stripes. Looking in the river, he screams at the monster—and realizes he loves being himself best of all!',
    keyConcepts: [
      { title: 'The Beauty of Being Yourself', detail: 'Wishing to look like someone else often leads to confusion; nature made each of us unique, special, and wonderfully original.' },
      { title: 'Gratitude for Our Talents', detail: 'Appreciating what we have—hands that write, feet that jump, and minds that imagine—brings authentic contentment.' }
    ],
    readingSections: [
      {
        heading: '1. The Monkey Sees His River Reflection',
        body: '"Mother, mother! Help, a monster!" cried the little monkey looking into the river. "That is not a monster," said his mother, "that is you! You wanted a giraffe’s neck, an elephant’s trunk, and zebra stripes!" The monkey threw the wand into the river and was happy to be himself again.',
        tip: 'True confidence comes from knowing and loving who you are inside.'
      }
    ]
  }),
  buildChapter(2, 'c2-eng', 'English Language & Literature', {
    chapterNumber: 3,
    title: 'A Smile & The Wind and the Sun (Aesop’s Fable)',
    tagline: 'A smile never reveals its hiding place, contest between Wind and Sun, blowing coat, and gentle warmth',
    summary: 'Discover the winning power of gentleness over force! The sweet poem "A Smile" reminds us that a smile is a funny thing that wrinkles up your face, yet when one smiles at you, one smile makes two! Followed by Aesop’s legendary fable "The Wind and the Sun": the blustering Wind wagers he can make a walking traveler take off his heavy woolen coat faster than the Sun. The Wind blows freezing gale gusts, but the traveler wraps his coat tighter; the Sun smiles warmly, and the sweating man takes off his coat gladly!',
    keyConcepts: [
      { title: 'Persuasion Through Warmth and Kindness', detail: 'Gentle warmth and kind words can achieve what aggressive fury and angry force can never accomplish.' },
      { title: 'The Contagious Magic of Smiling', detail: 'A warm smile spreads happiness instantly from one heart to another without costing anything.' }
    ],
    readingSections: [
      {
        heading: '1. The Sun’s Winning Smile',
        body: 'The Sun shone brightly with golden gentle warmth. The traveler felt the air growing warm and wiped sweat from his brow. Soon, he unbuttoned his coat and took it off with relief. "I have won!" smiled the Sun to the humbled Wind.',
        tip: 'Kindness is the greatest strength in the world.'
      }
    ]
  }),
  buildChapter(2, 'c2-eng', 'English Language & Literature', {
    chapterNumber: 4,
    title: 'Rain (Robert Louis Stevenson) & Storm in the Garden (Sunu-sunu Snail)',
    tagline: 'Rain falling on field and tree, umbrellas, Sunu-sunu the baby snail, lightning flash, and ants under flowerpot',
    summary: 'Experience the sights and sounds of a thrilling garden rainstorm! Robert Louis Stevenson’s classic poem "Rain" describes raindrops pattering all around on green fields, tall trees, umbrellas, and ships at sea. Followed by "Storm in the Garden": Sunu-sunu, a curious baby snail, is visiting his friends the ants. Suddenly, thunder crashes (Gadam-gudum!), lightning flashes (Zzzack-zzzack!), and heavy raindrops fall (Sita-sita, pita-pita!). Sunu-sunu pulls his head and tail safely into his hard shell, staying completely dry!',
    keyConcepts: [
      { title: 'Sound Words (Onomatopoeia) in Stories', detail: 'Vivid words that mimic natural sounds: Gadam-gudum (thunder), Sita-sita (light rain), Flip-flip (wind).' },
      { title: 'Natural Animal Shelters in Weather', detail: 'Snails carry their stone-hard shell homes on their backs, protecting their soft bodies from storms and predators.' }
    ],
    readingSections: [
      {
        heading: '1. Sunu-sunu Tells His Mother',
        body: 'Sunu-sunu rushed home to his mother sitting under a flat stone. "Mother, I saw trees swaying Shay-shay! I saw lightning flashing Zzak-zzak! I heard thunder roaring Gadam-gudum! But look at me, mother, I didn’t get wet at all!"',
        tip: 'Curiosity combined with safety awareness makes exploring nature a thrilling adventure.'
      }
    ]
  }),
  buildChapter(2, 'c2-eng', 'English Language & Literature', {
    chapterNumber: 5,
    title: 'Zoo Manners (Eileen Mathias) & Curlylocks and the Three Bears',
    tagline: 'Respecting animals at zoo, camel hump pride, Curlylocks tasting porridge, big chair, and soft baby bed',
    summary: 'Practice gentle manners with wild animals and enjoy classic fairytale adventure! Eileen Mathias’s poem "Zoo Manners" reminds visitors not to laugh or make fun of the camel’s proud hump, but to treat zoo animals with quiet respect. Coupled with the beloved English fairytale "Curlylocks and the Three Bears": curious girl Curlylocks wanders into the cottage of Papa Bear, Mama Bear, and Baby Bear. She tastes hot, cold, and "just right" warm porridge, tests the little wooden chair, and falls fast asleep in Baby Bear’s cozy bed!',
    keyConcepts: [
      { title: 'Respectful Animal Etiquette', detail: 'Wild animals have dignity and feelings; never tease, taunt, or throw stones at creatures in zoological parks or nature.' },
      { title: 'Fairytale Comparisons and Opposites', detail: 'Papa Bear’s porridge was too hot, Mama Bear’s too cold, Baby Bear’s just right; big chair, medium chair, tiny chair.' }
    ],
    readingSections: [
      {
        heading: '1. The Three Bears Return Home',
        body: '"Someone has been eating my porridge!" growled Papa Bear in his big gruff voice. "And someone has eaten all mine up!" squeaked Baby Bear in his tiny baby voice. Curlylocks woke up, saw three bears, jumped out the open window, and ran all the way home!',
        tip: 'Always knock and seek permission before entering someone else’s home or touching their belongings.'
      }
    ]
  })
];

export const class2Curriculum: Subject[] = [
  {
    id: 'c2-math',
    name: 'Mathematics (Math-Magic)',
    code: 'MATH-201',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 10-chapter Class 2 syllabus: Long & Round, Counting in Groups, How Much Can You Carry, Counting in Tens, Footprints, Jugs & Mugs, Tens & Ones, My Funday, Lines & Lines, and How Many Ponytails.',
    chapters: mathChapters
  },
  {
    id: 'c2-sci',
    name: 'Environmental Studies (EVS / Science)',
    code: 'EVS-201',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete Class 2 syllabus: All About Me & My Senses, Food for Health, Clothes We Wear, Our Homes & Helpers, and Plants & Animals in Our World.',
    chapters: scienceChapters
  },
  {
    id: 'c2-eng',
    name: 'English Language & Literature (Marigold)',
    code: 'ENG-201',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 2 literature anthology: First Day at School & Haldi, I am Lucky & I Want, A Smile & The Wind and Sun, Rain & Sunu-sunu Snail, and Zoo Manners & Curlylocks.',
    chapters: englishChapters
  }
];
