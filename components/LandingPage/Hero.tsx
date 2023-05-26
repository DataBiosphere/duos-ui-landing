import axios from 'axios';
import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import SubmitFailure from '../SubmitStatus/SubmitFailure';
import SubmitSuccess from '../SubmitStatus/SubmitSuccess';

export type HeroProps = {
  Title: string;
  Subtitle: string;
  Description: string;
  InputPlaceholder: string;
  ButtonText: string;
  SubmissionSuccessText?: string;
  SubmissionFailText?: string;
};


export const Hero: React.FC<HeroProps> = ({
  Title,
  Subtitle,
  Description,
  InputPlaceholder,
  ButtonText,
  SubmissionSuccessText,
  SubmissionFailText,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('/api/submit', { email })
      .then((response) => {
        if (response.status === 200) {
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitted(true);
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className='bg-daintree-600 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
              <div className='lg:py-24'>
                <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                  <span className='block'>{Title}</span>
                  <span className='block bg-gradient-to-r from-meadow-300 to-topaz-200 bg-clip-text pb-3 text-transparent sm:pb-5'>
                    {Subtitle}
                  </span>
                </h1>
                <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
                  {Description}
                </p>
                <div className='mt-10 sm:mt-12'>
                  {!isSubmitted ? (
                    <form
                      action='#'
                      className='sm:mx-auto sm:max-w-xl lg:mx-0'
                      onSubmit={registerUser}
                    >
                      <div className='sm:flex'>
                        <Input
                          id='email'
                          label='Email'
                          type='email'
                          placeholder='Email'
                          value={email}
                          required={true}
                          minLength={4}
                          onChange={handleEmailChange}
                        />
                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                          <Button formType='submit' buttonType='primary'>
                            {ButtonText}
                          </Button>
                        </div>
                      </div>
                    </form>
                  ) : isSuccess ? (
                    <SubmitSuccess text={SubmissionSuccessText} />
                  ) : (
                    <SubmitFailure text={SubmissionFailText} />
                  )}
                </div>
              </div>
            </div>
            <div className='mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                <img
                  className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='./images/illustration.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
