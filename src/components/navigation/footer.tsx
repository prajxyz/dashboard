import logo from "@/images/atlassian-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-14 -my-4 pb-4 w-3/4">
      <div className="flex items-center gap-x-3">
        <Image src={logo} alt="logo" width={35} height={40} />
        <h4>Atlassian</h4>
      </div>

      <div className="w-2/3 flex justify-between py-2">
        {/* 1st column  */}
        <div className="text-sm flex flex-col gap-y-4 py-4">
          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Company size</h4>
            <p className="text-sm">1k - 2k Employees</p>
          </div>

          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Sector</h4>
            <p className="text-sm">Information Technology, Infrastructure</p>
          </div>
          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Founded In </h4>
            <p className="text-sm">2019</p>
          </div>
        </div>

        {/* 2nd column  */}
        <div className="text-sm flex flex-col gap-y-4 py-4">
          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Type</h4>
            <p className="text-sm">Private</p>
          </div>

          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Funding</h4>
            <p className="text-sm">Bootstraped</p>
          </div>

          <div>
            <h4 className="text-xs text-[#6E6D6D] pb-1">Funded By</h4>
            <p className="text-sm">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
