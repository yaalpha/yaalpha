import { FC } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';
import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa';
import '../styles/ProfileCard.scss';

interface Skill {
  name: string;
  Icon: React.ComponentType<{ size: number }>;
}

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ avatarUrl, name, title }) => {
  const skills: Skill[] = [
    { name: 'React', Icon: FaReact },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Node.js', Icon: FaNodeJs },
    { name: 'Vite', Icon: SiVite },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Git', Icon: FaGitAlt }
  ];

  const socials = [
    { name: 'GitHub', Icon: FaGithub, url: 'https://github.com/yaalpha' },
    { name: 'Telegram', Icon: FaTelegram, url: 'https://t.me/yaalpha' },
    { name: 'Discord', Icon: FaDiscord, url: 'https://discord.gg/Wk7wSCCC2M' }
  ];

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-card__avatar-container">
          <img src={avatarUrl} alt={name} className="profile-card__avatar" />
        </div>
        <div className="profile-card__content">
          <h1 className="profile-card__name">{name}</h1>
          <p className="profile-card__title">{title}</p>
          <div className="profile-card__skills">
            {skills.map((skill, index) => (
              <div key={index} className="profile-card__skill-item" title={skill.name}>
                <skill.Icon size={32} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="social-links">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-links__item"
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};
