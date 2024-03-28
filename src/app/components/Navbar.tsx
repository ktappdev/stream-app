import UserButton from "./UserButton";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-mytheme-darkBackground py-4">
      <div className="container mx-auto flex justify-end items-center px-4">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
