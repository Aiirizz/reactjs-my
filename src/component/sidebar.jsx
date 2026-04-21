import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: "About", route: "/" },
  { name: "Profile", route: "/profile" },
  { name: "Skill", route: "/skill" },
  { name: "Project", route: "/project" },
  { name: "Contact", route: "/contact"}
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-midnight shadow-lg flex flex-col justify-between p-6">      
      {/* TOP SECTION */}
      <div>
        {/* Title */}
        <h1 className="text-[60px] leading-15 mt-10 ml-5 font-bold text-white">
          Maulana Ilham<br/>Arizqi
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white mt-5 ml-5">
          Tech Enthusiast
        </p>

        {/* SubSubTitle*/}
        <p className="text-lg text-white ml-5">
          Lorem Ipsum 
        </p>
      </div>

      {/* Navigation */}
      <div className="space-y-4 ml-20 text-lg text-white">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="w-full text-left px-4 py-2 rounded-lg cursor-pointer"
            title={`Navigating to ${item.route}`}
            onClick={() => navigate(item.route)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* BOTTOM SECTION (Social Media) */}
      <div className="flex space-x-4 justify-center">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition">
          🌐
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white transition">
          📷
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-sky-500 hover:text-white transition">
          🐦
        </button>
      </div>

    </div>
  );
}

export default Sidebar;