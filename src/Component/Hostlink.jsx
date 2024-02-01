import { NavLink } from "react-router-dom";

const Hostlink = () => {
  const hostLink = [
    {
      path: '/host',
      title: 'Dashboard'
    },
    {
      path: '/host/income',
      title: 'Income'
    },
    {
      path: '/host/vans',
      title: 'Vans'
    },
    {
      path: '/host/reviews',
      title: 'Reviews'
    },
  ];

  return (
    <main className="flex gap-7 p-10">
      {hostLink.map((link, i) => (
        <NavLink
          to={link.path}
          key={i}
          className={({ isActive }) => isActive && link.path !== "/host"? "border-b-2 border-black": "text-gray-500" }
        >
          {link.title}
        </NavLink>
      ))}
    </main>
  );
};

export default Hostlink;
