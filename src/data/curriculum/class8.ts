import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Rational Numbers (Properties & Number Line)',
    tagline: 'Closure, commutativity, associativity, distributivity a(b+c) = ab+ac, and additive/multiplicative inverse',
    summary: 'Master rational numbers p/q! Test closure, commutative, and associative properties under addition, subtraction, multiplication, and division. Use the distributive property a(b + c) = ab + ac to simplify complex arithmetic. Locate rational numbers on the number line and find rational numbers between any two fractions using mean averages.',
    keyConcepts: [
      { title: 'Distributive Property', detail: 'For rational numbers a, b, c: a(b + c) = ab + ac, enabling fast mental calculation of products.' },
      { title: 'Density of Rational Numbers', detail: 'Between any two rational numbers, there exist infinitely many rational numbers (calculated via (a + b) / 2).' }
    ],
    readingSections: [
      {
        heading: '1. Inverses and Identities',
        body: 'Zero (0) is the additive identity (a + 0 = a) and -a is the additive inverse. One (1) is the multiplicative identity (a × 1 = a) and 1/a is the multiplicative inverse or reciprocal.',
        tip: 'Division by zero is undefined for rational numbers; rational numbers are not closed under division.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Linear Equations in One Variable (Algebraic Modeling)',
    tagline: 'Variables on both sides, transposition method, cross-multiplication, and digit reversal problems',
    summary: 'Solve single-variable linear equations ax + b = cx + d. Master the transposition method to collect variables on the LHS and numerical constants on the RHS. Translate challenging word problems involving consecutive integers, ages of parents and children, coin denominations, and digit reversals (10t + u).',
    keyConcepts: [
      { title: 'Transposition Principle', detail: 'Shifting a term from one side of an equation to the other flips its sign (+ becomes -, × becomes ÷).' },
      { title: 'Two-Digit Number Modeling', detail: 'A two-digit number with tens digit t and units digit u is represented by 10t + u; reversing its digits yields 10u + t.' }
    ],
    readingSections: [
      {
        heading: '1. Linear Modeling in Everyday Life',
        body: 'Whether computing perimeter dimensions from ratio data or dividing an inheritance among siblings, representing unknown quantities as x converts word narratives into clear equations.',
        tip: 'Always substitute your solution back into the original equation to verify that LHS = RHS.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Understanding Quadrilaterals (Polygons & Properties)',
    tagline: 'Convex/concave polygons, interior sum (n-2)×180°, exterior sum 360°, and parallelogram theorems',
    summary: 'Classify polygons by side count and convexity! Prove the polygon interior angle sum formula: (n - 2) × 180°. Demonstrate that the sum of exterior angles of any convex polygon is always 360°. Analyze special quadrilaterals: Trapezium, Kite, Parallelogram (opposite sides/angles equal), Rhombus, Rectangle, and Square.',
    keyConcepts: [
      { title: 'Exterior Angle Sum Theorem', detail: 'The sum of the measures of the external angles of any polygon is always 360°, regardless of the number of sides.' },
      { title: 'Parallelogram Diagonal Bisector', detail: 'The diagonals of a parallelogram bisect each other; in a rhombus they bisect each other at right angles (90°).' }
    ],
    readingSections: [
      {
        heading: '1. Regular Polygons',
        body: 'A polygon is regular if it is both equiangular (all angles equal) and equilateral (all sides equal). Each interior angle of a regular n-gon equals [(n - 2) × 180°] / n.',
        tip: 'A square possesses every property of a rectangle, a rhombus, and a parallelogram simultaneously!'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Data Handling (Bar Graphs, Pie Charts & Probability)',
    tagline: 'Organizing raw data, grouped frequency distributions, central angle of pie sectors, and coin/dice probability',
    summary: 'Organize, visualize, and analyze numerical data! Construct grouped frequency distributions with tally marks. Draw continuous histograms. Calculate sector central angles for circular pie charts: Central Angle = (Value / Total) × 360°. Introduce experimental probability: P(Event) = (Number of outcomes favorable to event) / (Total outcomes).',
    keyConcepts: [
      { title: 'Central Angle of a Pie Chart Sector', detail: 'Sector Angle = (Component Value / Total Value) × 360°.' },
      { title: 'Equally Likely Elementary Outcomes', detail: 'Tossing a fair coin has two equally likely outcomes (Heads, Tails), each having probability P = 1/2.' }
    ],
    readingSections: [
      {
        heading: '1. Visualizing Proportions with Pie Charts',
        body: 'Pie charts display components as slices of a 360° circle, allowing rapid comparison of budget shares, demographic divisions, and daily time distribution.',
        tip: 'The sum of central angles of all sectors in a pie chart must equal exactly 360°.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Squares and Square Roots (Pythagorean Triplets & Division Method)',
    tagline: 'Properties of square numbers, Pythagorean triplets 2m, m²-1, m²+1, and long division square root algorithm',
    summary: 'Explore quadratic arithmetic! Discover patterns in perfect squares (ending digits 0, 1, 4, 5, 6, 9). Identify Pythagorean triplets using 2m, m² - 1, m² + 1. Calculate square roots via prime factorisation and master the long division algorithm for large integers and decimals.',
    keyConcepts: [
      { title: 'Pythagorean Triplet Generator', detail: 'For any natural number m > 1: (2m)² + (m² - 1)² = (m² + 1)², generating triplets like (6, 8, 10) or (8, 15, 17).' },
      { title: 'Long Division Algorithm for Square Roots', detail: 'Pair digits from right to left (from decimal point for fractions) to extract exact root digits sequentially.' }
    ],
    readingSections: [
      {
        heading: '1. Square Numbers as Sums of Odd Numbers',
        body: 'Every square number n² equals the sum of the first n odd natural numbers! For example: 1 = 1², 1+3 = 4 = 2², 1+3+5 = 9 = 3², 1+3+5+7 = 16 = 4².',
        tip: 'A number ending in 2, 3, 7, or 8 is NEVER a perfect square.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Cubes and Cube Roots (Prime Factorisation Method)',
    tagline: 'Perfect cubes, Hardy-Ramanujan number 1729, prime factor triples, and cube root radical sign ∛',
    summary: 'Investigate three-dimensional volumetric numbers! Find cubes of positive and negative numbers. Discover the famous Hardy-Ramanujan taxi-cab number 1729 (the smallest number expressible as the sum of two cubes in two different ways: 1³ + 12³ and 9³ + 10³). Find cube roots using prime factor grouping into triples.',
    keyConcepts: [
      { title: 'Hardy-Ramanujan Number (1729)', detail: '1729 = 1³ + 12³ = 9³ + 10³, famously pointed out by Srinivasa Ramanujan to G.H. Hardy.' },
      { title: 'Prime Factor Triplet Rule', detail: 'In the prime factorisation of a perfect cube, every prime factor must appear in triplets (groups of three).' }
    ],
    readingSections: [
      {
        heading: '1. Ending Digits of Cube Numbers',
        body: 'Unlike square numbers which cannot end in 2, 3, 7, or 8, cube numbers can terminate in any digit from 0 through 9! Cubes of even numbers are always even; cubes of odd numbers are always odd.',
        tip: 'The cube of a negative number is always negative: (-3)³ = -27.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Comparing Quantities (Ratios, Discounts, GST & Compound Interest)',
    tagline: 'Discount percent, Goods and Services Tax, compound interest formula A = P(1 + r/n)^(nt), and compounding periods',
    summary: 'Apply financial mathematics to real transactions! Calculate discount percentage on marked price (MP) and evaluate Goods and Services Tax (GST). Differentiate simple interest from compound interest (interest calculated on accumulated principal). Derive the compound amount formula A = P(1 + R/100)ⁿ for annual, semi-annual, and quarterly compounding.',
    keyConcepts: [
      { title: 'Compound Amount Formula', detail: 'A = P(1 + R/100)ⁿ, where P is principal, R is annual rate percent, and n is number of compounding time periods.' },
      { title: 'Discount and Sales Tax', detail: 'Discount = Marked Price - Sale Price; GST is added as a percentage on the discounted selling price.' }
    ],
    readingSections: [
      {
        heading: '1. The Exponential Power of Compound Interest',
        body: 'Albert Einstein reportedly called compound interest the eighth wonder of the world: "He who understands it, earns it; he who doesn’t, pays it." Because earned interest earns interest, growth accelerates exponentially over time.',
        tip: 'When interest is compounded half-yearly, halve the annual rate (R/2) and double the number of years (2n).'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Algebraic Expressions and Identities (Polynomial Operations)',
    tagline: 'Monomials, binomials, trinomials, multiplication of polynomials, and standard identities (a±b)², a²-b²',
    summary: 'Perform polynomial algebra! Add, subtract, and multiply algebraic expressions (monomial by polynomial, binomial by binomial). Master three standard algebraic identities: 1) (a + b)² = a² + 2ab + b²; 2) (a - b)² = a² - 2ab + b²; 3) (a + b)(a - b) = a² - b². Apply identities to calculate products like 103 × 97 = (100+3)(100-3) = 10000 - 9 = 9991 instantly.',
    keyConcepts: [
      { title: 'Standard Identity 3', detail: '(a + b)(a - b) = a² - b², the difference of two squares identity.' },
      { title: 'Product Identity', detail: '(x + a)(x + b) = x² + (a + b)x + ab.' }
    ],
    readingSections: [
      {
        heading: '1. Geometric Visual Proof of (a + b)²',
        body: 'Construct a square of side (a + b). Its total area can be decomposed into four sections: a square of side a (a²), a square of side b (b²), and two rectangles of dimensions a × b (2ab), proving (a + b)² = a² + 2ab + b².',
        tip: 'An identity is an equality true for ALL values of its variables, unlike an equation which is true only for specific values.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Mensuration (Area of Trapezium, Surface Area & Volume of Solids)',
    tagline: 'Area of trapezium ½h(a+b), area of general polygon, TSA/LSA of cube, cuboid, cylinder, and volume conversions',
    summary: 'Calculate 2D areas and 3D surface areas and volumes! Derive the area of a trapezium: Area = ½ × h × (a + b) where a and b are parallel sides. Calculate surface area and volume of cuboids (2[lb + bh + hl], l×b×h), cubes (6a², a³), and right circular cylinders (Curved Surface Area = 2πrh, Total Surface Area = 2πr[r + h], Volume = πr²h). Master metric capacity conversions (1 L = 1000 cm³, 1 m³ = 1000 L).',
    keyConcepts: [
      { title: 'Area of a Trapezium', detail: 'Area = ½ × (Sum of parallel sides) × (Perpendicular distance between them) = ½h(a + b).' },
      { title: 'Right Circular Cylinder Formulae', detail: 'CSA = 2πrh; TSA = 2πr(r + h); Volume = πr²h.' }
    ],
    readingSections: [
      {
        heading: '1. Surface Area vs Volume of Containers',
        body: 'Surface area determines the amount of sheet metal or packaging material needed to construct a container, while volume dictates its maximum holding capacity.',
        tip: 'Remember: 1 cubic meter (1 m³) holds exactly 1,000 liters of water.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Exponents and Powers (Negative Exponents & Scientific Notation)',
    tagline: 'Negative exponents a⁻ᵐ = 1/aᵐ, laws of exponents, and standard scientific notation for microscopic/cosmic scales',
    summary: 'Handle very small and very large numbers with ease! Define negative integral exponents: a⁻ᵐ = 1/aᵐ (for a ≠ 0). Apply laws of exponents for multiplication, division, and power of powers. Express microscopic measurements (mass of electron, size of plant cell 0.00001275 m) and cosmic distances in standard scientific notation (k × 10ⁿ, where 1 ≤ k < 10).',
    keyConcepts: [
      { title: 'Negative Exponent Rule', detail: 'a⁻ᵐ = 1/aᵐ and (a/b)⁻ᵐ = (b/a)ᵐ.' },
      { title: 'Scientific Standard Form', detail: 'Writing numbers as m × 10ⁿ where 1.0 ≤ m < 10.0 and n is an integer, making comparison of astronomical quantities straightforward.' }
    ],
    readingSections: [
      {
        heading: '1. Comparing the Earth and the Moon',
        body: 'Earth’s mass is 5.97 × 10²⁴ kg and the Moon’s mass is 7.35 × 10²² kg. Writing both in standard exponential notation shows immediately that Earth is roughly 81 times more massive than the Moon!',
        tip: 'Any non-zero base raised to the power 0 equals 1: a⁰ = 1.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Direct and Inverse Proportions (Variation Problems)',
    tagline: 'Direct variation x/y = k, inverse variation xy = k, unitary methods, and speed-time relations',
    summary: 'Model dynamic physical relationships between two quantities! Two quantities x and y are in direct proportion if an increase in x produces a proportional increase in y (x/y = k constant, e.g. distance vs fuel consumption). They are in inverse proportion if an increase in x produces a proportional decrease in y (xy = k constant, e.g. workers vs days to complete a building).',
    keyConcepts: [
      { title: 'Direct Proportion Formula', detail: 'x₁ / y₁ = x₂ / y₂, used when quantities increase or decrease together at a constant ratio.' },
      { title: 'Inverse Proportion Formula', detail: 'x₁ × y₁ = x₂ × y₂, used when doubling one quantity halves the other (speed × time = constant distance).' }
    ],
    readingSections: [
      {
        heading: '1. Worker-Days Allocation in Construction',
        body: 'If 15 workers complete a wall in 48 hours, how many workers are needed to finish in 30 hours? Since workers and time vary inversely: 15 × 48 = x × 30 -> x = 24 workers!',
        tip: 'Check whether an increase in the first quantity will logically increase or decrease the second before choosing the formula.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Factorisation (Common Factors, Regrouping & Division)',
    tagline: 'Method of common factors, factorisation by regrouping, algebraic identities, and division of polynomials',
    summary: 'Decompose algebraic polynomials into prime factors! Master common factor extraction, regrouping terms with common binomials, and applying algebraic identities in reverse: a² - b² = (a + b)(a - b) and a² ± 2ab + b² = (a ± b)². Factorize quadratic trinomials by splitting the middle term. Divide monomials by monomials and polynomials by binomials.',
    keyConcepts: [
      { title: 'Splitting the Middle Term', detail: 'Factorizing x² + (a+b)x + ab into (x + a)(x + b).' },
      { title: 'Difference of Two Squares Factorisation', detail: '49x² - 36 = (7x)² - (6)² = (7x + 6)(7x - 6).' }
    ],
    readingSections: [
      {
        heading: '1. Division of Polynomials by Canceling Common Factors',
        body: 'Factorize numerator completely into irreducible linear factors before dividing; common binomial factors cancel out directly, simplifying calculations.',
        tip: 'Always look for common numerical or variable factors across ALL terms before applying grouping or identities.'
      }
    ]
  }),
  buildChapter(8, 'c8-math', 'Mathematics', {
    chapterNumber: 13,
    title: 'Introduction to Graphs (Linear Graphs & Coordinates)',
    tagline: 'Bar graphs, pie charts, line graphs, continuous linear graphs, and independent/dependent variables',
    summary: 'Visualize numerical changes over time! Read and plot line graphs tracking temperature, rainfall, and travel journeys. Understand coordinate points (x, y) on perpendicular axes. Differentiate independent variables (plotted on horizontal X-axis, e.g. time, quantity) from dependent variables (plotted on vertical Y-axis, e.g. cost, distance). Recognize linear graphs displaying constant proportional rates.',
    keyConcepts: [
      { title: 'Linear Graphs', detail: 'A whole unbroken line graph representing a continuous linear relationship between two variables.' },
      { title: 'Independent vs Dependent Variables', detail: 'The independent variable changes freely (plotted on X-axis); the dependent variable responds to changes in the independent variable (plotted on Y-axis).' }
    ],
    readingSections: [
      {
        heading: '1. Distance-Time Travel Graphs',
        body: 'A car traveling at constant speed 40 km/h produces a straight line passing through the origin (0,0). The slope of the line equals the car’s speed.',
        tip: 'The point where the X-axis and Y-axis intersect is called the origin (0, 0).'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 1,
    title: 'Crop Production and Management',
    tagline: 'Kharif vs Rabi crops, ploughing, drip irrigation, manure vs fertilizers, and silo grain storage',
    summary: 'Investigate modern agronomy! Classify agricultural crops: Kharif (paddy, maize, cotton sown with monsoon in June) and Rabi (wheat, gram, mustard sown in winter in October). Trace sequential farming practices: preparation of soil, sowing with seed drills, adding organic manure and chemical fertilizers (NPK), modern water-saving irrigation (sprinkler and drip systems), weeding, harvesting, and grain storage in silos.',
    keyConcepts: [
      { title: 'Drip Irrigation Efficiency', detail: 'Delivers water drop by drop directly to plant root zones, eliminating runoff and evaporation waste; ideal for water-scarce regions.' },
      { title: 'Manure vs Chemical Fertilizers', detail: 'Manure adds natural humus, enhances soil texture, and increases water retention without chemical toxicity; fertilizers provide quick NPK nutrients but deplete soil microorganisms if overused.' }
    ],
    readingSections: [
      {
        heading: '1. Nitrogen Fixation by Rhizobium Bacteria',
        body: 'Leguminous plants (pulses, beans) harbor symbiotic Rhizobium bacteria in their root nodules, which fix atmospheric nitrogen gas into water-soluble nitrates, naturally replenishing soil fertility without artificial fertilizers.',
        tip: 'Kharif crops require abundant water and are harvested in September-October.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 2,
    title: 'Microorganisms: Friend and Foe',
    tagline: 'Bacteria, fungi, protozoa, algae, viruses, antibiotics (Alexander Fleming), and Louis Pasteur’s pasteurization',
    summary: 'Explore the microscopic living realm! Classify microbes into four major groups (bacteria, fungi, protozoa, algae) alongside acellular viruses. Highlight beneficial uses: Lactobacillus in curd formation, yeast in bread fermentation and alcohol brewing, Alexander Fleming’s discovery of penicillin, and vaccines stimulating antibody immunity. Examine pathogens causing tuberculosis, malaria, and food preservation methods.',
    keyConcepts: [
      { title: 'Discovery of Penicillin (1928)', detail: 'Alexander Fleming observed that a green mold (Penicillium notatum) produced a substance that destroyed surrounding staphylococcal bacteria.' },
      { title: 'Pasteurization of Milk', detail: 'Heating milk to 70°C for 15 to 30 seconds and then chilling it rapidly prevents microbial proliferation without altering milk flavor.' }
    ],
    readingSections: [
      {
        heading: '1. How Vaccines Create Lifelong Immunity',
        body: 'A vaccine introduces dead or weakened disease microbes into the body. White blood cells produce specific antibodies to fight them and establish memory cells that immediately eliminate real pathogens in future infections.',
        tip: 'Edward Jenner discovered the smallpox vaccine in 1798 using milder cowpox virus.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 3,
    title: 'Coal and Petroleum (Fossil Fuels & Refining)',
    tagline: 'Carbonisation of prehistoric swamps, destructive distillation of coal, petroleum fractional distillation, and PCRA tips',
    summary: 'Understand exhaustible natural energy resources! Trace the formation of coal from buried swamp vegetation through million-year heat and pressure (carbonisation). Analyze products of destructive distillation of coal: coke, coal tar, and coal gas. Explain how marine organisms transformed into petroleum and natural gas (CNG). Study fractional distillation refining and petroleum conservation tips from PCRA.',
    keyConcepts: [
      { title: 'Carbonisation Process', detail: 'The slow conversion of dead vegetation into coal under high temperature and pressure underground over hundreds of millions of years.' },
      { title: 'Petroleum as "Black Gold"', detail: 'Petroleum crude is separated into LPG, petrol, kerosene, diesel, lubricating oil, and paraffin wax via fractional distillation columns.' }
    ],
    readingSections: [
      {
        heading: '1. Why Fossil Fuels are Non-Renewable',
        body: 'It takes millions of years for geological processes to synthesize coal and petroleum, but human civilization is consuming known global reserves in a few centuries, leading to depletion and greenhouse carbon dioxide emissions.',
        tip: 'Compressed Natural Gas (CNG) burns cleanly with minimal soot, making it an eco-friendly vehicle fuel.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 4,
    title: 'Combustion and Flame (Fire Science & Candle Zones)',
    tagline: 'Combustible substances, ignition temperature, inflammable liquids, fire extinguishers (CO₂), and flame zones',
    summary: 'Investigate the chemistry of fire! Define combustion as a chemical reaction with oxygen releasing heat and light. Characterize ignition temperature (lowest temperature at which a substance catches fire). Operate carbon dioxide and foam fire extinguishers. Dissect the three zones of a candle flame: innermost dark zone (unburnt wax vapor), middle luminous yellow zone (incomplete combustion), and outermost blue non-luminous zone (complete combustion, hottest).',
    keyConcepts: [
      { title: 'Fire Triangle Conditions', detail: 'Combustion requires three simultaneous conditions: 1) Combustible Fuel, 2) Oxygen/Air supply, 3) Heating up to Ignition Temperature.' },
      { title: 'Three Zones of a Candle Flame', detail: 'Outermost zone (blue): complete combustion and highest temperature; Middle zone (yellow): luminous, carbon soot; Innermost zone (black): unburnt wax vapor, least hot.' }
    ],
    readingSections: [
      {
        heading: '1. Why Goldsmiths Blow on the Outermost Flame Zone',
        body: 'Goldsmiths use a metallic blowpipe to direct the outermost non-luminous blue zone of a flame onto gold and silver because this zone is the hottest and contains excess oxygen to melt precious metals quickly.',
        tip: 'Water should never be used on electrical or oil fires because water conducts electricity and spreads floating burning oil.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 5,
    title: 'Conservation of Plants and Animals (Biodiversity & Reserves)',
    tagline: 'Deforestation causes, Biosphere Reserves, National Parks, Wildlife Sanctuaries, Red Data Book, and endemic species',
    summary: 'Protect biological diversity and delicate ecosystems! Assess the devastating consequences of deforestation: desertification, drought, global warming, and disruption of the water cycle. Differentiate protected conservation zones: Biosphere Reserves (Pachmarhi), National Parks (Kaziranga), and Wildlife Sanctuaries. Learn about endemic species, endangered wildlife, the IUCN Red Data Book, and Project Tiger.',
    keyConcepts: [
      { title: 'Biosphere Reserves', detail: 'Large multipurpose protected areas preserving wildlife, plant species, and traditional tribal lifestyles while supporting research.' },
      { title: 'Endemic Species', detail: 'Species of plants and animals found exclusively in a particular geographical area and nowhere else naturally (e.g., wild mango and Indian giant squirrel in Pachmarhi).' }
    ],
    readingSections: [
      {
        heading: '1. Project Tiger and Population Recovery',
        body: 'Launched by the Government of India in 1973, Project Tiger created dedicated tiger reserves with strictly protected core habitats, successfully reversing the catastrophic decline of the Royal Bengal Tiger.',
        tip: 'Recycling 1 ton of paper saves approximately 17 full-grown trees, 7,000 gallons of water, and immense electricity.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 6,
    title: 'Reproduction in Animals (Sexual & Asexual Biology)',
    tagline: 'Internal vs external fertilization, test-tube babies (IVF), metamorphosis in frogs, binary fission, and budding',
    summary: 'Study the continuation of animal life! Contrast internal fertilization (humans, dogs, birds) with external fertilization in water (frogs, fish). Explain in-vitro fertilization (IVF) and test-tube babies. Trace frog metamorphosis: Egg -> Tadpole -> Adult frog driven by thyroxine hormone. Examine asexual reproduction in lower organisms: budding in Hydra and binary fission in Amoeba. Learn about Dolly the sheep (cloning).',
    keyConcepts: [
      { title: 'Metamorphosis in Amphibians', detail: 'The drastic biological transformation of a swimming, gill-breathing aquatic tadpole into a lung-breathing terrestrial frog, regulated by iodine and thyroid hormone.' },
      { title: 'Amoeba Binary Fission', detail: 'Asexual reproduction where the nucleus divides into two (karyokinesis) followed by division of the cytoplasm (cytokinesis) to form two identical daughter amoebae.' }
    ],
    readingSections: [
      {
        heading: '1. Dolly the Sheep: The First Mammalian Clone',
        body: 'On 5 July 1996, Ian Wilmut and colleagues at the Roslin Institute in Scotland cloned Dolly the sheep by transferring the somatic cell nucleus from a Finn Dorsett ewe into an enucleated Scottish Blackface egg cell.',
        tip: 'Viviparous animals give birth to living young; oviparous animals lay eggs.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 7,
    title: 'Force and Pressure (Physical Dynamics & Fluids)',
    tagline: 'Contact vs non-contact forces, Pressure = Force/Area, liquid manometer pressure, and atmospheric barometers',
    summary: 'Analyze mechanics of force and pressure! Classify forces: Contact forces (muscular, friction) vs Non-contact forces (magnetic, electrostatic, gravitational). Define pressure as force acting perpendicularly per unit area: P = F / A (measured in Pascals, N/m²). Demonstrate that liquids exert pressure on container walls and that pressure increases with depth. Measure atmospheric pressure exerted by Earth’s air envelope.',
    keyConcepts: [
      { title: 'Pressure Formula', detail: 'Pressure P = Force / Area (P = F / A). Sharpening a knife reduces contact area, producing massive cutting pressure with minimal force.' },
      { title: 'Atmospheric Pressure Magnitude', detail: 'The column of atmospheric air above a 1 m² area at sea level exerts approximately 100,000 Pascals (100 kPa) of pressure!' }
    ],
    readingSections: [
      {
        heading: '1. Otto von Guericke’s Magdeburg Hemispheres (1654)',
        body: 'German scientist Otto von Guericke pumped air out of two hollow copper hemispheres fitted together. Two teams of eight horses pulling in opposite directions could not pull the hemispheres apart, dramatically proving atmospheric pressure.',
        tip: 'Deep-sea divers wear pressurized suits to withstand the tremendous hydrostatic pressure exerted by water at deep ocean depths.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 8,
    title: 'Friction (Tribology & Types of Resistance)',
    tagline: 'Static, sliding, and rolling friction, factors affecting friction, ball bearings, and aerodynamic fluid drag',
    summary: 'Study the resistive force that opposes relative motion between contacting surfaces! Compare three types of friction: Static friction (maximum threshold before motion starts), Sliding friction (kinetic friction, slightly less than static), and Rolling friction (least resistive). Explain friction as microscopic interlocking of surface irregularities. Evaluate methods to increase friction (treaded tires) or reduce friction (lubricants, ball bearings, streamlined airplane shapes).',
    keyConcepts: [
      { title: 'Rolling vs Sliding Friction', detail: 'Rolling friction is much smaller than sliding friction because contact area and mechanical interlocking are minimized; this is why wheels were humanity’s greatest invention.' },
      { title: 'Fluid Drag and Streamlining', detail: 'Frictional resistance exerted by liquids and gases is called drag. Birds, fish, and airplanes have streamlined contours to minimize fluid drag.' }
    ],
    readingSections: [
      {
        heading: '1. Friction is a Necessary Evil',
        body: 'Without friction, walking on streets, writing with pens, driving cars, and holding objects would be impossible. However, friction also generates heat, wastes fuel, and wears down machinery parts and shoe soles.',
        tip: 'Ball bearings convert sliding friction into rolling friction inside bicycle axles and electric ceiling fans.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 9,
    title: 'Sound (Vibrations, Pitch, Amplitude & Audible Range)',
    tagline: 'Vocal cords, medium requirement, amplitude (loudness in decibels), frequency (pitch in Hertz), and human audible range (20 Hz - 20,000 Hz)',
    summary: 'Explore musical acoustics and human hearing! Understand sound as mechanical vibrations of bodies (tuning forks, stretched strings, vocal cords). Prove that sound cannot travel through a vacuum (electric bell in bell-jar experiment). Relate wave amplitude to loudness (measured in decibels dB) and frequency to pitch/shrillness (measured in Hertz Hz). Define the human audible frequency spectrum (20 Hz to 20,000 Hz) and discuss noise pollution abatement.',
    keyConcepts: [
      { title: 'Loudness vs Pitch', detail: 'Loudness is proportional to the square of amplitude (Loudness ∝ Amplitude²); Pitch/Shrillness depends directly on frequency of vibration.' },
      { title: 'Human Audible Spectrum', detail: 'Humans perceive frequencies from 20 Hz to 20,000 Hz (20 kHz). Infrasonic sounds are < 20 Hz (whales, elephants); Ultrasonic sounds are > 20 kHz (bats, dogs, dolphins).' }
    ],
    readingSections: [
      {
        heading: '1. Vocal Cord Anatomy in Humans',
        body: 'In humans, sound is produced by the larynx (voice box). Two vocal cords are stretched across the larynx leaving a narrow slit; when air from the lungs is forced through the slit, the vocal cords vibrate to produce voice.',
        tip: 'Noise pollution above 80 dB becomes physically painful and can cause hearing impairment, hypertension, and sleep disorders.'
      }
    ]
  }),
  buildChapter(8, 'c8-sci', 'Science', {
    chapterNumber: 10,
    title: 'Chemical Effects of Electric Current (Electroplating)',
    tagline: 'Electrolytes, Michael Faraday, LED testers, and electroplating copper/chromium for corrosion resistance',
    summary: 'Investigate electrical conduction in liquids! Test conductivity of tap water, lemon juice, vinegar, and salt solutions using magnetic compass and LED testers. Observe chemical reactions triggered by electric currents: gas bubbles at electrodes, metal deposition, and solution color changes. Master industrial electroplating (depositing a desired layer of metal onto another object using electrolysis, such as chrome plating on bicycle handlebars and gold-plating on jewelry).',
    keyConcepts: [
      { title: 'Electroplating Process', detail: 'Electrolytic deposition of a thin protective or decorative metal layer onto a conducting object connected as the cathode (-).' },
      { title: 'Electrolytes and Ionization', detail: 'Liquids that conduct electricity are solutions of acids, bases, or salts that dissociate into mobile positive cations and negative anions.' }
    ],
    readingSections: [
      {
        heading: '1. Why LEDs are Used in Liquid Testers',
        body: 'Unlike incandescent bulbs that require high currents to heat their tungsten filaments to glowing temperatures, Light Emitting Diodes (LEDs) glow even with microscopic electric currents flowing through weakly conducting liquids.',
        tip: 'In copper plating, the copper plate is made the anode (+); copper ions dissolve into the copper sulphate electrolyte and deposit onto the cathode (-).'
      }
    ]
  })
];

const sstChapters = [
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 1,
    title: 'How, When and Where? (Periodisation & Colonial Archives)',
    tagline: 'James Mill’s three-fold periodisation, British colonial survey archives, and subaltern history',
    summary: 'Deconstruct historical methodology! Critically analyze Scottish economist James Mill’s 1817 colonial periodisation dividing Indian history into "Hindu", "Muslim", and "British" periods based on religion of rulers. Understand modern historical periodisation (Ancient, Medieval, Modern). Examine official British archives (National Archives of India, record rooms) and recognize what colonial administrative documents conceal about peasants and marginalized groups.',
    keyConcepts: [
      { title: 'Critique of James Mill’s Periodisation', detail: 'Mill’s division erroneously characterized the pre-British era as an age of religious darkness and superstition, ignoring diverse cultural and economic achievements.' },
      { title: 'Colonial Administrative Archives', detail: 'The British believed the act of writing was crucial; every policy, investigation, and plan was meticulously recorded in specialized record rooms.' }
    ],
    readingSections: [
      {
        heading: '1. The National Archives of India',
        body: 'Built in New Delhi during the 1920s adjacent to the Viceroy’s palace, the National Archives housed imperial records, demonstrating the central importance the colonial government placed on official documentation.',
        tip: 'Official colonial records tell what administrators thought, not what common peasants or tribal people experienced.'
      }
    ]
  }),
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 2,
    title: 'From Trade to Territory (The East India Company Rule)',
    tagline: 'Battle of Plassey 1757, Battle of Buxar 1764, Subsidiary Alliance, and Lord Dalhousie’s Doctrine of Lapse',
    summary: 'Trace how a trading company became an imperial ruling sovereign! Examine the East India Company’s royal charter from Queen Elizabeth I in 1600. Trace trade disputes in Bengal leading to the historic Battle of Plassey (1757) where Robert Clive bribed Mir Jafar to defeat Siraj-ud-Daulah. Study the Battle of Buxar (1764) securing Diwani revenues, Wellesley’s Subsidiary Alliance system, Anglo-Maratha wars, and Lord Dalhousie’s annexation Doctrine of Lapse (Jhansi, Satara).',
    keyConcepts: [
      { title: 'Battle of Plassey (1757)', detail: 'The decisive turning point establishing British political dominance in India, triggered by Company abuse of trade duty exemptions.' },
      { title: 'The Doctrine of Lapse', detail: 'Lord Dalhousie’s annexation policy decreeing that if an Indian ruler died without a natural male heir, his kingdom lapsed automatically into Company sovereignty.' }
    ],
    readingSections: [
      {
        heading: '1. The Diwani of Bengal (1765)',
        body: 'Following the Battle of Buxar, Mughal Emperor Shah Alam II granted the Diwani (right to collect land revenues) of Bengal, Bihar, and Orissa to the Company, allowing British trade to be financed entirely by Indian revenues rather than British gold.',
        tip: 'Tipu Sultan, the Tiger of Mysore, resisted British expansion until his death defending Seringapatam in 1799.'
      }
    ]
  }),
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 3,
    title: 'Tribals, Dikus and the Vision of a Golden Age',
    tagline: 'Jhum shifting cultivation, pastoralists, colonial forest laws, Birsa Munda, and Ulgulan revolt',
    summary: 'Examine tribal life under British colonial rule! Explore tribal livelihoods: shifting cultivation (Jhum in northeast India), hunter-gatherers (Khonds of Orissa), and pastoral herders (Gaddis, Bakarwals). Analyze colonial forest laws classifying forests as Reserved Forests, evicting indigenous communities and labeling them as criminal encroachers. Trace Birsa Munda’s historic Ulgulan revolt (1895-1900) against moneylenders, landlords, and British colonial officers.',
    keyConcepts: [
      { title: 'Impact of Colonial Forest Laws', detail: 'The British declared all forests state property, categorizing valuable timber areas as Reserved Forests and prohibiting tribal hunting, grazing, and shifting farming.' },
      { title: 'Birsa Munda and the Ulgulan Revolt', detail: 'Birsa mobilized Munda adivasis against "Dikus" (outsiders/oppressors), fighting to establish a Munda Raj free from colonial exploitation.' }
    ],
    readingSections: [
      {
        heading: '1. The Chhotanagpur Tenancy Act (1908)',
        body: 'Following Birsa Munda’s rebellion, the British were forced to enact the Chhotanagpur Tenancy Act, legally prohibiting the transfer of tribal ancestral land to non-tribal landlords.',
        tip: 'Birsa Munda is revered across India as "Dharti Aba" (Father of the Earth).'
      }
    ]
  }),
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 4,
    title: 'When People Rebel: 1857 and After',
    tagline: 'Enfield greased cartridges, Mangal Pandey, Meerut uprising, Bahadur Shah Zafar, and Government of India Act 1858',
    summary: 'Analyze the Great Rebellion of 1857! Explore deep-rooted grievances: annexation of Awadh, high land taxes, disarmament of native sepoys, and the spark of the new Enfield rifle cartridges greased with cow and pig fat. Follow Mangal Pandey at Barrackpore and the sepoy march from Meerut to Delhi proclaiming Mughal Emperor Bahadur Shah Zafar as the symbolic leader. Analyze military leaders: Rani Lakshmibai of Jhansi, Nana Sahib, Tantia Tope, and Kunwar Singh.',
    keyConcepts: [
      { title: 'The Outbreak at Meerut (10 May 1857)', detail: 'Sepoys mutinied, broke into jail to release comrades, killed British officers, and marched overnight to Delhi to ignite the rebellion across northern India.' },
      { title: 'Government of India Act 1858', detail: 'Ended the rule of the British East India Company; governance of India was transferred directly to the British Crown, creating the office of Viceroy.' }
    ],
    readingSections: [
      {
        heading: '1. Rani Lakshmibai of Jhansi',
        body: 'When the Company refused to recognize her adopted son Anand Rao under the Doctrine of Lapse, Rani Lakshmibai joined the 1857 rebellion, fighting valiantly in male warrior attire and dying in battle at Gwalior.',
        tip: 'After 1858, the British decided to respect the rights of native rulers to adopt heirs, ending annexation policies.'
      }
    ]
  }),
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 5,
    title: 'The Indian Constitution & Understanding Secularism',
    tagline: 'Federalism, separation of powers, Fundamental Rights, Article 15, and the Indian model of secularism',
    summary: 'Study the moral and legal architecture of the Indian Republic! Understand why a democratic society requires a written constitution: preventing majority tyranny, restraining governmental overreach, and securing citizen dignity. Master the key features of the Indian Constitution: Federalism, Parliamentary System, Separation of Powers, and Fundamental Rights. Contrast Indian secularism (principled distance and equal respect for all religions) with strict Western secularism.',
    keyConcepts: [
      { title: 'Six Fundamental Rights', detail: '1) Right to Equality, 2) Right to Freedom, 3) Right against Exploitation, 4) Right to Freedom of Religion, 5) Cultural & Educational Rights, 6) Right to Constitutional Remedies.' },
      { title: 'The Indian Model of Secularism', detail: 'The Indian state does not enforce any religion nor take away religious freedom, but intervenes to eradicate discriminatory practices (e.g. banning untouchability, reforming personal laws).' }
    ],
    readingSections: [
      {
        heading: '1. Right to Constitutional Remedies (Article 32)',
        body: 'Dr. B.R. Ambedkar described Article 32 as the "heart and soul of the Constitution", empowering any citizen to approach the Supreme Court directly if their Fundamental Rights are violated.',
        tip: 'Secularism protects individuals from state tyranny and safeguards religious minorities from majoritarian dominance.'
      }
    ]
  }),
  buildChapter(8, 'c8-sst', 'Social Science', {
    chapterNumber: 6,
    title: 'Judiciary & Understanding the Criminal Justice System',
    tagline: 'Independence of Judiciary, hierarchy of courts, PIL (Public Interest Litigation), and the role of police and public prosecutor',
    summary: 'Explore constitutional justice! Understand why an independent judiciary is critical for the Rule of Law. Examine the integrated judicial structure: Supreme Court of India at the apex, High Courts in each state, and District/Subordinate courts. Trace the landmark innovation of Public Interest Litigation (PIL) in the 1980s. Deconstruct the criminal justice system: First Information Report (FIR), role of the police, public prosecutor, defense lawyer, and judge.',
    keyConcepts: [
      { title: 'Public Interest Litigation (PIL)', detail: 'Devised by the Supreme Court in the 1980s to allow any citizen or organization to file a petition on behalf of underprivileged groups whose rights are violated.' },
      { title: 'Essential Role of the Public Prosecutor', detail: 'Represents the interests of the State in criminal trials and must act impartially, presenting all evidence to aid the court in delivering justice.' }
    ],
    readingSections: [
      {
        heading: '1. D.K. Basu Guidelines for Arrest and Detention',
        body: 'The Supreme Court laid down specific guidelines that police must follow during arrest and interrogation, including informing relatives within 8-12 hours, memo of arrest, and medical checkups.',
        tip: 'Article 22 of the Constitution guarantees that no person can be detained without being informed of the grounds of arrest.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 1,
    title: 'The Best Christmas Present in the World & The Ant and the Cricket',
    tagline: 'Michael Morpurgo’s WWI Christmas truce 1914, Connie Macpherson’s letter, and Aesop’s fable of prudence',
    summary: 'Discover profound humanity amidst war! The narrator buys an old roll-top desk and finds a hidden letter from British soldier Jim Macpherson describing the miraculous 1914 Christmas Day truce in the trenches of World War I, where British and German soldiers shared sausages, rum, and a soccer match in No Man’s Land. Paired with Aesop’s fable "The Ant and the Cricket" teaching the value of foresight and hard work.',
    keyConcepts: [
      { title: 'The 1914 Christmas Truce Miracle', detail: 'Soldiers on both sides discovered that despite national flags and gunfire, they shared the same yearning for peace, family, and home.' },
      { title: 'Moral of "The Ant and the Cricket"', detail: 'Those who sing and waste away summer without preparing for winter will find themselves shivering and starving when hardship arrives.' }
    ],
    readingSections: [
      {
        heading: '1. Connie’s 101st Christmas',
        body: 'When the narrator visits 101-year-old Connie in a nursing home to return Jim’s letter, her failing eyesight mistakes him for her beloved Jim returned from the war, declaring his presence the greatest Christmas gift of her life.',
        tip: 'Compassion and remembrance can bring peace to long-standing grief.'
      }
    ]
  }),
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 2,
    title: 'The Tsunami (26 December 2004) & Geography Lesson (Zulfikar Ghose)',
    tagline: 'Indian Ocean tsunami, Tilly Smith’s geography knowledge, animal sixth sense, and perspective from an airplane',
    summary: 'Experience real heroism during natural catastrophe! Read harrowing survivor accounts from the devastating 26 December 2004 Indian Ocean tsunami in the Andaman & Nicobar Islands and Thailand. Learn how 10-year-old British schoolgirl Tilly Smith remembered her geography lesson on tsunamis, recognized frothing bubbles on the beach, and saved hundreds of tourists. Coupled with Zulfikar Ghose’s poem "Geography Lesson".',
    keyConcepts: [
      { title: 'Practical Knowledge Saves Lives', detail: 'Tilly Smith’s sharp observation of ocean withdrawal and bubbling foam alerted the entire resort to evacuate before the giant wave struck.' },
      { title: 'Ghose’s Airplane Perspective', detail: 'From six miles high, the poet sees that Earth is round and water-covered, yet cannot comprehend why humans build walls and wage wars across land.' }
    ],
    readingSections: [
      {
        heading: '1. Animal Pre-Perception of Earthquakes',
        body: 'While over 150,000 humans perished across coastal countries, very few wild animal carcasses were found in Yala National Park, Sri Lanka, where elephants trumpeted and ran for higher ground hours before the wave.',
        tip: 'Attentive education and situational awareness are life-saving skills.'
      }
    ]
  }),
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 3,
    title: 'Glimpses of the Past (S.D. Sawant) & Macavity: The Mystery Cat (T.S. Eliot)',
    tagline: 'Pictorial history of Indian struggle 1757-1857, social evils, Macaulay’s education, and Eliot’s criminal mastermind feline',
    summary: 'View graphic historical vignettes of colonial oppression and resistance! S.D. Sawant depicts India’s descent into British subjugation: rivalries among princes, social evils (untouchability, child marriage), commercial exploitation by the Company, Raja Ram Mohan Roy’s progressive reforms, Lord Macaulay introducing English education in 1835 to create clerks, and the simmering fury that exploded in 1857. Accompanied by T.S. Eliot’s playful "Macavity: The Mystery Cat".',
    keyConcepts: [
      { title: 'Sawant’s Graphic Historical Narrative', detail: 'Illustrates how indigenous disunity allowed foreign merchant companies to divide, conquer, and economically impoverish India.' },
      { title: 'Eliot’s "Napoleon of Crime"', detail: 'Macavity defies gravity and leaves Scotland Yard baffled because whenever a crime is committed, "Macavity’s not there!"' }
    ],
    readingSections: [
      {
        heading: '1. Raja Ram Mohan Roy’s Intellectual Vision',
        body: 'Raja Ram Mohan Roy realized that India needed modern scientific knowledge without losing its ancient spiritual heritage, declaring: "Cows are of different colours, but the colour of their milk is the same; teachers have different opinions, but the essence of every religion is the same."',
        tip: 'Understanding the past allows a nation to avoid repeating historic errors.'
      }
    ]
  }),
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 4,
    title: 'The Summit Within (Major H.P.S. Ahluwalia) & The School Boy (William Blake)',
    tagline: '1965 Indian Everest expedition, spiritual summit of the mind, and Blake’s trapped songbird in a classroom',
    summary: 'Scale the highest physical and mental heights! Major H.P.S. Ahluwalia, a member of India’s successful 1965 Mount Everest expedition, reflects that reaching the physical summit is only half the journey; the true challenge is conquering the "summit of the mind"—overcoming ego, fear, and internal doubt. Paired with William Blake’s romantic poem "The School Boy" lamenting how rigid schooling cages a child’s natural joyful curiosity.',
    keyConcepts: [
      { title: 'The Internal Summit of the Mind', detail: 'Conquering Mount Everest brings not merely physical exhilaration, but a deep spiritual humility that permanently changes a person.' },
      { title: 'Blake’s Critique of Regimental Education', detail: 'How can a bird that is born for joy sit in a cage and sing? Rigid rote schooling destroys natural creative curiosity.' }
    ],
    readingSections: [
      {
        heading: '1. Humility on the Top of the World',
        body: '"Looking down from the summit, you see other silvery peaks appearing through the clouds. You bow down and make your obeisance to whichever God you worship. The experience changes you completely; you are never the same again," wrote Major Ahluwalia.',
        tip: 'True character is forged not by external triumphs, but by mastering internal adversity.'
      }
    ]
  }),
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 5,
    title: 'This is Jody’s Fawn (Marjorie Kinnan Rawlings)',
    tagline: 'Snakebite antidote, orphan fawn in the scrub forest, moral responsibility, and tender compassion',
    summary: 'Experience Marjorie Kinnan Rawlings’ tender exploration of moral conscience! When Jody’s father Penny Baxter is bitten by a deadly rattlesnake, he kills a doe to use its liver to draw out the poison. Young Jody is haunted by the thought of the motherless baby fawn left alone in the predator-filled Florida scrub forest. He pleads with his parents, tracks the fawn through the woods, feeds it milk with his own fingers, and brings it home.',
    keyConcepts: [
      { title: 'Moral Duty and Restitution', detail: 'Jody feels a sacred obligation to save the fawn because his own father’s life was saved at the expense of the fawn’s mother.' },
      { title: 'Tender Animal Bonding', detail: 'Jody dips his fingers in milk and offers them to the fawn, gently coaxing the wild creature to trust him.' }
    ],
    readingSections: [
      {
        heading: '1. Penny Baxter’s Moral Wisdom',
        body: '"I can’t say no to you, son," said Penny. "It’d be ungrateful to leave it to starve. Boy, you got more sense than most men." Penny recognized that true maturity is measured by empathy for vulnerable creatures.',
        tip: 'Rawlings captures the raw natural beauty and deep empathy of rural childhood.'
      }
    ]
  }),
  buildChapter(8, 'c8-eng', 'English', {
    chapterNumber: 6,
    title: 'A Visit to Cambridge (Firdaus Kanga) & A Short Monsoon Diary (Ruskin Bond)',
    tagline: 'Meeting Stephen Hawking, disembodied computer voice, disability courage, and Ruskin Bond’s Mussoorie rains',
    summary: 'Witness inspiring courage and lyrical nature writing! In Part I, disabled Indian writer Firdaus Kanga visits legendary theoretical physicist Stephen Hawking in Cambridge, discovering immense intellectual vitality trapped in a paralyzed body communicating through a synthesizer. In Part II, Ruskin Bond’s diary captures the sensory magic of monsoon in Mussoorie: leopard attacks, scarlet minivets, mist-shrouded oak forests, and blooming cobra lilies.',
    keyConcepts: [
      { title: 'The Radiance of Stephen Hawking', detail: 'Hawking’s brilliance proved that physical confinement in a motorized wheelchair cannot constrain an incandescent mind probing the origins of the cosmos.' },
      { title: 'Ruskin Bond’s Intimate Nature Journaling', detail: 'The arrival of monsoon mist brings silence, making the hill birds quiet and wrapping the mountains in white melancholy beauty.' }
    ],
    readingSections: [
      {
        heading: '1. Hawking’s Philosophy on Disability',
        body: '"I think the only thing people with disabilities should concentrate on is what they are good at; they shouldn’t try to emulate able-bodied people," Hawking tapped on his computer synthesizer with characteristic intellectual clarity.',
        tip: 'Both writers show that the human spirit transcends physical limitations.'
      }
    ]
  })
];

export const class8Curriculum: Subject[] = [
  {
    id: 'c8-math',
    name: 'Mathematics',
    code: 'MATH-801',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 13-chapter Class 8 syllabus: Rational Numbers, Linear Equations, Understanding Quadrilaterals, Data Handling, Squares, Cubes, Comparing Quantities, Algebraic Expressions, Mensuration, Exponents, Proportions, Factorisation, and Graphs.',
    chapters: mathChapters
  },
  {
    id: 'c8-sci',
    name: 'Science (Physics, Chemistry, Biology)',
    code: 'SCI-801',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 10-chapter Class 8 syllabus: Crop Management, Microorganisms, Coal & Petroleum, Combustion & Flame, Conservation, Animal Reproduction, Force & Pressure, Friction, Sound, and Electroplating.',
    chapters: scienceChapters
  },
  {
    id: 'c8-sst',
    name: 'Social Science (History, Geography, Civics)',
    code: 'SST-801',
    iconName: 'Globe',
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-500 to-indigo-600'
    },
    description: 'Complete Class 8 syllabus: Periodisation & Archives, Trade to Territory, Birsa Munda, 1857 Revolt, Indian Constitution, and Judiciary & Criminal Justice System.',
    chapters: sstChapters
  },
  {
    id: 'c8-eng',
    name: 'English Language & Literature (Honeydew & It So Happened)',
    code: 'ENG-801',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 8 literature anthology: The Best Christmas Present, The Tsunami, Glimpses of the Past, The Summit Within, This is Jody’s Fawn, and A Visit to Cambridge.',
    chapters: englishChapters
  }
];
