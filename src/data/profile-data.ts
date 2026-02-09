import { FaGithub, FaTiktok, FaYoutube} from "react-icons/fa";

export const ProfileData = {
    avatar: "https://avatars.githubusercontent.com/u/97989578?v=4",
    name: "Lorem Ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    links: [
        {
            name: "Youtube",
            icon: FaYoutube,
            url: "https://www.youtube.com/channel/UC3uqxJJpvfPfrAX7OpeEEOg",
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/Cyan512"
        },
        {
            name: "TikTok",
            icon: FaTiktok,
            url: "https://www.tiktok.com/@_cyan_512"
        }
    ],
};