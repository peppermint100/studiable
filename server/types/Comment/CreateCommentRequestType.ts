import GetAuthResultType from "../Auth/GetAuthResultType";

interface CreateCommentRequestType {
    cafeId: number;
    commentContent: string;
    user: GetAuthResultType;
}

export default CreateCommentRequestType;