import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto flex md:flex-row flex-col">
                <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2'>
                    <div className='p-4 ml-2'><SocialIcon url="https://linkedin.com/in/daniel-merillas-667b6a1a" bgColor="#FFFAFA" /></div>
                    <div className='p-4'><SocialIcon url="https://github.com/DanMerillas" bgColor="#FFFAFA" /></div>
                    <div className='p-4'><SocialIcon url="mailto:daniel.merillas@gmailcom" bgColor="#FFFAFA" /></div>
                    <div className='p-4'><SocialIcon url="https://daniel-merillas.netlify.app" label="Our portfolio" bgColor="#FFFAFA" /></div>
                </div>
            </div>
        </footer>
    );
}