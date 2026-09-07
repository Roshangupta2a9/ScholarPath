import { Subject } from '../../types';
import { buildChapter } from './common';

const mathChapters = [
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 1,
    title: 'Number Systems & Rationalisation',
    tagline: 'Irrational numbers, square root spirals, representation on real line, and rationalising surds',
    summary: 'Master the continuum of real numbers! Distinguish rational numbers (terminating or non-terminating recurring) from irrational numbers (non-terminating non-recurring like √2, π). Represent √x geometrically, rationalize denominators with radical surds [1/(√a + √b)], and apply laws of integral exponents.',
    keyConcepts: [
      { title: 'Irrational Numbers', detail: 'Numbers that cannot be written in the form p/q (where p, q are integers and q ≠ 0). Their decimal expansions are infinite and non-periodic.' },
      { title: 'Rationalising Denominators', detail: 'Multiplying both numerator and denominator by conjugate surds: [1/(√a - √b)] × [(√a + √b)/(√a + √b)] eliminates radicals from the denominator.' }
    ],
    readingSections: [
      {
        heading: '1. The Real Number Line Continuum',
        body: 'Every real number corresponds to a unique point on the number line, and every point on the number line represents a unique real number (proven by Dedekind and Cantor).',
        tip: 'Between any two rational numbers, there exist infinitely many rational and irrational numbers.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 2,
    title: 'Polynomials (Algebraic Identities & Factor Theorem)',
    tagline: 'Degree of polynomials, zeroes, Remainder Theorem, Factor Theorem, and standard cubic identities',
    summary: 'Study algebraic polynomials P(x) in one variable! Classify by degree: linear, quadratic, cubic. Find zeroes of polynomials P(c) = 0. Apply the Factor Theorem: (x - a) is a factor of P(x) if and only if P(a) = 0. Factorize cubics using the rational root test and master identities including (x+y+z)² and x³+y³+z³-3xyz.',
    keyConcepts: [
      { title: 'Factor Theorem', detail: 'If P(a) = 0 for a polynomial of degree n ≥ 1, then (x - a) is a linear factor of P(x).' },
      { title: 'Three-Variable Identity', detail: 'x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx). If x + y + z = 0, then x³ + y³ + z³ = 3xyz.' }
    ],
    readingSections: [
      {
        heading: '1. Splitting the Middle Term in Quadratics',
        body: 'To factorize ax² + bx + c, find two numbers p and q such that p + q = b and pq = ac. Regrouping terms yields common linear binomial factors.',
        tip: 'The degree of a non-zero constant polynomial is 0, while the degree of the zero polynomial is undefined.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 3,
    title: 'Coordinate Geometry (The Cartesian Coordinate System)',
    tagline: 'René Descartes, origin (0,0), four quadrants, abscissa (x), and ordinate (y)',
    summary: 'Bridge geometry and algebra! Plot ordered pairs (x, y) on the Cartesian plane defined by perpendicular horizontal X-axis and vertical Y-axis. Identify coordinates across Quadrants I (+,+), II (-,+), III (-,-), and IV (+,-). Understand axes sign conventions and map physical grid locations.',
    keyConcepts: [
      { title: 'Abscissa and Ordinate', detail: 'The x-coordinate is the perpendicular distance from the Y-axis (abscissa); the y-coordinate is the perpendicular distance from the X-axis (ordinate).' },
      { title: 'Sign Rules across Quadrants', detail: 'Quadrant I: (+, +); Quadrant II: (-, +); Quadrant III: (-, -); Quadrant IV: (+, -).' }
    ],
    readingSections: [
      {
        heading: '1. René Descartes and the Fly on the Ceiling',
        body: 'Legend tells that French philosopher René Descartes conceived the coordinate system while watching a fly crawl across his ceiling, realizing its exact location could be described by distances from two perpendicular walls.',
        tip: 'Any point lying on the X-axis has y = 0; any point lying on the Y-axis has x = 0.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 4,
    title: 'Linear Equations in Two Variables (Graphical Solutions)',
    tagline: 'Standard form ax + by + c = 0, infinite solution pairs, and linear graphing on coordinate plane',
    summary: 'Investigate first-degree equations in two variables ax + by + c = 0 (where a, b ≠ 0). Prove that a linear equation in two variables has infinitely many solutions (x, y). Plot solutions to demonstrate that the graph of every linear equation in two variables is a straight line.',
    keyConcepts: [
      { title: 'Infinitely Many Solutions', detail: 'For every chosen value of x, there exists a unique corresponding value of y satisfying ax + by + c = 0.' },
      { title: 'Equations Parallel to Axes', detail: 'The equation x = a is a vertical line parallel to the Y-axis; y = b is a horizontal line parallel to the X-axis.' }
    ],
    readingSections: [
      {
        heading: '1. Two Points Determine a Line',
        body: 'Although two points are mathematically sufficient to plot a line, always calculate at least three solution points to serve as an instant check against algebraic calculation errors.',
        tip: 'If an equation passes through the origin (0, 0), its constant term c must equal 0 (y = mx).'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 5,
    title: 'Introduction to Euclid’s Geometry (Axioms & Postulates)',
    tagline: 'Euclidean postulates, undefined terms (point, line, plane), and the Parallel Postulate',
    summary: 'Discover the foundations of deductive mathematics! Examine how Euclid formulated rigorous geometric proofs in "The Elements". Distinguish axioms (assumptions assumed true across all mathematics) from postulates (assumptions specific to geometry). Scrutinize Euclid’s Fifth Postulate (the Parallel Postulate) and equivalent Playfair versions.',
    keyConcepts: [
      { title: 'Euclid’s Axiom 1', detail: 'Things which are equal to the same thing are equal to one another.' },
      { title: 'Euclid’s Fifth Postulate', detail: 'If a straight line falling on two lines makes interior angles on the same side less than two right angles, the two lines meet on that side if extended indefinitely.' }
    ],
    readingSections: [
      {
        heading: '1. Deductive Reasoning and Modern Axiomatics',
        body: 'Before Euclid, mathematics was empirical. Euclid introduced axiomatic deductive reasoning: starting with minimal unproven axioms and proving thousands of complex geometric theorems step by step.',
        tip: 'Attempting to prove the fifth postulate led 19th-century mathematicians to discover non-Euclidean spherical and hyperbolic geometries!'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 6,
    title: 'Lines and Angles (Transversals & Parallel Lines)',
    tagline: 'Vertically opposite angles, corresponding angles axiom, alternate interior angles, and angle sum of a triangle',
    summary: 'Master geometric angle relationships! Prove Theorem 6.1: if two lines intersect, vertically opposite angles are equal. Investigate parallel lines cut by a transversal: alternate interior angles are equal and consecutive interior angles are supplementary (sum = 180°). Prove that the sum of the angles of a triangle is always 180°.',
    keyConcepts: [
      { title: 'Alternate Interior Angles Theorem', detail: 'If a transversal intersects two parallel lines, each pair of alternate interior angles is equal.' },
      { title: 'Exterior Angle Theorem', detail: 'An exterior angle of a triangle equals the sum of the two interior opposite angles.' }
    ],
    readingSections: [
      {
        heading: '1. Proof of the Angle Sum Property of a Triangle',
        body: 'Draw a line parallel to base BC through opposite vertex A. Using alternate interior angles, the three adjacent angles forming a straight line (180°) are shown to equal the three interior angles of the triangle!',
        tip: 'Lines parallel to the same given line are parallel to each other.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 7,
    title: 'Triangles (Congruence Criteria & Isosceles Theorems)',
    tagline: 'SAS axiom, ASA, AAS, SSS, RHS congruence criteria, and angles opposite to equal sides',
    summary: 'Prove exact geometric superposition and congruence! Master the five congruence criteria: SAS (axiom), ASA, AAS, SSS, and RHS. Prove Theorem 7.2: angles opposite to equal sides of an isosceles triangle are equal. Study triangle inequalities: the sum of any two sides of a triangle is strictly greater than the third side.',
    keyConcepts: [
      { title: 'CPCTC Principle', detail: 'Corresponding Parts of Congruent Triangles are Congruent (CPCTC) allows deduction of unknown side lengths and angle measures.' },
      { title: 'RHS Congruence Criterion', detail: 'If the hypotenuse and one side of a right-angled triangle equal the hypotenuse and side of another right triangle, the triangles are congruent.' }
    ],
    readingSections: [
      {
        heading: '1. Why SSA is Not a Valid Congruence Criterion',
        body: 'Side-Side-Angle (SSA) does not guarantee congruence because the non-included angle allows two distinct triangles to be constructed (known as the ambiguous case in trigonometry).',
        tip: 'The side opposite the largest angle in any triangle is always the longest side.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 8,
    title: 'Quadrilaterals (Parallelogram Theorems & Mid-Point Theorem)',
    tagline: 'Opposite sides/angles of parallelograms, diagonal bisectors, and the Mid-Point Theorem',
    summary: 'Explore four-sided polygons! Prove that a diagonal divides a parallelogram into two congruent triangles. Deduce that opposite sides and opposite angles are equal, and diagonals bisect each other. Prove the fundamental Mid-Point Theorem: the line segment joining the mid-points of two sides of a triangle is parallel to the third side and equal to half of it.',
    keyConcepts: [
      { title: 'The Mid-Point Theorem', detail: 'In △ABC, if D and E are midpoints of AB and AC, then DE ∥ BC and DE = ½ BC.' },
      { title: 'Special Parallelograms', detail: 'A rhombus has perpendicular diagonals; a rectangle has equal diagonals; a square has equal perpendicular diagonals.' }
    ],
    readingSections: [
      {
        heading: '1. Application of the Mid-Point Theorem',
        body: 'The quadrilateral formed by joining the mid-points of the sides of ANY arbitrary quadrilateral taken in order is ALWAYS a parallelogram (Varignon’s Theorem)!',
        tip: 'A quadrilateral is a parallelogram if one pair of opposite sides is both equal and parallel.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 9,
    title: 'Circles (Chords, Subtended Angles & Cyclic Quadrilaterals)',
    tagline: 'Perpendicular from centre bisects chord, angle at centre is double angle at circumference, and cyclic quadrilaterals',
    summary: 'Study circular geometry! Prove that the perpendicular from the centre of a circle to a chord bisects the chord. Prove Theorem 9.7: the angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle. Master cyclic quadrilaterals where opposite angles sum to 180°.',
    keyConcepts: [
      { title: 'Central Angle Theorem', detail: 'Angle subtended by an arc at the center is double the angle subtended at any point on the circumference: ∠AOB = 2∠APB.' },
      { title: 'Cyclic Quadrilateral Theorem', detail: 'The sum of either pair of opposite angles of a cyclic quadrilateral is 180° (∠A + ∠C = 180°).' }
    ],
    readingSections: [
      {
        heading: '1. Angles in the Same Segment',
        body: 'Angles subtended by the same chord in the same segment of a circle are equal. Furthermore, an angle in a semicircle is always a right angle (90°)!',
        tip: 'Equal chords of a circle are equidistant from the centre.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 10,
    title: 'Heron’s Formula (Area of Scalene Triangles & Polygons)',
    tagline: 'Hero of Alexandria, semi-perimeter s = (a+b+c)/2, and Area = √[s(s-a)(s-b)(s-c)]',
    summary: 'Calculate triangle areas without knowing altitudes! Derive Heron of Alexandria’s formula: Area = √[s(s - a)(s - b)(s - c)], where semi-perimeter s = (a + b + c)/2 and a, b, c are side lengths. Apply Heron’s formula to determine land parcel areas, traffic signage tiles, and quadrilaterals by splitting them along a diagonal.',
    keyConcepts: [
      { title: 'Heron’s Area Formula', detail: 'Area = √[s(s - a)(s - b)(s - c)], where semi-perimeter s = (a + b + c) / 2.' },
      { title: 'Equilateral Triangle Derivation', detail: 'Using Heron’s formula with a = b = c yields Area = (√3/4)a², matching altitude trigonometry.' }
    ],
    readingSections: [
      {
        heading: '1. Historical Significance in Greek Alexandria',
        body: 'Hero of Alexandria developed this formula around 60 AD to survey irregular agricultural fields after the annual Nile River floods washed away boundary markers.',
        tip: 'Always verify if triangle inequality holds (a + b > c) before computing square roots.'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 11,
    title: 'Surface Areas and Volumes (Cone, Sphere & Hemisphere)',
    tagline: 'Slant height l = √(r²+h²), cone CSA πrl, sphere surface area 4πr², and sphere volume 4/3 πr³',
    summary: 'Master 3D curved surfaces! Derive slant height l = √(r² + h²) for a right circular cone. Calculate curved surface area (CSA = πrl), total surface area [TSA = πr(l + r)], and volume (V = ⅓πr²h). Calculate sphere surface area (4πr²), sphere volume (⁴/₃πr³), hemisphere CSA (2πr²), and hemisphere TSA (3πr²).',
    keyConcepts: [
      { title: 'Cone Formulae', detail: 'CSA = πrl; TSA = πr(l + r); Volume = ⅓πr²h (exactly one-third of a cylinder with identical radius and height).' },
      { title: 'Sphere & Hemisphere', detail: 'Sphere: Surface Area = 4πr², Volume = ⁴/₃πr³; Hemisphere: CSA = 2πr², TSA = 3πr², Volume = ⅔πr³.' }
    ],
    readingSections: [
      {
        heading: '1. Archimedes and the Sphere-Cylinder Relationship',
        body: 'Archimedes considered his greatest mathematical discovery to be that a sphere has two-thirds the volume and surface area of the smallest cylinder that circumscribes it.',
        tip: 'Remember that slant height l of a cone is the hypotenuse: l = √(r² + h²).'
      }
    ]
  }),
  buildChapter(9, 'c9-math', 'Mathematics', {
    chapterNumber: 12,
    title: 'Statistics (Data Presentation, Histograms & Frequency Polygons)',
    tagline: 'Continuous class intervals, class marks, histograms with varying widths, and frequency polygons',
    summary: 'Transform raw data into meaningful visual graphs! Construct frequency distribution tables. Build histograms for continuous class intervals where rectangle areas represent frequencies. Graph frequency polygons by joining consecutive class midpoints (class marks = [lower limit + upper limit]/2) to compare multiple distributions simultaneously.',
    keyConcepts: [
      { title: 'Histograms vs Bar Graphs', detail: 'Bar graphs have uniform gaps representing discrete categories; histograms have contiguous adjacent bars representing continuous numerical intervals.' },
      { title: 'Adjusted Frequency for Varying Widths', detail: 'When class widths vary, adjusted frequency = (Minimum class width / Class width) × Frequency, ensuring area represents frequency correctly.' }
    ],
    readingSections: [
      {
        heading: '1. Constructing Frequency Polygons',
        body: 'Plot points (Class Mark, Frequency) and connect them with straight line segments. To close the polygon, connect both ends to the horizontal axis at the midpoints of hypothetical adjacent classes with frequency 0.',
        tip: 'Class mark represents the central midpoint of each interval: (L₁ + L₂) / 2.'
      }
    ]
  })
];

const scienceChapters = [
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 1,
    title: 'Matter in Our Surroundings (States & Phase Changes)',
    tagline: 'Kinetic theory of matter, sublimation, latent heat of fusion/vaporization, and cooling by evaporation',
    summary: 'Investigate the particulate nature of matter! Explain states of matter (solid, liquid, gas) via intermolecular forces and kinetic motion. Measure temperature in Kelvin (K = °C + 273). Master latent heat of fusion and latent heat of vaporization (temperature remains constant during phase change). Explain sublimation in camphor and why evaporation causes cooling.',
    keyConcepts: [
      { title: 'Latent Heat of Vaporization', detail: 'The amount of heat energy required to change 1 kg of liquid into gas at atmospheric pressure at its boiling point without any change in temperature.' },
      { title: 'Evaporative Cooling', detail: 'High kinetic energy surface molecules escape as vapor, lowering the average kinetic energy and temperature of the remaining liquid.' }
    ],
    readingSections: [
      {
        heading: '1. Why Steam Burns Hurt More Than Boiling Water',
        body: 'Both steam and boiling water are at 100°C, but steam particles have absorbed an extra 2.26 × 10⁶ J/kg of latent heat of vaporization, transferring far more thermal energy upon contact with skin.',
        tip: 'Earthen pots (Matkas) keep water cool during summer due to continuous evaporation through microscopic pores.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 2,
    title: 'Is Matter Around Us Pure? (Solutions, Colloids & Mixtures)',
    tagline: 'Elements, compounds, homogeneous vs heterogeneous, Tyndall effect, and chromatography',
    summary: 'Distinguish pure chemical substances from mixtures! Differentiate elements and chemical compounds from homogeneous solutions and heterogeneous suspensions/colloids. Observe the Tyndall scattering effect in colloidal systems (milk, fog). Master separation techniques: fractional distillation, centrifugation, paper chromatography, and crystallization.',
    keyConcepts: [
      { title: 'The Tyndall Effect in Colloids', detail: 'Scattering of visible light beam by microscopic colloidal particles suspended in a medium, making the path of light illuminated.' },
      { title: 'Fractional Distillation', detail: 'Separating miscible liquids with boiling point differences less than 25 K using a fractionating column filled with glass beads.' }
    ],
    readingSections: [
      {
        heading: '1. True Solution vs Colloid vs Suspension',
        body: 'In true solutions, solute particles are smaller than 1 nm and pass through filter paper. In colloids, particles measure 1-1000 nm and scatter light. In suspensions, particles exceed 1000 nm and settle under gravity.',
        tip: 'Alloys like brass (70% copper, 30% zinc) are homogeneous solid solutions.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 3,
    title: 'Atoms and Molecules (Mole Concept & Chemical Formulae)',
    tagline: 'Lavoisier’s mass conservation, Proust’s constant proportions, Dalton’s atomic theory, and Avogadro’s number',
    summary: 'Delve into quantitative atomic theory! Validate the Law of Conservation of Mass and Law of Definite Proportions. Review Dalton’s atomic postulates. Learn chemical symbols (Berzelius), atomic mass units (amu = 1/12th carbon-12 mass), criss-cross valency method for chemical formulae, and Avogadro’s mole concept (1 mole = 6.022 × 10²³ particles).',
    keyConcepts: [
      { title: 'Law of Definite Proportions', detail: 'In a chemical compound, elements are always present in definite proportions by mass regardless of the source or method of preparation.' },
      { title: 'The Mole Concept', detail: 'One mole of any substance contains exactly 6.022 × 10²³ elementary entities (Avogadro constant N_A) and has a mass equal to its molar mass in grams.' }
    ],
    readingSections: [
      {
        heading: '1. Writing Chemical Formulae via Criss-Cross Valency',
        body: 'Write symbols of constituent elements alongside their valencies (e.g., Al valency 3, O valency 2). Criss-crossing the valencies yields Al₂O₃, balancing electrical charges.',
        tip: 'The mass of one mole of water (H₂O) is exactly (2×1 + 16) = 18 grams.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 4,
    title: 'Structure of the Atom (Subatomic Particles & Electron Shells)',
    tagline: 'Cathode rays (J.J. Thomson), Rutherford’s gold foil experiment, Bohr’s orbits, and isotopes/isobars',
    summary: 'Journey into subatomic structure! Trace J.J. Thomson’s plum pudding model, Ernest Rutherford’s alpha particle scattering experiment discovering the dense positive nucleus, and Niels Bohr’s discrete quantized electron energy levels (K, L, M, N). Write electronic configurations up to atomic number 20 (Bohr-Bury scheme). Contrast isotopes (same Z, different A) with isobars.',
    keyConcepts: [
      { title: 'Rutherford’s Alpha Scattering Discovery', detail: 'Most alpha particles passed undeflected, but 1 in 12,000 rebounded at 180°, proving that the positive charge and nearly all mass are concentrated in a tiny nucleus.' },
      { title: 'Bohr-Bury Electron Capacity Rule', detail: 'The maximum number of electrons in shell n is 2n² (K=2, L=8, M=18, N=32), with the outermost valence shell holding a maximum of 8.' }
    ],
    readingSections: [
      {
        heading: '1. Medical and Industrial Uses of Isotopes',
        body: 'Isotope Cobalt-60 is used in radiation therapy for cancer treatment, Uranium-235 fuels nuclear power reactors, and Iodine-131 treats thyroid disorders.',
        tip: 'Isobars are atoms of different chemical elements having the same mass number (e.g., Calcium-40 and Argon-40).'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 5,
    title: 'The Fundamental Unit of Life (Cell Organelles & Membrane Transport)',
    tagline: 'Robert Hooke, cell theory, prokaryotic vs eukaryotic cells, osmosis, mitochondria, and Golgi apparatus',
    summary: 'Examine cytological biology! Review cell theory (Schleiden, Schwann, Virchow: "Omnis cellula-e-cellula"). Compare prokaryotic vs eukaryotic cells. Study the selectively permeable fluid-mosaic plasma membrane and osmosis in hypotonic/hypertonic media. Investigate organelles: Nucleus (chromatin DNA), Mitochondria (ATP powerhouse), Ribosomes, Lysosomes (suicide bags), and Plastids.',
    keyConcepts: [
      { title: 'Mitochondria: Cellular Powerhouse', detail: 'Mitochondria generate ATP (adenosine triphosphate) via aerobic cellular respiration and possess their own circular DNA and 70S ribosomes.' },
      { title: 'Endocytosis and Osmosis', detail: 'Amoeba engulfs food particles via flexible plasma membrane endocytosis; water moves across selectively permeable membranes down concentration gradients.' }
    ],
    readingSections: [
      {
        heading: '1. Why Lysosomes are Termed "Suicide Bags"',
        body: 'Lysosomes contain potent hydrolytic digestive enzymes manufactured by RER. When a cell is severely damaged or metabolic function ceases, lysosomes burst, releasing enzymes that digest their own cell.',
        tip: 'Plant cells have a rigid cellulose cell wall outside the plasma membrane, enabling them to withstand hypotonic turgor pressure without bursting.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 6,
    title: 'Tissues (Plant Meristems, Permanent Tissues & Animal Tissues)',
    tagline: 'Apical/intercalary/lateral meristems, xylem & phloem vascular bundles, epithelial, connective, and neuron',
    summary: 'Study histology and multicellular organization! In plants, examine actively dividing meristematic tissues (apical, lateral cambium, intercalary) and specialized permanent tissues: Parenchyma, Collenchyma, Sclerenchyma, and complex vascular tissues (Xylem water conduction, Phloem translocation). In animals, classify Epithelial, Connective (blood, bone, cartilage), Muscular (striated, smooth, cardiac), and Nervous tissue.',
    keyConcepts: [
      { title: 'Complex Permanent Tissues', detail: 'Xylem conducts water and minerals unidirectionally via dead tracheids/vessels; Phloem translocates photosynthesized sucrose bidirectionally via living sieve tubes.' },
      { title: 'Cardiac Muscle Tissue', detail: 'Involuntary, striated, cylindrical, branched muscle fibers with intercalated discs that contract rhythmically throughout life without fatigue.' }
    ],
    readingSections: [
      {
        heading: '1. Blood as a Fluid Connective Tissue',
        body: 'Blood consists of a fluid plasma matrix containing suspended RBCs (erythrocytes carrying oxygen via hemoglobin), WBCs (leukocytes defending against pathogens), and platelets (thrombocytes enabling blood clotting).',
        tip: 'Sclerenchyma tissues (found in coconut husks and nutshells) have thick lignified walls with no intercellular spaces.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 7,
    title: 'Motion (Kinematics & Equations of Motion)',
    tagline: 'Distance vs displacement, speed, velocity, acceleration, and graphical derivation of v = u + at, s = ut + ½at²',
    summary: 'Analyze physical motion along a straight line! Differentiate scalar distance from vector displacement. Define uniform speed, instantaneous velocity, and uniform acceleration [a = (v - u)/t]. Interpret distance-time and velocity-time graphs. Graphically derive the three kinematic equations of motion: v = u + at; s = ut + ½at²; v² = u² + 2as. Study uniform circular motion.',
    keyConcepts: [
      { title: 'Three Kinematic Equations', detail: '1) v = u + at; 2) s = ut + ½at²; 3) v² = u² + 2as, valid strictly for motion with uniform acceleration along a straight path.' },
      { title: 'Area Under Velocity-Time Graph', detail: 'The geometric area enclosed under a velocity-time graph represents the total displacement traveled by the moving object.' }
    ],
    readingSections: [
      {
        heading: '1. Uniform Circular Motion is an Accelerated Motion',
        body: 'Even if an object moves around a circular path at a constant speed, its direction of travel changes continuously at every single point on the circle. Because velocity is a vector, this continuous directional change constitutes acceleration (centripetal acceleration a = v²/r).',
        tip: 'Slope of a distance-time graph yields speed; slope of a velocity-time graph yields acceleration.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 8,
    title: 'Force and Laws of Motion (Newton’s Laws & Momentum Conservation)',
    tagline: 'Inertia (First Law), F = ma (Second Law), Action-Reaction (Third Law), and rocket recoil',
    summary: 'Master classical Newtonian dynamics! State Newton’s First Law (Law of Inertia) and relate inertia to mass. State Newton’s Second Law: rate of change of momentum is proportional to applied force, deriving F = ma. State Newton’s Third Law: to every action there is an equal and opposite reaction acting on different bodies. Prove the Law of Conservation of Momentum (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).',
    keyConcepts: [
      { title: 'Newton’s Second Law Derivation', detail: 'Force F ∝ (mv - mu)/t = m(v - u)/t = ma. In SI units with k=1: F = ma (1 Newton = 1 kg·m/s²).' },
      { title: 'Conservation of Linear Momentum', detail: 'In an isolated system with zero net external force, total linear momentum remains invariant before and after collision.' }
    ],
    readingSections: [
      {
        heading: '1. Why a Cricket Fielder Pulls Hands Backward When Catching',
        body: 'By pulling hands backward with the ball, the fielder increases the time duration t over which the ball’s momentum drops to zero. Since F = Δp/t, increasing time decreases the impact force felt on the hands.',
        tip: 'When a gun fires a bullet, the gun recoils backward with equal momentum, but lower velocity due to its greater mass.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 9,
    title: 'Gravitation & Archimedes’ Principle',
    tagline: 'Universal Law of Gravitation F = G(m₁m₂)/r², value of g, free fall, mass vs weight, and buoyancy',
    summary: 'Discover cosmic and terrestrial gravity! State Newton’s Universal Law of Gravitation F = G(M·m)/d² (G = 6.674 × 10⁻¹¹ N·m²/kg²). Calculate acceleration due to gravity g = GM/R² (9.8 m/s² on Earth, 1/6th on the Moon). Differentiate constant invariant mass (kg) from variable weight (W = mg in Newtons). Explore fluid pressure, buoyant force, and Archimedes’ Principle.',
    keyConcepts: [
      { title: 'Universal Gravitation Law', detail: 'Every particle attracts every other particle with a force proportional to product of masses and inversely proportional to square of distance: F = G(m₁m₂)/r².' },
      { title: 'Archimedes’ Principle', detail: 'When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced by the body.' }
    ],
    readingSections: [
      {
        heading: '1. Why an Iron Nail Sinks But a Huge Steel Ship Floats',
        body: 'An iron nail displaces a tiny volume of water whose weight is far less than the nail’s own weight, causing it to sink. A ship’s hollow hull displaces a massive volume of water whose weight equals the ship’s total weight, achieving floating equilibrium.',
        tip: 'In free fall under vacuum, a feather and a bowling ball fall with identical acceleration and reach the ground together!'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 10,
    title: 'Work and Energy (Kinetic, Potential & Conservation Law)',
    tagline: 'Scientific work W = F·s, Kinetic Energy ½mv², Potential Energy mgh, and Law of Conservation of Energy',
    summary: 'Investigate energy transformations! Define scientific work: W = F · s cos θ (measured in Joules). Derive translational Kinetic Energy E_k = ½mv² from work-energy theorem. Derive gravitational Potential Energy E_p = mgh. Prove the Law of Conservation of Energy: total mechanical energy (E_k + E_p) remains constant during free fall. Define rate of doing work as Power (P = W/t in Watts).',
    keyConcepts: [
      { title: 'Scientific Definition of Work', detail: 'Work is done only when an applied force causes displacement in the direction of the force. If displacement is zero or perpendicular, work done is zero.' },
      { title: 'Law of Conservation of Energy', detail: 'Energy can neither be created nor destroyed; it can only be transformed from one form to another. Total energy of the universe remains constant.' }
    ],
    readingSections: [
      {
        heading: '1. Why a Coolie Carrying Luggage on His Head Does Zero Work',
        body: 'According to physics, the coolie applies an upward vertical force against gravity while walking horizontally. Since force is perpendicular to displacement (angle θ = 90°, cos 90° = 0), work done against gravity is strictly zero!',
        tip: 'One kilowatt-hour (1 kWh) equals 3,600,000 Joules (3.6 × 10⁶ J).'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 11,
    title: 'Sound (Propagation, Longitudinal Waves & Ultrasound Applications)',
    tagline: 'Compressions and rarefactions, frequency & pitch, speed of sound, echoes, sonar, and human ear anatomy',
    summary: 'Explore acoustics and mechanical wave propagation! Explain sound as a longitudinal wave requiring a material medium (cannot travel in vacuum). Characterize sound waves: Amplitude (loudness), Frequency (pitch), and Wavelength. Calculate speed v = νλ. Understand reflection of sound, reverberation, echoes (minimum distance 17.2 m at 22°C), ultrasonic medical applications (echocardiography, SONAR), and human ear pinna-cochlea mechanics.',
    keyConcepts: [
      { title: 'Longitudinal Nature of Sound Waves', detail: 'Medium particles oscillate parallel to the direction of wave propagation, creating alternating regions of high pressure (compressions) and low pressure (rarefactions).' },
      { title: 'SONAR (Sound Navigation and Ranging)', detail: 'Transmitter emits ultrasonic pulses into seawater; measuring echo return time t allows calculating ocean depth: 2d = v · t.' }
    ],
    readingSections: [
      {
        heading: '1. Conditions for Hearing a Distinct Echo',
        body: 'The sensation of sound persists in the human brain for approximately 0.1 seconds. For a distinct echo to be heard, the reflected sound must reach the ear at least 0.1 s after the direct sound, requiring an obstacle at least 17.2 m away.',
        tip: 'Bats navigate and hunt prey in pitch darkness using ultrasonic echolocation.'
      }
    ]
  }),
  buildChapter(9, 'c9-sci', 'Science', {
    chapterNumber: 12,
    title: 'Improvement in Food Resources (Crop Management & Animal Husbandry)',
    tagline: 'Hybridization, macronutrients vs micronutrients, biological pest control, dairy cattle, and composite fish culture',
    summary: 'Examine sustainable agro-technologies and animal husbandry! Review crop variety improvement for high yield and biotic/abiotic resistance. Compare organic manure (humus) with chemical fertilizers. Master crop protection (weeding, bio-pesticides) and cropping patterns (mixed cropping, intercropping, crop rotation). Study animal husbandry: cattle farming, poultry farming, apiculture (Italian bee Apis mellifera), and composite fish culture.',
    keyConcepts: [
      { title: 'Intercropping vs Mixed Cropping', detail: 'Mixed cropping sows two crops simultaneously without set row patterns; intercropping grows crops in alternating rows (e.g. soybean + maize) to optimize soil nutrients.' },
      { title: 'Composite Fish Culture', detail: 'Cultivating five or six fish species in a single pond utilizing different feeding niches: Catlas (surface), Rohus (middle column), Mrigals & Common Carp (bottom).' }
    ],
    readingSections: [
      {
        heading: '1. Plant Nutrition: Macro vs Micronutrients',
        body: 'Plants require 16 essential nutrients. Carbon and oxygen come from air; hydrogen from water; 6 macronutrients (N, P, K, Ca, Mg, S) and 7 micronutrients (Fe, Mn, B, Zn, Cu, Mo, Cl) come from soil.',
        tip: 'Italian honeybees (Apis mellifera) are favored for commercial apiculture because of high honey collection capacity and gentle nature.'
      }
    ]
  })
];

const sstChapters = [
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 1,
    title: 'The French Revolution (1789)',
    tagline: 'Storming of the Bastille, Estates-General, Reign of Terror (Robespierre), and Declaration of Rights of Man',
    summary: 'Analyze the landmark revolution that created modern political ideals! Deconstruct French Old Regime society into Three Estates (Clergy, Nobility, Third Estate peasants/bourgeoisie paying all taxes). Trace the storming of the Bastille on 14 July 1789, the abolition of feudalism, the Tennis Court Oath, the National Assembly, the Reign of Terror under Maximilien Robespierre’s Jacobins, and the rise of Napoleon Bonaparte.',
    keyConcepts: [
      { title: 'Three Estates of France', detail: 'First and Second Estates held feudal privileges and tax exemptions; the Third Estate bore the entire tax burden (taille and tithes).' },
      { title: 'Declaration of Rights of Man (1789)', detail: 'Proclaimed universal liberty, equality before the law, freedom of speech, and popular sovereignty as fundamental human rights.' }
    ],
    readingSections: [
      {
        heading: '1. The Symbolic Fall of the Bastille',
        body: 'On 14 July 1789, armed citizens stormed the medieval fortress-prison of the Bastille. Though it held only seven prisoners, the Bastille stood as the despised symbol of royal despotism, marking the dawn of democratic revolution.',
        tip: 'Olympe de Gouges wrote the Declaration of the Rights of Woman and the Female Citizen, protesting female exclusion.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 2,
    title: 'Socialism in Europe and the Russian Revolution',
    tagline: 'Karl Marx, Lenin, Bolsheviks, 1917 February and October Revolutions, and Stalin’s Collectivisation',
    summary: 'Investigate the birth of the world’s first socialist workers’ state! Trace socialist ideologies of Karl Marx and Friedrich Engels. Examine Tsar Nicholas II’s autocracy, the 1905 Bloody Sunday massacre, and Russia’s collapse during World War I. Analyze the 1917 February Revolution overthrowing the Tsar and Vladimir Lenin’s Bolshevik October Revolution. Examine Joseph Stalin’s rapid industrialization and peasant Kolkhoz collectivization.',
    keyConcepts: [
      { title: 'Lenin’s April Theses', detail: 'Three radical demands: ending participation in WWI, transferring agricultural land to peasants, and nationalizing commercial banks.' },
      { title: 'Stalin’s Collectivisation', detail: 'Forcible pooling of peasant landholdings into collective farms (Kolkhoz) to mechanize Soviet agriculture and crush wealthy Kulak resistance.' }
    ],
    readingSections: [
      {
        heading: '1. Petrograd Soviet and the Storming of Winter Palace',
        body: 'In October 1917, the Bolshevik Military Revolutionary Committee under Leon Trotsky seized telegraph stations, railways, and stormed the Winter Palace, deposing Alexander Kerensky’s provisional government.',
        tip: 'The Russian Revolution inspired anti-colonial liberation leaders across Asia and Africa, including Jawaharlal Nehru and Ho Chi Minh.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 3,
    title: 'Nazism and the Rise of Hitler',
    tagline: 'Weimar Republic, Treaty of Versailles, Hitler’s propaganda, Reichstag Fire Decree, and the Holocaust',
    summary: 'Examine the descent into fascist totalitarianism! Trace Germany’s economic humiliation under the 1919 Treaty of Versailles, hyperinflation, and the Great Depression. Analyze Adolf Hitler’s demagogic rise, Joseph Goebbels’ propaganda machine, the 1933 Reichstag Fire Decree suspending civil liberties, the Enabling Act establishing dictatorship, and the genocide of six million Jews in concentration death camps (the Holocaust).',
    keyConcepts: [
      { title: 'Enabling Act of 1933', detail: 'Suspended parliamentary democracy, enabling Hitler to bypass the Reichstag and rule Germany exclusively through dictatorial decrees.' },
      { title: 'Nazi Racial Ideology and Holocaust', detail: 'Pseudoscientific hierarchy exalting "Nordic Aryan" supremacy while orchestrating industrial extermination of European Jews, Roma, and dissidents.' }
    ],
    readingSections: [
      {
        heading: '1. Propaganda and Totalitarian Control',
        body: 'The Nazi regime controlled education, radio, cinema, and newspapers to brainwash youth into absolute obedience through the Hitler Youth, dehumanizing targeted minorities.',
        tip: 'Pastor Martin Niemöller wrote the famous confession: "First they came for the socialists, and I did not speak out..."'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 4,
    title: 'India - Size and Location',
    tagline: 'Latitudinal extent (8°4\'N to 37°6\'N), longitudinal extent (68°7\'E to 97°25\'E), Standard Meridian 82°30\'E, and maritime neighbors',
    summary: 'Survey India’s strategic geography on the Asian continent! Locate India entirely in the Northern and Eastern Hemispheres. Measure total land frontier (15,200 km) and coastline (7,516.6 km). Explain why Mirzapur’s 82°30’E longitude was chosen as the Standard Meridian for Indian Standard Time (IST). Highlight India’s central position bridging East Asia, Middle East, and Europe across the Indian Ocean.',
    keyConcepts: [
      { title: 'Standard Meridian of India', detail: '82°30\'E longitude passing through Mirzapur (UP) was selected as Indian Standard Time (IST) to avoid local time confusion between Gujarat and Arunachal (2-hour difference).' },
      { title: 'Strategic Maritime Position', detail: 'Protruding into the Indian Ocean, the Deccan peninsula connects sea trade routes of Europe and West Asia with Southeast and East Asia.' }
    ],
    readingSections: [
      {
        heading: '1. The Two-Hour Time Lag',
        body: 'Because India spans approximately 30° of longitude from west to east, and the Earth rotates 1° every 4 minutes (30 × 4 = 120 minutes), the sun rises two hours earlier in Arunachal Pradesh than in Gujarat!',
        tip: 'The Palk Strait and Gulf of Mannar separate India from its southern neighbor Sri Lanka.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 5,
    title: 'Physical Features of India (Relief & Physiographic Divisions)',
    tagline: 'Plate tectonics, Himalayas (Himadri, Himachal, Shiwaliks), Northern Plains (Bhabar, Terai, Bhangar, Khadar), and Peninsular Plateau',
    summary: 'Discover the geological birth and relief features of the Indian subcontinent! Explain the collision between the Indo-Australian Plate and Eurasian Plate uplifting the Tethys geosyncline into the Himalayas. Characterize the three Himalayan parallel ranges (Himadri, Himachal, Shiwaliks), the fertile Northern alluvial plains, the basaltic Peninsular Plateau (Western and Eastern Ghats), the Thar Desert, and coastal islands.',
    keyConcepts: [
      { title: 'Parallel Ranges of the Himalayas', detail: '1) Himadri (Great Himalayas): highest continuous peaks including Everest; 2) Himachal: rugged tourist ranges like Pir Panjal; 3) Shiwaliks: outer foothills composed of unconsolidated sediments.' },
      { title: 'Soil Zones of the Northern Plains', detail: 'Bhabar (porous pebble belt), Terai (marshy wet forest), Bhangar (older terrace alluvium with kankar), Khadar (newer fertile floodplains).' }
    ],
    readingSections: [
      {
        heading: '1. Western Ghats vs Eastern Ghats',
        body: 'Western Ghats are continuous, higher (averaging 900-1600 m), and can be crossed only through passes (Thal, Bhor, Pal Ghats). Eastern Ghats are discontinuous, lower (600 m), and dissected by east-flowing rivers.',
        tip: 'Anamudi (2,695 m) is the highest peak in Peninsular India, located in Kerala.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 6,
    title: 'Drainage Systems of India (Himalayan vs Peninsular Rivers)',
    tagline: 'Indus, Ganga, Brahmaputra, Godavari, Krishna, drainage basins, and National River Conservation Plan',
    summary: 'Map India’s river networks and freshwater hydrology! Differentiate perennial snow-fed Himalayan river systems (Indus, Ganga, Brahmaputra forming majestic gorges and deltas like Sundarbans) from rain-fed seasonal Peninsular river systems (Narmada and Tapi flowing west into Arabian Sea rift valleys; Mahanadi, Godavari, Krishna, Kaveri flowing east into Bay of Bengal). Review lake ecology and river pollution abatement.',
    keyConcepts: [
      { title: 'Himalayan vs Peninsular Rivers', detail: 'Himalayan rivers are perennial, have long meandering courses, and form vast deltas; Peninsular rivers are seasonal, have shorter fixed courses, and flow through stable rocky plateaus.' },
      { title: 'The Sundarbans Delta', detail: 'The world’s largest and fastest-growing river delta, formed by the confluence of the Ganga and Brahmaputra rivers, home to the Royal Bengal Tiger.' }
    ],
    readingSections: [
      {
        heading: '1. Rift Valley Drainage: Narmada and Tapi',
        body: 'Unlike most peninsular rivers that flow east into the Bay of Bengal, the Narmada and Tapi flow west through fault-line rift valleys, carving picturesque gorges (Marble Rocks at Bhedaghat) and emptying into the Arabian Sea via estuaries without deltas.',
        tip: 'The Godavari is known as the "Dakshin Ganga" due to its immense length (1,500 km) and large drainage basin.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 7,
    title: 'Climate (Monsoon Mechanism & Seasons of India)',
    tagline: 'Coriolis force, ITCZ, Jet Streams, El Niño, onset and withdrawal of monsoon, and burst of rainfall',
    summary: 'Decipher the climate engine of South Asia! Analyze factors governing India’s tropical monsoon climate: latitude, altitude, distance from sea, and upper-air westerly jet streams. Explain the thermal difference between land and ocean shifting the Inter-Tropical Convergence Zone (ITCZ) northward. Master the four seasons: Cold Weather (winter), Hot Weather (summer), Advancing Southwest Monsoon, and Retreating Monsoon.',
    keyConcepts: [
      { title: 'The Mechanism of the Indian Monsoon', detail: 'Intense heating of the Tibetan Plateau generates low pressure, while high pressure over the southern Indian Ocean drives moist southwest oceanic winds across India.' },
      { title: 'The Coriolis Effect & Ferrel’s Law', detail: 'An apparent deflection force caused by Earth’s rotation: deflecting winds to the right in the Northern Hemisphere and left in the Southern Hemisphere.' }
    ],
    readingSections: [
      {
        heading: '1. Why Mawsynram Receives the World’s Highest Rainfall',
        body: 'Located in the southern ranges of the Khasi Hills in Meghalaya, Mawsynram’s funnel-shaped mountain topography forces moisture-laden Bay of Bengal monsoon winds upward, triggering torrential orographic rainfall averaging 11,872 mm annually.',
        tip: 'Pre-monsoon showers in Kerala and Karnataka that help ripen mangoes are known locally as "Mango Showers".'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 8,
    title: 'What is Democracy? Why Democracy?',
    tagline: 'Free and fair elections, one person one vote one value, rule of law, and arguments for/against democracy',
    summary: 'Scrutinize political governance! Go beyond simple dictionary definitions ("rule by the people") to identify four mandatory institutional pillars: major decisions made by elected leaders, free and fair electoral choices, equal voting value (one person, one vote, one value), and government bound by basic constitutional law and minority rights. Critically debate arguments for and against democracy.',
    keyConcepts: [
      { title: 'Substantive Meaning of Democracy', detail: 'A democratic government cannot do whatever it likes simply because it won an election; it must respect basic civil rights, minority protections, and independent judiciary.' },
      { title: 'Why Democracy Enhances Human Dignity', detail: 'Democracy is based on political equality: the poorest and least educated citizen holds the same constitutional voting status as the richest and most educated.' }
    ],
    readingSections: [
      {
        heading: '1. Why China’s 1958 Famine Did Not Happen in Democratic India',
        body: 'Economist Amartya Sen observed that no major famine has ever taken place in an independent democratic country with a free press and opposition parties. India’s democratic responsiveness forced the government to act quickly during food shortages, unlike totalitarian China during the Great Leap Forward.',
        tip: 'Democracy is a method for resolving differences and conflicts through consensus rather than violence.'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 9,
    title: 'Constitutional Design (South Africa & Indian Constitution)',
    tagline: 'Apartheid struggle, Nelson Mandela, Constituent Assembly, Dr. B.R. Ambedkar, and the Preamble',
    summary: 'Study the creation of democratic constitutional foundations! Trace the non-racial democratic transition in South Africa following decades of Apartheid segregation. Examine how India’s Constituent Assembly (presided by Dr. Rajendra Prasad and drafted under Dr. B.R. Ambedkar) spent nearly three years debating and crafting the world’s longest written constitution. Analyze the profound philosophical values embedded in the Indian Preamble.',
    keyConcepts: [
      { title: 'The Preamble as the Soul of the Constitution', detail: 'Declares India to be a Sovereign, Socialist, Secular, Democratic Republic securing Justice, Liberty, Equality, and Fraternity for all citizens.' },
      { title: 'The Role of the Constituent Assembly', detail: 'Composed of 299 distinguished members from all communities who debated over 2,000 amendments with transparent public records (Constituent Assembly Debates).' }
    ],
    readingSections: [
      {
        heading: '1. Dr. B.R. Ambedkar’s Warning on Social Democracy',
        body: 'On 25 November 1949, Dr. Ambedkar warned: "On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality. We must remove this contradiction at the earliest possible moment."',
        tip: 'The Indian Constitution was adopted on 26 November 1949 and came into legal effect on 26 January 1950 (Republic Day).'
      }
    ]
  }),
  buildChapter(9, 'c9-sst', 'Social Science', {
    chapterNumber: 10,
    title: 'The Story of Village Palampur & People as Resource',
    tagline: 'Factors of production (land, labor, physical & human capital), Green Revolution, and education/health investment',
    summary: 'Introduce fundamental micro and macroeconomic concepts! Model a hypothetical farming village (Palampur) to identify four factors of production: Land (fixed resource), Labor, Physical Capital (working and fixed capital), and Human Capital (enterprise and skill). Examine the impacts of the Green Revolution (HYV seeds, tube wells, chemical fertilizers). Explore human capital formation through education and healthcare, and analyze types of unemployment.',
    keyConcepts: [
      { title: 'Four Factors of Production', detail: '1) Land; 2) Labor; 3) Physical Capital (machines, tools, seeds, raw materials); 4) Human Capital (knowledge and entrepreneurship that combines the other three).' },
      { title: 'Disguised vs Seasonal Unemployment', detail: 'Seasonal unemployment occurs when farmers cannot find work during off-seasons; disguised unemployment occurs when more people work in a family farm than required.' }
    ],
    readingSections: [
      {
        heading: '1. Japan’s Investment in Human Resources',
        body: 'Countries like Japan possessed virtually no natural mineral resources, yet became wealthy developed nations by investing heavily in the education, health, and technological expertise of their citizens.',
        tip: 'Educated parents invest more heavily in their children’s education and nutrition, creating a virtuous cycle of human capital.'
      }
    ]
  })
];

const englishChapters = [
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 1,
    title: 'The Fun They Had (Isaac Asimov) & The Road Not Taken (Robert Frost)',
    tagline: 'Margie and Tommy in year 2157, mechanical teacher telebooks, and Robert Frost’s yellow wood crossroads',
    summary: 'Ponder the future of learning and life choices! In 2157, eleven-year-old Margie reads an old printed paper book discovered by Tommy, astonished that children once gathered in real brick schoolhouses with human teachers and classmates. Paired with Robert Frost’s iconic poem "The Road Not Taken" reflecting on individuality and divergent life pathways.',
    keyConcepts: [
      { title: 'The Mechanical Teacher Dystopia', detail: 'Asimov presciently satirizes hyper-personalized screen learning that isolates children from social camaraderie and peer empathy.' },
      { title: 'Frost’s Crossroads Metaphor', detail: 'Two roads diverging in a yellow wood symbolizes life’s irreversible choices where taking the road less traveled makes all the difference.' }
    ],
    readingSections: [
      {
        heading: '1. Margie’s Nostalgia for the Past',
        body: 'Margie was thinking about how the kids must have loved it in the old days. She was thinking about the fun they had—laughing and shouting in the schoolyard, sitting together in the schoolroom, going home together at the end of the day.',
        tip: 'Both works explore how nostalgia and choice define our perception of happiness.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 2,
    title: 'The Sound of Music (Evelyn Glennie & Bismillah Khan) & Wind',
    tagline: 'Profoundly deaf percussionist Evelyn Glennie, Shehnai maestro Ustad Bismillah Khan, and Subramania Bharati’s wind',
    summary: 'Celebrate extraordinary musical perseverance and Indian classical art! Read Part I: Scottish percussionist Evelyn Glennie, who lost her hearing at age twelve, learns to feel acoustic vibrations through her bare feet and skin to perform with royal symphonies. Read Part II: Ustad Bismillah Khan elevates the Shehnai from royal naubat courts to classical global concert stages. Accompanied by Subramania Bharati’s "Wind".',
    keyConcepts: [
      { title: 'Feeling Music Beyond Physical Hearing', detail: 'Ron Forbes unlocked Evelyn’s gift by tuning two drums to different pitches, teaching her to perceive high notes above her waist and low notes below.' },
      { title: 'Bharati’s Wind as Life’s Adversity', detail: 'The fierce wind blows out weak fires but makes strong fires roar; build firm homes and resolute hearts to make the wind your ally.' }
    ],
    readingSections: [
      {
        heading: '1. Bismillah Khan’s Devotion to the Ganga',
        body: 'Ustad Bismillah Khan practiced for hours in solitary reflection by the banks of the River Ganga at Varanasi, drawing inspiration from the flowing currents to improvise ragas previously considered impossible on the Shehnai.',
        tip: 'Bismillah Khan was awarded India’s highest civilian honour, the Bharat Ratna, in 2001.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 3,
    title: 'The Little Girl (Katherine Mansfield) & Rain on the Roof (Coates Kinney)',
    tagline: 'Kezia’s fear of her strict father, torn birthday pin-cushion papers, and the soothing patter of raindrops',
    summary: 'Examine delicate child-parent psychological dynamics! Kezia is terrified of her towering, stern father. Attempting to make him a surprise birthday pin-cushion, she innocently tears up his important Port Authority speech papers to stuff the pillow, receiving a harsh ruler beating. Later, when her mother falls ill, her father tucks her into bed with tender warmth, helping her realize his stern exterior hides a big, loving heart.',
    keyConcepts: [
      { title: 'The Façade of Parental Sternness', detail: 'Kezia realizes her father is not a monster like the giant Mr. Macdonald, but an exhausted man carrying family responsibilities who loves her deeply.' },
      { title: 'Coates Kinney’s Melancholy Joy', detail: 'The rhythmic patter of rain on the shingles weaves a thousand dreamy fancies and revives affectionate memories of a loving mother.' }
    ],
    readingSections: [
      {
        heading: '1. Kezia’s Revelation in the Dark',
        body: '"What a big heart you’ve got, Father dear," whispered Kezia as she rested her head against his chest, hearing the steady beat of his heart.',
        tip: 'Patience and communication bridge generational misunderstandings between parents and children.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 4,
    title: 'A Truly Beautiful Mind (Albert Einstein) & The Lake Isle of Innisfree',
    tagline: 'Einstein’s pacifism, 1905 Annus Mirabilis papers, E = mc², warning to FDR on atomic weapons, and W.B. Yeats’s peace',
    summary: 'Discover the humanitarian mind of Albert Einstein! Disdaining the mechanical regimentation of Munich schools, Einstein thrives in Zurich, publishes his landmark Special Theory of Relativity (E = mc²), and wins the 1921 Nobel Prize in Physics. Horrified by the Nazi rise, he emigrates to America, urges President Roosevelt to develop atomic research before Germany, and spends his later years advocating for global peace. Paired with Yeats’s "Innisfree".',
    keyConcepts: [
      { title: 'Intellectual Independence', detail: 'Einstein’s breakthroughs stemmed from his childlike capacity to question basic assumptions about space and time that others took for granted.' },
      { title: 'Einstein’s Humanitarian Legacy', detail: 'Einstein was not merely a brilliant theoretical physicist, but a dedicated pacifist who agitated tirelessly for a world government and human freedom.' }
    ],
    readingSections: [
      {
        heading: '1. The Annus Mirabilis of 1905',
        body: 'Working as an obscure patent clerk in Bern, 26-year-old Einstein published four ground-breaking papers on the photoelectric effect, Brownian motion, special relativity, and mass-energy equivalence, revolutionizing modern physics forever.',
        tip: 'Einstein proposed a world government in an open letter to the United Nations after Hiroshima.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 5,
    title: 'My Childhood (Dr. A.P.J. Abdul Kalam) & No Men Are Foreign (James Kirkup)',
    tagline: 'Rameswaram island, communal harmony, Ramanadha Sastry, Sivasubramania Iyer, and James Kirkup’s universal brotherhood',
    summary: 'Step into the formative years of India’s "Missile Man" and 11th President, Dr. A.P.J. Abdul Kalam, in island Rameswaram! Learn how his humble parents inculcated honesty, self-discipline, and deep respect for all faiths. When a new teacher attempts to segregate Kalam from his Hindu friend Ramanadha Sastry, head priest Lakshmana Sastry reprimands him for spreading communal toxicity. Accompanied by James Kirkup’s anti-war poem "No Men Are Foreign".',
    keyConcepts: [
      { title: 'Communal Harmony and Respect', detail: 'Kalam grew up in an environment where Hindu temple priests and Muslim imams shared spiritual camaraderie and mutual reverence.' },
      { title: 'Kirkup’s Principle of Universal Humanity', detail: 'Beneath all uniforms and national flags, a single body breathes; we all walk the same earth and will rest beneath it.' }
    ],
    readingSections: [
      {
        heading: '1. Sivasubramania Iyer’s Quiet Reform',
        body: 'Kalam’s orthodox science teacher invited him home for a meal. When his wife refused to serve a Muslim boy in her ritual kitchen, Iyer served Kalam with his own hands and sat down beside him, gradually breaking down conservative social barriers through gentle conviction.',
        tip: 'Social reforms succeed through patient perseverance and personal moral courage.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 6,
    title: 'The Lost Child (Mulk Raj Anand) & The Adventures of Toto (Ruskin Bond)',
    tagline: 'Spring fair, toys and sweets, lost parents terror, and grandfather’s mischievous monkey Toto',
    summary: 'Experience Mulk Raj Anand’s touching portrayal of childhood emotional attachment! At a bustling village spring fair, a young boy pleads for toys, dragonflies, burfi sweets, and balloon garlands, but his parents urge him forward. When he turns around at the roundabout and finds his parents gone, the glamorous attractions lose all value; he weeps inconsolably, wanting only his mother and father. Coupled with Ruskin Bond’s humorous monkey tale "The Adventures of Toto".',
    keyConcepts: [
      { title: 'The Primacy of Parental Love', detail: 'The toys, sweets, and music that seemed irresistible are completely worthless to the child in the absence of parental security.' },
      { title: 'Bond’s Mischievous Animal Vignettes', detail: 'Toto the monkey takes hot water baths, shreds school blazers, and escapes from ticket collectors, showcasing Grandfather’s unconventional love for wildlife.' }
    ],
    readingSections: [
      {
        heading: '1. The Universal Grief of a Lost Child',
        body: 'A kind stranger lifted the crying child in his arms, offering him a balloon, horse ride, and flowers to soothe him. But the child turned his eyes away from the gifts and only sobbed: "I want my mother, I want my father!"',
        tip: 'Mulk Raj Anand captures the psychological vulnerability of childhood with tender empathy.'
      }
    ]
  }),
  buildChapter(9, 'c9-eng', 'English', {
    chapterNumber: 7,
    title: 'In the Kingdom of Fools (A.K. Ramanujan) & The Last Leaf (O. Henry)',
    tagline: 'Kannada folktale, inverted day and night, guru’s wisdom, and Behrman’s painted masterpiece saving Johnsy',
    summary: 'Delight in rich storytelling! In A.K. Ramanujan’s whimsical Kannada folktale, a foolish king decrees everyone must sleep by day and work by night, selling all goods for a single duddu. A wise guru warns his disciple to flee, returning later to cleverly trick the foolish king and minister into executing themselves! Paired with O. Henry’s masterpiece "The Last Leaf" where an old, penniless artist paints a leaf on a wall in the freezing rain to save a dying girl.',
    keyConcepts: [
      { title: 'The Danger of Associating with Fools', detail: 'The guru’s adage: "You cannot predict what fools will do to you next; immediate cheap pleasure often leads to sudden disaster."' },
      { title: 'Behrman’s Ultimate Sacrifice in "The Last Leaf"', detail: 'Old Behrman dies of pneumonia after spending his final stormy night painting his masterpiece on the ivy vine, giving Johnsy the will to survive.' }
    ],
    readingSections: [
      {
        heading: '1. The Painted Leaf That Never Fell',
        body: '"Look out the window, Johnsy, at the last ivy leaf on the wall. Didn’t you wonder why it never fluttered or moved when the wind blew? Ah, darling, that is Behrman’s masterpiece—he painted it there the night the last leaf fell."',
        tip: 'Selfless artistic devotion has the power to restore human hope and defeat despair.'
      }
    ]
  })
];

export const class9Curriculum: Subject[] = [
  {
    id: 'c9-math',
    name: 'Mathematics',
    code: 'MATH-901',
    iconName: 'Calculator',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-800',
      gradient: 'from-amber-500 to-orange-500'
    },
    description: 'Complete 12-chapter Class 9 syllabus: Number Systems, Polynomials, Coordinate Geometry, Linear Equations, Euclid’s Geometry, Lines & Angles, Triangles, Quadrilaterals, Circles, Heron’s Formula, Surface Areas & Volumes, and Statistics.',
    chapters: mathChapters
  },
  {
    id: 'c9-sci',
    name: 'Science (Physics, Chemistry, Biology)',
    code: 'SCI-901',
    iconName: 'Atom',
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      gradient: 'from-cyan-500 to-blue-600'
    },
    description: 'Complete 12-chapter syllabus: Matter in Surroundings, Pure Matter, Atoms & Molecules, Atomic Structure, Cell Unit of Life, Tissues, Motion, Forces & Laws, Gravitation, Work & Energy, Sound, and Food Resources.',
    chapters: scienceChapters
  },
  {
    id: 'c9-sst',
    name: 'Social Science (History, Geography, Political Science, Economics)',
    code: 'SST-901',
    iconName: 'Globe',
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      gradient: 'from-blue-500 to-indigo-600'
    },
    description: 'Complete Class 9 syllabus: French Revolution, Russian Revolution, Nazism, India Size & Location, Physical Features, Drainage, Climate, What is Democracy, Constitutional Design, and Village Palampur.',
    chapters: sstChapters
  },
  {
    id: 'c9-eng',
    name: 'English Language & Literature (Beehive & Moments)',
    code: 'ENG-901',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-800',
      gradient: 'from-emerald-500 to-teal-600'
    },
    description: 'Complete Class 9 literature anthology: The Fun They Had, The Sound of Music, The Little Girl, Truly Beautiful Mind, My Childhood, The Lost Child, and In the Kingdom of Fools.',
    chapters: englishChapters
  }
];
