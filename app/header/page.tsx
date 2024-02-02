const Header = () => {
  return (
    <>
        <div className="w-full flex justify-between px-10 py-5 text-neutral-600">
            <div className="vivaldi bold text-5xl text-bold">Klaw.</div>
            <ul className="flex space-x-10 pt-2">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WORKS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </>
  );
}

export default Header