import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.scss';

type Props = {
  iconSize?: string;
  iconColor?: string;
};

const SNS_ITEMS = [
  {
    id: 'x',
    href: 'https://x.com/sushiboys350',
    icon: faXTwitter,
    label: 'X',
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/people/Sushiboys/100057913514913/',
    icon: faFacebookF,
    label: 'Facebook',
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/sushiboys350/',
    icon: faInstagram,
    label: 'Instagram',
  },
  {
    id: 'tiktok',
    href: 'https://www.tiktok.com/@sushiboys350',
    icon: faTiktok,
    label: 'TikTok',
  },
  {
    id: 'youtube',
    href: 'https://www.youtube.com/user/umetube2013',
    icon: faYoutube,
    label: 'YouTube',
  },
];

export default function Social({
  iconSize = 'initial',
  iconColor = 'initial',
}: Props) {
  return (
    <ul
      className={styles.list}
      style={
        {
          '--icon-size': iconSize,
          '--icon-color': iconColor,
        } as React.CSSProperties
      }
    >
      {SNS_ITEMS.map((item) => (
        <li key={item.id}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
            <span className="srOnly">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
