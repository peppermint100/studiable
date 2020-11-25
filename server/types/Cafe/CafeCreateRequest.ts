import GetAuthResultType from "../Auth/GetAuthResultType";
import Feature from "../Feature";

interface CafeCreateRequest {
    cafeName: string;
    cafeContent: string;
    cafeFeatures?: Array<Feature>;
    cafeScore?: number;
    americanoPrice?: number;
    cafeLocation?: string;
    imageLocation?: string;
    user: GetAuthResultType;
}

export default CafeCreateRequest;