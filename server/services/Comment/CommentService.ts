import { stringify } from "querystring";
import CafeRepository from "../../dto/Cafe/CafeRepository";
import CommentRepository from "../../dto/Comment/CommentRepository";
import UserRepository from "../../dto/User/UserRepository";
import CustomException from "../../exceptions/CustomException";

class CommentService {

    public commentRepository: CommentRepository;
    public userRepository: UserRepository;
    public cafeRepository: CafeRepository;

    constructor(commentRepository: CommentRepository, userRepository: UserRepository, cafeRepository: CafeRepository){
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.cafeRepository= cafeRepository;
    }

    createComment = async (userId: string, cafeId: number, commentContent: string) => {
        if(!userId || !cafeId){
            throw new CustomException("잘못된 접근입니다.", 400);
        }

        if(!commentContent){
            throw new CustomException("빈 댓글은 작성할 수 없습니다.", 406);
        }

        // already certified in requireAuth
        // const userMaybe = this.userRepository.getUserById(userId);

        // if(!userMaybe){
        //     throw new CustomException("존재하지 않는 유저입니다.", 403);
        // }

        const cafeMaybe = await this.cafeRepository.getCafeByCafeId(cafeId);

        if(!cafeMaybe){
            throw new CustomException("존재하지 않는 카페입니다.", 406);
        }

        await this.commentRepository.createComment(userId, cafeId, commentContent)
        .then( res => {
            return res;
        })
        .catch((err: Error) => {
            if(err){
                throw new CustomException(err.message, 404);
            }
        });
    }

    readCommentsByCafeId = async (cafeId: number) => {
        if(!cafeId){
            throw new CustomException("잘못된 접근입니다.", 406);
        }

        const cafeMaybe = await this.cafeRepository.getCafeByCafeId(cafeId);

        if(!cafeMaybe){
            throw new CustomException("존재하지 않는 카페입니다.", 406);
        }

        try{
            const commentFound = await this.commentRepository.readCommentsByCafeId(cafeId); 
            return commentFound;
        }catch(err){
            if(err){
                throw new CustomException("댓글을 불러오는데 실패했습니다.", 404);
            }
        }
    }

    deleteComment = async (cafeId: number, userId: string, commentId: string) => {
        if(!cafeId || !userId || !commentId) {
            throw new CustomException("잘못된 접근입니다.", 406);
        }
        
        const cafeMaybe = await this.cafeRepository.getCafeByCafeId(cafeId);

        if(!cafeMaybe){
            throw new CustomException("존재하지 않는 카페입니다.", 406);
        }

        const commentMaybe = await this.commentRepository.getCommentById(commentId);

        if(!commentMaybe) {
            throw new CustomException("존재하지 않는 댓글입니다.", 406);
        }
        
        if(commentMaybe.cafeId !== cafeId){
            throw new CustomException("잘못된 접근입니다.", 403);
        }

        if(commentMaybe.ownerId !== userId){
            throw new CustomException("다른 사람의 댓글은 지울 수 없습니다.", 403);
        }

        try{
            await this.commentRepository.deleteComment(commentId);
        }catch(err){
            if(err){
                throw new CustomException("댓글을 지우는데 실패했습니다.", 404);
            }
        }
    }
}

export default CommentService;