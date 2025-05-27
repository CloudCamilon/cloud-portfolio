import Link from "next/link";

export default function ResumeDownload() {
  return (
    <div>
      <Link
        href="/assets/CAMILON, VINCENT ULAP - RESUME.pdf"
        download="resume.pdf"
      >
        <button className="">RESUME</button>
      </Link>
    </div>
  );
}
