import CafeRepository from "../../dto/Cafe/CafeRepository";
import CustomException from "../../exceptions/CustomException";
import CafeCreateRequest from "../../types/Cafe/CafeCreateRequest";
import CafeUpdateRequest from "../../types/Cafe/CafeUpdateRequest";

class CafeService {

    private cafeRepository: CafeRepository;

    constructor(cafeRepository: CafeRepository){
        this.cafeRepository = cafeRepository;
    }

    getAllCafe = async () => {
        const allCafe = await this.cafeRepository.getAllCafe();
        return allCafe;  
    }

    createCafe = async (cafeCreateRequest: CafeCreateRequest) => {
        if(!cafeCreateRequest.cafeName || !cafeCreateRequest.cafeContent) throw new CustomException("카페 이름과 내용은 필수 입력 사항입니다.", 403);

        const { user: { userId }} = cafeCreateRequest;

        return await this.cafeRepository.createCafe(userId, cafeCreateRequest)
    }

    getCafeByCafeId = async (cafeId: number) => {
        if(!cafeId) throw new CustomException("잘못된 접근입니다.", 403);
        
        const cafeFound = await this.cafeRepository.getCafeByCafeId(cafeId);

        if(!cafeFound) throw new CustomException("존재하지 않는 카페입니다.", 404);

        return cafeFound;
    }

    getAllCafeByUserId = async (userId: string) => {
        if(!userId) throw new CustomException("잘못된 접근입니다.", 403);
        
        const cafeListFound = await this.cafeRepository.getAllCafeByUserId(userId);
        if(!cafeListFound) throw new CustomException("카페가 존재하지 않습니다.", 404);

        return cafeListFound;
    }

    updateCafeByCafeId = async (cafeId: number, cafeUpdateRequest: CafeUpdateRequest) => {
        const userId = cafeUpdateRequest.user?.userId;

        if(!cafeId || !cafeUpdateRequest || !userId) throw new CustomException("잘못된 접근입니다.", 403);

        const cafeFound = await this.cafeRepository.getCafeByCafeId(cafeId);
        if(!cafeFound) throw new CustomException("카페가 존재하지 않습니다.", 403);


        if(cafeFound.writerId !== userId) throw new CustomException("다른 사람의 글은 수정할 수 없습니다.", 403);

        const filteredCafeUpdateRequest: {[key: string] : any} = new Object(); // keyof 
        const entries = Object.entries(cafeUpdateRequest);

        for(let entry of entries){
            if(entry[0] === "user") continue;
            filteredCafeUpdateRequest[entry[0]] = entry[1];
        }

        try{
            const updatedCafe = await this.cafeRepository.updateCafeByCafeId(cafeId, userId, filteredCafeUpdateRequest as CafeUpdateRequest);
            return updatedCafe; 
        }catch(err){
            if(err){
                console.log(err);
                throw new CustomException("카페 정보를 수정하는데 실패했습니다.", 400);
            }
        }
    }

    deleteCafeByCafeId = async (cafeId: number, userId: string) => {

        const cafeFound = await this.cafeRepository.getCafeByCafeId(cafeId);

        if(!cafeFound) throw new CustomException("카페가 존재하지 않습니다.", 403);

        if(cafeFound.writerId !== userId) throw new CustomException("다른 사람의 글은 삭제할 수 없습니다.", 403);

        try{
            await this.cafeRepository.deleteCafeByCafeId(cafeId, userId);
        }catch(err){
            if(err){
                throw new CustomException("카페 정보를 지우는데 실패했습니다.", 406)
            }
        }
    } 
}

export default CafeService;