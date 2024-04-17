import { useState, Component } from 'react';
import { Description, Headline, Link } from './components';
import { getPublic } from './utils';

// class state(data)
// function ...

// React Hooks (2019+) = 훅 함수
// function state(data)

// eslint-disable-next-line no-unused-vars
class _App extends Component {
  state = {
    headline: '리액트 러닝 가이드',
    description:
      '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.',
    link: {
      className: 'button',
      href: 'https://react.dev',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'react.dev',
    },
  };

  // re-render
  // class.render()
  // function()
  // function()
  render() {
    const { headline, description, link } = this.state;
    const announceText = '리액트 공식 문서 (새 탭 열림)';
    const imageStyles = {
      blockSize: 12,
      inlinleSize: 12,
      verticalAlign: -1,
    };

    return (
      <main className="learn" data-testid="app">
        <Headline>{headline}</Headline>
        <Description message={description}></Description>
        <Link
          className={link.className}
          href={link.href}
          target={link.target}
          rel={link.rel}
          data-json-string={JSON.stringify(link)}
          aria-label={announceText}
          title={announceText}
        >
          <img
            src={getPublic('react.svg')}
            alt="리액트 공식 문서"
            style={imageStyles}
          />{' '}
          {link.text}
        </Link>
      </main>
    );
  }
}

// 선언형 프로그래밍
// 함수 컴포넌트는 재조정(re-render, reconciliation)될 때
// 이전에 실행될 때 기억(memory, like snapshot)된 값과
// 현재 실행될 때 값을 비교해서 변경 사항이 감지되면
// 화면(실제 DOM)을 업데이트 한다.

let temp = {};

function App() {
  // FLUX => React, Redux
  // 불변(immutable) 데이터 관리
  // 함수가 실행된 시점에서 상태 값은 변경할 수 없다.
  // tuple [state, setState]
  const [headline] = useState('리액트 러닝 가이드');
  const [description] = useState(
    '리액트 라이브러리를 사용해 사용자 인터페이스를 구축하는 방법을 학습합니다.'
  );

  let [number, setNumber] = useState(1000);
  const handleUpdateTheScreen = () => {
    // 선언형 프로그래밍 (React, Svelte, Vue, ...)
    const nextNumber = number + 100;
    // 리액트 렌더 트리거(요청)
    setNumber(nextNumber);
    console.log('REACT: [trigger]');

    // 명령형 프로그래밍 (DOM Script, jQuery)
    // mutation state ❌
    // number += 100; // 1100
    // console.log(number);
    // document.querySelector('button').textContent = number.toString();
  };

  const announceText = '리액트 공식 문서 (새 탭 열림)';

  // LOCAL VARIABLE
  // Component State (memo)
  const [imageStyles] = useState({
    blockSize: 12,
    inlinleSize: 12,
    verticalAlign: -1,
  });

  console.log('temp vs. imageStyles 비교', Object.is(temp, imageStyles));
  console.log({ temp });
  console.log({ imageStyles });

  temp = imageStyles;

  // COMPONENT STATE (MEMOIZED)
  const [link] = useState({
    className: 'button',
    href: 'https://react.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
    text: 'react.dev',
  });

  console.log('REACT: [render]');
  console.log('화면(DOM): 변경된 부분만 [commit]');

  return (
    <main className="learn" data-testid="app">
      <Headline>{headline}</Headline>
      <Description message={description}></Description>
      <div style={{ marginBlockEnd: 30 }}>
        <button type="button" onClick={handleUpdateTheScreen}>
          {number}
        </button>
      </div>
      <Link
        className={link.className}
        href={link.href}
        target={link.target}
        rel={link.rel}
        data-json-string={JSON.stringify(link)}
        aria-label={announceText}
        title={announceText}
      >
        <img
          src={getPublic('react.svg')}
          alt="리액트 공식 문서"
          style={imageStyles}
        />{' '}
        {link.text}
      </Link>
    </main>
  );
}

export default App;
