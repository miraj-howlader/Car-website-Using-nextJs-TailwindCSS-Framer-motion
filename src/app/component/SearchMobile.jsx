
import DateSelection from "./DateSelection"
import HourSelection from "./HourSelection"
import LocationSelection from "./LocationSelection"

const SearchMobile = () => {
  return (
    <div className=" xl:hidden font-medium">
    <div className=" container mx-auto">
      <div className=" flex flex-col items-center gap-y-4">
        {/* location selection  */}
        <LocationSelection />
        {/* date selection  */}
        <DateSelection />
        {/* hours selection  */}
        <HourSelection />
        {/* btn  */}
        <div className=" flex items-center px-6">
          <button className=" btn btn-sm btn-accent
           w-[164px] mx-auto">Search</button>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default SearchMobile
