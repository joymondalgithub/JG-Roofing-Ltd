import { useState, useEffect } from "react";
import {
  Calculator,
  ClipboardList,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Layers,
  Hammer,
  Trash2,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import QuoteForm from "./QuoteForm";

interface RoofType {
  id: string;
  name: string;
  baseMaterialCostPerM2: number;
  baseLaborCostPerM2: number;
  desc: string;
}

interface EstimatorAndQuoteProps {
  defaultTab?: "calc" | "quote";
  defaultService?: string;
}

export default function EstimatorAndQuote({
  defaultTab = "calc",
  defaultService = "New Roof Installation (Pitched / Flat)",
}: EstimatorAndQuoteProps) {
  const [step, setStep] = useState<"calc" | "quote">(defaultTab);
  const [calcStep, setCalcStep] = useState<number>(1);

  // Estimator States
  const [roofType, setRoofType] = useState<string>("slate");
  const [areaSize, setAreaSize] = useState<number>(75);
  const [pitch, setPitch] = useState<string>("standard");
  const [chimneysCount, setChimneysCount] = useState<number>(1);
  const [valleyLength, setValleyLength] = useState<number>(8);
  const [qualityGrade, setQualityGrade] = useState<string>("premium");
  const [prefilledNotes, setPrefilledNotes] = useState<string>("");

  useEffect(() => {
    setStep(defaultTab);
  }, [defaultTab]);

  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const custom = e as CustomEvent<"calc" | "quote">;
      if (custom.detail === "calc" || custom.detail === "quote") {
        setStep(custom.detail);
      }
    };
    window.addEventListener("jg:switch-planner-tab", handleSwitchTab);
    return () =>
      window.removeEventListener("jg:switch-planner-tab", handleSwitchTab);
  }, []);

  const roofTypes: RoofType[] = [
    {
      id: "slate",
      name: "Traditional Slate Roof",
      baseMaterialCostPerM2: 55,
      baseLaborCostPerM2: 60,
      desc: "Double-lapped natural slating fixed with dual copper clout nails.",
    },
    {
      id: "concrete",
      name: "Concrete Interlocking Tile",
      baseMaterialCostPerM2: 25,
      baseLaborCostPerM2: 35,
      desc: "Cost-effective, highly durable interlocking concrete profiles.",
    },
    {
      id: "clay",
      name: "Premium Clay Interlocking Tile",
      baseMaterialCostPerM2: 38,
      baseLaborCostPerM2: 42,
      desc: "Time-honored rich clay tiles for excellent regional insulation.",
    },
    {
      id: "bitumen",
      name: "Flat Roof: Multi-Layer Bitumen",
      baseMaterialCostPerM2: 30,
      baseLaborCostPerM2: 40,
      desc: "Reinforced elastomeric torch-on multi-layer waterproofing.",
    },
    {
      id: "epdm",
      name: "Flat Roof: EPDM Single-Ply",
      baseMaterialCostPerM2: 35,
      baseLaborCostPerM2: 45,
      desc: "Ultra-durable single-ply rubber membrane with cold adhesive.",
    },
  ];

  const calculateEstimate = () => {
    const selectedRoof = roofTypes.find((r) => r.id === roofType) || roofTypes[0];

    let qualityMultiplier = 1.0;
    if (qualityGrade === "heritage") qualityMultiplier = 1.35;
    if (qualityGrade === "standard") qualityMultiplier = 0.9;

    let pitchMultiplier = 1.0;
    if (pitch === "steep") pitchMultiplier = 1.25;
    if (pitch === "low") pitchMultiplier = 0.95;

    const rawMaterialPerM2 =
      selectedRoof.baseMaterialCostPerM2 * qualityMultiplier * pitchMultiplier;
    const totalMaterialsCost = Math.round(areaSize * rawMaterialPerM2);

    const rawLaborPerM2 = selectedRoof.baseLaborCostPerM2 * pitchMultiplier;
    const totalLaborCost = Math.round(areaSize * rawLaborPerM2);

    const chimneyCost = chimneysCount * 320;
    const valleyCost = valleyLength * 45;
    const totalLeadworkCost = chimneyCost + valleyCost;

    const scaffoldingCost = areaSize > 120 ? 1500 : areaSize > 60 ? 950 : 650;
    const wasteDisposalCost = areaSize > 100 ? 550 : 350;
    const totalLogisticsCost = scaffoldingCost + wasteDisposalCost;

    const overallSubtotal =
      totalMaterialsCost + totalLaborCost + totalLeadworkCost + totalLogisticsCost;
    const lowEstimate = Math.round(overallSubtotal * 0.95);
    const highEstimate = Math.round(overallSubtotal * 1.08);

    return {
      materials: totalMaterialsCost,
      labor: totalLaborCost,
      leadwork: totalLeadworkCost,
      logistics: totalLogisticsCost,
      low: lowEstimate,
      high: highEstimate,
      selectedRoofLabel: selectedRoof.name,
    };
  };

  const estResult = calculateEstimate();
  const estimatedRangeSummary = `€${estResult.low.toLocaleString()} - €${estResult.high.toLocaleString()} (${areaSize}m² ${estResult.selectedRoofLabel})`;

  const handleApplyEstimateToQuote = () => {
    const notesStr = `Estimator Summary: Calculated standard estimate for ${areaSize}m² of ${estResult.selectedRoofLabel} (${qualityGrade} quality grade, ${pitch} pitch). Calculated estimated cost range: €${estResult.low.toLocaleString()} - €${estResult.high.toLocaleString()}. Details: ${chimneysCount} chimneys, ${valleyLength}m valleys.`;
    setPrefilledNotes(notesStr);
    setStep("quote");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-navy-deep text-slate-300 border-t border-navy-border scroll-mt-24 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Double-Panel Title Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 overflow-hidden">
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
                Calculate an itemized standard cost estimate for your roofing area below, or jump straight to the survey form to book your free 48-hour Dublin site appraisal.
              </p>
            </ScrollReveal>
          </div>

          {/* Sub Navigation Switcher */}
          <ScrollReveal direction="down" delay={0.2} distance={20}>
            <div
              role="tablist"
              aria-label="Planner mode"
              className="flex items-center gap-1.5 p-1 bg-navy-slate/80 border border-navy-border rounded-lg shrink-0"
            >
              <button
                type="button"
                role="tab"
                aria-selected={step === "calc"}
                onClick={() => setStep("calc")}
                className={`px-3 sm:px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 focus:outline-none cursor-pointer ${
                  step === "calc"
                    ? "bg-copper text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>1. Cost Estimator</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={step === "quote"}
                onClick={() => setStep("quote")}
                className={`px-3 sm:px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 focus:outline-none cursor-pointer ${
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
            <>
              {/* Left Column: Estimator Parameter Knobs */}
              <ScrollReveal direction="left" delay={0.1} distance={35} className="lg:col-span-7">
                <div className="bg-navy-slate border border-navy-border rounded-xl p-6 lg:p-8 space-y-8 shadow-xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-navy-border/60">
                    <Sliders className="w-4 h-4 text-copper" />
                    <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      Roof Area &amp; Layout Parameters
                    </span>
                  </div>

                  {/* Sub-step indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Step {calcStep} of 3</span>
                    <div className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((s) => (
                        <span
                          key={s}
                          className={`w-6 h-1 rounded ${
                            s <= calcStep ? "bg-copper" : "bg-navy-deep"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {calcStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <fieldset className="space-y-2">
                        <legend className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                          1. Select Primary Roof Profile Type
                        </legend>
                        <p className="font-body text-[11px] text-slate-400 mb-4">
                          Choose the material type that matches your project requirements or existing roofing style.
                        </p>

                        <div className="grid grid-cols-1 gap-3">
                          {roofTypes.map((rt) => (
                            <label
                              key={rt.id}
                              className={`p-3.5 border rounded-lg cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                                roofType === rt.id
                                  ? "bg-copper/5 border-copper text-white shadow-inner"
                                  : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-300"
                              }`}
                            >
                              <input
                                type="radio"
                                name="estimator_roof_type"
                                value={rt.id}
                                checked={roofType === rt.id}
                                onChange={(e) => setRoofType(e.target.value)}
                                className="mt-1 accent-copper shrink-0 cursor-pointer"
                              />
                              <div className="space-y-0.5">
                                <span className="font-display text-xs font-bold block">
                                  {rt.name}
                                </span>
                                <span className="font-body text-[10px] text-slate-400 leading-normal block">
                                  {rt.desc}
                                </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  )}

                  {calcStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <label
                            htmlFor="roof-area-slider"
                            className="block font-display text-xs font-bold text-white uppercase tracking-wider"
                          >
                            2. Estimated Roof Area (m²)
                          </label>
                          <span className="font-mono text-sm font-bold text-white bg-navy-deep px-3 py-1 border border-navy-border rounded shrink-0">
                            {areaSize} m²
                          </span>
                        </div>
                        <p className="font-body text-[11px] text-slate-400">
                          Input the flat ground footprint of the slopes, multiplied roughly by 1.15 to account for angle pitches.
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
                        <div className="flex justify-between gap-2 text-[9px] sm:text-[10px] font-mono text-slate-500">
                          <span>Min: 25 m²</span>
                          <span className="hidden sm:inline">Mid: 180 m² (Detached)</span>
                          <span>Max: 350 m²</span>
                        </div>
                      </div>

                      <fieldset className="space-y-2">
                        <legend className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                          3. Slope Pitch &amp; Steepness
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {[
                            { id: "low", label: "Low Pitch", detail: "Under 25° (Easy Access)" },
                            { id: "standard", label: "Standard Pitch", detail: "25° - 45° (Average)" },
                            { id: "steep", label: "High / Steep Pitch", detail: "Over 45° (Harness/Scaffold)" },
                          ].map((p) => (
                            <label
                              key={p.id}
                              className={`p-3 border rounded-lg cursor-pointer text-center flex flex-col justify-between items-center select-none transition-colors ${
                                pitch === p.id
                                  ? "bg-copper/5 border-copper text-copper"
                                  : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-400"
                              }`}
                            >
                              <input
                                type="radio"
                                name="estimator_pitch"
                                value={p.id}
                                checked={pitch === p.id}
                                onChange={(e) => setPitch(e.target.value)}
                                className="sr-only"
                              />
                              <span className="font-display text-xs font-bold block text-white uppercase mb-1">
                                {p.label}
                              </span>
                              <span className="font-body text-[10px] text-slate-400 block">
                                {p.detail}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  )}

                  {calcStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <fieldset className="space-y-2">
                        <legend className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                          4. Material Quality &amp; Guarantee Class
                        </legend>
                        <div className="grid grid-cols-1 gap-2.5">
                          {[
                            {
                              id: "standard",
                              label: "Standard Contractor Grade",
                              desc: "Basic certified concrete or interlocking clay profiles, standard roofing felts, standard timber battens.",
                            },
                            {
                              id: "premium",
                              label: "Premium Trade Specification (Recommended)",
                              desc: "Hand-graded Spanish slates or natural clay tile lots, top-performance breathable membranes, preservative-treated counter-laths.",
                            },
                            {
                              id: "heritage",
                              label: "Heritage / Conservation Specification",
                              desc: "Premium hand-selected Welsh Penrhyn slates, heavyweight Code 5 leadwork lines, authentic dry lime mortar pointing caps.",
                            },
                          ].map((g) => (
                            <label
                              key={g.id}
                              className={`p-3 border rounded-lg cursor-pointer transition-all flex items-start gap-3 select-none ${
                                qualityGrade === g.id
                                  ? "bg-copper/5 border-copper text-white shadow"
                                  : "bg-navy-deep/60 border-navy-border hover:border-slate-700 text-slate-300"
                              }`}
                            >
                              <input
                                type="radio"
                                name="estimator_quality"
                                value={g.id}
                                checked={qualityGrade === g.id}
                                onChange={(e) => setQualityGrade(e.target.value)}
                                className="mt-1 accent-copper shrink-0 cursor-pointer"
                              />
                              <div className="space-y-0.5">
                                <span className="font-display text-xs font-bold block">
                                  {g.label}
                                </span>
                                <span className="font-body text-[10px] text-slate-400 block">
                                  {g.desc}
                                </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="estimator-chimneys"
                            className="block font-display text-[11px] font-bold text-white uppercase tracking-wider"
                          >
                            Chimney Stacks on Roof ({chimneysCount})
                          </label>
                          <select
                            id="estimator-chimneys"
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

                        <div className="space-y-1.5">
                          <label
                            htmlFor="estimator-valleys"
                            className="block font-display text-[11px] font-bold text-white uppercase tracking-wider"
                          >
                            Estimated Valleys Run Length
                          </label>
                          <select
                            id="estimator-valleys"
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
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-navy-border/60">
                    <button
                      type="button"
                      onClick={() => setCalcStep((prev) => Math.max(1, prev - 1))}
                      disabled={calcStep === 1}
                      className="btn-outline !py-2 !px-4 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 focus:outline-none"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    {calcStep < 3 ? (
                      <button
                        type="button"
                        onClick={() => setCalcStep((prev) => Math.min(3, prev + 1))}
                        className="btn-primary !py-2 !px-4 flex items-center gap-1 focus:outline-none"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleApplyEstimateToQuote}
                        className="btn-primary !py-2.5 !px-4 sm:!px-5 flex items-center gap-1.5 focus:outline-none"
                      >
                        <ClipboardList className="w-4 h-4 shrink-0" />
                        <span>Use This Estimate for Survey</span>
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Calculations & Breakdown */}
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

                  <div className="p-5 bg-navy-deep rounded-xl border border-navy-border text-center space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-copper/5 blur-xl pointer-events-none" />
                    <span className="text-[10px] font-display uppercase tracking-widest text-slate-400 block font-semibold">
                      STANDARD PROJECT PRICE RANGE (EUR)
                    </span>

                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5 tabular-nums">
                      <span>€{estResult.low.toLocaleString()}</span>
                      <span className="text-slate-500 font-light text-base">-</span>
                      <span>€{estResult.high.toLocaleString()}</span>
                    </div>

                    <p className="font-body text-[10px] text-slate-400 leading-normal">
                      *Standard budget range in Euro covering direct labor, scaffolding staging, and materials. Subject to physical structural assessment.
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-2 text-xs font-body">
                    <div className="flex items-center justify-between gap-2 py-1 border-b border-navy-border/40 text-slate-400">
                      <span>Selected Profile Type</span>
                      <span className="text-white font-semibold font-display uppercase tracking-wide text-[11px] text-right">
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
                        €{estResult.materials.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Hammer className="w-3.5 h-3.5 text-copper shrink-0" />
                        <span>Direct Slaters &amp; Trades Labor</span>
                      </span>
                      <span className="font-mono text-white font-bold tabular-nums">
                        €{estResult.labor.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-copper shrink-0" />
                        <span>Code 5 Leadwork &amp; Flashings</span>
                      </span>
                      <span className="font-mono text-white font-bold tabular-nums">
                        €{estResult.leadwork.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Trash2 className="w-3.5 h-3.5 text-copper shrink-0" />
                        <span>Scaffolding, Edge-Safety &amp; Skips</span>
                      </span>
                      <span className="font-mono text-white font-bold tabular-nums">
                        €{estResult.logistics.toLocaleString()}
                      </span>
                    </div>
                  </div>

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

                  <button
                    type="button"
                    onClick={handleApplyEstimateToQuote}
                    className="btn-primary w-full !py-3.5 flex items-center justify-center gap-2 focus:outline-none"
                  >
                    <span>Request Surveyor Call</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>
            </>
          ) : (
            <ScrollReveal
              direction="up"
              delay={0.1}
              distance={30}
              className="lg:col-span-12 max-w-4xl mx-auto w-full"
            >
              <div className="bg-navy-slate border border-navy-border p-6 lg:p-8 rounded-xl shadow-2xl">
                <QuoteForm
                  defaultService={defaultService}
                  initialNotes={prefilledNotes}
                  estimatedRangeSummary={estimatedRangeSummary}
                  resetButtonLabel="Return to Estimator"
                  onResetComplete={() => {
                    setPrefilledNotes("");
                    setStep("calc");
                  }}
                />
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
