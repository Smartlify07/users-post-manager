import { getUrl } from "./getUrl";

export const fetchLimitedPosts = async (
  setData,
  setLoading,
  setError,
  page
) => {
  try {
    const { postsUrlLimited } = getUrl(page);
    const response = await fetch(postsUrlLimited);

    const data = await response.json();
    setData(data);
    setLoading(false);
  } catch (error) {
    setError(error);
  }
};
