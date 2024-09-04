import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostsActions from '../Redux/Posts';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const GetExample = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(PostsActions.postsGet());
  }, [dispatch]);

  return (
    <div>
      <Container className="pt-4 pb-4">
        <h1>API Get Example</h1>
        <p>Here is your data, served as props to your container, after fetched from custom API endpoint.</p>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="20"
            value={typeof posts.data !== 'undefined' ? JSON.stringify(posts.data) : ''}
            onChange={() => {}} // This keeps the textarea non-editable as before
          />
        </Form.Group>
      </Container>
    </div>
  );
};

GetExample.propTypes = {
  posts: PropTypes.object,
};

export default GetExample;
