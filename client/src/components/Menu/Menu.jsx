import FilterByGender from "./Filters/FilterByGender";
import FilterBySpecies from "./Filters/FilterBySpecies";
import FilterByStatus from "./Filters/FilterByStatus";

export default function Menu() {
  return (
    <div className="flex justify-center items-center gap-6">
      <FilterByGender />
      <FilterBySpecies />
      <FilterByStatus />
    </div>
  );
}
