import imagenChica1 from "../fotos/imagenChica1.png";

const QuienesSomos = () => {

    return (
        <div className="mb-40">
            <div className="text-3xl mt-28 mb-16">Quienes somos?</div>
            <div className="flex place-items-center text-xl mb-14">
                <div>En caracola producimos piezas de ceramica, participamos en talleres de ensenanza y esparsion en varios centros culturales por la ciudad de la plata. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, vero porro asperiores magnam iste quaerat illum inventore obcaecati dolorem vel ad perferendis id eligendi quia? Harum modi perferendis minima excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, vero porro asperiores magnam iste quaerat illum inventore obcaecati dolorem vel ad perferendis id eligendi quia? Harum modi perferendis minima excepturi.</div>
                <img className="ml-40 min-w-[20rem] max-w-[20rem]" src={imagenChica1}></img>
            </div>
            <div className="flex">
                <img className="mr-40 min-w-[20rem] max-w-[20rem]" src={imagenChica1}></img>
                <div className="mt-16 text-xl">En caracola producimos piezas de ceramica, participamos en talleres de ensenanza y esparsion en varios centros culturales por la ciudad de la plata. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, vero porro asperiores magnam iste quaerat illum inventore obcaecati dolorem vel ad perferendis id eligendi quia? Harum modi perferendis minima excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, vero porro asperiores magnam iste quaerat illum inventore obcaecati dolorem vel ad perferendis id eligendi quia? Harum modi perferendis minima </div>
            </div>

        </div>
    );
};

export default QuienesSomos;