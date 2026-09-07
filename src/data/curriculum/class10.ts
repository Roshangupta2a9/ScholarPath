import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Real Numbers & Fundamental Theorem of Arithmetic',
    tagline: 'Euclid’s lemma, unique prime factorisation, proving √p irrational, and decimal termination rules',
    summary: 'Examine advanced number theory! State the Fundamental Theorem of Arithmetic (every composite number can be uniquely factored into primes). Prove the irrationality of √2, √3, and √5 by contradiction. Analyze conditions for terminating decimal expansions in rational numbers p/q (denominator q must be of form 2ⁿ · 5ᵐ).',
    keyConcepts: [
      { title: 'Proof by Contradiction for √2', detail: 'Assume √2 = a/b (coprime integers). Then 2b² = a², implying 2 divides a and consequently 2 divides b, contradicting coprimality!' },
      { title: 'Decimal Termination Condition', detail: 'A rational number p/q has a terminating decimal expansion if and only if the prime factorization of q is of the form 2ⁿ · 5ᵐ.' }
    ],
    readingSections: [
      {
        heading: '1. The Fundamental Theorem of Arithmetic',
        body: 'First articulated by Carl Friedrich Gauss in Disquisitiones Arithmeticae, this theorem guarantees that prime numbers are the unique multiplicative atomic building blocks of all positive integers.',
        tip: 'HCF(a, b) × LCM(a, b) = a × b holds strictly for two numbers, but NOT for three numbers!'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Polynomials (Zeroes & Coefficients Relationship)',
    tagline: 'Geometric meaning of zeroes on x-intercepts, α+β = -b/a, αβ = c/a, and cubic sum relations',
    summary: 'Analyze quadratic polynomials P(x) = ax² + bx + c (a ≠ 0). Visualize zeroes as intersection points of the parabola with the X-axis. Establish the algebraic relationships between zeroes and coefficients: Sum of zeroes α + β = -b/a; Product of zeroes αβ = c/a.',
    keyConcepts: [
      { title: 'Relations for Quadratic Zeroes', detail: 'For ax² + bx + c: α + β = -b/a and αβ = c/a.' },
      { title: 'Parabola Geometry', detail: 'The number of real zeroes equals the exact number of times the parabola intersects the horizontal X-axis.' }
    ],
    readingSections: [
      {
        heading: '1. Parabolic Zeroes and Factorization',
        body: 'A quadratic polynomial with zeroes α and β can always be reconstructed as k[x² - (α + β)x + αβ]. When graphed, the vertex and axis of symmetry x = -b/(2a) pinpoint the curve’s extremum.',
        tip: 'If discriminant D < 0, the parabola does not touch the X-axis and has no real zeroes.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Pair of Linear Equations in Two Variables',
    tagline: 'Graphical consistency, substitution, elimination, and cross-multiplication',
    summary: 'Master systems of two linear equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0. Compare ratio coefficients (a₁/a₂, b₁/b₂, c₁/c₂) to classify systems as intersecting (unique solution), parallel (no solution/inconsistent), or coincident (infinitely many solutions). Solve algebraically via substitution and elimination.',
    keyConcepts: [
      { title: 'Consistency Criteria', detail: 'Unique solution if a₁/a₂ ≠ b₁/b₂; Inconsistent (no solution) if a₁/a₂ = b₁/b₂ ≠ c₁/c₂; Dependent (infinite) if a₁/a₂ = b₁/b₂ = c₁/c₂.' },
      { title: 'Elimination Method', detail: 'Multiply equations by constants so that the coefficients of one variable match, then add or subtract to eliminate that variable.' }
    ],
    readingSections: [
      {
        heading: '1. Geometric vs Algebraic Duality',
        body: 'Every linear equation in two variables represents a straight line on the Cartesian plane. Solving a pair of linear equations is equivalent to determining the geometric intersection point of the two lines.',
        tip: 'Word problems involving speeds, ages, and fractions simplify drastically when translated systematically into standard linear forms.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Quadratic Equations (The Quadratic Formula & Discriminant)',
    tagline: 'Standard form ax²+bx+c=0, completing the square, Sridharacharya formula, and nature of roots',
    summary: 'Solve quadratic equations ax² + bx + c = 0! Derive the quadratic formula x = [-b ± √(b² - 4ac)] / 2a. Define the Discriminant D = b² - 4ac and determine the nature of roots: D > 0 (two distinct real roots), D = 0 (two equal real roots), D < 0 (no real roots). Apply to speed-distance and work-rate word problems.',
    keyConcepts: [
      { title: 'The Quadratic Formula', detail: 'x = [-b ± √(b² - 4ac)] / 2a (discovered historically by Indian mathematician Sridharacharya).' },
      { title: 'Nature of Roots', detail: 'If D > 0: real & distinct; If D = 0: real & equal (-b/2a); If D < 0: no real roots.' }
    ],
    readingSections: [
      {
        heading: '1. Upstream-Downstream Motion Modeling',
        body: 'In river boat problems, upstream speed is (v - s) and downstream speed is (v + s). Translating travel times into a rational algebraic equation yields a solvable quadratic in stream speed s.',
        tip: 'Discard extraneous negative roots when calculating physical quantities like distance, speed, or dimensions.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Arithmetic Progressions (nth Term & Series Sum)',
    tagline: 'Common difference d, general term a_n = a + (n-1)d, and sum of n terms S_n = n/2[2a+(n-1)d]',
    summary: 'Explore numerical sequences where the difference between consecutive terms is constant! Identify first term a and common difference d. Deduce the formula for the nth term a_n = a + (n - 1)d and derive Gauss’s summation formula S_n = n/2 · [2a + (n - 1)d] = n/2 · [a + l].',
    keyConcepts: [
      { title: 'nth Term of an AP', detail: 'a_n = a + (n - 1)d, where a is the initial term and d is the common difference.' },
      { title: 'Sum of n Terms', detail: 'S_n = (n/2)[2a + (n-1)d] or S_n = (n/2)[first term + last term].' }
    ],
    readingSections: [
      {
        heading: '1. The Young Gauss Summation Insight',
        body: 'At age 10, Carl Friedrich Gauss summed numbers 1 to 100 in seconds by pairing 1+100=101, 2+99=101, ..., discovering that 50 pairs of 101 equal 5050. This is the foundation of the arithmetic series formula!',
        tip: 'Three numbers in an AP can be conveniently assumed as (a - d), a, (a + d) to eliminate d when summing.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Triangles (Similarity Criteria & Thales Theorem)',
    tagline: 'Basic Proportionality Theorem, converse of BPT, AAA, SSS, and SAS similarity',
    summary: 'Study geometric similarity: figures with the same shape but not necessarily the same size. Prove the celebrated Basic Proportionality Theorem (Thales Theorem): if a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio. Master AAA, SSS, and SAS similarity criteria.',
    keyConcepts: [
      { title: 'Basic Proportionality Theorem (BPT)', detail: 'In triangle ABC, if DE ∥ BC, then AD/DB = AE/EC.' },
      { title: 'Similarity vs Congruence', detail: 'Congruent triangles are always similar with scale factor 1, but similar triangles are congruent only if corresponding sides are equal.' }
    ],
    readingSections: [
      {
        heading: '1. Proving the Thales Theorem via Area Ratios',
        body: 'By expressing the ratio of areas of triangle ADE and triangle BDE with common altitude, we obtain AD/DB. Repeating on side AC gives AE/EC. Since triangles on the same base between parallel lines have equal area, AD/DB = AE/EC!',
        tip: 'In similarity proofs, always write vertices in strictly corresponding order (e.g., △ABC ~ △DEF).'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Coordinate Geometry (Distance & Section Formulas)',
    tagline: 'Distance √[(x₂-x₁)²+(y₂-y₁)²], section formula [(mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n)], and midpoints',
    summary: 'Unify geometry and algebra on the Cartesian plane. Calculate distance between two points using the Pythagorean distance formula d = √[(x₂ - x₁)² + (y₂ - y₁)²]. Apply the Section Formula to locate a point dividing a line segment in ratio m : n internally, and find the coordinates of centroids and midpoints.',
    keyConcepts: [
      { title: 'Distance Formula', detail: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]. Distance from the origin (0, 0) is simply √(x² + y²).' },
      { title: 'Section Formula', detail: 'Point P dividing AB in ratio m₁ : m₂ has coordinates ([m₁x₂ + m₂x₁]/(m₁ + m₂), [m₁y₂ + m₂y₁]/(m₁ + m₂)).' }
    ],
    readingSections: [
      {
        heading: '1. Centroid of a Triangle',
        body: 'The medians of a triangle intersect at the centroid G, which divides each median in the ratio 2:1. Its coordinates are the arithmetic averages of the vertices: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).',
        tip: 'To prove three points are collinear, check if AB + BC = AC.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Introduction to Trigonometry & Fundamental Identities',
    tagline: 'sin, cos, tan, cot, sec, cosec, values at 0°, 30°, 45°, 60°, 90°, and sin²θ+cos²θ=1',
    summary: 'Master right-angle trigonometry! Define trigonometric ratios (sin = opp/hyp, cos = adj/hyp, tan = opp/adj). Derive exact values for standard angles (0°, 30°, 45°, 60°, 90°). Prove the fundamental Pythagorean trigonometric identities: sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ.',
    keyConcepts: [
      { title: 'Fundamental Identity', detail: 'sin²θ + cos²θ = 1 for all 0° ≤ θ ≤ 90° (derived straight from the Pythagorean theorem in a unit right triangle).' },
      { title: 'Standard Ratio Table', detail: 'sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, tan 45° = 1.' }
    ],
    readingSections: [
      {
        heading: '1. Geometric Proof of sin²θ + cos²θ = 1',
        body: 'In right triangle ABC right-angled at B: AB² + BC² = AC² (Pythagoras). Dividing the entire equation by AC²: (AB/AC)² + (BC/AC)² = (AC/AC)². Since AB/AC = cos A and BC/AC = sin A, this gives cos² A + sin² A = 1!',
        tip: 'Trigonometry translates "triangle measurement" and forms the foundation for navigation, architecture, and quantum physics.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Some Applications of Trigonometry (Heights & Distances)',
    tagline: 'Line of sight, angle of elevation, angle of depression, and clinometer surveying',
    summary: 'Apply trigonometry to practical surveying, navigation, and celestial measurements! Differentiate the angle of elevation (looking up from horizontal) from the angle of depression (looking down). Construct right-angled geometric models for lighthouses, towers, hot-air balloons, and multi-story structures.',
    keyConcepts: [
      { title: 'Angle of Elevation vs Depression', detail: 'The angle of depression of an object viewed from a height is equal to the angle of elevation of the observer viewed from the object (alternate interior angles).' },
      { title: 'Tan Ratio Dominance', detail: 'Most heights-and-distances problems involve calculating perpendicular heights from horizontal base measurements using tan θ = height / base.' }
    ],
    readingSections: [
      {
        heading: '1. Measuring the Height of Mount Everest',
        body: 'In 1852, Radhanath Sikdar used a 1,000-pound great theodolite from over 100 miles away, applying trigonometric triangulation to calculate Peak XV (Everest) as 29,002 feet—the highest mountain on Earth!',
        tip: 'Always sketch a clean right-triangle diagram with labeled horizontal lines before writing trigonometric ratios.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Circles (Tangents & Geometric Theorems)',
    tagline: 'Secant vs tangent, tangent perpendicular to radius at point of contact, and equal lengths from external point',
    summary: 'Explore circular geometry and tangents! Prove Theorem 10.1: the tangent at any point of a circle is perpendicular to the radius through the point of contact. Prove Theorem 10.2: the lengths of tangents drawn from an external point to a circle are equal (PA = PB). Apply to circumscribed polygons.',
    keyConcepts: [
      { title: 'Perpendicular Tangent Radius Theorem', detail: 'The tangent to a circle is perpendicular to the radius at the point of contact (OP ⊥ AB).' },
      { title: 'Tangents from External Point', detail: 'Lengths of the two tangents drawn from an external point to a circle are equal (proven via RHS congruence of △OPA and △OPB).' }
    ],
    readingSections: [
      {
        heading: '1. Circumscribed Quadrilateral Property',
        body: 'If a quadrilateral ABCD circumscribes a circle, the sum of opposite sides is equal: AB + CD = AD + BC. This directly follows from equating tangent segments from each vertex!',
        tip: 'A tangent touches the circle at exactly one point, while a secant intersects it at two distinct points.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Areas Related to Circles (Sectors & Segments)',
    tagline: 'Area of sector (θ/360°)×πr², length of arc (θ/360°)×2πr, and major vs minor segments',
    summary: 'Calculate perimeter and area of circular geometries. Derive sector area formula A = (θ/360°) · πr² and arc length l = (θ/360°) · 2πr. Calculate the area of a minor segment by subtracting the area of the corresponding triangle from the sector area, and find major segment areas.',
    keyConcepts: [
      { title: 'Sector Area Formula', detail: 'Area of sector of angle θ = (θ/360) × πr². Arc length = (θ/360) × 2πr.' },
      { title: 'Segment Area', detail: 'Area of minor segment = Area of sector - Area of corresponding triangle (using ½r² sin θ).' }
    ],
    readingSections: [
      {
        heading: '1. Clock Hand Swept Area Problems',
        body: 'A minute hand rotates 360° in 60 minutes (6° per minute). In 5 minutes, it sweeps through 30°. The area swept equals a sector of angle 30°: (30/360) · πr² = (1/12) · πr².',
        tip: 'Always check whether the question asks for minor segment or major segment.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Surface Areas and Volumes (Combinations of Solids)',
    tagline: 'Cylinder, cone, sphere, hemisphere combinations, and volume invariance in melting/recasting',
    summary: 'Analyze complex 3D composite shapes! Calculate total and curved surface areas and volumes of combinations of cubes, cuboids, circular cylinders, cones, and spheres/hemispheres (e.g. ice-cream cones, circus tents, medicine capsules). Master conservation of volume during melting, recasting, and liquid transfer.',
    keyConcepts: [
      { title: 'Surface Area of Combinations', detail: 'When two solids are joined, their contacting surfaces are hidden; the total surface area equals the sum of the exposed curved/flat areas only.' },
      { title: 'Volume Invariance During Recasting', detail: 'When a metallic solid (e.g. cylinder or sphere) is melted and recast into another shape, its total volume remains invariant (V₁ = V₂).' }
    ],
    readingSections: [
      {
        heading: '1. The Medicine Capsule Geometry',
        body: 'A capsule is formed by a cylinder with two hemispheres stuck to each end. Total Surface Area = CSA of cylinder + 2 × (CSA of hemisphere) = 2πrh + 2(2πr²) = 2πr(h + 2r).',
        tip: 'Always keep intermediate calculations in terms of π until the final step to simplify division.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 13,
    title: 'Statistics (Mean, Median & Mode of Grouped Data)',
    tagline: 'Direct method, assumed mean method, modal class formula, and median class formula',
    summary: 'Extract quantitative insights from grouped statistical data! Calculate Mean using the Direct Method (Σfᵢxᵢ / Σfᵢ) and Assumed Mean Method [a + (Σfᵢdᵢ / Σfᵢ)]. Determine Mode using the modal class formula [l + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h] and Median using [l + ((n/2 - cf)/f) × h]. Verify the empirical relationship: 3 Median = Mode + 2 Mean.',
    keyConcepts: [
      { title: 'Modal Class Formula', detail: 'Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h, where l is lower boundary of modal class and f₁ is modal class frequency.' },
      { title: 'Empirical Relationship', detail: '3 Median = Mode + 2 Mean. Allows estimation of any measure given the other two.' }
    ],
    readingSections: [
      {
        heading: '1. Cumulative Frequency and Median Class',
        body: 'To find the median of grouped data, compute cumulative frequencies (cf). The median class is the class whose cf is greater than or equal to n/2. The median formula then interpolates the precise midpoint value.',
        tip: 'Ensure class intervals are continuous (e.g., 0-10, 10-20); if not, subtract 0.5 from lower limit and add 0.5 to upper limit.'
      }
    ]
  }),
  buildChapter(10, 'c10-math', 'Mathematics', {
    chapterNumber: 14,
    title: 'Probability (Theoretical & Compound Events)',
    tagline: 'Classical probability P(E) = n(E)/n(S), 0 ≤ P(E) ≤ 1, complementary events P(Ē) = 1 - P(E), and deck of cards',
    summary: 'Study mathematical uncertainty and theoretical probability! Define sample space S and elementary events. Calculate P(E) = (number of favorable outcomes) / (total possible outcomes). Prove 0 ≤ P(E) ≤ 1, impossible event P(∅) = 0, sure event P(S) = 1, and complementary probability P(not E) = 1 - P(E). Solve problems on coins, dice, and 52-card decks.',
    keyConcepts: [
      { title: 'Classical Definition of Probability', detail: 'P(E) = n(E) / n(S), assuming all elementary outcomes in the sample space are equally likely.' },
      { title: 'Complementary Events', detail: 'P(E) + P(not E) = 1. Therefore, P(not E) = 1 - P(E).' }
    ],
    readingSections: [
      {
        heading: '1. Combinatorics of a Standard 52-Card Deck',
        body: 'A deck contains 4 suits of 13 cards each: Spades and Clubs (black, 26 total), Hearts and Diamonds (red, 26 total). There are 12 face cards (4 Kings, 4 Queens, 4 Jacks) and 4 Aces.',
        tip: 'Probability of any event can never be negative and can never exceed 1 (or 100%).'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 1,
    title: 'Chemical Reactions and Equations',
    tagline: 'Balancing mass conservation, combination, decomposition, displacement, and redox reactions',
    summary: 'Master chemical transformations! Balance equations to satisfy the Law of Conservation of Mass. Classify reactions: Combination (quicklime with water), Decomposition (thermal, electrolytic, photolytic), Single and Double Displacement (precipitation of barium sulphate), and Redox (oxidation-reduction electron transfer).',
    keyConcepts: [
      { title: 'Law of Conservation of Mass', detail: 'Total mass of reactants equals total mass of products; atoms are neither created nor destroyed during a chemical reaction.' },
      { title: 'Redox Reactions', detail: 'Oxidation is loss of electrons or gain of oxygen; Reduction is gain of electrons or loss of oxygen.' }
    ],
    readingSections: [
      {
        heading: '1. Photolytic Decomposition of Silver Halides',
        body: '2AgCl(s) (white) + Sunlight -> 2Ag(s) (grey) + Cl₂(g). This reaction forms the historical chemical basis of black-and-white photography.',
        tip: 'Respiration is an exothermic reaction because glucose oxidizes to release heat and ATP.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 2,
    title: 'Acids, Bases and Salts (pH Scale & Chlor-Alkali Process)',
    tagline: 'Universal indicator, logarithmic pH scale, neutralization, baking soda, washing soda, and Plaster of Paris',
    summary: 'Explore acid-base chemistry! Understand Arrhenius ions (H⁺ / H₃O⁺ for acids, OH⁻ for bases). Measure acidity and basicity using the pH scale (0 to 14). Study common salts: Sodium hydroxide (Chlor-alkali process), Bleaching powder [CaOCl₂], Baking soda [NaHCO₃], Washing soda [Na₂CO₃·10H₂O], and Plaster of Paris [CaSO₄·½H₂O].',
    keyConcepts: [
      { title: 'The pH Scale', detail: 'pH < 7 indicates acidic solution (high H⁺ concentration); pH = 7 is neutral; pH > 7 indicates alkaline basic solution.' },
      { title: 'Water of Crystallisation', detail: 'Fixed number of water molecules chemically bonded in one formula unit of salt (e.g. CuSO₄·5H₂O blue crystals).' }
    ],
    readingSections: [
      {
        heading: '1. Why Antacids Relieve Acidity',
        body: 'Hyperacidity is caused by excessive hydrochloric acid secreted by gastric stomach glands. Mild bases like magnesium hydroxide [Milk of Magnesia, Mg(OH)₂] neutralize excess acid to form harmless water and salt.',
        tip: 'Tooth decay begins when mouth pH falls below 5.5 due to bacterial acid production from sugary foods.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 3,
    title: 'Metals and Non-Metals (Metallurgy & Reactivity Series)',
    tagline: 'Ionic bonds, reactivity series, roasting vs calcination, thermite welding, and corrosion prevention',
    summary: 'Compare physical and chemical characteristics of metallic and non-metallic elements. Explain ionic electrovalent bonding via electron transfer (NaCl, MgCl₂). Master extractive metallurgy: concentration of ores, roasting of sulphide ores, calcination of carbonate ores, reduction with carbon/thermite, and electrolytic refining of copper.',
    keyConcepts: [
      { title: 'Ionic Bond Formation', detail: 'Electrostatic force of attraction between oppositely charged ions formed by complete valence electron transfer.' },
      { title: 'Roasting vs Calcination', detail: 'Roasting: heating sulphide ore in excess air; Calcination: heating carbonate/hydrated ore in limited or no air.' }
    ],
    readingSections: [
      {
        heading: '1. The Thermite Reaction in Railway Track Repair',
        body: 'Reduction of iron(III) oxide with aluminium powder [Fe₂O₃ + 2Al -> 2Fe + Al₂O₃ + Heat] is so violently exothermic that molten iron pours directly into broken rail track joints, fusing them seamlessly.',
        tip: 'Galvanisation coats steel with a thin sacrificial zinc layer to prevent rusting even when scratched.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 4,
    title: 'Carbon and Its Compounds (Catenation & Covalent Chemistry)',
    tagline: 'Tetravalency, catenation, allotropes (diamond, graphite, fullerene), homologous series, and soap micelle',
    summary: 'Discover organic chemistry! Understand why carbon forms millions of compounds due to tetravalency and catenation (self-linking). Compare allotropes: Diamond, Graphite, and Buckminsterfullerene. Study hydrocarbons (alkanes, alkenes, alkynes), functional groups (-OH, -CHO, -COOH), ethanol and ethanoic acid reactions, and the cleansing action of soaps and micelles.',
    keyConcepts: [
      { title: 'Catenation & Tetravalency', detail: 'Carbon’s unique ability to form strong covalent bonds with other carbon atoms forming long chains, branched rings, and cyclic lattices.' },
      { title: 'Micelle Formation in Soaps', detail: 'Soap molecules have hydrophilic ionic heads (dissolve in water) and hydrophobic hydrocarbon tails (trap oil/grease dirt droplets).' }
    ],
    readingSections: [
      {
        heading: '1. Why Graphite Conducts Electricity But Diamond Does Not',
        body: 'In diamond, each carbon is bonded to 4 others in a rigid 3D tetrahedral lattice with zero free electrons. In graphite, each carbon bonds to 3 others in hexagonal layers, leaving one free delocalized valence electron that conducts electric currents easily.',
        tip: 'Saturated hydrocarbons burn with a clean blue flame, while unsaturated hydrocarbons burn with a sooty yellow flame.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 5,
    title: 'Life Processes (Nutrition, Respiration, Circulation & Excretion)',
    tagline: 'Autotrophic photosynthesis, glycolysis pathways, double circulation in heart, and nephron filtration',
    summary: 'Examine the biochemical machinery that keeps humans and plants alive! Trace aerobic vs anaerobic respiration (lactic acid accumulation in muscle cramps). Study double circulation through four heart chambers (pulmonary and systemic loops). Examine kidney nephron ultrafiltration, selective reabsorption, and urine excretion.',
    keyConcepts: [
      { title: 'Double Circulation in Humans', detail: 'Blood passes through the heart twice during each complete systemic cycle, preventing oxygenated and deoxygenated blood from mixing.' },
      { title: 'Nephron Filtration & Reabsorption', detail: 'Glomerulus filters blood under pressure (Bowman’s capsule); tubular capillaries selectively reabsorb glucose, amino acids, salts, and major water before excretion.' }
    ],
    readingSections: [
      {
        heading: '1. Why Double Circulation Matters for Mammals',
        body: 'Warm-blooded animals (mammals and birds) require immense energy to maintain a constant internal body temperature (37°C in humans). The complete four-chambered cardiac separation ensures high-pressure delivery of pure oxygenated blood to tissues.',
        tip: 'Dialysis machines act as artificial kidneys, filtering nitrogenous urea waste through semipermeable membranes.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 6,
    title: 'Control and Coordination (Nervous System & Endocrine Hormones)',
    tagline: 'Neuron synapse, reflex arc, brain anatomy, plant tropisms (auxin, gibberellin), and endocrine glands',
    summary: 'Study biological communication! Trace electrical impulse transmission across neuron axons and chemical synapses. Map the reflex arc bypassing conscious brain delay. Examine human brain divisions (forebrain, midbrain, hindbrain). Explore plant hormones (auxin phototropism, cytokinin, abscisic acid) and endocrine glands (thyroid, pancreas, pituitary, adrenal).',
    keyConcepts: [
      { title: 'The Reflex Arc', detail: 'Receptor -> Sensory neuron -> Relay neuron in spinal cord -> Motor neuron -> Effector muscle. Provides instant survival responses without waiting for conscious thought.' },
      { title: 'Phototropism Mediated by Auxin', detail: 'Auxin synthesized at stem shoot tips diffuses to the shaded side, stimulating cellular elongation and bending the stem toward sunlight.' }
    ],
    readingSections: [
      {
        heading: '1. Synaptic Neurotransmission',
        body: 'At the nerve ending, electrical impulses trigger the release of neurotransmitter chemicals across the microscopic synaptic cleft, stimulating dendrites of the next neuron to fire a new electrical signal.',
        tip: 'Insulin secreted by the pancreas regulates blood glucose levels; deficiency leads to diabetes mellitus.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 7,
    title: 'How do Organisms Reproduce? (Asexual & Sexual Reproduction)',
    tagline: 'Fission, spore formation, vegetative propagation, angiosperm flower pollination, and human reproductive health',
    summary: 'Investigate the perpetuation of species! Contrast asexual modes (binary fission in Amoeba, budding in Hydra, spore formation in Rhizopus, vegetative propagation) with sexual reproduction. Dissect bisexual flower anatomy (stamen, carpel, double fertilization). Study human male and female reproductive systems, menstrual cycles, and contraception.',
    keyConcepts: [
      { title: 'Double Fertilization in Angiosperms', detail: 'One male gamete fuses with the egg cell (syngamy forming zygote); the second male gamete fuses with two polar nuclei (triple fusion forming endosperm).' },
      { title: 'Barrier & Chemical Contraception', detail: 'Methods preventing fertilization and transmission of sexually transmitted infections (STIs like HIV-AIDS, syphilis).' }
    ],
    readingSections: [
      {
        heading: '1. Why Sexual Reproduction Generates Genetic Diversity',
        body: 'Asexual reproduction yields identical clones with minimal variation. Sexual reproduction combines maternal and paternal chromosome sets during meiosis, creating novel genetic combinations that drive evolutionary adaptation.',
        tip: 'DNA copying during cell division includes subtle biochemical variations, which form the basis for species evolution.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 8,
    title: 'Heredity and Evolution (Mendelian Genetics & Inheritance)',
    tagline: 'Gregor Mendel’s pea experiments, monohybrid 3:1 ratio, dihybrid 9:3:3:1 ratio, and sex determination in humans',
    summary: 'Uncover the principles of biological inheritance! Follow Gregor Johann Mendel’s landmark hybridization experiments on garden peas (Pisum sativum). Differentiate genotype from phenotype, dominant alleles from recessive alleles, and analyze the monohybrid (3:1) and dihybrid (9:3:3:1) phenotypic ratios. Understand XX and XY chromosomal sex determination in humans.',
    keyConcepts: [
      { title: 'Mendel’s Law of Segregation', detail: 'Allele pairs separate during gamete formation so that each gamete carries only one allele for each gene.' },
      { title: 'Human Sex Determination', detail: 'Females produce only X ovum; males produce 50% X and 50% Y sperm. It is the father’s sperm chromosome that determines the biological sex of the child.' }
    ],
    readingSections: [
      {
        heading: '1. The Statistical Brilliance of Mendel',
        body: 'Mendel was the first biologist to apply rigorous quantitative statistical recording to heredity across thousands of pea plants, establishing the existence of discrete hereditary units he termed "factors" (genes).',
        tip: 'Acquired traits (like pierced ears or muscular strength) cannot be passed to offspring because they do not alter germ-cell DNA.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 9,
    title: 'Light - Reflection and Refraction (Mirror & Lens Formula)',
    tagline: 'Ray diagrams for spherical mirrors, Snell’s Law, lens formula 1/f = 1/v - 1/u, and power in dioptres',
    summary: 'Master geometric optics! Draw ray diagrams for concave and convex spherical mirrors. Apply the mirror formula [1/f = 1/v + 1/u] and magnification [m = -v/u]. Master Snell’s Law of Refraction [n = sin i / sin r], refractive index, convex and concave lens formula [1/f = 1/v - 1/u], and lens optical power [P = 1/f in dioptres].',
    keyConcepts: [
      { title: 'Cartesian Sign Convention', detail: 'All distances are measured from optical pole/center. Distances measured in direction of incident light are positive (+); opposite are negative (-).' },
      { title: 'Snell’s Law of Refraction', detail: 'The ratio of sine of angle of incidence to sine of angle of refraction is a constant refractive index for a given pair of media (n₂₁ = sin i / sin r).' }
    ],
    readingSections: [
      {
        heading: '1. Why Convex Mirrors are Used as Rear-View Mirrors in Cars',
        body: 'Convex mirrors always produce an erect, virtual, and diminished image of objects regardless of distance. This wide field of view allows drivers to observe entire multi-lane traffic behind them safely.',
        tip: 'Concave mirrors produce real and inverted images, EXCEPT when the object sits between pole and principal focus.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 10,
    title: 'The Human Eye and the Colourful World (Prisms & Atmospheric Optics)',
    tagline: 'Accommodation, myopia vs hypermetropia, prism dispersion (VIBGYOR), atmospheric refraction, and Tyndall scattering',
    summary: 'Explore ocular anatomy and optical phenomena in nature! Explain eye accommodation via ciliary muscles. Correct vision defects: Myopia (nearsightedness corrected by concave lenses) and Hypermetropia (farsightedness corrected by convex lenses). Analyze triangular prism chromatic dispersion (VIBGYOR), rainbow formation, atmospheric twinkling of stars, and Rayleigh scattering.',
    keyConcepts: [
      { title: 'Myopia vs Hypermetropia Correction', detail: 'Myopia: image forms in front of retina, corrected by diverging concave lens; Hypermetropia: image forms behind retina, corrected by converging convex lens.' },
      { title: 'Rayleigh Scattering & Blue Sky', detail: 'Intensity of scattered light is inversely proportional to λ⁴. Shorter blue wavelengths scatter ten times more than red wavelengths, illuminating the sky in blue.' }
    ],
    readingSections: [
      {
        heading: '1. Why Stars Twinkle But Planets Do Not',
        body: 'Stars are point sources of light located light-years away; continuously fluctuating atmospheric density shifts the ray path, causing perceived brightness to flicker. Planets are close extended discs; individual fluctuations cancel out, producing steady illumination.',
        tip: 'Danger signal lights are red because red has the longest visible wavelength and scatters least through fog or smoke.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 11,
    title: 'Electricity & Effects of Electric Current',
    tagline: 'Ohm’s Law V = IR, resistivity, series vs parallel circuits, Joule’s heating H = I²Rt, and kilowatt-hours',
    summary: 'Explore electrodynamics! State Ohm’s Law and graph linear V-I characteristics. Calculate equivalent resistances in series (R_s = R₁ + R₂) and parallel (1/R_p = 1/R₁ + 1/R₂). Derive Joule’s Law of Heating [H = I²Rt], electrical power [P = VI = I²R = V²/R], and commercial energy units in kilowatt-hours (1 kWh = 3.6 × 10⁶ J).',
    keyConcepts: [
      { title: 'Ohm’s Law', detail: 'The electric current flowing through a conductor is directly proportional to potential difference across its terminals: V = IR.' },
      { title: 'Why Domestic Circuits are Connected in Parallel', detail: 'Parallel circuits provide equal voltage (220V in India) to every appliance, allow individual on/off switching, and prevent total failure if one bulb fuses.' }
    ],
    readingSections: [
      {
        heading: '1. Why Tungsten is Used for Filament Bulbs',
        body: 'Tungsten has an extremely high melting point (3380°C) and high resistivity. When electric current passes through the coiled filament, it glows incandescent white-hot without melting.',
        tip: 'Electric fuses are connected in series with live wires using low-melting alloys to prevent electrical fires.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 12,
    title: 'Magnetic Effects of Electric Current (Electromagnetism)',
    tagline: 'Oersted’s experiment, magnetic field lines, right-hand thumb rule, solenoid, and Fleming’s left-hand rule',
    summary: 'Discover electromagnetism! Recreate Hans Christian Oersted’s 1820 compass deflection experiment. Map magnetic field lines around straight conductors, circular loops, and solenoids. Apply Maxwell’s Right-Hand Thumb Rule. Derive magnetic Lorentz force on current-carrying conductors and apply Fleming’s Left-Hand Rule to electric motors and safety earthing.',
    keyConcepts: [
      { title: 'Right-Hand Thumb Rule', detail: 'If you point your right thumb in the direction of electric current, your curled fingers show the direction of concentric magnetic field lines.' },
      { title: 'Fleming’s Left-Hand Rule', detail: 'Stretch thumb, forefinger, and middle finger mutually perpendicular: Forefinger = Magnetic Field, Center finger = Current, Thumb = Force/Motion.' }
    ],
    readingSections: [
      {
        heading: '1. The Solenoid as an Electromagnet',
        body: 'A tightly wound cylindrical coil of insulated copper wire produces a magnetic field nearly identical to a bar magnet: uniform and strong inside the core. Inserting a soft iron core creates a powerful switchable electromagnet.',
        tip: 'Green earth wires safely divert accidental electric leakage into the ground, protecting users from electric shocks.'
      }
    ]
  }),
  buildChapter(10, 'c10-sci', 'Science', {
    chapterNumber: 13,
    title: 'Our Environment & Ecosystem Dynamics',
    tagline: 'Trophic levels, 10% energy law, biological magnification of pesticides, and ozone hole chlorofluorocarbons',
    summary: 'Analyze ecological food chains and environmental sustainability! Map trophic levels from primary producers to apex carnivores. Apply Raymond Lindeman’s 10% Law of Energy Transfer. Examine biological magnification (accumulation of non-biodegradable DDT in top consumers), stratospheric ozone depletion by CFCs, and municipal solid waste management.',
    keyConcepts: [
      { title: 'The 10% Energy Transfer Law', detail: 'Only roughly 10% of energy entering a trophic level is stored as biomass available to the next consumer; 90% is lost as metabolic heat and respiration.' },
      { title: 'Biological Magnification', detail: 'Progressive accumulation and increasing concentration of toxic non-biodegradable chemicals (like heavy metals and pesticides) at higher trophic levels.' }
    ],
    readingSections: [
      {
        heading: '1. The Montreal Protocol and Stratospheric Ozone Recovery',
        body: 'Ozone (O₃) in the upper stratosphere shields Earth from deadly mutagenic solar UV radiation. In 1987, UNEP ratified the Montreal Protocol, phasing out CFC propellants to successfully reverse the Antarctic ozone hole.',
        tip: 'Biodegradable waste can be converted into rich nutrient compost, whereas non-biodegradable plastics persist for centuries.'
      }
    ]
  })
];

const sstChapters = [
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 1,
    title: 'The Rise of Nationalism in Europe',
    tagline: 'Frédéric Sorrieu’s utopian print, Napoleonic Code 1804, Mazzini’s Young Italy, and Bismarck’s German unification',
    summary: 'Analyze the emergence of nation-states in 19th-century Europe! Examine Frédéric Sorrieu’s vision of democratic republics, the Napoleonic Civil Code of 1804 abolishing feudal privileges, Giuseppe Mazzini’s carbonari secret societies, the 1848 Frankfurt Parliament, Count Cavour and Garibaldi’s unification of Italy, and Otto von Bismarck’s German unification.',
    keyConcepts: [
      { title: 'The Napoleonic Code (1804)', detail: 'Abolished feudal privileges by birth, established equality before law, secured property rights, and standardized weights and measures across Europe.' },
      { title: 'Bismarck and German Unification', detail: 'Chief Minister Otto von Bismarck engineered three wars over seven years to complete German unification under Kaiser Wilhelm I.' }
    ],
    readingSections: [
      {
        heading: '1. The Allegory of the Nation',
        body: '19th-century artists personified nations as female figures: Marianne in France (symbolizing liberty) and Germania in Germany (wearing oak leaves signifying heroism).',
        tip: 'The Balkan region became a volatile powder keg of rival imperialisms, eventually triggering World War I.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 2,
    title: 'Nationalism in India (Gandhi & Freedom Movements)',
    tagline: 'Satyagraha, Rowlatt Act, Jallianwala Bagh massacre, Non-Cooperation, Dandi Salt March, and Poona Pact',
    summary: 'Trace Mahatma Gandhi’s mass mobilization against British imperial rule! Analyze Champaran and Kheda Satyagrahas, the brutal Jallianwala Bagh massacre (13 April 1919), the Non-Cooperation-Khilafat Movement (1920-22) suspended after Chauri Chaura, the historic 240-mile Dandi Salt March (1930) launching Civil Disobedience, and the Gandhi-Ambedkar Poona Pact (1932).',
    keyConcepts: [
      { title: 'The Dandi Salt March (1930)', detail: 'Gandhi walked 240 miles from Sabarmati Ashram to coastal Dandi with 78 volunteers over 24 days, breaking the colonial salt monopoly and mobilizing millions.' },
      { title: 'The Poona Pact (1932)', detail: 'Agreement between Dr. B.R. Ambedkar and Mahatma Gandhi providing reserved legislative seats for Depressed Classes within the general electorate.' }
    ],
    readingSections: [
      {
        heading: '1. Why Salt Was Chosen as the Symbol of Defiance',
        body: 'Salt was an indispensable dietary necessity consumed equally by the poorest peasant and the wealthiest citizen. The British salt tax and state manufacture monopoly affected every single household, making it the supreme unifying symbol of colonial injustice.',
        tip: 'Over 60,000 freedom fighters were imprisoned during the Civil Disobedience Movement.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 3,
    title: 'The Making of a Global World (Trade & Globalisation History)',
    tagline: 'Silk routes, transatlantic slave trade, Rinderpest cattle plague in Africa, and Bretton Woods institutions',
    summary: 'Examine international economic integration across centuries! Trace the ancient Silk Routes connecting Asia, Europe, and Africa. Analyze the Columbian Exchange of food crops and diseases, the devastating 1890s Rinderpest cattle plague that impoverished African pastoralists, the Great Depression of 1929, and the post-WWII Bretton Woods conference establishing the IMF and World Bank.',
    keyConcepts: [
      { title: 'The Silk Routes', detail: 'Vibrant land and maritime trade networks that transported Chinese silk, Indian spices, pottery, and precious metals while transmitting cultural and religious philosophies.' },
      { title: 'Bretton Woods Conference (1944)', detail: 'Framework established to ensure postwar financial stability, creating the International Monetary Fund (IMF) and International Bank for Reconstruction and Development (World Bank).' }
    ],
    readingSections: [
      {
        heading: '1. The Devastating Great Depression of 1929',
        body: 'Triggered by the Wall Street stock market crash, agricultural overproduction, and banking collapse, global trade plummeted by over 50%, throwing tens of millions into unemployment and reshaping political alignments worldwide.',
        tip: 'The introduction of common potatoes from South America revolutionized European nutrition, preventing famines until the 1845 Irish Potato Blight.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 4,
    title: 'Resources and Development (Soil Classification & Sustainable Planning)',
    tagline: 'Rio Earth Summit 1992, Agenda 21, land degradation, alluvial, black, red, and laterite soils',
    summary: 'Study geographic resource management! Classify resources by origin, exhaustibility, and ownership. Review the landmark 1992 Rio de Janeiro Earth Summit and Agenda 21 on sustainable development. Analyze causes of land degradation (mining, over-irrigation, overgrazing) and study soil profiles of India: Alluvial, Black (Regur cotton soil), Red and Yellow, Laterite, and Arid soils.',
    keyConcepts: [
      { title: 'Sustainable Development', detail: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
      { title: 'Black Soil (Regur)', detail: 'Formed from volcanic basalt lava weathering; clayey, moisture-retentive, and ideal for cultivating cotton in the Deccan plateau.' }
    ],
    readingSections: [
      {
        heading: '1. Land Degradation and Soil Conservation Techniques',
        body: 'Over-irrigation in Punjab leads to waterlogging and soil salinity, while excessive mining in Jharkhand causes severe deforested gullies. Shelterbelts of trees, strip cropping, and contour ploughing mitigate these hazards.',
        tip: 'Alluvial soil covers over 40% of India’s land area and forms the fertile breadbasket of the northern plains.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 5,
    title: 'Water Resources (Multi-Purpose Dams & Rainwater Harvesting)',
    tagline: 'Hydrological cycle, multi-purpose river valley projects, Sardar Sarovar, and traditional rainwater harvesting',
    summary: 'Analyze freshwater conservation! Examine causes of water scarcity amidst expanding urban populations and agriculture. Scrutinize multi-purpose dams (Nehru’s "Temples of Modern India") balancing flood control, hydroelectricity, and irrigation against ecological displacement and siltation. Explore traditional rainwater harvesting: Khadins, Johads, Guls, and Rooftop rainwater recharge.',
    keyConcepts: [
      { title: 'Multi-Purpose Projects', detail: 'Large river dams designed simultaneously for irrigation, hydroelectric power generation, inland navigation, and flood control.' },
      { title: 'Rooftop Rainwater Harvesting', detail: 'Catching rainwater falling on building roofs and directing it through PVC pipes into filtration pits and underground storage tanks (Tankas).' }
    ],
    readingSections: [
      {
        heading: '1. The Sardar Sarovar Dam Controversy',
        body: 'Built on the Narmada River, the mega-dam supplies irrigation to arid Gujarat and Rajasthan, but triggered the Narmada Bachao Andolan movement protesting the submersion of fertile tribal lands and forests.',
        tip: 'Tamil Nadu is the first state in India to make rooftop rainwater harvesting compulsory for all residential houses.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 6,
    title: 'Agriculture (Cropping Patterns & Food Security)',
    tagline: 'Primitive vs commercial farming, Kharif, Rabi, Zaid seasons, rice, wheat, sugarcane, and Green Revolution',
    summary: 'Investigate Indian agricultural agronomy! Compare primitive subsistence farming, intensive subsistence farming, and commercial plantation agriculture. Master three cropping seasons: Rabi (winter-sown wheat, gram), Kharif (monsoon-sown paddy, cotton), and Zaid (summer melons, cucumbers). Review technological reforms like the Green Revolution and White Revolution.',
    keyConcepts: [
      { title: 'Three Cropping Seasons of India', detail: 'Rabi: sown Oct-Dec, harvested Apr-Jun; Kharif: sown Jun-Jul with monsoon onset, harvested Sep-Oct; Zaid: short summer season between Rabi and Kharif.' },
      { title: 'Institutional Reforms', detail: 'Abolition of Zamindari, consolidation of small holdings, Kisan Credit Card (KCC), and crop insurance against droughts and pests.' }
    ],
    readingSections: [
      {
        heading: '1. India’s Food Grain Staples: Rice vs Wheat',
        body: 'Rice requires high temperature (above 25°C), high humidity, and annual rainfall above 100 cm. Wheat requires a cool growing season, bright sunshine during ripening, and 50 to 75 cm annual rainfall.',
        tip: 'Tea and coffee are plantation crops requiring well-drained fertile acidic soil on shaded hill slopes.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 7,
    title: 'Power Sharing (Democratic Harmony in Belgium vs Sri Lanka)',
    tagline: 'Flemish Dutch vs Wallonia French, Sinhala majoritarianism civil war, horizontal vs vertical power sharing',
    summary: 'Understand the essential foundation of stable democracy! Contrast Belgium’s inclusive constitutional power-sharing model (equal cabinet seats for Dutch and French speakers, community governments) with Sri Lanka’s majoritarian 1956 Sinhala-only language act which marginalized Tamil citizens and triggered decades of devastating civil war. Classify horizontal vs vertical power sharing.',
    keyConcepts: [
      { title: 'Horizontal Division of Power', detail: 'Sharing power among different organs of government at the same level: Legislature, Executive, and Judiciary (System of Checks and Balances).' },
      { title: 'Vertical Division of Power', detail: 'Sharing power among governments at different spatial levels: Union/Federal, State/Provincial, and Local Panchayati Raj.' }
    ],
    readingSections: [
      {
        heading: '1. Why Power Sharing is Desirable',
        body: 'Prudential reasons: power sharing reduces the possibility of conflict and violent social unrest between ethnic groups. Moral reasons: power sharing is the very spirit of democracy, ensuring that citizens affected by governance participate in decision-making.',
        tip: 'Brussels, Belgium was chosen as the administrative headquarters of the European Union due to its successful accommodation model.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 8,
    title: 'Federalism (Decentralisation & Indian Panchayati Raj)',
    tagline: 'Unitary vs federal systems, Union List, State List, Concurrent List, linguistic states, and 73rd/74th amendments',
    summary: 'Study the territorial distribution of state authority! Differentiate "Coming Together" federations (USA, Switzerland, Australia) from "Holding Together" federations (India, Spain, Belgium). Analyze the Indian constitutional lists: Union List (defense, foreign affairs), State List (police, agriculture), Concurrent List (education), and Residuary powers. Examine the 1992 decentralization amendments establishing the 3-tier Panchayati Raj system.',
    keyConcepts: [
      { title: 'Three Legislative Lists', detail: 'Union List: 100 subjects of national importance; State List: 61 state-level subjects; Concurrent List: 52 shared subjects (Union prevails during conflict).' },
      { title: 'Decentralisation Act 1992', detail: 'Mandated regular local elections, reservation of at least 1/3rd seats for women, and establishment of independent State Election Commissions.' }
    ],
    readingSections: [
      {
        heading: '1. Why Linguistic States Strengthened Indian Unity',
        body: 'When language-based states like Andhra and Maharashtra were first created in the 1950s, leaders feared national balkanization. In reality, linguistic reorganization accommodated cultural pride, made administration accessible to common citizens, and made the nation more unified than ever.',
        tip: 'Local self-government institutions in India currently seat over 36 lakh elected representatives, the largest democratic experiment in human history.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 9,
    title: 'Development (Economic Goals, Per Capita Income & Human Development)',
    tagline: 'Conflicting developmental goals, World Bank per capita income vs UNDP Human Development Index (HDI)',
    summary: 'Interrogate the meaning of national and human progress! Realize that different people have conflicting developmental aspirations (e.g. a hydro dam provides industrial electricity but submerges tribal villages). Contrast the World Bank’s narrow monetary Per Capita Income criterion with UNDP’s comprehensive Human Development Index (combining life expectancy, mean schooling years, and gross national income).',
    keyConcepts: [
      { title: 'Average / Per Capita Income', detail: 'Total national income of a country divided by its total population (used by World Bank World Development Reports).' },
      { title: 'Human Development Index (HDI)', detail: 'Composite metric formulated by UNDP combining Health (Life Expectancy at birth), Education (Literacy & Schooling), and Standard of Living (GNI per capita).' }
    ],
    readingSections: [
      {
        heading: '1. Income is Not the Sole Indicator of Well-Being',
        body: 'While Haryana has higher per capita income than Kerala, Kerala has significantly lower infant mortality rates and higher literacy rates because it invested early in public health, public food distribution, and primary schools.',
        tip: 'Sustainable development ensures current resource consumption does not deplete aquifers or fossil fuels for future generations.'
      }
    ]
  }),
  buildChapter(10, 'c10-sst', 'Social Science', {
    chapterNumber: 10,
    title: 'Sectors of the Indian Economy (Primary, Secondary, Tertiary & MGNREGA)',
    tagline: 'Economic classification, historical shifts towards services, disguised unemployment, and formal vs informal jobs',
    summary: 'Deconstruct economic activity! Classify activities into Primary (agriculture, mining), Secondary (industrial manufacturing), and Tertiary (transport, banking, IT, healthcare services). Analyze the historical shift in GDP contribution towards the tertiary service sector while agriculture still employs nearly half of India’s labor force (underemployment/disguised unemployment). Examine organized vs unorganized sectors and the MGNREGA guarantee.',
    keyConcepts: [
      { title: 'Disguised Unemployment', detail: 'A situation where more workers are engaged in an activity than necessary; even if some are pulled out, total production output does not drop.' },
      { title: 'MGNREGA 2005 Guarantee', detail: 'The Mahatma Gandhi National Rural Employment Guarantee Act guarantees 100 days of wage employment per financial year to every rural household.' }
    ],
    readingSections: [
      {
        heading: '1. The Paradox of India’s Tertiary Growth',
        body: 'In developed economies, workers shifted sequentially from agriculture to manufacturing and then to services. In India, GDP jumped directly to services (contributing over 53% of GDP), but high-tech services generate fewer mass employment jobs than manufacturing.',
        tip: 'Organized sector workers enjoy security of employment, fixed working hours, paid leave, and provident fund benefits.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 1,
    title: 'A Letter to God (Gregorio Lopez) & Dust of Snow / Fire and Ice',
    tagline: 'Lencho’s hailstorm, 100 pesos request to God, postmaster’s charity, and Robert Frost’s symbolic nature poetry',
    summary: 'Explore Gregorio Lopez y Fuentes’ poignant masterpiece on faith and tragic irony! Lencho, a poor Mexican farmer whose ripe corn is destroyed by a devastating hailstorm, writes a letter to God requesting 100 pesos. The kind postmaster collects 70 pesos from postal staff to sustain his faith. When Lencho opens it, he suspects the post office workers stole the missing 30 pesos! Paired with Robert Frost’s "Dust of Snow" and "Fire and Ice".',
    keyConcepts: [
      { title: 'Situational Irony', detail: 'The charitable postal staff who collected money for Lencho are accused by him of being a "bunch of crooks".' },
      { title: 'Robert Frost’s "Dust of Snow"', detail: 'Inverted symbolism: a crow and poisonous hemlock tree save a gloomy day, demonstrating nature’s quiet power to uplift the human spirit.' }
    ],
    readingSections: [
      {
        heading: '1. The Blindness of Absolute Conviction',
        body: 'Lencho showed not the slightest surprise on seeing the money—such was his absolute faith. But he became furious when he counted it: "God could not have made a mistake, nor could he have denied Lencho what he had requested!" His conviction blinded him to human charity.',
        tip: 'The story examines how single-minded religious literalism can overlook real human compassion.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 2,
    title: 'Nelson Mandela: Long Walk to Freedom & A Tiger in the Zoo',
    tagline: 'Inauguration at Union Buildings Pretoria, twin obligations, triumph over fear, and Leslie Norris’s captive tiger',
    summary: 'Study Nelson Mandela’s historic May 10, 1994 presidential inauguration speech celebrating the fall of Apartheid! Mandela reflects on courage ("not the absence of fear, but the triumph over it"), human twin obligations (to family and to people/country), and how oppression robs both the oppressed and the oppressor of their humanity. Accompanied by Leslie Norris’s poem "A Tiger in the Zoo".',
    keyConcepts: [
      { title: 'Mandela’s Definition of Courage', detail: 'Courage is not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.' },
      { title: 'The Oppressor and Oppressed Paradox', detail: 'A man who takes away another man’s freedom is a prisoner of hatred locked behind the bars of prejudice; both must be liberated.' }
    ],
    readingSections: [
      {
        heading: '1. Man’s Goodness is an Indomitable Flame',
        body: '"In life, every man has twin obligations: obligations to his family, to his parents, to his wife and children; and he has an obligation to his people, his community, his country," Mandela declared.',
        tip: 'Leslie Norris contrasts the regal freedom of a wild tiger stalking deer in long grass with the tragic agony of pacing in a cramped concrete zoo cage.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 3,
    title: 'Two Stories About Flying (His First Flight & The Black Aeroplane)',
    tagline: 'Liam O’Flaherty’s young seagull conquering fear, and Frederick Forsyth’s mysterious Dakota navigational miracle',
    summary: 'Experience two thrilling tales of psychological flight! In Part I, a young seagull is terrified of the dizzying drop beneath his ledge; driven by intense hunger, he dives for fish offered by his mother and discovers his wings naturally riding the sea breeze. In Part II, pilot flying an old Dakota through blinding black storm clouds is guided to a safe runway by an enigmatic black aeroplane that vanishes into thin air.',
    keyConcepts: [
      { title: 'The Power of Parental Tough Love', detail: 'The mother seagull refuses to feed the young bird directly, using hunger as the catalyst that forces him to trust his innate aerodynamic instincts.' },
      { title: 'The Enigma of the Black Aeroplane', detail: 'Was the mysterious pilot a guardian angel, a hallucination born of survival instinct, or a supernatural presence in the storm?' }
    ],
    readingSections: [
      {
        heading: '1. The Joy of First Mastery',
        body: 'He felt the tips of his wings cutting through the air. He was not falling headlong now. He was soaring gradually downwards and outwards. He was no longer afraid. He just felt a bit dizzy, flapping his wings once and soaring upwards.',
        tip: 'Fear is often an illusion created by the mind before attempting the unknown.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 4,
    title: 'From the Diary of Anne Frank & The Ball Poem',
    tagline: 'Kitty diary in the Secret Annex, Mr. Keesing’s chatterbox essay punishments, and John Berryman’s epistemology of loss',
    summary: 'Read poignant excerpts from Anne Frank’s diary written in hiding from Nazi persecution in occupied Amsterdam. Anne reflects on why "paper has more patience than people," names her diary Kitty, and humorously recounts outsmarting her strict math teacher Mr. Keesing with witty poems about a chatterbox duckling. Accompanied by John Berryman’s profound "The Ball Poem" exploring a young boy’s first experience of grief and material loss.',
    keyConcepts: [
      { title: 'Paper Has More Patience Than People', detail: 'Anne’s famous realization that an honest personal journal allows uninhibited emotional expression free from judgment or ridicule.' },
      { title: 'The Epistemology of Loss in "The Ball Poem"', detail: 'Losing a beloved five-cent ball teaches a young boy that worldly possessions cannot be replaced; one must learn to bear loss with resilience.' }
    ],
    readingSections: [
      {
        heading: '1. Anne Frank’s Indomitable Humor in Adversity',
        body: 'Assigned an essay titled "Quack, Quack, Quack, Said Mistress Chatterbox" as a punishment for talking in class, Anne wrote an ingenious verse story where three baby ducklings were bitten to death by their father swan because they quacked too much. Mr. Keesing roared with laughter and never punished her again!',
        tip: 'Even in hiding from mortal danger, Anne retained radiant intellectual curiosity and optimism.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 5,
    title: 'Glimpses of India (A Baker from Goa, Coorg, Tea from Assam) & Amanda!',
    tagline: 'Traditional Pader bakers, martial Kodavus of Coorg, tea gardens of Assam, and Robin Klein’s imaginative escapism',
    summary: 'Celebrate the rich cultural and geographic mosaic of India! Explore Goa’s historic Portuguese bread-making heritage (the musical bamboo jingle of the village Pader). Journey to Coorg (Kodagu), home of coffee plantations, evergreen rainforests, and proud martial clans. Visit Assam’s endless emerald tea bushes where Bodhidharma and Chinese Emperor Shennong legends explain tea origins. Paired with Robin Klein’s "Amanda!".',
    keyConcepts: [
      { title: 'Syncretic Cultural Living', detail: 'How Portuguese colonial bakeries, Arab Kupia coats in Coorg, and ancient Chinese/Buddhist tea traditions shaped regional Indian identities.' },
      { title: 'The Longing for Autonomous Freedom in "Amanda!"', detail: 'Amanda escapes the relentless nagging of adults by daydreaming herself as an orphan wandering barefoot, a mermaid in a green sea, or Rapunzel in a quiet tower.' }
    ],
    readingSections: [
      {
        heading: '1. The Nostalgia of Goan Bakers',
        body: 'Marriage gifts are meaningless without the sweet bread known as bol, just as a party or a feast loses its charm without bread. The baker and his family never starved; their plump physical appearance was an open testimony to their prosperity.',
        tip: 'Coorg is the only region in India where citizens are permitted to carry firearms without a license due to their proud martial tradition.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 6,
    title: 'Madam Rides the Bus (Vallikkannan) & The Trees',
    tagline: 'Eight-year-old Valli’s secret bus journey to the nearest town, conductor’s wit, and Adrienne Rich’s feminist forest',
    summary: 'Travel with eight-year-old Valliammai (Valli), who meticulously saves every stray coin, resists peppermint temptations, and plans a solo secret bus ride from her village to the nearby town. Valli observes the bustling countryside, a playful young cow galloping before the bus, and encounters adult patronization with dignity. On the return trip, seeing the same cow lying dead by the roadside introduces her to the sober reality of mortality.',
    keyConcepts: [
      { title: 'The Quest for Self-Reliance', detail: 'Valli’s meticulous planning, coin-saving discipline, and proud refusal of the conductor’s free cold drink demonstrate adolescent autonomy.' },
      { title: 'The Contrast of Life and Death', detail: 'The transition from the comical, tail-high galloping cow to its mangled lifeless body shocks Valli into mature contemplation of mortality.' }
    ],
    readingSections: [
      {
        heading: '1. Valli’s Refusal of Condescending Charity',
        body: '"I can get on by myself," Valli said. "You don’t have to help me." The conductor was a jolly sort, fond of joking. "Oh, please don’t be angry with me, my fine madam," he said, calling her Madam to the amusement of all passengers.',
        tip: 'Curiosity and cautious intelligence allow young people to explore the broader world safely.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 7,
    title: 'The Sermon at Benares (Gautama Buddha) & For Anne Gregory',
    tagline: 'Kisa Gotami’s dead son, mustard seeds from a house untouched by death, and W.B. Yeats’s divine love',
    summary: 'Reflect upon spiritual enlightenment and mortality! When Kisa Gotami’s only son dies, she desperately searches for medicine. Gautama Buddha gently instructs her to bring a handful of mustard seeds from a household where no child, husband, parent, or friend has ever died. Traveling door to door, she realizes that grief is universal and death is the common destiny of all mortals. Accompanied by W.B. Yeats’s "For Anne Gregory".',
    keyConcepts: [
      { title: 'Universal Nature of Mortality', detail: 'The life of mortals in this world is troubled and brief, combined with pain. As ripe fruits are in early danger of falling, so mortals are in constant danger of death.' },
      { title: 'Yeats on Outer vs Inner Beauty', detail: 'Only God can love a person for their inner soul alone and not for their attractive yellow hair.' }
    ],
    readingSections: [
      {
        heading: '1. Kisa Gotami’s Enlightenment at Twilight',
        body: 'Weary and hopeless, Kisa Gotami sat down at the wayside watching the lights of the city as they flickered up and were extinguished again. At last the darkness of the night reigned everywhere. She considered the fate of men: that their lives flicker up and are extinguished.',
        tip: 'Overcoming grief requires accepting the impermanence of physical existence rather than clinging to delusion.'
      }
    ]
  }),
  buildChapter(10, 'c10-eng', 'English', {
    chapterNumber: 8,
    title: 'The Proposal (Anton Chekhov) & A Triumph of Surgery',
    tagline: 'Ivan Lomov, Natalya Stepanovna, Chubukov, disputes over Oxen Meadows, and Tricki the pampered dog',
    summary: 'Delight in Anton Chekhov’s uproarious one-act Russian farce "The Proposal"! Hypochondriac landowner Ivan Lomov visits his neighbor Stepan Chubukov to propose marriage to his daughter Natalya. Instead of proposing, Lomov and Natalya descend into hysterical shouting matches over property ownership of the Oxen Meadows and the hunting pedigree of their dogs! Coupled with James Herriot’s comical veterinary tale "A Triumph of Surgery".',
    keyConcepts: [
      { title: 'Satire of Aristocratic Materialism', detail: 'Chekhov satirizes the 19th-century Russian gentry who viewed marriage as an economic transaction yet were too petty to avoid trivial arguments.' },
      { title: 'Tricki’s Cure by Healthy Deprivation', detail: 'Mrs. Pumphrey overfeeds her dog with cake and cod-liver oil until it resembles a bloated sausage; veterinary surgeon Herriot cures him purely through plain water and exercise.' }
    ],
    readingSections: [
      {
        heading: '1. Hysteria in the Russian Countryside',
        body: '"The Oxen Meadows are ours, not yours!" cries Natalya. "I have palpitations, my foot has gone to sleep!" groans Lomov. Even after fainting, reviving, and accepting the proposal, they immediately resume arguing over whose dog jumps higher!',
        tip: 'Chekhov’s farces expose human vanity and stubborn ego through rapid, witty dialogue.'
      }
    ]
  })
];

export const class10Curriculum: Subject[] = [
  {
    id: 'c10-math',
    name: 'Mathematics',
    code: 'MATH-1001',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 14-chapter Board syllabus: Real Numbers, Polynomials, Linear Pairs, Quadratics, APs, Triangles, Coordinate Geometry, Trigonometry, Applications, Circles, Areas, Surface Areas & Volumes, Statistics, and Probability.',
    chapters: mathChapters
  },
  {
    id: 'c10-sci',
    name: 'Science (Physics, Chemistry, Biology)',
    code: 'SCI-1001',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 13-chapter Board syllabus: Chemical Reactions, Acids & Bases, Metals, Carbon, Life Processes, Control & Coordination, Reproduction, Heredity, Light, Eye, Electricity, Magnetism, and Environment.',
    chapters: scienceChapters
  },
  {
    id: 'c10-sst',
    name: 'Social Science (History, Geography, Political Science, Economics)',
    code: 'SST-1001',
    iconName: 'Globe',
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-500 to-indigo-600'
    },
    description: 'Complete Board syllabus: Nationalism in Europe & India, Global World, Resources, Water, Agriculture, Power Sharing, Federalism, Development, and Economic Sectors.',
    chapters: sstChapters
  },
  {
    id: 'c10-eng',
    name: 'English Language & Literature (First Flight & Footprints)',
    code: 'ENG-1001',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete literature anthology: Letter to God, Mandela, Two Stories About Flying, Anne Frank, Glimpses of India, Madam Rides the Bus, Sermon at Benares, and The Proposal.',
    chapters: englishChapters
  }
];
