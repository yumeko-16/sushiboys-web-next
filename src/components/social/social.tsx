import styles from './social.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

type Props = {
  iconSize?: string;
  iconColor?: string;
};

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
      <li>
        <a
          href="https://x.com/sushiboys350"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
          <span className="sr-only">X</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/people/Sushiboys/100057913514913/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/sushiboys350/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@sushiboys350"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
          <span className="sr-only">TikTok</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/user/umetube2013"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
          <span className="sr-only">YouTube</span>
        </a>
      </li>
    </ul>
  );
}
