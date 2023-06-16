import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import axios from "axios";
import { PostSummary } from "@/types/posts";
import { GeneralResponse } from "../api/GeneralResponse";
import { UserInfo } from "@/types/users";

// type PageProps = {profilePicture: string, firstName: string, lastName: string, followersCount: number, followingCount: number, };
type PageProps = {
  user: UserInfo;
  posts: PostSummary[];
  lists: unknown[];
  publications: unknown[];
};
type PageParams = { username: string };

export default function Profile(props: PageProps) {
  const router = useRouter();
  console.log(router);
  const { username } = router.query;
  return <div>tess</div>;
}

export const getServerSideProps: GetServerSideProps<
  PageProps,
  PageParams
> = async (params) => {
  let resolve: (value: GetServerSidePropsResult<PageProps>) => void = () => {};
  const promise = new Promise<GetServerSidePropsResult<PageProps>>((res) => {
    resolve = res;
  });
  if (params.params) {
    const { username } = params.params;
    Promise.all([
      axios.get<GeneralResponse<UserInfo>>(
        `http://localhost:3000/api/users/userInfo?username=${username}`
      ),
      axios.get<GeneralResponse<PostSummary[]>>(
        `http://localhost:3000/api/users/userPosts?username=${username}`
      ),
      axios.get<GeneralResponse<unknown[]>>(
        `http://localhost:3000/api/users/userLists?username=${username}`
      ),
      axios.get<GeneralResponse<unknown[]>>(
        `http://localhost:3000/api/users/userPublications?username=${username}`
      ),
    ]).then((result) => {
      const [
        userInfoResponse,
        userPostsResponse,
        userListsResponse,
        userPublicationsResponse,
      ] = result;
      if (
        userInfoResponse.data.result &&
        userPostsResponse.data.result &&
        userListsResponse.data.result &&
        userPublicationsResponse.data.result
      )
        resolve({
          props: {
            user: userInfoResponse.data.result,
            posts: userPostsResponse.data.result,
            lists: userListsResponse.data.result,
            publications: userPublicationsResponse.data.result,
          },
        });
    });
  }
  return promise;
};
