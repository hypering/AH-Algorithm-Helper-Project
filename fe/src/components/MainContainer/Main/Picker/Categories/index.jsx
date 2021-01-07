import React from 'react';
import { Container, Categories, Subtitle } from './style';
import Category from './Category/index';
const CategoryContainer = ({ selectedCate, setSelectedCate }) => {
  const categories = [
    '수학',
    '다이나믹 프로그래밍',
    '구현',
    '그래프 이론',
    '자료 구조',
    '그리디 알고리즘',
    '그래프 탐색',
    '문자열',
    '세그먼트 트리',
    '브루트포스 알고리즘',
    '트리',
    '이분 탐색',
    '정렬',
    '기하학',
    '정수론',
    '너비 우선 탐색',
    '사칙 연산',
    '조합론',
    '깊이 우선 탐색',
    '다익스트라',
    '누적 합',
    '시뮬레이션',
    '비트마스킹',
    '백트래킹',
    '분리 집합',
    '분할 정복',
    '구성적',
    '스위핑',
    '소수판정',
    '애드 혹',
    '최대 유량',
    '우선순위 큐',
    '최소 스패닝 트리',
    '최소 공통 조상',
    '에라토스테네스의 체',
    '플로이드-와샬',
    '게임 이론',
    '스택',
    '재귀',
    '해싱',
  ];
  categories.sort();
  return (
    <Container>
      <div>
        <Subtitle>알고리즘 분류</Subtitle>
      </div>
      <Categories>
        {categories.map((element) => (
          <Category
            key={element}
            name={element}
            selectedCate={selectedCate}
            setSelctedCate={setSelectedCate}
          ></Category>
        ))}
      </Categories>
    </Container>
  );
};
export default CategoryContainer;
