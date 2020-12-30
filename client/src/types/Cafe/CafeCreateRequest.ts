import { CurrentUserType } from "../Auth/CurrentUserType";
import Feature from "../Feature";

interface CafeCreateRequest {
    cafeName: string;
    cafeContent: string;
    cafeFeatures?: Array<Feature>;
    cafeScore?: number;
    americanoPrice?: number;
    cafeLocationLat?: number;
    cafeLocationLng?: number;
    imageLocation?: string;
    user: CurrentUserType;
}

export default CafeCreateRequest;