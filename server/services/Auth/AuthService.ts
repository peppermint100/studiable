import AuthRepository from "../../dto/Auth/AuthRepository";
import UserRepository from "../../dto/User/UserRepository";
import FilteredRegisterRequest from "../../types/Auth/FilteredRegisterRequest";
import RegisterRequest from "../../types/Auth/RegisterRequest";
import BcryptEncoder from '../../utils/BcryptEncoder';

class AuthService {

    private authRepository: AuthRepository;
    private userRepository: UserRepository;
    private bcryptEncoder: BcryptEncoder;

    constructor(
        authRepository: AuthRepository
        ,userRepository: UserRepository
        ,bcryptEncoder: BcryptEncoder)
    {
        this.authRepository = authRepository;
        this.userRepository = userRepository;
        this.bcryptEncoder = bcryptEncoder;
    }

    async signup({ username, email, password, confirmPassword }: RegisterRequest){

        if(password !== confirmPassword){
            throw new Error("두 비밀번호가 서로 일치하지 않습니다.");
        }

        const userMaybe = await this.userRepository.getUserByEmail(email);

        if(userMaybe){
            throw new Error("이미 존재하는 이메일입니다.");
        }

        // encrypt password
        const hashedPassword = await this.bcryptEncoder.encode(password);
        if(!hashedPassword){
            throw new Error("비밀번호 암호화 과정에서 오류가 발생했습니다.");
        }

        const filteredRegisterRequest: FilteredRegisterRequest = {
            username,
            email,
            password: hashedPassword
        };

        this.authRepository.signup(filteredRegisterRequest);
    }
}

export default AuthService;