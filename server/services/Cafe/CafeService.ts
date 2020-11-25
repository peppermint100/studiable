import CafeRepository from "../../dto/Cafe/CafeRepository";
import { Cafe } from "../../entities/Cafe/Cafe";
import CustomException from "../../exceptions/CustomException";
import CafeCreateRequest from "../../types/Cafe/CafeCreateRequest";

class CafeService {

    private cafeRepository: CafeRepository;

    constructor(cafeRepository: CafeRepository){
        this.cafeRepository = cafeRepository;
    }

    getAllCafe = async () => {
        return await this.cafeRepository.getAllCafe();
    }

    createCafe = async (cafeCreateRequest: CafeCreateRequest) => {
        if(!cafeCreateRequest.cafeName || !cafeCreateRequest.cafeContent) throw new CustomException("카페 이름과 내용은 필수 입력 사항입니다.", 403);

        await this.cafeRepository.createCafe(cafeCreateRequest)

    }
}

export default CafeService;