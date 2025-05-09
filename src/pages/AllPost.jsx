import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/databases.service";
import { Container, PostCard } from "../component";

const AllPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    appwriteService
      .getAllPost([])
      .then((res) => setPost(res.documents))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
