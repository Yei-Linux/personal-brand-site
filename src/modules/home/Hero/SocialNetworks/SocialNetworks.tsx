import Link from 'next/link';
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

export const SocialNetworksFragment = () => (
  <>
    <li className="text-[30px]">
      <Link href="https://www.linkedin.com/in/cesar-jesus-alberto-alvan-huarcaya-0a6584194">
        <AiOutlineLinkedin />
      </Link>
    </li>
    <li className="text-[30px]">
      <Link href="https://github.com/Yei-Linux">
        <AiOutlineGithub />
      </Link>
    </li>
    <li className="text-[30px]">
      <Link href="https://twitter.com/LinuxYei">
        <AiOutlineTwitter />
      </Link>
    </li>
  </>
);

export const SocialNetworks = () => {
  return (
    <div className="h-full mt-10">
      <ul className="flex flex-col justify-center gap-3">
        <SocialNetworksFragment />
      </ul>
    </div>
  );
};
