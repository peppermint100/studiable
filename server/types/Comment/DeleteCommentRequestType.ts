import GetAuthResultType from "../Auth/GetAuthResultType";

interface DeleteCommentRequestType {
    cafeId: number;
    commentId: string;
    user: GetAuthResultType;
}

export default DeleteCommentRequestType;