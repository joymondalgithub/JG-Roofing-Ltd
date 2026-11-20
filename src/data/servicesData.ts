export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface CoreServicePageData {
  slug: "roof-repairs" | "new-roofs" | "chimney-leadwork" | "gutters-fascias";
  path: string;
  navLabel: string;
  shortTagline: string;
  eyebrow: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  heroSummary: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  benefits: ServiceBenefit[];
  specifications: string[];
  materials: string[];
  compliance: string;
  warranty: string;
  formServiceValue: string;
  faqs: ServiceFAQ[];
}

export const CORE_SERVICES: CoreServicePageData[] = [
  {
    slug: "roof-repairs",
    path: "/services/roof-repairs",
    navLabel: "Roof Repairs & Storm Damage",
    shortTagline: "Emergency leak detection, slipped slates & rapid storm remediation",
    eyebrow: "FORENSIC LEAK DETECTION & STORM RESPONSE",
    h1: "Roof Repairs & Storm Damage Remediation in Dublin",
    seoTitle: "Roof Repairs & Storm Damage Dublin | JG Roofing Ltd",
    seoDescription:
      "Fast, certified roof repairs, emergency storm damage make-safes, slipped slate replacement, and forensic leak detection across Terenure, Rathgar, and Greater Dublin.",
    heroSummary:
      "Water rarely drips directly beneath its entry point. Our Dublin roofing specialists perform forensic moisture tracing, replace slipped slates and cracked tiles, and secure storm-damaged roofs with permanent BS 5534-compliant repairs.",
    heroImage: "/assets/images/dry-ridge-conversion.webp",
    heroImageAlt: "Mechanical dry ridge and roof repair craftsmanship by JG Roofing Ltd in Dublin",
    secondaryImage: "/assets/images/pitched-tile-stripping.webp",
    secondaryImageAlt: "Pitched tile stripping and timber rafter inspection during Dublin roof repair",
    overviewHeading: "Surgical Roof Repairs Without Unnecessary Full Replacements",
    overviewParagraphs: [
      "If your underlying timber rafters and breathable membrane remain structurally sound, a targeted repair is the smartest investment for your home. JG Roofing Ltd diagnoses the exact capillary path of water ingress before recommending work—saving Dublin homeowners thousands compared to premature strip-downs.",
      "From wind-lifted ridge tiles after Atlantic storms to nail-sick Victorian slates in Terenure and Rathgar, our directly employed slaters work from properly boarded crawl systems so surrounding tiles are never cracked during remediation."
    ],
    benefits: [
      {
        title: "Rapid Dublin Storm Response",
        description:
          "Priority emergency weatherproofing tarpaulins and temporary make-safes when high winds or heavy rain expose your attic."
      },
      {
        title: "Forensic Moisture & Timber Diagnosis",
        description:
          "Internal loft moisture readings, valley checks, and photographic evidence showing the exact cause of every leak before we quote."
      },
      {
        title: "Colour-Matched Slate & Tile Stock",
        description:
          "We source matching natural Spanish/Welsh slates and legacy concrete or clay tile profiles so repairs blend seamlessly."
      },
      {
        title: "24-Month Leak-Cure Guarantee",
        description:
          "Every targeted roof repair is backed by our written watertight workmanship warranty with clear, fixed upfront pricing."
      }
    ],
    specifications: [
      "Full loft & eaves moisture meter inspection to trace capillary water tracks",
      "Surgical replacement of cracked or wind-blown slates and interlocking tiles",
      "Re-pinning slipped natural slates with copper/stainless tingles or dual copper clout nails",
      "Re-bedding loose ridge and hip tiles or upgrading to mortarless dry-ridge systems",
      "Perished felt lap repair and replacement of decayed eaves support trays",
      "Post-repair photographic sign-off and magnetic nail sweep of driveways"
    ],
    materials: [
      "Natural Salvage & Spanish Slate",
      "Colour-Matched Clay & Concrete Tiles",
      "BS 5534 Breathable Patching Membrane",
      "Solid Copper Clout Nails & Tingles",
      "Polymer-Modified Pointing Mortar"
    ],
    compliance:
      "Executed in accordance with BS 5534:2014+A2:2018 and BS 8000-6 slating and tiling workmanship codes.",
    warranty: "24-Month Leak-Cure Guarantee on all targeted repairs",
    formServiceValue: "Roof Repairs & Storm Damage",
    faqs: [
      {
        question: "How quickly can JG Roofing Ltd respond to an active roof leak in Dublin?",
        answer:
          "For active water ingress or storm damage across Dublin, we prioritize urgent make-safe visits—typically inspecting and weatherproofing within 24 hours, with emergency tarpaulin callouts available during severe weather."
      },
      {
        question: "How do I know whether my roof needs a repair or a full replacement?",
        answer:
          "During our free roof survey, we inspect your loft timbers, membrane condition, and slate/tile integrity. If over 80% of the roof structure is sound and leaks are isolated to ridges, valleys, or slipped tiles, we will always recommend a cost-effective repair."
      },
      {
        question: "Will you provide photographs of the roof damage before starting work?",
        answer:
          "Yes. Every survey includes clear before-and-after photography so you can see the exact issue—whether perished felt, cracked mortar, or slipped slates—alongside an itemized fixed-price quote."
      },
      {
        question: "Do you handle insurance reports for storm-damaged roofs?",
        answer:
          "Yes. We provide detailed written damage assessments, photographic evidence, and itemized repair quotations suitable for Irish home insurance claims."
      }
    ]
  },
  {
    slug: "new-roofs",
    path: "/services/new-roofs",
    navLabel: "New Roof Installations",
    shortTagline: "Natural slate, pitched tile replacements & torch-on/EPDM flat roofs",
    eyebrow: "COMPLETE STRUCTURAL RE-ROOFING & FLAT SYSTEMS",
    h1: "New Roof Installations — Pitched Slate, Tile & Flat Roofing",
    seoTitle: "New Roof Installations Dublin | Slate, Tile & Flat Roofs | JG Roofing Ltd",
    seoDescription:
      "Complete pitched roof replacements, natural Welsh & Spanish slate installations, clay tiling, and torch-on/EPDM flat roofing in Dublin. BS 5534 compliant with a 15-year warranty.",
    heroSummary:
      "Built for a 50-to-100-year service life. We strip ageing roofs back to bare structural timbers, level and reinforce C24 rafters, install NSAI-approved breathable membranes, and finish in hand-graded natural slate, interlocking clay tiles, or insulated flat roofing systems.",
    heroImage: "/assets/images/about-construction-slate.webp",
    heroImageAlt: "Natural slate installation with counter-battens by JG Roofing Ltd Dublin",
    secondaryImage: "/assets/images/flat-roof-torch-on.webp",
    secondaryImageAlt: "Multi-layer SBS torch-on elastomeric flat roof installation in Dublin",
    overviewHeading: "Architectural Pitched & Flat Roofs Engineered for Irish Weather",
    overviewParagraphs: [
      "A new roof is the single most critical structural shield protecting your property's value. At JG Roofing Ltd, we never cut corners on unseen layers—every full replacement begins with certified scaffolding, safe strip-out, and a complete structural evaluation of rafters, wall plates, and purlins.",
      "Whether restoring a Victorian terraced home in Dublin 6 with hand-sorted Spanish or Welsh Penrhyn slate, upgrading a semi-detached residence with dry-fix interlocking tiles, or installing a warm-deck SBS torch-on or EPDM flat roof on an extension or commercial block, our directly employed craftsmen deliver uncompromising precision."
    ],
    benefits: [
      {
        title: "15-Year Workmanship Warranty",
        description:
          "Full contractor guarantee covering weather-tightness and structural installation, paired with 30–50 year manufacturer material warranties."
      },
      {
        title: "BS 5534 Counter-Battened Assembly",
        description:
          "Preservative-treated graded laths, eaves ventilation trays, and high-permeability membranes that eliminate loft condensation."
      },
      {
        title: "Pitched & Flat Roof Specialists",
        description:
          "One trusted Dublin team for natural slate, concrete/clay tiles, Velux roof windows, and triple-layer torch-on or EPDM flat roofs."
      },
      {
        title: "Full Site Logistics & Cleanliness",
        description:
          "HSA-compliant scaffolding, licensed skip waste disposal, continuous rain-sheet protection during works, and daily driveway sweeps."
      }
    ],
    specifications: [
      "Complete strip-out of old tiles/slates, perished bitumen felt, and decayed battens",
      "Structural leveling and C24 timber sistering of deflected or weakened rafters",
      "NSAI & BS 5534 breathable vapour-permeable underlay with eaves protector trays",
      "Double-lapped natural slate dual-fixed with solid copper clout nails, or mechanically clipped interlocking tiles",
      "Warm-roof PIR insulation and triple-layer SBS elastomeric torch-on felt or EPDM rubber for flat roofs",
      "Mortarless ventilated dry-ridge and dry-verge perimeter cappings"
    ],
    materials: [
      "Welsh Penrhyn & Spanish Cupa 12 Slate",
      "Interlocking Clay & Concrete Tiles",
      "Triple-Ply SBS Elastomeric Bitumen",
      "EPDM Single-Ply Rubber Membrane",
      "C24 Graded Structural Timber & PIR Insulation"
    ],
    compliance:
      "Fully compliant with BS 5534 (Slating & Tiling), BS 8217 (Reinforced Bitumen Flat Roofs), and HSA working-at-height regulations.",
    warranty: "15-Year Comprehensive Workmanship Guarantee + up to 50-Year Material Warranty",
    formServiceValue: "New Roof Installation (Pitched / Flat)",
    faqs: [
      {
        question: "How long does a full residential roof replacement take in Dublin?",
        answer:
          "Most standard semi-detached or terraced re-roofs take between 5 and 10 working days depending on roof size, slate vs. tile specification, and chimney leadwork complexity. Flat roof extensions typically take 2 to 4 working days."
      },
      {
        question: "Will my home stay dry while the old roof is being stripped?",
        answer:
          "Absolutely. We strip and felt in controlled sections and maintain heavy-duty weatherproof tarpaulin coverage whenever rain is forecast, keeping your ceilings and loft dry throughout the project."
      },
      {
        question: "Should I choose natural slate or interlocking concrete/clay tiles?",
        answer:
          "Natural slate offers a timeless heritage finish and an 80–100 year lifespan, making it ideal for period homes and conservation zones. Modern interlocking clay and concrete tiles provide outstanding wind resistance at a lower material budget. We bring physical samples to every free survey."
      },
      {
        question: "Do you install insulated warm flat roofs on kitchen extensions and commercial units?",
        answer:
          "Yes. We build fully insulated warm-deck flat roofs using WBP structural plywood, vapour control layers, high-density PIR insulation boards, and either triple-layer SBS torch-on membrane or seamless EPDM rubber."
      }
    ]
  },
  {
    slug: "chimney-leadwork",
    path: "/services/chimney-leadwork",
    navLabel: "Chimney Repairs & Leadwork",
    shortTagline: "Code 4 & 5 architectural lead flashings, repointing & chimney restoration",
    eyebrow: "ARCHITECTURAL LEAD FABRICATION & MASONRY CARE",
    h1: "Chimney Repairs, Repointing & Architectural Leadwork",
    seoTitle: "Chimney Repairs & Leadwork Dublin | Code 4 & 5 Flashings | JG Roofing Ltd",
    seoDescription:
      "Specialist chimney stack repointing, flaunching, cowls, and bespoke Code 4 & Code 5 milled lead flashings, valleys, and back-gutters in Dublin by JG Roofing Ltd.",
    heroSummary:
      "Over 60% of persistent roof leaks originate around chimney stacks and weathered valley junctions. Our craftsmen hand-dress and weld British Standard Code 4 and Code 5 milled lead flashings and restore crumbling brickwork stacks to permanent weather-tight integrity.",
    heroImage: "/assets/images/skylight-underlay.webp",
    heroImageAlt: "Precision roof flashing, breathable underlay, and weather-sealed framing in Dublin",
    secondaryImage: "/assets/images/structural-timber-truss.webp",
    secondaryImageAlt: "Structural roof timber framing around chimney and dormer junctions",
    overviewHeading: "Bespoke Milled Leadwork & Structural Chimney Restoration",
    overviewParagraphs: [
      "Exposed above the roofline, Dublin chimneys endure relentless wind-driven rain and freeze-thaw cycles. Cracked cement flaunching, eroded mortar beds, and split or undersized lead flashings allow water to track silently down chimney breasts into bedroom ceilings.",
      "JG Roofing Ltd never relies on temporary bitumen tape or paint-on sealants. We rake out decayed brickwork joints, repoint with breathable hydraulic lime or weatherproof mortar, and fabricate heavyweight Code 4 step flashings and Code 5 back-gutters, saddles, and valleys fitted with expansion joints and finished in patination oil."
    ],
    benefits: [
      {
        title: "Code 4 & Code 5 Milled Lead",
        description:
          "We fabricate genuine BS EN 12588 rolled lead sheet sized correctly for thermal expansion so joints never split over seasonal shifts."
      },
      {
        title: "Permanent Chimney Leak Cure",
        description:
          "Complete replacement of failed back-gutters, aprons, stepped cover flashings, and hidden slate soakers."
      },
      {
        title: "Masonry Repointing & Flaunching",
        description:
          "Deep mortar raking, brick replacement, pot re-bedding, and weather-sloped concrete flaunching to shed standing water."
      },
      {
        title: "Heritage & Conservation Ready",
        description:
          "Traditional lime mortar matching and lead-welded detailing ideal for period red-brick homes in Dublin 4, 6, and 6W."
      }
    ],
    specifications: [
      "Code 4 milled lead sheet for stepped cover flashings, aprons, and interleaved soakers",
      "Code 5 milled lead sheet for chimney back-gutters, dormer cheeks, box gutters, and valleys",
      "Properly spaced lead expansion bays (max 1.5m lengths) with copper fixing clips",
      "On-site lead welding and protective patination oil treatment to prevent carbonate staining",
      "Chimney stack mortar raking (25mm depth), repointing, cracked pot replacement, and rain/bird cowls",
      "Safe chimney cap-off ventilation for disused flues to stop internal damp condensation"
    ],
    materials: [
      "BS EN 12588 Code 4 & Code 5 Milled Lead",
      "Lead Patination Oil & Copper Clips",
      "NHL Hydraulic Lime & Sand/Cement Mortar",
      "Polymer Lead-Fixing Sealant",
      "Terracotta Pots & Stainless Steel Cowls"
    ],
    compliance:
      "Fabricated strictly to Lead Contractors Association (LCA) guidelines and BS EN 12588 milled lead sheet standards.",
    warranty: "15-Year Workmanship Guarantee on full leadwork renewals",
    formServiceValue: "Chimney Repairs & Leadwork",
    faqs: [
      {
        question: "Why does damp keep appearing around my upstairs chimney breast?",
        answer:
          "The most common culprits are split lead back-gutters behind the stack, missing slate soakers, perished mortar joints, or uncapped disused chimney flues collecting rainwater. Our physical inspection identifies the exact source immediately."
      },
      {
        question: "Why is Code 4 / Code 5 milled lead better than stick-on flashing tape?",
        answer:
          "Adhesive flashing tapes peel and crack within 1 to 3 winters under UV and frost exposure. Properly dressed and chased Code 4 and Code 5 milled lead forms a permanent metallurgical seal lasting 60+ years."
      },
      {
        question: "Should I cap off a chimney flue I no longer use?",
        answer:
          "Yes—but it must be fitted with a ventilated rain cowl or air-brick cap rather than sealed completely airtight. Ventilated capping keeps rain and birds out while allowing the chimney shaft to breathe and stay dry."
      },
      {
        question: "Do you need scaffolding to repair or repoint a chimney?",
        answer:
          "For full stack rebuilds, heavy repointing, or lead back-gutter replacements, safe chimney scaffolding ensures our tradesmen can work safely to HSA standards without risking damage to surrounding slates."
      }
    ]
  },
  {
    slug: "gutters-fascias",
    path: "/services/gutters-fascias",
    navLabel: "Guttering, Fascias & Soffits",
    shortTagline: "Seamless gutters, roofline fascia boards, ventilated soffits & dry-verge",
    eyebrow: "ROOFLINE PROTECTION & RAINWATER MANAGEMENT",
    h1: "Guttering, Fascias & Soffits Installation & Repairs in Dublin",
    seoTitle: "Guttering, Fascias & Soffits Dublin | Roofline Specialists | JG Roofing Ltd",
    seoDescription:
      "Complete fascia, soffit, downpipe, and seamless gutter installations and repairs across Dublin. Protect eaves timbers and brickwork from rainwater overflow with JG Roofing Ltd.",
    heroSummary:
      "Leaking gutters and rotted timber fascia boards funnel thousands of litres of rainwater directly into exterior walls and eaves rafters. We install heavy-duty uPVC and seamless aluminium guttering, ventilated soffits, and full replacement fascia boards engineered for effortless drainage.",
    heroImage: "/assets/images/residential-scaffolding.webp",
    heroImageAlt: "Residential roofline, fascia, soffit, and eaves access setup in Dublin",
    secondaryImage: "/assets/images/commercial-flat-roof.webp",
    secondaryImageAlt: "Commercial and residential guttering and roofline trim installation by JG Roofing Ltd",
    overviewHeading: "Complete Roofline Renewal — Never Capping Over Rotten Timber",
    overviewParagraphs: [
      "Many budget roofline installers nail thin plastic capping boards directly over decaying wooden fascias, trapping moisture and accelerating structural rafter-end rot. At JG Roofing Ltd, we strip compromised timber completely, treat and repair exposed rafter feet, and fit full structural 18mm–22mm replacement fascia boards.",
      "Paired with continuous eaves felt support trays, bird combs, ventilated soffits, and precision-leveled high-capacity half-round, ogee, or seamless aluminium gutters, your entire roofline stays crisp, maintenance-free, and storm-ready."
    ],
    benefits: [
      {
        title: "Full Replacement, Not Cheap Over-Cladding",
        description:
          "We remove decayed timber boards completely and inspect every rafter tail before fixing solid structural fascia boards."
      },
      {
        title: "Eaves Felt Trays & Attic Airflow",
        description:
          "Rigid eaves protector trays guide water cleanly into the gutter while vented soffits keep your loft dry and condensation-free."
      },
      {
        title: "High-Capacity Rainwater Systems",
        description:
          "Choice of UV-stabilized uPVC (Anthracite Grey, Black, Rosewood, White) or jointless seamless aluminium guttering."
      },
      {
        title: "Zero-Maintenance Dry-Verge Upgrade",
        description:
          "Replace crumbling gable-end cement mortar with mechanically clipped dry-verge units that resist gale-force uplift."
      }
    ],
    specifications: [
      "Full removal of perished timber fascia/soffit boards and rusty gutter brackets",
      "Inspection and preservative treatment/splicing of exposed rafter ends",
      "Installation of solid 18mm–22mm UV-stabilized uPVC or powder-coated aluminium fascia",
      "Continuous soffit ventilation strips and rigid plastic eaves underlay support trays",
      "Laser-leveled gutter fall calibration with heavy-duty stainless steel fixings",
      "Downpipe, swan-neck, hopper, and hedgehog/leaf-guard integration as required"
    ],
    materials: [
      "18mm–22mm Solid Replacement uPVC Fascia",
      "Seamless Powder-Coated Aluminium Gutters",
      "Ventilated Hollow & Flat Soffit Boards",
      "Rigid Eaves Felt Support Trays & Bird Combs",
      "A4 Stainless Steel Poly-Top Nails & Brackets"
    ],
    compliance:
      "Installed to BS EN 12056-3 roof drainage sizing standards with integrated BS 5250 eaves condensation ventilation.",
    warranty: "15-Year Workmanship & Colour-Fastness Guarantee",
    formServiceValue: "Guttering, Fascias & Soffits",
    faqs: [
      {
        question: "What is the difference between full fascia replacement and over-capping?",
        answer:
          "Over-capping covers old rotten wood with a thin 9mm plastic skin, which traps moisture and fails quickly. Full replacement removes the decayed wood entirely and installs a thick structural fascia board directly to healthy rafter ends."
      },
      {
        question: "Do you repair leaking gutter joints or only install full new systems?",
        answer:
          "We handle both. If your existing gutters just need re-leveling, new rubber union seals, bracket reinforcement, or a replacement downpipe section, we carry out straightforward repairs without pushing a full replacement."
      },
      {
        question: "What colours and gutter styles are available for Dublin homes?",
        answer:
          "Our most popular finishes are Anthracite Grey (RAL 7016), Jet Black, Classic White, and Heritage Cast-Iron Effect in half-round, deep-flow, square-line, and seamless aluminium profiles."
      },
      {
        question: "Why do I need eaves felt trays when replacing gutters and fascias?",
        answer:
          "Older roofing felt often rots away at the bottom edge behind the gutter, allowing wind-driven rain to run behind the fascia board into your walls. Rigid eaves trays bridge that gap permanently so every drop lands inside the gutter."
      }
    ]
  }
];

export function getServiceBySlug(slug: string | undefined): CoreServicePageData | undefined {
  return CORE_SERVICES.find((s) => s.slug === slug);
}
