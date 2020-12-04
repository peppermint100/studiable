import CafeRepository from "../../dto/Cafe/CafeRepository";
import LikeRepository from "../../dto/Like/LikeRepository";
import CustomException from "../../exceptions/CustomException";

class LikeService {
    public likeRepository: LikeRepository;
    public cafeRepository: CafeRepository;

    constructor(likeRepository: LikeRepository, cafeRepository: CafeRepository){
        this.likeRepository = likeRepository;
        this.cafeRepository = cafeRepository;
    }

    hitLike= async (userId: string, cafeId: number) => {
        const cafeMaybe = this.cafeRepository.getCafeByCafeId(cafeId);
        
        if(!cafeMaybe) {
            throw new CustomException("존재하지 않는 카페입니다.", 406);
        }

        try{
            await this.likeRepository.hitLike(userId, cafeId);
        }catch(err){
            if(err){
                throw new CustomException("좋아요 상태를 업데이트 하는데 실패했습니다.", 404);
            }
        }
    }
    unhitLike= async (userId: string, cafeId: number) => {
        const cafeMaybe = this.cafeRepository.getCafeByCafeId(cafeId);
        
        if(!cafeMaybe) {
            throw new CustomException("존재하지 않는 카페입니다.", 406);
        }

        try{
            await this.likeRepository.unhitLike(userId, cafeId);
        }catch(err){
            if(err){
                throw new CustomException("좋아요 상태를 업데이트 하는데 실패했습니다.", 404);
            }
        }
    }
}
export default LikeService;