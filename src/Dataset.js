const Data = {
  init: {
    answers: [
      { content: "自己紹介をお願いします！", nextId: "introduction", id: 1 },
      {
        content: "これまでの経歴を教えてください！",
        nextId: "background",
        id: 2,
      },
      {
        content: "今何に力を入れていますか？",
        nextId: "programming",
        id: 3,
      },
      { content: "スカウトしたい！", nextId: "scout", id: 4 },
    ],
    question: "こんにちは！山根佑介です！ご用件はなんでしょうか？",
  },
  introduction: {
    answers: [
      {
        content: "TAISIプログラムについて知りたい！",
        nextId:
          "https://www.waseda.jp/fsss/sss/about/contemporary-jp-studies-program/",
        id: 1,
      },
      {
        content: "早稲田大学について知りたい！",
        nextId: "https://www.waseda.jp/top/",
        id: 2,
      },
      { content: "問い合わせる", nextId: "contact", id: 3 },
      { content: "最初の質問に戻る", nextId: "init", id: 4 },
    ],
    question:
      "早稲田大学社会科学部2年生の山根佑介です。小学六年生から高校卒業までの5年半の間、アメリカのカリフォルニア州で暮らしていました！大学では、TAISIプログラムという社会科学部の英語プログラムで、SDGsをベースに様々な社会、環境、経済問題について研究してます！現在は、大学を休学し、プログラミング学習に励んでいます！",
  },

  background: {
    answers: [
      {
        content: "何か資格は持っていますか？",
        id: 1,
        nextId: "qualification",
      },
      {
        content: "お迎えシスターについて詳しく知りたい！",
        nextId: "https://omsister.com/",
        id: 2,
      },
      { content: "最初の質問に戻る", nextId: "init", id: 3 },
    ],
    question:
      "私は、小学6年生の時に父の転勤によりアメリカのカリフォルニア州に移住しました。現地では、2014年に中学校、そして2018年に高校を卒業しました。高校卒業後、日本に帰国し、2019年に早稲田大学社会科学部に入学しました。職歴としては、現在、GAPのアパレル店員、そしてお迎えシスターという迎えと英語の指導を行うサービスで、英語の家庭教師としてアルバイトをしています。",
  },
  programming: {
    answers: [
      {
        content: "どうやって勉強してるの？",
        nextId: "study_method",
        id: 1,
      },
      {
        content: "プログラミングを始めたきっかけは？",
        nextId: "reason_for_programming",
        id: 2,
      },
      {
        content: "成果物が見たい！",
        nextId: "portfolio",
        id: 3,
      },
      { content: "最初の質問に戻る", nextId: "init", id: 4 },
    ],
    question:
      "私は、春学期から大学を休学して、プログラミングの勉強に力を入れてます！エンジニアを目指し、現在はHTML , CSS, Javascript, React, そしてReact Nativeを学習してます！",
  },
  scout: {
    answers: [
      {
        content: "メールで連絡する！",
        nextId: "contact",
        id: 1,
      },
      {
        content: "Wantedlyから連絡する！",
        nextId: "https://www.wantedly.com/id/team_grizi",
        id: 2,
      },
      { content: "最初の質問に戻る", nextId: "init", id: 3 },
    ],
    question:
      "ありがとうございます！Wantedly、またはメールでのご連絡をお願い致します！",
  },
  study_method: {
    answers: [
      {
        content: "Udemyについて詳しく知りたい！",
        nextId: "https://www.udemy.com/",
        id: 1,
      },

      { content: "最初の質問に戻る", nextId: "init", id: 2 },
    ],
    question: "Udemyというオンライン学習サービスを利用して勉強しています！",
  },

  reason_for_programming: {
    answers: [
      {
        content: "Javascriptについて詳しく知りたい！",
        nextId: "https://developer.mozilla.org/ja/docs/Web/Tutorials",
        id: 1,
      },
      { content: "問い合わせる", nextId: "contact", id: 2 },
      { content: "最初の質問に戻る", nextId: "init", id: 3 },
    ],
    question:
      "友人にプログラミングの共同開発をやらないかと誘われた際に、HTMLとCSSを勉強して手伝い、その延長線上としてJavascriptを勉強しました！そこでJavascriptでは何が作れるのか調べた時に、自分の身近にあるSNSなどのアプリが作れる事を知り、自分もこのようなサービスも作ってみたいと考え、プログラミング学習を本格的に始めました！",
  },
  portfolio: {
    answers: [
      {
        content: "Wantedlyから閲覧する！",
        nextId: "https://www.wantedly.com/id/team_grizi",
        id: 1,
      },
      {
        content: "ポートフォリオから閲覧する！",
        nextId: "https://yusukey7grizi.github.io/personal-portfolio-website/#/",
        id: 2,
      },
      {
        content: "GitHubでコードを閲覧する！",
        nextId: "https://github.com/yusukey7grizi",
        id: 3,
      },
      { content: "最初の質問に戻る", nextId: "init", id: 4 },
    ],
    question:
      "私自身のポートフォリオ、そしてWantedlyのプロフィールから閲覧することができます！GitHubからは成果物のコードを確認することができます！",
  },
  qualification: {
    answers: [
      {
        content: "英検について知りたい！",
        nextId: "https://www.eiken.or.jp/eiken/",
        id: 1,
      },
      { content: "最初の質問に戻る", nextId: "init", id: 3 },
    ],
    question:
      "私自身、2019年3月に実用英語技能検定1級、そして2020年3月に普通自動車免許を取得しました！",
  },
};
export default Data;
