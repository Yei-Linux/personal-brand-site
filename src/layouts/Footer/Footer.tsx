import { SocialNetworksFragment } from '@/modules/home/Hero/SocialNetworks';
import Link from 'next/link';
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
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="flex gap-8">
          <SocialNetworksFragment />
        </ul>
      </div>
      <div className="max-w-[900px] m-auto mt-[35px] flex justify-center">
        <p>@Jesus Alvan 2023</p>
      </div>
    </footer>
  );
};
