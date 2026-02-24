export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 md:px-10">
        <p>LIM JOOYOUNG</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
