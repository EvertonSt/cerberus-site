import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

export function SectionHeader({ badge, title, description, className, id }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16 md:mb-20", className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-xs font-medium text-purple-300 mb-6">
          {badge}
        </div>
      )}
      <h2 id={id} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
