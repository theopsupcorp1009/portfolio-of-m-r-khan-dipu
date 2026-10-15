"use client";

interface ProjectFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts: {
    all: number;
    web: number;
    ai: number;
    others: number;
  };
}

export default function ProjectFilters({
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFiltersProps) {
  const filterOptions = [
    { label: "All Projects", value: "All Projects", count: counts.all },
    { label: "Web Development", value: "Web Development", count: counts.web },
    { label: "AI & Machine Learning", value: "AI & Machine Learning", count: counts.ai },
    { label: "Others", value: "Others", count: counts.others },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {filterOptions.map((filter) => {
        const isActive = activeCategory === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onSelectCategory(filter.value)}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638] ${
              isActive
                ? "bg-[#FF2638] text-white border-[#FF2638] shadow-[0_0_15px_rgba(255,38,56,0.5)]"
                : "bg-[#10151D] text-[#A4ADBD] hover:text-[#F4F6FA] border-white/10 hover:border-[#FF2638]/40"
            }`}
          >
            <span>{filter.label}</span>
            <span
              className={`ml-2 text-[10px] px-1.5 py-0.5 rounded ${
                isActive
                  ? "bg-black/30 text-white"
                  : "bg-[#0A0D13] text-[#A4ADBD]"
              }`}
            >
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
