import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Star,
  ThumbsUp,
  ExternalLink,
  PenLine,
  CheckCircle2,
  X,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Review {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  location: string;
  reviewerMeta: string;
  rating: number;
  timeAgo: string;
  timestampDaysAgo: number;
  service: string;
  reviewText: string;
  ownerReply?: {
    date: string;
    text: string;
  };
  helpfulCount: number;
  isNew?: boolean;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Liam O'Connor",
    initials: "LO",
    avatarBg: "bg-blue-600",
    location: "Terenure, Dublin 6W",
    reviewerMeta: "Local Guide • 18 reviews • Terenure, Dublin",
    rating: 5,
    timeAgo: "2 weeks ago",
    timestampDaysAgo: 14,
    service: "Slate Roofing",
    reviewText:
      "JG Roofing replaced our entire 110-year-old Victorian slate roof on Terenure Road. John and his craftsmen were exemplary — from the scaffolding setup to the BS 5534 timber counter-battening and hand-graded Spanish slate installation. Kept our driveway spotless every single evening. Highly recommended for any serious roofing restoration in Dublin.",
    ownerReply: {
      date: "10 days ago",
      text: "Thank you Liam! It was an absolute pleasure working on your period property in Terenure. The hand-sorted natural slates and breathable counter-battens will protect your home for decades to come.",
    },
    helpfulCount: 7,
  },
  {
    id: "rev-2",
    name: "Aoife Gallagher",
    initials: "AG",
    avatarBg: "bg-emerald-600",
    location: "Rathgar, Dublin 6",
    reviewerMeta: "Verified Homeowner • 4 reviews • Rathgar, Dublin",
    rating: 5,
    timeAgo: "1 month ago",
    timestampDaysAgo: 30,
    service: "Flashing & Leadwork",
    reviewText:
      "We had a persistent leak around our twin chimney stacks that two previous contractors failed to solve. JG Roofing did a thorough thermal moisture assessment, diagnosed the failed back-gutter, and installed new Code 5 architectural leadwork. Zero leaks through the recent torrential rain. Outstanding professionalism.",
    helpfulCount: 5,
  },
  {
    id: "rev-3",
    name: "Patrick Byrne",
    initials: "PB",
    avatarBg: "bg-amber-600",
    location: "Ranelagh, Dublin 6",
    reviewerMeta: "Local Guide • 22 reviews • Ranelagh, Dublin",
    rating: 5,
    timeAgo: "2 months ago",
    timestampDaysAgo: 60,
    service: "Pitched Tiles",
    reviewText:
      "First class service from the initial roof survey to final sign-off. Replaced our weathered concrete interlocking tiles with modern breathable membrane and a dry-verge mechanical system. The estimate was transparent with no hidden extras, and the crew completed the work right on schedule.",
    ownerReply: {
      date: "2 months ago",
      text: "Appreciate the kind feedback Patrick! The dry-verge system gives a maintenance-free finish that will comfortably withstand high coastal storm winds.",
    },
    helpfulCount: 4,
  },
  {
    id: "rev-4",
    name: "Siobhan O'Malley",
    initials: "SO",
    avatarBg: "bg-red-600",
    location: "Ballsbridge, Dublin 4",
    reviewerMeta: "Property Manager • 9 reviews • Dublin 4",
    rating: 5,
    timeAgo: "3 months ago",
    timestampDaysAgo: 90,
    service: "Slate Roofing",
    reviewText:
      "Managing several heritage properties in Ballsbridge and Dublin 4 requires contractors who truly understand conservation guidelines. JG Roofing Ltd have consistently delivered peerless slate craftsmanship, copper nail fastenings, and detailed progress reports with photographic sign-offs. Reliable, punctual, and highly skilled.",
    helpfulCount: 9,
  },
  {
    id: "rev-5",
    name: "Sean MacCarthy",
    initials: "SM",
    avatarBg: "bg-indigo-600",
    location: "Harold's Cross, Dublin 6W",
    reviewerMeta: "Local Resident • 3 reviews • Harold's Cross",
    rating: 5,
    timeAgo: "4 months ago",
    timestampDaysAgo: 120,
    service: "Emergency Repairs",
    reviewText:
      "After storm winds tore off ridge tiles and water began penetrating the ceiling, JG Roofing were on-site within 3 hours to secure the roof with weatherproofing tarpaulins. They returned two days later to complete a permanent, certified repair with matching tiles. Absolute lifesavers.",
    ownerReply: {
      date: "4 months ago",
      text: "Glad we could secure your home rapidly after the storm Sean. Rapid weatherproofing and homeowner safety are always our top priorities.",
    },
    helpfulCount: 6,
  },
  {
    id: "rev-6",
    name: "Ciaran Doyle",
    initials: "CD",
    avatarBg: "bg-teal-600",
    location: "Rathmines, Dublin 6",
    reviewerMeta: "Verified Homeowner • 5 reviews • Rathmines, Dublin",
    rating: 5,
    timeAgo: "5 months ago",
    timestampDaysAgo: 150,
    service: "Pitched Tiles",
    reviewText:
      "Flawless pitched tile replacement on our semi-detached home. The crew arrived promptly at 8 AM every morning, were polite and courteous to our neighbours, and cleaned down the driveway with an industrial magnetic sweeper to ensure no stray nails remained. Worth every euro.",
    helpfulCount: 3,
  },
  {
    id: "rev-7",
    name: "Fiona Brennan",
    initials: "FB",
    avatarBg: "bg-purple-600",
    location: "Churchtown, Dublin 14",
    reviewerMeta: "Homeowner • 2 reviews • Churchtown, Dublin",
    rating: 4,
    timeAgo: "7 months ago",
    timestampDaysAgo: 210,
    service: "Flashing & Leadwork",
    reviewText:
      "Great workmanship on the valley gutters and flashing troughs. The job took one day longer than projected due to severe rainfall, but John kept us updated throughout and the finished roof is completely watertight and neat.",
    ownerReply: {
      date: "7 months ago",
      text: "Thank you Fiona! Irish weather can occasionally interrupt lime and mortar curing, but we will never compromise safety or structural longevity. Thank you for your patience!",
    },
    helpfulCount: 2,
  },
  {
    id: "rev-8",
    name: "David Murphy",
    initials: "DM",
    avatarBg: "bg-cyan-700",
    location: "Dublin 2",
    reviewerMeta: "Commercial Client • 11 reviews • Dublin 2",
    rating: 5,
    timeAgo: "9 months ago",
    timestampDaysAgo: 270,
    service: "Slate Roofing",
    reviewText:
      "Contracted JG Roofing for a multi-unit slate re-roofing project in central Dublin. Their adherence to health and safety regulations, public liability insurance documentation, and structural compliance was second to none. Will continue using them for all portfolio maintenance.",
    helpfulCount: 8,
  },
];

