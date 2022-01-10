import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({
        type: 'GET_POST_DATA',
        payload: data,
      });
    };
    getPosts();
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