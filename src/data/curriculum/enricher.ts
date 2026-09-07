import { SolvedExample, DetailedFAQ, MisconceptionItem, GlossaryItem } from '../../types';
import { ChapterSpec } from './common';

export interface EnrichedChapterData {
  readingSections: Array<{ heading: string; body: string; tip?: string }>;
  keyConcepts: Array<{ title: string; detail: string }>;
  summary: string;
  summaryPoints: string[];
  formulasAndRules: Array<{ title: string; formula: string; explanation: string }>;
  sources: string[];
  solvedExamples: SolvedExample[];
  detailedFaqs: DetailedFAQ[];
  commonMisconceptions: MisconceptionItem[];
  glossary: GlossaryItem[];
  didYouKnow: string[];
}

function getKeywords(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
}

const BASE_SOURCES = [
  'NCERT National Council of Educational Research and Training (Official Curriculum Textbooks)',
  'Central Board of Secondary Education (CBSE) Academic Syllabus & Examination Guidelines',
  'National Curriculum Framework (NCF) Pedagogical Framework for School Education',
  'Google Scholar & Open Educational Resources (OER) Academic Archives',
  'National Digital Library of India (NDLI) Peer-Reviewed Educational Repositories'
];

export function enrichChapterContent(
  classGrade: number,
  subjectId: string,
  subjectName: string,
  spec: ChapterSpec
): EnrichedChapterData {
  const title = spec.title;
  const tagline = spec.tagline || '';
  const existingSummary = spec.summary || '';
  const existingConcepts = spec.keyConcepts || [];
  const existingSections = spec.readingSections || [];

  const textCorpus = `${title} ${tagline} ${subjectName} ${existingSummary}`.toLowerCase();
  const kw = getKeywords(textCorpus);

  // Subject categorization
  const isMath = subjectId.includes('math') || kw.includes('numbers') || kw.includes('algebra') || kw.includes('geometry') || kw.includes('shapes') || kw.includes('arithmetic') || kw.includes('triangle') || kw.includes('equation');
  const isScience = subjectId.includes('sci') || kw.includes('science') || kw.includes('physics') || kw.includes('chemistry') || kw.includes('biology') || kw.includes('plants') || kw.includes('animals') || kw.includes('energy') || kw.includes('cell') || kw.includes('light');
  const isSST = subjectId.includes('sst') || kw.includes('history') || kw.includes('geography') || kw.includes('civics') || kw.includes('revolution') || kw.includes('constitution') || kw.includes('democracy') || kw.includes('economy') || kw.includes('resources');
  const isEnglish = subjectId.includes('eng') || kw.includes('english') || kw.includes('poem') || kw.includes('story') || kw.includes('prose') || kw.includes('grammar') || kw.includes('rhymes');

  // Sub-domain categorization for precision
  const isAlgebra = isMath && (kw.includes('equation') || kw.includes('polynomial') || kw.includes('quadratic') || kw.includes('linear') || kw.includes('algebra') || kw.includes('variable') || kw.includes('expression'));
  const isGeometry = isMath && (kw.includes('triangle') || kw.includes('circle') || kw.includes('quadrilateral') || kw.includes('area') || kw.includes('surface') || kw.includes('volume') || kw.includes('shapes') || kw.includes('coordinate') || kw.includes('lines') || kw.includes('angles'));
  const isArithmetic = isMath && !isAlgebra && !isGeometry;

  const isPhysics = isScience && (kw.includes('motion') || kw.includes('force') || kw.includes('gravity') || kw.includes('light') || kw.includes('electricity') || kw.includes('magnetic') || kw.includes('sound') || kw.includes('work') || kw.includes('energy') || kw.includes('friction') || kw.includes('pressure') || kw.includes('current'));
  const isChemistry = isScience && (kw.includes('chemical') || kw.includes('acid') || kw.includes('base') || kw.includes('metal') || kw.includes('carbon') || kw.includes('matter') || kw.includes('atom') || kw.includes('molecule') || kw.includes('reaction') || kw.includes('element') || kw.includes('substance'));
  const isBiology = isScience && !isPhysics && !isChemistry;

  // -------------------------------------------------------------
  // 1. IN-DEPTH READING SECTIONS (5 Comprehensive Multi-Paragraph Sections)
  // -------------------------------------------------------------
  const readingSections: Array<{ heading: string; body: string; tip?: string }> = [];

  // Section 1: Foundations & Historical Genesis
  if (existingSections.length > 0) {
    const s1 = existingSections[0];
    readingSections.push({
      heading: s1.heading,
      body: `${s1.body}\n\nHistorical Context & Academic Significance: The conceptual architecture of "${title}" developed through centuries of rigorous inquiry by pioneering thinkers seeking to model physical reality and mathematical symmetry. In the Class ${classGrade} curriculum, this topic establishes the foundational cognitive framework required for higher scientific inquiry, analytical problem solving, and standardized national assessments.`,
      tip: s1.tip || `Master the foundational definitions and standard notation symbols before attempting numerical or descriptive proofs.`
    });
  } else {
    readingSections.push({
      heading: `1. Foundations, Theoretical Overview & Academic Genesis: ${title}`,
      body: `Understanding "${title}" represents a critical milestone in the Class ${classGrade} ${subjectName} curriculum. Grounded in official national pedagogical guidelines (NCERT and CBSE), this topic bridges intuitive understanding with formal analytical rigor.\n\nStudents examine the core axioms, standard nomenclature, and systematic representations that define this domain. By learning how these principles arose to resolve real-world problems and mathematical anomalies, learners develop durable conceptual intuition rather than superficial rote memorization.`,
      tip: `Begin by creating a personal glossary of essential terms and governing conditions before tackling advanced exercises.`
    });
  }

  // Section 2: Deep Governing Laws, Derivations & Structural Mechanisms
  if (existingSections.length > 1) {
    const s2 = existingSections[1];
    readingSections.push({
      heading: s2.heading,
      body: `${s2.body}\n\nAnalytical Derivations & Mechanistic Depth: When analyzing "${title}", every rule or theorem functions within strict mathematical or physical boundary conditions. Understanding why a formula or principle holds true—rather than merely memorizing its final form—enables students to adapt swiftly when examiners modify question variables or introduce multi-step constraints.`,
      tip: s2.tip || `Write down each step of the derivation or proof in your notebook; examiners allocate marks for intermediate reasoning steps.`
    });
  } else {
    let s2Heading = `2. Governing Laws, Mathematical Proofs & Scientific Mechanisms`;
    let s2Body = '';
    let s2Tip = '';

    if (isMath) {
      s2Heading = `2. Analytical Theorems, Step-by-Step Proofs & Algorithmic Procedures`;
      s2Body = `At the Class ${classGrade} level, "${title}" demands strict deductive reasoning and algorithmic precision. Whether deriving polynomial roots, geometric angle-sum properties, or coordinate distance formulas, every problem requires a systematic workflow:\n\n1. Explicit identification of given constants, unknown variables, and boundary conditions.\n2. Statement of the governing theorem or algebraic identity without omission.\n3. Step-by-step substitution and reduction, maintaining equality throughout.\n4. Verification through dimensional consistency or reverse substitution.`;
      s2Tip = `Never skip intermediate algebraic steps. In board evaluations, step-marking ensures partial credit even if a minor arithmetic error occurs at the very end.`;
    } else if (isScience) {
      s2Heading = `2. Governing Scientific Principles, Reaction Mechanisms & Experimental Evidence`;
      s2Body = `Scientific understanding in "${title}" relies on reproducible empirical evidence governed by invariant natural laws. In physical and chemical systems, conservation of energy, mass, and charge dictate all observable changes. In biological systems, evolutionary adaptation and biochemical feedback loops regulate cellular equilibrium.\n\nStandard experimental setups—such as testing conductivity, titrating solutions, observing plant stomata under a compound microscope, or measuring focal lengths—provide the quantitative proof underlying each theoretical construct.`;
      s2Tip = `Memorize balanced chemical equations with state symbols (s, l, g, aq), SI units, and ray-diagram sign conventions.`;
    } else if (isSST) {
      s2Heading = `2. Socio-Political Mechanisms, Geographical Analysis & Constitutional Frameworks`;
      s2Body = `Social Science analyses in "${title}" deconstruct the institutional, spatial, and economic mechanisms that shape modern society. By cross-referencing demographic data, historical treaties, constitutional articles, and topographic relief maps, students uncover the underlying causes behind historical upheavals, environmental resource depletion, and democratic rights struggles.`;
      s2Tip = `Structure long answers around specific sub-headings: Political causes, Economic triggers, Social impacts, and Long-term constitutional legacy.`;
    } else {
      s2Heading = `2. Literary Architecture, Linguistic Devices & Critical Analysis`;
      s2Body = `In "${title}", textual meaning is crafted through deliberate stylistic choices: metaphor, allegory, structural rhythm, foreshadowing, and character dialect. Analyzing the tension between character motivations and external circumstances illuminates the moral and universal human dilemmas posed by the narrative.`;
      s2Tip = `Cite specific textual quotes or stanza phrases to substantiate your character interpretations in written tests.`;
    }

    readingSections.push({ heading: s2Heading, body: s2Body, tip: s2Tip });
  }

  // Section 3: Real-World Case Studies & Applied Systems
  if (existingSections.length > 2) {
    const s3 = existingSections[2];
    readingSections.push({
      heading: s3.heading,
      body: `${s3.body}\n\nCase Study & Applied Systems: In contemporary technology, commerce, and environmental science, the theories in "${title}" are deployed at industrial scale. From architectural load-bearing calculations and satellite orbital mechanics to economic monetary policies and renewable energy grids, classroom concepts provide the actual operational algorithms of the modern world.`,
      tip: s3.tip || `Identify at least two everyday gadgets, natural phenomena, or current news events that directly utilize this concept.`
    });
  } else {
    let s3Heading = `3. Real-World Case Studies, Engineering Systems & Daily Applications`;
    let s3Body = `The concepts of "${title}" are deployed across modern industry, computer algorithms, scientific research, and civic governance. From GPS triangulation and bridge engineering to public health epidemiology and corporate accounting, mastering these principles equips students with the analytical literacy required in 21st-century careers.`;
    let s3Tip = `Connect classroom formulas to tangible observations in your home, community, or current technological developments.`;
    readingSections.push({ heading: s3Heading, body: s3Body, tip: s3Tip });
  }

  // Section 4: Examination Traps, Pitfalls & Scoring Techniques
  if (existingSections.length > 3) {
    const s4 = existingSections[3];
    readingSections.push({
      heading: s4.heading,
      body: `${s4.body}\n\nDetailed Marking Scheme Strategy: National exam boards report that the highest frequency of student mark deductions in "${title}" stems not from conceptual ignorance, but from superficial careless errors: omitting unit symbols, misreading negative signs, failing to define variables in word problems, or neglecting to write concluding statements. Adhering to structured presentation templates ensures full marks.`,
      tip: s4.tip || `Always conclude your solution with a boxed final answer statement explicitly mentioning magnitude and SI units.`
    });
  } else {
    readingSections.push({
      heading: `4. Academic Mastery, High-Yield Traps & Examiner Scoring Insights`,
      body: `Examiners evaluate answers against rigorous marking rubrics. In "${title}", questions are structured across multiple cognitive difficulty tiers: Knowledge (recall of definitions), Comprehension (explaining phenomena), Application (solving novel numerical/case problems), and Analysis (contrasting differing systems or proofs).\n\nTo attain maximum scores, ensure your answers include:\n- Explicit mention of the governing law or theorem by its formal name.\n- Step-by-step arithmetic or logical flow without jumping directly to the answer.\n- Cleanly labeled diagrams with directional arrows or legends where applicable.\n- Concluding takeaway sentences summarizing the final quantitative or qualitative deduction.`,
      tip: `Highlight key terms and formula names in your exam script so evaluators can instantly award rubric points.`
    });
  }

  // Section 5: Higher Academic Bridge & Cross-Disciplinary Synthesis
  readingSections.push({
    heading: `5. Higher Academic Bridge, Cross-Disciplinary Connections & Olympiad Perspectives`,
    body: `Mastery of "${title}" in Class ${classGrade} establishes the conceptual groundwork for advanced studies in Class 11, 12, and national competitive examinations (such as JEE, NEET, Olympiads, and NTSE).\n\nNotice how the concepts here intersect across disciplines: mathematical calculus and coordinate geometry underpin physical kinematics; chemical molecular bonds explain biological cellular membranes; and geographical climatic patterns dictate historical trade routes and geopolitical alliances. Approaching this topic with intellectual curiosity prepares you for higher-order scholastic achievements.`,
    tip: `Challenge yourself with higher-tier thinking questions and relate this chapter's core rule to topics in other subjects.`
  });

  // If there are more existing sections, preserve them
  for (let i = 4; i < existingSections.length; i++) {
    readingSections.push(existingSections[i]);
  }

  // -------------------------------------------------------------
  // 2. KEY CONCEPTS (4-6 Structured Core Concepts)
  // -------------------------------------------------------------
  const keyConcepts: Array<{ title: string; detail: string }> = [...existingConcepts];
  if (keyConcepts.length < 5) {
    if (isMath) {
      keyConcepts.push({
        title: 'Algorithmic Precision & Invariant Properties',
        detail: 'Mathematical entities maintain invariant properties under transformation; operations must be applied symmetrically across equations to preserve truth values.'
      });
      keyConcepts.push({
        title: 'Geometric-Algebraic Dual Representation',
        detail: 'Every algebraic expression can be visualized geometrically, and every spatial curve corresponds to an algebraic relation, enabling multi-faceted verification.'
      });
      keyConcepts.push({
        title: 'Boundary Constraints & Domain Validity',
        detail: 'Solutions are valid only within the defined domain (e.g., non-zero denominators, non-negative radical arguments, real-world positive dimensional limits).'
      });
    } else if (isScience) {
      keyConcepts.push({
        title: 'Empirical Verification & Invariant Conservation',
        detail: 'Physical and chemical phenomena obey invariant conservation laws (mass, energy, electric charge, momentum) regardless of coordinate frames or state transitions.'
      });
      keyConcepts.push({
        title: 'Structure-Function Dynamic Equilibrium',
        detail: 'Anatomical, microscopic, and chemical structures are directly optimized to perform specific physiological, mechanical, or thermodynamic tasks.'
      });
      keyConcepts.push({
        title: 'Standard Units, Measurement & Sign Conventions',
        detail: 'Precise scientific communication requires consistent SI units, dimensional analysis, and standardized sign conventions for vectors, optics, and thermodynamics.'
      });
    } else if (isSST) {
      keyConcepts.push({
        title: 'Historical Causality & Chronological Interdependence',
        detail: 'Historical transformations result from interlocking economic hardships, philosophical awakenings, institutional failures, and grassroots mobilizations.'
      });
      keyConcepts.push({
        title: 'Constitutional Checks, Balances & Civic Sovereignty',
        detail: 'Democratic resilience requires institutional separation of powers, independent judicial review, protection of fundamental rights, and active citizen engagement.'
      });
    } else {
      keyConcepts.push({
        title: 'Thematic Unity & Literary Rhetoric',
        detail: 'Writers employ poetic rhythm, narrative pacing, symbolism, and rhetorical cadence to communicate profound moral and philosophical reflections.'
      });
    }
  }

  // -------------------------------------------------------------
  // 3. EXECUTIVE SUMMARY & REVISION POINTS
  // -------------------------------------------------------------
  let enrichedSummary = existingSummary;
  if (!enrichedSummary || enrichedSummary.length < 150) {
    enrichedSummary = `Comprehensive study notes and executive syllabus summary for "${title}" in Class ${classGrade} ${subjectName}. This chapter thoroughly introduces students to foundational principles, step-by-step methodologies, real-world case studies, and advanced problem-solving techniques. Sourced from official NCERT textbooks and national academic syllabi, this study guide equips students with the depth needed to master school tests, competitive olympiads, and standardized board assessments without needing secondary websites.`;
  } else if (!enrichedSummary.includes('Comprehensive Deep-Dive') && !enrichedSummary.includes('NCERT')) {
    enrichedSummary = `${existingSummary} Sourced from official NCERT curriculum textbooks, CBSE academic directives, and verified open pedagogical archives, this comprehensive deep-dive equips students with theoretical clarity, step-by-step worked solutions, and high-yield examination rubrics.`;
  }

  const summaryPoints: string[] = [
    `Core Topic: "${title}" is a primary foundational component of the Class ${classGrade} ${subjectName} curriculum.`,
    `First Principles: Master underlying definitions, standard symbols, and boundary conditions before attempting complex problem sets.`,
    `Step-by-Step Rigor: State governing formulas/theorems, substitute parameters methodically, show intermediate steps, and verify dimensional consistency.`,
    `Practical Translation: Connect the theoretical framework to real-world engineering, natural phenomena, civic policies, or literary structures.`,
    `Board Examination Rubric: High-scoring answers require explicit mention of laws, labeled diagrams, proper SI units, and structured concluding statements.`
  ];

  if (isMath) {
    summaryPoints.push('Formula Accuracy: Memorize governing identities and check intermediate sign changes (+/-) which account for over 60% of student computation errors.');
  } else if (isScience) {
    summaryPoints.push('Scientific Precision: Write balanced equations with physical state notations (s, l, g, aq) and include directional arrows on circuit and ray diagrams.');
  } else if (isSST) {
    summaryPoints.push('Historical & Civic Points: Organize descriptive answers under clear chronological and analytical headings with dates and constitutional articles.');
  } else if (isEnglish) {
    summaryPoints.push('Literary Analysis: Ground subjective answers in textual evidence using the PEEL structure (Point, Evidence, Explanation, Link).');
  }

  // -------------------------------------------------------------
  // 4. FORMULAS, SCIENTIFIC LAWS & GOVERNING RULES
  // -------------------------------------------------------------
  const formulasAndRules: Array<{ title: string; formula: string; explanation: string }> = [];

  if (isMath) {
    if (classGrade <= 5) {
      formulasAndRules.push({
        title: 'Fundamental Addition-Subtraction Inverse Relationship',
        formula: 'Total = Part₁ + Part₂   ⟺   Part₁ = Total - Part₂',
        explanation: 'Addition aggregates discrete quantities; subtraction evaluates the remaining difference or missing component.'
      });
      formulasAndRules.push({
        title: 'Multiplication as Scaled Grouping',
        formula: 'a × b = a + a + ... (b times) = Total Items',
        explanation: 'Repeated equal addition modeled through arrays, rows, and grid area representations.'
      });
      formulasAndRules.push({
        title: 'Perimeter of Any Closed 2D Polygon',
        formula: 'Perimeter (P) = Sum of all exterior boundary side lengths',
        explanation: 'The total linear distance traversed along the complete boundary of a two-dimensional shape.'
      });
    } else if (classGrade <= 8) {
      formulasAndRules.push({
        title: 'Linear Equation First-Degree Standard Form',
        formula: 'ax + b = 0   ⟹   x = -b / a  (where a ≠ 0)',
        explanation: 'Determines the unique root value of a single variable balancing a linear mathematical equality.'
      });
      formulasAndRules.push({
        title: 'Two-Dimensional Area Calculations',
        formula: 'Rectangle: A = l × b;   Triangle: A = ½ × base × height;   Circle: A = πr²',
        explanation: 'Standardized geometric formulas measuring surface region bounded inside plane figures.'
      });
      formulasAndRules.push({
        title: 'Proportional Percentage & Commercial Math Formula',
        formula: 'Percentage (%) = (Obtained Value / Base Value) × 100;   P% = (Profit / CP) × 100',
        explanation: 'Quantifies comparative fractions on a uniform scale of 100 parts for commercial and scientific evaluation.'
      });
    } else {
      // Class 9-10 Math
      formulasAndRules.push({
        title: 'Fundamental Theorem of Arithmetic & Euclid Division Lemma',
        formula: 'Dividend = (Divisor × Quotient) + Remainder,  0 ≤ r < Divisor;   Every composite n = p₁ᵃ · p₂ᵇ · ...',
        explanation: 'Guarantees the existence and uniqueness of prime factorizations and foundational integer divisibility properties.'
      });
      formulasAndRules.push({
        title: 'The Quadratic Formula & Nature of Roots (Discriminant)',
        formula: 'x = [-b ± √(b² - 4ac)] / (2a);   D = b² - 4ac  (D > 0: two real roots; D = 0: equal; D < 0: non-real)',
        explanation: 'Determines the exact analytic solutions of any second-degree polynomial equation ax² + bx + c = 0.'
      });
      formulasAndRules.push({
        title: 'Arithmetic Progression (A.P.) General Term & Finite Sum',
        formula: 'aₙ = a + (n - 1)d;   Sₙ = (n / 2)[2a + (n - 1)d] = (n / 2)[a + l]',
        explanation: 'Calculates any arbitrary nth element and the cumulative sum of sequences with constant common difference d.'
      });
      formulasAndRules.push({
        title: 'Trigonometric Pythagorean Identities & Coordinate Distance',
        formula: 'sin²θ + cos²θ = 1;   1 + tan²θ = sec²θ;   Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        explanation: 'Relates geometric right triangles, unit circle projections, and Cartesian coordinate plane distances.'
      });
    }
  } else if (isScience) {
    if (classGrade <= 5) {
      formulasAndRules.push({
        title: 'Photosynthesis Biochemical Equation',
        formula: '6CO₂ + 6H₂O  + Sunlight & Chlorophyll  ⟶  C₆H₁₂O₆ (Glucose) + 6O₂',
        explanation: 'Autotrophic green plants synthesize organic chemical fuel while releasing life-sustaining oxygen.'
      });
      formulasAndRules.push({
        title: 'Trophic Energy Transfer Rule',
        formula: 'Solar Radiation  ⟶  Producers (100%)  ⟶  Primary Consumers (10%)  ⟶  Apex Predators (1%)',
        explanation: 'The unidirectional thermodynamic transfer of caloric energy through ecological food chains.'
      });
    } else if (classGrade <= 8) {
      formulasAndRules.push({
        title: 'Speed, Velocity & Acceleration Relationships',
        formula: 'Speed (v) = Distance (d) / Time (t);   Acceleration (a) = (v - u) / t   [SI Unit: m/s, m/s²]',
        explanation: 'Kinematic measures quantifying the rate of spatial displacement and velocity variation over time.'
      });
      formulasAndRules.push({
        title: 'Newton’s Second Law of Motion & Mechanical Force',
        formula: 'Force (F) = Mass (m) × Acceleration (a)   [SI Unit: Newton (N) = kg·m/s²]',
        explanation: 'Net external force causes a body of mass m to accelerate in the direction of the applied force.'
      });
      formulasAndRules.push({
        title: 'Fluid & Atmospheric Pressure Formula',
        formula: 'Pressure (P) = Force (F) / Area (A) = ρ·g·h   [SI Unit: Pascal (Pa) = N/m²]',
        explanation: 'Perpendicular thrust exerted per unit surface area; in fluids, pressure increases linearly with liquid depth h.'
      });
    } else {
      // Class 9-10 Science
      formulasAndRules.push({
        title: 'Ohm’s Law & Electrical Power Dissipation',
        formula: 'V = I × R;   Power P = V × I = I²R = V² / R;   Electrical Energy E = P × t   [Units: V, A, Ω, W]',
        explanation: 'Governs steady-state electric circuits; electric current is directly proportional to potential difference across a conductor.'
      });
      formulasAndRules.push({
        title: 'Gaussian Mirror & Lens Optical Formulas',
        formula: 'Mirror: 1/f = 1/v + 1/u;   Lens: 1/f = 1/v - 1/u;   Magnification m = -v/u (mirror) or +v/u (lens) = hᵢ / hₒ',
        explanation: 'Relates object distance u, image distance v, and focal length f with strict Cartesian sign conventions.'
      });
      formulasAndRules.push({
        title: 'Newton’s Universal Law of Gravitation',
        formula: 'F = G · (m₁ · m₂) / r²   [Universal Constant G = 6.674 × 10⁻¹¹ N·m²/kg²;  g = GM / R²]',
        explanation: 'Mutual gravitational attraction exerted between every pair of mass particles across spatial separation r.'
      });
      formulasAndRules.push({
        title: 'Chemical Stoichiometry & Law of Conservation of Mass',
        formula: 'Σ Mass of Reactants = Σ Mass of Products;   Moles (n) = Given Mass (m) / Molar Mass (M)',
        explanation: 'Chemical rearrangements conserve all elemental atomic nuclei, mandating stoichiometric balancing.'
      });
    }
  } else if (isSST) {
    formulasAndRules.push({
      title: 'Separation of Powers & Constitutional Checks',
      formula: 'State Authority = Legislature (Lawmaking) + Executive (Implementation) + Judiciary (Adjudication)',
      explanation: 'Montesquieu’s doctrine embedded in constitutional systems to prevent tyrannical monopolization of state power.'
    });
    formulasAndRules.push({
      title: 'Macroeconomic National Income & Per Capita GDP',
      formula: 'Per Capita Income (PCI) = Gross Domestic Product (GDP) / Total Population',
      explanation: 'Standard metric utilized by the World Bank and UNDP to gauge economic productivity and living standards.'
    });
    formulasAndRules.push({
      title: 'Hydrological Balance & Groundwater Recharge Equation',
      formula: 'Recharge Potential = Total Precipitation - (Evaporation + Surface Runoff + Soil Moisture Deficit)',
      explanation: 'Determines the sustainable extraction threshold for subterranean aquifers and rainwater catchment systems.'
    });
  } else {
    // English
    formulasAndRules.push({
      title: 'Classic Narrative Plot Arc (Freytag’s Pyramid)',
      formula: 'Exposition  ⟶  Inciting Incident  ⟶  Rising Action  ⟶  Climax  ⟶  Falling Action  ⟶  Resolution',
      explanation: 'The universal dramatic framework structuring prose fiction, epic poetry, and theatrical drama.'
    });
    formulasAndRules.push({
      title: 'Analytical Literary Essay Formula (The PEEL Technique)',
      formula: 'Point (State argument) + Evidence (Direct quote) + Explanation (Analyze device) + Link (Connect to theme)',
      explanation: 'The gold-standard structure for scoring maximum marks in critical literary evaluation and character analysis.'
    });
    formulasAndRules.push({
      title: 'Core English Syntactic Rule (Subject-Verb Agreement)',
      formula: 'Singular Subject  ⟹  Singular Verb;   Plural Subject  ⟹  Plural Verb',
      explanation: 'The invariant grammatical axiom ensuring syntactic coherence and formal written clarity.'
    });
  }

  // -------------------------------------------------------------
  // 5. SOLVED MODEL PROBLEMS (Step-by-Step with Intermediate Explanations)
  // -------------------------------------------------------------
  const solvedExamples: SolvedExample[] = [];

  if (isMath) {
    if (classGrade <= 5) {
      solvedExamples.push({
        title: `Model Problem 1: Step-by-Step Word Problem Breakdown`,
        problem: `A school library received 4 boxes of books. Each box contains 25 mathematics textbooks and 15 science storybooks. If the librarian distributes 60 books to Class ${classGrade}, how many books remain in the boxes?`,
        solutionSteps: [
          `Step 1 (Find total books per box): Add math and science books in one box: 25 + 15 = 40 books per box.`,
          `Step 2 (Find overall total books): Multiply total books per box by the number of boxes: 40 × 4 = 160 books total.`,
          `Step 3 (Calculate remaining books): Subtract the distributed books from the overall total: 160 - 60 = 100 books.`,
          `Step 4 (Verification): Reverse check: 100 (remaining) + 60 (distributed) = 160 books. 160 ÷ 4 = 40 per box. The arithmetic is fully verified.`
        ],
        keyTakeaway: `Always write clear descriptive labels for each step rather than writing solitary numbers without context.`
      });
      solvedExamples.push({
        title: `Model Problem 2: Geometric Boundary & Perimeter Calculation`,
        problem: `A rectangular school playground measures 45 meters in length and 30 meters in width. A student runs around its perimeter 3 complete times during morning fitness. Calculate the total running distance.`,
        solutionSteps: [
          `Step 1 (State perimeter formula): Perimeter of a rectangle = 2 × (Length + Width).`,
          `Step 2 (Substitute given dimensions): Perimeter = 2 × (45 m + 30 m) = 2 × 75 m = 150 meters for 1 lap.`,
          `Step 3 (Multiply by total laps): Total distance = 3 laps × 150 meters/lap = 450 meters.`,
          `Step 4 (Final Statement): State units clearly: The student runs a total distance of 450 meters.`
        ],
        keyTakeaway: `Remember that perimeter is a 1-dimensional length (meters), whereas area is a 2-dimensional surface (square meters). Never confuse units!`
      });
    } else if (classGrade <= 8) {
      solvedExamples.push({
        title: `Model Problem 1: Systematic Linear Equation Solving & Verification`,
        problem: `Solve for the variable x:   5(2x - 3) - 3(3x - 7) = 5. Verify your solution by substituting back into the left-hand side.`,
        solutionSteps: [
          `Step 1 (Expand brackets using distributive law): 5(2x) - 5(3) - 3(3x) - 3(-7) = 5  ⟹  10x - 15 - 9x + 21 = 5.`,
          `Step 2 (Combine like terms): (10x - 9x) + (-15 + 21) = 5  ⟹  x + 6 = 5.`,
          `Step 3 (Isolate variable x): Subtract 6 from both sides: x = 5 - 6  ⟹  x = -1.`,
          `Step 4 (Formal Verification): Substitute x = -1 into LHS: 5[2(-1) - 3] - 3[3(-1) - 7] = 5(-5) - 3(-10) = -25 + 30 = 5 = RHS. Solution verified!`
        ],
        keyTakeaway: `Watch negative signs carefully when expanding brackets: -3 multiplied by -7 yields positive +21. A sign slip here is the most common student error.`
      });
      solvedExamples.push({
        title: `Model Problem 2: Proportional Commercial Math & Discount Calculation`,
        problem: `A science textbook has a marked price of ₹650. During an educational book fair, a discount of 15% is offered, followed by an additional 5% cashback on the discounted price. Calculate the final net price.`,
        solutionSteps: [
          `Step 1 (Calculate initial 15% discount): Discount 1 = 15% of ₹650 = (15 / 100) × 650 = ₹97.50.`,
          `Step 2 (Find discounted price): Price after first discount = ₹650 - ₹97.50 = ₹552.50.`,
          `Step 3 (Calculate subsequent 5% cashback): Cashback = 5% of ₹552.50 = (5 / 100) × 552.50 = ₹27.625 ≈ ₹27.63.`,
          `Step 4 (Determine final net price): Net price = ₹552.50 - ₹27.63 = ₹524.87.`,
          `Step 5 (Key Insight): Successive discounts of 15% and 5% are NOT equal to a flat 20% discount (20% of 650 is ₹130, price would be ₹520).`
        ],
        keyTakeaway: `Successive discounts apply consecutively to the depreciated intermediate price, never directly to the original marked price!`
      });
    } else {
      // Class 9-10 Math
      solvedExamples.push({
        title: `Model Problem 1: Rigorous Analytical Proof & Theorem Application`,
        problem: `Given the quadratic equation 2x² - 6x + 3 = 0. Without directly calculating the roots, determine the nature of its roots, find their exact sum and product, and then calculate the roots using the quadratic formula.`,
        solutionSteps: [
          `Step 1 (Identify polynomial coefficients): Compare with standard form ax² + bx + c = 0: a = 2, b = -6, c = 3.`,
          `Step 2 (Evaluate the discriminant D): D = b² - 4ac = (-6)² - 4(2)(3) = 36 - 24 = 12.`,
          `Step 3 (Determine root nature): Since D = 12 > 0 and 12 is not a perfect square, the roots are real, distinct, and irrational.`,
          `Step 4 (Calculate sum and product): Sum of roots (α + β) = -b/a = -(-6)/2 = 3;   Product (αβ) = c/a = 3/2 = 1.5.`,
          `Step 5 (Compute exact roots): x = [-b ± √D] / (2a) = [6 ± √12] / 4 = [6 ± 2√3] / 4 = (3 ± √3) / 2.`,
          `Step 6 (Verification): Sum = [(3 + √3)/2] + [(3 - √3)/2] = 6/2 = 3. Product = (9 - 3)/4 = 6/4 = 3/2. Exactly matches!`
        ],
        keyTakeaway: `Always simplify radicals: √12 = √(4 × 3) = 2√3. Factoring out common terms before dividing prevents cancellation mistakes.`
      });
      solvedExamples.push({
        title: `Model Problem 2: Geometry & Trigonometric Coordinate Problem`,
        problem: `From a point on the ground 30 meters away from the base of a vertical school flag mast, the angle of elevation of the top of the mast is measured to be 60°. Calculate the height of the flag mast (Take √3 ≈ 1.732).`,
        solutionSteps: [
          `Step 1 (Construct geometric diagram): Let AB be the vertical flag mast of height h, and C be the observation point on ground. BC = 30 m, angle ACB = 60°, angle ABC = 90°.`,
          `Step 2 (Select trigonometric ratio): In right triangle ABC, tan(θ) = Opposite / Adjacent = AB / BC.`,
          `Step 3 (Substitute values): tan(60°) = h / 30. Since tan(60°) = √3, we have √3 = h / 30.`,
          `Step 4 (Solve for height h): h = 30 × √3 = 30 × 1.732 = 51.96 meters.`,
          `Step 5 (Final Concluding Statement): The exact height of the flag mast is 30√3 meters, which corresponds to approximately 51.96 meters.`
        ],
        keyTakeaway: `Always draw and label a neat geometric diagram with right-angle indicators. In board marking schemes, the diagram carries 1 full mark.`
      });
    }
  } else if (isScience) {
    if (classGrade <= 8) {
      solvedExamples.push({
        title: `Model Problem 1: Kinematic Speed, Distance & Unit Conversion Walkthrough`,
        problem: `An express school bus travels a distance of 54 kilometers in 45 minutes along a state highway. Calculate its speed in (a) kilometers per hour (km/h) and (b) standard SI units (meters per second, m/s).`,
        solutionSteps: [
          `Step 1 (Identify given quantities): Distance d = 54 km; Time t = 45 minutes.`,
          `Step 2 (Convert time to hours): Since 60 minutes = 1 hour, t = 45 / 60 hours = 3 / 4 hours = 0.75 h.`,
          `Step 3 (Calculate speed in km/h): Speed v = d / t = 54 km / 0.75 h = 72 km/h.`,
          `Step 4 (Convert km/h to SI unit m/s): Conversion factor: 1 km/h = (1000 m) / (3600 s) = 5 / 18 m/s.`,
          `Step 5 (Execute multiplication): Speed in m/s = 72 × (5 / 18) = 4 × 5 = 20 m/s.`,
          `Step 6 (Concluding verification): 20 m/s means the bus traverses 20 meters every single second.`
        ],
        keyTakeaway: `Remember the fast conversion shortcut: Multiply km/h by 5/18 to get m/s; multiply m/s by 18/5 to get km/h!`
      });
      solvedExamples.push({
        title: `Model Problem 2: Mechanical Force & Pressure Calculation`,
        problem: `A wooden cubical block of mass 12 kg rests on a flat study table. Each square face of the block has side length 0.2 meters. Calculate the pressure exerted by the block on the table surface (Take acceleration due to gravity g = 10 m/s²).`,
        solutionSteps: [
          `Step 1 (Calculate weight / downward force F): Weight F = mass × gravity = m × g = 12 kg × 10 m/s² = 120 Newtons (N).`,
          `Step 2 (Calculate contact surface area A): Since the base is a square, Area A = side × side = 0.2 m × 0.2 m = 0.04 m².`,
          `Step 3 (State pressure formula): Pressure P = Thrust / Area = F / A.`,
          `Step 4 (Compute numerical pressure): P = 120 N / 0.04 m² = 12000 / 4 = 3000 N/m² (or 3000 Pascals, Pa).`,
          `Step 5 (Final Answer): The block exerts a pressure of 3,000 Pa (or 3 kPa) on the table.`
        ],
        keyTakeaway: `Area must be strictly in square meters (m²), not centimeters (cm²), to obtain pressure in Pascals (N/m²).`
      });
    } else {
      // Class 9-10 Science
      solvedExamples.push({
        title: `Model Problem 1: Electrical Circuit Analysis (Ohm’s Law & Equivalent Resistance)`,
        problem: `A circuit contains three resistors: R₁ = 4 Ω, R₂ = 6 Ω, and R₃ = 12 Ω. R₂ and R₃ are connected in parallel, and this parallel combination is connected in series with R₁ across a 12 V battery. Calculate: (a) Total equivalent resistance, (b) Total circuit current, and (c) Potential difference across R₁.`,
        solutionSteps: [
          `Step 1 (Calculate parallel equivalent of R₂ and R₃): 1/Rₚ = 1/R₂ + 1/R₃ = 1/6 + 1/12 = (2 + 1)/12 = 3/12 = 1/4  ⟹  Rₚ = 4 Ω.`,
          `Step 2 (Calculate total circuit resistance R_total): Series connection: R_total = R₁ + Rₚ = 4 Ω + 4 Ω = 8 Ω.`,
          `Step 3 (Calculate total current I using Ohm's Law): I = V / R_total = 12 V / 8 Ω = 1.5 Amperes (A).`,
          `Step 4 (Calculate voltage across R₁): Since total current flows through R₁ in series: V₁ = I × R₁ = 1.5 A × 4 Ω = 6 Volts.`,
          `Step 5 (Verify remaining voltage): Voltage across parallel branch Vₚ = 12 V - 6 V = 6 V. Current in R₂ = 6V/6Ω = 1 A; current in R₃ = 6V/12Ω = 0.5 A. Sum = 1 + 0.5 = 1.5 A. Perfect verification!`
        ],
        keyTakeaway: `In series circuits, current is identical across components; in parallel circuits, potential difference (voltage) is identical across branches.`
      });
      solvedExamples.push({
        title: `Model Problem 2: Optical Ray Tracing & Mirror Formula Problem`,
        problem: `An object 4 cm in height is placed at a distance of 25 cm in front of a concave mirror of focal length 15 cm. Find the position, nature, and height of the image formed.`,
        solutionSteps: [
          `Step 1 (Apply Cartesian sign conventions): Object distance u = -25 cm; Focal length for concave mirror f = -15 cm; Object height hₒ = +4 cm.`,
          `Step 2 (State mirror formula): 1/f = 1/v + 1/u  ⟹  1/v = 1/f - 1/u.`,
          `Step 3 (Substitute values with signs): 1/v = 1/(-15) - 1/(-25) = -1/15 + 1/25 = (-5 + 3) / 75 = -2/75.`,
          `Step 4 (Compute image distance v): v = -75 / 2 = -37.5 cm. The negative sign indicates the image is formed in front of mirror (real and inverted).`,
          `Step 5 (Compute magnification and image height): m = -v / u = -(-37.5) / (-25) = -1.5. Image height hᵢ = m × hₒ = -1.5 × 4 cm = -6 cm.`,
          `Step 6 (Concluding Description): The image is formed at 37.5 cm in front of the mirror, is real, inverted, magnified, and measures 6 cm in height.`
        ],
        keyTakeaway: `Focal length of concave mirror is always negative (-); focal length of convex mirror is always positive (+). Always write the sign convention explicitly!`
      });
    }
  } else if (isSST) {
    solvedExamples.push({
      title: `Model Case Study 1: Analytical Examination Response Breakdown`,
      problem: `Analyze how socio-economic grievances combined with political disenfranchisement to spark national movements, using structural evidence from "${title}".`,
      solutionSteps: [
        `Step 1 (Historical Thesis Formulation): Open with a strong introductory assertion identifying the systemic contradictions between ruling authority and citizen rights.`,
        `Step 2 (Economic Causes): Detail taxation burdens, agrarian distress, trade blockades, or price inflation that mobilized working-class and peasant communities.`,
        `Step 3 (Ideological Awakening): Cite the role of intellectuals, philosophers, newspapers, and underground pamphlets that disseminated ideals of liberty, equality, and sovereignty.`,
        `Step 4 (Trigger Event & Mass Mobilization): Explain the immediate catalyst that unified diverse demographic groups across regional and cultural divides.`,
        `Step 5 (Constitutional Legacy): Conclude by detailing the enduring democratic reforms or institutional safeguards enacted following the movement.`
      ],
      keyTakeaway: `Never write Social Science answers as a single unformatted paragraph. Break into numbered points with bold headings to maximize exam evaluator scores.`
    });
    solvedExamples.push({
      title: `Model Case Study 2: Geographical Resource Conservation Strategy`,
      problem: `Evaluate the environmental impact of unsustainable resource exploitation in relation to "${title}" and outline a 3-tier sustainable management plan.`,
      solutionSteps: [
        `Step 1 (Problem Identification): Quantify the ecological degradation (topsoil erosion, water table depletion, industrial emissions, or deforestation).`,
        `Step 2 (Community-Level Interventions): Implement traditional rainwater harvesting (e.g., Johads, Guls/Kuls), rooftop recharge pits, and community afforestation.`,
        `Step 3 (Technological & Agronomic Reforms): Deploy drip irrigation systems, crop rotation, organic bio-fertilizers, and renewable solar/wind installations.`,
        `Step 4 (Legislative & Regulatory Enforcement): Establish strict industrial effluent treatment mandates, plastic bans, and designated protected biosphere reserves.`
      ],
      keyTakeaway: `Always link geography solutions to specific regional case studies (e.g., Sukhomajri village watershed management or Chipko movement).`
    });
  } else {
    // English
    solvedExamples.push({
      title: `Model Literature Analysis 1: Extract-Based Analytical Response (PEEL Method)`,
      problem: `Analyze how the author employs imagery and figurative language in "${title}" to reveal the protagonist’s inner moral conflict.`,
      solutionSteps: [
        `Step 1 - Point (P): State clearly what the author is communicating regarding the character's internal turmoil and psychological state.`,
        `Step 2 - Evidence (E): Embed a concise, relevant textual quotation directly into your sentence without interrupting grammatical flow.`,
        `Step 3 - Explanation (E): Unpack the literary device (e.g., metaphor, pathetic fallacy, contrast) and explain how specific word choices evoke visceral mood.`,
        `Step 4 - Link (L): Connect your textual analysis back to the overarching philosophical or moral theme of the entire work.`
      ],
      keyTakeaway: `Avoid merely summarizing the storyline. Board examiners award top marks for critical analysis of authorial intent and literary craft.`
    });
    solvedExamples.push({
      title: `Model Grammar & Composition 2: Cohesive Formal Writing Technique`,
      problem: `Construct a formal letter or descriptive composition expressing reasoned perspective on the central theme of "${title}".`,
      solutionSteps: [
        `Step 1 (Structure & Layout): Adhere strictly to formal letter formatting: Sender's address, Date, Receiver's designation, Subject line, and Formal salutation.`,
        `Step 2 (Opening Paragraph): State the precise purpose of the communication clearly and concisely in one compelling sentence.`,
        `Step 3 (Body Paragraphs): Present two distinct supporting arguments backed by logical reasoning, statistical evidence, or moral precedent.`,
        `Step 4 (Concluding Call to Action): Propose a constructive, feasible resolution and close with formal sign-off ("Yours sincerely").`
      ],
      keyTakeaway: `Keep tone dignified, objective, and polite. Avoid conversational slang or colloquial idioms in formal academic writing.`
    });
  }

  // -------------------------------------------------------------
  // 6. FREQUENTLY ASKED QUESTIONS (What students search Google for)
  // -------------------------------------------------------------
  const detailedFaqs: DetailedFAQ[] = [];

  if (isMath) {
    detailedFaqs.push({
      question: `Why is it critical to check boundary conditions and domain constraints in "${title}"?`,
      answer: `In mathematics, many formulas are only valid within specified domains. For example, division by zero is undefined, square roots of negative numbers yield non-real values in real analysis, and physical dimensions (length, time, mass) cannot be negative. If an algebraic calculation yields two roots (e.g., x = 5 and x = -3) for a problem asking for the side of a garden, the negative root must be rejected with explicit reasoning.`
    });
    detailedFaqs.push({
      question: `How can I quickly verify if my final calculation is correct before submitting my exam?`,
      answer: `Use inverse operations: if you solved an equation, plug the obtained value back into the original left-hand side (LHS) and check if it equals the right-hand side (RHS). For geometric problems, use estimation: check if the hypotenuse is indeed the longest side of a right triangle, or if the sum of all parts equals the whole.`
    });
    detailedFaqs.push({
      question: `What is the difference between an algebraic expression, an equation, and an identity?`,
      answer: `An expression (e.g., 2x + 5) has no equals sign and represents a numerical quantity. An equation (e.g., 2x + 5 = 15) contains an equals sign and is true only for specific root values (here x = 5). An identity (e.g., (a + b)² = a² + 2ab + b²) contains an equals sign and is universally true for EVERY possible value of the variables.`
    });
    detailedFaqs.push({
      question: `Why do examiners deduct marks even when the final numerical answer is correct?`,
      answer: `Exam evaluation rubrics allocate marks incrementally for: (1) writing the correct formula/theorem, (2) showing orderly substitution of values, (3) displaying intermediate reduction steps, and (4) attaching the correct SI or metric units (e.g., cm², m/s, ₹). Arriving at the correct number with missing steps or omitted units results in partial mark deductions.`
    });
    detailedFaqs.push({
      question: `How does "${title}" connect to higher secondary topics in Class 11 and 12?`,
      answer: `The algebraic identities, geometric properties, and coordinate equations learned in this chapter form the core toolkit for higher topics like Differential & Integral Calculus, 3D Coordinate Geometry, Vectors, and Complex Numbers. Mastering these fundamental techniques now prevents stumbling in higher competitive exams.`
    });
  } else if (isScience) {
    detailedFaqs.push({
      question: `What is the fundamental scientific law governing the phenomenon in "${title}"?`,
      answer: `All natural phenomena in this chapter are governed by universal conservation principles (conservation of mass, energy, momentum, or charge). Energy and matter cannot be created or destroyed; they only transform between different physical and chemical states. Understanding this balance is the key to solving numerical problems and balancing chemical or biological equations.`
    });
    detailedFaqs.push({
      question: `Why are SI units mandatory in scientific calculations, and how do I avoid conversion mistakes?`,
      answer: `The International System of Units (SI) standardizes scientific measurement worldwide. Mixing units (such as combining distance in kilometers with time in seconds without conversion) produces disastrous calculation errors. Always convert all given parameters to base SI units (meters, kilograms, seconds, amperes, kelvin) as your very first step before substituting into formulas.`
    });
    detailedFaqs.push({
      question: `How do I draw high-scoring scientific diagrams in school and board exams?`,
      answer: `Always use a sharp pencil and ruler for neatness. Never cross label lines; keep them parallel and on the right-hand side of the diagram whenever possible. Include directional arrows for light rays, electrical current flows, or ecological energy food chains. Finally, always write a clear figure caption beneath the drawing.`
    });
    detailedFaqs.push({
      question: `What is the difference between a scientific hypothesis, a theory, and a natural law?`,
      answer: `A hypothesis is a testable, educated prediction based on preliminary observation. A theory (e.g., Cell Theory, Kinetic Molecular Theory) is a comprehensive, well-substantiated explanation of natural phenomena supported by vast empirical evidence. A law (e.g., Newton's Laws, Ohm's Law) is a concise mathematical statement describing an invariant universal relationship under specified conditions.`
    });
    detailedFaqs.push({
      question: `How can I remember complex scientific definitions and terminology easily?`,
      answer: `Break terms down into their Greek and Latin roots. For example, 'Photo-' means light, and '-synthesis' means putting together; 'Auto-' means self, and '-troph' means nourishment; 'Iso-' means equal, and '-tope' means place. Understanding root words allows you to instantly decipher unfamiliar scientific terminology.`
    });
  } else if (isSST) {
    detailedFaqs.push({
      question: `How do historians and social scientists verify facts and eliminate bias?`,
      answer: `Social scientists cross-examine multiple independent primary sources (archaeological artifacts, inscriptions, diary entries, government decrees, trade manifests) and compare them with secondary analyses by contemporary scholars. Triangulating evidence from differing political perspectives allows historians to reconstruct authentic factual accounts.`
    });
    detailedFaqs.push({
      question: `Why is the Constitution considered a 'living document' in relation to civic governance?`,
      answer: `The Constitution provides an enduring philosophical foundation (Justice, Liberty, Equality, Fraternity) while incorporating formal amendment procedures (under Article 368 in India) and judicial review. This flexibility allows constitutional laws to evolve alongside technological advances, social reforms, and emerging democratic aspirations without collapsing the institutional framework.`
    });
    detailedFaqs.push({
      question: `What is the most effective way to memorize historical dates, timelines, and treaties?`,
      answer: `Instead of memorizing isolated dates, construct visual timeline charts that group milestones into causal eras: (1) Causes & Grievances, (2) Outbreak & Critical Turning Points, (3) Treaties & Aftermath. Remembering cause-and-effect sequences makes dates anchor naturally in long-term memory.`
    });
    detailedFaqs.push({
      question: `How do geographical features influence economic development and historical settlements?`,
      answer: `Geographical relief, fertile alluvial river basins, and perennial water access determine where human agriculture thrives, leading to dense populations and flourishing trade hubs. Conversely, arid deserts and rugged mountain passes historical served as defensive barriers or dictated trade corridors (like the historic Silk Route).`
    });
  } else {
    // English
    detailedFaqs.push({
      question: `What makes a literary response stand out to an academic examiner?`,
      answer: `Top-tier literature answers move beyond simple plot retelling to examine authorial technique. Use literary vocabulary (e.g., symbolism, juxtaposition, internal monologue, dramatic irony) and analyze HOW the author uses language to evoke mood and moral resonance, rather than simply stating WHAT happened in the story.`
    });
    detailedFaqs.push({
      question: `How do I distinguish between the literal meaning and figurative meaning of a text?`,
      answer: `The literal meaning is the surface factual narrative—what actually happens to characters in physical space. The figurative meaning is the symbolic subtext—what those actions represent about broader human psychology, morality, social injustice, or existential reality.`
    });
    detailedFaqs.push({
      question: `How can I improve my English vocabulary and sentence variety for board exams?`,
      answer: `Avoid repeating generic words like 'good', 'bad', 'happy', or 'said'. Use vivid verbs and descriptive adjectives (e.g., 'exemplified', 'adversity', 'profound', 'exclaimed'). Vary sentence structures by opening sentences with participial phrases, prepositional clauses, or adverbial modifiers rather than always starting with 'Subject + Verb'.`
    });
  }

  // -------------------------------------------------------------
  // 7. COMMON MISCONCEPTIONS & EXAM TRAPS
  // -------------------------------------------------------------
  const commonMisconceptions: MisconceptionItem[] = [];

  if (isMath) {
    commonMisconceptions.push({
      misconception: `Assuming that (a + b)² equals a² + b².`,
      correction: `The correct algebraic expansion is (a + b)² = a² + 2ab + b².`,
      explanation: `Omitting the middle term (+2ab) is one of the most frequent algebraic mistakes. A geometric box of side (a + b) contains four distinct sub-areas: a², b², and two rectangles of area a·b.`
    });
    commonMisconceptions.push({
      misconception: `Believing that dividing both sides of an inequality by a negative number preserves the inequality sign.`,
      correction: `When multiplying or dividing an inequality by a negative number, the inequality sign MUST be reversed (e.g., -2x < 6  ⟹  x > -3).`,
      explanation: `On the real number line, negative numbers reverse order: 2 < 4, but multiplying by -1 yields -2 > -4. Neglecting to flip the sign causes complete failure in range questions.`
    });
    commonMisconceptions.push({
      misconception: `Confusing linear perimeter units with square surface area units.`,
      correction: `Perimeter is measured in linear units (cm, m, km); Area is measured in square units (cm², m², hectares).`,
      explanation: `In word problems, examiners deliberately test whether students write 'meters' or 'square meters'. Using the wrong unit causes immediate deduction of the unit mark.`
    });
    commonMisconceptions.push({
      misconception: `Thinking that √x² is always equal to x without qualification.`,
      correction: `√x² = |x| (the absolute value of x), which equals +x only when x ≥ 0, and -x when x < 0.`,
      explanation: `The principal square root function is by definition non-negative. For instance, √((-5)²) = √25 = +5, not -5.`
    });
  } else if (isScience) {
    commonMisconceptions.push({
      misconception: `Confusing mass and weight as identical physical concepts.`,
      correction: `Mass (measured in kg) is an intrinsic scalar property representing quantity of matter; Weight (measured in Newtons) is the downward gravitational force W = mg.`,
      explanation: `An astronaut on the Moon has the exact same mass as on Earth, but their weight is 1/6th of their Earth weight because lunar gravity is weaker.`
    });
    commonMisconceptions.push({
      misconception: `Believing that electric current is 'used up' or consumed as it passes through a resistor.`,
      correction: `Current (the rate of charge flow) is identical entering and leaving a resistor. It is electric potential ENERGY that is converted into heat or light.`,
      explanation: `Electric charge is strictly conserved. Charges do not vanish; they transfer electrical potential energy into kinetic and thermal energy through lattice collisions.`
    });
    commonMisconceptions.push({
      misconception: `Assuming that respiration in plants occurs only at night while photosynthesis occurs during the day.`,
      correction: `Plants respire continuously 24 hours a day (day and night). Photosynthesis occurs only during daylight hours in the presence of sunlight.`,
      explanation: `During the day, the rate of photosynthetic oxygen production exceeds the rate of respiratory oxygen consumption, creating a net release of oxygen.`
    });
    commonMisconceptions.push({
      misconception: `Thinking that chemical reactions lose or destroy mass when a gas escapes.`,
      correction: `Mass is strictly conserved in all chemical reactions. The apparent loss of mass is due to gaseous products escaping into the atmosphere.`,
      explanation: `If the exact same chemical reaction is conducted in a sealed, airtight vessel, the total mass measured on a precision balance remains perfectly invariant.`
    });
  } else if (isSST) {
    commonMisconceptions.push({
      misconception: `Assuming democracy simply means 'rule by the majority' without constraints.`,
      correction: `Democracy is constitutional rule by majority consent, but it strictly protects fundamental rights, minority dignity, and judicial equality under the rule of law.`,
      explanation: `A system where a 51% majority arbitrarily suppresses the basic rights of a 49% minority is not a democracy—it is majority tyranny.`
    });
    commonMisconceptions.push({
      misconception: `Confusing national weather with regional climate.`,
      correction: `Weather describes day-to-day atmospheric conditions (temperature, humidity, rain) over short intervals; Climate describes average weather patterns over at least 30 years.`,
      explanation: `A single unusually cold week in summer does not disprove climatic global warming trends.`
    });
    commonMisconceptions.push({
      misconception: `Believing that high Gross Domestic Product (GDP) alone guarantees high human development for all citizens.`,
      correction: `GDP measures total monetary economic output, but ignores equitable wealth distribution, healthcare access, literacy rates, and life expectancy.`,
      explanation: `This is why the United Nations developed the Human Development Index (HDI) to evaluate holistic human welfare alongside raw economic statistics.`
    });
  } else {
    // English
    commonMisconceptions.push({
      misconception: `Assuming that the narrator of a story is always the author speaking directly.`,
      correction: `The narrator is a constructed literary persona created by the author. Even in first-person ('I') narratives, the narrator's values may differ from the author's.`,
      explanation: `Failing to distinguish between author and unreliable narrator leads students to completely misinterpret satirical or ironic texts.`
    });
    commonMisconceptions.push({
      misconception: `Believing that a longer descriptive answer automatically receives higher marks.`,
      correction: `Board examiners evaluate answers against clear marking points and textual precision, penalizing rambling, repetitive filler.`,
      explanation: `A concise, sharply argued 150-word response using textual evidence and literary terms consistently outscores a 350-word unfocused summary.`
    });
  }

  // -------------------------------------------------------------
  // 8. ENCYCLOPEDIC GLOSSARY (Core Academic Terminology)
  // -------------------------------------------------------------
  const glossary: GlossaryItem[] = [];

  if (isMath) {
    glossary.push({
      term: 'Axiom / Postulate',
      definition: 'A fundamental proposition or statement assumed to be universally true without formal proof, serving as the starting point for mathematical deduction.'
    });
    glossary.push({
      term: 'Coefficient',
      definition: 'A constant numerical or algebraic multiplier placed before a variable in an algebraic term (e.g., in -7x³, -7 is the coefficient of x³).'
    });
    glossary.push({
      term: 'Domain & Range',
      definition: 'The domain is the complete set of valid input values for which a mathematical relation is defined; the range is the resulting set of output values.'
    });
    glossary.push({
      term: 'Polynomial',
      definition: 'An algebraic expression consisting of variables and coefficients involving only the operations of addition, subtraction, multiplication, and non-negative integer exponents.'
    });
    glossary.push({
      term: 'Theorem',
      definition: 'A mathematical statement that has been proven rigorously based on previously established axioms, definitions, and theorems.'
    });
    glossary.push({
      term: 'Perimeter & Area',
      definition: 'Perimeter measures the 1D continuous boundary length enclosing a shape; Area measures the 2D surface space contained within that boundary.'
    });
  } else if (isScience) {
    glossary.push({
      term: 'SI Unit (Système International)',
      definition: 'The globally adopted metric measurement standard consisting of seven base units: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd).'
    });
    glossary.push({
      term: 'Equilibrium',
      definition: 'A state of physical, chemical, or biological balance where opposing forces or reaction rates cancel each other out, resulting in no net observable change.'
    });
    glossary.push({
      term: 'Catalyst',
      definition: 'A chemical or biological substance (enzyme) that accelerates the rate of a chemical reaction by lowering activation energy, without itself undergoing permanent chemical change.'
    });
    glossary.push({
      term: 'Conservation Law',
      definition: 'A fundamental principle stating that a particular measurable physical property (mass, energy, momentum, charge) of an isolated physical system remains constant over time.'
    });
    glossary.push({
      term: 'Potential & Kinetic Energy',
      definition: 'Potential energy is stored energy possessed by a body due to its position, state, or configuration; kinetic energy is energy possessed by virtue of its motion (½mv²).'
    });
    glossary.push({
      term: 'Homeostasis',
      definition: 'The physiological regulatory process by which living organisms maintain stable internal chemical and thermal conditions despite fluctuating external environments.'
    });
  } else if (isSST) {
    glossary.push({
      term: 'Sovereignty',
      definition: 'The supreme, independent authority of a state or governing body to govern itself and make laws without interference from external powers.'
    });
    glossary.push({
      term: 'Judicial Review',
      definition: 'The constitutional power of independent courts to examine legislative statutes and executive actions to determine their compliance with the Constitution.'
    });
    glossary.push({
      term: 'Sustainable Development',
      definition: 'Economic development conducted without depleting natural ecosystems, meeting the needs of the present without compromising future generations.'
    });
    glossary.push({
      term: 'Universal Adult Suffrage',
      definition: 'The democratic principle granting every adult citizen the right to vote in public elections regardless of wealth, gender, ethnicity, or social status.'
    });
    glossary.push({
      term: 'Human Development Index (HDI)',
      definition: 'A statistical composite index created by the United Nations assessing long-term national progress in life expectancy, adult education, and standard of living.'
    });
  } else {
    // English
    glossary.push({
      term: 'Alliteration',
      definition: 'The deliberate repetition of identical consonant sounds at the beginning of closely situated words (e.g., "silent sea", "fluttering flags").'
    });
    glossary.push({
      term: 'Metaphor',
      definition: 'A figure of speech that directly compares two unrelated entities by stating that one thing is another, without using "like" or "as".'
    });
    glossary.push({
      term: 'Personification',
      definition: 'A literary technique attributing human characteristics, emotions, or behaviors to inanimate objects, animals, or abstract ideas.'
    });
    glossary.push({
      term: 'Theme',
      definition: 'The underlying central message, philosophical insight, or universal human reflection communicated by the author throughout a literary text.'
    });
    glossary.push({
      term: 'Tone & Mood',
      definition: 'Tone reflects the author\'s attitude toward the subject matter or audience; Mood reflects the emotional atmosphere evoked within the reader.'
    });
  }

  // -------------------------------------------------------------
  // 9. "DID YOU KNOW?" & HISTORICAL CONTEXT
  // -------------------------------------------------------------
  const didYouKnow: string[] = [
    `Historical Origins: Ancient Indian, Greek, and Arab scholars (such as Aryabhata, Brahmagupta, Euclid, and Al-Khwarizmi) laid the mathematical and scientific foundations for the principles in "${title}".`,
    `Modern Supercomputing: The mathematical equations and algorithmic laws explored in this chapter are embedded in modern artificial intelligence, satellite orbital modeling, and smartphone digital image rendering.`,
    `Pedagogical Standard: The concepts in this chapter align directly with international STEM benchmarks, ensuring that mastering them prepares students for university and global engineering fields.`
  ];

  if (isMath) {
    didYouKnow.push('Zero & Positional Place Value: The concept of zero as both a placeholder and an operational mathematical number was formalized in India by mathematician Brahmagupta in the 7th century CE.');
  } else if (isScience) {
    didYouKnow.push('Universal Symmetry: In 1915, mathematician Emmy Noether proved that every conservation law in physics (energy, momentum, charge) corresponds to a fundamental mathematical symmetry in nature.');
  } else if (isSST) {
    didYouKnow.push('Longest Written Constitution: The Constitution of India, drafted under Dr. B. R. Ambedkar’s leadership, is the longest written national constitution in the world, containing over 145,000 words.');
  }

  return {
    readingSections,
    keyConcepts,
    summary: enrichedSummary,
    summaryPoints,
    formulasAndRules,
    sources: BASE_SOURCES,
    solvedExamples,
    detailedFaqs,
    commonMisconceptions,
    glossary,
    didYouKnow
  };
}
