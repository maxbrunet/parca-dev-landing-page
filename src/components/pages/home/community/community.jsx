import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import DiscordIcon from './images/discord.inline.svg';
import PlayIcon from './images/play.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import YoutubeIcon from './images/youtube.inline.svg';

const title = 'Join the community! Join users and companies that are using Parca in production:';
const icons = [
  { label: 'Slack', icon: SlackIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Discord', icon: DiscordIcon },
  { label: 'YouTube', icon: YoutubeIcon },
];
const subtitle = 'Join us on a bi-weekly public meetings:';

const Community = () => {
  const { image1, image2, image3, image4, image5, image6 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/home/community/image-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image2: file(relativePath: { eq: "pages/home/community/image-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image3: file(relativePath: { eq: "pages/home/community/image-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image4: file(relativePath: { eq: "pages/home/community/image-4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image5: file(relativePath: { eq: "pages/home/community/image-5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image6: file(relativePath: { eq: "pages/home/community/image-6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `);

  const items = [
    {
      cover: image1,
      description: 'Parca Office Hours (2022-03-24)',
    },
    {
      cover: image2,
      description: 'Parca Office Hours (2022-03-10)',
    },
    {
      cover: image3,
      description: 'Parca Office Hours (2022-02-24)',
    },
    {
      cover: image4,
      description: 'Parca Office Hours (2022-02-08)',
    },
    {
      cover: image5,
      description: 'Parca Office Hours (2022-03-10)',
    },
    {
      cover: image6,
      description: 'Parca Office Hours (2022-03-24)',
    },
  ];
  return (
    <section className="safe-paddings mt-96 bg-black pt-40 pb-[200px] text-white lg:mt-64 lg:pt-28 lg:pb-36 md:mt-48 md:pt-20 md:pb-24 sm:mt-28 sm:pt-14 sm:pb-20">
      <div className="container">
        <h2 className="heading-6xl">{title}</h2>
        <ul className="mt-16 flex space-x-11 lg:mt-12 lg:space-x-8 md:mt-10 md:space-x-7 sm:mt-7 sm:space-x-5">
          {icons.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon
                className="h-[104px] w-[104px] lg:h-20 lg:w-20 md:h-[72px] md:w-[72px] sm:h-14 sm:w-14"
                aria-label={label}
              />
            </li>
          ))}
        </ul>
        <h3 className="heading-5xl mt-40 lg:mt-32 md:mt-20 sm:mt-16">{subtitle}</h3>
        <div className="sm:-mx-4">
          <ul
            className={clsx(
              'grid-gap-x mt-16 grid grid-cols-3 gap-y-16',
              'lg:mt-12 lg:gap-y-14',
              'md:mt-10 md:grid-cols-2 md:gap-y-11',
              'sm:scrollbar-hidden sm:mt-6 sm:flex sm:overflow-auto sm:pl-4 sm:after:basis-4'
            )}
          >
            {items.map(({ cover, description }, index) => (
              <li className="sm:shrink-0 sm:grow-0 sm:basis-[242px]" key={index}>
                <div className="relative">
                  <GatsbyImage
                    className="rounded-lg"
                    imgClassName="rounded-lg"
                    image={getImage(cover)}
                    loading="lazy"
                    alt="Cover"
                  />
                  <PlayIcon
                    className="absolute top-4 left-4 h-12 w-12 lg:h-10 lg:w-10 md:h-11 md:w-11"
                    aria-hidden
                  />
                </div>
                <p className="mt-4 text-lg">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;
