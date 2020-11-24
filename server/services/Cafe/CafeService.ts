import CafeRepository from "../../dto/Cafe/CafeRepository";

class CafeService {

    private cafeRepository: CafeRepository;

    constructor(cafeRepository: CafeRepository){
        this.cafeRepository = cafeRepository;
    }

    getAllCafe = async () => {
        return await this.cafeRepository.getAllCafe();
    }
}

export default CafeService;