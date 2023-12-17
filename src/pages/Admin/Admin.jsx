import RoomsListAdmin from "../../components/RoomsListAdmin"

export default function Admin() {
  return (
    <div className="w-full h-full bg-[#F4F7FE] p-12">
      <header>
        <div className="flex flex-col text-[#707EAE]">
          <div>Pages / Quản lý phòng trọ</div>
          <div className="text-[#2B3674] font-semibold text-3xl">Main Dashboard</div>
        </div>
        <div>

        </div>
      </header>
      <div className="border bg-white mt-10 p-16">
        <RoomsListAdmin />
      </div>
    </div>
  )
}
