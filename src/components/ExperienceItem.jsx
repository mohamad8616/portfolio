export default function ExperienceItem({ experience, type = "left" }) {
  type === "left" && (
    <div className="flex h-auto justify-between">
      {/* LEFT */}
      <div className="w-1/3">
        {/* JOB TITLE */}
        <div className="rounded-b-lg rounded-s-lg bg-sky-950 p-3 text-lg font-semibold text-stone-200 dark:bg-[var(--btn-ternary)] dark:text-[var(--primary)]">
          {experience.jobTitle}
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic text-stone-700 dark:text-stone-300">
          <p>{experience.jobDesc}</p>
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-sm font-semibold text-red-400">
          {experience.jobDate}
        </div>
        {/* JOB COMPANY */}
        <div className="w-fit rounded bg-sky-700 p-1 text-sm font-semibold text-[var(--primary)]">
          {experience.jobCompany}
        </div>
      </div>
      {/* CENTER */}
      <div className="flex w-1/6 justify-center">
        {/* LINE */}
        <div className="relative h-full w-1 rounded bg-gray-600">
          {/* LINE CIRCLE */}
          <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3"></div>
    </div>
  );
  type === "right" && (
    <div className="flex h-auto justify-between">
      {/* LEFT */}
      <div className="w-1/3"></div>
      {/* CENTER */}
      <div className="flex w-1/6 justify-center">
        {/* LINE */}
        <div className="relative h-full w-1 rounded bg-gray-600">
          {/* LINE CIRCLE */}
          <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3"></div>
      <div className="w-1/3">
        {/* JOB TITLE */}
        <div className="rounded-b-lg rounded-s-lg bg-sky-950 p-3 text-lg font-semibold text-stone-200 dark:bg-[var(--btn-ternary)] dark:text-[var(--primary)]">
          {experience.jobTitle}
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic text-stone-700 dark:text-stone-300">
          <p>{experience.jobDesc}</p>
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-sm font-semibold text-red-400">
          {experience.jobDate}
        </div>
        {/* JOB COMPANY */}
        <div className="w-fit rounded bg-sky-700 p-1 text-sm font-semibold text-[var(--primary)]">
          {experience.jobCompany}
        </div>
      </div>
    </div>
  );
}
