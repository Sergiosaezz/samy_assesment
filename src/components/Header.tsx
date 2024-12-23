export const Header = () => (
  <header className="px-9 py-5 md:py-9 md:px-24 flex gap-3 flex-col items-start md:items-center md:flex-row justify-between">
    <img src="logo.svg" alt="samy logo" className="h-3.5 md:h-6" />
    <div className="relative self-center">
      <input
        type="text"
        placeholder="You're looking for something?"
        className="pl-10 py-2 w-64 h-8 pr-4 rounded-2xl bg-[#F2F2F2] placeholder-[#A1A1A1] text-sm"
      />
      <img
        src="search-icon.svg"
        alt="Search icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
    </div>
  </header>
);
