interface SiftLogoProps {
  size?: number;
  className?: string;
}

export function SiftLogo({ size = 24, className = '' }: SiftLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sift"
    >
      <rect x="2" y="6" width="20" height="2.4" rx="1.2" className="fill-[#5262FF]" />
      <rect x="2" y="11" width="14" height="2.4" rx="1.2" className="fill-current opacity-75" />
      <rect x="2" y="16" width="8" height="2.4" rx="1.2" className="fill-current opacity-45" />
    </svg>
  );
}

export default SiftLogo;
