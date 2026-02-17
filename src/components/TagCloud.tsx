import * as React from "react";

interface TagCloudProps {
  tags: { name: string; count: number }[];
}

export function TagCloud({ tags }: TagCloudProps) {
  if (!tags.length) return null;

  // Find min and max counts for scaling
  const counts = tags.map(t => t.count);
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);
  
  // Calculate font size based on count (scale between 0.875rem and 2rem)
  const getFontSize = (count: number) => {
    if (maxCount === minCount) return "1rem";
    const scale = (count - minCount) / (maxCount - minCount);
    const size = 0.875 + scale * 1.125; // 0.875rem to 2rem
    return `${size}rem`;
  };

  // Get opacity based on count
  const getOpacity = (count: number) => {
    if (maxCount === minCount) return 1;
    const scale = (count - minCount) / (maxCount - minCount);
    return 0.5 + scale * 0.5; // 0.5 to 1
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {tags.map((tag) => (
        <a
          key={tag.name}
          href={`/tags/${tag.name}`}
          className="hover:underline transition-all hover:opacity-100 dark:text-zinc-400 dark:hover:text-zinc-200"
          style={{
            fontSize: getFontSize(tag.count),
            opacity: getOpacity(tag.count),
          }}
        >
          {tag.name}
        </a>
      ))}
    </div>
  );
}
