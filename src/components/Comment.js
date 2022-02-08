import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    //通常のreduxでの非同期処理はuseEffect内に関数を定義している
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      // action.typeとaction.payloadの形でstore側で取得される
      dispatch({
        type: 'GET_POST_DATA',
        payload: data,
      });
    };
    getPosts();
    //staticであることが保証されているため第二引数のdispatchは入力しなくても良いらしい
  }, [dispatch]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.title}</li>
      ))}
    </ul>
  );
};

export default Comment;