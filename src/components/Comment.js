import { useEffect } from 'react';
// storeからstateを取得、storeデータ更新用関数を取得
import { useSelector, useDispatch } from 'react-redux';
// store側で定義したdispatchを返す関数を取得
import { getComments } from '../store/index';

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    //引数にstore側で定義したdispatchを返却するメソッドを渡している
    dispatch(getComments());
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