import AuthRepository from "../../dto/Auth/AuthRepository";
import UserRepository from "../../dto/User/UserRepository";
import CustomException from "../../exceptions/CustomException";
import FilteredRegisterRequest from "../../types/Auth/FilteredRegisterRequest";
import LoginRequest from "../../types/Auth/LoginRequest";
import RegisterRequest from "../../types/Auth/RegisterRequest";
import BcryptEncoder from '../../utils/BcryptEncoder';
import JwtService from "../../utils/JwtService";


class AuthService {

    private authRepository: AuthRepository;
    private userRepository: UserRepository;
    private bcryptEncoder: BcryptEncoder;
    private jwtService: JwtService;
    private static bearer: string = "Bearer ";

    constructor(
        authRepository: AuthRepository
        ,userRepository: UserRepository
        ,bcryptEncoder: BcryptEncoder,
        jwtService: JwtService)
    {
        this.authRepository = authRepository;
        this.userRepository = userRepository;
        this.bcryptEncoder = bcryptEncoder;
        this.jwtService = jwtService;
    }

    async signup({ username, email, password, confirmPassword }: RegisterRequest){

        if(password !== confirmPassword){
            throw new CustomException("두 비밀번호가 서로 일치하지 않습니다.", 403);
        }

        const userMaybe = await this.userRepository.getUserByEmail(email);

        if(userMaybe){
            throw new CustomException("이미 존재하는 이메일입니다.", 403);
        }

        const hashedPassword = await this.bcryptEncoder.encode(password);
        if(!hashedPassword){
            throw new CustomException("비밀번호 암호화 과정에서 오류가 발생했습니다.", 403);
        }

        const filteredRegisterRequest: FilteredRegisterRequest = {
            username,
            email,
            password: hashedPassword
        };

        this.authRepository.signup(filteredRegisterRequest);
    }

    async login({ email, password }: LoginRequest){
        // check email
        const userMaybeByEmail = await this.userRepository.getUserByEmail(email);

        if(!userMaybeByEmail){
            throw new CustomException("유효하지 않은 이메일 입니다.", 403);
        }
        // check password
        const decoded = await this.bcryptEncoder.compare(password, userMaybeByEmail.password);

        if(!decoded){
            throw new CustomException("유효하지 않은 비밀번호 입니다.", 403);
        }

        // create jwt

        const username = userMaybeByEmail.username;
        const token = AuthService.bearer.concat(this.jwtService.sign(email, username));

        // return jwt
        return token;
    }

    // valid jwt to persist authentication or do some serious work
    getAuth = async (token: string) => {
        const peeledToken = token.replace(AuthService.bearer, "");
        return this.jwtService.verify(peeledToken);
    }

}

export default AuthService;