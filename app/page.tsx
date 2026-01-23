import DrawerContent from "@/components/drawer-content";
import { PanelRightClose } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <PanelRightClose size="17" className="my-1" />
          </label>
          <div className="px-4">Home</div>
        </nav>
        {/* Page content here */}
        <div className="">This is Home</div>
      </div>
    </>
  );
}
