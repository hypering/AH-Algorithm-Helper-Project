import React from 'react';
import { EntityContainer } from './style';
import Tier1 from 'Images/Tiers/1.svg';
import Tier2 from 'Images/Tiers/2.svg';
import Tier3 from 'Images/Tiers/3.svg';
import Tier4 from 'Images/Tiers/4.svg';
import Tier5 from 'Images/Tiers/5.svg';
import Tier6 from 'Images/Tiers/6.svg';
import Tier7 from 'Images/Tiers/7.svg';
import Tier8 from 'Images/Tiers/8.svg';
import Tier9 from 'Images/Tiers/9.svg';
import Tier10 from 'Images/Tiers/10.svg';
import Tier11 from 'Images/Tiers/11.svg';
import Tier12 from 'Images/Tiers/12.svg';
import Tier13 from 'Images/Tiers/13.svg';
import Tier14 from 'Images/Tiers/14.svg';
import Tier15 from 'Images/Tiers/15.svg';
import Tier16 from 'Images/Tiers/16.svg';
import Tier17 from 'Images/Tiers/17.svg';
import Tier18 from 'Images/Tiers/18.svg';
import Tier19 from 'Images/Tiers/19.svg';
import Tier20 from 'Images/Tiers/20.svg';
import Tier21 from 'Images/Tiers/21.svg';
import Tier22 from 'Images/Tiers/22.svg';
import Tier23 from 'Images/Tiers/23.svg';
import Tier24 from 'Images/Tiers/24.svg';
import Tier25 from 'Images/Tiers/25.svg';
import Tier26 from 'Images/Tiers/26.svg';
import Tier27 from 'Images/Tiers/27.svg';
import Tier28 from 'Images/Tiers/28.svg';
import Tier29 from 'Images/Tiers/29.svg';
import Tier30 from 'Images/Tiers/30.svg';
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
  const getTier = (tier) => {
    switch (tier) {
      case 1: {
        return Tier1;
      }
      case 2:
        return Tier2;
      case 3:
        return Tier3;
      case 4:
        return Tier4;
      case 5:
        return Tier5;
      case 6:
        return Tier6;
      case 7:
        return Tier7;
      case 8:
        return Tier8;
      case 9:
        return Tier9;
      case 10:
        return Tier10;
      case 11:
        return Tier11;
      case 12:
        return Tier12;
      case 13:
        return Tier13;
      case 149:
        return Tier14;
      case 15:
        return Tier15;
      case 16:
        return Tier16;
      case 17:
        return Tier17;
      case 18:
        return Tier18;
      case 19:
        return Tier19;
      case 20:
        return Tier20;
      case 21:
        return Tier21;
      case 22:
        return Tier22;
      case 23:
        return Tier23;
      case 24:
        return Tier24;
      case 25:
        return Tier25;
      case 26:
        return Tier26;
      case 27:
        return Tier27;
      case 28:
        return Tier28;
      case 29:
        return Tier29;
      case 30:
        return Tier30;
    }
  };
  console.log(getTier(tier));
  return (
    <EntityContainer>
      <a href={'https://www.acmicpc.net/problem/' + num}>
        <span className="tier">

          <img src={getTier(tier)} />


          {Tiers.find((o) => o.id == tier).name}
        </span>
        <span className="number"> {num}</span>
        <span className="cate">{cate}</span>
      </a>
    </EntityContainer>
  );
};

export default ResEntity;
