import Feature from "../Feature";

interface CafeDataTypeClient {
    cafeId: number;
    cafeName: string;
    cafeContent: string;
    cafeFeatures?: Array<Feature>;
    cafeScore?: number;
    americanoPrice?: number;
    cafeLocationLat?: number;
    cafeLocationLng?: number;
    imageLocation?: string;
    createAt?: Date;
    writedId: string;
    writer: any;
    comments: Array<any>;
    likes: Array<any>;
}

export default CafeDataTypeClient;