import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Knowing Our Numbers (Place Value & Large Quantities)',
    tagline: 'Indian vs International numeration system, commas, estimation, brackets, and Roman numerals',
    summary: 'Master large numbers up to crores and billions! Contrast the Indian Place Value System (lakhs, crores with 3:2:2 comma grouping) with the International System (millions, billions with 3:3:3 comma grouping). Estimate quantities by rounding off to nearest tens, hundreds, and thousands. Use brackets to clarify arithmetic operations, and decode Roman Numerals (I, V, X, L, C, D, M).',
    keyConcepts: [
      { title: 'Indian vs International System', detail: '1 crore = 10 million; 100 lakhs = 1 crore; International grouping separates every three digits with commas (e.g. 25,432,100).' },
      { title: 'Roman Numerals Rules', detail: 'Symbol V, L, D are never repeated and never subtracted; symbol I can be subtracted only from V and X; symbol X only from L and C.' }
    ],
    readingSections: [
      {
        heading: '1. The Beauty of Comma Grouping',
        body: 'In 7,34,54,321 (Indian), commas separate units, thousands, lakhs, and crores. In 73,454,321 (International), commas demarcate thousands and millions.',
        tip: 'Rounding 485 to the nearest hundred looks at the tens digit: 8 ≥ 5, so it rounds up to 500.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Whole Numbers (Properties & Number Line)',
    tagline: 'Predecessor, successor, whole numbers (0, 1, 2, ...), number line operations, and closure/distributivity',
    summary: 'Explore natural and whole numbers! Predecessor of a number is n - 1; Successor is n + 1. Whole numbers include zero along with all natural counting numbers (W = {0, 1, 2, ...}). Perform addition, subtraction, and multiplication on the number line. Discover properties of whole numbers: Closure, Commutativity (a + b = b + a), Associativity, and Distributive property of multiplication over addition.',
    keyConcepts: [
      { title: 'Distributive Property of Whole Numbers', detail: 'a × (b + c) = (a × b) + (a × c), allowing easy mental computation such as 12 × 105 = 12 × (100 + 5) = 1200 + 60 = 1260.' },
      { title: 'Division by Zero', detail: 'Division by zero is undefined because repeatedly subtracting zero from a number never reduces the dividend.' }
    ],
    readingSections: [
      {
        heading: '1. Number Line Addition and Subtraction',
        body: 'To add 3 to 4, start at 4 and make 3 steps to the right, landing at 7. To subtract 2 from 6, start at 6 and make 2 steps to the left, reaching 4.',
        tip: 'Zero is the smallest whole number, and there is no largest whole number.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Playing with Numbers (Factors, Multiples, Prime & HCF/LCM)',
    tagline: 'Divisibility rules (2, 3, 5, 9, 11), Sieve of Eratosthenes, prime factorisation, HCF, and LCM',
    summary: 'Unravel the atomic building blocks of numbers! Differentiate factors (exact divisors) from multiples. Identify prime numbers (exactly two distinct factors: 1 and itself) and composite numbers using the ancient Sieve of Eratosthenes. Master divisibility rules for 2, 3, 4, 5, 6, 8, 9, and 11. Find Highest Common Factor (HCF) and Lowest Common Multiple (LCM) by prime factorisation and common division methods.',
    keyConcepts: [
      { title: 'Divisibility Rule for 11', detail: 'A number is divisible by 11 if the difference between the sum of digits at odd places and the sum of digits at even places is either 0 or a multiple of 11.' },
      { title: 'HCF × LCM = Product of Numbers', detail: 'For any two positive numbers a and b: HCF(a, b) × LCM(a, b) = a × b.' }
    ],
    readingSections: [
      {
        heading: '1. Twin Primes and Co-Primes',
        body: 'Twin primes are pairs of prime numbers that differ by 2 (e.g., 3 and 5, 11 and 13). Two numbers are co-prime if their only common factor is 1 (e.g., 4 and 9 are co-prime even though neither is prime).',
        tip: '2 is the only even prime number; all other prime numbers are odd.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Basic Geometrical Ideas (Points, Lines, Polygons & Circles)',
    tagline: 'Point, line, ray, line segment, intersecting vs parallel lines, curves, polygons, angles, and circle anatomy',
    summary: 'Discover fundamental geometric foundations! Define a Point (dimensionless location mark), Line Segment (shortest distance between two points), Line (infinite in both directions), and Ray (one fixed starting point extending infinitely). Study intersecting and parallel lines. Explore polygons, vertices, edges, diagonals, angles, and circle anatomy: center, radius, diameter, chord, sector, and segment.',
    keyConcepts: [
      { title: 'Ray vs Line Segment vs Line', detail: 'A line segment has two fixed endpoints; a ray has one endpoint; a line has zero endpoints and extends infinitely in both directions.' },
      { title: 'Circle Anatomy', detail: 'Diameter is the longest chord passing through the center (d = 2r); a sector is bounded by two radii and an arc (like a pizza slice).' }
    ],
    readingSections: [
      {
        heading: '1. Open vs Closed Curves and Polygons',
        body: 'A curve is closed if its ends join together; an interior region enclosed by a simple closed curve made entirely of line segments is called a polygon.',
        tip: 'The boundary of an angle is formed by two rays sharing a common origin called the vertex.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Understanding Elementary Shapes (Angles, Triangles & Polyhedra)',
    tagline: 'Right, straight, complete angles, protractor degrees, classifying triangles, quadrilaterals, and 3D shapes',
    summary: 'Measure, classify, and visualize geometric shapes! Measure angles with a protractor: Acute (<90°), Right (90°), Obtuse (between 90° and 180°), Straight (180°), Reflex (>180°), and Complete (360°). Classify triangles by sides (scalene, isosceles, equilateral) and by angles (acute, right, obtuse). Identify quadrilaterals (trapezium, parallelogram, rectangle, rhombus, square) and 3D polyhedra (cubes, prisms, pyramids, spheres).',
    keyConcepts: [
      { title: 'Revolution Fractions and Clock Directions', detail: 'A complete clockwise revolution is 360°; North to East is ¼ turn (90°); North to South is ½ turn (180°).' },
      { title: '3D Solid Features', detail: 'Faces are flat polygonal surfaces; Edges are line segments where two faces meet; Vertices are sharp points where three or more edges meet.' }
    ],
    readingSections: [
      {
        heading: '1. Why Triangles are Structurally Rigid',
        body: 'Triangles are used extensively in bridges, roof trusses, and cranes because once their three side lengths are fixed, their angles cannot deform without bending the beams, unlike quadrilaterals which easily flex into parallelograms.',
        tip: 'A right-angled triangle can never be equilateral, because an equilateral triangle must have all three angles equal to 60°.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Integers (Positive, Negative & The Number Line)',
    tagline: 'Negative numbers in temperature, debt, elevations below sea level, number line operations, and integer addition/subtraction',
    summary: 'Step beyond zero into negative numbers! Understand negative integers as opposite directional values: temperatures below freezing point (-5°C), debt, elevator basements, and ocean depths below sea level. Plot integers (... -3, -2, -1, 0, 1, 2, 3 ...) on the number line. Add and subtract integers using number line hops and sign rules (subtracting a negative is equivalent to adding a positive: a - (-b) = a + b).',
    keyConcepts: [
      { title: 'The Set of Integers (Z)', detail: 'Includes negative integers, zero, and positive integers: Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}.' },
      { title: 'Integer Subtraction Rule', detail: 'To subtract an integer, add its additive inverse: a - b = a + (-b), and a - (-b) = a + b.' }
    ],
    readingSections: [
      {
        heading: '1. Absolute Magnitude vs Value',
        body: 'On the horizontal number line, any number situated to the right is greater than numbers to its left. Thus, -2 is greater than -8, even though 8 is larger than 2.',
        tip: 'Zero is neither a positive nor a negative integer.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Fractions (Proper, Improper, Mixed & Equivalent)',
    tagline: 'Numerator/denominator, proper (<1), improper (≥1), mixed numerals, cross-multiplication, and simplest form',
    summary: 'Master parts of a whole! Define fractions a/b where b ≠ 0. Differentiate Proper fractions (numerator < denominator, value < 1) from Improper fractions (numerator ≥ denominator, value ≥ 1) and convert to Mixed Fractions (quotient + remainder/divisor). Generate equivalent fractions by multiplying or dividing numerator and denominator by the same non-zero number. Reduce fractions to simplest form and order fractions with unlike denominators.',
    keyConcepts: [
      { title: 'Proper vs Improper Fractions', detail: 'Proper fraction represents part of a single whole (e.g., 3/4); Improper fraction represents more than one whole (e.g., 7/4 = 1 ¾).' },
      { title: 'Equivalent Fractions Test', detail: 'Two fractions a/b and c/d are equivalent if and only if their cross-products are equal: a × d = b × c.' }
    ],
    readingSections: [
      {
        heading: '1. Fraction on a Number Line',
        body: 'To represent 3/5 on a number line, divide the unit length between 0 and 1 into 5 equal sub-intervals and mark the third graduation from 0.',
        tip: 'To add fractions with different denominators, first convert them to equivalent fractions with a common LCM denominator.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Decimals (Place Value, Tenths, Hundredths & Money)',
    tagline: 'Tenths (1/10), hundredths (1/100), place value table, converting fractions to decimals, metric units, and currency',
    summary: 'Master decimal notation as an extension of the place value system! Discover that moving one place to the right of the units digit represents Tenths (1/10 = 0.1), followed by Hundredths (1/100 = 0.01) and Thousandths (1/1000 = 0.001). Convert fractions with denominators 10, 100, 1000 into decimals and vice-versa. Apply decimals to Indian currency (Rupees and Paise: 1 Rupee = 100 Paise) and metric lengths (cm to m, m to km).',
    keyConcepts: [
      { title: 'Decimal Place Value System', detail: 'Digits to the right of the decimal point represent fractional tenths, hundredths, and thousandths.' },
      { title: 'Metric Conversions with Decimals', detail: '1 meter = 100 cm, so 5 cm = 0.05 m; 1 kilometer = 1000 m, so 75 m = 0.075 km.' }
    ],
    readingSections: [
      {
        heading: '1. Adding and Subtracting Decimals',
        body: 'When adding or subtracting decimals, write numbers vertically aligning the decimal points directly under each other, inserting trailing placeholder zeros if necessary.',
        tip: 'Adding zeros to the extreme right of a decimal number does not alter its value: 0.5 = 0.50 = 0.500.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Data Handling (Tally Marks, Pictographs & Bar Graphs)',
    tagline: 'Organizing raw data, tally mark grouping in 5s, pictograph scales, and uniform vertical bar graphs',
    summary: 'Collect, organize, and interpret empirical information! Record raw observations in frequency tables using tally marks grouped in bundles of five. Construct Pictographs where a single graphic symbol represents multiple units (e.g. one picture of a car represents 100 cars). Construct Bar Graphs with uniform bar widths, equal spacing between bars, and a labeled quantitative scale on the vertical axis.',
    keyConcepts: [
      { title: 'Tally Marks Bundling', detail: 'Four vertical strokes crossed diagonally by a fifth stroke (卌) facilitates rapid visual counting in multiples of five.' },
      { title: 'Scale in Bar Graphs', detail: 'Choosing an appropriate scale (e.g., 1 unit length = 10 students) ensures the graph fits neatly on the page while displaying clear comparative heights.' }
    ],
    readingSections: [
      {
        heading: '1. Reading and Interpreting Pictographs',
        body: 'Always inspect the key at the bottom of a pictograph! If one apple icon represents 20 kilograms, then 3½ icons represent 3 × 20 + 10 = 70 kilograms.',
        tip: 'The height of each bar in a bar graph is directly proportional to the numerical frequency of that category.'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Mensuration (Perimeter & Area of Rectangles and Squares)',
    tagline: 'Perimeter P = 2(l+b), square perimeter 4s, area of rectangle l×b, and square area s²',
    summary: 'Measure spatial boundaries and surface areas! Define Perimeter as the continuous distance around the boundary of a closed planar shape. Derive the perimeter of a rectangle: P = 2 × (Length + Breadth) and of a regular polygon: (number of sides × side length). Define Area as the surface enclosed within closed boundaries. Derive the area of a rectangle (Length × Breadth) and of a square (Side × Side).',
    keyConcepts: [
      { title: 'Perimeter vs Area', detail: 'Perimeter measures linear boundary length (units: cm, m); Area measures total 2D surface covered (units: cm², m²).' },
      { title: 'Rectangle Formulae', detail: 'Perimeter = 2(l + b); Area = l × b.' }
    ],
    readingSections: [
      {
        heading: '1. Fencing vs Paving Problems',
        body: 'Fencing a garden or putting a ribbon along a border requires calculating Perimeter; planting grass seeds or tiling a kitchen floor requires calculating Area.',
        tip: 'A square of side 1 cm contains exactly 1 cm² of area; a square of side 1 m contains 10,000 cm²!'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Algebra (Variables, Expressions & Simple Equations)',
    tagline: 'Matchstick patterns, generalized rules, variables as unknown numbers, and trial-and-error equations',
    summary: 'Enter the world of generalized arithmetic! Discover algebraic rules by building matchstick patterns (e.g. forming letters L, C, E with n matchsticks). Introduce the concept of a Variable (denoted by letters x, y, m, l) which does not have a fixed value. Form algebraic expressions combining variables and constants (e.g. 2n + 1). Formulate simple algebraic equations with an equals sign (=) and solve them via systematic inspection and trial.',
    keyConcepts: [
      { title: 'What is a Variable?', detail: 'An entity whose value can change and vary; used to express general arithmetic rules and unknown quantities.' },
      { title: 'What is an Equation?', detail: 'A mathematical condition on a variable stating that two algebraic expressions have equal value (LHS = RHS).' }
    ],
    readingSections: [
      {
        heading: '1. Matchstick Geometry Formulas',
        body: 'To form one letter L requires 2 matchsticks; two Ls require 4; three Ls require 6. For n letters, the rule is 2n matchsticks! Algebra allows us to write rules for ANY number of shapes.',
        tip: 'An expression does NOT have an equals sign (e.g., 2x + 5), but an equation MUST have an equals sign (e.g., 2x + 5 = 15).'
      }
    ]
  }),
  buildChapter(6, 'c6-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Ratio and Proportion (Unitary Method)',
    tagline: 'Comparing by division, colon notation a:b, proportion a:b :: c:d, product of extremes, and unitary method',
    summary: 'Compare quantities mathematically! Define Ratio as comparison of two quantities of the same kind by division (written as a : b). Simplify ratios to lowest terms. Define Proportion as equality of two ratios: a : b :: c : d (where a and d are extreme terms; b and c are middle terms, and Product of Extremes = Product of Means). Master the Unitary Method: calculate the value of one single unit first to find the value of the required number of units.',
    keyConcepts: [
      { title: 'Ratio Simplest Form', detail: 'A ratio a : b must compare quantities in the same units (e.g., convert meters to cm before comparing); it has no units of its own.' },
      { title: 'The Unitary Method', detail: 'The method in which we first find the value of one unit and then the value of the required number of units (e.g., 6 pens cost ₹60 -> 1 pen costs ₹10 -> 4 pens cost ₹40).' }
    ],
    readingSections: [
      {
        heading: '1. Testing Proportions via Cross Products',
        body: 'Four numbers a, b, c, d are in proportion if a/b = c/d, which means Product of Extremes (a × d) must equal Product of Means (b × c).',
        tip: 'Ratios cannot compare quantities of different dimensions (like comparing height in cm with weight in kg).'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 1,
    title: 'Components of Food (Nutrients & Balanced Diet)',
    tagline: 'Carbohydrates, fats, proteins, vitamins, minerals, dietary fibre (roughage), and deficiency diseases',
    summary: 'Investigate the chemistry of human nutrition! Test foods for starch (blue-black color with iodine), protein (violet color with copper sulphate and caustic soda), and fats (translucent oily patch on paper). Understand dietary roles of energy-giving carbohydrates and fats, bodybuilding proteins, and protective vitamins (A, B, C, D) and minerals (iron, calcium, iodine). Define a balanced diet and diagnose deficiency diseases: scurvy, rickets, beriberi, anemia, and goitre.',
    keyConcepts: [
      { title: 'Major Food Nutrient Classes', detail: 'Carbohydrates & Fats: provide energy; Proteins: growth and tissue repair; Vitamins & Minerals: protect against infections; Roughage: digestive motility.' },
      { title: 'Deficiency Diseases', detail: 'Vitamin A: night blindness; Vitamin C: bleeding gums (scurvy); Vitamin D: soft bones (rickets); Iodine: swollen neck gland (goitre); Iron: anemia.' }
    ],
    readingSections: [
      {
        heading: '1. Why Roughage (Dietary Fibre) is Essential',
        body: 'Dietary fibre cannot be digested by human enzymes and provides no calories, but adds bulk to stool, stimulating peristalsis and helping our body get rid of undigested waste smoothly.',
        tip: 'Fats yield more than twice the energy of carbohydrates per gram, but are slower to metabolize.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 2,
    title: 'Sorting Materials into Groups (Properties of Objects)',
    tagline: 'Lustre, hardness, solubility in water, floating/sinking density, and transparent, translucent, opaque optical traits',
    summary: 'Categorize the physical universe by material properties! Differentiate objects from the materials they are made of (e.g. a tumbler can be made of glass, plastic, or steel). Classify materials by appearance: metallic lustre vs non-lustrous dullness. Test hardness (scratch test). Test solubility in water (sugar dissolves; sand settles). Observe whether objects float or sink. Classify optical transmission: Transparent (glass), Translucent (butter paper), and Opaque (wood, metal).',
    keyConcepts: [
      { title: 'Lustrous Materials', detail: 'Freshly cut metallic surfaces (gold, silver, copper, iron) shine with metallic lustre; exposure to atmospheric air and moisture causes surface tarnish.' },
      { title: 'Optical Properties', detail: 'Transparent: light passes completely through; Translucent: light passes partially with blurry visibility; Opaque: light cannot pass through at all.' }
    ],
    readingSections: [
      {
        heading: '1. Why Grouping Materials is Useful',
        body: 'Grouping materials with similar properties allows scientists and shopkeepers to organize items systematically, study general behavioral patterns, and select the best material for a given purpose (e.g., cooking pans made of heat-conducting metal with heat-insulating plastic handles).',
        tip: 'Liquids like mustard oil and kerosene do not mix with water and form a separate floating top layer (immiscible liquids).'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 3,
    title: 'Separation of Substances (Purification Techniques)',
    tagline: 'Handpicking, threshing, winnowing, sieving, sedimentation, decantation, filtration, and evaporation',
    summary: 'Master mechanical and physical separation of mixtures! Explore traditional agricultural separation: Handpicking (removing stone pebbles from rice), Threshing (beating grain stalks to free seeds), and Winnowing (using wind currents to blow away light husk from heavy grains). Master laboratory methods: Sieving, Sedimentation (heavier impurities settling in water), Decantation (pouring off clean water), Filtration through fine filter paper, and Evaporation to obtain common salt from seawater.',
    keyConcepts: [
      { title: 'Winnowing Principle', detail: 'Separating components of a mixture containing heavier and lighter particles using wind or blowing air currents.' },
      { title: 'Sedimentation and Decantation', detail: 'Sedimentation allows dense insoluble particles to settle to the bottom; decantation gently pours out the supernatant clear liquid without disturbing the sediment.' }
    ],
    readingSections: [
      {
        heading: '1. Harvesting Common Salt from Sea Water',
        body: 'Seawater contains dissolved salts. It is collected in shallow pits (salt pans) exposed to sunlight. Solar heat evaporates the water into vapor, leaving behind solid salt crystals that are gathered and refined for consumption.',
        tip: 'A saturated solution is one in which no more solute can dissolve at that particular temperature.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 4,
    title: 'Getting to Know Plants (Herbs, Shrubs, Trees & Venation)',
    tagline: 'Green tender stems (herbs), woody branches near base (shrubs), tall trunks (trees), reticulate vs parallel venation, and flower petals/pistil',
    summary: 'Explore botanical classification and leaf morphology! Classify plants by stem structure and height: Herbs (short, green, tender stems), Shrubs (medium, woody branches near base), Trees (tall, hard thick brown trunk), Climbers (tendrils), and Creepers. Examine leaf structure: petiole, lamina, and venation (reticulate in peepal, parallel in grass/banana). Relate reticulate venation to taproots and parallel venation to fibrous roots. Dissect flower anatomy: sepals, petals, stamens, and pistil.',
    keyConcepts: [
      { title: 'Venation and Root Correlation', detail: 'Plants with reticulate net-like leaf venation have Taproots (e.g., gram, mustard); plants with parallel venation have Fibrous roots (e.g., wheat, grass).' },
      { title: 'Flower Anatomy', detail: 'Sepals (outer green protective leaves), Petals (colorful to attract pollinators), Stamen (male organ: filament and pollen anther), Pistil (female organ: stigma, style, ovary).' }
    ],
    readingSections: [
      {
        heading: '1. Transpiration in Plant Leaves',
        body: 'Tie a transparent polythene bag over a healthy green leafy branch in the sun. Tiny droplets of water will condense inside the bag, proving that leaves release excess water into the air as water vapor through stomata.',
        tip: 'The ovary at the base of the pistil contains small bead-like structures called ovules that develop into seeds.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 5,
    title: 'Body Movements (Skeletal Joints & Animal Locomotion)',
    tagline: 'Ball and socket joint, hinge joint, pivotal joint, cartilage, earthworm peristalsis, snail muscular foot, and fish fins',
    summary: 'Investigate animal biomechanics! Study the human skeletal framework (206 bones in adults). Examine movable synovial joints: Ball and Socket joint (shoulder and hip, multi-directional rotation), Hinge joint (elbow and knee, back-and-forth swing), Pivotal joint (neck rotating head), and Fixed joints (skull bones). Differentiate hard bone from flexible cartilage (ear pinna). Explore animal locomotion: setae and hydrostatic peristalsis in earthworms, muscular slime foot in snails, and streamlined bodies with fins in fish.',
    keyConcepts: [
      { title: 'Ball and Socket Joint', detail: 'The rounded spherical end of one bone fits into the hollow cup cavity of another bone, allowing movement in all directions.' },
      { title: 'How Muscles Move Bones in Pairs', detail: 'Muscles can only pull, they cannot push! Two antagonistic muscles work together: when the biceps contract, the arm bends; when the triceps contract, the arm straightens.' }
    ],
    readingSections: [
      {
        heading: '1. Why Birds Can Fly',
        body: 'Birds have hollow, pneumatic bones that minimize weight, powerful breast muscles attached to a broad keel bone, and aerodynamic wings transformed from forelimbs covered in light feathers.',
        tip: 'Snakes do not have legs; they move by curving their long backbone and ribs into loops that press against the ground to push the body forward.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 6,
    title: 'The Living Organisms & Their Surroundings (Adaptations)',
    tagline: 'Terrestrial vs aquatic habitats, desert cactus/camel adaptations, alpine pines, fish streamlined gills, and respiration/growth traits',
    summary: 'Explore biodiversity and environmental adaptations! Differentiate Biotic components (plants, animals, microbes) from Abiotic components (rocks, soil, air, water, sunlight, temperature). Analyze specialized adaptations: Desert plants (cacti with leaves reduced to spines to prevent transpiration, photosynthetic green stems), Camels (long eyelashes, water storage, padded feet), Mountain trees (conical shape shedding snow), and Fish (streamlined shape, gills, slippery scales).',
    keyConcepts: [
      { title: 'What is Adaptation?', detail: 'The presence of specific features and behavioral habits which enable a plant or animal to live successfully in its particular natural surroundings.' },
      { title: 'Characteristics of All Living Beings', detail: 'Need for nutrition, respiration (cellular energy release), response to stimuli, excretion of wastes, reproduction, growth, and cellular movement.' }
    ],
    readingSections: [
      {
        heading: '1. Respiration in Desert Plants (Cacti)',
        body: 'Desert plants open their stomatal pores at night to absorb carbon dioxide and store an intermediate compound, keeping stomata tightly closed during the scorching day to conserve precious water.',
        tip: 'Whales and dolphins do not have gills; they breathe atmospheric air through blowholes located on top of their heads.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 7,
    title: 'Motion and Measurement of Distances (SI Units & Trajectories)',
    tagline: 'Standard units, International System (SI unit meter), parallax error in rulers, rectilinear, circular, and periodic motion',
    summary: 'Discover the science of precision measurement! Understand why ancient non-standard body units (handspan, cubit, footstep) failed due to body variation across individuals. Adopt the International System of Units (SI unit of length: meter m, where 1 m = 100 cm = 1000 mm). Avoid parallax measurement errors by positioning the eye directly above the mark. Classify physical trajectories: Rectilinear motion (straight path), Circular motion (rotating stone on string), and Periodic motion (pendulum, guitar string).',
    keyConcepts: [
      { title: 'Why Standard Units are Necessary', detail: 'To ensure uniform, reproducible measurements in science, trade, and engineering across all nations regardless of personal body dimensions.' },
      { title: 'Types of Motion', detail: 'Rectilinear: straight line; Circular: equidistant from a fixed center; Periodic: motion that repeats itself at regular intervals of time.' }
    ],
    readingSections: [
      {
        heading: '1. Avoiding Parallax Error',
        body: 'When reading a millimeter ruler, your eye must be situated vertically above the graduation point. Viewing from an angle causes parallax displacement, reading a false measurement.',
        tip: 'To measure the length of a curved line, lay a thread along the curve and then measure the stretched thread on a straight ruler.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 8,
    title: 'Light, Shadows and Reflections (Pinhole Cameras & Mirrors)',
    tagline: 'Rectilinear propagation, conditions for shadow formation, inverted pinhole camera image, and plane mirror reflection',
    summary: 'Investigate the optics of illumination! Prove that light travels in straight lines (rectilinear propagation). Understand shadows: formed when an opaque obstacle blocks light, requiring a light source, an opaque object, and a viewing screen. Build a Pinhole Camera to observe that the image of distant trees or the Sun is inverted and upside down. Contrast shadows (dark silhouette without details) with reflections in mirrors (clear color image with left-right reversal).',
    keyConcepts: [
      { title: 'Why Pinhole Cameras Produce Inverted Images', detail: 'Because light rays travel in straight lines, rays from the top of an object pass straight through the pinhole to the bottom of the screen, inverting the image.' },
      { title: 'Shadow vs Reflection Image', detail: 'A shadow is merely a dark patch showing outline shape without color; a mirror reflection reproduces exact colors, details, and features of the object.' }
    ],
    readingSections: [
      {
        heading: '1. Natural Pinhole Cameras Under Trees',
        body: 'When you walk under a tree covered with dense leaves, you see circular patches of bright light on the ground. These are inverted pinhole images of the round Sun projected through tiny gaps between overlapping leaves!',
        tip: 'Solar eclipses can be safely viewed using a pinhole projection on a cardboard screen.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 9,
    title: 'Electricity and Circuits (Cells, Switches & Conductors)',
    tagline: 'Electric cell terminals (+ and -), filament bulb, closed vs open circuit, electric switches, and conductors vs insulators',
    summary: 'Build working electrical circuits! Examine an electric cell: positive (+) terminal at the metal cap and negative (-) terminal at the flat metal disc. Understand the incandescent bulb filament (coiled thin wire supported by thick wires). Assemble a continuous closed electric circuit where electric current flows from positive to negative terminal. Construct manual switches to open (break) or close (complete) the circuit. Test Conductors (metals, graphite) and Insulators (rubber, plastic, dry wood).',
    keyConcepts: [
      { title: 'Closed vs Open Circuit', detail: 'Current flows only in a closed circuit with an unbroken conductive path; an open circuit has a break, preventing electrical flow.' },
      { title: 'Conductors vs Insulators', detail: 'Conductors allow electric current to pass through them freely (copper, iron); Insulators resist and block electrical current (rubber, plastic, glass).' }
    ],
    readingSections: [
      {
        heading: '1. Why Electricians Wear Rubber Gloves',
        body: 'The human body is an excellent conductor of electricity. Electricians wear rubber gloves and footwear because rubber is a non-conducting insulator that shields them from dangerous electric shocks.',
        tip: 'Never connect the two terminals of an electric cell directly with a wire without a bulb, as it drains the chemical energy rapidly and overheats the cell.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 10,
    title: 'Fun with Magnets (Magnetic Poles, Compass & Magnetism)',
    tagline: 'Magnetite (lodestone), magnetic vs non-magnetic materials, North and South poles, attraction/repulsion, and magnetic compass',
    summary: 'Discover the magnetic universe! Trace the discovery of natural magnet lodestone (magnetite) by shepherd Magnes in ancient Greece. Differentiate magnetic materials (iron, nickel, cobalt attracted to magnets) from non-magnetic materials (wood, plastic, copper). Prove that magnetic attraction is strongest at the two ends called Magnetic Poles (North Pole and South Pole). State the fundamental law of magnetism: Like poles repel, unlike poles attract. Build a magnetic compass for directional navigation.',
    keyConcepts: [
      { title: 'Law of Magnetic Poles', detail: 'Similar magnetic poles repel each other (N repels N, S repels S); opposite magnetic poles attract each other (N attracts S).' },
      { title: 'Freely Suspended Magnet Alignment', detail: 'A freely suspended bar magnet always comes to rest pointing along the geographic North-South direction because Earth behaves like a giant magnet.' }
    ],
    readingSections: [
      {
        heading: '1. How Ancient Navigators Traveled Across Oceans',
        body: 'Ancient sailors suspended a magnetized iron needle floating on a cork in a bowl of water to find geographic North during foggy voyages at sea, inventing the magnetic mariner’s compass.',
        tip: 'Magnets lose their magnetic properties if heated strongly, hammered, or dropped from heights.'
      }
    ]
  }),
  buildChapter(6, 'c6-sci', 'Science', {
    chapterNumber: 11,
    title: 'Air Around Us (Atmosphere & Respiration Cycles)',
    tagline: 'Composition of air (78% nitrogen, 21% oxygen, CO₂, water vapor, dust), oxygen cycle, and soil air spaces',
    summary: 'Explore the invisible ocean of air that blankets our planet! Prove that air occupies space, has mass, and is present everywhere (even inside empty bottles, water, and soil). Analyze atmospheric composition: 78% Nitrogen, 21% Oxygen (supports combustion and respiration), 0.04% Carbon Dioxide, water vapor (creating clouds and rain), and dust/smoke particles. Explain how the oxygen cycle between plants (photosynthesis) and animals (respiration) maintains atmospheric balance.',
    keyConcepts: [
      { title: 'Atmosphere Envelope', detail: 'The layer of air surrounding Earth extending several hundred kilometers high; becomes thinner at higher altitudes.' },
      { title: 'Plant-Animal Oxygen-Carbon Cycle', detail: 'Animals consume oxygen and release carbon dioxide during respiration; green plants consume carbon dioxide and release oxygen during daytime photosynthesis.' }
    ],
    readingSections: [
      {
        heading: '1. Why Earthworms Come to the Surface During Heavy Rain',
        body: 'Earthworms live underground and breathe oxygen through moist skin from air pockets between soil particles. When torrential rains flood all underground burrows with water, earthworms must crawl to the surface to breathe.',
        tip: 'Mountaineers climbing Mount Everest carry oxygen cylinders because atmospheric air density is very low at high altitudes.'
      }
    ]
  })
];

const sstChapters = [
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 1,
    title: 'What, Where, How and When? (Archaeological Sources & History)',
    tagline: 'Sulaiman and Kirthar hills, Garo hills, Narmada river gatherers, manuscripts on palm leaves, and inscriptions on stone',
    summary: 'Discover how historians reconstruct prehistoric life! Locate early human settlements: food gatherers on the banks of River Narmada, early wheat/barley agriculture in Sulaiman and Kirthar hills (8000 years ago), and early rice cultivation in the Vindhyas. Learn how historians decipher the past using Manuscripts (handwritten texts on palm leaves and birch bark) and Inscriptions (engraved texts on hard stone or metal pillars). Understand historical dating: BC (BCE) and AD (CE).',
    keyConcepts: [
      { title: 'Manuscripts vs Inscriptions', detail: 'Manuscripts were hand-written on fragile palm leaves and birch bark; Inscriptions were permanently engraved on stone pillars and metal plates.' },
      { title: 'BCE and CE Dating Systems', detail: 'BCE stands for Before Common Era (counting backwards before Christ’s birth); CE stands for Common Era (counting forwards from Year 1).' }
    ],
    readingSections: [
      {
        heading: '1. Deciphering the Rosetta Stone Inscription',
        body: 'Discovered in Egypt in 1799, the Rosetta Stone contained identical proclamations in Greek and Egyptian hieroglyphics, allowing scholars like Jean-François Champollion to decipher ancient hieroglyphic writing.',
        tip: 'The name "India" comes from the River Indus, called Sindhu in ancient Sanskrit.'
      }
    ]
  }),
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 2,
    title: 'From Hunting-Gathering to Growing Food (Stone Age & Mehrgarh)',
    tagline: 'Paleolithic stone tools, Mesolithic microliths, Neolithic farming, domestication of sheep/goats, and Mehrgarh burials',
    summary: 'Trace humanity’s transition from nomadic hunters to settled agricultural villagers! Follow the three Stone Ages: Paleolithic (Old Stone Age, fire discovery), Mesolithic (Middle Stone Age, microliths, climate warming), and Neolithic (New Stone Age, polished tools, pottery). Understand the domestication of animals (dogs, sheep, goats) and cultivation of wheat and barley. Explore Neolithic village Mehrgarh near Bolan Pass (Pakistan) with rectangular mud houses and burial sites.',
    keyConcepts: [
      { title: 'The Neolithic Agricultural Revolution', detail: 'Growing crops required humans to stay in one place for months to water, weed, and harvest grain, leading to settled village architecture and pottery.' },
      { title: 'Mehrgarh Burials with Goats', detail: 'Neolithic graves in Mehrgarh contained dead humans buried with goats, showing that prehistoric communities believed in life after death.' }
    ],
    readingSections: [
      {
        heading: '1. Discovery of Fire in Kurnool Caves',
        body: 'Traces of ash found in the Kurnool caves in Andhra Pradesh prove that hunter-gatherers mastered fire 100,000 years ago, using it for roasting meat, frightening wild predators, and lighting dark limestone caves.',
        tip: 'The dog was the very first animal to be domesticated by prehistoric humans.'
      }
    ]
  }),
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 3,
    title: 'In the Earliest Cities (The Indus Valley Civilisation)',
    tagline: 'Harappa, Mohenjo-daro, citadel vs lower town, Great Bath, covered drainage system, and seals with script',
    summary: 'Enter the world’s most advanced Bronze Age urban civilization! Discover Harappa (excavated in 1921) and Mohenjo-daro on the Indus River. Analyze sophisticated urban town planning: high western Citadel and lower eastern residential town built with interlocking baked brick masonry. Marvel at the watertight Great Bath coated with natural asphalt bitumen, covered municipal drainage systems connecting household bathrooms, steatite seals, terracotta toys, and dockyard port at Lothal.',
    keyConcepts: [
      { title: 'Urban Architecture and Sanitation', detail: 'Streets were laid out on a grid pattern intersecting at right angles; covered brick drains ran along every street with inspection manholes.' },
      { title: 'Lothal Tidal Dockyard', detail: 'A massive brick water basin in Gujarat where ocean ships entered through a canal from the Gulf of Khambhat to load and unload trade cargo.' }
    ],
    readingSections: [
      {
        heading: '1. The Mysterious Indus Script',
        body: 'Harappan merchants used square steatite seals with carved animal motifs (unicorns, humped bulls) and an enigmatic pictographic script that remains undeciphered by modern linguists to this day.',
        tip: 'Harappans were the first civilization in the world to spin and weave cotton textiles.'
      }
    ]
  }),
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 4,
    title: 'What Books and Burials Tell Us (The Vedas & Megaliths)',
    tagline: 'Rigveda hymns (suktas), Sanskrit and Indo-European languages, chariot battles for cattle, and Inamgaon megalith burials',
    summary: 'Explore Vedic literature and Iron Age megalith archaeology! Study the four Vedas: Rigveda (oldest, composed 3,500 years ago with over 1,000 sacred hymns or suktas dedicated to Agni, Indra, and Soma), Samaveda, Yajurveda, and Atharvaveda. Trace Vedic pastoral society: cattle, horses, chariots, and democratic assemblies (Sabha and Samiti). Travel south to examine Megalithic burial mounds in the Deccan (large stone boulders marking stone circle graves containing iron daggers and black-and-red ware pottery).',
    keyConcepts: [
      { title: 'The Indo-European Language Family', detail: 'Sanskrit shares common historical roots with English, Persian, Latin, German, and Greek (e.g., Matr in Sanskrit, Mater in Latin, Mother in English).' },
      { title: 'Megalithic Stone Circles', detail: 'Massive stone boulders placed above ground acted as signposts so family members could locate ancestral burial spots across generations.' }
    ],
    readingSections: [
      {
        heading: '1. Skeleton Analysis and Social Hierarchy',
        body: 'Archaeologists found that some megalith skeletons in Brahmagiri were buried with 33 gold beads and copper bangles, while others had only clay pots, reflecting emerging social and economic disparities.',
        tip: 'The Rigveda was recited and heard (Shruti) for centuries before being written down.'
      }
    ]
  }),
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 5,
    title: 'Ashoka, the Emperor Who Gave Up War',
    tagline: 'Chandragupta Maurya, Chanakya’s Arthashastra, Kalinga war horror, Ashoka’s Dhamma, and lion capital of Sarnath',
    summary: 'Study the Mauryan Empire and Emperor Ashoka’s transformation! Trace the foundation of the empire by Chandragupta Maurya and royal strategist Chanakya (Kautilya, author of Arthashastra). Examine capital city Pataliputra described by Greek ambassador Megasthenes. Witness Ashoka’s remorse following the bloody Kalinga War (261 BCE) where 100,000 soldiers died, leading him to embrace Buddhism and preach Dhamma (moral duty, non-violence, and filial respect). Examine Ashokan rock edicts and the four-lion capital at Sarnath.',
    keyConcepts: [
      { title: 'Ashoka’s Dhamma', detail: 'Did not involve worship of a god or performance of sacrifice, but moral principles: gentle treatment of servants, respect for parents, and compassion for all living beings.' },
      { title: 'The National Emblem of India', detail: 'The four Asiatic lions standing back to back carved on the polished sandstone pillar at Sarnath was adopted as India’s official National Emblem in 1950.' }
    ],
    readingSections: [
      {
        heading: '1. Ashoka’s Rock Edict XIII on the Kalinga War',
        body: '"Eight years after becoming king, I conquered Kalinga. A hundred and fifty thousand people were captured and more than a hundred thousand were slain. When I saw this, I was filled with sorrow. That is why I have turned to Dhamma." Ashoka is the only monarch in human history who gave up conquest after winning a war.',
        tip: 'Ashoka’s edicts were carved in Prakrit language using the Brahmi script so ordinary people could read them.'
      }
    ]
  }),
  buildChapter(6, 'c6-sst', 'Social Science', {
    chapterNumber: 6,
    title: 'The Earth in the Solar System & Globe (Latitudes/Longitudes)',
    tagline: 'Sun, eight planets, asteroids, meteoroids, Equator 0°, Tropic of Cancer, Prime Meridian 0°, and International Date Line',
    summary: 'Survey our planetary home and spatial cartography! Explore celestial bodies in the Solar System: the Sun (star at the center), eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), Earth as the "Blue Planet", the Moon, asteroid belt, and meteoroids. Master the terrestrial coordinate grid on the Globe: Equator (0°), Tropic of Cancer (23½° N), Tropic of Capricorn (23½° S), Arctic Circle (66½° N), Antarctic Circle (66½° S), Prime Meridian (0° Greenwich), and calculation of local time zones.',
    keyConcepts: [
      { title: 'Earth as a Geoid', detail: 'Earth is not a perfect sphere; it is slightly flattened at the North and South Poles and bulges at the Equator, a shape called a Geoid.' },
      { title: 'Longitudes and World Time Calculation', detail: 'Earth rotates 360° in 24 hours (15° per hour, or 1° in 4 minutes). Places east of Greenwich are ahead of GMT; places west are behind GMT.' }
    ],
    readingSections: [
      {
        heading: '1. Why Life Exists Only on Earth',
        body: 'Earth is situated in the "Goldilocks habitable zone": neither too close to the sun to boil water, nor too far to freeze, possessing atmospheric oxygen and liquid water.',
        tip: 'Venus is considered Earth’s "twin" because its size, mass, and density are remarkably similar to Earth.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(6, 'c6-eng', 'English', {
    chapterNumber: 1,
    title: 'Who Did Patrick’s Homework? (Carol Moore) & A House, A Home',
    tagline: 'Patrick hates homework, tiny elf with yellow trousers, secret hard work, and difference between house and home',
    summary: 'Discover the power of self-motivation in Carol Moore’s delightful story! Patrick hates doing homework, preferring basketball and video games. Rescuing an elf from his cat, the elf grants a wish to do all Patrick’s homework. But because the elf knows no math, history, or spelling, Patrick must sit beside him, look up words in dictionaries, and solve arithmetic problems himself, scoring straight A’s! Paired with Lorraine M. Halli’s poem distinguishing a brick "house" from a loving "home".',
    keyConcepts: [
      { title: 'Self-Reliance and Hidden Effort', detail: 'Patrick believed the magical elf was doing his homework, but in reality Patrick read the reference books and solved every problem himself.' },
      { title: 'Halli’s House vs Home', detail: 'A house is made of brick, stone, and glass; a home is made of loving family, unselfish acts, caring parents, and brothers and sisters.' }
    ],
    readingSections: [
      {
        heading: '1. Patrick’s Transformation',
        body: 'Patrick was a model kid! He cleaned his room, did his chores, was cheerful, and never rude, as if he had developed an entirely new attitude. The secret was that Patrick had done the homework himself all along!',
        tip: 'True learning happens when you engage actively with problems rather than seeking shortcuts.'
      }
    ]
  }),
  buildChapter(6, 'c6-eng', 'English', {
    chapterNumber: 2,
    title: 'How the Dog Found Himself a New Master! & The Kite (Harry Behn)',
    tagline: 'Wolf, bear, lion, man, quest for the strongest master on Earth, and Harry Behn’s soaring paper kite',
    summary: 'Enjoy classic folklore on the origin of the dog as humanity’s best friend! Once, dogs were wild and free. Tired of fearing stronger beasts, an ancestral dog sets out to serve the strongest master on Earth. He leaves the Wolf for the Bear, the Bear for the Lion, and finally leaves the Lion when he realizes the king of beasts fears Man! Accompanied by Harry Behn’s joyful poem "The Kite" capturing the beauty of a colorful paper kite soaring on a breeze.',
    keyConcepts: [
      { title: 'The Ancient Pact Between Dog and Man', detail: 'The dog chose human companionship because humanity possessed intelligence, compassion, and the power to tame the wild world.' },
      { title: 'Behn’s Kinetic Imagery in "The Kite"', detail: 'A new kite is bright on a blue sky, snapping its tail, soaring like a ship with a sail on the crest of a gust of wind.' }
    ],
    readingSections: [
      {
        heading: '1. The Dog’s Final Loyalty',
        body: 'The dog went to stay with man and served him faithfully. And to this day, the dog is man’s most loyal servant and knows no other master above humans.',
        tip: 'Loyalty and companionship are built on mutual respect and care.'
      }
    ]
  }),
  buildChapter(6, 'c6-eng', 'English', {
    chapterNumber: 3,
    title: 'Taro’s Reward (Japanese Folktale) & The Quarrel (Eleanor Farjeon)',
    tagline: 'Dutiful woodcutter Taro, waterfall pouring warm sake, selfish villagers, and emperor’s reward for filial piety',
    summary: 'Immerse yourself in Japanese folklore celebrating filial piety! Poor young woodcutter Taro works tirelessly chopping wood to buy expensive sake to warm his elderly father’s shivering body. Deep in the forest, he discovers a hidden waterfall flowing with sweet warm sake! When greedy villagers rush to the falls with pitchers, the water tastes only like cold water to them. Hearing of Taro’s devotion, the Emperor of Japan rewards him with twenty gold coins!',
    keyConcepts: [
      { title: 'Virtue Rewarded by Nature', detail: 'The magic waterfall yielded precious sake only to selfless, filial Taro, while denying it to greedy villagers.' },
      { title: 'Farjeon’s "The Quarrel"', detail: 'A trivial sibling quarrel over nothing escalates into stubborn sulking until a brother thumps the narrator’s back to apologize and restore warmth.' }
    ],
    readingSections: [
      {
        heading: '1. The Emperor’s Royal Decree',
        body: 'The Emperor of Japan rewarded Taro with gold and named the most beautiful fountain in the capital after him, encouraging all children throughout the realm to honor and obey their parents.',
        tip: 'Pure intentions and love for family bring blessings that money cannot buy.'
      }
    ]
  }),
  buildChapter(6, 'c6-eng', 'English', {
    chapterNumber: 4,
    title: 'An Indian - American Woman in Space: Kalpana Chawla & Beauty',
    tagline: 'Karnal childhood, aerospace engineering, NASA astronaut, Space Shuttle Columbia, and E-Yeh-Shure’s beauty',
    summary: 'Celebrate the trailblazing life of Kalpana Chawla, the first Indian-born woman in space! Born in Karnal, Haryana, Kalpana defied conservative expectations to earn degrees in aeronautical engineering, joining NASA as an astronaut. Aboard Space Shuttle Columbia on STS-87 and STS-107, she conducted cutting-edge microgravity experiments, inspiring millions before tragically perishing during re-entry on 1 February 2003. Paired with E-Yeh-Shure’s poem "Beauty".',
    keyConcepts: [
      { title: 'The Path from Dreams to Reality', detail: 'Kalpana’s message to Indian students from space: "The path from dreams to success does exist. May you have the vision to find it, the courage to get onto it, and the perseverance to follow it."' },
      { title: 'Beauty in Deeds and Thoughts', detail: 'E-Yeh-Shure reveals that beauty is not merely physical appearance, but lives in good deeds, kind thoughts, and honest effort.' }
    ],
    readingSections: [
      {
        heading: '1. Breaking Cosmic Frontiers',
        body: 'Kalpana proved that a girl from a small town in Haryana could touch the stars through determination, scientific passion, and unwavering courage, leaving an immortal legacy for dreamers worldwide.',
        tip: 'Kalpana spent 30 days, 14 hours, and 54 minutes in space across her two historic missions.'
      }
    ]
  }),
  buildChapter(6, 'c6-eng', 'English', {
    chapterNumber: 5,
    title: 'Fair Play (Munshi Premchand) & The Banyan Tree (Ruskin Bond)',
    tagline: 'Jumman Shaikh and Algu Chowdhry, village Panchayat, voice of the Panch is voice of God, and mongoose vs cobra',
    summary: 'Read Munshi Premchand’s masterpiece on justice and moral conscience! Close friends Jumman Shaikh and Algu Chowdhry are estranged when Algu, appointed head Panch, rules against Jumman to protect his elderly aunt’s maintenance rights. Later, when Algu faces an unjust dispute over a dead bullock, Jumman is chosen as head Panch; putting aside personal grievance, Jumman delivers an impartial verdict for Algu, proving that justice transcends personal friendship! Coupled with Ruskin Bond’s thrilling "The Banyan Tree".',
    keyConcepts: [
      { title: 'The Voice of the Panch is the Voice of God', detail: 'A judge sitting on the seat of justice possesses no friends or enemies; duty demands complete impartiality and adherence to truth.' },
      { title: 'Bond’s Banyan Tree Drama', detail: 'Watching an epic forest combat between a deadly black cobra and an agile grey mongoose from the branches of a grand banyan tree.' }
    ],
    readingSections: [
      {
        heading: '1. Justice Transcends Grievance',
        body: '"The Panch has no friend nor enemy. What matters is justice," declared Jumman. Jumman embraced Algu in tears, realizing that true friendship is strengthened when moral truth is defended without fear or favor.',
        tip: 'Munshi Premchand is revered as the "Upanyas Samrat" (Emperor of Novels) of Indian literature.'
      }
    ]
  })
];

export const class6Curriculum: Subject[] = [
  {
    id: 'c6-math',
    name: 'Mathematics',
    code: 'MATH-601',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 12-chapter Class 6 syllabus: Knowing Numbers, Whole Numbers, Playing with Numbers, Geometrical Ideas, Elementary Shapes, Integers, Fractions, Decimals, Data Handling, Mensuration, Algebra, and Ratio & Proportion.',
    chapters: mathChapters
  },
  {
    id: 'c6-sci',
    name: 'Science (Physics, Chemistry, Biology)',
    code: 'SCI-601',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 11-chapter syllabus: Components of Food, Sorting Materials, Separation of Substances, Getting to Know Plants, Body Movements, Living Organisms, Motion & Distance, Light & Shadows, Electricity, Magnets, and Air.',
    chapters: scienceChapters
  },
  {
    id: 'c6-sst',
    name: 'Social Science (History, Geography, Civics)',
    code: 'SST-601',
    iconName: 'Globe',
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-500 to-indigo-600'
    },
    description: 'Complete Class 6 syllabus: What Where How & When, Hunting-Gathering to Farming, Harappan Cities, Books & Burials, Ashoka, Solar System & Earth, and Latitudes & Longitudes.',
    chapters: sstChapters
  },
  {
    id: 'c6-eng',
    name: 'English Language & Literature (Honeysuckle & A Pact with the Sun)',
    code: 'ENG-601',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 6 literature anthology: Who Did Patrick’s Homework, How the Dog Found a Master, Taro’s Reward, Kalpana Chawla, and Fair Play by Munshi Premchand.',
    chapters: englishChapters
  }
];
