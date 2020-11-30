import CafeCreateRequest from "./CafeCreateRequest";

type CafeUpdateRequest = {
    [P in keyof CafeCreateRequest]?: CafeCreateRequest[P];
}

export default CafeUpdateRequest;