function Header() {
  return (
    <div className="flex justify-evenly border-b-2 border-slate-200">
      <img
        src="https://cdn.dribbble.com/users/5960208/screenshots/16398589/i_will_2_modern_minimalist_logo_design_within_12_hrs__9__4x.jpg"
        alt=""
        width="100px"
        height="100px"
      />
      <ul className="flex items-center gap-6 ">
        <li>Home</li>
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>SignIn</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Header;
