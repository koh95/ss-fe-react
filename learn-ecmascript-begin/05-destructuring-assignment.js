// --------------------------------------------------------------------------
// destructuring assignment
// - 구조 분해 할당 구문을 사용해 배열의 개별 항목 분해 및 할당
// - 구조 분해 할당 구문을 사용해 객체의 개별 항목 분해 및 할당
// - 콜백 함수의 매개변수를 구조 분해 할당하여 활용
// --------------------------------------------------------------------------

const courses = [
  {
    id: 1,
    title: 'React 펀더멘탈',
    url: 'https://fundamentals.dev/react',
  },
  {
    id: 2,
    title: 'React Router 펀더멘탈',
    url: 'https://fundamentals.dev/react-rouer',
  },
  {
    id: 3,
    title: 'Recoil 펀더멘탈',
    url: 'https://fundamentals.dev/recoil',
  },
];

function spreadArray() {
  // block scope
  {
    const reactCourse = courses[0];
    const restCourses = courses.slice(1);

    console.log(reactCourse);
    console.log(restCourses);
  }

  // 🔶 구조 분해 할당 구문을 사용해 courses 배열에서 항목을 분해 및 할당합니다.
  // 참고: https://mzl.la/3Jfrwpm

  const [reactCourse, ...restCourses] = courses; // [reactCourse, ...restCourses]

  console.log({ course: reactCourse });
  console.log({ rest: restCourses });
}

function spreadObject() {
  const [reactCourse] = courses;

  {
    let reactCourseId = reactCourse.id;
    let reactCourseTitle = reactCourse.title;
    let reactCourseUrl = reactCourse.url;

    console.log(reactCourseId);
    console.log(reactCourseTitle);
    console.log(reactCourseUrl);
  }

  // 🔶 구조 분해 할당 구문을 사용해 reactCourse 객체에서 항목을 분해 및 할당합니다.
  // 참고: https://mzl.la/3Jfrwpm

  // 별칭(alias)
  const { id: courseId, title: courseTitle, url: courseUrl } = reactCourse; // { id, title, url }
  
  console.log({ courseId });
  console.log({ courseTitle });
  console.log({ courseUrl });
}

function spreadRender() {
  const koreanFoods = {
    caption: '한식 메뉴',
    rows: [
      { headline: '뚝배기 불고기', content: 8000 },
      { headline: '스팸치즈볶음밥', content: 7500 },
      { headline: '불고기낙지덮밥', content: 9000 },
    ],
  };

  const rendredResult = renderTable(koreanFoods);
  console.log(rendredResult);

  function renderTable(data) {
    return removeSpaceHTMLString(/* html */ `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows.reduce(function (htmlString, { content, headline }) {
          // 🔶 구조 분해 할당 구문을 사용해 row 객체에서 항목을 분해 및 할당합니다.
          // 참고: https://mzl.la/3Jfrwpm

          // 매개변수 분해, 변수 할당 
          // const { headline, content } = row; // { headline, content }

          return (
            htmlString +
            /* html */ `
              <tr>
                <th>${headline}</th>
                <td>${numberWithComma(content)}원</td>
              </tr>
            `
          );
        }, '')}
      </table>
    `);
  }
}

function numberWithComma(numberValue) {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf('<') > -1 ? '<' : $1.indexOf('>') > -1 ? '>' : '';
  });
}

function run() {
  // spreadArray();
  // spreadObject();
  spreadRender();
}

run();
