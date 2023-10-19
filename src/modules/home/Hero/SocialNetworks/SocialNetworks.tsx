import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

export const SocialNetworks = () => {
  return (
    <div className="h-full mt-10">
      <ul className="flex flex-col justify-center gap-3">
        <li>
          <AiOutlineLinkedin />
        </li>
        <li>
          <AiOutlineGithub />
        </li>
        <li>
          <AiOutlineTwitter />
        </li>
      </ul>
    </div>
  );
};