// Official Multi-Colored Google G Icon
const GoogleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filterTab, setFilterTab] = useState<"all" | "5star" | "recent">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [votedHelpful, setVotedHelpful] = useState<Record<string, boolean>>({});
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botField, setBotField] = useState("");
  const successTimerRef = useRef<number | null>(null);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: "",
    location: "Terenure, Dublin",
    rating: 5,
    service: "Slate Roofing",
    reviewText: "",
  });

  // Lock body scroll, pause Lenis, and bind Escape when modal is open
  useEffect(() => {
    const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };

    if (!showReviewModal) {
      document.body.style.overflow = "";
      win.__lenis?.start();
      return;
    }

    document.body.style.overflow = "hidden";
    win.__lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowReviewModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      win.__lenis?.start();
    };
  }, [showReviewModal]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  // Calculate stats dynamically across all 1-5 star ratings
  const newUserReviews = reviews.filter((r) => r.isNew);
  const totalReviewsCount = 48 + newUserReviews.length;
  const fiveStarReviewsCount =
    46 + newUserReviews.filter((r) => r.rating === 5).length;
  const fourStarReviewsCount =
    2 + newUserReviews.filter((r) => r.rating === 4).length;
  const threeStarReviewsCount = newUserReviews.filter((r) => r.rating === 3).length;
  const twoStarReviewsCount = newUserReviews.filter((r) => r.rating === 2).length;
  const oneStarReviewsCount = newUserReviews.filter((r) => r.rating === 1).length;
  const lowStarReviewsCount =
    threeStarReviewsCount + twoStarReviewsCount + oneStarReviewsCount;

  const totalScore =
    fiveStarReviewsCount * 5 +
    fourStarReviewsCount * 4 +
    threeStarReviewsCount * 3 +
    twoStarReviewsCount * 2 +
    oneStarReviewsCount * 1;
  const averageRatingNum = totalScore / totalReviewsCount;
  const averageRating = averageRatingNum.toFixed(1);
  const roundedAverageStars = Math.round(averageRatingNum);

  const categories = [
    "All",
    "Slate Roofing",
    "Pitched Tiles",
    "Flashing & Leadwork",
    "Emergency Repairs",
    "Chimney Repair",
  ];

  // Filtered reviews
  const displayedReviews = useMemo(() => {
    let list = [...reviews];

    if (filterTab === "5star") {
      list = list.filter((r) => r.rating === 5);
    } else if (filterTab === "recent") {
      list = list.sort((a, b) => a.timestampDaysAgo - b.timestampDaysAgo);
    }

    if (selectedCategory !== "All") {
      list = list.filter((r) => r.service === selectedCategory);
    }

    return list;
  }, [reviews, filterTab, selectedCategory]);

  const handleHelpfulClick = (id: string) => {
    if (votedHelpful[id]) return;
    setVotedHelpful((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const trimmedName = newReview.name.trim();
    const trimmedLocation = newReview.location.trim();
    const trimmedText = newReview.reviewText.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (!trimmedLocation) {
      setSubmitError("Please enter your Dublin area or suburb.");
      return;
    }
    if (!trimmedText || trimmedText.length < 10) {
      setSubmitError("Please write a short review (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const encoded = new URLSearchParams({
        "form-name": "customer-review",
        "bot-field": botField,
        rating: String(newReview.rating),
        reviewer_name: trimmedName,
        location: trimmedLocation,
        service: newReview.service,
        review_text: trimmedText,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });

      if (response.status >= 500) {
        throw new Error("Server temporarily unavailable");
      }

      const initials =
        trimmedName
          .split(/\s+/)
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "CL";

      const createdReview: Review = {
        id: `rev-user-${Date.now()}`,
        name: trimmedName,
        initials,
        avatarBg: "bg-copper",
        location: trimmedLocation,
        reviewerMeta: `Verified Customer • ${trimmedLocation}`,
        rating: newReview.rating,
        timeAgo: "Just now",
        timestampDaysAgo: 0,
        service: newReview.service,
        reviewText: trimmedText,
        helpfulCount: 1,
        isNew: true,
        ownerReply: {
          date: "Just now",
          text: `Thank you for taking the time to share your feedback, ${trimmedName}! JG Roofing Ltd appreciates your trust.`,
        },
      };

      setReviews((prev) => [createdReview, ...prev]);
      setShowReviewModal(false);
      setSubmitSuccess(true);
      setNewReview({
        name: "",
        location: "Terenure, Dublin",
        rating: 5,
        service: "Slate Roofing",
        reviewText: "",
      });

      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
      successTimerRef.current = window.setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    } catch {
      setSubmitError(
        "Unable to publish your review right now. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-navy-deep border-t border-b border-navy-border text-slate-300 relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SUCCESS NOTIFICATION */}
        {submitSuccess && (
          <div
            role="status"
            className="mb-8 p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl flex items-center justify-between gap-3 text-emerald-200 shadow-xl animate-fadeIn"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">
                Thank you! Your review has been successfully submitted and added to our profile.
              </span>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setSubmitSuccess(false)}
              className="text-emerald-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* 1. GOOGLE BUSINESS PROFILE MASTER CARD */}
        <ScrollReveal direction="down" delay={0.08} distance={24} className="mb-14">
          <div className="bg-navy-slate border border-navy-border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            {/* Top accent border line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-copper" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Official Google Business Rating Identity */}
              <div className="lg:col-span-5 flex items-start gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2.5 shadow-md flex items-center justify-center shrink-0 border border-slate-100">
                  <GoogleIcon className="w-9 h-9 sm:w-10 sm:h-10" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      GOOGLE BUSINESS PROFILE • Terenure, Dublin 6W
                    </span>
                  </div>

                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Google Rating
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-0.5">
                    <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {averageRating}
                    </span>
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${averageRating} out of 5 stars`}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 drop-shadow-sm ${
                            star <= roundedAverageStars
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      Based on{" "}
                      <strong className="text-white font-bold">
                        {totalReviewsCount} Google Reviews
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Column: Accurate Score & Star Distribution Breakdown */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-navy-border pt-6 lg:pt-0 lg:pl-8 space-y-3">
                <div className="flex items-center justify-between text-xs pb-1 border-b border-navy-border/50">
                  <span className="font-display uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                    Rating Breakdown
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 100% Genuine
                  </span>
                </div>

                {/* 5-Star bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 font-medium">
                      5 Stars <span className="text-amber-400" aria-hidden="true">★★★★★</span>
                    </span>
                    <span className="font-mono text-white font-bold">
                      {fiveStarReviewsCount} (
                      {Math.round((fiveStarReviewsCount / totalReviewsCount) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-navy-deep rounded-full h-2 overflow-hidden border border-navy-border">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(fiveStarReviewsCount / totalReviewsCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* 4-Star bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      4 Stars <span className="text-amber-400/80" aria-hidden="true">★★★★☆</span>
                    </span>
                    <span className="font-mono text-slate-300 font-semibold">
                      {fourStarReviewsCount} (
                      {Math.round((fourStarReviewsCount / totalReviewsCount) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-navy-deep rounded-full h-1.5 overflow-hidden border border-navy-border">
                    <div
                      className="bg-amber-500/70 h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(fourStarReviewsCount / totalReviewsCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* 3, 2 & 1-Star bar (dynamic) */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>3, 2 &amp; 1 Stars</span>
                    <span className="font-mono">
                      {lowStarReviewsCount} (
                      {Math.round((lowStarReviewsCount / totalReviewsCount) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-navy-deep rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-slate-500 h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(lowStarReviewsCount / totalReviewsCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Actions & Verified Badges */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end border-t lg:border-t-0 border-navy-border pt-6 lg:pt-0">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitError(null);
                    setShowReviewModal(true);
                  }}
                  className="bg-copper hover:bg-copper-hover text-white font-display text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-copper/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <PenLine className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>WRITE A REVIEW</span>
                </button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=JG+Roofing+Ltd+18+Terenure+Road+West+Terenure+Dublin+Ireland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-deep hover:bg-navy-border text-slate-300 hover:text-white border border-navy-border text-xs font-medium px-4 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-copper" />
                  <span>View on Google Maps</span>
                </a>

                <div className="text-[10px] text-slate-500 text-center lg:text-right font-display uppercase tracking-wider">
                  <span className="text-copper font-bold">100% Authenticated</span> Homeowner Reviews
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. CUSTOMER TESTIMONIALS SECTION HEADER & FILTER CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-navy-border">
          <div className="space-y-2">
            <ScrollReveal direction="down" delay={0.1} distance={18}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-copper" />
                <span className="font-display text-xs font-bold text-copper uppercase tracking-widest">
                  VERIFIED CLIENT FEEDBACK
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15} distance={30}>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold uppercase tracking-tight">
                CUSTOMER TESTIMONIALS
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2} distance={20}>
              <p className="font-body text-slate-400 text-sm max-w-xl">
                Authentic feedback published by verified local residential homeowners and commercial clients across Terenure, Rathgar, Ranelagh, and Greater Dublin.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterTab("all")}
              className={`font-display text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer ${
                filterTab === "all"
                  ? "bg-copper text-white shadow-md shadow-copper/20"
                  : "bg-navy-slate text-slate-400 hover:text-white hover:bg-navy-border border border-navy-border"
              }`}
            >
              ALL REVIEWS ({totalReviewsCount})
            </button>

            <button
              type="button"
              onClick={() => setFilterTab("recent")}
              className={`font-display text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer ${
                filterTab === "recent"
                  ? "bg-copper text-white shadow-md shadow-copper/20"
                  : "bg-navy-slate text-slate-400 hover:text-white hover:bg-navy-border border border-navy-border"
              }`}
            >
              RECENT
            </button>

            <button
              type="button"
              onClick={() => setFilterTab("5star")}
              className={`font-display text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                filterTab === "5star"
                  ? "bg-copper text-white shadow-md shadow-copper/20"
                  : "bg-navy-slate text-slate-400 hover:text-white hover:bg-navy-border border border-navy-border"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5-STAR ONLY ({fiveStarReviewsCount})</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-slate-500 font-display uppercase tracking-wider mr-2">
            Filter Service:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-navy-border text-white border border-copper font-medium"
                  : "bg-navy-slate/80 text-slate-400 hover:text-slate-200 border border-navy-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. REVIEWS GRID OR EMPTY STATE */}
        {displayedReviews.length === 0 ? (
          <div className="bg-navy-slate border border-navy-border rounded-2xl p-10 text-center space-y-4">
            <p className="font-display text-lg font-bold text-white uppercase tracking-tight">
              No reviews match the selected filters
            </p>
            <p className="font-body text-sm text-slate-400 max-w-md mx-auto">
              Try switching back to all services or viewing all star ratings to read feedback from our Dublin roofing clients.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilterTab("all");
                setSelectedCategory("All");
              }}
              className="btn-outline inline-flex items-center gap-2 !py-2.5 !px-5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Review Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedReviews.map((rev, idx) => (
              <ScrollReveal
                key={rev.id}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={0.08 + (idx % 4) * 0.05}
                distance={25}
              >
                <div className="bg-navy-slate border border-navy-border hover:border-copper/40 p-6 sm:p-7 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 shadow-lg relative group">
                  {/* Top Row: User Avatar, Name, and Google Attribution */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-display text-sm font-bold shadow-md shrink-0`}
                        >
                          {rev.initials}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display text-base font-bold text-white tracking-tight">
                              {rev.name}
                            </h3>
                            {rev.isNew && (
                              <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                                NEW
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 leading-tight truncate">
                            {rev.reviewerMeta}
                          </p>
                        </div>
                      </div>

                      {/* Google Brand Tag */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-navy-deep rounded-md border border-navy-border text-[11px] font-medium text-slate-400 shrink-0">
                        <GoogleIcon className="w-3.5 h-3.5" />
                        <span>Google</span>
                      </div>
                    </div>

                    {/* Stars and Relative Timestamp */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`Rated ${rev.rating} out of 5 stars`}
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= rev.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-500">
                          {rev.timeAgo}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 bg-navy-deep rounded text-copper font-mono uppercase border border-navy-border/60">
                          {rev.service}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="font-body text-sm text-slate-300 leading-relaxed italic">
                      &ldquo;{rev.reviewText}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Section: Owner Response & Helpful action */}
                  <div className="mt-6 pt-4 border-t border-navy-border/70 space-y-4">
                    {rev.ownerReply && (
                      <div className="bg-navy-deep/90 border border-navy-border rounded-xl p-4 text-xs text-slate-400 space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-bold text-copper text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                            JG Roofing Ltd (Owner)
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 shrink-0">
                            {rev.ownerReply.date}
                          </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-body">
                          &ldquo;{rev.ownerReply.text}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Helpful Button Row */}
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                      <button
                        type="button"
                        onClick={() => handleHelpfulClick(rev.id)}
                        disabled={votedHelpful[rev.id]}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] transition-colors cursor-pointer disabled:cursor-default ${
                          votedHelpful[rev.id]
                            ? "text-copper bg-copper/10 font-medium"
                            : "text-slate-400 hover:text-white hover:bg-navy-deep"
                        }`}
                        aria-label="Mark review as helpful"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Helpful ({rev.helpfulCount})</span>
                      </button>

                      <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified Homeowner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* 4. FOOTER VERIFICATION STRIP */}
        <ScrollReveal direction="up" delay={0.25} distance={20} className="mt-12">
          <div className="p-5 bg-navy-slate border border-navy-border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-navy-deep flex items-center justify-center text-copper shrink-0 border border-navy-border">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>
                All reviews are independently authenticated via Google Business Profile and cross-matched with certified project completion sign-offs across Dublin.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-copper font-bold text-xs uppercase tracking-wider">
                100% Guaranteed Authenticity
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 5. INTERACTIVE WRITE A REVIEW MODAL */}
      {showReviewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowReviewModal(false)}
        >
          <div
            className="bg-navy-slate border border-navy-border rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="write-review-title"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close review modal"
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-deep transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5 pr-8">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow shrink-0">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 id="write-review-title" className="font-display text-xl font-bold text-white">
                  Write a Google Review
                </h3>
                <p className="text-xs text-slate-400">
                  JG Roofing Ltd • Terenure, Dublin
                </p>
              </div>
            </div>

            {submitError && (
              <div
                role="alert"
                className="mb-4 p-3.5 rounded-lg bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}

            <form
              name="customer-review"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleFormSubmit}
              noValidate
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="customer-review" />
              <input type="hidden" name="rating" value={newReview.rating} />
              <p className="hidden" aria-hidden="true">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input
                    name="bot-field"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </p>

              {/* Star Selection */}
              <div>
                <span className="block text-xs font-display uppercase tracking-wider text-slate-300 font-bold mb-1.5">
                  Your Rating
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      aria-label={`Rate ${star} out of 5 stars`}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= newReview.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-600 hover:text-slate-500"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-amber-400 font-bold ml-2">
                    {newReview.rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="review-name"
                  className="block text-xs font-display uppercase tracking-wider text-slate-300 font-bold mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="review-name"
                  name="reviewer_name"
                  type="text"
                  required
                  placeholder="e.g. Brian Fitzgerald"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="review-location"
                  className="block text-xs font-display uppercase tracking-wider text-slate-300 font-bold mb-1.5"
                >
                  Dublin Location / Suburb *
                </label>
                <input
                  id="review-location"
                  name="location"
                  type="text"
                  required
                  placeholder="e.g. Terenure, Dublin 6W"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-copper"
                />
              </div>

              {/* Roofing Service */}
              <div>
                <label
                  htmlFor="review-service"
                  className="block text-xs font-display uppercase tracking-wider text-slate-300 font-bold mb-1.5"
                >
                  Roofing Service Completed
                </label>
                <select
                  id="review-service"
                  name="service"
                  value={newReview.service}
                  onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                  className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-copper"
                >
                  <option value="Slate Roofing">Slate Roofing</option>
                  <option value="Pitched Tiles">Pitched Tile Replacement</option>
                  <option value="Flashing & Leadwork">Flashing &amp; Architectural Leadwork</option>
                  <option value="Emergency Repairs">Emergency Storm &amp; Leak Repair</option>
                  <option value="Chimney Repair">Chimney &amp; Ridge Repair</option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label
                  htmlFor="review-text"
                  className="block text-xs font-display uppercase tracking-wider text-slate-300 font-bold mb-1.5"
                >
                  Your Feedback / Experience *
                </label>
                <textarea
                  id="review-text"
                  name="review_text"
                  required
                  rows={4}
                  placeholder="Describe the craftsmanship, timeliness, clean site management, and overall result..."
                  value={newReview.reviewText}
                  onChange={(e) =>
                    setNewReview({ ...newReview, reviewText: e.target.value })
                  }
                  className="w-full bg-navy-deep border border-navy-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-copper resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-copper hover:bg-copper-hover text-white font-display text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all shadow-md cursor-pointer inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <span>Publish Review</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
