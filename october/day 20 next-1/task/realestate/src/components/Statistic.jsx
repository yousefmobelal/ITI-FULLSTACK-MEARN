function Statistic({ value, title }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#262626] text-white w-fit px-4 py-3 rounded-xl">
      <p>{value > 1000 ? `${Math.floor(value / 1000)}k` : value}+</p>
      <p>{title}</p>
    </div>
  );
}

export default Statistic;
