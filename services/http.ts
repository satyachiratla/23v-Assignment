import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY;
const CLIENT_ID = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchPhotos(
  searchValue: string,
  page: number,
  itemsPerPage: number
) {
  try {
    const response = await axios.get(
      `${API_URL}?query=${searchValue}&page=${page}&per_page=${itemsPerPage}&client_id=${CLIENT_ID}`
    );

    const data = response?.data?.results;

    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
