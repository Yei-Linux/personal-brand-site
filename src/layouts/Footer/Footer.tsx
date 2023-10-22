import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="p-10 bg-primary text-white text-[13px] mt-10">
      <div className="flex flex-wrap gap-3 justify-between max-w-[900px] m-auto">
        <div>
          <p className="font-bold text-[18px]">Jesus Alvan</p>
          <p>Branding Site</p>
        </div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Blog</li>
        </ul>
        <ul className="flex gap-8">
          <li>
            <AiOutlineLinkedin color="white" />
          </li>
          <li>
            <AiOutlineGithub color="white" />
          </li>
          <li>
            <AiOutlineTwitter color="white" />
          </li>
        </ul>
      </div>
      <div className="max-w-[900px] m-auto mt-[35px] flex justify-center">
        <p>@All rights reserved</p>
      </div>
    </footer>
  );
};
