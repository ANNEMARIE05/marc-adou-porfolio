type Proprietes = {
  className?: string;
};

const trait = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconeFleche({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M4.5 12h14" {...trait} />
      <path d="M13.2 6.4 18.8 12l-5.6 5.6" {...trait} />
    </svg>
  );
}

export function IconeFlecheGauche({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M19.5 12h-14" {...trait} />
      <path d="M10.8 6.4 5.2 12l5.6 5.6" {...trait} />
    </svg>
  );
}

export function IconeFlecheHaut({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 19.5v-14" {...trait} />
      <path d="M6.4 10.8 12 5.2l5.6 5.6" {...trait} />
    </svg>
  );
}

export function IconeFlecheBas({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 4.5v14" {...trait} />
      <path d="M6.4 13.2 12 18.8l5.6-5.6" {...trait} />
    </svg>
  );
}

export function IconeCourrier({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" {...trait} />
      <path d="m4.2 7.2 7.8 5.6 7.8-5.6" {...trait} />
    </svg>
  );
}

export function IconeDocument({ className = "h-4 w-4" }: Proprietes) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M7 3.5h6.8L17.5 7.2V20.5H7V3.5Z" {...trait} />
      <path d="M13.6 3.7V7.4h3.7" {...trait} />
      <path d="M9.5 12.2h5" {...trait} />
      <path d="M9.5 15.8h5" {...trait} />
    </svg>
  );
}
