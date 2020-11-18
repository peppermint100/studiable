import { User } from './../../entities/User/User';
import AuthRepository from "../../dto/Auth/AuthRepository";
import UserRepository from "../../dto/User/UserRepository";
import FilteredRegisterRequest from "../../types/Auth/FilteredRegisterRequest";
import RegisterRequest from "../../types/Auth/RegisterRequest";

class AuthService {

    private authRepository: AuthRepository;
    private userRepository: UserRepository;

    constructor(authRepository: AuthRepository, userRepository: UserRepository){
        this.authRepository = authRepository;
        this.userRepository = userRepository;
    }

    async signup({ username, email, password, confirmPassword }: RegisterRequest){

        if(password !== confirmPassword){
            return new Error("두 비밀번호가 서로 일치하지 않습니다.");
        }

        const userMaybe = await this.userRepository.getUserByEmail(email);

        if(!userMaybe){
            return new Error("이미 존재하는 이메일입니다.");
        }

        const filteredRegisterRequest: FilteredRegisterRequest = {
            username,
            email,
            password
        };

        this.authRepository.signup(filteredRegisterRequest);
    }
}

export default AuthService;