import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData;

  // useEffect(() => {
  //   fetch("https://api.github.com/users/amanpawar")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, []);
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/amanpawar");
  return res.json();
};
