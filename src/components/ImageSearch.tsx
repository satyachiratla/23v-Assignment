import { FormEvent, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import ImageList from "./ImageList";
import Button from "@mui/material/Button";
import classes from "./ImageSearch.module.css";

export default function ImageSearch() {
  const searchInputRef = useRef<HTMLInputElement>();
  const [searchValue, setSearchValue] = useState("random");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchInputRef.current) {
      setSearchValue(searchInputRef.current.value);
    }
  };

  return (
    <div className={classes["image-search"]}>
      <form onSubmit={handleSearch} className={classes["image-field"]}>
        <TextField
          inputRef={searchInputRef}
          type="search"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          className={classes["text-field"]}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      <div>
        <ImageList searchValue={searchValue} />
      </div>
    </div>
  );
}
