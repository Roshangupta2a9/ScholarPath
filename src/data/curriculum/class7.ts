import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Integers & Multiplication Rules',
    tagline: 'Sign rules, product of negative integers, division identity, and BODMAS order',
    summary: 'Deepen your mastery of integers! Understand why multiplying two negative integers yields a positive product [(-a) × (-b) = +(a × b)]. Master commutative, associative, and distributive properties over integers and apply strict BODMAS hierarchy.',
    keyConcepts: [
      { title: 'Sign Rules for Multiplication', detail: '(+) × (+) = (+); (+) × (-) = (-); (-) × (+) = (-); (-) × (-) = (+).' },
      { title: 'Even vs Odd Negative Factors', detail: 'Product of an even number of negative integers is positive; product of an odd number is negative.' }
    ],
    readingSections: [
      {
        heading: '1. The Logic of Negative Times Negative',
        body: 'Consider: 3 × (-2) = -6; 2 × (-2) = -4; 1 × (-2) = -2; 0 × (-2) = 0. Notice the pattern: every step increases by +2! Therefore, the next step must be: (-1) × (-2) = +2.',
        tip: 'Division by zero is undefined for all integers, just as with whole numbers.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Fractions and Decimals (Multiplication & Division)',
    tagline: 'Reciprocals, division of fractions, multiplying decimals, and shifting decimal points',
    summary: 'Multiply and divide proper, improper, and mixed fractions. Learn the reciprocal rule for fraction division (invert divisor and multiply). Master decimal multiplication and shifting decimal points when multiplying or dividing by powers of 10.',
    keyConcepts: [
      { title: 'Reciprocal of a Fraction', detail: 'The reciprocal of a/b is b/a (where a, b ≠ 0). Their product is always 1: (a/b) × (b/a) = 1.' },
      { title: 'Multiplying Decimals', detail: 'Multiply numbers ignoring the decimal point, then place the decimal dot counting total decimal places from both factors.' }
    ],
    readingSections: [
      {
        heading: '1. Visualizing Fraction of a Fraction',
        body: 'Half of one-third (½ × ⅓) means dividing a ⅓ piece into two equal parts, producing ⅙ of the original whole.',
        tip: 'Dividing by a fraction less than 1 always results in a number larger than the dividend!'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Data Handling (Mean, Median, Mode & Double Bar Graphs)',
    tagline: 'Arithmetic mean, range, most frequent mode, middle median, and double bar graph comparisons',
    summary: 'Extract representative values from numerical data sets! Calculate Mean = (Sum of all observations) / (Total number of observations). Find Range = Highest - Lowest value. Identify Mode (most frequently occurring value) and Median (exact middle value when data is arranged in ascending order). Construct double bar graphs to compare two sets of data side-by-side.',
    keyConcepts: [
      { title: 'Three Measures of Central Tendency', detail: 'Mean represents the average value; Mode pinpoints the most popular item; Median reflects the exact center unaffected by extreme outliers.' },
      { title: 'Double Bar Graphs', detail: 'Pairs of vertical bars drawn adjacent to each other with a key, allowing direct visual comparison (e.g. marks in Term 1 vs Term 2).' }
    ],
    readingSections: [
      {
        heading: '1. Choosing the Right Representative Value',
        body: 'A shoe store owner orders sizes based on the Mode (most purchased shoe size), while a teacher grading exam averages relies on the Mean.',
        tip: 'If the number of observations n is even, Median is the average of the two central numbers.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Simple Equations (Transposition & Algebraic Solutions)',
    tagline: 'Balancing pan scale, systematic transposition, and solving real-world word puzzles',
    summary: 'Master the art of solving single-variable linear equations! Visualize equations as balanced weighing scales: whatever operation is performed on the LHS must be performed equally on the RHS. Master the Transposition method to solve equations in fewer steps, and set up equations from word problems involving ages, perimeters, and numbers.',
    keyConcepts: [
      { title: 'The Principle of Equality', detail: 'An equation remains valid if the same number is added, subtracted, multiplied, or divided on both sides.' },
      { title: 'Transposition Method', detail: 'Moving a term across the equals sign flips its sign: positive becomes negative, and multiplication becomes division.' }
    ],
    readingSections: [
      {
        heading: '1. Converting Word Riddles to Equations',
        body: '"I think of a number, add 7, and multiply the result by 3 to get 45." In algebra: 3(x + 7) = 45 -> x + 7 = 15 -> x = 8!',
        tip: 'Always check your calculated solution by substituting it back into the original equation.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Lines and Angles (Complementary, Supplementary & Transversals)',
    tagline: 'Complementary (sum=90°), supplementary (sum=180°), vertically opposite, and alternate interior angles',
    summary: 'Explore geometric relationships between lines and intersecting angles! Identify complementary angles (sum = 90°) and supplementary angles (sum = 180°). Prove that vertically opposite angles formed by intersecting lines are equal. Examine parallel lines intersected by a transversal line, discovering corresponding angles, alternate interior angles, and interior angles on the same side.',
    keyConcepts: [
      { title: 'Complementary vs Supplementary', detail: 'Two angles are complementary if they add to 90°; supplementary if they add to 180°.' },
      { title: 'Parallel Lines and Transversals', detail: 'When two parallel lines are cut by a transversal: alternate interior angles are equal (Z-pattern) and corresponding angles are equal (F-pattern).' }
    ],
    readingSections: [
      {
        heading: '1. Vertically Opposite Angles Proof',
        body: 'When lines AB and CD intersect at O: ∠AOC + ∠COB = 180° (linear pair) and ∠BOD + ∠COB = 180°. Equating them gives ∠AOC = ∠BOD!',
        tip: 'Consecutive interior angles on the same side of a transversal are supplementary (sum = 180°).'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'The Triangle and Its Properties (Angle Sum & Exterior Angle)',
    tagline: 'Medians, altitudes, exterior angle theorem, angle sum property (180°), and Pythagoras theorem',
    summary: 'Analyze the geometry of triangles! Define medians (connecting vertex to midpoint of opposite side) and altitudes (perpendicular heights). Prove that an exterior angle of a triangle equals the sum of its two interior opposite angles. Prove that the sum of the three angles of a triangle is always 180°. Explore triangle inequalities and the Pythagoras theorem in right-angled triangles.',
    keyConcepts: [
      { title: 'Exterior Angle Theorem', detail: 'An exterior angle of a triangle equals the sum of its two interior opposite angles (Ext ∠ = Int ∠₁ + Int ∠₂).' },
      { title: 'Pythagoras Theorem', detail: 'In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c².' }
    ],
    readingSections: [
      {
        heading: '1. Triangle Inequality Rule',
        body: 'The sum of the lengths of ANY two sides of a triangle must be strictly greater than the length of the third side. If not, the sides cannot close to form a triangle!',
        tip: 'An equilateral triangle has three 60° angles; an isosceles right triangle has angles 45°, 45°, and 90°.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Comparing Quantities (Ratios, Percentages & Simple Interest)',
    tagline: 'Unitary method, percentage profit and loss, and simple interest formula I = (P×R×T)/100',
    summary: 'Master financial and numerical comparisons! Convert ratios to percentages and vice-versa. Calculate percentage increase and decrease. Evaluate Profit % = (Profit/CP) × 100 and Loss % = (Loss/CP) × 100. Compute Simple Interest I = (P × R × T) / 100 and Total Amount A = P + I on bank savings and loans.',
    keyConcepts: [
      { title: 'Cost Price and Profit Percentage', detail: 'Profit = SP - CP (when SP > CP); Profit % is ALWAYS calculated with respect to Cost Price (CP).' },
      { title: 'Simple Interest Formula', detail: 'I = (P × R × T) / 100, where P is Principal, R is Rate per annum, and T is Time in years.' }
    ],
    readingSections: [
      {
        heading: '1. The Meaning of Percent',
        body: 'Percent comes from the Latin "per centum", meaning "per hundred". Expressing quantities out of 100 standardizes comparison between different class sizes or test totals.',
        tip: 'To convert a fraction to a percentage, simply multiply by 100% (e.g., ¾ × 100% = 75%).'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Rational Numbers (Number Line & Arithmetic Operations)',
    tagline: 'p/q form, equivalent rational numbers, standard form, and arithmetic operations',
    summary: 'Bridge integers and fractions into rational numbers! Define a rational number as any number expressible in the form p/q (where p and q are integers and q ≠ 0). Reduce rational numbers to standard form (coprime with positive denominator). Represent negative and positive rational numbers on the number line and perform addition, subtraction, multiplication, and division.',
    keyConcepts: [
      { title: 'Definition of Rational Numbers', detail: 'A number expressible as p/q where p and q are integers and denominator q ≠ 0. Includes all integers, fractions, and terminating decimals.' },
      { title: 'Standard Form', detail: 'A rational number is in standard form if its denominator is positive and the numerator and denominator have no common factor other than 1.' }
    ],
    readingSections: [
      {
        heading: '1. Negative Rational Numbers',
        body: 'Numbers like -3/5 and 4/(-7) = -4/7 lie to the left of 0 on the number line. When comparing negative rational numbers, the one with the smaller absolute magnitude is greater (-1/3 > -2/3).',
        tip: 'Every integer is a rational number because it can be written as n/1.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Perimeter and Area (Parallelogram, Triangles & Circles)',
    tagline: 'Area of parallelogram b×h, area of triangle ½×b×h, circumference 2πr, and circular area πr²',
    summary: 'Measure geometric perimeters and planar areas! Derive the area of a parallelogram (Base × Height) by cutting and translating a right triangle into a rectangle. Deduce the area of a triangle as half that of a parallelogram: Area = ½ × Base × Height. Explore circles, discovering the constant ratio π (approx 22/7 or 3.1416), circumference C = 2πr, and circle area A = πr².',
    keyConcepts: [
      { title: 'Area of a Parallelogram', detail: 'Area = Base × Height (b × h). The height must be perpendicular to the chosen base.' },
      { title: 'Circumference and Area of a Circle', detail: 'Circumference C = 2πr; Area A = πr² (where r is radius and π ≈ 22/7).' }
    ],
    readingSections: [
      {
        heading: '1. The Mystery of Pi (π)',
        body: 'Measure any circular object’s perimeter with a string and divide by its diameter: you will always obtain the irrational constant π = 3.14159... across all circles in the universe!',
        tip: 'Area of a circular path or ring = π(R² - r²), where R is outer radius and r is inner radius.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Algebraic Expressions (Terms, Factors & Addition)',
    tagline: 'Variables, constants, coefficients, like vs unlike terms, monomials, binomials, and evaluating expressions',
    summary: 'Build algebraic fluency! Identify variables (letters that take various numerical values) and constants. Break algebraic expressions into terms and factors (e.g. 5xy has numerical coefficient 5 and variable factors x, y). Group like terms with identical algebraic factors. Add and subtract polynomials, and evaluate expressions by substituting numerical values.',
    keyConcepts: [
      { title: 'Like vs Unlike Terms', detail: 'Terms having the same algebraic variable factors are like terms (e.g., 7xy and -3xy); only like terms can be added or subtracted together.' },
      { title: 'Evaluating Algebraic Expressions', detail: 'Substituting given numbers for variables reveals the numerical value of the expression for specific conditions.' }
    ],
    readingSections: [
      {
        heading: '1. Monomials, Binomials, and Trinomials',
        body: 'An expression with one term is a monomial (7x); two terms is a binomial (2x + 3); three terms is a trinomial (x² + 2x + 1). More generally, any finite sum of terms is a polynomial.',
        tip: 'In the term -x, the numerical coefficient is -1.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Exponents and Powers (Laws of Indices)',
    tagline: 'Base and exponent, product rule aᵐ×aⁿ = aᵐ⁺ⁿ, quotient rule, power of a power, and scientific standard form',
    summary: 'Simplify calculations with repeated multiplication! Express large numbers in exponential form bᵉ where b is base and e is exponent. Discover the fundamental laws of exponents: 1) aᵐ × aⁿ = aᵐ⁺ⁿ; 2) aᵐ / aⁿ = aᵐ⁻ⁿ; 3) (aᵐ)ⁿ = aᵐⁿ; 4) aᵐ × bᵐ = (ab)ᵐ; 5) a⁰ = 1. Write planetary distances and atomic dimensions in standard scientific notation.',
    keyConcepts: [
      { title: 'Product and Quotient Laws', detail: 'When bases are identical: add exponents in multiplication (aᵐ × aⁿ = aᵐ⁺ⁿ) and subtract exponents in division (aᵐ ÷ aⁿ = aᵐ⁻ⁿ).' },
      { title: 'The Zero Exponent', detail: 'Any non-zero base raised to the power 0 equals 1: a⁰ = 1 (because aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰ = 1).' }
    ],
    readingSections: [
      {
        heading: '1. Exponential Growth Power',
        body: 'If you fold a paper 50 times (doubling thickness 2⁵⁰ times), its thickness would reach from the Earth to the Sun! Exponents represent rapid multiplicative growth.',
        tip: '(-1) raised to an even power equals +1; raised to an odd power equals -1.'
      }
    ]
  }),
  buildChapter(7, 'c7-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Visualising Solid Shapes & Symmetry',
    tagline: 'Line symmetry, rotational symmetry (order and angle), 3D polyhedra, faces, edges, vertices, and Euler’s formula',
    summary: 'Explore spatial geometry and symmetry! Investigate line symmetry and rotational symmetry: angle of rotation, center of rotation, and order of rotational symmetry (e.g. a square has order 4). Study 3D solids: cubes, prisms, pyramids, and cylinders. Identify Faces (F), Vertices (V), and Edges (E), and verify Euler’s celebrated formula for polyhedra: F + V - E = 2.',
    keyConcepts: [
      { title: 'Euler’s Polyhedral Formula', detail: 'For any simple convex polyhedron: Faces + Vertices - Edges = 2 (F + V - E = 2).' },
      { title: 'Rotational Symmetry', detail: 'A shape has rotational symmetry if it looks identical to its original position more than once during a complete 360° turn.' }
    ],
    readingSections: [
      {
        heading: '1. Nets for Building 3D Shapes',
        body: 'A net is a flat 2D skeletal outline that can be folded along scored edges to assemble into a 3D solid. A cube has 11 distinct folding nets!',
        tip: 'A circle has infinite lines of symmetry and rotational symmetry of infinite order.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 1,
    title: 'Nutrition in Plants (Autotrophs & Photosynthesis)',
    tagline: 'Chlorophyll, stomata, xylem, parasitic Cuscuta, insectivorous Pitcher plant, and symbiotic lichens',
    summary: 'Investigate how plants manufacture organic nourishment! Differentiate autotrophic nutrition from heterotrophic modes. Detail the chemical equation of photosynthesis: 6CO₂ + 6H₂O + Sunlight + Chlorophyll -> C₆H₁₂O₆ (glucose) + 6O₂. Examine guard cells regulating stomatal pores. Explore parasitic Cuscuta (Amarbel), insectivorous pitcher plants capturing nitrogen, saprotrophic fungi, and symbiotic lichens (alga and fungus partnership).',
    keyConcepts: [
      { title: 'Photosynthesis Reaction', detail: 'Carbon dioxide + Water in presence of chlorophyll and sunlight synthesizes glucose and releases oxygen gas.' },
      { title: 'Symbiotic Living in Lichens', detail: 'Alga contains chlorophyll and provides food via photosynthesis; fungus provides shelter, water, and minerals in return.' }
    ],
    readingSections: [
      {
        heading: '1. Why Pitcher Plants Trap Insects',
        body: 'Pitcher plants grow in nitrogen-deficient bogs. Although green and capable of photosynthesis, they trap and digest insects with digestive enzymes to obtain essential nitrogen nutrients.',
        tip: 'Iodine turns starch blue-black, providing an easy test for photosynthetic leaf activity.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 2,
    title: 'Nutrition in Animals (Digestion in Humans & Ruminants)',
    tagline: 'Alimentary canal, peristalsis, stomach hydrochloric acid, bile, villi absorption, and ruminant cud chewing',
    summary: 'Trace the digestive journey of food! Explore stages of animal nutrition: Ingestion, Digestion, Absorption, Assimilation, and Egestion. Map human digestive anatomy: mouth (salivary amylase), esophagus peristalsis, stomach (HCl killing bacteria and pepsin digesting proteins), small intestine (bile from liver emulsifying fats, pancreatic juice, and villi nutrient absorption), and large intestine. Examine ruminants (cows) with four-chambered stomachs regurgitating cud.',
    keyConcepts: [
      { title: 'Villi in the Small Intestine', detail: 'Millions of microscopic finger-like projections that dramatically increase the absorptive surface area for digested nutrients into blood capillaries.' },
      { title: 'Ruminant Digestion (Cud Chewing)', detail: 'Herbivores quickly swallow grass into the rumen chamber, where cellulose-digesting bacteria break down tough plant fibers before food is chewed again as cud.' }
    ],
    readingSections: [
      {
        heading: '1. Dr. William Beaumont and the Open Stomach (1822)',
        body: 'Dr. Beaumont treated Alexis St. Martin, whose shotgun stomach wound healed leaving a permanent open hole, allowing scientists to directly observe gastric digestion and stomach acid secretion for the first time.',
        tip: 'Liver is the largest gland in the human body and secretes bile stored in the gall bladder.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 3,
    title: 'Heat and Temperature (Conduction, Convection & Radiation)',
    tagline: 'Clinical vs laboratory thermometers, conduction in solids, convection in fluids, sea/land breezes, and radiation',
    summary: 'Master thermal physics! Contrast qualitative heat sensation with precise temperature measurement. Compare clinical thermometers (35°C to 42°C with a constriction kink to prevent mercury backflow) with laboratory thermometers (-10°C to 110°C). Analyze three modes of heat transfer: Conduction (solids), Convection (fluids creating coastal Sea Breeze and Land Breeze), and Radiation (infrared waves traveling through vacuum from the Sun).',
    keyConcepts: [
      { title: 'Three Modes of Heat Transfer', detail: 'Conduction: heat transfer via direct molecular collision in solids; Convection: actual movement of heated fluid molecules; Radiation: electromagnetic waves without any material medium.' },
      { title: 'Sea Breeze vs Land Breeze', detail: 'During the day, land heats faster than water, drawing cool sea breeze inland; at night, land cools faster, driving cool land breeze towards the warmer sea.' }
    ],
    readingSections: [
      {
        heading: '1. Why We Wear Light Clothes in Summer and Wool in Winter',
        body: 'Light-colored clothes reflect solar radiant heat keeping us cool. Dark clothes absorb heat. Woolen clothes trap air pockets between fibers; since air is a poor conductor of heat, body warmth cannot escape into the cold air.',
        tip: 'Stainless steel cooking pans often have copper bottoms because copper conducts heat far faster than steel.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 4,
    title: 'Acids, Bases and Salts (Indicators & Neutralisation)',
    tagline: 'Sour acids, bitter bases, litmus from lichens, turmeric indicator, phenolphthalein, and neutralisation salt+water',
    summary: 'Explore chemical reactions of acids and bases! Identify natural acids (acetic acid in vinegar, citric acid in citrus fruits, lactic acid in curd) and bases (calcium hydroxide in limewater, magnesium hydroxide in antacids). Test substances using indicators: Litmus paper (turns red in acid, blue in base), Turmeric (turns reddish-brown in base), and Phenolphthalein. Study neutralization reactions: Acid + Base -> Salt + Water + Heat.',
    keyConcepts: [
      { title: 'Neutralisation Reaction', detail: 'Hydrochloric acid (HCl) + Sodium hydroxide (NaOH) -> Sodium chloride (NaCl salt) + Water (H₂O) + Heat energy.' },
      { title: 'Treating Indigestion and Ant Stings', detail: 'Ant stings inject formic acid, neutralized by rubbing moist baking soda (sodium hydrogen carbonate) or calamine solution (zinc carbonate).' }
    ],
    readingSections: [
      {
        heading: '1. Factory Waste Treatment Before River Disposal',
        body: 'Industrial effluents from factories often contain harmful acidic chemicals. If discharged directly into water bodies, they kill fish and aquatic life; factories must neutralize them with basic compounds like slaked lime.',
        tip: 'Litmus indicator is extracted naturally from lichens and turns purple in neutral distilled water.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 5,
    title: 'Physical and Chemical Changes (Rusting & Crystallisation)',
    tagline: 'Reversible physical changes, irreversible chemical changes, burning magnesium ribbon, rusting iron, and copper sulphate crystals',
    summary: 'Distinguish superficial shape alterations from profound chemical bonds! In physical changes, only physical properties (shape, size, state) change and no new substance forms (melting ice, dissolving sugar). In chemical changes, new substances with distinct properties are created, often accompanied by heat, light, gas bubbles, or color change (burning magnesium ribbon forming MgO, rusting of iron, curdling of milk). Master crystallization to obtain pure copper sulphate.',
    keyConcepts: [
      { title: 'Physical vs Chemical Change', detail: 'Physical changes are generally reversible without new chemical identity; chemical changes produce entirely new chemical compounds and are irreversible.' },
      { title: 'Rusting of Iron Conditions', detail: 'Rusting requires both oxygen (air) and moisture (water): 4Fe + 3O₂ + 2xH₂O -> 2Fe₂O₃·xH₂O (hydrated iron(III) oxide).' }
    ],
    readingSections: [
      {
        heading: '1. Galvanisation: Protecting Iron Ships and Pipes',
        body: 'Coating iron with a sacrificial layer of zinc prevents direct contact with air and moisture. Even if scratched, zinc oxidizes preferentially before iron, completely halting rust formation.',
        tip: 'Crystallisation is a physical purification method that separates pure solids from solution without chemical alteration.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 6,
    title: 'Respiration in Organisms (Cellular Respiration & Gas Exchange)',
    tagline: 'Glucose oxidation, aerobic (with O₂) vs anaerobic (without O₂), muscle lactic acid, spiracles in insects, and fish gills',
    summary: 'Uncover how living cells release biochemical energy! Contrast aerobic cellular respiration [Glucose + O₂ -> CO₂ + H₂O + 38 ATP] with anaerobic respiration in yeast forming alcohol (fermentation) and in human muscles forming lactic acid during strenuous exercise. Track human respiratory breathing mechanics: diaphragm contractions expanding thoracic lung volume. Study respiration in other animals: spiracles and trachea in insects, moist skin in earthworms, and vascular gills in fish.',
    keyConcepts: [
      { title: 'Why Muscle Cramps Occur', detail: 'During heavy sprinting, insufficient oxygen causes muscle cells to respire anaerobically, partially breaking glucose into lactic acid whose accumulation causes painful cramps.' },
      { title: 'Breathing Mechanism', detail: 'Inhalation: diaphragm moves down, ribs move up and out, creating negative pressure that draws air into lungs; Exhalation: diaphragm relaxes and moves up.' }
    ],
    readingSections: [
      {
        heading: '1. Respiration in Plant Roots',
        body: 'Plant roots take in oxygen from air spaces present between soil particles through root hairs. Overwatering plants fills all soil air spaces with water, suffocating roots and killing the plant.',
        tip: 'Yeast respiring anaerobically is used globally in bakeries to make bread fluffy and in wineries to produce beverages.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 7,
    title: 'Transportation in Animals and Plants (Circulation & Xylem)',
    tagline: 'Heart four chambers, arteries vs veins, capillaries, pulse rate, stethoscope, xylem, phloem, and transpiration suction',
    summary: 'Study biological fluid transport networks! Examine human blood: RBCs with hemoglobin, WBCs, platelets, and plasma. Differentiate thick-walled high-pressure Arteries (carrying oxygenated blood away from heart) from thin-walled Veins with valves (returning deoxygenated blood). Understand four heart chambers preventing blood mixing. In plants, examine vascular xylem vessels transporting water and minerals upwards via transpiration suction pull, and phloem translocating food.',
    keyConcepts: [
      { title: 'Arteries vs Veins', detail: 'Arteries carry oxygen-rich blood under high pressure from heart to body (except pulmonary artery); Veins carry CO₂-rich blood toward heart and have valves preventing backflow.' },
      { title: 'Transpiration Suction Pull', detail: 'Evaporation of water through stomata creates a continuous negative suction pressure in xylem vessels, pulling water columns up giant 100-meter forest trees.' }
    ],
    readingSections: [
      {
        heading: '1. William Harvey and the Discovery of Blood Circulation (1628)',
        body: 'English physician William Harvey overturned ancient medical dogmas by proving mathematically that the heart acts as a muscular pump circulating a fixed volume of blood continuously through a closed loop of vessels.',
        tip: 'Average resting pulse rate of a healthy teenager is 72 to 80 beats per minute.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 8,
    title: 'Reproduction in Plants (Pollination, Fertilisation & Seeds)',
    tagline: 'Vegetative propagation (stem cuttings, tubers, Bryophyllum leaves), flower anatomy, self/cross pollination, and seed dispersal',
    summary: 'Discover how plants perpetuate across generations! Explore asexual reproduction: vegetative propagation via stem cuttings (rose), eye buds on potato tubers, leaf margins of Bryophyllum, budding in yeast, and fragmentation in Spirogyra. Dissect a flower: male stamen (anther with pollen grains) and female pistil/carpel (stigma, style, ovary with ovules). Trace pollination by wind, insects, and water, fertilization forming a zygote, and seed dispersal mechanisms.',
    keyConcepts: [
      { title: 'Pollination vs Fertilisation', detail: 'Pollination is the transfer of pollen grains from anther to stigma; Fertilisation is the subsequent fusion of the male gamete with the female egg cell inside the ovule.' },
      { title: 'Seed Dispersal Vectors', detail: 'Winged seeds (drumstick, maple) dispersed by wind; hooked seeds (Xanthium) clinging to animal fur; fruits eaten by birds; exploding pods (balsam, castor).' }
    ],
    readingSections: [
      {
        heading: '1. Why Cross-Pollination Enhances Plant Fitness',
        body: 'Transferring pollen between different parent plants creates genetic variations that make offspring more resilient against fungal diseases, drought, and insect pests.',
        tip: 'After fertilization, the flower ovary swells and ripens into a fruit, while ovules develop into protective seeds.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 9,
    title: 'Motion and Time (Speed, Simple Pendulums & Graphs)',
    tagline: 'Uniform vs non-uniform motion, Speed = Distance/Time, Galileo’s pendulum time period, and distance-time graphs',
    summary: 'Quantify motion through space and time! Define speed as distance covered per unit time: Speed = Total Distance / Total Time (SI unit: m/s). Differentiate uniform motion (constant speed) from non-uniform motion. Study Galileo Galilei’s discovery of the Simple Pendulum: time period T depends only on pendulum length and is independent of mass or amplitude. Read odometers and speedometers in vehicles and plot distance-time graphs.',
    keyConcepts: [
      { title: 'Simple Pendulum Time Period', detail: 'The time taken by a pendulum to complete one full back-and-forth oscillation is called its time period T, discovered by Galileo to remain constant (isochronism).' },
      { title: 'Distance-Time Graph Interpretation', detail: 'A straight inclined line indicates uniform motion; a curved line indicates non-uniform accelerated motion; a horizontal line indicates a stationary object at rest.' }
    ],
    readingSections: [
      {
        heading: '1. Ancient Clocks: Sundials, Sand Clocks, and Water Clocks',
        body: 'Before pendulum escapements were invented, ancient civilizations tracked periodic natural rhythms using shadow sundials (like Jantar Mantar in Jaipur), dripping water clocks (clepsydras), and flowing sandglasses.',
        tip: 'Vehicle speedometers display instantaneous speed in km/h, while odometers record total cumulative distance traveled in kilometers.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 10,
    title: 'Electric Current and Its Effects (Heating & Electromagnets)',
    tagline: 'Circuit diagram symbols, heating effect of current, electric fuse, electromagnet coils, and electric bells',
    summary: 'Investigate electro-thermal and electro-magnetic phenomena! Draw standardized circuit symbols for electric cells, battery combinations, open/closed switches, and light bulbs. Discover the Heating Effect of Electric Current: nichrome heating elements glowing in electric irons and toasters. Explain how safety fuses prevent electrical fires by melting when current exceeds safety limits. Build an electromagnet with insulated wire coiled around an iron nail and explain how electric bells chime.',
    keyConcepts: [
      { title: 'Heating Effect of Current', detail: 'When electric current flows through a high-resistance wire (like nichrome), electrical energy is converted directly into thermal heat energy.' },
      { title: 'Safety Electric Fuses and MCBs', detail: 'Fuses contain low-melting alloy wires that melt and break the circuit during power surges; modern houses use Miniature Circuit Breakers (MCBs) that automatically trip off.' }
    ],
    readingSections: [
      {
        heading: '1. How an Electric Bell Works',
        body: 'When the bell switch is pressed, current energizes an electromagnet, pulling a soft iron armature with a hammer to strike the metal gong. This movement breaks electrical contact, demagnetizing the coil so a spring pulls the hammer back, repeating the cycle in a continuous rapid ringing!',
        tip: 'Electromagnets are used in junkyard scrap cranes to lift thousands of kilograms of iron scrap and release them instantly by cutting the power switch.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 11,
    title: 'Light (Mirrors, Lenses & Newton’s Colour Disc)',
    tagline: 'Plane mirror lateral inversion, concave/convex spherical mirrors, magnifying lenses, and seven colors of sunlight',
    summary: 'Master the behavior of light! Demonstrate that light travels in straight lines (rectilinear propagation). Analyze reflection in plane mirrors: virtual, erect, same size, and laterally inverted (left appears right). Investigate spherical mirrors: Concave mirrors (converging, forming real images or magnified shaving images) and Convex mirrors (diverging, wide rear view in vehicles). Examine Convex lenses (converging magnifying glasses) and Concave lenses. Recreate Isaac Newton’s prism experiment splitting white sunlight into VIBGYOR colors.',
    keyConcepts: [
      { title: 'Lateral Inversion', detail: 'In a plane mirror image, the left side of the object appears on the right side of the image, and vice-versa (which is why AMBULANCE is written inverted on vehicles).' },
      { title: 'Newton’s Colour Disc (1666)', detail: 'A disc painted with the seven spectrum colors (Red, Orange, Yellow, Green, Blue, Indigo, Violet) appears white when spun rapidly, demonstrating that white sunlight is a combination of seven colors.' }
    ],
    readingSections: [
      {
        heading: '1. Concave vs Convex Spherical Mirrors',
        body: 'Dentists use concave mirrors to see magnified images of teeth; car headlights use concave reflectors to project parallel beams. Vehicle side mirrors use convex mirrors to give drivers a wide view of trailing traffic.',
        tip: 'Real images can be projected onto a screen; virtual images can only be viewed in mirrors or lenses.'
      }
    ]
  }),
  buildChapter(7, 'c7-sci', 'Science', {
    chapterNumber: 12,
    title: 'Forests: Our Lifeline & Wastewater Story',
    tagline: 'Canopy and understorey, decomposers, food webs, sewage treatment plant (WWTP), and sustainable water habits',
    summary: 'Understand ecological interconnectedness and urban sanitation! Explore the multi-tiered forest ecosystem: emergent trees, continuous canopy, understorey shrubs, and forest floor. Appreciate decomposers (bacteria and fungi) recycling dead organic matter into fertile humus. Understand forests as "green lungs" balancing atmospheric oxygen and carbon dioxide, and as giant sponges recharging aquifers. Trace sewage treatment in Wastewater Treatment Plants (WWTP): screens, grit chambers, settling clarifiers, aeration tanks, and sludge biogas.',
    keyConcepts: [
      { title: 'Forest Stratification Layers', detail: 'The uppermost branches form the roof-like Canopy; underneath sit smaller trees forming the Understorey, followed by shrubs, herbs, and the decomposing forest floor.' },
      { title: 'Wastewater Treatment (WWTP)', detail: 'Physical screening removes large debris; settling tanks clarify primary sludge; aeration tanks pump air to cultivate aerobic bacteria that digest organic waste.' }
    ],
    readingSections: [
      {
        heading: '1. Why Nothing Goes to Waste in a Forest',
        body: 'Dead leaves, branches, animal carcasses, and droppings are consumed by vultures, insects, and decomposing microorganisms, converting organic matter into dark, rich humus that nourishes new seedlings in an unbroken circular nutrient loop.',
        tip: 'Never pour cooking oil or paints down domestic drains because they harden and choke sewage pipes.'
      }
    ]
  })
];

const sstChapters = [
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 1,
    title: 'Tracing Changes Through a Thousand Years',
    tagline: 'Al-Idrisi’s 1154 map, cartographic evolution, historical semantic shifts of "Hindustan", and scribal manuscripts',
    summary: 'Analyze historical transitions from 700 to 1750 CE! Compare 12th-century Arab cartographer Al-Idrisi’s upside-down map of the subcontinent with 18th-century French cartographer Guillaume de L’Isle’s accurate coastal navigation maps. Trace how political terminology evolved: "Hindustan" meant Punjab and Haryana lands to Minhaj-i-Siraj in the 13th century, geography and wildlife to Babur in the 16th century, and modern India today. Examine challenges posed by handwritten scribal manuscripts and archival copying variations.',
    keyConcepts: [
      { title: 'Evolution of Historical Cartography', detail: 'Maps produced in different centuries reflect dramatic advances in maritime surveying, navigational science, and geographical knowledge.' },
      { title: 'Semantic Shifts in Historical Vocabulary', detail: 'Words like "foreigner" (pardesi/ajnabi) historically meant an outsider from another village, not someone from another nation.' }
    ],
    readingSections: [
      {
        heading: '1. The Absence of Printing and Scribal Variations',
        body: 'Because printing presses did not exist in medieval India, manuscripts were hand-copied by scribes. Scribes frequently introduced small alterations in words or sentences; over centuries of copying, manuscripts of the same text grew substantially different from one another!',
        tip: 'Historians must compare multiple manuscript versions to reconstruct what the original author actually wrote.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 2,
    title: 'New Kings and Kingdoms (7th to 12th Centuries)',
    tagline: 'Emergence of Samantas, Gurjara-Pratiharas, Rashtrakutas, Tripartite struggle for Kanauj, and Chola bronze sculptures',
    summary: 'Explore regional monarchies after the fall of Harsha! Trace powerful subordinate landlords (Samantas) declaring independence: Dantidurga performing the Hiranya-garbha ritual to establish the Rashtrakuta dynasty. Analyze the two-century Tripartite Struggle between Gurjara-Pratiharas, Rashtrakutas, and Palas over fertile Kanauj in the Ganga valley. Examine the majestic Chola Empire under Rajaraja I and Rajendra I: naval expeditions to Southeast Asia, Brihadisvara temple, and exquisite lost-wax bronze sculptures of Nataraja.',
    keyConcepts: [
      { title: 'The Tripartite Struggle for Kanauj', detail: 'Centuries-long military conflict between Palas, Gurjara-Pratiharas, and Rashtrakutas to control the prestige and agricultural wealth of Kanauj.' },
      { title: 'Chola Village Assemblies (Ur and Sabha)', detail: 'Chola inscriptions at Uttaramerur describe democratic village administration: committee members were chosen by drawing lots from pots (Kudavolai system).' }
    ],
    readingSections: [
      {
        heading: '1. The Lost-Wax Bronze Craft of the Cholas',
        body: 'Chola craftsmen sculpted bronze masterpieces like Shiva Nataraja using the cire perdue (lost-wax) technique: a wax model was coated with clay, heated to drain the wax, and filled with molten bronze to achieve breathtaking aesthetic detail.',
        tip: 'Rajaraja Chola built the magnificent Brihadisvara Temple at Thanjavur, whose stone vimana weighs over 80 tons.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 3,
    title: 'The Delhi Sultans (1206-1526 CE)',
    tagline: 'Ghiyasuddin Balban, Raziya Sultan, Alauddin Khalji’s market reforms, and Muhammad bin Tughluq’s experiments',
    summary: 'Investigate the transformation of Delhi into an imperial capital! Trace five successive Sultanate dynasties: Slave (Mamluk), Khalji, Tughluq, Sayyid, and Lodi. Examine chronicler Minhaj-i-Siraj’s views on Raziya Sultan (the only female monarch of Delhi). Analyze Alauddin Khalji’s administrative militarism: fixing market prices of food grains, branding horses (dagh), and building Siri Fort against Mongol invasions. Contrast with Muhammad bin Tughluq’s ambitious experiments (token copper currency and transferring capital to Daulatabad).',
    keyConcepts: [
      { title: 'Garrison Towns to Continental Empire', detail: 'Early Sultans controlled only fortified garrison towns (iqtas); Khalji and Tughluq armies marched south into the Deccan, conquering vast territories.' },
      { title: 'The Iqtadari Administrative System', detail: 'Military commanders were appointed governors of territories called iqtas; they collected land revenue to maintain troops and preserve provincial law and order.' }
    ],
    readingSections: [
      {
        heading: '1. Raziya Sultan’s Uncompromising Reign (1236-1240)',
        body: 'Daughter of Sultan Iltutmish, Raziya was more capable and qualified than all her brothers. She rode war horses into battle without a veil, but aristocratic Turkish nobles resented being ruled by a woman and deposed her after four years.',
        tip: 'Alauddin Khalji’s strict market price controls in Delhi kept grain affordable and sustained a massive standing army against Mongol hordes.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 4,
    title: 'The Mughal Empire (Babur to Aurangzeb)',
    tagline: 'Babur’s cannons at Panipat 1526, Akbar’s Sulh-i-kul, Mansabdari system, Todar Mal’s Zabt revenue, and Shah Jahan’s Taj Mahal',
    summary: 'Study the rise of the magnificent Mughal Empire! Trace Babur’s victory at the First Battle of Panipat (1526) using artillery. Examine Akbar the Great’s transformative rule: administrative Mansabdari military ranks, Raja Todar Mal’s Zabt land revenue assessment, and religious debates at Ibadat Khana leading to the universal peace philosophy Sulh-i-kul. Review Jahangir, Shah Jahan’s architectural golden age (Taj Mahal, Red Fort), and Aurangzeb’s prolonged Deccan military campaigns.',
    keyConcepts: [
      { title: 'The Mansabdari System', detail: 'Imperial bureaucratic ranking system determining military commander status, salary, and quota of cavalry soldiers (sawars) to maintain.' },
      { title: 'Akbar’s Philosophy of Sulh-i-Kul', detail: 'Universal religious tolerance and ethical harmony: focusing on honesty, justice, and peace rather than sectarian dogma.' }
    ],
    readingSections: [
      {
        heading: '1. Ain-i Akbari by Abu’l Fazl',
        body: 'Akbar’s court historian Abu’l Fazl recorded the three-volume Akbarnama. The final volume, Ain-i Akbari, provides extraordinarily detailed statistical records of imperial administration, crop yields, prices, wages, and revenue across India.',
        tip: 'Mughals were descendants of Genghis Khan on their mother’s side and Timur on their father’s side, but preferred Timurid ancestry.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 5,
    title: 'Our Environment & Inside Our Earth',
    tagline: 'Biotic vs abiotic components, crust, mantle, core, igneous, sedimentary, metamorphic rocks, and rock cycle',
    summary: 'Journey into geological and environmental science! Define the environment as everything that surrounds living organisms, composed of natural components (Lithosphere, Hydrosphere, Atmosphere, Biosphere) and human-made components. Descend into Earth’s interior: continental Crust (sial: silica + alumina, 35 km), ocean floor (sima: silica + magnesium, 5 km), Mantle (2900 km deep), and inner Core (nife: nickel + iron). Classify rocks (Igneous, Sedimentary, Metamorphic) and trace the continuous Rock Cycle.',
    keyConcepts: [
      { title: 'Three Concentric Layers of the Earth', detail: 'Crust: thinnest outermost solid rocky layer; Mantle: semi-molten layer below crust; Core: extremely hot, high-pressure central sphere composed of nickel and iron (Nife).' },
      { title: 'The Continuous Rock Cycle', detail: 'Molten magma cools into igneous rock; weathering and erosion deposit sediments forming sedimentary rock; heat and pressure metamorphose them; subduction melts them back into magma.' }
    ],
    readingSections: [
      {
        heading: '1. Intrusive vs Extrusive Igneous Rocks',
        body: 'Extrusive rocks form when molten lava pours onto Earth’s surface and cools rapidly into fine-grained basalt (forming the Deccan Trap). Intrusive rocks cool slowly deep inside the crust, forming coarse-grained granite.',
        tip: 'The oceanic crust is much thinner (5 km) and denser than the continental crust (35 km).'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 6,
    title: 'Our Changing Earth (Plate Tectonics, Earthquakes & Rivers)',
    tagline: 'Endogenic vs exogenic forces, seismographs, Richter scale, waterfall erosion, meanders, oxbow lakes, and sand dunes',
    summary: 'Examine geological forces reshaping planetary surfaces! Contrast slow endogenic internal forces (plate tectonics creating earthquakes and volcanoes) with external exogenic forces (weathering and erosion by rivers, wind, glaciers, and waves). Map earthquake focus and epicenter; measure tremors with seismographs and Richter scales. Follow river geomorphology: waterfalls, meander loops, oxbow lakes, floodplains, and delta formations. Discover mushroom rocks and sand dunes in deserts.',
    keyConcepts: [
      { title: 'Focus vs Epicenter of an Earthquake', detail: 'The Focus is the exact point underground where seismic fault movement originates; the Epicenter is the point on Earth’s surface directly above the focus, where maximum damage occurs.' },
      { title: 'Oxbow Lake Formation', detail: 'Continuous erosion and deposition along river meander loops narrows the neck of land until high floods cut through, leaving behind a curved cutoff lake.' }
    ],
    readingSections: [
      {
        heading: '1. The Devastating Bhuj Earthquake (26 January 2001)',
        body: 'On Republic Day 2001, a magnitude 7.7 earthquake struck Bhuj in Gujarat, causing widespread devastation and leading to comprehensive earthquake-resistant building codes and national disaster response forces (NDRF).',
        tip: 'Mushroom rocks in deserts are formed because desert winds erode the lower part of rock formations faster than the harder upper top.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 7,
    title: 'Air & Atmosphere (Composition & Weather Systems)',
    tagline: 'Atmospheric layers (Troposphere, Stratosphere, Mesosphere, Thermosphere), greenhouse effect, and planetary winds',
    summary: 'Analyze Earth’s gaseous atmospheric envelope! Examine composition: 78% Nitrogen, 21% Oxygen, 0.03% Carbon Dioxide, and noble gases. Explain the greenhouse effect and global warming. Ascend five atmospheric strata: Troposphere (where all weather occurs), Stratosphere (containing protective ozone layer and jet aircraft routes), Mesosphere (burning meteorites), Thermosphere (ionosphere reflecting radio waves), and Exosphere. Differentiate weather from climate and understand atmospheric pressure and wind belts.',
    keyConcepts: [
      { title: 'Five Layers of the Atmosphere', detail: '1) Troposphere (0-13 km, weather); 2) Stratosphere (ozone layer, no clouds); 3) Mesosphere (meteorites burn); 4) Thermosphere (radio transmission); 5) Exosphere (light gases like helium).' },
      { title: 'Atmospheric Pressure and Wind', detail: 'Air moves from areas of high atmospheric pressure to low atmospheric pressure, creating prevailing winds (Trade Winds, Westerlies, Polar Easterlies).' }
    ],
    readingSections: [
      {
        heading: '1. The Life-Sustaining Greenhouse Effect',
        body: 'Carbon dioxide traps terrestrial infrared heat re-radiated from Earth’s surface, keeping the planet warm enough to sustain liquid water and life. However, excessive fossil fuel burning thickens this blanket, causing dangerous global warming.',
        tip: 'Air pressure is highest at sea level and decreases rapidly with increasing altitude, which is why mountaineers carry oxygen cylinders.'
      }
    ]
  }),
  buildChapter(7, 'c7-sst', 'Social Science', {
    chapterNumber: 8,
    title: 'On Equality & How the State Government Works',
    tagline: 'Universal Adult Franchise, Midday Meal Scheme, Dalit rights (Omprakash Valmiki), MLAs, and Legislative Assembly',
    summary: 'Examine constitutional equality and state governance! Understand Universal Adult Franchise: every adult citizen gets one vote with equal value regardless of caste, gender, or wealth. Read Omprakash Valmiki’s autobiography "Joothan" detailing caste discrimination, and evaluate state interventions like the landmark Midday Meal Scheme boosting school enrollment. Deconstruct state governance: Member of Legislative Assembly (MLA) constituencies, majority government formation, the role of Opposition, and Press Conferences.',
    keyConcepts: [
      { title: 'Article 15 of the Constitution', detail: 'Prohibits discrimination by the State against any citizen on grounds only of religion, race, caste, sex, or place of birth.' },
      { title: 'Role of MLAs and Legislative Assembly', detail: 'MLAs are directly elected by voters in each assembly constituency; the political party winning more than half the seats forms the government, choosing the Chief Minister and Cabinet.' }
    ],
    readingSections: [
      {
        heading: '1. The Revolutionary Impact of the Midday Meal Scheme',
        body: 'First introduced in Tamil Nadu in 2001, providing cooked lunches to primary school children improved pupil attendance, reduced caste prejudices as children of all castes ate together, and improved child nutrition across India.',
        tip: 'A bill passed by the State Legislative Assembly becomes law only after receiving the formal assent of the Governor.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 1,
    title: 'Three Questions (Leo Tolstoy) & The Squirrel (Mildew Bowers)',
    tagline: 'The king’s three dilemmas, hermit in the woods, wounded enemy, and the philosophy of the present moment',
    summary: 'Reflect upon timeless philosophical wisdom in Leo Tolstoy’s classic tale! A king seeks the answers to three fundamental questions: What is the right time to begin something? Who are the most important people to listen to? What is the most important thing to do? A humble hermit shows him through action that the most important time is NOW, the most important person is the one you are with, and the most important deed is doing good for that person.',
    keyConcepts: [
      { title: 'Tolstoy’s Three Life Truths', detail: 'The most vital moment is the present, because it is the only moment in which we possess power; the most essential person is the one present before us; the greatest goal is doing good.' },
      { title: 'Forgiveness Over Vengeance', detail: 'The bearded man who came to assassinate the king is saved by the king’s medical care, transforming a sworn blood enemy into a loyal lifelong ally.' }
    ],
    readingSections: [
      {
        heading: '1. The Hermit’s Final Revelation',
        body: '"Remember then: there is only one time that is important—NOW! It is the most important time because it is the only time we have any power. The most necessary person is the one you are with, for no man knows whether he will ever have dealings with anyone else; and the most important affair is to do him good."',
        tip: 'Tolstoy shows that true wisdom is revealed through compassionate action rather than royal debates.'
      }
    ]
  }),
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 2,
    title: 'A Gift of Chappals (Vasantha Surya) & The Rebel (D.J. Enright)',
    tagline: 'Mridu in Madras, secret kitten Mahendran, beggar’s blistered feet, music master’s slippers, and Enright’s non-conformist',
    summary: 'Delight in youthful compassion and playful wit! In Chennai, young Mridu visits her cousins and discovers a secret kitten hidden in a backyard bitter-gourd patch. When a barefoot beggar with painful heat blisters on his soles collapses outside their gate, the children spontaneously gift him the music master’s dusty old slippers! Accompanied by D.J. Enright’s satirical poem "The Rebel" celebrating harmless eccentricity and individualistic non-conformity.',
    keyConcepts: [
      { title: 'Innocent Moral Courage', detail: 'The children instinctively understand that a suffering fellow human being’s bleeding feet are far more important than formal adult ownership etiquette.' },
      { title: 'Enright’s Satire on Rebellion', detail: 'The rebel does not overthrow governments; he simply grows long hair when everyone’s is short, and stays quiet when everyone talks, keeping society delightfully diverse.' }
    ],
    readingSections: [
      {
        heading: '1. The Children’s Spontaneous Charity',
        body: '"He has no money to buy chappals, look at the pink peeling blisters on his soles!" cried Mridu. Ravi dragged out the music master’s slippers and handed them over: "Wear these and don’t come back!" The children felt the joy of genuine kindness.',
        tip: 'Vasantha Surya captures the authentic sensory warmth and humor of South Indian family life.'
      }
    ]
  }),
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 3,
    title: 'Gopal and the Hilsa Fish & The Shed (Frank Flynn)',
    tagline: 'Comic strip challenge, half-shaven face, smeared with ash, courtier’s psychological triumph, and conquering fear',
    summary: 'Enjoy graphic wit and psychological brilliance! When the king grows exhausted by everyone obsessing endlessly over the seasonal Hilsa fish, courtier Gopal wagers he can buy a giant Hilsa and bring it to the royal palace without a single person asking about the fish. By shaving half his beard, smearing his face with fireplace ash, and wearing ragged clothes, everyone is so bewildered by his bizarre appearance that not one person notices the prize fish in his hands!',
    keyConcepts: [
      { title: 'Psychological Misdirection', detail: 'Gopal uses human curiosity and cognitive distraction: people were so captivated by his outlandish appearance that the fish became completely invisible.' },
      { title: 'Flynn’s Poem on Rational Courage in "The Shed"', detail: 'A spooky old shed at the bottom of the garden with spiderwebs and rumored ghosts; the narrator resolves to face fear and look inside.' }
    ],
    readingSections: [
      {
        heading: '1. The King’s Roaring Laughter',
        body: '"Congratulations, Gopal!" roared the king with delight. "You have achieved the impossible once again!" Gopal proved that clever wits can accomplish what raw arguments cannot.',
        tip: 'Humor and intelligence are the sharpest tools for defusing tension and proving a point.'
      }
    ]
  }),
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 4,
    title: 'The Ashes That Made Trees Bloom (William Elliot Griffis) & Chivvy',
    tagline: 'Japanese folktale, loyal dog Muko, miraculous blooming cherry blossoms, wicked neighbors, and adult nagging',
    summary: 'Immerse yourself in classic Japanese folklore! An affectionate, childless elderly couple care for their loyal dog Muko. Led by the dog to a stash of buried gold coins, the kind couple share their fortune with poor neighbors. After jealous neighbors cruelly kill Muko, the dog’s spirit appears in dreams, instructing his master to sprinkle his mortar’s ashes onto dead winter trees, causing cherry trees to burst into dazzling spring blossoms before the Daimyo lord!',
    keyConcepts: [
      { title: 'The Karmic Justice of Folklore', detail: 'Unconditional kindness and generosity bring miraculous blessings, while greedy malice leads inevitably to humiliation and destruction.' },
      { title: 'Michael Rosen’s "Chivvy"', detail: 'Humorously catalogues endless patronizing instructions adults barrage children with ("Speak up", "Don’t stare", "Take your hands out of your pockets").' }
    ],
    readingSections: [
      {
        heading: '1. The Miraculous Blooming Cherry Tree',
        body: 'The kind old man climbed into the withered cherry tree. As the Daimyo’s royal palanquin drew near, he scattered a pinch of ashes over the branches. In an instant, pink petals burst open in fragrant clouds of blossoms, drawing gasps of wonder from the prince!',
        tip: 'Folktales across cultures reinforce timeless virtues of gentleness, gratitude, and moral integrity.'
      }
    ]
  }),
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 5,
    title: 'Quality (John Galsworthy) & Trees (Shirley Bauer)',
    tagline: 'The Gessler brothers, handmade bespoke boots, perfectionist artisan pride, and tragic commercial mass-production',
    summary: 'Weep for the lost artisanal soul in John Galsworthy’s heartbreaking short story! German bootmaker Mr. Gessler crafts handmade leather boots of supreme durability, comfort, and artistic perfection in a modest London shop. As mechanized industrial boot factories and slick advertising lure away customers, the Gessler brothers refuse to compromise leather quality or craftsmanship, starving themselves to death out of pure artistic pride and devotion.',
    keyConcepts: [
      { title: 'The Tragedy of True Artistry', detail: 'Mr. Gessler viewed bootmaking not as a profit business, but as a sacred art: "Id is an Ardt!" He refused to cut corners even when facing starvation.' },
      { title: 'Industrialization vs Craftsmanship', detail: 'Mass-produced factory boots sell through slick marketing rather than quality, slowly eradicating patient human craftsmanship from the world.' }
    ],
    readingSections: [
      {
        heading: '1. The Final Pair of Boots',
        body: '"He made good boots," the English clerk admitted after Mr. Gessler died of slow starvation. "He wouldn’t have a soul touch his boots except himself. When he got an order, it took him such a time. People won’t wait. He lost everybody. But look at the leather! You never got a better boot in London."',
        tip: 'Galsworthy honors the dignity of skilled manual work and the integrity of refusing compromise.'
      }
    ]
  }),
  buildChapter(7, 'c7-eng', 'English', {
    chapterNumber: 6,
    title: 'Expert Detectives (Sharada Dwivedi) & Mystery of the Talking Fan (Maude Rubin)',
    tagline: 'Maya and Seven (Nishad), mysterious tenant Mr. Nath, criminal scars, and noisy electric ceiling fan',
    summary: 'Embark on child detective adventures! Ten-year-old Maya and her seven-year-old brother Nishad (Seven) turn amateur sleuths to investigate Mr. Nath, a reclusive, thin tenant in their mother’s clinic building. Convinced he is a dangerous fugitive hiding stolen loot, Maya compiles an elaborate police dossier of suspects. Compassionate Nishad disagrees, visiting Mr. Nath, offering him a chocolate bar, and insisting he is simply a lonely, sick man in need of a friend.',
    keyConcepts: [
      { title: 'Suspicion vs Empathy', detail: 'Maya’s hyper-imaginative detective paranoia assumes the worst about outward eccentricities, while Nishad’s gentle empathy looks deeper to see human loneliness.' },
      { title: 'The Whispering Ceiling Fan', detail: 'Maude Rubin’s poem playfully personifies a squeaking electric fan as carrying on an electrical chatter, silenced when an oiling drop lubricates its motor.' }
    ],
    readingSections: [
      {
        heading: '1. Nishad’s Defiant Kindness',
        body: '"I don’t care if he doesn’t have friends," Nishad declared stomping his foot. "He’s poor and starving, and I’m going to find out why he is so thin and why he has no visitors. I like him, and I’m going to try and be his friend!"',
        tip: 'Judging people by their scars or solitary habits often leads to unfair prejudice.'
      }
    ]
  })
];

export const class7Curriculum: Subject[] = [
  {
    id: 'c7-math',
    name: 'Mathematics',
    code: 'MATH-701',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 12-chapter Class 7 syllabus: Integers, Fractions & Decimals, Data Handling, Simple Equations, Lines & Angles, Triangles, Comparing Quantities, Rational Numbers, Perimeter & Area, Algebraic Expressions, Exponents, and Solid Shapes.',
    chapters: mathChapters
  },
  {
    id: 'c7-sci',
    name: 'Science (Physics, Chemistry, Biology)',
    code: 'SCI-701',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 12-chapter syllabus: Nutrition in Plants & Animals, Heat, Acids & Bases, Physical/Chemical Changes, Respiration, Transportation, Plant Reproduction, Motion & Time, Electric Current, Light, and Forests & Wastewater.',
    chapters: scienceChapters
  },
  {
    id: 'c7-sst',
    name: 'Social Science (History, Geography, Civics)',
    code: 'SST-701',
    iconName: 'Globe',
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-500 to-indigo-600'
    },
    description: 'Complete Class 7 syllabus: Tracing Changes, New Kings & Kingdoms, Delhi Sultans, Mughal Empire, Environment & Earth’s Interior, Changing Earth, Atmosphere, and Equality & State Governance.',
    chapters: sstChapters
  },
  {
    id: 'c7-eng',
    name: 'English Language & Literature (Honeycomb & An Alien Hand)',
    code: 'ENG-701',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 7 literature anthology: Three Questions, A Gift of Chappals, Gopal and the Hilsa Fish, The Ashes That Made Trees Bloom, Quality, and Expert Detectives.',
    chapters: englishChapters
  }
];
