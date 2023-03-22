import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import RouteWrapper from "../../components/shared/RouteWrapper";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import Error from "../../components/shared/Error";
import { useSignUpMutation } from "../../redux/features/mainApi/endpoints/auth.endpoints";
// import Error from '../../common/Error';
// import LoadingSpinner from '../../common/LoadingSpinner';
// import OAuth from '../../common/OAuth';
// import RouteWrapper from '../../common/RouteWrapper';
// import { useSignUpMutation } from '../../core/features/auth/authApiSlice';
// import useBase64 from '../../hooks/useBase64';

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState<string | undefined>();
  // const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState('');
  // const [file, setFile] = useState<File>();
  // const filePickerRef = useRef<HTMLInputElement>(null);

  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validUserName, setValidUserName] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validConfirmPwd, setValidConfirmPwd] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [inputsAreValid, setInputsAreValid] = useState(false);

  const NAME_REGEX = /^[A-z][a-z ]{3,23}$/;
  const USER_REGEX = /^[a-z][a-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const nameRef = useRef<HTMLInputElement>(null);

  const [signUp, { isLoading, isError }] = useSignUpMutation();
  // const signUp = () => {};
  // const isLoading = false;
  // const isError = false;

  useEffect(() => nameRef.current?.focus(), []);

  useEffect(() => setValidFirstName(NAME_REGEX.test(firstName!)), [firstName]);

  useEffect(() => setValidLastName(NAME_REGEX.test(lastName)), [lastName]);

  useEffect(() => setValidUserName(USER_REGEX.test(userName!)), [userName]);

  useEffect(() => setValidEmail(EMAIL_REGEX.test(email)), [email]);

  useEffect(() => setValidPwd(PWD_REGEX.test(pwd)), [pwd]);

  useEffect(() => {
    confirmPwd && pwd && setValidConfirmPwd(pwd === confirmPwd);
  }, [pwd, confirmPwd]);

  // const picture = useBase64(file);

  useEffect(
    () => setInputsAreValid(validFirstName && validLastName && validUserName && validEmail && validPwd),
    [validFirstName, validLastName, validUserName, validEmail, validPwd]
  );

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    if (inputsAreValid && !isError) {
      try {
        await signUp({
          // name,
          // user,
          userName,
          firstName,
          lastName,
          email,
          password: pwd,
          confirmPassword: confirmPwd,
          // picture,
        }).unwrap();

        setFirstName(undefined);
        setUserName('');
        setEmail('');
        setPwd('');

        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <RouteWrapper>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <Wrapper>
          <Heading>Welcome to DEV Community</Heading>
          <Paragraph>DEV Community is a community of 748,239 amazing developers</Paragraph>

          {/* <OAuth /> */}

          {/* <Paragraph>Or</Paragraph> */}

          <Title>Create a new account</Title>
          <form onSubmit={handleSubmit}>
            <NameInputsRow>
              <InputContainer tw="w-1/2">
                <Label htmlFor='name'>First name</Label>
                <Input
                  ref={nameRef}
                  autoComplete='off'
                  // required
                  id='firstName'
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                {!validFirstName && firstName && <Error>Name not valid</Error>}
              </InputContainer>

              <InputContainer tw="w-1/2">
                <Label htmlFor='name'>Last name *</Label>
                <Input
                  ref={nameRef}
                  autoComplete='off'
                  required
                  id='lastName'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                {!validLastName && lastName && <Error>Name not valid</Error>}
              </InputContainer>
            </NameInputsRow>

            <InputContainer>
              <Label htmlFor='userName'>Username</Label>
              <Input
                autoComplete='off'
                // required
                id='userName'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              {!validUserName && userName && <Error>Username not valid</Error>}
            </InputContainer>

            <InputContainer>
              <Label htmlFor='email'>Email *</Label>
              <Input required id='email' value={email} onChange={e => setEmail(e.target.value)} />
              {!validEmail && email && <Error>Email not valid</Error>}
            </InputContainer>

            <InputContainer>
              <Label htmlFor='password'>Password *</Label>
              <Input
                type='password'
                id='password'
                required
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
              {!validPwd && pwd && <Error>Password not valid</Error>}
            </InputContainer>

            <InputContainer>
              <Label htmlFor='confirmPassword'>Confirm password *</Label>
              <Input
                type='password'
                id='confirmPassword'
                required
                value={confirmPwd}
                onChange={e => setConfirmPwd(e.target.value)}
              />
              {!validConfirmPwd && confirmPwd && <Error>Passwords not matching</Error>}
            </InputContainer>

            {/* <InputContainer>
              <input
                id='picture'
                type='file'
                ref={filePickerRef}
                style={{ display: 'none' }}
                onChange={e => {
                  const file = e.target.files?.[0];
                  file && setFile(file)
                }}
              />
              <ImagePreview src={picture.toString()} alt='Please pick an image' />
              <Button
                onClick={e => {
                  e.preventDefault();
                  filePickerRef.current?.click();
                }}>
                Choose image
              </Button>
            </InputContainer> */}

            {isError && <Error>Either Username or email is taken</Error>}

            <Submit>Create Account</Submit>
          </form>
        </Wrapper>
      )}
    </RouteWrapper>
  );
};

const ImagePreview = tw.img`w-32 h-32 mx-auto border border-light-gray flex justify-center items-center text-center object-cover`;

const Button = tw.button`bg-lighter-gray hover:bg-light-gray rounded-md text-center py-2 px-1 w-28 text-sm mx-auto`;

const Submit = tw.button`bg-blue text-white py-2  w-full rounded-lg`;

const Heading = tw.h1`font-bold my-6`;

const Title = tw.h2`my-6`;

const Paragraph = tw.p`my-4`;

const InputContainer = tw.div`[&>*:first-child]:(block mb-2) flex flex-col gap-2 text-left mb-8`;

const NameInputsRow = tw.div`flex gap-4`;

const Label = tw.label``;

const Input = tw.input`outline-none rounded-lg border border-solid border-light-gray w-full py-2 px-3 focus:border-blue`;

const Wrapper = tw.div`bg-white text-center max-w-2xl mx-auto py-12 px-10 rounded-md`;

export default SignUp;
