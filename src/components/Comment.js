import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../store/index';

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
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