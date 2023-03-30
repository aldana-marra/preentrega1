import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Boulangerie</h2>
            <div>
                <button>Croaissants</button>
                <button>Pain au Chocolat</button>
                <button>Ecclairs</button>
            </div>
        <CartWidget/>
        </nav>
    )
}

export default NavBar