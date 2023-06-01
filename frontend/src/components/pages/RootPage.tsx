import {goToProductsPage} from "../../functions/navigation";
import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {fetchBasket} from "../../api/fetchBasket";
import BasketContext from "../../context/BasketContext";

function RootPage() {

    const basket = useContext(BasketContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
    }, []);

    return (
        <div className="app-body">
            <div onClick={() => goToProductsPage(navigate)} className="products-block">
                <h3>View all our products!</h3>
            </div>
            <div className="vision">
                <h3>Jurassic Bark: curating dog food adventures for a dino-mite dining experience!</h3>
                <p>
                <i>Embarking</i> on a <b>pawsitively</b> thrilling adventure, <b>Jurassic Bark</b> is on a mission to curate dog food that echoes the diverse diets of dinosaurs!</p>
                <p>From herbivorous munchies to carnivorous delights, our high-quality and <i>tail-rrific</i> meals are crafted to cater to your furry friend's specific dietary needs. With meticulous research and a commitment to excellence, we <i>unleash</i> a <b>roaring</b> selection that satisfies taste buds and fuels vitality.</p>
                <p>Trust <b>Jurassic Bark</b> to bring <i>prehistoric</i> flavours to modern-day pets, delivering a <b>dino-mite</b> dining experience that transforms their lives, one delicious bite at a time.</p>
                <p>Together, let's <i>journey back in time</i> and discover a world where dogs devour meals inspired by the legendary appetites of their dinosaur ancestors!
                </p>
            </div>
        </div>
    );
}

export default RootPage;