export function AdminToolbar({
  searchName,
  searchValue,
  searchPlaceholder,
  filterName,
  filterValue,
  filterOptions = [],
}) {
  return (
    <form className="admin-toolbar">
      <label className="admin-toolbar__search">
        <input defaultValue={searchValue} name={searchName} placeholder={searchPlaceholder} type="search" />
      </label>

      {filterName ? (
        <label className="admin-toolbar__filter">
          <select defaultValue={filterValue} name={filterName}>
            {filterOptions.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <button className="button button--gold button--compact" type="submit">
        Apply
      </button>
    </form>
  );
}
