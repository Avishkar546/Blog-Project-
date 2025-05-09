import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../component";
import appwriteService from "../appwrite/databases.service";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    appwriteService.getPost({slug}).then((res) => {
      if (res) {
        setPost(res);
      } else navigate("/");
    });
  });

  console.log(post);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <>
      <h2>No form to edit</h2>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default EditPost;
