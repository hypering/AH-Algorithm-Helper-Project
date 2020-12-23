import React from 'react';
import { EntityContainer } from './style';
const ResEntity = ({ num, tier, cate }) => {
  const Tiers = [
    {
      id: 1,
      name: 'Bronze 5',
    },
    {
      id: 2,
      name: 'Bronze 4',
    },

    {
      id: 3,
      name: 'Bronze 3',
    },
    {
      id: 4,
      name: 'Bronze 2',
    },
    {
      id: 5,
      name: 'Bronze 1',
    },
    {
      id: 6,
      name: 'Silver 5',
    },
    {
      id: 7,
      name: 'Silver 4',
    },

    {
      id: 8,
      name: 'Silver 3',
    },
    {
      id: 9,
      name: 'Silver 2',
    },
    {
      id: 10,
      name: 'Silver 1',
    },
    {
      id: 11,
      name: 'Gold 5',
    },
    {
      id: 12,
      name: 'Gold 4',
    },

    {
      id: 13,
      name: 'Gold 3',
    },
    {
      id: 14,
      name: 'Gold 2',
    },
    {
      id: 15,
      name: 'Gold 1',
    },
    {
      id: 16,
      name: 'Platinum 5',
    },
    {
      id: 17,
      name: 'Platinum 4',
    },

    {
      id: 18,
      name: 'Platinum 3',
    },
    {
      id: 19,
      name: 'Platinum 2',
    },
    {
      id: 20,
      name: 'Platinum 1',
    },
    {
      id: 21,
      name: 'Diamond 5',
    },
    {
      id: 22,
      name: 'Diamond 4',
    },

    {
      id: 23,
      name: 'Diamond 3',
    },
    {
      id: 24,
      name: 'Diamond 2',
    },
    {
      id: 25,
      name: 'Diamond 1',
    },
    {
      id: 26,
      name: 'Ruby 1',
    },
    {
      id: 27,
      name: 'Ruby 1',
    },
    {
      id: 28,
      name: 'Ruby 1',
    },
    {
      id: 29,
      name: 'Ruby 1',
    },
    {
      id: 30,
      name: 'Ruby 1',
    },
  ];

  return (
    <EntityContainer>
      <a href={'https://www.acmicpc.net/problem/' + num}>
        <span className="tier">
          <img src={'/Images/Tiers/' + tier + '.svg'} />
          {Tiers.find((o) => o.id == tier).name}
        </span>
        <span className="number"> {num}</span>
        <span className="cate">{cate}</span>
      </a>
    </EntityContainer>
  );
};

export default ResEntity;
