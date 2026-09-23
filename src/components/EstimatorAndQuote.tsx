import { useState } from "react";
import { 
  Calculator, ClipboardList, CheckCircle2, Sliders, ChevronRight, ChevronLeft, 
  Layers, Hammer, Trash2, ShieldCheck, Mail, Phone, Calendar, Upload, FileText, ArrowRight
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface RoofType {
  id: string;
  name: string;
  baseMaterialCostPerM2: number;
  baseLaborCostPerM2: number;
  desc: string;
}

export default function EstimatorAndQuote() {
  const [step, setStep] = useState<"calc" | "quote">("calc");
  const [calcStep, setCalcStep] = useState<number>(1);

  // Estimator States
  const [roofType, setRoofType] = useState<string>("slate");
  const [areaSize, setAreaSize] = useState<number>(75);
  const [pitch, setPitch] = useState<string>("standard");
  const [chimneysCount, setChimneysCount] = useState<number>(1);
  const [valleyLength, setValleyLength] = useState<number>(8);
  const [qualityGrade, setQualityGrade] = useState<string>("premium");

  // Quote Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("residential");
  const [contactMethod, setContactMethod] = useState("phone");
  const [contactTime, setContactTime] = useState("morning");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [photosUploaded, setPhotosUploaded] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const roofTypes: RoofType[] = [
    { id: "slate", name: "Traditional Slate Roof", baseMaterialCostPerM2: 55, baseLaborCostPerM2: 60, desc: "Double-lapped natural slating fixed with dual copper clout nails." },
    { id: "concrete", name: "Concrete Interlocking Tile", baseMaterialCostPerM2: 25, baseLaborCostPerM2: 35, desc: "Cost-effective, highly durable interlocking concrete profiles." },
    { id: "clay", name: "Premium Clay Interlocking Tile", baseMaterialCostPerM2: 38, baseLaborCostPerM2: 42, desc: "Time-honored rich clay tiles for excellent regional insulation." },
    { id: "bitumen", name: "Flat Roof: Multi-Layer Bitumen", baseMaterialCostPerM2: 30, baseLaborCostPerM2: 40, desc: "Reinforced elastomeric torch-on multi-layer waterproofing." },
    { id: "epdm", name: "Flat Roof: EPDM Single-Ply", baseMaterialCostPerM2: 35, baseLaborCostPerM2: 45, desc: "Ultra-durable single-ply rubber membrane with cold adhesive." }
  ];

  const calculateEstimate = () => {
    const selectedRoof = roofTypes.find(r => r.id === roofType) || roofTypes[0];
    
    // Quality multiplier
    let qualityMultiplier = 1.0;
    if (qualityGrade === "heritage") qualityMultiplier = 1.35;
    if (qualityGrade === "standard") qualityMultiplier = 0.9;

    // Pitch multiplier
    let pitchMultiplier = 1.0;
    if (pitch === "steep") pitchMultiplier = 1.25;
    if (pitch === "low") pitchMultiplier = 0.95;

    // Direct Materials Cost
    const rawMaterialPerM2 = selectedRoof.baseMaterialCostPerM2 * qualityMultiplier * pitchMultiplier;
    const totalMaterialsCost = Math.round(areaSize * rawMaterialPerM2);

    // Direct Skilled Labor Cost
    const rawLaborPerM2 = selectedRoof.baseLaborCostPerM2 * pitchMultiplier;
    const totalLaborCost = Math.round(areaSize * rawLaborPerM2);

    // Leadwork Detailing
    const chimneyCost = chimneysCount * 320; // Flashing, apron, soakers per stack
    const valleyCost = valleyLength * 45; // Code 5 milled lead valley per meter
    const totalLeadworkCost = chimneyCost + valleyCost;

    // Site Logistics (Scaffolding & Skip hire scaled by area & pitch)
    const scaffoldingCost = areaSize > 120 ? 1500 : areaSize > 60 ? 950 : 650;
    const wasteDisposalCost = areaSize > 100 ? 550 : 350;
    const totalLogisticsCost = scaffoldingCost + wasteDisposalCost;

    // Total cost calculation
    const overallSubtotal = totalMaterialsCost + totalLaborCost + totalLeadworkCost + totalLogisticsCost;
    const lowEstimate = Math.round(overallSubtotal * 0.95);
    const highEstimate = Math.round(overallSubtotal * 1.08);

    return {
      materials: totalMaterialsCost,
      labor: totalLaborCost,
      leadwork: totalLeadworkCost,
      logistics: totalLogisticsCost,
      low: lowEstimate,
      high: highEstimate,
      selectedRoofLabel: selectedRoof.name
    };
  };

  const estResult = calculateEstimate();

  const handleApplyEstimateToQuote = () => {
    // Populate form variables based on estimator details
    const notesStr = `Estimator Summary: Calculated standard estimate for ${areaSize}m² of ${estResult.selectedRoofLabel} (${qualityGrade} quality grade, ${pitch} pitch). Calculated estimated cost range: £${estResult.low.toLocaleString()} - £${estResult.high.toLocaleString()}. Details: ${chimneysCount} chimneys, ${valleyLength}m valleys.`;
    setAdditionalNotes(notesStr);
    setStep("quote");
  };

  const handlePhotoUploadSimulation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const fakeUploadedList = filesArray.map(f => f.name);
      setPhotosUploaded((prev) => [...prev, ...fakeUploadedList]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Real validation and response simulation without broken external APIs
  };

  return (
    <section id="estimator" className="py-24 bg-navy-deep text-slate-300 border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-Panel Title Banner with Multi-Directional Scroll Animations */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 overflow-hidden">
          <div className="max-w-2xl overflow-hidden">
            <ScrollReveal direction="down" delay={0.05} distance={18}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  SURVEY PLANNING &amp; QUOTE DESK
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12} distance={38}>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                Bespoke Roofing Planner &amp; Survey
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18} distance={30}>
              <p className="font-body text-slate-400 text-sm mt-2 leading-relaxed">
                Calculate an itemized standard cost estimate for your roofing area below, then directly route the details into our surveyor calendar to secure your free 48-hour physical site appraisal.
              </p>
            </ScrollReveal>
          </div>

          {/* Sub Navigation Switcher: Top to Bottom */}
          <ScrollReveal direction="down" delay={0.2} distance={20}>
            <div className="flex items-center gap-1.5 p-1 bg-navy-slate/80 border border-navy-border rounded-lg shrink-0">
              <button
                onClick={() => setStep("calc")}
                className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 focus:outline-none cursor-pointer ${
                  step === "calc"
                    ? "bg-copper text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>1. Cost Estimator</span>
              </button>
              <button
                onClick={() => setStep("quote")}
                className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 focus:outline-none cursor-pointer ${
                  step === "quote"
                    ? "bg-copper text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ClipboardList className="w-3.5 h-3.5" />
                <span>2. Request Survey</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Multi-Step Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {step === "calc" ? (
            /* ==================== PANEL 1: THE INTERACTIVE ESTIMATOR ==================== */
            <>
              {/* Left Column: Estimator Parameter Knobs (Cols 1-7) - Slide from Left */}
              <ScrollReveal direction="left" delay={0.1} distance={35} className="lg:col-span-7">
                <div className="bg-navy-slate border border-navy-border rounded-xl p-6 lg:p-8 space-y-8 shadow-xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-navy-border/60">
                    <Sliders className="w-4.5 h-4.5 text-copper" />
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      Roof Area &amp; Layout Parameters
                    </span>
                  </div>

                {/* Sub-step indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Step {calcStep} of 3</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((s) => (
                      <span key={s} className={`w-6 h-1 rounded ${s <= calcStep ? "bg-copper" : "bg-navy-deep"}`}></span>
                    ))}
                  </div>
                </div>

                {calcStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-150">
                    <div className="space-y-2">
                      <label className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                        1. Select Primary Roof Profile Type
                      </label>
                      <p className="font-body text-[11px] text-slate-400 mb-4">
                        Choose the material type that matches your project requirements or existing roofing style.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {roofTypes.map((rt) => (
                          <label
                            key={rt.id}
                            onClick={() => setRoofType(rt.id)}
                            className={`p-3.5 border rounded-lg cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                              roofType === rt.id
                                ? "bg-copper/5 border-copper text-white shadow-inner"
                                : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="estimator_roof_type"
                              checked={roofType === rt.id}
                              onChange={() => {}} // Switched by parent label click
                              className="mt-1 accent-copper shrink-0 pointer-events-none"
                            />
                            <div className="space-y-0.5">
                              <span className="font-display text-xs font-bold block">{rt.name}</span>
                              <span className="font-body text-[10px] text-slate-400 leading-normal block">{rt.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {calcStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-150">
                    {/* Size selector */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                          2. Estimated Roof Area (m²)
                        </label>
                        <span className="font-mono text-sm font-bold text-white bg-navy-deep px-3 py-1 border border-navy-border rounded">
                          {areaSize} m²
                        </span>
                      </div>
                      <p className="font-body text-[11px] text-slate-400">
                        Input the flat ground footprints of the slopes, multiplied roughly by 1.15 to account for angle pitches.
                      </p>
                      <input
                        type="range"
                        id="roof-area-slider"
                        aria-label="Estimated Roof Area in square meters"
                        min="25"
                        max="350"
                        step="5"
                        value={areaSize}
                        onChange={(e) => setAreaSize(Number(e.target.value))}
                        className="w-full h-2 bg-navy-deep rounded-lg appearance-none cursor-pointer accent-copper"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-slate-500">
                        <span>Min: 25 m² (Extensions)</span>
                        <span>Mid: 180 m² (Detached Villa)</span>
                        <span>Max: 350 m² (Commercial Estate)</span>
                      </div>
                    </div>

                    {/* Pitch Angle Option */}
                    <div className="space-y-2">
                      <label className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                        3. Slope Pitch &amp; Steepness
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { id: "low", label: "Low Pitch", detail: "Under 25° (Easy Access)" },
                          { id: "standard", label: "Standard Pitch", detail: "25° - 45° (Average)" },
                          { id: "steep", label: "High / Steep Pitch", detail: "Over 45° (Harness/Scaffold)" }
                        ].map((p) => (
                          <label
                            key={p.id}
                            onClick={() => setPitch(p.id)}
                            className={`p-3 border rounded-lg cursor-pointer text-center flex flex-col justify-between items-center select-none ${
                              pitch === p.id
                                ? "bg-copper/5 border-copper text-copper"
                                : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-400"
                            }`}
                          >
                            <input
                              type="radio"
                              name="estimator_pitch"
                              checked={pitch === p.id}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            <span className="font-display text-xs font-bold block text-white uppercase mb-1">{p.label}</span>
                            <span className="font-body text-[9px] text-slate-400 block">{p.detail}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {calcStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-150">
                    {/* Material Quality Selection */}
                    <div className="space-y-2">
                      <label className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                        4. Material Quality &amp; Guarantee Class
                      </label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {[
                          { id: "standard", label: "Standard Contractor Grade", desc: "Basic certified concrete or interlocking clay profiles, standard roofing felts, standard timber battens." },
                          { id: "premium", label: "Premium Trade Specification (Recommended)", desc: "Hand-graded Spanish slates or natural clay tile lots, top-performance breathable membranes, preservative-treated counter-laths." },
                          { id: "heritage", label: "Heritage / Conservation Specification", desc: "Premium hand-selected Welsh Penrhyn slates, heavyweight Code 5 leadwork lines, authentic dry lime mortar pointing caps." }
                        ].map((g) => (
                          <label
                            key={g.id}
                            onClick={() => setQualityGrade(g.id)}
                            className={`p-3 border rounded-lg cursor-pointer transition-all flex items-start gap-3 select-none ${
                              qualityGrade === g.id
                                ? "bg-copper/5 border-copper text-white shadow"
                                : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="estimator_quality"
                              checked={qualityGrade === g.id}
                              onChange={() => {}}
                              className="mt-1 accent-copper shrink-0 pointer-events-none"
                            />
                            <div className="space-y-0.5">
                              <span className="font-display text-xs font-bold block">{g.label}</span>
                              <span className="font-body text-[10px] text-slate-400 block">{g.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Layout Detailing additions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Chimneys count */}
                      <div className="space-y-1.5">
                        <label className="block font-display text-[11px] font-bold text-white uppercase tracking-wider">
                          Chimneys Stacks on Roof ({chimneysCount})
                        </label>
                        <select
                          value={chimneysCount}
                          onChange={(e) => setChimneysCount(Number(e.target.value))}
                          className="w-full bg-navy-deep border border-navy-border rounded-lg text-xs text-white p-2.5 focus:outline-none focus:border-copper"
                        >
                          <option value={0}>No chimneys</option>
                          <option value={1}>1 Chimney stack</option>
                          <option value={2}>2 Chimney stacks</option>
                          <option value={3}>3+ Chimney stacks</option>
                        </select>
                      </div>

                      {/* Valleys count */}
                      <div className="space-y-1.5">
                        <label className="block font-display text-[11px] font-bold text-white uppercase tracking-wider">
                          Estimated Valleys Run Length
                        </label>
                        <select
                          value={valleyLength}
                          onChange={(e) => setValleyLength(Number(e.target.value))}
                          className="w-full bg-navy-deep border border-navy-border rounded-lg text-xs text-white p-2.5 focus:outline-none focus:border-copper"
                        >
                          <option value={0}>No valleys (Straight Gable)</option>
                          <option value={4}>Approx 4m (Simple roof layout)</option>
                          <option value={8}>Approx 8m (Standard Hip &amp; Valley)</option>
                          <option value={16}>Approx 16m+ (Complex dormers &amp; hips)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step navigation buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-border/60">
                  <button
                    onClick={() => setCalcStep((prev) => Math.max(1, prev - 1))}
                    disabled={calcStep === 1}
                    className="btn-outline !py-2 !px-4 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 focus:outline-none"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  
                  {calcStep < 3 ? (
                    <button
                      onClick={() => setCalcStep((prev) => Math.min(3, prev + 1))}
                      className="btn-primary !py-2 !px-4 flex items-center gap-1 focus:outline-none"
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleApplyEstimateToQuote}
                      className="btn-primary !py-2.5 !px-5 flex items-center gap-1.5 focus:outline-none"
                    >
                      <ClipboardList className="w-4 h-4" />
                      <span>Use This Estimate for Survey Request</span>
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Calculations & Bill of Materials Breakdown (Cols 8-12) - Slide from Right */}
            <ScrollReveal direction="right" delay={0.15} distance={35} className="lg:col-span-5">
              <div className="bg-navy-slate border border-navy-border rounded-xl p-6 shadow-xl space-y-6">
                <div className="pb-4 border-b border-navy-border/60">
                  <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                    ITEMIZED MATERIAL &amp; LABOR CALCULATION
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-tight">
                    Estimated Cost Summary
                  </h3>
                </div>

                {/* Simulated Telemetry Pricing box */}
                <div className="p-5 bg-navy-deep rounded-xl border border-navy-border text-center space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-copper/5 blur-xl pointer-events-none"></div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-slate-400 block font-semibold">
                    STANDARD PROJECT PRICE RANGE
                  </span>
                  
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5 tabular-nums">
                    <span>£{estResult.low.toLocaleString()}</span>
                    <span className="text-slate-500 font-light text-base">-</span>
                    <span>£{estResult.high.toLocaleString()}</span>
                  </div>

                  <p className="font-body text-[10px] text-slate-500 leading-normal">
                    *Standard budget range covering direct labor, scaffolding staging, and materials. Subject to physical structural assessment.
                  </p>
                </div>

                {/* Detailed Itemized List (No Pills! Uses clean, thin borders and plain text) */}
                <div className="space-y-3.5 pt-2 text-xs font-body">
                  <div className="flex items-center justify-between py-1 border-b border-navy-border/40 text-slate-400">
                    <span>Selected Profile Type</span>
                    <span className="text-white font-semibold font-display uppercase tracking-wide text-[11px]">
                      {estResult.selectedRoofLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-navy-border/40 text-slate-400">
                    <span>Target Size Area</span>
                    <span className="text-white font-mono font-bold tabular-nums">
                      {areaSize} m²
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-copper shrink-0" />
                      <span>Direct Roofing Materials</span>
                    </span>
                    <span className="font-mono text-white font-bold tabular-nums">
                      £{estResult.materials.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Hammer className="w-3.5 h-3.5 text-copper shrink-0" />
                      <span>Direct Slaters &amp; Trades Labor</span>
                    </span>
                    <span className="font-mono text-white font-bold tabular-nums">
                      £{estResult.labor.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-copper shrink-0" />
                      <span>Code 5 Leadwork &amp; Flashings</span>
                    </span>
                    <span className="font-mono text-white font-bold tabular-nums">
                      £{estResult.leadwork.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Trash2 className="w-3.5 h-3.5 text-copper shrink-0" />
                      <span>Scaffolding, Edge-Safety &amp; Skips</span>
                    </span>
                    <span className="font-mono text-white font-bold tabular-nums">
                      £{estResult.logistics.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Quality Grade Highlight Banner */}
                <div className="p-4 bg-navy-deep rounded-lg border border-navy-border flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-[10px] leading-relaxed">
                    <span className="font-display font-bold text-white uppercase block">
                      Quality Level: {qualityGrade}
                    </span>
                    <p className="text-slate-400">
                      Standard counter-battens pressure-treated with anti-fungal lath salts. Backed by 15-Year labor warranties.
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <button
                  onClick={handleApplyEstimateToQuote}
                  className="btn-primary w-full !py-3.5 flex items-center justify-center gap-2 focus:outline-none"
                >
                  <span>Request surveyor call</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </>
        ) : (
          /* ==================== PANEL 2: THE FORM REQUEST ==================== */
          <ScrollReveal direction="up" delay={0.1} distance={30} className="lg:col-span-12 max-w-4xl mx-auto w-full">
            <div className="bg-navy-slate border border-navy-border p-6 lg:p-8 rounded-xl shadow-2xl">
              
              {formSubmitted ? (
                /* Post-Submission Success State */
                <div className="text-center py-12 px-6 space-y-6 max-w-lg mx-auto animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-copper/10 text-copper rounded-full flex items-center justify-center mx-auto ring-8 ring-copper/5">
                    <CheckCircle2 className="w-8 h-8 text-copper" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-extrabold text-white uppercase tracking-tight">
                      SURVEY REGISTRATION COMPLETE
                    </h3>
                    <p className="font-body text-xs text-slate-300 leading-relaxed">
                      Thank you, <strong className="text-white">{name}</strong>. Your structural roofing request has been logged inside our operations calendar. A surveyor will contact you at <strong className="text-white">{phone}</strong> during your preferred <strong className="text-white">{contactTime}</strong> timeframe.
                    </p>
                  </div>

                  <div className="p-4 bg-navy-deep rounded-lg border border-navy-border space-y-2 text-left">
                    <span className="font-display text-[10px] text-copper uppercase tracking-wider block font-bold">
                      WHAT TO EXPECT NEXT:
                    </span>
                    <ul className="space-y-1 text-[10px] text-slate-400 font-body">
                      <li>· A local lead surveyor will phone you to confirm property access.</li>
                      <li>· We will inspect your roof edges, slates, and chimney lead seals.</li>
                      <li>· An itemized, fixed-price final proposal is emailed to you.</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setStep("calc");
                    }}
                    className="btn-outline !px-6 !py-2.5 focus:outline-none"
                  >
                    Return to Estimator
                  </button>
                </div>
              ) : (
                /* Primary Contact form */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="pb-4 border-b border-navy-border flex items-center justify-between">
                    <div>
                      <span className="font-display text-[10px] text-copper uppercase tracking-widest block font-bold">
                        PHYSICAL SITE APPRAISAL FORM
                      </span>
                      <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                        Register Your Roofing Inquiry
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-body">
                      * Indicated required fields
                    </span>
                  </div>

                  {/* Dual Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="quote-name" className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Walker"
                        className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="quote-phone" className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        aria-required="true"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +353 85 224 8597"
                        className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="quote-email" className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="quote-address" className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Property Address &amp; Postcode *
                      </label>
                      <input
                        id="quote-address"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="street-address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Full street address and postcode"
                        className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                      />
                    </div>
                  </div>

                  {/* Toggle Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Property Use Type
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["residential", "commercial", "other"].map((type) => (
                          <label
                            key={type}
                            onClick={() => setPropertyType(type)}
                            className={`p-2.5 border rounded-lg cursor-pointer text-center text-[10px] font-display uppercase tracking-wider font-bold block select-none ${
                              propertyType === type
                                ? "bg-copper/5 border-copper text-copper"
                                : "bg-navy-deep border-navy-border text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="property_type"
                              checked={propertyType === type}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Preferred Callback Hour
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {["morning", "afternoon", "evening", "anytime"].map((time) => (
                          <label
                            key={time}
                            onClick={() => setContactTime(time)}
                            className={`p-2.5 border rounded-lg cursor-pointer text-center text-[9px] font-display uppercase tracking-wider font-bold block select-none ${
                              contactTime === time
                                ? "bg-copper/5 border-copper text-copper"
                                : "bg-navy-deep border-navy-border text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="contact_time"
                              checked={contactTime === time}
                              onChange={() => {}}
                              className="sr-only"
                            />
                            {time}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notes / Details */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="quote-notes" className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Project Details / Survey Objectives
                      </label>
                      {additionalNotes.startsWith("Estimator Summary") && (
                        <span className="text-[10px] text-copper font-display font-semibold uppercase">
                          Estimator parameters loaded
                        </span>
                      )}
                    </div>
                    <textarea
                      id="quote-notes"
                      rows={4}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Symptoms observed (e.g. ceiling stains, damp smell in loft), target slate style, or access instructions..."
                      className="w-full bg-navy-deep border border-navy-border rounded-lg p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-copper leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Mock Image Upload Tool (Zero dead components) */}
                  <div className="space-y-2">
                    <label className="block font-display text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Upload Photos of Your Roof
                    </label>
                    
                    <div className="relative border-2 border-dashed border-navy-border bg-navy-deep/60 hover:bg-navy-deep/90 p-6 rounded-xl flex flex-col items-center justify-center text-center transition-colors group cursor-pointer hover:border-copper/40">
                      <input
                        type="file"
                        multiple
                        onChange={handlePhotoUploadSimulation}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <Upload className="w-8 h-8 text-copper mb-2 transition-transform group-hover:scale-105" />
                      <span className="font-display text-xs font-bold text-white uppercase block">
                        Drag photos of your roof or leaks here
                      </span>
                      <span className="font-body text-[10px] text-slate-400 mt-1 block">
                        Supports JPEG, PNG, or PDF. Max 25MB total.
                      </span>
                    </div>

                    {/* Show uploaded items */}
                    {photosUploaded.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {photosUploaded.map((n, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 bg-navy-deep px-2.5 py-1 text-[9px] font-mono text-slate-300 rounded border border-navy-border">
                            <FileText className="w-3 h-3 text-copper shrink-0" />
                            <span className="max-w-[120px] truncate">{n}</span>
                            <button
                              type="button"
                              onClick={() => setPhotosUploaded((prev) => prev.filter((_, i) => i !== idx))}
                              className="text-slate-500 hover:text-white ml-1.5 focus:outline-none"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Call-to-Action Submit */}
                  <div className="pt-4 border-t border-navy-border/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn-primary !px-6 !py-4 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      <span>Register for Free Roofing consultation</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-body justify-center">
                      <ShieldCheck className="w-4 h-4 text-copper" />
                      <span>Zero Obligation · GDPR Compliant</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        )}

        </div>
      </div>
    </section>
  );
}
