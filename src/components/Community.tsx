import { useState } from 'react';

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '🏠 아파트 시설 이용 꿀팁 공유!', content: '공용 시설 예약 방법에 대한 팁을 공유합니다.' },
    { id: 2, title: '💬 자유로운 대화 공간', content: '궁금한 점을 자유롭게 질문하세요!' },
    { id: 3, title: '📢 공지: 새로운 예약 시스템 도입', content: '더 편리한 예약 시스템이 도입되었습니다.' }
  ]);

  return (
    <main className="flex flex-col pt-30 items-center w-screen h-screen bg-main-black text-main-white pt-10 px-5">
      <h1 className="text-3xl font-bold text-main-orange mb-5">커뮤니티</h1>

      {/* 게시글 리스트 */}
      <section className="w-full flex flex-col gap-4">
        {posts.map((post) => (
          <article key={post.id} className="p-4 bg-main-black border border-main-orange rounded-xl">
            <h2 className="text-lg font-semibold text-main-orange">{post.title}</h2>
            <p className="text-sm text-main-white mt-1">{post.content}</p>
          </article>
        ))}
      </section>

      {/* 글쓰기 버튼 */}
      <button className="mt-6 px-6 py-3 bg-main-orange text-main-white font-semibold rounded-lg">
        글쓰기 ➕
      </button>
    </main>
  );
};

export default Community;
