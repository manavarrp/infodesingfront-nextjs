import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      
      <div className="hidden md:flex w-60 z-20 flex-col inset-y-0 fixed">
        <NavigationSidebar />
      </div>
      <main className="md:ml-60 p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
