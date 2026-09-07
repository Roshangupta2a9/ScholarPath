import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Shapes and Space (Spatial Relationships & Basic Shapes)',
    tagline: 'The Arab and his camel, Inside/Outside, Bigger/Smaller, Top/Bottom, Rolling/Sliding, and sorting shapes',
    summary: 'Explore space and spatial directions through playful stories! Read about the kind Arab and his cold camel: the camel asks to put his nose inside the tent, then his head, then his neck, until the camel is completely Inside and the poor Arab is Outside in the freezing desert! Identify spatial positions: Top of tree vs Bottom, Nearer vs Farther, and sort everyday items into circles, squares, triangles, and spheres.',
    keyConcepts: [
      { title: 'Spatial Opposites', detail: 'Inside vs Outside, Bigger vs Smaller, Top vs Bottom, Nearer vs Farther, Above vs Below.' },
      { title: 'Rolling vs Sliding Shapes', detail: 'Round balls roll smoothly down an inclined plank; flat square blocks slide down without rolling.' }
    ],
    readingSections: [
      {
        heading: '1. The Wise Grandmother and the Lamb',
        body: 'A little lamb returning home through the jungle hid inside a hollow wooden Dholak drum. Rolling safely down the hill past the hungry wolf, the round drum rolled all the way to grandmother’s cottage!',
        tip: 'Spherical shapes roll easily because they have no corners or flat edges.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Numbers from One to Nine (Counting & Rhymes)',
    tagline: 'As many as, counting rhymes (One, one, one little baby; Two, two, two little children), and digits 1 to 9',
    summary: 'Master counting from 1 to 9 with joyful nursery rhymes! Pair matching collections: one cat for one mouse, one rabbit for one carrot. Sing number songs: 1 little baby eating a bun; 2 little children going to the zoo; 3 green parrots flying free; 4 hungry pups; 5 honeybees; 6 sharp nails; 7 little dwarfs; 8 fat rats; 9 red ants walking in a line. Count fingers and write numerals 1 through 9.',
    keyConcepts: [
      { title: 'One-to-One Correspondence', detail: 'Matching each object in a group with exactly one counting number word and digit.' },
      { title: 'Concept of Zero (0)', detail: 'If there are 3 mangoes in a basket and you eat all 3, zero (0) mangoes are left.' }
    ],
    readingSections: [
      {
        heading: '1. Counting on Your Fingers',
        body: 'You have five fingers on your left hand and five fingers on your right hand. Counting fingers from 1 to 10 is your very first living counting tool!',
        tip: 'Practice writing each number digit slowly with smooth pencil strokes.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Addition (Putting Together & One More)',
    tagline: 'Two green parrots on a tree plus one more makes three, addition sign (+), and dot dominoes',
    summary: 'Learn the magic of putting things together! "One green parrot, singing soft and true; one more joins him, making them TWO! Two green parrots, resting on a tree; one more flies in, making them THREE!" Count dots on game dice, combine apples in bowls (3 + 2 = 5), and discover that changing the order does not change the answer (2 + 3 = 5 and 3 + 2 = 5).',
    keyConcepts: [
      { title: 'Addition is Combining Collections', detail: 'Bringing two groups together to find the total sum; represented by the plus sign (+).' },
      { title: 'Commutative Property of Addition', detail: '3 + 2 gives the exact same result as 2 + 3; order does not change the sum.' }
    ],
    readingSections: [
      {
        heading: '1. Adding Zero to a Number',
        body: 'If you have 4 shiny red balloons and your brother gives you 0 balloons, you still have exactly 4 balloons! Adding zero keeps the number unchanged (4 + 0 = 4).',
        tip: 'Count on your fingers or use colorful beads to verify addition sums.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Subtraction (Taking Away & What Remains)',
    tagline: 'Five juicy mangoes in a basket, taking away two leaves three, minus sign (-), and jumping frogs',
    summary: 'Discover taking away through visual subtraction! If there are 5 ripe yellow mangoes in a basket and a little girl eats 2, exactly 3 mangoes remain (5 - 2 = 3). Watch 4 green frogs resting on a pond log; 1 frog jumps splash into the water, leaving 3 frogs on the log (4 - 1 = 3). Cross out objects with pencil strokes to find remaining balances.',
    keyConcepts: [
      { title: 'Subtraction is Taking Away', detail: 'Removing a smaller quantity from a larger collection; represented by the minus sign (-).' },
      { title: 'Subtracting a Number from Itself', detail: 'If you have 3 flowers and give all 3 away to your teacher, you have 0 flowers left (3 - 3 = 0).' }
    ],
    readingSections: [
      {
        heading: '1. Balloon Pop Subtraction',
        body: 'A boy held 4 colorful helium balloons. Pop! One balloon burst in the wind. How many balloons are left intact? 4 - 1 = 3 balloons!',
        tip: 'Subtraction answers the question: "How many are left?"'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Numbers from Ten to Twenty (Bundles & Teen Numbers)',
    tagline: 'Bundle of 10 matchsticks, 1 ten + 1 one = 11, teen numbers 11 to 20, and counting beads',
    summary: 'Step beyond single digits into the magic of Ten! Gather 10 loose sticks and tie them together with a red ribbon to create 1 Bundle of Ten. Add loose ones: 1 ten + 1 one = 11 (eleven); 1 ten + 2 ones = 12 (twelve); 1 ten + 5 ones = 15 (fifteen); 2 tens = 20 (twenty). Compare numbers to find which is bigger (16 or 12?) and arrange numbers in ascending order.',
    keyConcepts: [
      { title: 'The Concept of Ten', detail: '10 is the very first two-digit number, composed of 1 Ten and 0 Ones.' },
      { title: 'Structure of Teen Numbers', detail: 'Every number from 11 to 19 consists of one group of 10 plus loose individual ones.' }
    ],
    readingSections: [
      {
        heading: '1. Deepak’s Stick Bundles',
        body: 'Deepak collects fallen neem sticks. Tying ten sticks with string makes it fast to count large piles: two bundles of ten make 20 sticks in seconds!',
        tip: '14 is bigger than 9 because 14 has a full ten plus four ones.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Time (Daily Routines & Natural Sequencing)',
    tagline: 'Champa’s day: waking up, brushing teeth, eating breakfast, school bells, playing evening games, and sleeping',
    summary: 'Understand the rhythm of everyday time! Sequence daily activities from sunrise to night: 1) Waking up in the morning; 2) Brushing teeth and taking a bath; 3) Eating breakfast; 4) Studying in school; 5) Eating lunch; 6) Playing football in the evening; 7) Doing homework; 8) Listening to bedtime stories and sleeping under the stars.',
    keyConcepts: [
      { title: 'Sequential Time Order', detail: 'Events happen in chronological order: Morning comes first, followed by Afternoon, Evening, and Night.' },
      { title: 'Activity Duration', detail: 'Brushing teeth takes minutes; school lasts hours; sleeping takes all night.' }
    ],
    readingSections: [
      {
        heading: '1. Which Activity Takes More Time?',
        body: 'Does filling a small water glass take more time or filling a big bath bucket? The bath bucket takes much longer because it holds more water!',
        tip: 'Following a steady daily routine keeps your body strong and energetic.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Measurement (Comparing Lengths & Body Units)',
    tagline: 'Longer vs Shorter, Taller vs Shorter, measuring with handspans, footsteps, and pencil spans',
    summary: 'Compare lengths and measure without formal rulers! Compare pencils, ladders, and ropes: which is Longer and which is Shorter. Compare heights of family members: who is the Tallest (Papa) and who is the Shortest (Baby sister). Measure classroom desks using your Handspan (spread of palm from thumb to little finger) and classroom floors using Footsteps.',
    keyConcepts: [
      { title: 'Direct Visual Comparison', detail: 'Aligning two items at the same starting baseline to determine which extends further (Longer/Taller).' },
      { title: 'Non-Standard Body Units', detail: 'Handspans (Balisht) and Footsteps (Kadam) used as handy everyday measuring estimates.' }
    ],
    readingSections: [
      {
        heading: '1. Why Body Units Vary',
        body: 'A table measured 6 handspans by a student, but only 4 handspans by the teacher! Because adult hands are larger than children’s hands, standard rulers were invented so everyone gets the exact same number.',
        tip: 'Always start measuring both sticks from the exact same flat edge.'
      }
    ]
  }),
  buildChapter(1, 'c1-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Money (Indian Coins, Notes & Fair Purchases)',
    tagline: 'Recognizing ₹1, ₹2, ₹5, ₹10 coins, buying pencils and clay toys, and combining coins for amounts',
    summary: 'Identify Indian coins and currency notes! Handle shiny coins: ₹1, ₹2, ₹5, and ₹10 coins. Recognize paper banknotes: ₹10, ₹20, and ₹50 notes. Learn to combine coins to pay exact amounts: pay ₹4 using two ₹2 coins, or pay ₹5 using two ₹2 coins and one ₹1 coin. Buy a sharpener for ₹3 or a wooden top for ₹8 at the village market.',
    keyConcepts: [
      { title: 'Coin Denominations', detail: 'Coins come in specific values (₹1, ₹2, ₹5, ₹10); different combinations can equal the same total price.' },
      { title: 'Exchanging Money', detail: 'One ₹10 note is worth the exact same value as ten ₹1 coins or two ₹5 coins.' }
    ],
    readingSections: [
      {
        heading: '1. The Lion and the Ashoka Emblem',
        body: 'Flip any Indian coin to see the National Emblem of India: three majestic lions standing back to back above the motto Satyameva Jayate (Truth Alone Triumphs)!',
        tip: 'Save your spare pocket coins in a piggy bank to build savings habits.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(1, 'c1-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 1,
    title: 'My Body Parts & Wonderful Sense Organs',
    tagline: 'Head, eyes, ears, nose, mouth, hands, legs, two eyes to see, two ears to hear, and body cleanliness',
    summary: 'Celebrate your wonderful body from head to toe! Point to body parts: Head with black hair, Eyes, Ears, Nose, Mouth with white teeth, Hands with fingers, and Legs with toes. Learn how your five senses help you explore the world: Eyes see vibrant rainbows; Ears hear birds singing; Nose smells mother’s cooking; Tongue tastes sweet mangoes; Hands touch soft woolly puppies.',
    keyConcepts: [
      { title: 'External Body Parts', detail: 'Head, neck, shoulders, arms, hands, chest, stomach, legs, and feet.' },
      { title: 'Functions of Senses', detail: 'Each sense organ connects us to our environment, keeping us safe and happy.' }
    ],
    readingSections: [
      {
        heading: '1. Singing the Body Song',
        body: '"Two little eyes to look around, two little ears to hear each sound; one little nose to smell what’s sweet, one little mouth that loves to eat!"',
        tip: 'Wash your hands thoroughly with soap for 20 seconds before every meal.'
      }
    ]
  }),
  buildChapter(1, 'c1-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 2,
    title: 'My Loving Family & Our Happy Home',
    tagline: 'Parents, brother, sister, grandparents, helping at home, eating meals together, and loving care',
    summary: 'Cherish family love and home safety! Meet family members: Mother, Father, Brother, Sister, Grandmother (Dadi/Nani), and Grandfather (Dada/Nana). Learn how family members love and care for each other: parents cook delicious meals, grandparents tell exciting bedtime stories, and children help by keeping toys and shoes in their proper places.',
    keyConcepts: [
      { title: 'Family Types', detail: 'Small/Nuclear family (parents and children); Joint/Extended family (grandparents, uncles, aunts, and cousins living together).' },
      { title: 'Cooperation at Home', detail: 'Helping each other with simple chores creates a clean, joyful, and peaceful household.' }
    ],
    readingSections: [
      {
        heading: '1. Rooms in Our House',
        body: 'Our house protects us from hot sun, cold winds, wild animals, and rain. It has a living room to sit with guests, a kitchen to cook food, a bedroom to sleep, and a bathroom to bathe.',
        tip: 'Always say "Thank you" when someone helps you at home.'
      }
    ]
  }),
  buildChapter(1, 'c1-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 3,
    title: 'Healthy Food & Good Habits for Life',
    tagline: 'Fresh fruits, green vegetables, drinking milk, washing hands, daily bath, and magic polite words',
    summary: 'Grow strong and healthy with wholesome food and polite habits! Learn why our body needs food: food gives us energy to run, jump, and learn, and helps us grow tall. Eat fresh apples, bananas, spinach, and drink a glass of warm milk every day. Practice good habits: brushing teeth twice a day, sleeping 8 hours every night, and using three magic polite words: Please, Thank You, and Sorry!',
    keyConcepts: [
      { title: 'Healthy vs Unhealthy Foods', detail: 'Fresh fruits, vegetables, milk, and nuts make us energetic and healthy; excessive sweets and colas cause cavities and lethargy.' },
      { title: 'The Three Magic Words', detail: 'Say "Please" when asking for something, "Thank you" when receiving help or gifts, and "Sorry" when you make a mistake.' }
    ],
    readingSections: [
      {
        heading: '1. Why We Need Water',
        body: 'Water washes away body wastes and keeps our body cool. Drink plenty of clean water every day, especially after running and playing outdoors!',
        tip: 'Never waste food; take only as much food on your plate as you can finish.'
      }
    ]
  }),
  buildChapter(1, 'c1-sci', 'Environmental Studies (EVS)', {
    chapterNumber: 4,
    title: 'Animals and Plants Around Us',
    tagline: 'Friendly dogs and cats, gentle farm cows, birds in the sky, green garden leaves, and colorful flowers',
    summary: 'Discover living friends in the neighborhood! Meet domestic animals: the loyal Dog that guards our house, the Cat that drinks milk, the gentle Cow that gives nutritious milk, and chirping birds that peck grains. Step into the green garden: observe tall trees with thick trunks, blooming red roses and yellow sunflowers, and learn that plants need soil, water, and sunshine to grow.',
    keyConcepts: [
      { title: 'Living Things Grow', detail: 'Both animals and plants are living things: they breathe, drink water, grow bigger, and need care.' },
      { title: 'Gentleness Toward Animals', detail: 'Animals feel love, pain, and hunger; never throw stones at stray dogs or pull cats’ tails.' }
    ],
    readingSections: [
      {
        heading: '1. How a Tiny Seed Grows',
        body: 'Plant a tiny bean seed in a small pot of soil. Water it gently every morning. In a few days, a tiny green shoot pops up toward the sunshine!',
        tip: 'Water home plants every morning and enjoy the beauty of blooming flowers.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(1, 'c1-eng', 'English Language & Literature', {
    chapterNumber: 1,
    title: 'A Happy Child & Three Little Pigs (Sonu, Monu and Gonu)',
    tagline: 'Red house, laughing child under green shade tree, three little pigs, straw, sticks, and brick house',
    summary: 'Sing with a happy child and outsmart the big bad wolf! The cheerful poem "A Happy Child" celebrates a child living in a sweet little red house, laughing and playing all day long under a green shade tree. Paired with the beloved classic "Three Little Pigs": Sonu built a house of straw, Monu built a house of sticks, but Gonu built a strong house of red bricks! When the big bad wolf huffed and puffed, he blew down the straw and stick huts, but could not blow down the strong brick house!',
    keyConcepts: [
      { title: 'Joy in Simplicity', detail: 'Finding happiness in play, family, and peaceful nature under a shade tree.' },
      { title: 'Strength of Hard Work and Sturdy Materials', detail: 'Taking the time to build things properly and strongly (like Gonu’s brick house) protects us when challenges and difficulties arrive.' }
    ],
    readingSections: [
      {
        heading: '1. The Wolf Huff and Puff',
        body: '"I will huff and I will puff, and I will blow your house in!" growled the big bad wolf. But Gonu’s brick house was very strong, and the wolf could not blow it down! Sonu, Monu, and Gonu lived happily together in the red brick house.',
        tip: 'Hard work and patience always yield strong, lasting results.'
      }
    ]
  }),
  buildChapter(1, 'c1-eng', 'English Language & Literature', {
    chapterNumber: 2,
    title: 'After a Bath & The Bubble, the Straw and the Shoe',
    tagline: 'Drying with a towel, wishing to be a dog shaking dry, three friends in forest crossing river',
    summary: 'Giggle through bath time and learn safe teamwork! The cute poem "After a Bath" follows a child trying to wipe dry with a soft towel, wishing he were a dog so he could just shake, shake, shake himself dry in three seconds! Followed by "The Bubble, the Straw and the Shoe": three friends set out into the woods and arrive at a wide rushing river. When the Straw stretches across like a bridge and the Shoe jumps heavily on him, the straw snaps, the shoe sinks, and the Bubble laughs so hard he pops with a big bang!',
    keyConcepts: [
      { title: 'Playful Bathroom Rhymes', detail: 'Turning daily grooming routines into imaginative poetry with playful animal comparisons.' },
      { title: 'Careful Thinking in Problem Solving', detail: 'The Shoe should not have jumped heavily on a delicate straw; understanding material limits prevents accidents.' }
    ],
    readingSections: [
      {
        heading: '1. Shaking Dry Like a Puppy',
        body: '"Just think how much less time I’d take, if I were a little puppy dog and could just shake, shake, shake!" laughs the child wrapping up in a big warm bath towel.',
        tip: 'Always dry your feet carefully after bathing so you don’t slip on wet floors.'
      }
    ]
  }),
  buildChapter(1, 'c1-eng', 'English Language & Literature', {
    chapterNumber: 3,
    title: 'One Little Kitten & Lalu and Peelu (The Hen and Her Chicks)',
    tagline: 'Animals counting 1 to 15, mother hen, red Lalu eating red chilli, and yellow Peelu bringing sweet laddoo',
    summary: 'Count wonderful animals and taste the sweetness of brotherly love! The delightful poem "One Little Kitten" counts animals from 1 to 15: 1 kitten, 2 big cats, 3 baby butterflies, 4 big rats, 5 fat fishes, all the way to 15 tail-wagging whales! Followed by the charming tale "Lalu and Peelu": mother hen has two chicks—red Lalu (who loves red things) and yellow Peelu (who loves yellow things). When Lalu bites into a fiery hot red chilli, his mouth burns and he screams; sweet Peelu rushes over carrying a round yellow jaggery laddoo to soothe his tongue!',
    keyConcepts: [
      { title: 'Counting with Animal Names', detail: 'Associating number words with vivid animal characters expands vocabulary and numerical familiarity.' },
      { title: 'Caring Brotherly Affection', detail: 'Peelu immediately rushed to help his brother in distress, sharing his sweet treat without hesitation.' }
    ],
    readingSections: [
      {
        heading: '1. Peelu Brings the Sweet Laddoo',
        body: 'Lalu’s mouth was burning! Tears rolled down his cheeks. Peelu ran and brought a yellow laddoo. Lalu gobbled up the laddoo; soon his mouth stopped burning and he cuddled his mother and brother gratefully!',
        tip: 'Always share your toys and snacks kindly with brothers, sisters, and friends.'
      }
    ]
  }),
  buildChapter(1, 'c1-eng', 'English Language & Literature', {
    chapterNumber: 4,
    title: 'Once I Saw a Little Bird & Mittu and the Yellow Mango',
    tagline: 'Hop, hop, hop little bird at window, green parrot Mittu with red beak, big black crow, and red balloon pop',
    summary: 'Chirp with window birds and admire parrot cleverness! In "Once I Saw a Little Bird", a child spots a little bird hopping on the windowsill; crying "Little bird, will you stop, stop, stop?", the child runs to say hello, but the bird shakes its tail and flies away! Paired with "Mittu and the Yellow Mango": green parrot Mittu spots a delicious ripe yellow mango high on a tree, but a big black crow shouts "Caw, caw, go away!" Clever Mittu spots a red balloon on the grass, carries it up behind the crow, and pecks it—BANG! The frightened crow flies away, and Mittu feasts on the sweet mango!',
    keyConcepts: [
      { title: 'Gentle Observation of Wild Birds', detail: 'Watching birds hopping and flying outside windows instills a love for nature and wildlife.' },
      { title: 'Clever Problem Solving Over Force', detail: 'Mittu did not fight the aggressive crow physically; he used clever ingenuity with a balloon to achieve his goal peacefully.' }
    ],
    readingSections: [
      {
        heading: '1. Mittu’s Delicious Mango Feast',
        body: 'Mittu pecked the balloon with his red beak. POP! A loud noise echoed across the tree. "Caw! A big gun is after me!" screamed the crow, flying away terrified. Mittu sat peacefully on the branch, eating the yummy yellow mango.',
        tip: 'Intelligence and quick thinking triumph over bullying.'
      }
    ]
  }),
  buildChapter(1, 'c1-eng', 'English Language & Literature', {
    chapterNumber: 5,
    title: 'Merry-Go-Round & Circle (Grandmother and Mohini)',
    tagline: 'Up and down on wooden horse, grandmother drawing circle, turning circle into ball, balloon, and moon',
    summary: 'Spin on the carousel and create wondrous art from simple circles! The lively poem "Merry-Go-Round" captures the dizzying joy of climbing up on the big brown wooden horse, going round and round and up and down! Followed by "Circle": grandmother sits with little granddaughter Mohini and draws a simple circle. She adds three lines inside to make a bouncy rubber ball; she adds zigzag strings to make floating balloons; and with a few smiles and dots, she draws the glowing Moon, the bright Sun, and Mohini’s own smiling face!',
    keyConcepts: [
      { title: 'The Circle as a Foundation of Drawing', detail: 'Simple geometric shapes form the building blocks for drawing everyday objects: wheels, apples, faces, and stars.' },
      { title: 'Bonding Across Generations', detail: 'Grandparents nurturing children’s artistic imagination through simple shared paper-and-pencil games.' }
    ],
    readingSections: [
      {
        heading: '1. Mohini Draws Her Own Face',
        body: 'Mohini drew a big circle. Then she drew eyes, a nose, a mouth, and curly hair. "Look, grandmother, it’s really me!" clapped Mohini with joy.',
        tip: 'Every great artist began by drawing simple circles, lines, and shapes on paper.'
      }
    ]
  })
];

export const class1Curriculum: Subject[] = [
  {
    id: 'c1-math',
    name: 'Mathematics (Math-Magic)',
    code: 'MATH-101',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 8-chapter Class 1 syllabus: Shapes & Space, Numbers 1 to 9, Addition, Subtraction, Numbers 10 to 20, Time & Daily Routine, Measurement, and Money.',
    chapters: mathChapters
  },
  {
    id: 'c1-sci',
    name: 'Environmental Studies (EVS / Science)',
    code: 'EVS-101',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete Class 1 syllabus: My Body Parts & Senses, My Loving Family & Home, Healthy Food & Good Habits, and Animals & Plants Around Us.',
    chapters: scienceChapters
  },
  {
    id: 'c1-eng',
    name: 'English Language & Literature (Marigold)',
    code: 'ENG-101',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 1 literature anthology: A Happy Child & Three Little Pigs, After a Bath & The Bubble, One Little Kitten & Lalu and Peelu, Once I Saw a Bird & Mittu, and Merry-Go-Round & Circle.',
    chapters: englishChapters
  }
];
