import { ChangeEvent, useEffect, useState } from "react";
import { fetchPhotos } from "../../services/http";
import Pagination from "@mui/material/Pagination";
import classes from "./ImageList.module.css";
import { Link } from "react-router-dom";

export type Image = {
  id: string;
  description: string;
  urls: { small: string };
};

type ImageListProps = {
  searchValue: string;
};

export default function ImageList({ searchValue }: ImageListProps) {
  const [data, setData] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState<Image[]>([]);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await fetchPhotos(searchValue, page, itemsPerPage);
        setData(data);
        setDataPerPage(data.slice(0, itemsPerPage));
        console.log("res--->", data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, [page, searchValue]);

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const startIndex = (value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDataPerPage(data.slice(startIndex, endIndex));
  };

  return (
    <>
      <ul className={classes["image-list"]}>
        {dataPerPage.map((item: Image) => (
          <li key={item.id}>
            <Link
              to="/details"
              state={{
                imageId: item?.id,
                imageUrl: item?.urls.small,
                description: item?.description,
              }}
            >
              <img src={item.urls.small} alt={item.description} />
              <p className={classes.title}>{item?.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        count={10}
        className={classes.pagination}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
}
