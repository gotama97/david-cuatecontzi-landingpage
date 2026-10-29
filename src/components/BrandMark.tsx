export default function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4 39.5 10.5V22C39.5 32.4 33 40.3 24 44 15 40.3 8.5 32.4 8.5 22V10.5L24 4Z"
        fill="currentColor"
        opacity=".18"
      />
      <path
        d="M24 5.7 38 11.6V22c0 9.1-5.5 16.3-14 20.1C15.5 38.3 10 31.1 10 22V11.6L24 5.7Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M17.5 29.5H30.5M24 14v15M18 18h12M20 18l-4 8h8l-4-8ZM28 18l-4 8h8l-4-8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M18 34h12" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}
